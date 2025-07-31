import Navigation from "@/components/ui/navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, Brain, Bone, Eye, Scissors, Baby, Activity, Stethoscope } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Heart,
      title: "Cardiology",
      description: "Comprehensive heart care including bypass surgery, angioplasty, and valve replacement.",
      treatments: ["Bypass Surgery", "Angioplasty", "Valve Replacement", "Pacemaker Implantation"],
      costRange: "$8,000 - $25,000",
      savings: "Up to 80% savings",
      color: "text-red-500"
    },
    {
      icon: Brain,
      title: "Neurology",
      description: "Advanced neurological treatments and brain surgeries by expert neurosurgeons.",
      treatments: ["Brain Tumor Surgery", "Spine Surgery", "Stroke Treatment", "Epilepsy Surgery"],
      costRange: "$12,000 - $40,000",
      savings: "Up to 75% savings",
      color: "text-purple-500"
    },
    {
      icon: Bone,
      title: "Orthopedics",
      description: "Joint replacements, sports medicine, and bone reconstruction procedures.",
      treatments: ["Hip Replacement", "Knee Replacement", "Spine Surgery", "Sports Medicine"],
      costRange: "$6,000 - $18,000",
      savings: "Up to 85% savings",
      color: "text-blue-500"
    },
    {
      icon: Eye,
      title: "Ophthalmology",
      description: "Eye care treatments including LASIK, cataract surgery, and retinal procedures.",
      treatments: ["LASIK Surgery", "Cataract Surgery", "Retinal Surgery", "Glaucoma Treatment"],
      costRange: "$2,000 - $8,000",
      savings: "Up to 90% savings",
      color: "text-green-500"
    },
    {
      icon: Scissors,
      title: "Plastic Surgery",
      description: "Cosmetic and reconstructive surgery procedures with world-class surgeons.",
      treatments: ["Rhinoplasty", "Breast Surgery", "Liposuction", "Face Lift"],
      costRange: "$3,000 - $12,000",
      savings: "Up to 70% savings",
      color: "text-pink-500"
    },
    {
      icon: Baby,
      title: "Fertility",
      description: "IVF, fertility treatments, and reproductive medicine with high success rates.",
      treatments: ["IVF Treatment", "ICSI", "Egg Donation", "Surrogacy"],
      costRange: "$3,500 - $8,000",
      savings: "Up to 65% savings",
      color: "text-orange-500"
    },
    {
      icon: Activity,
      title: "Oncology",
      description: "Cancer treatment with advanced radiation therapy and chemotherapy protocols.",
      treatments: ["Chemotherapy", "Radiation Therapy", "Immunotherapy", "Surgical Oncology"],
      costRange: "$5,000 - $30,000",
      savings: "Up to 80% savings",
      color: "text-indigo-500"
    },
    {
      icon: Stethoscope,
      title: "General Medicine",
      description: "Comprehensive health checkups, diagnostics, and preventive care services.",
      treatments: ["Health Checkups", "Diagnostics", "Preventive Care", "Chronic Disease Management"],
      costRange: "$500 - $3,000",
      savings: "Up to 85% savings",
      color: "text-teal-500"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Medical Services in India
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              World-class healthcare treatments at affordable prices. Save up to 90% compared to Western countries while receiving treatment from internationally trained doctors.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="secondary" className="text-sm px-4 py-2">
                JCI Accredited Hospitals
              </Badge>
              <Badge variant="secondary" className="text-sm px-4 py-2">
                English Speaking Doctors
              </Badge>
              <Badge variant="secondary" className="text-sm px-4 py-2">
                International Standards
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10`}>
                      <service.icon className={`w-8 h-8 ${service.color}`} />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </div>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Common Treatments:</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.treatments.map((treatment, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {treatment}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div className="flex justify-between items-center pt-4 border-t">
                      <div>
                        <p className="text-sm text-muted-foreground">Cost Range</p>
                        <p className="font-semibold">{service.costRange}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-muted-foreground">Savings</p>
                        <p className="font-semibold text-green-600">{service.savings}</p>
                      </div>
                    </div>
                    <Button 
                      className="w-full mt-4"
                      onClick={() => window.open('/contact', '_blank')}
                    >
                      Get Quote
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;