import { Link } from "react-router-dom"
import Header from "../components/header"
import Footer from "../components/footer"

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow flex items-center justify-center bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full text-center">
          <h1 className="text-9xl font-extrabold text-primary">404</h1>
          <h2 className="mt-4 text-3xl font-bold text-gray-900 dark:text-white">Page not found</h2>
          <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <div className="mt-6">
            <Link
              to="/"
              className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary/90"
            >
              Go back home
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default NotFoundPage
