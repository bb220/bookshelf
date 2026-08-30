import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

import { getBookshelfSection } from "@/lib/books"

type BookshelfYearPageProps = {
  section: string
  title: string
}

export function buildBookshelfPageMetadata(title: string): Metadata {
  return {
    title: `Brandon's Bookshelf - ${title}`,
  }
}

export function BookshelfYearPage({
  section,
  title,
}: BookshelfYearPageProps) {
  const books = getBookshelfSection(section)?.books ?? []

  return (
    <main className="min-h-screen bg-background px-6 py-12 transition-colors duration-300 md:px-12 lg:px-20">
      <header className="mb-16 flex items-start justify-between">
        <div>
          <h1 className="text-7xl font-black tracking-tighter text-foreground md:text-8xl lg:text-9xl">
            {title}
          </h1>
          <p className="mt-2 text-sm uppercase tracking-widest text-muted-foreground">
            The best books I've read
          </p>
        </div>
        <Link
          href="/"
          className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          Home
        </Link>
      </header>

      <section className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:gap-8 lg:grid-cols-4 xl:grid-cols-6">
        {books.map((book) => (
          <a
            key={book.title}
            href={book.url}
            className="group relative block aspect-[2/3] w-full overflow-hidden rounded-sm border border-border/60 bg-card shadow-lg shadow-black/10 transition-transform duration-300 hover:scale-105 dark:shadow-black/30"
          >
            <Image
              src={book.cover_image_url}
              alt={`${book.title} by ${book.author}`}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 16vw"
            />
            <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <h2 className="text-sm font-semibold leading-tight text-white">
                {book.title}
              </h2>
              <p className="mt-1 text-xs text-white/80">{book.author}</p>
            </div>
          </a>
        ))}
      </section>
    </main>
  )
}
