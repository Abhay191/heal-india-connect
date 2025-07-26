import Navigation from "@/components/ui/navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, MapPin, Bed, Calendar, Award, Phone } from "lucide-react";

const Hospitals = () => {
  const hospitals = [
    {
      name: "Apollo Hospitals Chennai",
      location: "Chennai, Tamil Nadu",
      rating: 4.8,
      reviews: 1234,
      established: 1983,
      beds: 550,
      image: "/placeholder.svg",
      specializations: ["Cardiology", "Neurology", "Oncology", "Orthopedics"],
      accreditations: ["JCI", "NABH", "ISO"],
      description: "Leading multi-specialty hospital with state-of-the-art facilities and internationally trained doctors.",
      features: ["24/7 Emergency", "ICU", "Organ Transplant", "Robotic Surgery"]
    },
    {
      name: "Fortis Hospital Delhi",
      location: "New Delhi",
      rating: 4.7,
      reviews: 987,
      established: 2001,
      beds: 400,
      image: "/placeholder.svg",
      specializations: ["Neurosurgery", "Cardiology", "Gastroenterology", "Nephrology"],
      accreditations: ["JCI", "NABH"],
      description: "Premier healthcare facility known for advanced medical procedures and patient care.",
      features: ["Advanced ICU", "Cath Lab", "CT/MRI", "Blood Bank"]
    },
    {
      name: "Kokilaben Dhirubhai Ambani Hospital",
      location: "Mumbai, Maharashtra",
      rating: 4.9,
      reviews: 756,
      established: 2009,
      beds: 750,
      image: "/placeholder.svg",
      specializations: ["Oncology", "Orthopedics", "Neurology", "Pediatrics"],
      accreditations: ["JCI", "NABH", "NABL"],
      description: "Ultra-modern hospital with comprehensive healthcare services and cutting-edge technology.",
      features: ["Robotic Surgery", "PET-CT", "Linear Accelerator", "ECMO"]
    },
    {
      name: "Max Super Speciality Hospital",
      location: "Gurgaon, Haryana",
      rating: 4.6,
      reviews: 892,
      established: 2006,
      beds: 520,
      image: "/placeholder.svg",
      specializations: ["Cardiac Sciences", "Neurosciences", "Cancer Care", "Orthopedics"],
      accreditations: ["JCI", "NABH"],
      description: "Leading healthcare provider with focus on patient safety and clinical excellence.",
      features: ["Hybrid OR", "Da Vinci Robot", "Gamma Knife", "ECLS"]
    },
    {
      name: "Medanta - The Medicity",
      location: "Gurgaon, Haryana",
      rating: 4.8,
      reviews: 1103,
      established: 2009,
      beds: 1250,
      image: "/placeholder.svg",
      specializations: ["Heart Surgery", "Liver Transplant", "Neurosurgery", "Oncology"],
      accreditations: ["JCI", "NABH", "NABL"],
      description: "Multi-super specialty hospital with comprehensive medical and surgical services.",
      features: ["Heart Command Center", "Robotic Surgery", "BMT Unit", "Emergency"]
    },
    {
      name: "Christian Medical College",
      location: "Vellore, Tamil Nadu",
      rating: 4.9,
      reviews: 678,
      established: 1900,
      beds: 2700,
      image: "/placeholder.svg",
      specializations: ["General Medicine", "Surgery", "Pediatrics", "Ophthalmology"],
      accreditations: ["JCI", "NABH"],
      description: "Renowned medical institution providing quality healthcare and medical education.",
      features: ["Trauma Center", "Organ Transplant", "Research", "Medical College"]
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
              Top Hospitals in India
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              World-class healthcare facilities with international accreditations. Our partner hospitals offer advanced medical technology and exceptional patient care at affordable costs.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="secondary" className="text-sm px-4 py-2">
                JCI Accredited
              </Badge>
              <Badge variant="secondary" className="text-sm px-4 py-2">
                International Standards
              </Badge>
              <Badge variant="secondary" className="text-sm px-4 py-2">
                Advanced Technology
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Hospitals Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {hospitals.map((hospital, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2">{hospital.name}</CardTitle>
                      <CardDescription className="flex items-center space-x-2 mb-3">
                        <MapPin className="w-4 h-4" />
                        <span>{hospital.location}</span>
                      </CardDescription>
                      <div className="flex items-center space-x-4 text-sm">
                        <div className="flex items-center">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 mr-1" />
                          <span className="font-medium">{hospital.rating}</span>
                          <span className="text-muted-foreground ml-1">({hospital.reviews})</span>
                        </div>
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 text-muted-foreground mr-1" />
                          <span>Est. {hospital.established}</span>
                        </div>
                        <div className="flex items-center">
                          <Bed className="w-4 h-4 text-muted-foreground mr-1" />
                          <span>{hospital.beds} beds</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-muted-foreground">{hospital.description}</p>
                    
                    <div>
                      <h4 className="font-semibold mb-2">Specializations:</h4>
                      <div className="flex flex-wrap gap-2">
                        {hospital.specializations.map((spec, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {spec}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2">Accreditations:</h4>
                      <div className="flex space-x-2">
                        {hospital.accreditations.map((acc, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs">
                            <Award className="w-3 h-3 mr-1" />
                            {acc}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2">Key Features:</h4>
                      <div className="flex flex-wrap gap-2">
                        {hospital.features.map((feature, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {feature}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex space-x-2 pt-4 border-t">
                      <Button variant="outline" className="flex-1">
                        <Phone className="w-4 h-4 mr-2" />
                        Contact
                      </Button>
                      <Button className="flex-1">
                        View Details
                      </Button>
                    </div>
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

export default Hospitals;