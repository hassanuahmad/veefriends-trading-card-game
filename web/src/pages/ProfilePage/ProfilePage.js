import { useAuth } from '@redwoodjs/auth'
import { MetaTags } from '@redwoodjs/web'

const ProfilePage = () => {
  const { currentUser } = useAuth()

  return (
    <>
      <MetaTags title="Profile" description="Profile page" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="py-8 lg:flex lg:items-center lg:justify-between">
          <div className="min-w-0 flex-1">
            <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
              Welcome {currentUser?.email}!
            </h2>
            <main>
              <div className="mx-auto py-6">
                {/* Replace with your content */}
                <div className="px-4 py-6 sm:px-0">
                  <div className="h-96 rounded-lg border-4 border-dashed border-gray-200" />
                </div>
                {/* /End replace */}
              </div>
            </main>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProfilePage
