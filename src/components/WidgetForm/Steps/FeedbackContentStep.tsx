import { ArrowLeft } from "phosphor-react"
import { FormEvent, useState } from "react"
import { FeedbackType, feedbackTypes } from ".."
import { CloseButton } from "../../CloseButton"
import { ScreenshotButton } from "../ScreenshotButton"

interface FeedbackContentStepProps {
  feedbackType: FeedbackType,
  onFeedbackRestartRequested: () => void
}

export function FeedbackContentStep({
  feedbackType, onFeedbackRestartRequested
}: FeedbackContentStepProps) {
  const [screenshot, setScreenshot] = useState<string | null>(null)
  const [feedbackComment, setFeedbackComment] = useState<string>('')

  const feedbackTypeInfo = feedbackTypes[feedbackType]

  function handleFeedbackSubmit(event: FormEvent) {
    event.preventDefault()

    console.log({
      screenshot, feedbackComment
    })
  }

  return (
    <>
      <header>
        <button className="absolute top-5 left-5" type="button">
          <ArrowLeft
            weight="bold" 
            className="w-4 h-4 text-zinc-400 hover:text-zinc-100 transition-colors"
            onClick={onFeedbackRestartRequested}  
          />
        </button>

        <span className="flex flex-row items-center justify-center gap-2 text-xl leading-6">
          <img src={ feedbackTypeInfo.img.source } alt={ feedbackTypeInfo.img.alt } className="w-6 h-6" />
          <h1>{ feedbackTypeInfo.title }</h1>
        </span>
        <CloseButton />
      </header>

      <form className="my-4 w-full" onSubmit={handleFeedbackSubmit}>
        <textarea
          className="min-w-[304px] w-full min-h-[112px] text-sm placeholder-zinc-400 text-zinc-100 border-zinc-600 bg-transparent rounded-md focus:border-brand-500 focus:ring-brand-500 focus:ring-1 focus:outline-none resize-none scrollbar scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin"
          placeholder="Conte-nos o que está acontecendo..."
          onChange={event => setFeedbackComment(event.target.value)}
        ></textarea>

        <footer className="flex gap-2 mt-2">
          <ScreenshotButton
            screenshot={screenshot}
            onScreenshotTook={setScreenshot}
          />

          <button
            type="submit"
            className="p-2 bg-brand-500 rounded-md border-transparent flex-1 flex justify-center items-center text-sm hover:bg-brand-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors disabled:opacity-50 disabled:hover:bg-brand-500"
            disabled={feedbackComment.length === 0}
          >
            Enviar feedback
          </button>
        </footer>
      </form>
    </>
  )
}