import { mkdir, writeFile } from "node:fs/promises"
import path from "node:path"

import { bookshelfSections } from "@/lib/books"
import {
  getBookshelfSectionKey,
  serializeBookshelfToMarkdown,
  serializeSectionToMarkdown,
} from "@/lib/markdown"

const markdownDir = path.join(process.cwd(), "public", "markdown")

async function generateMarkdownFiles() {
  await mkdir(markdownDir, { recursive: true })

  await writeFile(
    path.join(markdownDir, "bookshelf.md"),
    serializeBookshelfToMarkdown(bookshelfSections),
    "utf8",
  )

  await Promise.all(
    bookshelfSections.map((section) =>
      writeFile(
        path.join(markdownDir, `${getBookshelfSectionKey(section)}.md`),
        serializeSectionToMarkdown(section),
        "utf8",
      ),
    ),
  )
}

generateMarkdownFiles().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
