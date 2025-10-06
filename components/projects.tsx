import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
    Github,
    BarChart3,
    MessageSquare,
    Gamepad2,
    ExternalLink,
    Lightbulb,
    GraduationCap,
    Box,
} from "lucide-react";

const projects = [
    {
        title: "Cub3D",
        description:
            "Developed a 3D game engine using raycasting techniques in C, inspired by Wolfenstein 3D. This 42 School project demonstrates strong algorithmic thinking, mathematical problem-solving, and graphics programming fundamentals essential for data visualization and computational analysis.",
        icon: Box,
        technologies: [
            "C Programming",
            "Raycasting Algorithm",
            "Graphics Programming",
            "Mathematics",
            "Performance Optimization",
        ],
        githubUrl: "https://github.com/Loudrama/cub_3d42",
        highlights: [
            "3D rendering from 2D map",
            "Raycasting algorithm implementation",
            "Texture mapping and graphics",
            "Mathematical problem-solving",
        ],
        gradient: "from-violet-500/10 via-purple-500/10 to-fuchsia-500/10",
        iconColor: "text-violet-600",
    },
    {
        title: "Transcendence",
        description:
            "A comprehensive multiplayer web application developed as part of 1337 School curriculum. Features real-time gaming with chat functionality and interactive dashboards, providing hands-on experience in data flow structuring, user interaction patterns, and team collaboration.",
        icon: BarChart3,
        technologies: [
            "Web Development",
            "Real-time Features",
            "Team Collaboration",
            "Data Structures",
            "Dashboard Design",
        ],
        githubUrl: "https://github.com/Loudrama/game_pad42",
        highlights: [
            "Multiplayer functionality",
            "Real-time chat system",
            "Interactive dashboards",
            "Team project leadership",
        ],
        gradient: "from-blue-500/10 via-indigo-500/10 to-purple-500/10",
        iconColor: "text-blue-600",
    },
    {
        title: "IRC Chat Server",
        description:
            "Built a robust real-time Internet Relay Chat server in C++ as part of 1337 School projects. Handles multiple concurrent users with efficient data processing, strengthening problem-solving skills in real-time data handling and server architecture design.",
        icon: MessageSquare,
        technologies: [
            "C++",
            "Socket Programming",
            "Real-time Systems",
            "Server Architecture",
            "Data Processing",
        ],
        githubUrl: "https://github.com/Loudrama/ft_irc",
        highlights: [
            "Real-time messaging",
            "Multi-user support",
            "Network programming",
            "System optimization",
        ],
        gradient: "from-emerald-500/10 via-green-500/10 to-teal-500/10",
        iconColor: "text-emerald-600",
    },
    {
        title: "So Long (2D Game)",
        description:
            "Designed and developed a structured 2D game in C as part of 1337 curriculum. Focused on breaking down complex problems into analytical solutions, demonstrating logical thinking, systematic problem-solving approach, and algorithm optimization.",
        icon: Gamepad2,
        technologies: [
            "C Programming",
            "Game Logic",
            "Algorithm Design",
            "Problem Solving",
            "Performance Optimization",
        ],
        githubUrl: "https://github.com/Loudrama/so_long42",
        highlights: [
            "2D game mechanics",
            "Structured programming",
            "Logic implementation",
            "Algorithm optimization",
        ],
        gradient: "from-orange-500/10 via-red-500/10 to-pink-500/10",
        iconColor: "text-orange-600",
    },
];

export function Projects() {
    return (
        <section id="projects" className="py-32 px-6 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-muted/20 via-background to-muted/20" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(120,119,198,0.05),transparent_50%)]" />

            <div className="container mx-auto max-w-7xl relative z-10">
                <div className="text-center mb-20">
                    <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
                        <Lightbulb className="h-4 w-4" />
                        Academic Projects
                    </div>
                    <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6 text-balance">
                        Building{" "}
                        <span className="bg-gradient-to-r from-primary to-emerald-600 bg-clip-text text-transparent">
                            Experience
                        </span>
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
                        Key projects from 1337 School demonstrating analytical
                        thinking, problem-solving skills, and technical growth
                        in preparation for data analysis roles
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10">
                    {projects.map((project, index) => {
                        const IconComponent = project.icon;
                        return (
                            <Card
                                key={index}
                                className={`group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-gradient-to-br ${project.gradient} border-border/50 hover:border-primary/30 relative overflow-hidden`}
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                <CardHeader className="pb-6 relative z-10">
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="p-3 bg-background/80 rounded-xl group-hover:scale-110 transition-transform duration-300">
                                            <IconComponent
                                                className={`h-7 w-7 ${project.iconColor}`}
                                            />
                                        </div>
                                        <div className="flex gap-2">
                                            <Button
                                                size="sm"
                                                variant="ghost"
                                                className="h-9 w-9 p-0 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-muted hover:text-foreground cursor-pointer"
                                                asChild
                                            >
                                                <a
                                                    href={project.githubUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    <Github className="h-4 w-4" />
                                                    <span className="sr-only">
                                                        View source code
                                                    </span>
                                                </a>
                                            </Button>
                                        </div>
                                    </div>
                                    <CardTitle className="text-2xl text-card-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                                        {project.title}
                                    </CardTitle>
                                    <CardDescription className="text-muted-foreground leading-relaxed text-base">
                                        {project.description}
                                    </CardDescription>
                                </CardHeader>

                                <CardContent className="pt-0 relative z-10">
                                    <div className="space-y-6">
                                        <div className="flex flex-wrap gap-2">
                                            {project.technologies.map(
                                                (tech, techIndex) => (
                                                    <Badge
                                                        key={techIndex}
                                                        variant="outline"
                                                        className="text-xs border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300 bg-background/60"
                                                    >
                                                        {tech}
                                                    </Badge>
                                                )
                                            )}
                                        </div>

                                        <div className="space-y-2">
                                            <h4 className="text-sm font-semibold text-foreground mb-3">
                                                Key Achievements
                                            </h4>
                                            {project.highlights.map(
                                                (highlight, highlightIndex) => (
                                                    <div
                                                        key={highlightIndex}
                                                        className="flex items-center text-sm text-muted-foreground"
                                                    >
                                                        <div className="w-2 h-2 bg-gradient-to-r from-primary to-emerald-500 rounded-full mr-3 flex-shrink-0" />
                                                        {highlight}
                                                    </div>
                                                )
                                            )}
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        );
                    })}
                </div>

                <div className="mt-20">
                    <Card className="bg-gradient-to-r from-primary/5 via-background/80 to-emerald-500/5 border-border/50 hover:border-primary/30 transition-all duration-500 p-10 text-center">
                        <div className="max-w-3xl mx-auto">
                            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
                                <GraduationCap className="h-4 w-4" />
                                Currently Learning
                            </div>
                            <h3 className="text-2xl font-bold text-foreground mb-4">
                                Expanding Data Analysis Skills
                            </h3>
                            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                                Actively pursuing IBM Data Analyst and Google
                                Data Analytics certifications while gaining
                                hands-on experience with Python, pandas, data
                                visualization tools, and statistical analysis
                                methods. Committed to continuous learning and
                                applying analytical thinking to real-world data
                                challenges.
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="px-8 bg-background/80 hover:bg-muted hover:text-foreground transition-all duration-300 transform hover:scale-105 cursor-pointer"
                                    asChild
                                >
                                    <a
                                        href="https://github.com/Loudrama"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <Github className="mr-2 h-5 w-5" />
                                        View All Projects
                                    </a>
                                </Button>
                                <Button
                                    size="lg"
                                    className="bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-primary-foreground px-8 transition-all duration-300 transform hover:scale-105"
                                    asChild
                                >
                                    <a
                                        href="mailto:abdelamardoul@gmail.com"
                                        rel="noopener noreferrer"
                                    >
                                        <ExternalLink className="mr-2 h-5 w-5" />
                                        Get In Touch
                                    </a>
                                </Button>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </section>
    );
}
