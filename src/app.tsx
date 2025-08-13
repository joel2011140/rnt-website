import { HomePage } from "./pages/home-page";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { RootLayout } from "./root-layout";
import NotFoundPage from "./pages/not-found";


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RootLayout><HomePage /></RootLayout>} />
        <Route path="*" element={<RootLayout><NotFoundPage /></RootLayout>} />
      </Routes>
    </Router>
  );
}
