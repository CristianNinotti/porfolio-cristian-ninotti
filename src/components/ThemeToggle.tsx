import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "@/components/theme-provider"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    console.log("Current theme:", theme)
    const newTheme = theme === "light" ? "dark" : "light"
    console.log("Setting new theme:", newTheme)
    setTheme(newTheme)
  }

  const getIcon = () => {
    // Show sun when in dark mode (to indicate you can switch to light)
    // Show moon when in light mode (to indicate you can switch to dark)
    if (theme === "light") return <Moon className="h-4 w-4" />
    return <Sun className="h-4 w-4" />
  }

  const getTooltip = () => {
    if (theme === "light") return "Cambiar a modo oscuro"
    return "Cambiar a modo claro"
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      title={getTooltip()}
      className="transition-colors hover:bg-accent"
    >
      {getIcon()}
    </Button>
  )
}