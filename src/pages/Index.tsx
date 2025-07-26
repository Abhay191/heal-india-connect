import Navigation from "@/components/ui/navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import FeaturedHospitals from "@/components/FeaturedHospitals";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Services />
      <FeaturedHospitals />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;
