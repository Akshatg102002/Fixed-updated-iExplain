
import React, { useState, useEffect } from 'react';
import { 
  db, 
  collection, 
  getDocs, 
  addDoc, 
  deleteDoc, 
  doc, 
  updateDoc,
  setDoc,
  serverTimestamp 
} from '../firebase.ts';
import { Blog, BlogCategory, SiteSettings, MediaItem, VideoStory, CollegeDetailData } from '../types';
import { LOGO_URL, FOOTER_COLLEGES, INDIA_COURSES_DETAILED, COLLEGE_DETAILS as LEGACY_COLLEGE_DETAILS } from '../data.ts';
import { MBBS_ABROAD_DETAILED } from '../mbbs_data.ts';
import { STUDY_ABROAD_DETAILED } from '../studyAbroad_Data.ts';
import { COLLEGE_DETAILS as STRUCTURED_COLLEGE_DETAILS } from '../collegeData.ts';
import { STUDY_ABROAD_COLLEGE_DETAILS } from '../studyAbroadCollegeData.ts';
import { MBBS_IN_INDIA_DETAILS } from '../MBBSinindiadata.ts';
import { ENTRANCE_EXAM_DETAILS } from '../EntranceExamdata.ts';
import MediaManager from './MediaManager';

type AdminTab = 'dashboard' | 'blogs' | 'categories' | 'colleges' | 'pages' | 'entries' | 'media' | 'stories' | 'settings';
type ViewMode = 'list' | 'create' | 'edit';

type DynamicPageCategory = 'MBBS Abroad' | 'Study Abroad' | 'Study in India' | 'MBBS in India' | 'Colleges' | 'Entrance Exams';

const hasSeoConfigured = (seo: any) => {
  if (!seo || typeof seo !== 'object') return false;
  const hasTextField = [seo.focusKeyphrase, seo.seoTitle, seo.metaTitle, seo.slug, seo.metaDescription]
    .some(value => typeof value === 'string' && value.trim().length > 0);
  const hasStructuredData = seo.structuredData && (
    (typeof seo.structuredData === 'string' && seo.structuredData.trim().length > 0)
    || (typeof seo.structuredData === 'object' && Object.keys(seo.structuredData).length > 0)
  );
  return hasTextField || hasStructuredData;
};

const isPlainObject = (value: any) => !!value && typeof value === 'object' && !Array.isArray(value);

const setByPath = (obj: any, path: (string | number)[], value: any) => {
  const root = Array.isArray(obj) ? [...obj] : { ...(obj || {}) };
  let cursor: any = root;
  for (let i = 0; i < path.length - 1; i++) {
    const key = path[i];
    const nextKey = path[i + 1];
    const current = cursor[key as any];
    const next = current ?? (typeof nextKey === 'number' ? [] : {});
    cursor[key as any] = Array.isArray(next) ? [...next] : { ...next };
    cursor = cursor[key as any];
  }
  cursor[path[path.length - 1] as any] = value;
  return root;
};

const RichTextEditor: React.FC<{ value: string; onChange: (value: string) => void; minHeight?: number }> = ({ value, onChange, minHeight = 130 }) => {
  const [showLinkUI, setShowLinkUI] = useState(false);
  const [linkUrl, setLinkUrl] = useState('');
  const [openInNewTab, setOpenInNewTab] = useState(false);

  const applyLink = () => {
    const selection = window.getSelection();
    if (!selection || selection.rangeCount === 0 || selection.toString().trim().length === 0 || !linkUrl.trim()) return;
    const safeUrl = /^(https?:\/\/|\/)/i.test(linkUrl) ? linkUrl : `https://${linkUrl}`;
    const html = `<a href="${safeUrl}" ${openInNewTab ? 'target="_blank" rel="noopener noreferrer"' : ''}>${selection.toString()}</a>`;
    document.execCommand('insertHTML', false, html);
    setShowLinkUI(false);
    setLinkUrl('');
    setOpenInNewTab(false);
  };

  return (
    <div className="space-y-2">
      <div className="flex flex-wrap gap-2">
        <button type="button" className="px-3 py-1 text-xs rounded-lg bg-slate-100 font-bold" onClick={() => document.execCommand('bold')}>Bold</button>
        <button type="button" className="px-3 py-1 text-xs rounded-lg bg-slate-100 font-bold" onClick={() => document.execCommand('italic')}>Italic</button>
        <button type="button" className="px-3 py-1 text-xs rounded-lg bg-slate-100 font-bold" onClick={() => setShowLinkUI((prev) => !prev)}>Link</button>
        <button type="button" className="px-3 py-1 text-xs rounded-lg bg-slate-100 font-bold" onClick={() => document.execCommand('unlink')}>Unlink</button>
      </div>
      {showLinkUI && (
        <div className="flex flex-wrap items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 p-2">
          <input className="input-std text-sm !py-2" placeholder="https://example.com or /internal-path" value={linkUrl} onChange={(e) => setLinkUrl(e.target.value)} />
          <label className="text-xs font-semibold flex items-center gap-2"><input type="checkbox" checked={openInNewTab} onChange={(e) => setOpenInNewTab(e.target.checked)} />Open in new tab</label>
          <button type="button" className="px-3 py-2 text-xs rounded-lg bg-brand-blue text-white font-bold" onClick={applyLink}>Apply</button>
        </div>
      )}
      <div className="input-std rich-editor" style={{ minHeight }} contentEditable suppressContentEditableWarning onInput={(e) => onChange((e.target as HTMLDivElement).innerHTML)} dangerouslySetInnerHTML={{ __html: value || '' }} />
    </div>
  );
};

const AdminPanel: React.FC<{ onExit: () => void }> = ({ onExit }) => {
  const [activeTab, setActiveTab] = useState<AdminTab>('dashboard');
  const [viewMode, setViewMode] = useState<ViewMode>('list');
  const [editingId, setEditingId] = useState<string | null>(null);
  
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLocked, setIsLocked] = useState(false);
  
  // Data lists
  const [blogs, setBlogs] = useState<any[]>([]);
  const [categories, setCategories] = useState<any[]>([]);
  const [colleges, setColleges] = useState<any[]>([]);
  const [leads, setLeads] = useState<any[]>([]); 
  const [media, setMedia] = useState<any[]>([]);
  const [stories, setStories] = useState<any[]>([]);
  const [pages, setPages] = useState<any[]>([]);
  const [settings, setSettings] = useState<SiteSettings | null>(null);
  const [sitemapContent, setSitemapContent] = useState<string>('');
  const [loading, setLoading] = useState(false);

  const [imagePreview, setImagePreview] = useState<string | null>(null);

  // Forms
  const [blogForm, setBlogForm] = useState<Partial<Blog>>({});
  const [categoryForm, setCategoryForm] = useState<Partial<BlogCategory>>({});
  // Removed mediaForm state as it is handled by MediaManager
  const [storyForm, setStoryForm] = useState<Partial<VideoStory>>({});
  const [settingsForm, setSettingsForm] = useState<Partial<SiteSettings>>({});
  const [payloadDraft, setPayloadDraft] = useState<any>({});
  const [advancedMode, setAdvancedMode] = useState(false);
  const [structuredDataText, setStructuredDataText] = useState('');
  const [autosaveAt, setAutosaveAt] = useState<string | null>(null);
  const [pageForm, setPageForm] = useState<{
    title: string;
    slug: string;
    category: DynamicPageCategory;
    payloadText: string;
    focusKeyphrase: string;
    seoTitle: string;
    metaTitle: string;
    seoSlug: string;
    metaDescription: string;
    canonical: string;
    ogTitle: string;
    ogDescription: string;
    ogImage: string;
    ogType: string;
    structuredData: string;
  }>({
    title: '',
    slug: '',
    category: 'MBBS Abroad',
    payloadText: '',
    focusKeyphrase: '',
    seoTitle: '',
    metaTitle: '',
    seoSlug: '',
    metaDescription: '',
    canonical: '',
    ogTitle: '',
    ogDescription: '',
    ogImage: '',
    ogType: 'website',
    structuredData: ''
  });
  
  // College Form State
  const initialCollegeState: Partial<CollegeDetailData> = {
    name: '', slug: '', location: '', type: 'Public', established: '',
    country: 'Russia', category: 'MBBS Abroad', image: '', intro: '',
    focusKeyphrase: '', seoTitle: '', metaTitle: '', seoSlug: '', metaDescription: '', canonical: '', ogTitle: '', ogDescription: '', ogImage: '', ogType: 'website', structuredData: ''
  };
  const [collegeForm, setCollegeForm] = useState<Partial<CollegeDetailData>>(initialCollegeState);

  // Flatten countries for dropdown
  const allCountries = [...FOOTER_COLLEGES.mbbs.map(c => c.country), ...FOOTER_COLLEGES.study.map(c => c.country)];

  const fetchData = async () => {
    setLoading(true);
    try {
      const collections = ['blogs', 'categories', 'colleges', 'dynamic_pages', 'leads', 'media', 'settings', 'video_testimonials'];
      const results: any = {};
      for (const name of collections) {
        const snap = await getDocs(collection(db, name));
        results[name] = snap.docs.map(d => ({ id: d.id, ...d.data() }));
      }
      setBlogs(results.blogs);
      setCategories(results.categories);
      setColleges(results.colleges);
      setPages(results.dynamic_pages);
      setLeads(results.leads.sort((a: any, b: any) => (b.timestamp?.seconds || 0) - (a.timestamp?.seconds || 0)));
      setMedia(results.media);
      setStories(results.video_testimonials);
      if (results.settings.length > 0) {
        setSettings(results.settings[0]);
        setSettingsForm(results.settings[0]);
      }
      
      // Fetch Sitemap
      try {
        const sitemapDoc = await getDocs(collection(db, 'settings'));
        const sitemapData = sitemapDoc.docs.find(d => d.id === 'sitemap');
        if (sitemapData) {
            setSitemapContent(sitemapData.data().content || '');
        }
      } catch (e) {
        console.log("Sitemap fetch error", e);
      }
    } catch (err: any) {
      console.error("Fetch error:", err);
      if (err.code === 'permission-denied') {
        alert("Permission denied. Please check your Firestore security rules.");
      } else {
        alert("Failed to load data. See console for details.");
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isAuthenticated) fetchData();
  }, [isAuthenticated]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username.toLowerCase() === 'admin' && password === 'admin123') {
      setIsAuthenticated(true);
    } else {
      alert('Invalid credentials.');
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, callback: (base64: string) => void) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64 = reader.result as string;
        setImagePreview(base64);
        callback(base64);
      };
      reader.readAsDataURL(file);
    }
  };

  const resetForms = () => {
    setBlogForm({
      title: '', slug: '', category: categories[0]?.name || 'General', author: 'Admin', readTime: '5 min read',
      img: '', imgAlt: '', excerpt: '', content: '', metaTitle: '', metaDesc: '',
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
    });
    setCategoryForm({ name: '', slug: '' });
    // Removed mediaForm reset
    setStoryForm({ studentName: '', university: '', videoUrl: '', thumbnailUrl: '', tagline: '' });
    setPageForm({
      title: '',
      slug: '',
      category: 'MBBS Abroad',
      payloadText: '',
      focusKeyphrase: '',
      seoTitle: '',
      metaTitle: '',
      seoSlug: '',
      metaDescription: '',
      canonical: '',
      ogTitle: '',
      ogDescription: '',
      ogImage: '',
      ogType: 'website',
      structuredData: ''
    });
    setPayloadDraft({});
    setStructuredDataText('');
    setCollegeForm(initialCollegeState);
    setImagePreview(null);
    setEditingId(null);
  };

  const handleSave = async (col: string, formData: any) => {
    setLoading(true);
    try {
      if (viewMode === 'create') {
        await addDoc(collection(db, col), { ...formData, timestamp: serverTimestamp() });
      } else if (viewMode === 'edit' && editingId) {
        await updateDoc(doc(db, col, editingId), { ...formData });
      }
      setViewMode('list');
      resetForms();
      fetchData();
    } catch (err) {
      alert(`Error saving to ${col}.`);
    } finally {
      setLoading(false);
    }
  };

  const deleteItem = async (col: string, id: string) => {
    if (!window.confirm("Are you sure? This action is permanent.")) return;
    setLoading(true);
    try {
      await deleteDoc(doc(db, col, id));
      fetchData();
    } catch (err) {
      alert("Delete failed.");
    } finally {
      setLoading(false);
    }
  };

  const generateSlug = (text: string) => text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');

  const startEditingPage = (page: any) => {
    const allowedCategories: DynamicPageCategory[] = ['MBBS Abroad', 'Study Abroad', 'Study in India', 'MBBS in India', 'Colleges', 'Entrance Exams'];
    const seoData = page.payload?.seo || page.seo || {};
    setPageForm({
      title: page.title || '',
      slug: page.slug || '',
      category: allowedCategories.includes(page.category) ? page.category : 'MBBS Abroad',
      payloadText: JSON.stringify(page.payload || {}, null, 2),
      focusKeyphrase: seoData.focusKeyphrase || '',
      seoTitle: seoData.seoTitle || '',
      metaTitle: seoData.metaTitle || '',
      seoSlug: seoData.slug || '',
      metaDescription: seoData.metaDescription || '',
      canonical: seoData.canonical || seoData.canonicalUrl || '',
      ogTitle: seoData.ogTitle || '',
      ogDescription: seoData.ogDescription || '',
      ogImage: seoData.ogImage || '',
      ogType: seoData.ogType || 'website',
      structuredData: typeof seoData.structuredData === 'string'
        ? seoData.structuredData
        : JSON.stringify(seoData.structuredData || {}, null, 2)
    });
    setPayloadDraft(page.payload || {});
    setStructuredDataText(
      typeof seoData.structuredData === 'string'
        ? seoData.structuredData
        : JSON.stringify(seoData.structuredData || {}, null, 2)
    );
    setEditingId(page.id);
    setViewMode('edit');
  };

  const handleSavePage = async () => {
    let parsedPayload: any = payloadDraft;
    if (advancedMode) {
      try {
        parsedPayload = JSON.parse(pageForm.payloadText || '{}');
      } catch (error) {
        alert('Invalid JSON in Page Payload. Please fix JSON format before saving.');
        return;
      }
    }

    let parsedStructuredData: any = null;
    if (structuredDataText && structuredDataText.trim()) {
      try {
        parsedStructuredData = JSON.parse(structuredDataText);
      } catch (error) {
        alert('Invalid JSON in Structured Data. Please fix JSON format before saving.');
        return;
      }
    }

    const seoPayload = {
      focusKeyphrase: pageForm.focusKeyphrase || '',
      seoTitle: pageForm.seoTitle || '',
      metaTitle: pageForm.metaTitle || '',
      slug: pageForm.seoSlug || '',
      metaDescription: pageForm.metaDescription || '',
      canonical: pageForm.canonical || '',
      canonicalUrl: pageForm.canonical || '',
      ogTitle: pageForm.ogTitle || '',
      ogDescription: pageForm.ogDescription || '',
      ogImage: pageForm.ogImage || '',
      ogType: pageForm.ogType || 'website',
      structuredData: parsedStructuredData
    };

    await handleSave('dynamic_pages', {
      title: pageForm.title,
      slug: pageForm.slug || generateSlug(pageForm.title),
      category: pageForm.category,
      payload: {
        ...parsedPayload,
        seo: seoPayload
      }
    });
  };

  async function handleSyncAllSiteData() {
    setLoading(true);
    try {
      const remoteExisting = await getDocs(collection(db, 'dynamic_pages'));
      const existingBySlug = new Map<string, any>();
      remoteExisting.forEach((snapshot) => {
        const data = snapshot.data();
        const docSlug = data?.slug || snapshot.id;
        if (docSlug) {
          existingBySlug.set(docSlug, {
            payload: data?.payload || {},
            seo: data?.payload?.seo || data?.seo || null
          });
        }
      });

      const getIntroText = (intro: any) => {
        if (typeof intro === 'string') return intro;
        if (typeof intro?.text === 'string') return intro.text;
        if (Array.isArray(intro?.introduction)) return intro.introduction.join(' ');
        return '';
      };

      const trimDescription = (value: string) => value.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim().slice(0, 160);

      const buildDefaultSeo = (entry: { slug: string; title: string; payload: any }) => {
        const canonicalPath = `/${entry.slug}`;
        const description = trimDescription(getIntroText(entry.payload?.intro) || entry.title);
        return {
          focusKeyphrase: entry.title,
          seoTitle: entry.title,
          metaTitle: entry.title,
          slug: entry.slug,
          metaDescription: description,
          canonical: canonicalPath,
          canonicalUrl: canonicalPath,
          ogTitle: entry.title,
          ogDescription: description,
          ogImage: entry.payload?.heroImage || entry.payload?.image || '',
          ogType: 'website',
          structuredData: {
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: entry.title,
            url: `https://www.iexplaineducation.in${canonicalPath}`,
            description
          }
        };
      };

      const toEntries = (
        source: Record<string, any>,
        category: DynamicPageCategory,
        titleResolver = (slug: string, payload: any) => payload?.title || payload?.name || slug.replace(/-/g, ' '),
        slugResolver = (slug: string, payload: any) => payload?.slug || slug
      ) => Object.entries(source).map(([sourceSlug, payload]) => {
        const slug = generateSlug(slugResolver(sourceSlug, payload));
        return {
          slug,
          title: titleResolver(sourceSlug, payload),
          category,
          payload: { ...payload, slug }
        };
      });

      const rawEntries = [
        ...toEntries(MBBS_ABROAD_DETAILED, 'MBBS Abroad', (slug, payload) => payload?.title || `MBBS in ${slug.replace(/-/g, ' ')}`, (slug, payload) => payload?.seo?.slug || `mbbs-in-${slug}`),
        ...toEntries(STUDY_ABROAD_DETAILED, 'Study Abroad', (slug, payload) => payload?.title || `Study in ${slug.replace(/-/g, ' ')}`, (slug, payload) => payload?.seo?.slug || `study-in-${slug}`),
        ...toEntries(INDIA_COURSES_DETAILED, 'Study in India', (slug, payload) => payload?.title || slug.replace(/-/g, ' '), (slug) => `study-india-${slug}`),
        ...toEntries(MBBS_IN_INDIA_DETAILS, 'MBBS in India', (slug, payload) => payload?.title || payload?.name || slug.replace(/-/g, ' '), (slug, payload) => `mbbs-india-${payload?.slug || slug}`),
        ...toEntries(ENTRANCE_EXAM_DETAILS, 'Entrance Exams', (slug, payload) => payload?.title || slug.replace(/-/g, ' '), (slug) => `exams-${slug}`),
        ...toEntries(STRUCTURED_COLLEGE_DETAILS, 'Colleges'),
        ...toEntries(STUDY_ABROAD_COLLEGE_DETAILS, 'Colleges'),
        ...toEntries(LEGACY_COLLEGE_DETAILS, 'Colleges'),
      ];

      const uniqueEntries = Array.from(new Map(rawEntries.map((entry) => [entry.slug, entry])).values());

      await Promise.all(
        uniqueEntries.map((entry) => {
          const existing = existingBySlug.get(entry.slug);
          const seo = existing?.seo && hasSeoConfigured(existing.seo) ? existing.seo : buildDefaultSeo(entry);
          return setDoc(
            doc(db, 'dynamic_pages', entry.slug.replace(/\//g, '__')),
            {
              slug: entry.slug,
              title: entry.title,
              category: entry.category,
              payload: {
                ...(existing?.payload || {}),
                ...entry.payload,
                seo
              },
              seo,
              updatedAt: serverTimestamp()
            },
            { merge: true }
          );
        })
      );

      await fetchData();
      alert(`Synced ${uniqueEntries.length} records to dynamic_pages. Programs: ${uniqueEntries.filter((entry) => entry.category !== 'Colleges').length}, Colleges: ${uniqueEntries.filter((entry) => entry.category === 'Colleges').length}.`);
    } catch (err) {
      console.error('Sync all site data failed:', err);
      alert('Failed to sync all site data.');
    } finally {
      setLoading(false);
    }
  }

  const startEditingCollege = (college: any) => {
    const seoData = college.seo || {};
    setCollegeForm({
      ...college,
      focusKeyphrase: seoData.focusKeyphrase || '',
      seoTitle: seoData.seoTitle || '',
      metaTitle: seoData.metaTitle || '',
      seoSlug: seoData.slug || '',
      metaDescription: seoData.metaDescription || '',
      canonical: seoData.canonical || seoData.canonicalUrl || '',
      ogTitle: seoData.ogTitle || '',
      ogDescription: seoData.ogDescription || '',
      ogImage: seoData.ogImage || '',
      ogType: seoData.ogType || 'website',
      structuredData: typeof seoData.structuredData === 'string'
        ? seoData.structuredData
        : JSON.stringify(seoData.structuredData || {}, null, 2)
    });
    setEditingId(college.id);
    setViewMode('edit');
  };

  const handleSaveCollegeSeo = async () => {
    let parsedStructuredData: any = null;
    if ((collegeForm as any).structuredData?.trim()) {
      try {
        parsedStructuredData = JSON.parse((collegeForm as any).structuredData);
      } catch (error) {
        alert('Invalid JSON in College Structured Data. Please fix JSON format before saving.');
        return;
      }
    }

    const seoPayload = {
      focusKeyphrase: (collegeForm as any).focusKeyphrase || '',
      seoTitle: (collegeForm as any).seoTitle || '',
      metaTitle: (collegeForm as any).metaTitle || '',
      slug: (collegeForm as any).seoSlug || '',
      metaDescription: (collegeForm as any).metaDescription || '',
      canonical: (collegeForm as any).canonical || '',
      canonicalUrl: (collegeForm as any).canonical || '',
      ogTitle: (collegeForm as any).ogTitle || '',
      ogDescription: (collegeForm as any).ogDescription || '',
      ogImage: (collegeForm as any).ogImage || '',
      ogType: (collegeForm as any).ogType || 'website',
      structuredData: parsedStructuredData
    };

    await handleSave('colleges', {
      name: collegeForm.name || '',
      slug: collegeForm.slug || generateSlug(collegeForm.name || ''),
      country: collegeForm.country || 'Russia',
      category: (collegeForm as any).category || 'MBBS Abroad',
      image: (collegeForm as any).image || '',
      seo: seoPayload
    });
  };

  const handleSyncLocalData = async () => {
    await handleSyncAllSiteData();
  };

  const renderDynamicField = (key: string, value: any, path: (string | number)[] = []) => {
    const currentPath = [...path, key];
    const pathKey = currentPath.join('.');
    if (Array.isArray(value)) {
      return (
        <div key={pathKey} className="border rounded-xl p-4 space-y-3">
          <p className="font-bold text-sm">{key}</p>
          {value.map((item, idx) => (
            <div key={`${pathKey}-${idx}`} className="border rounded-lg p-3">
              {isPlainObject(item) ? Object.entries(item).map(([k, v]) => renderDynamicField(k, v, [...currentPath, idx])) : (
                <input className="input-std" value={String(item ?? '')} onChange={(e) => setPayloadDraft((prev: any) => setByPath(prev, [...currentPath, idx], e.target.value))} />
              )}
            </div>
          ))}
        </div>
      );
    }
    if (isPlainObject(value)) {
      return (
        <div key={pathKey} className="border rounded-xl p-4 space-y-3">
          <p className="font-bold text-sm">{key}</p>
          {Object.entries(value).map(([k, v]) => renderDynamicField(k, v, currentPath))}
        </div>
      );
    }
    const isLongText = typeof value === 'string' && value.length > 120;
    const isBoolean = typeof value === 'boolean';
    return (
      <div key={pathKey}>
        <label className="label">{key}</label>
        {isBoolean ? (
          <select className="input-std" value={String(value)} onChange={(e) => setPayloadDraft((prev: any) => setByPath(prev, currentPath, e.target.value === 'true'))}>
            <option value="true">Enabled</option>
            <option value="false">Disabled</option>
          </select>
        ) : isLongText ? (
          <RichTextEditor value={String(value ?? '')} onChange={(nextValue) => setPayloadDraft((prev: any) => setByPath(prev, currentPath, nextValue))} />
        ) : (
          <input className="input-std" value={String(value ?? '')} onChange={(e) => setPayloadDraft((prev: any) => setByPath(prev, currentPath, e.target.value))} />
        )}
      </div>
    );
  };

  useEffect(() => {
    if (activeTab !== 'pages' || viewMode === 'list') return;
    const timeout = setTimeout(() => {
      localStorage.setItem('admin-page-draft', JSON.stringify({ pageForm, payloadDraft, structuredDataText }));
      setAutosaveAt(new Date().toISOString());
    }, 900);
    return () => clearTimeout(timeout);
  }, [pageForm, payloadDraft, structuredDataText, activeTab, viewMode]);

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-brand-blue flex items-center justify-center p-6">
        <div className="bg-white p-10 rounded-[2.5rem] shadow-2xl max-w-md w-full animate-fade-in text-center">
          <div className="mb-8 flex flex-col items-center">
            <img src={LOGO_URL} alt="iExplain" className="h-16 w-auto mb-4" />
            <h2 className="text-2xl font-black text-brand-blue mb-1">iExplain Education Admin</h2>
            <p className="text-black font-bold text-xs uppercase tracking-widest">Secure Access</p>
          </div>
          <form onSubmit={handleLogin} className="space-y-5 text-left">
            <input type="text" placeholder="Admin Username" className="w-full px-5 py-3 rounded-xl bg-gray-50 border outline-none font-medium" value={username} onChange={e => setUsername(e.target.value)} />
            <input type="password" placeholder="Password" className="w-full px-5 py-3 rounded-xl bg-gray-50 border outline-none font-medium" value={password} onChange={e => setPassword(e.target.value)} />
            <button className="w-full py-4 bg-brand-gold text-white rounded-xl font-black uppercase tracking-widest shadow-lg hover:brightness-110 transition-all mt-4">Login</button>
          </form>
        </div>
      </div>
    );
  }

  const SidebarItem: React.FC<{ id: AdminTab; icon: string; label: string }> = ({ id, icon, label }) => (
    <button 
      disabled={isLocked}
      onClick={() => { setActiveTab(id); setViewMode('list'); resetForms(); }} 
      className={`w-full flex items-center space-x-3 px-6 py-4 transition-all border-l-4 ${activeTab === id ? 'bg-white/10 text-brand-gold border-brand-gold font-bold' : 'border-transparent text-white/60 hover:text-white hover:bg-white/5'} ${isLocked ? 'opacity-50 cursor-not-allowed' : ''}`}
    >
      <i className={`fa-solid ${icon} w-5`}></i>
      <span className="text-sm">{label}</span>
    </button>
  );

  return (
    <div className="min-h-screen bg-[#f8fafc] flex font-sans">
      <aside className="w-64 bg-brand-blue shrink-0 flex flex-col text-white shadow-2xl z-50 h-screen sticky top-0">
        <div className="p-8 flex flex-col items-start space-y-4">
          <img src={LOGO_URL} alt="iExplain" className="h-8 w-auto bg-white p-1 rounded" />
          <div>
            <h1 className="font-black text-lg tracking-tight leading-none">Admin Panel</h1>
            <p className="text-[10px] text-white/50 uppercase tracking-widest">iExplain Education</p>
          </div>
        </div>
        <nav className="flex-grow py-4 overflow-y-auto no-scrollbar space-y-1">
          <SidebarItem id="dashboard" icon="fa-chart-line" label="Overview" />
                  <SidebarItem id="entries" icon="fa-users-viewfinder" label="Entries" />
                  <SidebarItem id="colleges" icon="fa-building-columns" label="Colleges" />
                  <SidebarItem id="pages" icon="fa-file-code" label="Program Pages" />
                  <SidebarItem id="blogs" icon="fa-file-signature" label="Blog Posts" />
          <SidebarItem id="categories" icon="fa-tags" label="Categories" />
          <SidebarItem id="stories" icon="fa-play-circle" label="Video Stories" />
          <SidebarItem id="media" icon="fa-photo-film" label="Media Library" />
          <SidebarItem id="settings" icon="fa-sliders" label="Settings" />
        </nav>
        <div className="p-6 border-t border-white/10">
          <button disabled={isLocked} onClick={onExit} className={`w-full py-3 bg-red-500/10 text-red-400 rounded-xl text-xs font-black uppercase tracking-widest hover:bg-red-500 transition-all ${isLocked ? 'opacity-50 cursor-not-allowed' : ''}`}>Logout</button>
        </div>
      </aside>

      <main className="flex-grow flex flex-col h-screen overflow-hidden relative">
        {loading && (
          <div className="absolute inset-0 bg-white/50 backdrop-blur-sm z-[100] flex items-center justify-center">
             <div className="w-12 h-12 border-4 border-brand-gold border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}
        
        <header className="bg-white h-16 shrink-0 flex items-center justify-between px-10 border-b border-gray-100 shadow-sm">
          <span className="text-brand-blue font-black text-sm uppercase tracking-widest">{activeTab === 'entries' ? 'Leads & Entries' : activeTab}</span>
          <div className="flex items-center gap-3">
            <button onClick={handleSyncAllSiteData} className="px-4 py-2 bg-emerald-600 text-white rounded-lg font-bold text-[10px] uppercase tracking-widest hover:bg-emerald-700 transition-all">
              Sync All Site Data
            </button>
            <div className="text-xs font-bold text-gray-400">v3.4.0</div>
          </div>
        </header>

        <div className="flex-grow overflow-y-auto p-10 no-scrollbar">
          {activeTab === 'dashboard' && (
            <div className="space-y-8 animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                 {[
                   { label: 'Total Entries', val: leads.length, icon: 'fa-users', color: 'text-green-500' },
                   { label: 'Colleges', val: colleges.length, icon: 'fa-building-columns', color: 'text-blue-500' },
                   { label: 'Program Pages', val: pages.length, icon: 'fa-file-code', color: 'text-indigo-500' },
                   { label: 'Published Blogs', val: blogs.length, icon: 'fa-file', color: 'text-brand-gold' },
                   { label: 'Media Items', val: media.length, icon: 'fa-images', color: 'text-purple-500' }
                 ].map((stat, i) => (
                    <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex items-center justify-between">
                       <div>
                          <p className="text-[10px] font-black text-black uppercase tracking-widest mb-1">{stat.label}</p>
                          <p className="text-3xl font-black text-brand-blue">{stat.val}</p>
                       </div>
                       <i className={`fa-solid ${stat.icon} text-2xl ${stat.color} opacity-20`}></i>
                    </div>
                 ))}
              </div>
            </div>
          )}

          {activeTab === 'categories' && (
            <div className="animate-fade-in">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl font-black text-brand-blue">Manage <span className="text-brand-gold">Categories</span></h2>
                <button onClick={() => { if(viewMode === 'list') { resetForms(); setViewMode('create'); } else { setViewMode('list'); } }} className="px-6 py-3 bg-brand-blue text-white rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-brand-gold transition-all shadow-lg">
                  {viewMode === 'list' ? 'New Category' : 'Back to List'}
                </button>
              </div>

              {viewMode === 'list' ? (
                <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
                  <table className="w-full text-left">
                    <thead className="bg-gray-50 border-b border-gray-100">
                      <tr>
                        <th className="px-8 py-5 text-[10px] font-black uppercase text-black">Name</th>
                        <th className="px-8 py-5 text-[10px] font-black uppercase text-black">Slug</th>
                        <th className="px-8 py-5 text-[10px] font-black uppercase text-black text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50">
                      {categories.map(c => (
                        <tr key={c.id} className="hover:bg-gray-50/50">
                          <td className="px-8 py-5 text-sm font-bold text-brand-blue">{c.name}</td>
                          <td className="px-8 py-5 text-sm font-medium text-gray-500">{c.slug}</td>
                          <td className="px-8 py-5 text-right space-x-2">
                            <button onClick={() => { setCategoryForm(c); setEditingId(c.id); setViewMode('edit'); }} className="p-2 text-blue-500 hover:bg-blue-50 rounded-lg"><i className="fa-solid fa-pen"></i></button>
                            <button onClick={() => deleteItem('categories', c.id)} className="p-2 text-red-500 hover:bg-red-50 rounded-lg"><i className="fa-solid fa-trash"></i></button>
                          </td>
                        </tr>
                      ))}
                      {categories.length === 0 && (
                        <tr><td colSpan={3} className="px-8 py-8 text-center text-gray-400 text-sm">No categories found. Create one.</td></tr>
                      )}
                    </tbody>
                  </table>
                </div>
              ) : (
                <div className="bg-white rounded-[2.5rem] p-12 max-w-xl shadow-sm border border-gray-100">
                  <form onSubmit={(e) => { e.preventDefault(); handleSave('categories', categoryForm); }} className="space-y-6">
                    <div>
                        <label className="text-[10px] font-black uppercase text-black mb-2 block">Category Name</label>
                        <input required type="text" className="w-full px-5 py-3 rounded-xl bg-gray-50 border outline-none font-bold text-brand-blue" value={categoryForm.name} onChange={e => setCategoryForm({...categoryForm, name: e.target.value, slug: generateSlug(e.target.value)})} />
                    </div>
                    <div>
                        <label className="text-[10px] font-black uppercase text-black mb-2 block">Slug (Auto-generated)</label>
                        <input required type="text" className="w-full px-5 py-3 rounded-xl bg-gray-50 border outline-none text-gray-500" value={categoryForm.slug} onChange={e => setCategoryForm({...categoryForm, slug: e.target.value})} />
                    </div>
                    <button type="submit" className="w-full py-4 bg-brand-gold text-white rounded-xl font-black uppercase tracking-widest shadow-xl shadow-brand-gold/30">Save Category</button>
                  </form>
                </div>
              )}
            </div>
          )}

          {activeTab === 'colleges' && (
            <div className="animate-fade-in">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl font-black text-brand-blue">Manage <span className="text-brand-gold">Colleges</span></h2>
                <button onClick={() => { if(viewMode === 'list') { resetForms(); setViewMode('create'); } else { setViewMode('list'); } }} className="px-6 py-3 bg-brand-blue text-white rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-brand-gold transition-all shadow-lg">
                  {viewMode === 'list' ? 'New College' : 'Back to List'}
                </button>
              </div>

              {viewMode === 'list' ? (
                <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
                  <table className="w-full text-left">
                    <thead className="bg-gray-50 border-b border-gray-100">
                      <tr>
                        <th className="px-8 py-5 text-[10px] font-black uppercase text-black">Name</th>
                        <th className="px-8 py-5 text-[10px] font-black uppercase text-black">Country</th>
                        <th className="px-8 py-5 text-[10px] font-black uppercase text-black">Category</th>
                        <th className="px-8 py-5 text-[10px] font-black uppercase text-black">SEO Status</th>
                        <th className="px-8 py-5 text-[10px] font-black uppercase text-black text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50">
                      {colleges.map(c => (
                        <tr key={c.id} className="hover:bg-gray-50/50">
                          <td className="px-8 py-5 text-sm font-bold text-brand-blue">{c.name}</td>
                          <td className="px-8 py-5 text-sm font-medium text-gray-500">{c.country}</td>
                          <td className="px-8 py-5 text-xs font-black uppercase text-brand-gold tracking-wider">{c.category}</td>
                          <td className="px-8 py-5">
                            {hasSeoConfigured(c.seo) ? (
                              <span className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-black uppercase tracking-wider">
                                <i className="fa-solid fa-circle-check mr-1.5"></i> Updated
                              </span>
                            ) : (
                              <span className="inline-flex items-center px-3 py-1 rounded-full bg-amber-50 text-amber-700 text-[10px] font-black uppercase tracking-wider">
                                <i className="fa-solid fa-triangle-exclamation mr-1.5"></i> Pending
                              </span>
                            )}
                          </td>
                          <td className="px-8 py-5 text-right space-x-2">
                            <button onClick={() => startEditingCollege(c)} className="p-2 text-blue-500 hover:bg-blue-50 rounded-lg"><i className="fa-solid fa-pen"></i></button>
                            <button onClick={() => deleteItem('colleges', c.id)} className="p-2 text-red-500 hover:bg-red-50 rounded-lg"><i className="fa-solid fa-trash"></i></button>
                          </td>
                        </tr>
                      ))}
                      {colleges.length === 0 && <tr><td colSpan={5} className="px-8 py-8 text-center text-gray-400 text-sm">No colleges found.</td></tr>}
                    </tbody>
                  </table>
                </div>
              ) : (
                <div className="bg-white rounded-[3rem] p-12 shadow-sm border border-gray-100">
                  <form onSubmit={(e) => { e.preventDefault(); handleSaveCollegeSeo(); }} className="grid grid-cols-2 gap-8">
                    
                    <div className="col-span-2 md:col-span-1">
                       <label className="label">College Name</label>
                       <input required type="text" className="input-std" value={collegeForm.name} onChange={e => setCollegeForm({...collegeForm, name: e.target.value, slug: generateSlug(e.target.value)})} />
                    </div>
                    <div className="col-span-2 md:col-span-1">
                       <label className="label">Slug (Auto-generated ID)</label>
                       <input required type="text" className="input-std text-gray-500" value={collegeForm.slug} onChange={e => setCollegeForm({...collegeForm, slug: e.target.value})} />
                    </div>

                    <div className="col-span-2 md:col-span-1">
                       <label className="label">Country</label>
                       <select className="input-std" value={collegeForm.country} onChange={e => setCollegeForm({...collegeForm, country: e.target.value})}>
                          {allCountries.map((c, i) => <option key={i} value={c}>{c}</option>)}
                       </select>
                    </div>
                    <div className="col-span-2 md:col-span-1">
                       <label className="label">Category</label>
                       <select className="input-std" value={collegeForm.category} onChange={e => setCollegeForm({...collegeForm, category: e.target.value as any})}>
                          <option value="MBBS Abroad">MBBS Abroad</option>
                          <option value="Study Abroad">Study Abroad</option>
                       </select>
                    </div>

                    <div className="col-span-2 bg-gray-50 p-6 rounded-2xl border border-dashed">
                       <label className="label">Banner Image</label>
                       <div className="flex gap-4 items-center">
                          {collegeForm.image && <img src={collegeForm.image} className="h-20 w-32 object-cover rounded-lg" />}
                          <input type="text" className="input-std flex-grow" placeholder="Image URL" value={collegeForm.image} onChange={e => setCollegeForm({...collegeForm, image: e.target.value})} />
                       </div>
                    </div>

                    <div className="col-span-2">
                      <label className="label">Focus Keyphrase</label>
                      <input type="text" className="input-std" value={(collegeForm as any).focusKeyphrase || ''} onChange={e => setCollegeForm({ ...collegeForm, focusKeyphrase: e.target.value } as any)} />
                    </div>
                    <div className="col-span-2 md:col-span-1">
                      <label className="label">SEO Title</label>
                      <input type="text" className="input-std" value={(collegeForm as any).seoTitle || ''} onChange={e => setCollegeForm({ ...collegeForm, seoTitle: e.target.value } as any)} />
                    </div>
                    <div className="col-span-2 md:col-span-1">
                      <label className="label">Meta Title</label>
                      <input type="text" className="input-std" value={(collegeForm as any).metaTitle || ''} onChange={e => setCollegeForm({ ...collegeForm, metaTitle: e.target.value } as any)} />
                    </div>
                    <div className="col-span-2">
                      <label className="label">SEO Slug</label>
                      <input type="text" className="input-std" value={(collegeForm as any).seoSlug || ''} onChange={e => setCollegeForm({ ...collegeForm, seoSlug: e.target.value } as any)} />
                    </div>
                    <div className="col-span-2">
                      <label className="label">Meta Description</label>
                      <textarea rows={3} className="input-std" value={(collegeForm as any).metaDescription || ''} onChange={e => setCollegeForm({ ...collegeForm, metaDescription: e.target.value } as any)} />
                    </div>
                    <div className="col-span-2">
                      <label className="label">Structured Data (JSON-LD)</label>
                      <textarea rows={8} className="input-std json-editor font-mono text-xs" value={(collegeForm as any).structuredData || ''} onChange={e => setCollegeForm({ ...collegeForm, structuredData: e.target.value } as any)} spellCheck={false} />
                    </div>

                    <button type="submit" className="col-span-2 py-5 bg-brand-gold text-white rounded-2xl font-black uppercase tracking-widest shadow-xl">
                        {editingId ? 'Update College SEO' : 'Add College SEO'}
                    </button>
                  </form>
                </div>
              )}
            </div>
          )}

          {activeTab === 'entries' && (
            <div className="animate-fade-in">
              {/* Existing Entries Table Logic */}
              <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
                <table className="w-full text-left whitespace-nowrap">
                  <thead className="bg-gray-50 border-b border-gray-100">
                    <tr><th className="px-6 py-5 text-[10px] font-black uppercase">Name</th><th className="px-6 py-5 text-[10px] font-black uppercase">Contact</th><th className="px-6 py-5 text-[10px] font-black uppercase">Target</th></tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50">
                    {leads.map(lead => (
                      <tr key={lead.id}>
                        <td className="px-6 py-5 text-sm font-bold">{lead.name}</td>
                        <td className="px-6 py-5 text-xs">{lead.phone}<br/>{lead.email}</td>
                        <td className="px-6 py-5 text-xs font-bold text-brand-gold">{lead.country}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'pages' && (
            <div className="animate-fade-in">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl font-black text-brand-blue">Manage <span className="text-brand-gold">Program Pages</span></h2>
                <div className="flex gap-3">
                  {viewMode === 'list' && (
                    <button onClick={handleSyncLocalData} className="px-6 py-3 bg-emerald-600 text-white rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-emerald-700 transition-all shadow-lg">
                      Sync Local Data
                    </button>
                  )}
                  <button onClick={() => { if(viewMode === 'list') { resetForms(); setViewMode('create'); } else { setViewMode('list'); } }} className="px-6 py-3 bg-brand-blue text-white rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-brand-gold transition-all shadow-lg">
                    {viewMode === 'list' ? 'New Program Page' : 'Back to List'}
                  </button>
                </div>
              </div>

              {viewMode === 'list' ? (
                <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
                  <table className="w-full text-left">
                    <thead className="bg-gray-50 border-b border-gray-100">
                      <tr>
                        <th className="px-8 py-5 text-[10px] font-black uppercase text-black">Title</th>
                        <th className="px-8 py-5 text-[10px] font-black uppercase text-black">Slug</th>
                        <th className="px-8 py-5 text-[10px] font-black uppercase text-black">Category</th>
                        <th className="px-8 py-5 text-[10px] font-black uppercase text-black">SEO Status</th>
                        <th className="px-8 py-5 text-[10px] font-black uppercase text-black text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50">
                      {pages.map(p => (
                        <tr key={p.id} className="hover:bg-gray-50/50">
                          <td className="px-8 py-5 text-sm font-bold text-brand-blue">{p.title || 'Untitled'}</td>
                          <td className="px-8 py-5 text-sm font-medium text-gray-500">/{p.slug}</td>
                          <td className="px-8 py-5 text-xs font-black uppercase text-brand-gold tracking-wider">{p.category || '-'}</td>
                          <td className="px-8 py-5">
                            {hasSeoConfigured(p?.payload?.seo || p?.seo) ? (
                              <span className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-black uppercase tracking-wider">
                                <i className="fa-solid fa-circle-check mr-1.5"></i> Updated
                              </span>
                            ) : (
                              <span className="inline-flex items-center px-3 py-1 rounded-full bg-amber-50 text-amber-700 text-[10px] font-black uppercase tracking-wider">
                                <i className="fa-solid fa-triangle-exclamation mr-1.5"></i> Pending
                              </span>
                            )}
                          </td>
                          <td className="px-8 py-5 text-right space-x-2">
                            <button onClick={() => startEditingPage(p)} className="p-2 text-blue-500 hover:bg-blue-50 rounded-lg"><i className="fa-solid fa-pen"></i></button>
                            <button onClick={() => deleteItem('dynamic_pages', p.id)} className="p-2 text-red-500 hover:bg-red-50 rounded-lg"><i className="fa-solid fa-trash"></i></button>
                          </td>
                        </tr>
                      ))}
                      {pages.length === 0 && <tr><td colSpan={5} className="px-8 py-8 text-center text-gray-400 text-sm">No program pages found.</td></tr>}
                    </tbody>
                  </table>
                </div>
              ) : (
                <div className="bg-white rounded-[2.5rem] p-12 shadow-sm border border-gray-100">
                  <form onSubmit={(e) => { e.preventDefault(); handleSavePage(); }} className="space-y-6">
                    <div className="grid grid-cols-2 gap-6">
                      <div className="col-span-2 md:col-span-1">
                        <label className="label">Page Title</label>
                        <input required type="text" className="input-std" value={pageForm.title} onChange={e => setPageForm({ ...pageForm, title: e.target.value, slug: generateSlug(e.target.value) })} />
                      </div>
                      <div className="col-span-2 md:col-span-1">
                        <label className="label">Slug</label>
                        <input required type="text" className="input-std text-gray-500" value={pageForm.slug} onChange={e => setPageForm({ ...pageForm, slug: generateSlug(e.target.value) })} />
                        <p className="mt-2 text-xs text-gray-400">Use slug like <span className="font-mono">mbbs-in-russia</span> or <span className="font-mono">study-in-usa</span>.</p>
                      </div>
                    </div>

                    <div>
                      <label className="label">Category</label>
                      <select className="input-std" value={pageForm.category} onChange={e => setPageForm({ ...pageForm, category: e.target.value as DynamicPageCategory })}>
                        <option value="MBBS Abroad">MBBS Abroad</option>
                        <option value="Study Abroad">Study Abroad</option>
                        <option value="Study in India">Study in India</option>
                        <option value="MBBS in India">MBBS in India</option>
                        <option value="Colleges">Colleges</option>
                        <option value="Entrance Exams">Entrance Exams</option>
                      </select>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="md:col-span-1">
                        <label className="label">Focus Keyphrase</label>
                        <input type="text" className="input-std" value={pageForm.focusKeyphrase} onChange={e => setPageForm({ ...pageForm, focusKeyphrase: e.target.value })} />
                      </div>
                      <div className="md:col-span-1">
                        <label className="label">SEO Title</label>
                        <input type="text" className="input-std" value={pageForm.seoTitle} onChange={e => setPageForm({ ...pageForm, seoTitle: e.target.value })} />
                      </div>
                      <div className="md:col-span-2">
                        <label className="label">SEO Slug</label>
                        <input type="text" className="input-std" value={pageForm.seoSlug} onChange={e => setPageForm({ ...pageForm, seoSlug: e.target.value })} />
                      </div>
                      <div className="md:col-span-1">
                        <label className="label">Meta Title</label>
                        <input type="text" className="input-std" value={pageForm.metaTitle} onChange={e => setPageForm({ ...pageForm, metaTitle: e.target.value })} />
                      </div>
                      <div className="md:col-span-1">
                        <label className="label">Canonical URL / Path</label>
                        <input type="text" className="input-std" value={pageForm.canonical} onChange={e => setPageForm({ ...pageForm, canonical: e.target.value })} />
                      </div>
                      <div className="md:col-span-1">
                        <label className="label">OG Title</label>
                        <input type="text" className="input-std" value={pageForm.ogTitle} onChange={e => setPageForm({ ...pageForm, ogTitle: e.target.value })} />
                      </div>
                      <div className="md:col-span-1">
                        <label className="label">OG Image</label>
                        <input type="text" className="input-std" value={pageForm.ogImage} onChange={e => setPageForm({ ...pageForm, ogImage: e.target.value })} />
                      </div>
                      <div className="md:col-span-1">
                        <label className="label">OG Type</label>
                        <input type="text" className="input-std" value={pageForm.ogType} onChange={e => setPageForm({ ...pageForm, ogType: e.target.value })} />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="label">Meta Description</label>
                        <textarea rows={3} className="input-std" value={pageForm.metaDescription} onChange={e => setPageForm({ ...pageForm, metaDescription: e.target.value })} />
                      </div>
                      <div>
                        <label className="label">OG Description</label>
                        <textarea rows={3} className="input-std" value={pageForm.ogDescription} onChange={e => setPageForm({ ...pageForm, ogDescription: e.target.value })} />
                      </div>
                    </div>

                    <div>
                      <label className="label">Structured Data (JSON-LD)</label>
                      <textarea rows={6} className="input-std json-editor font-mono text-xs" value={structuredDataText} onChange={e => setStructuredDataText(e.target.value)} spellCheck={false} />
                    </div>
                    <div className="flex items-center justify-between rounded-xl bg-slate-50 p-4">
                      <p className="text-xs text-gray-500">Autosave: {autosaveAt ? new Date(autosaveAt).toLocaleTimeString() : 'Waiting for changes...'}</p>
                      <label className="text-xs font-bold flex items-center gap-2"><input type="checkbox" checked={advancedMode} onChange={e => setAdvancedMode(e.target.checked)} /> Advanced JSON Mode</label>
                    </div>
                    {advancedMode ? (
                      <div>
                        <label className="label">Page Payload (JSON)</label>
                        <textarea required rows={18} className="input-std json-editor font-mono text-xs" value={pageForm.payloadText} onChange={e => setPageForm({ ...pageForm, payloadText: e.target.value })} spellCheck={false} />
                      </div>
                    ) : (
                      <div className="space-y-4">
                        <h3 className="text-lg font-black text-brand-blue">Content Fields</h3>
                        {Object.keys(payloadDraft || {}).length === 0 ? (
                          <p className="text-sm text-gray-500">No payload found yet. Use Sync Local Data or switch on advanced mode to paste JSON once.</p>
                        ) : Object.entries(payloadDraft).map(([key, value]) => renderDynamicField(key, value))}
                      </div>
                    )}
                    <div>
                      <label className="label">Preview Payload</label>
                      <pre className="bg-slate-900 text-slate-100 text-xs rounded-xl p-4 overflow-auto max-h-80">{JSON.stringify(payloadDraft, null, 2)}</pre>
                    </div>

                    <button type="submit" className="w-full py-5 bg-brand-gold text-white rounded-2xl font-black uppercase tracking-widest shadow-xl">
                      {editingId ? 'Update Program Page' : 'Add Program Page'}
                    </button>
                  </form>
                </div>
              )}
            </div>
          )}

          {/* ... Rest of existing tabs (Stories, Blogs, Media, Settings) remain structurally similar ... */}
          {activeTab === 'blogs' && (
            <div className="animate-fade-in">
               <div className="flex items-center justify-between mb-8">
                  <h2 className="text-3xl font-black text-brand-blue">Manage <span className="text-brand-gold">Blogs</span></h2>
                  <div className="flex gap-4">
                     <button onClick={() => { setActiveTab('categories'); }} className="px-4 py-3 bg-gray-100 text-brand-blue rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-gray-200 transition-all">Manage Categories</button>
                     <button onClick={() => { if(viewMode === 'list') { resetForms(); setViewMode('create'); } else { setViewMode('list'); } }} className="px-6 py-3 bg-brand-blue text-white rounded-xl font-bold text-xs uppercase tracking-widest shadow-lg">{viewMode === 'list' ? 'New Blog' : 'Back'}</button>
                  </div>
               </div>
               {viewMode === 'list' ? (
                  <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
                     <table className="w-full text-left">
                        <thead className="bg-gray-50 border-b border-gray-100"><tr><th className="px-8 py-5 text-[10px] font-black uppercase">Title</th><th className="px-8 py-5 text-[10px] font-black uppercase">Category</th><th className="px-8 py-5 text-[10px] font-black uppercase text-right">Action</th></tr></thead>
                        <tbody className="divide-y divide-gray-50">
                           {blogs.map(b => (
                              <tr key={b.id}><td className="px-8 py-5 text-sm font-bold">{b.title}</td><td className="px-8 py-5 text-xs font-bold text-brand-gold uppercase">{b.category}</td><td className="px-8 py-5 text-right"><button onClick={() => { setBlogForm(b); setEditingId(b.id); setViewMode('edit'); setImagePreview(b.img); }} className="text-blue-500 mr-4"><i className="fa-solid fa-pen"></i></button><button onClick={() => deleteItem('blogs', b.id)} className="text-red-500"><i className="fa-solid fa-trash"></i></button></td></tr>
                           ))}
                        </tbody>
                     </table>
                  </div>
               ) : (
                  <div className="bg-white rounded-[2rem] p-6 md:p-10 shadow-sm border border-gray-100">
                     <form onSubmit={(e) => { e.preventDefault(); handleSave('blogs', blogForm); }} className="grid grid-cols-1 xl:grid-cols-12 gap-6">
                        <div className="xl:col-span-8 space-y-6">
                          <div className="border border-gray-100 rounded-2xl p-6 space-y-5">
                            <h3 className="text-xl font-black text-brand-blue">Content</h3>
                            <div>
                              <label className="label">Blog Title</label>
                              <input
                                required
                                className="input-std"
                                placeholder="Enter blog title..."
                                value={blogForm.title || ''}
                                onChange={e => setBlogForm({ ...blogForm, title: e.target.value, slug: generateSlug(e.target.value) })}
                              />
                            </div>
                            <div>
                              <label className="label">Slug (URL)</label>
                              <input
                                className="input-std"
                                placeholder="auto-generated-from-title"
                                value={blogForm.slug || ''}
                                onChange={e => setBlogForm({ ...blogForm, slug: generateSlug(e.target.value) })}
                              />
                            </div>
                            <div>
                              <label className="label">Blog Content</label>
                              <textarea
                                rows={12}
                                className="input-std"
                                placeholder="Write your article content here..."
                                value={blogForm.content || ''}
                                onChange={e => setBlogForm({ ...blogForm, content: e.target.value })}
                              />
                              <p className="mt-2 text-xs text-gray-400">Basic text formatting supported.</p>
                            </div>
                            <div>
                              <label className="label">Short Excerpt</label>
                              <textarea
                                rows={3}
                                className="input-std"
                                placeholder="Summary for the card view..."
                                value={(blogForm as any).excerpt || ''}
                                onChange={e => setBlogForm({ ...blogForm, excerpt: e.target.value } as any)}
                              />
                            </div>
                          </div>

                          <div className="border border-gray-100 rounded-2xl p-6 space-y-5">
                            <h3 className="text-xl font-black text-brand-blue">SEO Settings</h3>
                            <div>
                              <label className="label">Meta Title</label>
                              <input
                                className="input-std"
                                placeholder="SEO Title (defaults to blog title)"
                                value={blogForm.metaTitle || ''}
                                onChange={e => setBlogForm({ ...blogForm, metaTitle: e.target.value })}
                              />
                            </div>
                            <div>
                              <label className="label">Meta Description</label>
                              <textarea
                                rows={3}
                                className="input-std"
                                placeholder="SEO Description (defaults to excerpt)"
                                value={blogForm.metaDesc || ''}
                                onChange={e => setBlogForm({ ...blogForm, metaDesc: e.target.value })}
                              />
                            </div>
                          </div>
                        </div>

                        <div className="xl:col-span-4">
                          <div className="border border-gray-100 rounded-2xl p-6 space-y-5 sticky top-6">
                            <h3 className="text-xl font-black text-brand-blue">Publishing</h3>
                            <div>
                              <label className="label">Author</label>
                              <input className="input-std" value={blogForm.author || ''} onChange={e => setBlogForm({ ...blogForm, author: e.target.value })} />
                            </div>
                            <div>
                              <label className="label">Category</label>
                              <select className="input-std" value={blogForm.category || 'General'} onChange={e => setBlogForm({ ...blogForm, category: e.target.value })}>
                                {categories.map(c => <option key={c.id} value={c.name}>{c.name}</option>)}
                                <option value="General">General</option>
                              </select>
                            </div>
                            <div>
                              <label className="label">Featured Image URL</label>
                              <input className="input-std" placeholder="https://..." value={blogForm.img || ''} onChange={e => setBlogForm({ ...blogForm, img: e.target.value })} />
                            </div>
                            {blogForm.img ? (
                              <div className="rounded-xl overflow-hidden border border-gray-100 bg-gray-50 aspect-video">
                                <img src={blogForm.img} alt={blogForm.imgAlt || blogForm.title || 'Blog preview'} className="w-full h-full object-cover" />
                              </div>
                            ) : (
                              <div className="rounded-xl border border-dashed border-gray-200 bg-gray-50 h-32" />
                            )}
                            <div>
                              <label className="label">Image Alt Text</label>
                              <input className="input-std" placeholder="Describe the image for accessibility" value={blogForm.imgAlt || ''} onChange={e => setBlogForm({ ...blogForm, imgAlt: e.target.value })} />
                            </div>
                            <div className="grid grid-cols-2 gap-3">
                              <div>
                                <label className="label">Publish Date</label>
                                <input className="input-std" value={blogForm.date || ''} onChange={e => setBlogForm({ ...blogForm, date: e.target.value })} />
                              </div>
                              <div>
                                <label className="label">Read Time</label>
                                <input className="input-std" value={blogForm.readTime || ''} onChange={e => setBlogForm({ ...blogForm, readTime: e.target.value })} />
                              </div>
                            </div>
                            <button className="w-full py-4 bg-brand-blue text-white rounded-xl font-black tracking-wide shadow-xl">
                              {editingId ? 'Update Blog' : 'Publish Blog'}
                            </button>
                          </div>
                        </div>
                     </form>
                  </div>
               )}
            </div>
          )}

          {activeTab === 'media' && (
            <div className="animate-fade-in">
              <MediaManager onLock={setIsLocked} />
            </div>
          )}

          {activeTab === 'settings' && (
            <div className="animate-fade-in space-y-12">
               {/* Sitemap Section */}
               <div className="bg-white rounded-[2.5rem] p-12 shadow-sm border border-gray-100">
                  <h3 className="text-2xl font-black text-brand-blue mb-6">Sitemap Configuration</h3>
                  <div className="space-y-6">
                     <div>
                        <label className="label">Upload Sitemap XML</label>
                        <input 
                          type="file" 
                          accept=".xml"
                          className="input-std"
                          onChange={(e) => {
                            const file = e.target.files?.[0];
                            if (file) {
                               const reader = new FileReader();
                               reader.onload = (ev) => {
                                  setSitemapContent(ev.target?.result as string);
                               };
                               reader.readAsText(file);
                            }
                          }}
                        />
                        <p className="text-xs text-gray-400 mt-2">Upload a valid sitemap.xml file.</p>
                     </div>
                     <div>
                        <label className="label">Sitemap Content (Editable)</label>
                        <textarea 
                          rows={15} 
                          className="input-std json-editor font-mono text-xs" 
                          value={sitemapContent} 
                          onChange={(e) => setSitemapContent(e.target.value)}
                          spellCheck={false}
                          placeholder="<?xml version='1.0' encoding='UTF-8'?>..."
                        />
                     </div>
                     <button 
                       onClick={async () => {
                          setLoading(true);
                          try {
                             await setDoc(doc(db, 'settings', 'sitemap'), {
                                content: sitemapContent,
                                updatedAt: serverTimestamp()
                             });
                             alert('Sitemap updated successfully!');
                          } catch (e) {
                             console.error(e);
                             alert('Error saving sitemap');
                          } finally {
                             setLoading(false);
                          }
                       }}
                       className="py-4 px-8 bg-brand-gold text-white rounded-xl font-black uppercase tracking-widest shadow-xl hover:brightness-110 transition-all"
                     >
                       Save Sitemap
                     </button>
                  </div>
               </div>
            </div>
          )}

        </div>
      </main>
      <style>{`
        .label { display: block; font-size: 10px; font-weight: 900; text-transform: uppercase; margin-bottom: 0.5rem; color: black; }
        .input-std { width: 100%; padding: 0.75rem 1.25rem; border-radius: 0.75rem; background-color: #f9fafb; border: 1px solid #e5e7eb; outline: none; font-weight: 500; color: #0f172a; }
        .input-std:focus { ring: 2px; ring-color: #02385A; }
        .json-editor { overflow: auto; white-space: pre; resize: both; line-height: 1.45; tab-size: 2; font-variant-ligatures: none; }
        .rich-editor { overflow: auto; white-space: pre-wrap; word-break: break-word; line-height: 1.55; }
        .rich-editor a { color: #2563eb; text-decoration: underline; }
      `}</style>
    </div>
  );
};

export default AdminPanel;
