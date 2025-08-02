import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Heart, 
  Activity, 
  Baby, 
  Bone, 
  Plus, 
  Sparkles,
  Smile,
  Leaf
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useTreatments } from "@/hooks/useSupabaseData";

const Services = () => {
  const navigate = useNavigate();
  const { treatments, loading } = useTreatments();
  
  const services = [
    {
      icon: Heart,
      title: "Cardiac Surgery",
      description: "Advanced heart treatments including bypass surgery, valve replacement, and angioplasty.",
      cost: "$5,000 - $15,000",
      savings: "Save 70%",
      color: "text-red-500"
    },
    {
      icon: Activity,
      title: "Cancer Treatment",
      description: "Comprehensive oncology care with latest chemotherapy, radiation, and surgery options.",
      cost: "$3,000 - $25,000", 
      savings: "Save 65%",
      color: "text-purple-500"
    },
    {
      icon: Baby,
      title: "Fertility & IVF",
      description: "Complete reproductive health solutions including IVF, ICSI, and fertility treatments.",
      cost: "$2,500 - $8,000",
      savings: "Save 75%",
      color: "text-pink-500"
    },
    {
      icon: Bone,
      title: "Orthopedics",
      description: "Joint replacement, spine surgery, and sports medicine with advanced techniques.",
      cost: "$4,000 - $12,000",
      savings: "Save 80%",
      color: "text-blue-500"
    },
    {
      icon: Plus,
      title: "Organ Transplants",
      description: "Liver, kidney, and heart transplants with experienced surgical teams.",
      cost: "$15,000 - $50,000",
      savings: "Save 60%",
      color: "text-green-500"
    },
    {
      icon: Sparkles,
      title: "Cosmetic Surgery",
      description: "Aesthetic procedures including rhinoplasty, liposuction, and facial surgeries.",
      cost: "$1,500 - $8,000",
      savings: "Save 70%",
      color: "text-indigo-500"
    },
    {
      icon: Smile,
      title: "Dental Treatments",
      description: "Complete dental care including implants, orthodontics, and cosmetic dentistry.",
      cost: "$500 - $5,000",
      savings: "Save 85%",
      color: "text-yellow-500"
    },
    {
      icon: Leaf,
      title: "Ayurveda & Wellness",
      description: "Traditional Indian medicine and wellness treatments for holistic healing.",
      cost: "$1,000 - $5,000",
      savings: "Save 60%",
      color: "text-green-600"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Our Medical Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Access world-class medical treatments in India with significant cost savings 
            compared to Western countries, without compromising on quality.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-hover transition-all duration-300 bg-gradient-card border-0 hover:-translate-y-1"
              >
                <CardHeader className="text-center pb-4">
                  <div className={`w-12 h-12 rounded-lg bg-muted flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className={`w-6 h-6 ${service.color}`} />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{service.title}</h3>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-foreground">Cost Range:</span>
                      <span className="text-sm font-bold text-primary">{service.cost}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">vs USA/EU:</span>
                      <span className="text-sm font-bold text-health-green">{service.savings}</span>
                    </div>
                  </div>

                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full mt-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300"
                    onClick={() => navigate('/services')}
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {loading && (
          <div className="text-center mt-8">
            <p className="text-muted-foreground">Loading additional services...</p>
          </div>
        )}

        <div className="text-center mt-12">
          <Button 
            size="lg" 
            className="bg-gradient-hero hover:opacity-90 px-8"
            onClick={() => navigate('/services')}
          >
            View All Services
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;