import Image from "next/image"
import Link from "next/link"

import { bookshelfSections } from "@/lib/books"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-neutral-950 px-6 py-12 md:px-12 lg:px-20">
      <header className="mb-20">
        <h1 className="text-5xl font-black tracking-tighter text-white md:text-6xl lg:text-7xl">
          Brandon&apos;s Bookshelf
        </h1>
        <p className="mt-3 text-lg text-neutral-500">
          A selection of the best books that I've read.
        </p>
      </header>

      <div className="space-y-16">
        {bookshelfSections.map((yearData) => (
          <section key={yearData.year}>
            <Link
              href={`/${yearData.slug || yearData.year}`}
              className="group mb-6 inline-flex items-center gap-2"
            >
              <h2 className="text-3xl font-bold text-white transition-colors group-hover:text-neutral-300 md:text-4xl">
                {yearData.year}
              </h2>
              <span className="text-sm text-neutral-600 transition-colors group-hover:text-neutral-400">
                {yearData.books.length} books
              </span>
            </Link>

            <div className="flex max-w-[27.75rem] flex-wrap gap-3">
              {yearData.books.map((book) => (
                <a
                  key={book.title}
                  href={book.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative h-24 w-16 overflow-hidden rounded-sm bg-neutral-900 shadow-md transition-transform duration-200 hover:scale-110"
                >
                  <Image
                    src={book.cover_image_url}
                    alt={`${book.title} by ${book.author}`}
                    fill
                    className="object-cover"
                    sizes="64px"
                  />
                </a>
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  )
}
