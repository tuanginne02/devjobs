import Footer from "@/components/footer";
import Header from "@/components/header";
import TopCompanies from "@/components/top-companies";


function CompaniesTopPage() {

    return (
        <>
            <Header />
            <div className="my-24 mx-16"> <TopCompanies /></div>
            <Footer />
        </>
    )
}

export default CompaniesTopPage;