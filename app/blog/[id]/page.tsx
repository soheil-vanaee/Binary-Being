import Link from "next/link"
import { ArrowLeft, Calendar, Clock, User } from "lucide-react"
import { Badge } from "@/components/ui/badge"

const articles = [
  {
    id: "1",
    title: "The Art of Vintage Design",
    content: `
      <p>Vintage design has always held a special place in the world of visual arts...</p>
    `,
    date: "2024-01-15",
    readTime: "5 min read",
    category: "Design",
    author: "Howard Ong",
  },
  {
    id: "2",
    title: "Typography Through the Ages",
    content: `
      <p>The evolution of typography tells the story of human communication itself...</p>
    `,
    date: "2024-01-12",
    readTime: "4 min read",
    category: "Typography",
    author: "Howard Ong",
  },
  {
    id: "3",
    title: "The Renaissance of Print Design",
    content: `
      <p>Despite predictions of its demise, print design continues to thrive...</p>
    `,
    date: "2024-01-10",
    readTime: "6 min read",
    category: "Print Design",
    author: "Howard Ong",
  },
]

export async function generateStaticParams() {
  return articles.map((article) => ({
    id: article.id,
  }))
}

export default function BlogPost({ params }: { params: { id: string } }) {
  const post = articles.find((article) => article.id === params.id) || articles[0]

  return (
    <div className="min-h-screen bg-[#f4f1e8] relative overflow-hidden">
      {/* Decorative corners */}
      <div className="absolute top-4 left-4 w-8 h-8 md:w-16 md:h-16 border-l-2 md:border-l-4 border-t-2 md:border-t-4 border-black opacity-80"></div>
      <div className="absolute top-4 right-4 w-8 h-8 md:w-16 md:h-16 border-r-2 md:border-r-4 border-t-2 md:border-t-4 border-black opacity-80"></div>
      <div className="absolute bottom-4 left-4 w-8 h-8 md:w-16 md:h-16 border-l-2 md:border-l-4 border-b-2 md:border-b-4 border-black opacity-80"></div>
      <div className="absolute bottom-4 right-4 w-8 h-8 md:w-16 md:h-16 border-r-2 md:border-r-4 border-b-2 md:border-b-4 border-black opacity-80"></div>

      {/* Flourishes */}
      <div className="absolute top-2 left-2 text-2xl md:text-4xl font-bold text-black opacity-60 transform rotate-180">❦</div>
      <div className="absolute top-2 right-2 text-2xl md:text-4xl font-bold text-black opacity-60">❦</div>
      <div className="absolute bottom-2 left-2 text-2xl md:text-4xl font-bold text-black opacity-60">❦</div>
      <div className="absolute bottom-2 right-2 text-2xl md:text-4xl font-bold text-black opacity-60 transform rotate-180">❦</div>

      <div className="container mx-auto px-4 py-6 md:py-8 relative z-10 max-w-4xl">
        {/* Header */}
        <header className="text-center mb-6 md:mb-8">
          <Link href="/" className="inline-flex items-center space-x-2 text-black hover:underline mb-4 md:mb-6">
            <ArrowLeft size={18} className="md:size-20" />
            <span className="font-bold tracking-wider text-sm md:text-base">BACK TO BLOG</span>
          </Link>

          <div className="border-t-2 border-b-2 border-black py-1 md:py-2 mb-4 md:mb-6">
            <h1 className="text-2xl md:text-4xl font-bold tracking-wider" style={{ fontFamily: "serif" }}>
              HOWARD ONG BLOG
            </h1>
          </div>
        </header>

        {/* Article */}
        <article className="border-2 md:border-4 border-black p-4 md:p-8 bg-[#f4f1e8] relative">
          <div className="absolute -top-2 left-4 bg-[#f4f1e8] px-1 md:px-2">
            <Badge variant="outline" className="border-black text-black bg-transparent text-xs md:text-sm">
              {post.category}
            </Badge>
          </div>

          <div className="mt-4">
            <h1 className="text-2xl md:text-3xl font-bold mb-4 tracking-wide">{post.title}</h1>

            <div className="flex flex-wrap gap-4 md:gap-6 text-xs md:text-sm text-gray-600 mb-6 md:mb-8 pb-4 border-b-2 border-black">
              <div className="flex items-center space-x-1">
                <User size={14} className="md:size-16" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Calendar size={14} className="md:size-16" />
                <span>{new Date(post.date).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock size={14} className="md:size-16" />
                <span>{post.readTime}</span>
              </div>
            </div>

            <div
              className="prose prose-sm md:prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
              style={{
                lineHeight: "1.8",
                fontSize: "16px",
              }}
            />
          </div>
        </article>

        {/* Decorative elements */}
        <div className="flex flex-wrap justify-center items-center mt-8 md:mt-12 gap-4 md:gap-8">
          <div className="text-4xl md:text-6xl opacity-60">⚜</div>
          <div className="w-16 md:w-32 h-1 bg-black"></div>
          <div className="text-2xl md:text-4xl opacity-60">❦</div>
          <div className="w-16 md:w-32 h-1 bg-black"></div>
          <div className="text-4xl md:text-6xl opacity-60">⚜</div>
        </div>
      </div>
    </div>
  )
}
