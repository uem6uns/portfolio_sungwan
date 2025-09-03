import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Calendar, Clock, User, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function BlogPage() {
  const blogPosts = [
    {
      title: "Building Scalable React Applications",
      excerpt:
        "Best practices for structuring large React codebases and maintaining performance as your application grows.",
      content:
        "Learn how to organize your React components, manage state effectively, and implement performance optimizations...",
      date: "2024-01-15",
      readTime: "5 min read",
      tags: ["React", "Performance", "Architecture"],
      featured: true,
    },
    {
      title: "The Future of Web Development",
      excerpt: "Exploring emerging trends and technologies shaping the web development landscape in 2024 and beyond.",
      content: "From AI-powered development tools to new JavaScript frameworks, discover what's coming next...",
      date: "2024-01-08",
      readTime: "7 min read",
      tags: ["Web Development", "Trends", "Technology"],
      featured: false,
    },
    {
      title: "Design Systems That Scale",
      excerpt: "How to create and maintain design systems that grow with your organization and support multiple teams.",
      content: "Building a design system is more than just creating components. It's about establishing principles...",
      date: "2024-01-01",
      readTime: "6 min read",
      tags: ["Design Systems", "UI/UX", "Team Collaboration"],
      featured: false,
    },
    {
      title: "Mastering TypeScript in React",
      excerpt: "Advanced TypeScript patterns and techniques for building type-safe React applications.",
      content: "TypeScript and React make a powerful combination. Here's how to leverage advanced typing...",
      date: "2023-12-20",
      readTime: "8 min read",
      tags: ["TypeScript", "React", "Development"],
      featured: false,
    },
    {
      title: "Modern CSS Techniques",
      excerpt: "Exploring CSS Grid, Flexbox, and modern layout techniques for responsive web design.",
      content: "CSS has evolved significantly. Let's explore the modern techniques that make layouts easier...",
      date: "2023-12-15",
      readTime: "4 min read",
      tags: ["CSS", "Layout", "Responsive Design"],
      featured: false,
    },
    {
      title: "API Design Best Practices",
      excerpt: "Guidelines for designing RESTful APIs that are intuitive, scalable, and maintainable.",
      content: "Good API design is crucial for application success. Here are the principles I follow...",
      date: "2023-12-10",
      readTime: "6 min read",
      tags: ["API", "Backend", "Best Practices"],
      featured: false,
    },
  ]

  const featuredPost = blogPosts.find((post) => post.featured)
  const regularPosts = blogPosts.filter((post) => !post.featured)

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="font-bold text-xl text-primary">
              Alex Chen
            </Link>
            <div className="hidden md:flex space-x-8">
              <Link href="/#about" className="text-muted-foreground hover:text-primary transition-colors">
                About
              </Link>
              <Link href="/#projects" className="text-muted-foreground hover:text-primary transition-colors">
                Projects
              </Link>
              <Link href="/blog" className="text-primary font-medium">
                Blog
              </Link>
              <Link href="/#contact" className="text-muted-foreground hover:text-primary transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors mb-6"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">Blog</h1>
          <p className="text-xl text-muted-foreground text-pretty">
            Thoughts on development, design, and the ever-evolving world of technology.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="mb-8">
              <Badge className="mb-4">Featured Post</Badge>
            </div>
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img
                    src="/react-application-architecture-diagram.jpg"
                    alt={featuredPost.title}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-8">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {new Date(featuredPost.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {featuredPost.readTime}
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      Alex Chen
                    </div>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 text-balance">
                    {featuredPost.title}
                  </h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{featuredPost.excerpt}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {featuredPost.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Button className="group">
                    Read Full Article
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </section>
      )}

      {/* All Posts */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-8">All Posts</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularPosts.map((post, index) => (
              <Card key={index} className="group hover:shadow-lg transition-shadow cursor-pointer">
                <div className="aspect-video overflow-hidden rounded-t-lg bg-muted">
                  <img
                    src={`/abstract-geometric-shapes.png?height=200&width=300&query=${post.tags[0]} development illustration`}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <Calendar className="h-4 w-4" />
                    {new Date(post.date).toLocaleDateString()}
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <CardTitle className="group-hover:text-primary transition-colors text-balance">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="leading-relaxed">{post.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Button variant="ghost" className="p-0 h-auto font-medium text-primary">
                    Read More
                    <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">Stay Updated</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Get notified when I publish new articles about web development, design, and technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-md border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            />
            <Button>Subscribe</Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <p className="mb-4">© 2024 Alex Chen. All rights reserved.</p>
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
