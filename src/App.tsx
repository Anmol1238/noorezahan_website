import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import { HomePage } from "./pages/Home";
import { FeaturesPage } from "./pages/Features";
import { PrivacyPage } from "./pages/Privacy";
import { TermsPage } from "./pages/Terms";
import { ContactPage, ReportPage } from "./pages/ContactReport";
import {
  AboutPage,
  AiConsentPage,
  CommunityPage,
  DeleteAccountPage,
  NotFoundPage,
} from "./pages/SimplePages";
import { SupportPage } from "./pages/Support";
import "./index.css";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="features" element={<FeaturesPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="support" element={<SupportPage />} />
          <Route path="report" element={<ReportPage />} />
          <Route path="report-problem" element={<Navigate to="/report" replace />} />
          <Route path="privacy" element={<PrivacyPage />} />
          <Route path="privacy-policy" element={<Navigate to="/privacy" replace />} />
          <Route path="terms" element={<TermsPage />} />
          <Route path="terms-and-conditions" element={<Navigate to="/terms" replace />} />
          <Route path="ai-photo-consent" element={<AiConsentPage />} />
          <Route path="community" element={<CommunityPage />} />
          <Route path="community-guidelines" element={<Navigate to="/community" replace />} />
          <Route path="delete-account" element={<DeleteAccountPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
