import { AnnouncementBar } from "@/components/AnnouncementBar"
import { Header } from "@/components/Header"
import { HeroSection } from "@/components/HeroSection"

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <AnnouncementBar />
      <Header />
      <HeroSection />
    </div>
  )
}

export default App