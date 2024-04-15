import {
  Activity,
  ArrowRight,
  Check,
  ChevronDown,
  CircuitBoardIcon,
  DollarSign,
  Facebook,
  LayoutDashboardIcon,
  LogIn,
  LogOut,
  LucideIcon,
  LucideProps,
  Moon,
  PanelTop,
  Settings,
  Twitter,
  User,
  User2Icon,
  Users,
  UserX2Icon,
} from "lucide-react";

export type Icon = LucideIcon;
export const Icons = {
  moon: Moon,
  facebook: Facebook,
  twitter: Twitter,
  check: Check,
  arrowRight: ArrowRight,
  dashboard: LayoutDashboardIcon,
  vendors: User,
  employee: UserX2Icon,
  profile: User2Icon,
  kanban: CircuitBoardIcon,
  dollar: DollarSign,
  users: Users,
  activity: Activity,
  panelTop: PanelTop,
  login: LogIn,
  logout: LogOut,
  chevronDown: ChevronDown,
  settings: Settings,

  logo: ({ ...props }: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
    </svg>
  ),
};
