import Link from "next/link"
import { ArrowLeft, Calendar, Clock, User } from "lucide-react"
import { Badge } from "@/components/ui/badge"

const articles = [
  {
    id: "1",
    title: "The Art of Vintage Design",
    content: `
      <p>Vintage design has always held a special place in the world of visual arts. There's something timeless about the ornate flourishes, the careful attention to typography, and the overall craftsmanship that went into creating beautiful documents and designs in bygone eras.</p>
      
      <h3>The Elements of Vintage Design</h3>
      <p>When we look at vintage design, several key elements stand out:</p>
      <ul>
        <li><strong>Ornate Borders and Flourishes:</strong> These decorative elements frame content and add visual interest</li>
        <li><strong>Classic Typography:</strong> Serif fonts with varying weights and careful letter spacing</li>
        <li><strong>Balanced Composition:</strong> Thoughtful placement of elements creates harmony</li>
        <li><strong>Rich Color Palettes:</strong> Often featuring warm, muted tones that evoke nostalgia</li>
      </ul>
      
      <h3>Modern Applications</h3>
      <p>Today's designers can learn much from vintage aesthetics. The principles of good composition, the importance of white space, and the power of typography remain as relevant as ever. By studying classic designs, we can create modern works that feel both contemporary and timeless.</p>
      
      <p>The key is not to simply copy vintage styles, but to understand the underlying principles and adapt them for today's digital world. This creates designs that feel familiar yet fresh, nostalgic yet forward-thinking.</p>
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
      <p>The evolution of typography tells the story of human communication itself. From the first movable type to today's variable fonts, each advancement has shaped how we read, think, and understand the world around us.</p>
      
      <p>Johannes Gutenberg's printing press didn't just revolutionize book production—it democratized knowledge and laid the foundation for the modern world. The careful craft of letterforms that began in medieval scriptoriums found new expression in metal type, and later in phototypesetting and digital fonts.</p>
      
      <h3>The Digital Revolution</h3>
      <p>The transition from physical to digital type brought both opportunities and challenges. Suddenly, designers had access to thousands of fonts, but also faced new constraints of screen resolution and rendering.</p>
      
      <p>Today's variable fonts represent a return to the flexibility that calligraphers once enjoyed, allowing for infinite variations within a single typeface family.</p>
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
      <p>Despite predictions of its demise, print design continues to thrive and evolve. The tactile experience of paper, the permanence of ink, and the ritual of reading physical materials offer something that screens cannot replicate.</p>
      
      <p>The resurgence of interest in print design reflects a broader cultural movement toward authenticity and craftsmanship. In a world of infinite digital possibilities, the constraints of physical media force designers to make deliberate choices.</p>
      
      <h3>The Power of Constraints</h3>
      <p>Print design teaches us that limitations can be liberating. The fixed dimensions of a page, the properties of ink and paper, the economics of production—these constraints force creativity and innovation.</p>
      
      <p>Modern print designers must balance tradition with innovation, respecting the medium while pushing its boundaries.</p>
    `,
    date: "2024-01-10",
    readTime: "6 min read",
    category: "Print Design",
    author: "Howard Ong",
  },
]

// This function is required for static site generation with dynamic routes
export async function generateStaticParams() {
  return articles.map((article) => ({
    id: article.id,
  }))
}

export default function BlogPost({ params }: { params: { id: string } }) {
  // Find the article or default to the first one
  const post = articles.find((article) => article.id === params.id) || articles[0]

  return (
    <div className="min-h-screen bg-[#f4f1e8] relative overflow-hidden">
      {/* Decorative corner elements */}
      <div className="absolute top-4 left-4 w-16 h-16 border-l-4 border-t-4 border-black opacity-80"></div>
      <div className="absolute top-4 right-4 w-16 h-16 border-r-4 border-t-4 border-black opacity-80"></div>
      <div className="absolute bottom-4 left-4 w-16 h-16 border-l-4 border-b-4 border-black opacity-80"></div>
      <div className="absolute bottom-4 right-4 w-16 h-16 border-r-4 border-b-4 border-black opacity-80"></div>

      {/* Ornate corner flourishes */}
      <div className="absolute top-2 left-2 text-4xl font-bold text-black opacity-60 transform rotate-180">❦</div>
      <div className="absolute top-2 right-2 text-4xl font-bold text-black opacity-60">❦</div>
      <div className="absolute bottom-2 left-2 text-4xl font-bold text-black opacity-60">❦</div>
      <div className="absolute bottom-2 right-2 text-4xl font-bold text-black opacity-60 transform rotate-180">❦</div>

      <div className="container mx-auto px-4 py-8 relative z-10 max-w-4xl">
        {/* Header */}
        <header className="text-center mb-8">
          <Link href="/" className="inline-flex items-center space-x-2 text-black hover:underline mb-6">
            <ArrowLeft size={20} />
            <span className="font-bold tracking-wider">BACK TO BLOG</span>
          </Link>

          <div className="border-t-2 border-b-2 border-black py-2 mb-6">
            <h1 className="text-4xl font-bold tracking-wider" style={{ fontFamily: "serif" }}>
              HOWARD ONG BLOG
            </h1>
          </div>
        </header>

        {/* Article */}
        <article className="border-4 border-black p-8 bg-[#f4f1e8] relative">
          <div className="absolute -top-2 left-4 bg-[#f4f1e8] px-2">
            <Badge variant="outline" className="border-black text-black bg-transparent">
              {post.category}
            </Badge>
          </div>

          <div className="mt-4">
            <h1 className="text-3xl font-bold mb-4 tracking-wide">{post.title}</h1>

            <div className="flex items-center space-x-6 text-sm text-gray-600 mb-8 pb-4 border-b-2 border-black">
              <div className="flex items-center space-x-1">
                <User size={16} />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Calendar size={16} />
                <span>{new Date(post.date).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock size={16} />
                <span>{post.readTime}</span>
              </div>
            </div>

            <div
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
              style={{
                lineHeight: "1.8",
                fontSize: "16px",
              }}
            />
          </div>
        </article>

        {/* Decorative elements */}
        <div className="flex justify-center items-center mt-12 space-x-8">
          <div className="text-6xl opacity-60">⚜</div>
          <div className="w-32 h-1 bg-black"></div>
          <div className="text-4xl opacity-60">❦</div>
          <div className="w-32 h-1 bg-black"></div>
          <div className="text-6xl opacity-60">⚜</div>
        </div>
      </div>
    </div>
  )
}
