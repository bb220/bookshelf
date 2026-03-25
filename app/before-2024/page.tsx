import {
  BookshelfYearPage,
  buildBookshelfPageMetadata,
} from "@/app/_components/bookshelf-year-page"

export const metadata = buildBookshelfPageMetadata("Before 2024")

export default function Before2024Page() {
  return <BookshelfYearPage section="Before 2024" title="Before 2024" />
}
