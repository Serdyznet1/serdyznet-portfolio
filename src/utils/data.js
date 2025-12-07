import * as Icons from './icons';
export const navLinks = [
  { name: 'HOME', to: 'home' },
  { name: 'ABOUT ME', to: 'about' },
  { name: 'PROJECTS', to: 'projects' },
  { name: 'SKILLS', to: 'skills' },
  { name: 'MY TEAM', to: 'team' },
  { name: 'CONTACT ME', to: 'contact' },
];

export const socialMedia = [
  { icon: 'x', url: 'https://x.com/sadissuleiman1?s=11' },
  { icon: 'facebook', url: 'https://www.facebook.com/sadis.suleiman.73' },
  { icon: 'linkedin', url: 'https://www.linkedin.com/in/sadis-suleiman-945787260' },
  { icon: 'github', url: 'https://github.com/serdyznet1' },
  { icon: 'instagram', url: 'https://www.instagram.com/sadis.suleiman_' },
];

export const projects = [
  { 
    title: 'Serdyznet Telecom', 
    description: 'A full-stack website for telecommunication subscriptions.', 
    link: 'https://serdyznettelecom.com', 
    image: process.env.PUBLIC_URL + '/telecoms.png' 
  },
  { 
    title: 'Octapus.org', 
    description: 'A comprehensive educational website and learning platform.', 
    link: 'https://octapus.org', 
    image: process.env.PUBLIC_URL +'/octapus.png' 
  },
  { 
    title: 'Corporate Branding', 
    description: 'Branding and design work for clients like Lamshefs Collection, Talamine Nig Ltd, and Octapus Team.', 
    link: '#', 
    image: process.env.PUBLIC_URL + '/branding.png' 
  },
];

export const skills = {
  programming: [
    { name: 'JavaScript', p: 85 },
    { name: 'React.js', p: 80 },
    { name: 'Node.js', p: 75 },
    { name: 'Python', p: 80 },
    { name: 'Java', p: 70 },
  ],
  design: [
    { name: 'UI/UX Design', percentage: 75 }, 
    { name: 'Graphic Design', percentage: 85 }, 
    { name: 'Figma', percentage: 70 }, 
    { name: 'Corel Draw', percentage: 85 }, 
    { name: 'Adobe', percentage: 80 },
  ],
  securityData: [
    { name: 'Cyber Security', p: 80 },
    { name: 'Ethical Hacking', p: 70 },
    { name: 'Linux', p: 75 },
    { name: 'Ubuntu', p: 65 },
    { name: 'Fosonic', p: 65 },
  ],
  other: [
    { name: 'Blockchain Dev', p: 75 },
    { name: 'Web3 Guru', p: 80 },
    { name: 'Forex Expert', p: 85 },
    { name: 'Financial Analyst', p: 70 },
    { name: 'Digital Marketer', p: 70 },
  ],
};
// ... existing imports and other exports ...

export const teamMembers = [
  { name: 'SURAJ ABUBAKAR', role: 'Project Manager', image: process.env.PUBLIC_URL + "/member1.jpg"
},
  { name: 'EMMANUEL MANDONG', role: 'UI/UX Designer',  image: process.env.PUBLIC_URL + "/member2.jpg"
 },
  { name: 'KABIR AHMAD', role: 'Software Engineer', image: process.env.PUBLIC_URL + "/member3.jpg"
 },
  { name: 'MUHAMMAD KABIR', role: 'Frontend Dev', image: process.env.PUBLIC_URL + "/member4.jpg"
 },
  { name: 'MUHAMMAD JIBRIN', role: 'Backend Dev', image: process.env.PUBLIC_URL + "/member5.jpg"
 },
  { name: 'ANAR HUSSAINI', role: 'FullStack Dev', image: process.env.PUBLIC_URL + "/member6.jpg"
 },
  { name: 'IBRAHIM YAHAYA', role: 'AI/Data Specialist', image: process.env.PUBLIC_URL + "/member7.jpg"
 },
  { name: 'ABDULLHAKIM FATIMA', role: 'Digital Marketer', image: process.env.PUBLIC_URL + "/member8.jpg" },
];
