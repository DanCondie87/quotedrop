export interface Gradient {
  from: string;
  to: string;
}

export const gradients: Gradient[] = [
  { from: '#667eea', to: '#764ba2' }, // Purple Dream
  { from: '#f093fb', to: '#f5576c' }, // Pink Sunset
  { from: '#4facfe', to: '#00f2fe' }, // Ocean Blue
  { from: '#43e97b', to: '#38f9d7' }, // Mint Fresh
  { from: '#fa709a', to: '#fee140' }, // Peach Glow
  { from: '#30cfd0', to: '#330867' }, // Deep Ocean
  { from: '#a8edea', to: '#fed6e3' }, // Soft Cotton
  { from: '#ff9a9e', to: '#fecfef' }, // Rose Quartz
  { from: '#ffecd2', to: '#fcb69f' }, // Warm Flame
  { from: '#ff6e7f', to: '#bfe9ff' }, // Cotton Candy
  { from: '#e0c3fc', to: '#8ec5fc' }, // Sky Lavender
  { from: '#f093fb', to: '#f5576c' }, // Magic Pink
  { from: '#4facfe', to: '#00f2fe' }, // Cool Blues
  { from: '#667eea', to: '#764ba2' }, // Velvet Sun
  { from: '#fbc2eb', to: '#a6c1ee' }, // Happy Fisher
];

export function getRandomGradient(): Gradient {
  return gradients[Math.floor(Math.random() * gradients.length)];
}
