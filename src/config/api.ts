export const API_URL = import.meta.env.VITE_API_URL;
export const STORAGE_URL = import.meta.env.VITE_STORAGE_URL;

// Bisa tambahkan endpoints specific constants
export const ENDPOINTS = {
  PROFILE: `${API_URL}/profile`,
  SKILLS: `${API_URL}/skills`,
  PROJECTS: `${API_URL}/projects`,
  PROJECT_DETAIL: (id: string | number | undefined) => {
    if (!id) return `${API_URL}/project`;
    return `${API_URL}/project/${id}`;
  },
  SERVICES: `${API_URL}/services`,
  WORK_EXPERIENCE: `${API_URL}/work-experience`,
  TESTIMONIALS: `${API_URL}/testimonials`,
  SOCIAL_MEDIA: `${API_URL}/social-media`,
  FAQS: `${API_URL}/faq`,
  CONTACTS: `${API_URL}/contacts`,
} as const;

export const getStorageUrl = (path: string) => {
  if (!path) return "";
  const cleanPath = path.startsWith("/") ? path.slice(1) : path;
  return `${STORAGE_URL}/${cleanPath}`;
};
