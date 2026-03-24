import Image from "next/image"
import Link from "next/link"

import { bookshelfSections } from "@/lib/books"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background px-6 py-12 transition-colors duration-300 md:px-12 lg:px-20">
      <header className="mb-20">
        <h1 className="text-5xl font-black tracking-tighter text-foreground md:text-6xl lg:text-7xl">
          Brandon&apos;s Bookshelf
        </h1>
        <p className="mt-3 text-lg text-muted-foreground">
          A selection of the best books that I've read over the years.
        </p>
      </header>

      <div className="space-y-16">
        {bookshelfSections.map((yearData) => (
          <section key={yearData.year}>
            <Link
              href={`/${yearData.slug || yearData.year}`}
              className="group mb-6 inline-flex items-center gap-2"
            >
              <h2 className="text-3xl font-bold text-foreground transition-colors group-hover:text-muted-foreground md:text-4xl">
                {yearData.year}
              </h2>
              <span className="text-sm text-muted-foreground transition-colors group-hover:text-foreground/70">
                {yearData.books.length} books
              </span>
            </Link>

            <div className="grid grid-cols-6 gap-2 md:grid-cols-8 md:gap-3">
              {yearData.books.map((book) => (
                <a
                  key={book.title}
                  href={book.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative aspect-[2/3] w-full overflow-hidden rounded-sm border border-border/60 bg-card shadow-md shadow-black/10 transition-transform duration-200 hover:scale-110 dark:shadow-black/30"
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
