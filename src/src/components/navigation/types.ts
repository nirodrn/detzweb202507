import { LucideIcon } from 'lucide-react';

export interface MenuItem {
  title: string;
  path: string;
  icon: LucideIcon;
}

export interface ServiceMenuItem extends MenuItem {
  submenu: {
    label: string;
    icon: LucideIcon;
    description: string;
  }[];
}

export interface NavLinkProps {
  to: string;
  icon: LucideIcon;
  label: string;
  mobile?: boolean;
  onClick?: () => void;
}