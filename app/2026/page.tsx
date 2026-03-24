"use client"

import Image from "next/image"
import Link from "next/link"

import { getBookshelfSection } from "@/lib/books"

const books = getBookshelfSection("2026")?.books ?? []

export default function BooksPage2026() {
  return (
    <main className="min-h-screen bg-background px-6 py-12 transition-colors duration-300 md:px-12 lg:px-20">
      <header className="mb-16 flex items-start justify-between">
        <div>
          <h1 className="text-7xl font-black tracking-tighter text-foreground md:text-8xl lg:text-9xl">
            2026
          </h1>
          <p className="mt-2 text-sm uppercase tracking-widest text-muted-foreground">
            The best books that I read this year
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
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block aspect-[2/3] w-full overflow-hidden rounded-sm border border-border/60 bg-card shadow-lg shadow-black/10 transition-all duration-300 hover:scale-105 hover:shadow-2xl dark:shadow-black/30"
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
              <p className="mt-0.5 text-xs text-white/75">{book.author}</p>
            </div>
          </a>
        ))}
      </section>
    </main>
  )
}
