import { Bell, LogOut } from "lucide-react";
import { format } from "date-fns";
import { id } from "date-fns/locale";
import { Link } from "react-router-dom";

interface PMHeaderProps {
  userName: string;
}

const getGreeting = () => {
  const hour = new Date().getHours();
  if (hour < 12) return "Selamat Pagi";
  if (hour < 15) return "Selamat Siang";
  if (hour < 18) return "Selamat Sore";
  return "Selamat Malam";
};

export const PMHeader = ({ userName }: PMHeaderProps) => {
  const today = new Date();
  const formattedDate = format(today, "EEEE, dd MMMM yyyy", { locale: id });

  return (
    <header className="bg-primary px-6 py-4 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <h1 className="text-lg font-bold text-primary-foreground">
          Project Manager Dashboard
        </h1>
        <span className="text-primary-foreground/70 text-sm hidden md:inline">
          • {getGreeting()}, {userName}! 👋
        </span>
      </div>
      <div className="flex items-center gap-3">
        <span className="text-primary-foreground/80 text-sm hidden lg:inline">
          {formattedDate}
        </span>
        <button className="relative p-2 hover:bg-primary-foreground/10 rounded-lg transition-colors">
          <Bell className="w-5 h-5 text-primary-foreground" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-danger rounded-full animate-pulse" />
        </button>
        <Link
          to="/"
          className="flex items-center gap-2 px-4 py-2 bg-danger hover:bg-danger/90 text-danger-foreground rounded-lg text-sm font-medium transition-colors"
        >
          <LogOut className="w-4 h-4" />
          <span>Logout</span>
        </Link>
      </div>
    </header>
  );
};
