import { MetaTags } from '@redwoodjs/web'

const SupportPage = () => {
  /*
  Zinc - TODO
  Green - Completed
  Red - Cancelled
  */

  const upcomingFeatures = [
    {
      feature:
        'Add a search bar where you can search for a card using its name',
      color: 'bg-zinc-100',
    },
    { feature: 'Add images for other rarities', color: 'bg-zinc-100' },
    {
      feature:
        'Create an account where you can like a card and it will show the cards you have and the ones you dont have on the website or you can download a excel sheet',
      color: 'bg-zinc-100',
    },
  ]

  return (
    <>
      <MetaTags title="Support" description="Support page" />

      <div className="mx-6 py-8 md:mx-14 lg:mx-20 xl:mx-52">
        <h1 className="mb-6 text-3xl font-bold text-green-500">
          Upcoming Features
        </h1>

        <div>
          {upcomingFeatures.map((singleFeature, index) => (
            <div
              className={`mb-4 rounded-lg ${singleFeature.color} p-4`}
              key={index}
            >
              <p>{singleFeature.feature}</p>
            </div>
          ))}
        </div>

        <div>
          <h1 className="mb-6 text-2xl font-bold text-green-500">
            Suggestions/Bugs
          </h1>
          If you have any suggestions or find bugs, you can contact me through
          my twitter or use the forms link below
          <br />
          <a
            href="https://forms.gle/GNM8XsjYCkvSY8pa9"
            target="_blank"
            rel="noreferrer"
          >
            https://forms.gle/GNM8XsjYCkvSY8pa9
          </a>
        </div>

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
    </>
  )
}

export default SupportPage
