import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "@/components/theme-provider"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark")
    } else if (theme === "dark") {
      setTheme("system")
    } else {
      setTheme("light")
    }
  }

  const getIcon = () => {
    if (theme === "light") return <Sun className="h-4 w-4" />
    if (theme === "dark") return <Moon className="h-4 w-4" />
    return <Sun className="h-4 w-4" />
  }

  const getTooltip = () => {
    if (theme === "light") return "Cambiar a modo oscuro"
    if (theme === "dark") return "Cambiar a modo sistema"
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