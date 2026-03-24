import Image from "next/image"
import Link from "next/link"

const years = [
  {
    year: "2026",
    books: [
      {
        title: "Thinking, Fast and Slow",
        author: "Daniel Kahneman",
        cover_image_url: "https://covers.openlibrary.org/b/isbn/0374533555-L.jpg",
      },
      {
        title: "Read Your Mind",
        author: "Oz Pearlman",
        cover_image_url: "https://images1.penguinrandomhouse.com/cover/9798217059041",
      },
      {
        title: "Walt Disney: The Triumph of the American Imagination",
        author: "Neal Gabler",
        cover_image_url: "https://covers.openlibrary.org/b/isbn/0679757473-L.jpg",
      },
      {
        title: "Enterprise Integration Patterns",
        author: "Gregor Hohpe & Bobby Woolf",
        cover_image_url: "https://covers.openlibrary.org/b/isbn/0321200683-L.jpg",
      },
    ],
  },
  {
    year: "2025",
    books: [
      {
        title: "The Hard Thing About Hard Things",
        author: "Ben Horowitz",
        cover_image_url: "https://covers.openlibrary.org/b/isbn/0062273205-L.jpg",
      },
      {
        title: "Zero to One",
        author: "Peter Thiel",
        cover_image_url: "https://covers.openlibrary.org/b/isbn/0804139296-L.jpg",
      },
      {
        title: "You Can Just Do Things",
        author: "Jay Yang",
        cover_image_url: "https://www.youcanjustdothingsbook.com/book-cover.jpg",
      },
      {
        title: "The Elements of Style",
        author: "William Strunk Jr. & E.B. White",
        cover_image_url: "https://covers.openlibrary.org/b/isbn/020530902X-L.jpg",
      },
      {
        title: "The Paradox of Choice",
        author: "Barry Schwartz",
        cover_image_url: "https://covers.openlibrary.org/b/isbn/0060005688-L.jpg",
      },
      {
        title: "Working Backwards",
        author: "Colin Bryar & Bill Carr",
        cover_image_url: "https://covers.openlibrary.org/b/isbn/1250267595-L.jpg",
      },
    ],
  },
]

export default function HomePage() {
  return (
    <main className="min-h-screen bg-neutral-950 px-6 py-12 md:px-12 lg:px-20">
      <header className="mb-20">
        <h1 className="text-5xl font-black tracking-tighter text-white md:text-6xl lg:text-7xl">
          Brandon&apos;s Bookshelf
        </h1>
        <p className="mt-3 text-lg text-neutral-500">
          The best books that I&apos;ve read
        </p>
      </header>

      <div className="space-y-16">
        {years.map((yearData) => (
          <section key={yearData.year}>
            <Link
              href={`/${yearData.year}`}
              className="group mb-6 inline-flex items-center gap-2"
            >
              <h2 className="text-3xl font-bold text-white transition-colors group-hover:text-neutral-300 md:text-4xl">
                {yearData.year}
              </h2>
              <span className="text-sm text-neutral-600 transition-colors group-hover:text-neutral-400">
                {yearData.books.length} books
              </span>
            </Link>

            <div className="flex flex-wrap gap-3">
              {yearData.books.map((book) => (
                <div
                  key={book.title}
                  className="relative h-24 w-16 overflow-hidden rounded-sm bg-neutral-900 shadow-md"
                >
                  <Image
                    src={book.cover_image_url}
                    alt={`${book.title} by ${book.author}`}
                    fill
                    className="object-cover"
                    sizes="64px"
                  />
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  )
}
