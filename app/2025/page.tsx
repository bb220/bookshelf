import {
  BookshelfYearPage,
  buildBookshelfPageMetadata,
} from "@/app/_components/bookshelf-year-page"

export const metadata = buildBookshelfPageMetadata("2025")

export default function BooksPage2025() {
  return <BookshelfYearPage section="2025" title="2025" />
}
