import { EntranceExamData, EntranceExamDataMap } from './types.ts';

export const ENTRANCE_EXAM_DETAILS: EntranceExamDataMap = {
  'neet-ug': {
    title: 'NEET UG',
    heroImage: 'https://images.unsplash.com/photo-1579165466949-3180a3d056d1?auto=format&fit=crop&q=80&w=1600',
    intro: 'NEET UG is India’s national-level medical entrance exam for admission to MBBS, BDS, and allied undergraduate medical programs in government and private colleges.',
    examParts: ['Physics', 'Chemistry', 'Biology (Botany + Zoology)'],
    additionalNote: 'The exam is conducted in offline mode and is mandatory for MBBS admissions in India.',
    eligibility: {
      title: 'NEET UG Eligibility',
      points: [
        'Completed 10+2 with Physics, Chemistry, and Biology/Biotechnology.',
        'Minimum qualifying marks as per category norms.',
        'Minimum age criteria as per the latest NEET notification.'
      ]
    },
    syllabus: {
      physics: {
        sectionA: ['Class 11 & 12 Physics concepts', 'Mechanics, Thermodynamics, Modern Physics', 'Electrostatics and Current Electricity'],
        sectionB: ['Application-based numericals', 'Assertion-reason style conceptual practice', 'Experimental interpretation questions']
      },
      chemistry: {
        physical: ['Mole Concept', 'Thermodynamics', 'Chemical Kinetics', 'Electrochemistry'],
        inorganic: ['Periodic Table', 'Chemical Bonding', 'p-Block Elements', 'Coordination Compounds'],
        organic: ['Hydrocarbons', 'Haloalkanes', 'Alcohols and Phenols', 'Biomolecules']
      },
      biology: ['Cell Structure', 'Genetics and Evolution', 'Human Physiology', 'Ecology and Environment']
    },
    preparationTips: [
      'Follow NCERT thoroughly for Biology and Chemistry.',
      'Practice chapter-wise MCQs daily with timers.',
      'Revise formulas and short notes every week.',
      'Attempt full-length mock tests regularly.',
      'Analyze mistakes and build an error notebook.'
    ]
  },
  'jee-main': {
    title: 'JEE Main',
    heroImage: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=1600',
    intro: 'JEE Main is the national engineering entrance exam for admission into NITs, IIITs, and other participating institutes, and it is also the qualifying exam for JEE Advanced.',
    examParts: ['Mathematics', 'Physics', 'Chemistry'],
    eligibility: {
      title: 'JEE Main Eligibility',
      points: [
        'Passed or appearing in Class 12 with PCM.',
        'Subject combination as per chosen engineering program.',
        'Number of attempts and year-of-passing criteria as per NTA guidelines.'
      ]
    },
    syllabus: {
      maths: ['Algebra', 'Coordinate Geometry', 'Calculus', 'Vectors and 3D Geometry'],
      physics: {
        sectionA: ['Kinematics and Laws of Motion', 'Work, Energy and Power', 'Waves and Optics', 'Current Electricity'],
        sectionB: ['Experimental skills', 'Graph-based interpretation', 'Mixed concept numericals']
      },
      chemistry: {
        physical: ['Atomic Structure', 'States of Matter', 'Chemical Equilibrium'],
        inorganic: ['Periodic Properties', 'Chemical Bonding', 'd and f Block'],
        organic: ['General Organic Chemistry', 'Aromatic Compounds', 'Polymers']
      }
    },
    preparationTips: [
      'Strengthen concepts before jumping to advanced problems.',
      'Solve previous year papers and chapter-wise tests.',
      'Track weak topics and revise with targeted practice.',
      'Practice speed + accuracy with timed mocks.'
    ]
  },
  cat: {
    title: 'CAT',
    heroImage: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1600',
    intro: 'CAT is the key management entrance exam for MBA/PGDM admissions in IIMs and many top B-schools in India.',
    examParts: ['VARC', 'DILR', 'QA'],
    eligibility: {
      title: 'CAT Eligibility',
      points: [
        'Bachelor’s degree with minimum percentage as per official CAT criteria.',
        'Final-year students can also apply.',
        'No specific stream restriction for graduation.'
      ]
    },
    syllabus: {
      maths: ['Arithmetic', 'Algebra', 'Number System', 'Modern Math']
    },
    preparationTips: [
      'Build reading habit daily for VARC.',
      'Practice LRDI sets with sectional time constraints.',
      'Focus on arithmetic and algebra for QA.',
      'Take mocks regularly and review percentile trends.'
    ]
  },
  clat: {
    title: 'CLAT',
    heroImage: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=1600',
    intro: 'CLAT is the national-level law entrance examination for undergraduate and postgraduate law programs in NLUs and participating institutes.',
    examParts: ['English', 'Current Affairs', 'Legal Reasoning', 'Logical Reasoning', 'Quantitative Techniques'],
    eligibility: {
      title: 'CLAT Eligibility',
      points: [
        'Passed or appearing in Class 12 (for UG).',
        'Minimum marks as per category norms.',
        'No upper age limit as per current norms.'
      ]
    },
    syllabus: {
      maths: ['Basic Arithmetic', 'Data Interpretation', 'Ratio and Proportion', 'Percentages']
    },
    preparationTips: [
      'Read editorials and legal news daily.',
      'Practice comprehension-based legal reasoning sets.',
      'Improve speed and interpretation in logical reasoning.',
      'Take mock tests to improve sectional balancing.'
    ]
  },
  cuet: {
    title: 'CUET',
    heroImage: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&q=80&w=1600',
    intro: 'CUET is a common entrance test for undergraduate admissions to central universities and other participating institutions in India.',
    examParts: ['Language Test', 'Domain Subjects', 'General Test'],
    eligibility: {
      title: 'CUET Eligibility',
      points: [
        'Passed or appearing in Class 12 from a recognized board.',
        'Subject requirements depend on chosen university and course.',
        'Category-wise criteria apply as per participating institutions.'
      ]
    },
    syllabus: {
      maths: ['Numerical Ability', 'Basic Algebra', 'Data Interpretation', 'Logical Quantitative Problems']
    },
    preparationTips: [
      'Choose domain subjects aligned with target courses.',
      'Practice NCERT-based concepts for domain sections.',
      'Prepare language and general test in parallel.',
      'Solve CUET-style mocks to improve timing.'
    ]
  }
};

