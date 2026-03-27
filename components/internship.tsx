import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BarChart3, TrendingUp, Database, Zap, Target, LineChart } from "lucide-react"

const internshipWork = [
  {
    title: "Seller Performance Analytics Extension",
    description:
      "Developing a comprehensive Chrome extension that provides real-time seller performance metrics and KPI tracking. Enables data-driven decision making by visualizing key business metrics and trends.",
    icon: TrendingUp,
    technologies: ["Python", "SQL", "Data Visualization", "Chrome Extension", "Real-time Analytics"],
    keyMetrics: ["Seller Performance Tracking", "KPI Visualization", "Trend Analysis", "Data Automation"],
    color: "from-blue-500/10 via-indigo-500/10 to-blue-500/10",
    iconColor: "text-blue-600",
  },
  {
    title: "Business Intelligence Dashboards",
    description:
      "Creating interactive dashboards to monitor business metrics, sales trends, and operational performance. Building automated reporting systems that provide actionable insights to stakeholders.",
    icon: BarChart3,
    technologies: ["Power BI", "SQL", "Python", "Data Aggregation", "Dashboard Design"],
    keyMetrics: ["Real-time KPI Monitoring", "Automated Reporting", "Sales Analytics", "Performance Trends"],
    color: "from-emerald-500/10 via-green-500/10 to-emerald-500/10",
    iconColor: "text-emerald-600",
  },
  {
    title: "Data Pipeline Development",
    description:
      "Building and optimizing data pipelines that extract, transform, and load data from multiple sources. Ensuring data quality and consistency for accurate analytics and reporting.",
    icon: Database,
    technologies: ["SQL", "Python", "Data Cleaning", "ETL Processes", "Data Validation"],
    keyMetrics: ["Data Quality Assurance", "Automated ETL", "Performance Optimization", "Error Handling"],
    color: "from-purple-500/10 via-violet-500/10 to-purple-500/10",
    iconColor: "text-purple-600",
  },
]

export function Internship() {
  return (
    <section id="internship" className="py-32 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-muted/20 via-background to-muted/20" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_30%,rgba(59,130,246,0.05),transparent_50%)]" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Zap className="h-4 w-4" />
            Internship at CODpartner
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6 text-balance">
            Business Intelligence &{" "}
            <span className="bg-gradient-to-r from-primary to-emerald-600 bg-clip-text text-transparent">
              Analytics Work
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Currently developing tools and dashboards that provide real-time insights into seller performance and 
            business metrics. Leveraging data analysis skills to drive strategic decision-making.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {internshipWork.map((item, index) => {
            const IconComponent = item.icon
            return (
              <Card
                key={index}
                className={`group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-gradient-to-br ${item.color} border-border/50 hover:border-primary/30 relative overflow-hidden`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <CardHeader className="pb-6 relative z-10">
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-background/80 rounded-xl group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className={`h-7 w-7 ${item.iconColor}`} />
                    </div>
                  </div>
                  <CardTitle className="text-2xl text-card-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                    {item.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground leading-relaxed text-base">
                    {item.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="pt-0 relative z-10">
                  <div className="space-y-6">
                    <div className="flex flex-wrap gap-2">
                      {item.technologies.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="outline"
                          className="text-xs border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300 bg-background/60"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold text-foreground mb-3">Key Focus Areas</h4>
                      {item.keyMetrics.map((metric, metricIndex) => (
                        <div key={metricIndex} className="flex items-center text-sm text-muted-foreground">
                          <div className="w-2 h-2 bg-gradient-to-r from-primary to-emerald-500 rounded-full mr-3 flex-shrink-0" />
                          {metric}
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <Card className="bg-gradient-to-r from-primary/5 via-background/80 to-emerald-500/5 border-border/50 hover:border-primary/30 transition-all duration-500 p-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/10 rounded-lg mt-1">
                <LineChart className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Advanced Analytics</h4>
                <p className="text-sm text-muted-foreground">
                  Applying statistical analysis and trend forecasting to identify business opportunities and risks.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-emerald-500/10 rounded-lg mt-1">
                <Target className="h-6 w-6 text-emerald-600" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Data-Driven Insights</h4>
                <p className="text-sm text-muted-foreground">
                  Translating complex data into clear, actionable recommendations for strategic planning.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-blue-500/10 rounded-lg mt-1">
                <Database className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Data Infrastructure</h4>
                <p className="text-sm text-muted-foreground">
                  Designing robust data systems that ensure accuracy, reliability, and scalability.
                </p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
