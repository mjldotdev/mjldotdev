import {
  Briefcase,
  Cpu,
  Github,
  Globe,
  Home,
  type LucideIcon,
  Twitter,
  User,
} from "lucide-react";

interface NavLink {
  href: string;
  icon: LucideIcon;
  id: string;
  label: string;
}

export const navLinks: NavLink[] = [
  { id: "home", label: "Home", href: "#home", icon: Home },
  { id: "specs", label: "Specs", href: "#specs", icon: Cpu },
  { id: "work", label: "Work", href: "#work", icon: Briefcase },
  { id: "about", label: "About", href: "#about", icon: User },
];

interface SocialLink {
  href: string;
  icon: React.ReactNode;
  label: string;
}

export const socialLinks: SocialLink[] = [
  {
    label: "Website",
    href: "#",
    icon: <Globe className="size-5" />,
  },
  {
    label: "GitHub",
    href: "https://github.com",
    icon: <Github className="size-5" />,
  },
  {
    label: "Twitter",
    href: "https://twitter.com",
    icon: <Twitter className="size-5" />,
  },
];
