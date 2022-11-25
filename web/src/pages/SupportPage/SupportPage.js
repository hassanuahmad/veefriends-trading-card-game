import { MetaTags } from '@redwoodjs/web'

const SupportPage = () => {
  return (
    <>
      <MetaTags title="Support" description="Support page" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="items-center justify-end py-6 md:justify-end md:space-x-10">
          <div>
            <h1 className="mb-6 text-2xl font-bold text-green-500">
              Suggestions/Bugs
            </h1>
            If you have any suggestions or find bugs, you can contact me through
            my twitter or use the forms link below
            <br />
            <a
              className="underline"
              href="https://forms.gle/GNM8XsjYCkvSY8pa9"
              target="_blank"
              rel="noreferrer"
            >
              Google Form
            </a>
            <h2 className="mt-6 text-xl font-bold">
              Made by{' '}
              <a
                href="https://twitter.com/hapaise"
                target="_blank"
                rel="noreferrer"
                className="underline"
              >
                @hapaise
              </a>{' '}
              on twitter
            </h2>
            <p>
              Special thanks to{' '}
              <a
                href="https://twitter.com/JCourageNFT"
                target="_blank"
                rel="noreferrer"
                className="underline"
              >
                @JCourageNFT
              </a>{' '}
              for all the card images
            </p>
            <h1 className="mt-6 text-lg font-bold">Want to support?</h1>
            <p>hapaise.eth</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default SupportPage
