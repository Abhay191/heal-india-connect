import Navigation from "@/components/ui/navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart, Users, Award, Globe, Shield, Clock, CheckCircle, Star } from "lucide-react";

const About = () => {
  const stats = [
    { label: "Patients Served", value: "50,000+", icon: Users },
    { label: "Partner Hospitals", value: "200+", icon: Heart },
    { label: "Countries Served", value: "75+", icon: Globe },
    { label: "Success Rate", value: "98%", icon: Award }
  ];

  const values = [
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "We work only with JCI-accredited hospitals and internationally trained doctors to ensure the highest standards of care."
    },
    {
      icon: Heart,
      title: "Patient-Centric Care",
      description: "Every treatment plan is personalized to your needs, with dedicated coordinators supporting you throughout your journey."
    },
    {
      icon: Clock,
      title: "Timely Treatment",
      description: "Fast-track appointments and streamlined processes ensure you receive treatment without unnecessary delays."
    },
    {
      icon: Globe,
      title: "Global Standards",
      description: "International protocols and best practices ensure you receive world-class healthcare at affordable prices."
    }
  ];

  const team = [
    {
      name: "Dr. Sarah Johnson",
      role: "Chief Medical Officer",
      experience: "20+ years in International Healthcare",
      image: "/placeholder.svg"
    },
    {
      name: "Rajesh Patel",
      role: "Director of Operations",
      experience: "15+ years in Medical Tourism",
      image: "/placeholder.svg"
    },
    {
      name: "Emily Chen",
      role: "Patient Care Coordinator",
      experience: "10+ years in Patient Relations",
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
              About HealYourTrip
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Connecting patients worldwide with India's finest healthcare providers. We make quality medical treatment accessible and affordable for everyone.
            </p>
            <Button size="lg" className="bg-gradient-hero hover:opacity-90">
              Start Your Journey
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-4 rounded-full bg-gradient-to-br from-primary/10 to-secondary/10">
                    <stat.icon className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-3xl font-bold text-foreground mb-2">{stat.value}</h3>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-muted-foreground">
                To democratize access to quality healthcare by connecting patients with world-class medical facilities in India, ensuring exceptional care at affordable prices.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Why India?</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-muted-foreground">
                    <li>• Cost savings of 60-90% compared to Western countries</li>
                    <li>• World-class hospitals with international accreditations</li>
                    <li>• English-speaking medical professionals</li>
                    <li>• Advanced medical technology and procedures</li>
                    <li>• Rich cultural experience during recovery</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Star className="w-5 h-5 text-yellow-500" />
                    <span>Our Promise</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-muted-foreground">
                    <li>• Transparent pricing with no hidden costs</li>
                    <li>• 24/7 support throughout your journey</li>
                    <li>• Assistance with travel and accommodation</li>
                    <li>• Follow-up care coordination</li>
                    <li>• 100% commitment to your health and safety</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Our Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These core principles guide everything we do and ensure the best possible experience for our patients.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <div className="p-4 rounded-full bg-gradient-to-br from-primary/10 to-secondary/10">
                      <value.icon className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Our Leadership Team
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experienced professionals dedicated to providing exceptional healthcare experiences.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {team.map((member, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary/10 to-secondary/10 mx-auto mb-4 flex items-center justify-center">
                    <Users className="w-12 h-12 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <CardDescription className="text-primary font-medium">
                    {member.role}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Badge variant="secondary" className="text-sm">
                    {member.experience}
                  </Badge>
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

export default About;