export interface Profile {
  id: number;
  name: string;
  tagline: string;
  bio: string;
  email: string;
  phone: string;
  profile_image: string;
  address: string;
  years_experience: number;
  available_for_work: boolean;
  projects_completed: number;
  happy_clients: number;
}

export interface SocialMedia {
  id: number;
  platform: string;
  url: string;
  icon_class: string;
}

export interface WorkExperience {
  id: number;
  company_name: string;
  position: string;
  start_date: string;
  end_date: string;
  company_logo: string;
}

export interface Skill {
  id: number;
  name: string;
  icon: string;
}

export interface Service {
  id: number;
  name: string;
  icon: string;
}

export interface Project {
  id: number;
  name: string;
  slug: string;
  description: string;
  main_image: string;
  images: ProjectImage[];
  service: string;
  client: string;
  project_url: string;
  github_url: string;
  created_at: string;
  updated_at: string;
}

export interface ProjectImage {
  id: number;
  image_url: string;
}

export interface Testimonials {
  id: number;
  client_name: string;
  client_position: string;
  project_url: string;
  testimonial: string;
  rating: number;
}

export interface Faq {
  id: number;
  question: string;
  answer: string;
}
