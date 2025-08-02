import Navigation from "@/components/ui/navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, Mail, MapPin, Clock, MessageCircle, Send } from "lucide-react";
import { useInquiry } from "@/hooks/useInquiry";
import { useState } from "react";
import { toast } from "@/components/ui/sonner";

const Contact = () => {
  const { submitInquiry, isSubmitting } = useInquiry();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    country: '',
    treatment: '',
    budget: '',
    message: '',
    timeline: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone || !formData.treatment || !formData.message) {
      toast.error("Please fill in all required fields");
      return;
    }

    const success = await submitInquiry({
      treatmentCategory: formData.treatment,
      name: `${formData.firstName} ${formData.lastName}`,
      email: formData.email,
      phone: formData.phone,
      message: `${formData.message}\n\nAdditional Details:\nCountry: ${formData.country}\nBudget Range: ${formData.budget}\nPreferred Timeline: ${formData.timeline}`,
      budgetRange: formData.budget,
      preferredLocation: 'India'
    });

    if (success) {
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        country: '',
        treatment: '',
        budget: '',
        message: '',
        timeline: ''
      });
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      description: "Speak with our medical coordinators",
      details: ["+91 98765 43210", "+1 555 123 4567"],
      available: "24/7 Support"
    },
    {
      icon: Mail,
      title: "Email Us",
      description: "Send us your medical queries",
      details: ["info@healyourtrip.com", "support@healyourtrip.com"],
      available: "Response within 2 hours"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      description: "Our offices worldwide",
      details: ["Mumbai, India", "New York, USA", "London, UK"],
      available: "Mon-Fri, 9 AM - 6 PM"
    },
    {
      icon: Clock,
      title: "Emergency",
      description: "24/7 emergency support",
      details: ["Emergency Hotline", "+91 98765 00000"],
      available: "Available 24/7"
    }
  ];

  const treatmentCategories = [
    "Cardiology",
    "Neurology", 
    "Orthopedics",
    "Oncology",
    "Ophthalmology",
    "Plastic Surgery",
    "Fertility Treatment",
    "Dental Care",
    "Other"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Get in touch with our medical coordinators for personalized assistance. We're here to help you every step of the way.
            </p>
            <div className="flex justify-center">
              <Button size="lg" className="bg-gradient-hero hover:opacity-90">
                <MessageCircle className="w-5 h-5 mr-2" />
                Start Live Chat
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((contact, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <div className="p-4 rounded-full bg-gradient-to-br from-primary/10 to-secondary/10">
                      <contact.icon className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  <CardTitle className="text-xl">{contact.title}</CardTitle>
                  <CardDescription>{contact.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {contact.details.map((detail, idx) => (
                      <p key={idx} className="font-medium text-foreground">
                        {detail}
                      </p>
                    ))}
                    <p className="text-sm text-muted-foreground mt-3">
                      {contact.available}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Send Us a Message
              </h2>
              <p className="text-lg text-muted-foreground">
                Fill out the form below and our medical coordinator will get back to you within 2 hours.
              </p>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Medical Inquiry Form</CardTitle>
                <CardDescription>
                  Please provide as much detail as possible to help us assist you better.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input 
                        id="firstName" 
                        placeholder="Enter your first name" 
                        value={formData.firstName}
                        onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                        required 
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input 
                        id="lastName" 
                        placeholder="Enter your last name" 
                        value={formData.lastName}
                        onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                        required 
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="Enter your email" 
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        required 
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input 
                        id="phone" 
                        placeholder="Enter your phone number" 
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        required 
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="country">Country *</Label>
                      <Input 
                        id="country" 
                        placeholder="Enter your country" 
                        value={formData.country}
                        onChange={(e) => setFormData({...formData, country: e.target.value})}
                        required 
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="treatment">Treatment Category *</Label>
                      <Select value={formData.treatment} onValueChange={(value) => setFormData({...formData, treatment: value})}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select treatment category" />
                        </SelectTrigger>
                        <SelectContent>
                          {treatmentCategories.map((category) => (
                            <SelectItem key={category} value={category.toLowerCase()}>
                              {category}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="budget">Budget Range (USD)</Label>
                    <Select value={formData.budget} onValueChange={(value) => setFormData({...formData, budget: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your budget range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="under-5000">Under $5,000</SelectItem>
                        <SelectItem value="5000-10000">$5,000 - $10,000</SelectItem>
                        <SelectItem value="10000-20000">$10,000 - $20,000</SelectItem>
                        <SelectItem value="20000-50000">$20,000 - $50,000</SelectItem>
                        <SelectItem value="over-50000">Over $50,000</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Please describe your medical condition, treatment requirements, preferred location, and any other relevant details..."
                      className="min-h-32"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      required 
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="timeline">Preferred Treatment Timeline</Label>
                    <Select value={formData.timeline} onValueChange={(value) => setFormData({...formData, timeline: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="When would you like to receive treatment?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="asap">As soon as possible</SelectItem>
                        <SelectItem value="1-month">Within 1 month</SelectItem>
                        <SelectItem value="2-3-months">2-3 months</SelectItem>
                        <SelectItem value="6-months">Within 6 months</SelectItem>
                        <SelectItem value="planning">Just planning/researching</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-hero hover:opacity-90"
                    disabled={isSubmitting}
                  >
                    <Send className="w-4 h-4 mr-2" />
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>

                  <p className="text-sm text-muted-foreground text-center">
                    By submitting this form, you agree to our privacy policy and terms of service.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Frequently Asked Questions
            </h2>
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">How quickly can I get a treatment quote?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We typically provide detailed treatment quotes within 24-48 hours of receiving your medical information.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Do you assist with visa and travel?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Yes, we provide comprehensive assistance with medical visa applications, flight bookings, and accommodation arrangements.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">What about follow-up care?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We coordinate follow-up care both in India and with doctors in your home country to ensure continuity of care.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Are the costs transparent?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Absolutely. We provide detailed cost breakdowns with no hidden fees, including treatment, accommodation, and additional services.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;