import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const AboutModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="About Speciest" isOpen={isOpen} handleClose={handleClose}>
      <div className="text-sm text-gray-500 dark:text-gray-300 space-y-3">
        <p>
          A daily word game inspired by the{' '}
          <a
            href="https://www.amazon.com/dp/B0GMPQR231"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold underline"
          >
            Speciest Trilogy
          </a>{' '}
          by{' '}
          <a
            href="https://www.lisapedrosa.com/speciest"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            M. L. Pedrosa
          </a>
          .
        </p>
        <p>
          The trilogy spans three books:{' '}
          <span className="font-semibold">The Covenant</span>,{' '}
          <span className="font-semibold">The Schism</span>, and{' '}
          <span className="font-semibold">The Synthesis</span> — all words in
          this game are drawn from across the series.
        </p>
        <p>
          Visit{' '}
          <a
            href="https://lisapedrosa.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            lisapedrosa.com
          </a>{' '}
          to explore more of Lisa's work.
        </p>
      </div>
    </BaseModal>
  )
}
