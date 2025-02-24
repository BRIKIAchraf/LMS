/* eslint-disable @typescript-eslint/no-unused-vars */
import Footer from "@/components/Footer";
import Landing from "@/app/(nondashboard)/landing/page";
import NonDashboardNavbar from "@/components/NonDashboardNavbar";
export default function Home() {
  return (
    <div className="nondashboard-layout">
      <NonDashboardNavbar />
      <main className="nondashboard-layout__main">
        <Landing />
      </main>
      <Footer />
    </div>
  );
}
