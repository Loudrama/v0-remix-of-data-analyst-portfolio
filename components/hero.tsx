import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, GraduationCap, Target, Download } from "lucide-react"

export function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-emerald-500/5 animate-pulse" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.1),transparent_50%)]" />

      <div className="container mx-auto max-w-5xl text-center relative z-10">
        <div className="space-y-10">
          <div className="space-y-6">
            <div className="animate-fade-in">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-foreground text-balance bg-gradient-to-r from-foreground via-primary to-emerald-600 bg-clip-text text-transparent">
                Amardoul Abdellah
              </h1>
              <div className="h-1 w-32 bg-gradient-to-r from-primary to-emerald-500 mx-auto mt-4 rounded-full" />
            </div>

            <p className="text-2xl md:text-3xl text-muted-foreground font-medium animate-fade-in-delay-1">
              Aspiring Data Analyst
            </p>

            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed animate-fade-in-delay-2">
              Biology graduate turned data enthusiast, currently completing{" "}
              <span className="font-semibold text-primary">Common Core</span> at 1337 School. Passionate about
              transforming data into actionable insights. Seeking internship or entry-level opportunities to apply my
              analytical skills and grow in the field of data analysis.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 animate-fade-in-delay-3">
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-primary-foreground px-10 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              asChild
            >
              <a href="/Amardoul_Abdellah_CV.txt" download="Amardoul_Abdellah_CV.txt">
                <Download className="mr-3 h-6 w-6" />
                Download CV
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="px-10 py-6 text-lg font-semibold bg-background/80 backdrop-blur-sm border-2 hover:bg-muted hover:text-foreground transition-all duration-300 transform hover:scale-105"
              asChild
            >
              <a href="https://github.com/Loudrama" target="_blank" rel="noopener noreferrer">
                <Github className="mr-3 h-6 w-6" />
                View GitHub
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="px-10 py-6 text-lg font-semibold bg-background/80 backdrop-blur-sm border-2 hover:bg-muted hover:text-foreground transition-all duration-300 transform hover:scale-105"
              asChild
            >
              <a
                href="https://www.linkedin.com/in/abdellah-amardoul-752a32229/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="mr-3 h-6 w-6" />
                LinkedIn
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="px-10 py-6 text-lg font-semibold bg-background/80 backdrop-blur-sm border-2 hover:bg-muted hover:text-foreground transition-all duration-300 transform hover:scale-105"
              asChild
            >
              <a href="mailto:abdelamardoul@gmail.com">
                <Mail className="mr-3 h-6 w-6" />
                Contact Me
              </a>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto animate-fade-in-delay-4">
            <div className="bg-gradient-to-br from-background/80 to-muted/30 backdrop-blur-sm rounded-xl p-6 border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg">
              <div className="flex items-center justify-center mb-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
              </div>
              <p className="font-semibold text-foreground mb-1">Education</p>
              <p className="text-sm text-muted-foreground">1337 School (UM6P)</p>
              <p className="text-xs text-primary font-medium">Common Core in Progress</p>
            </div>

            <div className="bg-gradient-to-br from-background/80 to-muted/30 backdrop-blur-sm rounded-xl p-6 border border-border/50 hover:border-emerald-500/30 transition-all duration-300 hover:shadow-lg">
              <div className="flex items-center justify-center mb-3">
                <div className="p-2 bg-emerald-500/10 rounded-lg">
                  <Target className="h-6 w-6 text-emerald-600" />
                </div>
              </div>
              <p className="font-semibold text-foreground mb-1">Current Goal</p>
              <p className="text-sm text-muted-foreground">Data Analyst Position</p>
              <p className="text-xs text-emerald-600 font-medium">Internship or Entry-Level</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
