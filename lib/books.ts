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
        title: "Zero to One",
        author: "Peter Thiel",
        url: "https://www.amazon.com/Zero-One-Notes-Startups-Future/dp/0804139296",
        cover_image_url: "https://m.media-amazon.com/images/I/51zGCdRQXOL._SL1200_.jpg",
      },
      {
        title: "The Hard Thing About Hard Things",
        author: "Ben Horowitz",
        url: "https://a16z.com/books/the-hard-thing-about-hard-things/",
        cover_image_url: "https://m.media-amazon.com/images/I/810u9MkT3SL._SY522_.jpg",
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
        cover_image_url: "https://m.media-amazon.com/images/I/71YA1iiEw7L._SL1500_.jpg",
      },
      {
        title: "Working Backwards",
        author: "Colin Bryar & Bill Carr",
        url: "https://www.amazon.com/Working-Backwards-Insights-Stories-Secrets/dp/1250267595",
        cover_image_url: "https://covers.openlibrary.org/b/isbn/1250267595-L.jpg",
      },
      {
        title: "The Paradox of Choice",
        author: "Barry Schwartz",
        url: "https://www.amazon.com/Paradox-Choice-Why-More-Less/dp/0060005688",
        cover_image_url: "https://covers.openlibrary.org/b/isbn/0060005688-L.jpg",
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
        cover_image_url: "https://m.media-amazon.com/images/I/61ZScoZzPLL._SL1360_.jpg",
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
        cover_image_url: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1409602421i/106835.jpg",
      },
      {
        title: "The New New Thing",
        author: "Michael Lewis",
        url: "https://www.amazon.com/New-Thing-Silicon-Valley-Story/dp/0393347818",
        cover_image_url: "https://m.media-amazon.com/images/I/51WlGV+X4+L._SL1199_.jpg",
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
        cover_image_url: "https://m.media-amazon.com/images/I/61atJCARUwL._SL1367_.jpg",
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
        cover_image_url: "https://m.media-amazon.com/images/I/71vK0WVQ4rL._SL1500_.jpg",
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
        cover_image_url: "https://prodimage.images-bn.com/pimages/9780547928227_p0_v4_s600x595.jpg",
      },
      {
        title: "The Lord of the Rings",
        author: "J.R.R. Tolkien",
        url: "https://www.amazon.com/Lord-Rings-J-R-R-Tolkien/dp/0544003411",
        cover_image_url: "https://pictures.abebooks.com/inventory/32225051540.jpg",
      },
      {
        title: "Adventures of Huckleberry Finn",
        author: "Mark Twain",
        url: "https://www.barnesandnoble.com/w/adventures-of-huckleberry-finn-barnes-noble-classics-series-mark-twain/1106017531",
        cover_image_url: "https://prodimage.images-bn.com/pimages/9781593081126_p0_v2_s1200x1200.jpg",
      },
      {
        title: "The Adventures of Tom Sawyer",
        author: "Mark Twain",
        url: "https://www.amazon.com/Adventures-Tom-Sawyer-Mark-Twain/dp/0486400778",
        cover_image_url: "https://i.thriftbooks.com/api/imagehandler/m/048B7CB03C4CEA76CA77B1E8745D22273B9247E9.jpeg",
      },
      {
        title: "Halo: The Fall of Reach",
        author: "Eric Nylund",
        url: "https://bookshop.org/p/books/halo-the-fall-of-reach-volume-1-eric-nylund/6682345",
        cover_image_url: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1436746591i/60229.jpg",
      },
      {
        title: "A Christmas Carol",
        author: "Charles Dickens",
        url: "https://www.amazon.com/dp/B00H5SE1TG?ref_=ppx_hzsearch_conn_dt_b_fed_digi_asin_title_351_26",
        cover_image_url: "https://m.media-amazon.com/images/I/81Uxe2+JBZL._SL1500_.jpg",
      },
      {
        title: "Of Mice and Men",
        author: "John Steinbeck",
        url: "https://www.amazon.com/Mice-Men-John-Steinbeck/dp/0140177396",
        cover_image_url: "https://covers.openlibrary.org/b/isbn/0140177396-L.jpg",
      },
      {
        title: "Oliver Twist",
        author: "Charles Dickens",
        url: "https://www.barnesandnoble.com/w/oliver-twist-charles-dickens/1116610530",
        cover_image_url: "https://prodimage.images-bn.com/pimages/9780141439747_p0_v4_s600x595.jpg",
      },
      {
        title: "A Tale of Two Cities",
        author: "Charles Dickens",
        url: "https://www.barnesandnoble.com/w/a-tale-of-two-cities-charles-dickens/1116666164",
        cover_image_url: "https://prodimage.images-bn.com/pimages/9781435171480_p0_v5_s1200x1200.jpg",
      },
      {
        title: "The Grapes of Wrath",
        author: "John Steinbeck",
        url: "https://www.amazon.com/Grapes-Wrath-John-Steinbeck/dp/0143039431",
        cover_image_url: "https://m.media-amazon.com/images/I/71Nm1XLdJ4L._SL1500_.jpg",
      },
      {
        title: "Essays and Poems",
        author: "Ralph Waldo Emerson",
        url: "https://www.barnesandnoble.com/w/essays-and-poems-by-ralph-waldo-emerson-ralph-waldo-emerson/1100623185",
        cover_image_url: "https://i.thriftbooks.com/api/imagehandler/m/B31C9911DE2323EDEA4D5FBA41720D4B1387B724.jpeg",
      },
      {
        title: "Aesop's Fables",
        author: "Aesop",
        url: "https://www.amazon.com/dp/B0084BKPTS?ref_=ppx_hzsearch_conn_dt_b_fed_digi_asin_title_351_4",
        cover_image_url: "https://m.media-amazon.com/images/P/B0084BKPTS.01._SX450_SY635_SCLZZZZZZZ_.jpg",
      },
      {
        title: "The New American Bible, Revised Edition",
        author: "United States Conference of Catholic Bishops",
        url: "https://www.amazon.com/dp/B006QBDOPK?ref_=ppx_hzsearch_conn_dt_b_fed_digi_asin_title_351_1",
        cover_image_url: "https://m.media-amazon.com/images/I/71MludAkj1L._SY522_.jpg",
      },
    ],
  },
]

export function getBookshelfSection(year: string) {
  return bookshelfSections.find((section) => section.year === year)
}
