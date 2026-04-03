export const createSlug = (text: string) => text ? text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '') : '';

export const createTitlePath = (title: string) => `/${createSlug(title)}`;

export const createStudyInPath = (country: string) => createTitlePath(`Study in ${country}`);

export const createMBBSInPath = (country: string) => createTitlePath(`MBBS in ${country}`);

export const createIndiaProgramPath = (program: string) => createTitlePath(`${program} in India`);
