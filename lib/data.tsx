import { Github, Globe, Twitter } from "lucide-react";

interface NavLink {
  href: string;
  label: string;
}

export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "ReadMe", href: "#readme" },
  { label: "Tech Stack", href: "#techstack" },
  { label: "Templates", href: "#templates" },
  { label: "Resources", href: "#resources" },
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
