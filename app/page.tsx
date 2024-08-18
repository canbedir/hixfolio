import ChooseUs from "@/components/ChooseUs/ChooseUs";
import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Hero/Hero";
import Navbar from "@/components/Navbar/Navbar";

export default function Home() {
  return (
    <div className="mt-10">
      <div className="container mx-auto max-w-7xl">
        <Navbar />
        <Hero />
        <ChooseUs />
      </div>
      <Footer />
    </div>
  );
}
