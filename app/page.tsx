import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Github, Linkedin, Mail, ExternalLink, Calendar } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "Full-stack Next.js application with Stripe integration",
      tech: ["Next.js", "TypeScript", "Stripe", "Tailwind CSS"],
      image: "/modern-ecommerce-dashboard.png",
    },
    {
      title: "Task Management App",
      description: "React-based productivity tool with real-time collaboration",
      tech: ["React", "Node.js", "Socket.io", "MongoDB"],
      image: "/task-management-interface.png",
    },
    {
      title: "Design System",
      description: "Comprehensive component library for enterprise applications",
      tech: ["React", "Storybook", "Figma", "TypeScript"],
      image: "/design-system-components.png",
    },
  ]

  const recentPosts = [
    {
      title: "Building Scalable React Applications",
      excerpt: "Best practices for structuring large React codebases and maintaining performance.",
      date: "2024-01-15",
      readTime: "5 min read",
    },
    {
      title: "The Future of Web Development",
      excerpt: "Exploring emerging trends and technologies shaping the web development landscape.",
      date: "2024-01-08",
      readTime: "7 min read",
    },
    {
      title: "Design Systems That Scale",
      excerpt: "How to create and maintain design systems that grow with your organization.",
      date: "2024-01-01",
      readTime: "6 min read",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-xl text-primary">Sungwan Bae</div>
            <div className="hidden md:flex space-x-8">
              <Link href="#about" className="text-muted-foreground hover:text-primary transition-colors">
                About
              </Link>
              <Link href="#projects" className="text-muted-foreground hover:text-primary transition-colors">
                Projects
              </Link>
              <Link href="#blog" className="text-muted-foreground hover:text-primary transition-colors">
                Blog
              </Link>
              <Link href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">
            Full-Stack Developer & <span className="text-primary">Design Enthusiast</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
            I craft digital experiences that blend beautiful design with robust functionality. Passionate about creating
            solutions that make a difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="group">
              View My Work
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg">
              Read My Blog
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">About Me</h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                With over 5 years of experience in web development, I specialize in creating modern, scalable
                applications using React, Next.js, and Node.js. I'm passionate about clean code, user experience, and
                staying up-to-date with the latest technologies.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                When I'm not coding, you'll find me writing about development best practices, contributing to open
                source projects, or exploring new design trends.
              </p>
              <div className="flex gap-4">
                <Button variant="outline" size="sm">
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </Button>
                <Button variant="outline" size="sm">
                  <Linkedin className="mr-2 h-4 w-4" />
                  LinkedIn
                </Button>
                <Button variant="outline" size="sm">
                  <Mail className="mr-2 h-4 w-4" />
                  Email
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <img
                src="/professional-developer-portrait.png"
                alt="Sungwan Bae - Full-Stack Developer"
                className="rounded-lg shadow-lg max-w-sm w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Featured Projects</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A selection of recent work showcasing my skills in full-stack development and design.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card key={index} className="group hover:shadow-lg transition-shadow">
                <div className="aspect-video overflow-hidden rounded-t-lg">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    {project.title}
                    <ExternalLink className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Latest Blog Posts</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Thoughts on development, design, and the ever-evolving world of technology.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentPosts.map((post, index) => (
              <Card key={index} className="group hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <Calendar className="h-4 w-4" />
                    {new Date(post.date).toLocaleDateString()}
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <CardTitle className="group-hover:text-primary transition-colors">{post.title}</CardTitle>
                  <CardDescription className="leading-relaxed">{post.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="ghost" className="p-0 h-auto font-medium text-primary">
                    Read More
                    <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button variant="outline">View All Posts</Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">Let's Work Together</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            I'm always interested in new opportunities and exciting projects. Let's discuss how we can bring your ideas
            to life.
          </p>
          <Button size="lg" className="group">
            <Mail className="mr-2 h-4 w-4" />
            Get In Touch
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <p className="mb-4">© 2024 Sungwan Bae. All rights reserved.</p>
          <div className="flex justify-center gap-6">
            <Link href="#" className="hover:text-accent transition-colors">
              GitHub
            </Link>
            <Link href="#" className="hover:text-accent transition-colors">
              LinkedIn
            </Link>
            <Link href="#" className="hover:text-accent transition-colors">
              Twitter
            </Link>
            <Link href="#" className="hover:text-accent transition-colors">
              Email
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
