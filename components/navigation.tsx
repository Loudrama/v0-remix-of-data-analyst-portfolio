"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export function Navigation() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);

        if (element) {
            const offsetTop = element.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: "smooth",
            });
        }
    };

    return (
        <nav
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${
                isScrolled
                    ? "bg-background/80 backdrop-blur-md border-b border-border"
                    : "bg-transparent"
            } `}
        >
            <div className="container mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    <div className="font-mono text-lg font-semibold text-foreground">
                        AA
                    </div>
                    <div className="hidden md:flex items-center space-x-8">
                        <Button
                            variant="ghost"
                            onClick={() => scrollToSection("hero")}
                            className="text-muted-foreground hover:text-foreground hover:bg-muted cursor-pointer"
                        >
                            Home
                        </Button>
                        <Button
                            variant="ghost"
                            onClick={() => scrollToSection("skills")}
                            className="text-muted-foreground hover:text-foreground hover:bg-muted cursor-pointer"
                        >
                            Skills
                        </Button>
                        <Button
                            variant="ghost"
                            onClick={() => scrollToSection("projects")}
                            className="text-muted-foreground hover:text-foreground hover:bg-muted cursor-pointer"
                        >
                            Projects
                        </Button>
                    </div>
                    <div className="md:hidden flex gap-2">
                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => scrollToSection("skills")}
                            className="text-muted-foreground hover:text-foreground hover:bg-muted cursor-pointer"
                        >
                            Skills
                        </Button>
                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => scrollToSection("projects")}
                            className="text-muted-foreground hover:text-foreground hover:bg-muted cursor-pointer"
                        >
                            Projects
                        </Button>
                    </div>
                </div>
            </div>
        </nav>
    );
}
