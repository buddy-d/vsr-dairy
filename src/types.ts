export interface Product {
  id: string;
  name: string;
  category: 'milk' | 'curd' | 'ghee';
  description: string;
  highlight: string;
  image: string;
  benefits: string[];
  nutrients: {
    fat: string;
    protein: string;
    calcium: string;
    energy: string;
  };
  packaging: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  rating: number;
  comment: string;
  avatar: string;
}

export interface ProcessStep {
  id: number;
  title: string;
  description: string;
  iconName: string;
  color: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'farm' | 'products' | 'hygiene';
  image: string;
  description: string;
}

export interface ContactInquiry {
  name: string;
  phone: string;
  email: string;
  product: string;
  message: string;
}
