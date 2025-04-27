
import { useEffect } from 'react';
import { Moon, Sun, Monitor } from 'lucide-react';
import { useTheme, applyTheme } from '@/lib/theme';
import { cn } from '@/lib/utils';

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, setTheme } = useTheme();
  
  // Apply theme on initial load and when theme changes
  useEffect(() => {
    applyTheme(theme);
    
    // Listen for system theme changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const handleChange = () => {
      if (theme === 'system') {
        applyTheme('system');
      }
    };
    
    mediaQuery.addEventListener('change', handleChange);
    
    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, [theme]);
  
  return (
    <div className={cn("flex items-center gap-2 p-1 rounded-full bg-secondary", className)}>
      <button
        onClick={() => setTheme('light')}
        className={cn(
          "p-2 rounded-full transition-all", 
          theme === 'light' 
            ? "bg-background text-primary shadow-sm" 
            : "text-muted-foreground hover:text-foreground"
        )}
        aria-label="Light mode"
      >
        <Sun size={18} />
      </button>
      
      <button
        onClick={() => setTheme('dark')}
        className={cn(
          "p-2 rounded-full transition-all", 
          theme === 'dark' 
            ? "bg-background text-primary shadow-sm" 
            : "text-muted-foreground hover:text-foreground"
        )}
        aria-label="Dark mode"
      >
        <Moon size={18} />
      </button>
      
      <button
        onClick={() => setTheme('system')}
        className={cn(
          "p-2 rounded-full transition-all", 
          theme === 'system' 
            ? "bg-background text-primary shadow-sm" 
            : "text-muted-foreground hover:text-foreground"
        )}
        aria-label="System preference"
      >
        <Monitor size={18} />
      </button>
    </div>
  );
}
