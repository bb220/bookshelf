import Image from "next/image"
import Link from "next/link"

const years = [
  {
    year: "2026",
    books: [
      {
        title: "Thinking, Fast and Slow",
        author: "Daniel Kahneman",
        url: "https://www.amazon.com/Thinking-Fast-Slow-Daniel-Kahneman/dp/0374533555",
        cover_image_url: "https://covers.openlibrary.org/b/isbn/0374533555-L.jpg",
      },
      {
        title: "Read Your Mind",
        author: "Oz Pearlman",
        url: "https://www.amazon.com/Read-Your-Mind-Greatest-Mentalist/dp/B0DVBG7KSR",
        cover_image_url: "https://images1.penguinrandomhouse.com/cover/9798217059041",
      },
      {
        title: "Walt Disney: The Triumph of the American Imagination",
        author: "Neal Gabler",
        url: "https://www.amazon.com/Walt-Disney-Triumph-American-Imagination/dp/0679757473",
        cover_image_url: "https://covers.openlibrary.org/b/isbn/0679757473-L.jpg",
      },
      {
        title: "Enterprise Integration Patterns",
        author: "Gregor Hohpe & Bobby Woolf",
        url: "https://www.amazon.com/Enterprise-Integration-Patterns-Designing-Deploying/dp/0321200683",
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
        cover_image_url: "https://www.youcanjustdothingsbook.com/book-cover.jpg",
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
    ],
  },
  {
    year: "2024",
    books: [
      {
        title: "7 Powers: The Foundations of Business Strategy",
        author: "Hamilton Helmer",
        url: "https://www.amazon.com/7-Powers-Foundations-Business-Strategy/dp/0998116319",
        cover_image_url: "https://covers.openlibrary.org/b/isbn/0998116319-L.jpg",
      },
      {
        title: "Payments Systems in the U.S.: A Guide for the Payments Professional",
        author: "Carol Coye Benson, Scott Loftesness & Russ Jones",
        url: "https://www.amazon.com/Payments-Systems-U-S-Third-Professional/dp/0982789742",
        cover_image_url: "https://covers.openlibrary.org/b/isbn/9780982789742-L.jpg",
      },
      {
        title: "The Anatomy of the Swipe: Making Money Move",
        author: "Ahmed Siddiqui",
        url: "https://www.amazon.com/Anatomy-Swipe-Making-Money-Move/dp/1641374470",
        cover_image_url: "https://covers.openlibrary.org/b/isbn/9781641374477-L.jpg",
      },
    ],
  },
  {
    year: "Before 2024",
    slug: "before-2024",
    books: [
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

            <div className="flex flex-wrap gap-3">
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
