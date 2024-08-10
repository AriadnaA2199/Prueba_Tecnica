export interface User {
  name: string;
  email: string;
  title: string;
  department: string;
  status: string;
  role: string;
  avatar?: string; // Añadido para permitir la propiedad 'avatar'
}
