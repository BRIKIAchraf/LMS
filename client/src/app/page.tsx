/* eslint-disable @typescript-eslint/no-unused-vars */
import Footer from "@/components/Footer";
import Landing from "@/app/(nondashboard)/landing/page";
export default function Home() {
  return (
    <div className="nondashboard-layout">
      <main className="nondashboard-layout__main">
        <Landing />
      </main>
      <Footer />
    </div>
  );
}
