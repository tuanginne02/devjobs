import Header from "../components/header"
import Footer from "../components/footer"
// import HeroBanner from "../components/hero-banner"
import FeaturedJobs from "../components/featured-jobs"
import HeroBanner1 from "../components/hero-banner1"
import JobSearch from "../components/job-search"
import TopCompanies from "../components/top-companies"

const HomePage = () => {
  return (

    <main className="min-h-screen flex flex-col">
      <Header />
      <HeroBanner1 />
      <div className="container mx-auto px-4 py-8">
        <JobSearch />
        <section className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Featured Jobs</h2>
          <FeaturedJobs />
        </section>
        <section className="mt-12 mb-12">
          <h2 className="text-2xl font-bold mb-6">Top Companies</h2>
          <TopCompanies />
        </section>
      </div>
      <Footer />
    </main>
  )
}

export default HomePage
