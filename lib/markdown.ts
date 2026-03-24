import { bookshelfSections, type Book, type BookshelfSection } from "@/lib/books"

export function getBookshelfSectionKey(section: BookshelfSection) {
  return section.slug ?? section.year
}

export function getBookshelfSectionByKey(key: string) {
  return bookshelfSections.find((section) => getBookshelfSectionKey(section) === key)
}

export function getSectionSubtitle(section: BookshelfSection) {
  return section.year === "Before 2024"
    ? "The best books that I read before 2024"
    : "The best books that I read this year"
}

function serializeBook(book: Book) {
  return [
    `### ${book.title}`,
    `- Author: ${book.author}`,
    `- URL: ${book.url}`,
    `- Cover Image URL: ${book.cover_image_url}`,
  ].join("\n")
}

export function serializeSectionToMarkdown(section: BookshelfSection) {
  const lines = [
    `# ${section.year}`,
    "",
    getSectionSubtitle(section),
    "",
    ...section.books.flatMap((book, index) => {
      const serialized = serializeBook(book)
      return index === section.books.length - 1 ? [serialized] : [serialized, ""]
    }),
  ]

  return `${lines.join("\n").trimEnd()}\n`
}

export function serializeBookshelfToMarkdown(sections: BookshelfSection[]) {
  const lines = [
    "# Brandon's Bookshelf",
    "",
    "The best books that I've read each year. Learn more: https://www.brandonbellero.com/posts/march-madness-tracker-experiment",
    "",
    ...sections.flatMap((section, sectionIndex) => {
      const sectionLines = [
        `## ${section.year}`,
        "",
        getSectionSubtitle(section),
        "",
        ...section.books.flatMap((book, bookIndex) => {
          const serialized = serializeBook(book)
          return bookIndex === section.books.length - 1 ? [serialized] : [serialized, ""]
        }),
      ]

      return sectionIndex === sections.length - 1 ? sectionLines : [...sectionLines, ""]
    }),
  ]

  return `${lines.join("\n").trimEnd()}\n`
}
