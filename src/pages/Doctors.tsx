import Navigation from "@/components/ui/navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star, MapPin, Clock, DollarSign } from "lucide-react";

const Doctors = () => {
  const doctors = [
    {
      name: "Dr. Rajesh Kumar",
      specialization: "Cardiothoracic Surgery",
      experience: "25 years",
      rating: 4.9,
      reviews: 342,
      hospital: "Apollo Hospital, Chennai",
      consultationFee: "$150",
      education: ["MBBS", "MS Cardiothoracic Surgery", "Fellowship Harvard"],
      languages: ["English", "Hindi", "Tamil"],
      image: "/placeholder.svg"
    },
    {
      name: "Dr. Priya Sharma",
      specialization: "Neurosurgery",
      experience: "18 years",
      rating: 4.8,
      reviews: 278,
      hospital: "Fortis Hospital, Delhi",
      consultationFee: "$180",
      education: ["MBBS", "MCh Neurosurgery", "Fellowship Johns Hopkins"],
      languages: ["English", "Hindi", "Punjabi"],
      image: "/placeholder.svg"
    },
    {
      name: "Dr. Arjun Patel",
      specialization: "Orthopedic Surgery",
      experience: "22 years",
      rating: 4.7,
      reviews: 189,
      hospital: "Kokilaben Hospital, Mumbai",
      consultationFee: "$120",
      education: ["MBBS", "MS Orthopedics", "Fellowship Mayo Clinic"],
      languages: ["English", "Hindi", "Gujarati"],
      image: "/placeholder.svg"
    },
    {
      name: "Dr. Meera Reddy",
      specialization: "Ophthalmology",
      experience: "15 years",
      rating: 4.9,
      reviews: 456,
      hospital: "L V Prasad Eye Institute, Hyderabad",
      consultationFee: "$100",
      education: ["MBBS", "MS Ophthalmology", "Fellowship Moorfields"],
      languages: ["English", "Hindi", "Telugu"],
      image: "/placeholder.svg"
    },
    {
      name: "Dr. Vikram Singh",
      specialization: "Plastic Surgery",
      experience: "20 years",
      rating: 4.8,
      reviews: 234,
      hospital: "Max Healthcare, Gurgaon",
      consultationFee: "$160",
      education: ["MBBS", "MCh Plastic Surgery", "Fellowship UCLA"],
      languages: ["English", "Hindi"],
      image: "/placeholder.svg"
    },
    {
      name: "Dr. Anita Gupta",
      specialization: "Fertility Specialist",
      experience: "16 years",
      rating: 4.9,
      reviews: 312,
      hospital: "Nova IVI Fertility, Bangalore",
      consultationFee: "$130",
      education: ["MBBS", "MD Gynecology", "Fellowship Reproductive Medicine"],
      languages: ["English", "Hindi", "Kannada"],
      image: "/placeholder.svg"
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
              Top Doctors in India
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Connect with internationally trained doctors and specialists. Our network includes top physicians from premier Indian medical institutions with global experience.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="secondary" className="text-sm px-4 py-2">
                Board Certified
              </Badge>
              <Badge variant="secondary" className="text-sm px-4 py-2">
                International Training
              </Badge>
              <Badge variant="secondary" className="text-sm px-4 py-2">
                English Speaking
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Doctors Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {doctors.map((doctor, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start space-x-4">
                    <Avatar className="w-16 h-16">
                      <AvatarImage src={doctor.image} />
                      <AvatarFallback>{doctor.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <CardTitle className="text-lg">{doctor.name}</CardTitle>
                      <CardDescription className="text-primary font-medium">
                        {doctor.specialization}
                      </CardDescription>
                      <div className="flex items-center space-x-2 mt-2">
                        <div className="flex items-center">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          <span className="text-sm font-medium ml-1">{doctor.rating}</span>
                        </div>
                        <span className="text-sm text-muted-foreground">
                          ({doctor.reviews} reviews)
                        </span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2 text-sm">
                      <Clock className="w-4 h-4 text-muted-foreground" />
                      <span>{doctor.experience} experience</span>
                    </div>
                    
                    <div className="flex items-center space-x-2 text-sm">
                      <MapPin className="w-4 h-4 text-muted-foreground" />
                      <span>{doctor.hospital}</span>
                    </div>
                    
                    <div className="flex items-center space-x-2 text-sm">
                      <DollarSign className="w-4 h-4 text-muted-foreground" />
                      <span>Consultation: {doctor.consultationFee}</span>
                    </div>

                    <div>
                      <h4 className="font-semibold text-sm mb-2">Education:</h4>
                      <div className="flex flex-wrap gap-1">
                        {doctor.education.map((edu, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {edu}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-sm mb-2">Languages:</h4>
                      <div className="flex flex-wrap gap-1">
                        {doctor.languages.map((lang, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs">
                            {lang}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex space-x-2 pt-4">
                      <Button variant="outline" className="flex-1">
                        View Profile
                      </Button>
                      <Button className="flex-1">
                        Book Consultation
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

export default Doctors;