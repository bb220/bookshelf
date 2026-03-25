"use client"

type MarkdownFooterProps = {
  markdownPath: string
}

function fallbackCopyToClipboard(value: string) {
  const textarea = document.createElement("textarea")
  textarea.value = value
  textarea.setAttribute("readonly", "")
  textarea.style.position = "absolute"
  textarea.style.left = "-9999px"

  document.body.appendChild(textarea)
  textarea.select()
  document.execCommand("copy")
  document.body.removeChild(textarea)
}

export function MarkdownFooter({ markdownPath }: MarkdownFooterProps) {
  const handleCopy = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()

    try {
      const response = await fetch(markdownPath)

      if (!response.ok) {
        throw new Error(`Failed to load markdown from ${markdownPath}`)
      }

      const markdown = await response.text()

      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(markdown)
        return
      }

      fallbackCopyToClipboard(markdown)
    } catch (error) {
      console.error("Unable to copy markdown to clipboard", error)
      window.alert("Failed to copy markdown to clipboard.")
    }
  }

  return (
    <footer className="mt-12 flex justify-end text-sm text-neutral-500">
      <p className="flex flex-wrap items-center justify-end gap-1">
        <button
          type="button"
          onClick={handleCopy}
          className="cursor-pointer underline hover:text-neutral-300"
        >
          copy as
        </button>
        <span>/</span>
        <a
          href={markdownPath}
          className="underline hover:text-neutral-300"
        >
          view
        </a>
        markdown
      </p>
    </footer>
  )
}
