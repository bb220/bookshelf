"use client"

import Image from "next/image"

const books = [
  {
    title: "The Hard Thing About Hard Things",
    author: "Ben Horowitz",
    url: "https://a16z.com/books/the-hard-thing-about-hard-things/",
    cover_image_url: "https://covers.openlibrary.org/b/isbn/0062273205-L.jpg",
  },
  {
    title: "Zero to One",
    author: "Peter Thiel",
    url: "https://www.amazon.com/Zero-One-Notes-Startups-Future/dp/0804139296",
    cover_image_url: "https://covers.openlibrary.org/b/isbn/0804139296-L.jpg",
  },
  {
    title: "You Can Just Do Things",
    author: "Jay Yang",
    url: "https://www.amazon.com/You-Can-Just-Things-Permissionless/dp/B0F3GPZL1C",
    cover_image_url: "https://covers.openlibrary.org/b/isbn/9798992459203-L.jpg",
  },
  {
    title: "The Elements of Style",
    author: "William Strunk Jr. & E.B. White",
    url: "https://www.amazon.com/Elements-Style-Fourth-William-Strunk/dp/020530902X",
    cover_image_url: "https://covers.openlibrary.org/b/isbn/020530902X-L.jpg",
  },
  {
    title: "The Paradox of Choice",
    author: "Barry Schwartz",
    url: "https://www.amazon.com/Paradox-Choice-Why-More-Less/dp/0060005688",
    cover_image_url: "https://covers.openlibrary.org/b/isbn/0060005688-L.jpg",
  },
  {
    title: "Working Backwards",
    author: "Colin Bryar & Bill Carr",
    url: "https://www.amazon.com/Working-Backwards-Insights-Stories-Secrets/dp/1250267595",
    cover_image_url: "https://covers.openlibrary.org/b/isbn/1250267595-L.jpg",
  },
]

export default function BooksPage() {
  return (
    <main className="min-h-screen bg-neutral-950 px-6 py-12 md:px-12 lg:px-20">
      <header className="mb-16">
        <h1 className="text-7xl font-black tracking-tighter text-white md:text-8xl lg:text-9xl">
          2025
        </h1>
        <p className="mt-2 text-sm uppercase tracking-widest text-neutral-500">
          Books Read
        </p>
      </header>

      <section className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:gap-8 lg:grid-cols-4 xl:grid-cols-6">
        {books.map((book) => (
          <a
            key={book.title}
            href={book.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block aspect-[2/3] w-full overflow-hidden rounded-sm bg-neutral-900 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-white/10"
          >
            <Image
              src={book.cover_image_url}
              alt={`${book.title} by ${book.author}`}
              fill
              className="object-cover transition-all duration-300 group-hover:brightness-110"
              sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 16vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <div className="absolute bottom-0 left-0 right-0 translate-y-full p-3 transition-transform duration-300 group-hover:translate-y-0">
              <p className="text-xs font-medium text-white line-clamp-2">
                {book.title}
              </p>
              <p className="mt-0.5 text-xs text-neutral-400">{book.author}</p>
            </div>
          </a>
        ))}
      </section>
    </main>
  )
}
