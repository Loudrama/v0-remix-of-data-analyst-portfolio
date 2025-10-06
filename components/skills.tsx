import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Database, BarChart3, Users, BookOpen } from "lucide-react"

const skillCategories = [
  {
    title: "Technical Skills",
    icon: Database,
    skills: [
      "Python (Pandas, NumPy, Matplotlib)",
      "SQL (queries, joins, aggregations)",
      "Excel (Formulas, Pivot Tables, Charts)",
      "Power BI (dashboards, visualization)",
      "Git, Linux",
      "C, C++ (Foundation)",
      "HTML, CSS, JavaScript (Basic)",
    ],
    color: "from-blue-500/10 to-indigo-500/10",
    iconColor: "text-blue-600",
  },
  {
    title: "Data & Analytical Skills",
    icon: BarChart3,
    skills: [
      "Data Cleaning",
      "Data Visualization",
      "Exploratory Data Analysis (EDA)",
      "Statistical Analysis",
      "Hypothesis Testing",
      "KPI Tracking & Reporting",
      "Quantitative Analysis",
      "Pattern Recognition",
      "Trend Analysis",
      "Business Insights & Decision Making",
    ],
    color: "from-emerald-500/10 to-green-500/10",
    iconColor: "text-emerald-600",
  },
  {
    title: "Soft Skills",
    icon: Users,
    skills: [
      "Attention to Detail",
      "Problem Solving",
      "Critical Thinking",
      "Communication of Insights",
      "Team Collaboration",
      "Adaptability",
    ],
    color: "from-purple-500/10 to-violet-500/10",
    iconColor: "text-purple-600",
  },
]

export function Skills() {
  return (
    <section
      id="skills"
      className="py-32 px-6 bg-gradient-to-b from-background via-muted/20 to-background relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(120,119,198,0.05),transparent_50%)]" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <BookOpen className="h-4 w-4" />
            My Expertise
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6 text-balance">
            Skills &{" "}
            <span className="bg-gradient-to-r from-primary to-emerald-600 bg-clip-text text-transparent">
              Competencies
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            A comprehensive toolkit combining technical proficiency, analytical thinking, and interpersonal skills
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon
            return (
              <Card
                key={index}
                className={`p-8 hover:shadow-2xl transition-all duration-500 transform hover:scale-105 bg-gradient-to-br ${category.color} border-border/50 hover:border-primary/30 group`}
              >
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-background/80 rounded-xl mr-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className={`h-7 w-7 ${category.iconColor}`} />
                  </div>
                  <h3 className="text-xl font-bold text-card-foreground">{category.title}</h3>
                </div>
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex items-start">
                      <div className="w-2 h-2 bg-gradient-to-r from-primary to-emerald-500 rounded-full mr-3 mt-1.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{skill}</span>
                    </div>
                  ))}
                </div>
              </Card>
            )
          })}
        </div>

        <Card className="p-10 bg-gradient-to-r from-muted/30 via-background/50 to-muted/30 border-border/50 hover:border-primary/30 transition-all duration-500">
          <div className="flex items-center justify-center mb-8">
            <div className="p-3 bg-primary/10 rounded-xl mr-4">
              <BookOpen className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-card-foreground">Education & Certifications</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-background/60 rounded-lg p-6 border border-border/30">
              <h4 className="font-bold text-lg text-foreground mb-2">1337 School (UM6P)</h4>
              <p className="text-sm text-muted-foreground mb-2">Common Core Program</p>
              <Badge variant="secondary" className="text-xs">
                In Progress
              </Badge>
            </div>
            <div className="bg-background/60 rounded-lg p-6 border border-border/30">
              <h4 className="font-bold text-lg text-foreground mb-2">Biology Degree</h4>
              <p className="text-sm text-muted-foreground mb-2">University Background</p>
              <Badge variant="secondary" className="text-xs">
                Completed
              </Badge>
            </div>
            <div className="bg-background/60 rounded-lg p-6 border border-border/30">
              <h4 className="font-bold text-lg text-foreground mb-2">IBM Data Analytics</h4>
              <p className="text-sm text-muted-foreground mb-2">Professional Certificate</p>
              <Badge variant="outline" className="text-xs border-primary text-primary">
                Learning
              </Badge>
            </div>
            <div className="bg-background/60 rounded-lg p-6 border border-border/30">
              <h4 className="font-bold text-lg text-foreground mb-2">Google Data Analytics</h4>
              <p className="text-sm text-muted-foreground mb-2">Professional Certificate</p>
              <Badge variant="outline" className="text-xs border-primary text-primary">
                Learning
              </Badge>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
