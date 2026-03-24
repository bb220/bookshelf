"use client"

import Image from "next/image"
import Link from "next/link"

const books = [
  {
    title: "The Intelligent Investor",
    author: "Benjamin Graham",
    url: "https://www.amazon.com/Intelligent-Investor-Definitive-Investing-Essentials/dp/0060555661",
    cover_image_url: "https://covers.openlibrary.org/b/isbn/0060555661-L.jpg",
  },
  {
    title: "The New New Thing",
    author: "Michael Lewis",
    url: "https://www.amazon.com/New-Thing-Silicon-Valley-Story/dp/0393347818",
    cover_image_url: "https://covers.openlibrary.org/b/isbn/0393347818-L.jpg",
  },
  {
    title: "A View from the Bottom",
    author: "Louisa B. Lansbury",
    url: "https://www.amazon.com/View-Bottom-Louisa-B-Lansbury-ebook/dp/B0BCC6KSZR",
    cover_image_url: "https://covers.openlibrary.org/b/isbn/B0BCS36VGG-L.jpg",
  },
  {
    title: "How to Win Friends and Influence People",
    author: "Dale Carnegie",
    url: "https://www.amazon.com/How-Win-Friends-Influence-People/dp/0671027034",
    cover_image_url: "https://covers.openlibrary.org/b/isbn/0671027034-L.jpg",
  },
  {
    title: "Radical Candor",
    author: "Kim Scott",
    url: "https://www.amazon.com/Radical-Candor-Revised-Kick-Ass-Humanity/dp/1250235375",
    cover_image_url: "https://covers.openlibrary.org/b/isbn/1250235375-L.jpg",
  },
  {
    title: "How to Listen with Intention",
    author: "Patrick King",
    url: "https://www.amazon.com/How-Listen-Intention-Communication-Relationships/dp/1647431743",
    cover_image_url: "https://covers.openlibrary.org/b/isbn/1647431743-L.jpg",
  },
  {
    title: "Better Small Talk",
    author: "Patrick King",
    url: "https://www.amazon.com/Better-Small-Talk-Awkwardness-Conversations/dp/1647431069",
    cover_image_url: "https://covers.openlibrary.org/b/isbn/1647431069-L.jpg",
  },
  {
    title: "Rich Dad Poor Dad",
    author: "Robert Kiyosaki",
    url: "https://www.amazon.com/Rich-Dad-Poor-Teach-Middle/dp/1612680194",
    cover_image_url: "https://covers.openlibrary.org/b/isbn/1612680194-L.jpg",
  },
]

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
            target="_blank"
            rel="noopener noreferrer"
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
