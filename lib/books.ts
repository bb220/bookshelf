export type Book = {
  title: string
  author: string
  url: string
  cover_image_url: string
}

export type BookshelfSection = {
  year: string
  slug?: string
  books: Book[]
}

export const bookshelfSections: BookshelfSection[] = [
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
        title: "Elon Musk: Tesla, SpaceX, and the Quest for a Fantastic Future",
        author: "Ashlee Vance",
        url: "https://www.amazon.com/Elon-Musk-SpaceX-Fantastic-Future/dp/006230125X",
        cover_image_url: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1518291452i/25541028.jpg",
      },
      {
        title: "Information Rules: A Strategic Guide to the Network Economy",
        author: "Carl Shapiro & Hal R. Varian",
        url: "https://www.amazon.com/Information-Rules-Strategic-Network-Economy/dp/087584863X",
        cover_image_url: "https://covers.openlibrary.org/b/isbn/087584863X-L.jpg",
      },
      {
        title: "Networked: The New Social Operating System",
        author: "Lee Rainie & Barry Wellman",
        url: "https://www.amazon.com/Networked-Social-Operating-System-Press/dp/0262526166",
        cover_image_url: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1697709628i/159639600.jpg",
      },
      {
        title: "A View from the Bottom",
        author: "Louisa B. Lansbury",
        url: "https://www.amazon.com/View-Bottom-Louisa-B-Lansbury-ebook/dp/B0BCC6KSZR",
        cover_image_url: "https://m.media-amazon.com/images/I/71iqSWP43DL._SY522_.jpg",
      },
      {
        title: "How to Win Friends and Influence People",
        author: "Dale Carnegie",
        url: "https://www.amazon.com/How-Win-Friends-Influence-People/dp/0671027034",
        cover_image_url: "https://covers.openlibrary.org/b/isbn/0671027034-L.jpg",
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
        cover_image_url: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1590614400i/53512231.jpg",
      },
      {
        title: "Radical Candor",
        author: "Kim Scott",
        url: "https://www.amazon.com/Radical-Candor-Revised-Kick-Ass-Humanity/dp/1250235375",
        cover_image_url: "https://covers.openlibrary.org/b/isbn/1250235375-L.jpg",
      },
      {
        title: "Rich Dad Poor Dad",
        author: "Robert Kiyosaki",
        url: "https://www.amazon.com/Rich-Dad-Poor-Teach-Middle/dp/1612680194",
        cover_image_url: "https://covers.openlibrary.org/b/isbn/1612680194-L.jpg",
      },
      {
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        url: "https://www.amazon.com/Hobbit-J-R-Tolkien/dp/054792822X",
        cover_image_url: "https://covers.openlibrary.org/b/isbn/054792822X-L.jpg",
      },
      {
        title: "The Lord of the Rings",
        author: "J.R.R. Tolkien",
        url: "https://www.amazon.com/Lord-Rings-J-R-R-Tolkien/dp/0544003411",
        cover_image_url: "https://covers.openlibrary.org/b/isbn/0544003411-L.jpg",
      },
      {
        title: "Adventures of Huckleberry Finn",
        author: "Mark Twain",
        url: "https://www.barnesandnoble.com/w/adventures-of-huckleberry-finn-barnes-noble-classics-series-mark-twain/1106017531",
        cover_image_url: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1546096879i/2956.jpg",
      },
      {
        title: "The Adventures of Tom Sawyer",
        author: "Mark Twain",
        url: "https://www.amazon.com/Adventures-Tom-Sawyer-Mark-Twain/dp/0486400778",
        cover_image_url: "https://covers.openlibrary.org/b/isbn/0486400778-L.jpg",
      },
      {
        title: "Essays and Poems",
        author: "Ralph Waldo Emerson",
        url: "https://www.barnesandnoble.com/w/essays-and-poems-by-ralph-waldo-emerson-ralph-waldo-emerson/1100623185",
        cover_image_url: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1388761686i/139004.jpg",
      },
      {
        title: "A Tale of Two Cities",
        author: "Charles Dickens",
        url: "https://www.amazon.com/Tale-Two-Cities-Charles-Dickens/dp/0486406512",
        cover_image_url: "https://covers.openlibrary.org/b/isbn/0486406512-L.jpg",
      },
      {
        title: "A Christmas Carol",
        author: "Charles Dickens",
        url: "https://www.barnesandnoble.com/w/a-christmas-carol-charles-dickens/1116639901",
        cover_image_url: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1406512317i/5326.jpg",
      },
      {
        title: "Oliver Twist",
        author: "Charles Dickens",
        url: "https://www.amazon.com/Oliver-Twist-Charles-Dickens/dp/0486424537",
        cover_image_url: "https://covers.openlibrary.org/b/isbn/0486424537-L.jpg",
      },
      {
        title: "Of Mice and Men",
        author: "John Steinbeck",
        url: "https://www.amazon.com/Mice-Men-John-Steinbeck/dp/0140177396",
        cover_image_url: "https://covers.openlibrary.org/b/isbn/0140177396-L.jpg",
      },
      {
        title: "The Grapes of Wrath",
        author: "John Steinbeck",
        url: "https://www.amazon.com/Grapes-Wrath-John-Steinbeck/dp/0143039431",
        cover_image_url: "https://covers.openlibrary.org/b/isbn/0143039431-L.jpg",
      },
      {
        title: "Halo: The Fall of Reach",
        author: "Eric Nylund",
        url: "https://bookshop.org/p/books/halo-the-fall-of-reach-volume-1-eric-nylund/6682345",
        cover_image_url: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1436746591i/60229.jpg",
      },
      {
        title: "Aesop's Fables",
        author: "Aesop",
        url: "https://www.barnesandnoble.com/w/aesops-fables-aesop/1108825526",
        cover_image_url: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1389064715i/21348.jpg",
      },
    ],
  },
]

export function getBookshelfSection(year: string) {
  return bookshelfSections.find((section) => section.year === year)
}
