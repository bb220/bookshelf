import {
  BookshelfYearPage,
  buildBookshelfPageMetadata,
} from "@/app/_components/bookshelf-year-page"

export const metadata = buildBookshelfPageMetadata("2024")

export default function BooksPage2024() {
  return <BookshelfYearPage section="2024" title="2024" />
}
