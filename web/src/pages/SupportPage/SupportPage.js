import { MetaTags } from '@redwoodjs/web'

const SupportPage = () => {
  return (
    <>
      <MetaTags title="Support" description="Support page" />

      <h1 className="text-3xl font-bold">Upcoming Features</h1>
      <ul>
        <li>* Add image for rare, very rare, epic</li>
        <li>
          * Create an account where you can like a card and it will show what
          cards you have and which ones you dont have on the website or you can
          download a excel sheet
        </li>
        <li>* Add a search bar where you search for a card using its name</li>
      </ul>

      <h1 className="text-3xl font-bold">Want to support us?</h1>
      <p>ETH ADDRESS: 123123123</p>

      <h2 className="text-3xl font-bold">
        Made by @hapaise and @ahmad on twitter
      </h2>
    </>
  )
}

export default SupportPage
