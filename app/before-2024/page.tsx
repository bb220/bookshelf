"use client"

import Image from "next/image"
import Link from "next/link"

import { getBookshelfSection } from "@/lib/books"

const books = getBookshelfSection("Before 2024")?.books ?? []

export default function Before2024Page() {
  return (
    <main className="min-h-screen bg-neutral-950 px-6 py-12 md:px-12 lg:px-20">
      <header className="mb-16 flex items-start justify-between">
        <div>
          <h1 className="text-7xl font-black tracking-tighter text-white md:text-8xl lg:text-9xl">
            Before 2024
          </h1>
          <p className="mt-2 text-sm uppercase tracking-widest text-neutral-500">
            The best books that I read before 2024
          </p>
        </div>
        <Link
          href="/"
          className="text-sm font-medium text-neutral-500 transition-colors hover:text-white"
        >
          Home
        </Link>
      </header>

      <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
        {books.map((book) => (
          <a
            key={book.title}
            href={book.url}
            className="group relative aspect-[2/3] overflow-hidden rounded-lg bg-neutral-900 shadow-lg transition-transform duration-300 hover:scale-105"
          >
            <Image
              src={book.cover_image_url}
              alt={`${book.title} by ${book.author}`}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, (max-width: 1280px) 20vw, 16vw"
            />
            <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <h2 className="text-sm font-semibold leading-tight text-white">
                {book.title}
              </h2>
              <p className="mt-1 text-xs text-neutral-300">{book.author}</p>
            </div>
          </a>
        ))}
      </div>
    </main>
  )
}
