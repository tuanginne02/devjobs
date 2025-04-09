import { Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import LoginPage from "./pages/LoginPage"
import NotFoundPage from "./pages/NotFoundPage"
import ProfilePage from "./pages/ProfilePage"
import RegisterPage from "./pages/RegisterPage"
import ForgotPasswordPage from "./pages/ForgotPasswordPage"
import ProPage from "./pages/ProPage"
import AboutPage from "./pages/AboutPage"
import ContactPage from "./pages/ContactPage"
import ResumesPage from "./pages/ResumesPage"
import CompaniesPage from "./pages/companies/CompaniesPage"
import DashboardPage from "./pages/dashboard/DashboardPage"
import JobApplyPage from "./pages/jobs/[id]/apply/JobApplyPage"
import JobApplySuccessPage from "./pages/jobs/[id]/apply/success/JobApplySuccessPage"
import JobsPage from "./pages/jobs/JobsPage"
// import TopCompanies from "./components/top-companies"
import CompanyDetailPage from "./pages/companies/[id]/CompanyDetailPage"
import CompaniesTopPage from "./pages/companies/CompaniesTopPage"


function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/jobs" element={<JobsPage />} />
      <Route path="/companies" element={<CompaniesPage />} />
      <Route path="/companies/top" element={<CompaniesTopPage />} />
      <Route path="/companies/:idSlug" element={<CompanyDetailPage />} />
      <Route path="/companies/:companyId" element={<CompanyDetailPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/resumes" element={<ResumesPage />} />
      <Route path="/jobs/:id/apply" element={<JobApplyPage params={{
        id: ""
      }} />} />
      <Route path="/jobs/:id" element={<JobApplyPage params={{
        id: ""
      }} />} />
      <Route path="/jobs/:id/apply/success" element={<JobApplySuccessPage params={{
        id: ""
      }} />} />
      <Route path="/pro" element={<ProPage />} />
      <Route path="/forgot-password" element={<ForgotPasswordPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="*" element={<NotFoundPage />} />
      {/* <Route path="/resumes/upload" element={<UploadResumePage />} />
      <Route path="/resumes/create" element={<CreateResumePage />} /> */}
      {/* <Route path="/job/:id" element={<JobPage />} />  */}
    </Routes>
  )
}

export default App
