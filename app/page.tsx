import ChooseUs from "@/components/ChooseUs/ChooseUs";
import Hero from "@/components/Hero/Hero";
import Navbar from "@/components/Navbar/Navbar";

export default function Home() {
  return (
    <div className="mt-10">
      <Navbar/>
      <Hero/>
      <ChooseUs/>
    </div>
  );
}
