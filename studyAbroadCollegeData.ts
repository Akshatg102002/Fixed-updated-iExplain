import { CollegeDetailData } from './types';

// Study Abroad college pages under Colleges > Study Abroad.
// Keep the shape aligned with `collegeData.ts` entries so App can normalize both
// sources using the same pipeline.
export const STUDY_ABROAD_COLLEGE_DETAILS: Record<string, Partial<CollegeDetailData>> = {
  'northeastern-university': {
    title: 'Northeastern University',
    heroImage: 'https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&q=80&w=1200',
    intro: {
      text: 'Northeastern University is one of the leading private research universities in Boston, USA, known for experiential learning and global co-op opportunities.'
    },
    quickOverview: {
      'University Name': 'Northeastern University',
      'Location': 'Boston, Massachusetts, USA',
      'Type': 'Private Research University',
      'Established': '1898',
      'Popular Programs': 'Engineering, Computer Science, Business, Analytics'
    },
    benefits: {
      intro: 'Why students choose Northeastern University',
      items: [
        { heading: 'Industry Co-op Model', details: 'Students gain real-world experience through structured co-op placements with top employers.' },
        { heading: 'Career Outcomes', details: 'Strong employability and internship outcomes through industry-focused curriculum.' },
        { heading: 'Global Campuses', details: 'Access to global pathways and diverse learning environments.' }
      ]
    } as any,
    documents: ['Academic transcripts', 'English proficiency test score', 'SOP', 'LORs', 'Passport'],
    courses: ['MS Computer Science', 'MS Data Analytics', 'MBA', 'BSc Programs'],
    faqs: [
      {
        question: 'Is Northeastern good for international students?',
        answer: 'Yes. It has a large international student community and strong career-focused programs.'
      }
    ]
  },
  'arizona-state-university': {
    title: 'Arizona State University',
    heroImage: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=1200',
    intro: {
      text: 'Arizona State University (ASU) is a top public research university in the United States, widely known for innovation, interdisciplinary programs, and student support.'
    },
    quickOverview: {
      'University Name': 'Arizona State University',
      'Location': 'Arizona, USA',
      'Type': 'Public Research University',
      'Established': '1885',
      'Popular Programs': 'Engineering, Business, Computer Science, Health Sciences'
    },
    benefits: {
      intro: 'Key advantages of studying at ASU',
      items: [
        { heading: 'Innovation-led Learning', details: 'ASU is consistently recognized for innovation in higher education.' },
        { heading: 'Wide Program Choice', details: 'Offers diverse UG and PG programs aligned with global careers.' },
        { heading: 'Student Resources', details: 'Strong international student support, labs, and research facilities.' }
      ]
    } as any,
    documents: ['Academic transcripts', 'English proficiency test score', 'SOP', 'Passport'],
    courses: ['MS in CS', 'MBA', 'BS Engineering', 'MS Business Analytics'],
    faqs: [
      {
        question: 'Does ASU provide good career support?',
        answer: 'Yes, ASU provides robust internship, career counseling, and employer networking support.'
      }
    ]
  }
};
