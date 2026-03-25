import {
  BookshelfYearPage,
  buildBookshelfPageMetadata,
} from "@/app/_components/bookshelf-year-page"

export const metadata = buildBookshelfPageMetadata("2026")

export default function BooksPage2026() {
  return <BookshelfYearPage section="2026" title="2026" />
}
