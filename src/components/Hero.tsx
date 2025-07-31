import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Calculator, Globe, Heart, Shield, Star } from "lucide-react";
import heroImage from "@/assets/hero-medical-tourism.jpg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useInquiry } from "@/hooks/useInquiry";

const Hero = () => {
  const navigate = useNavigate();
  const { submitInquiry, isSubmitting } = useInquiry();
  const [formData, setFormData] = useState({
    treatment: '',
    name: '',
    email: '',
    phone: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.treatment || !formData.name || !formData.email || !formData.phone) {
      return;
    }
    
    const success = await submitInquiry({
      treatmentCategory: formData.treatment,
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
    });

    if (success) {
      setFormData({ treatment: '', name: '', email: '', phone: '' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-hero">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Medical Tourism"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-90"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Main Content */}
          <div className="text-white space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Heart className="w-6 h-6 text-health-green" />
                <span className="text-health-green font-semibold">World-Class Healthcare</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Connect with Top Indian
                <span className="block text-health-green">Hospitals & Doctors</span>
              </h1>
              <p className="text-xl text-blue-100 max-w-lg">
                Save up to 70% on medical treatments while receiving world-class care from India's finest healthcare professionals.
              </p>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-6 py-6">
              <div className="text-center">
                <div className="text-2xl font-bold">1M+</div>
                <div className="text-sm text-blue-100">Patients Treated</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">500+</div>
                <div className="text-sm text-blue-100">Partner Hospitals</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">95%</div>
                <div className="text-sm text-blue-100">Success Rate</div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-health-green hover:bg-success-green text-white px-8"
                onClick={() => navigate('/services')}
              >
                Find Treatment
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-primary px-8"
                onClick={() => navigate('/contact')}
              >
                <Calculator className="w-4 h-4 mr-2" />
                Cost Calculator
              </Button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="flex items-center space-x-2">
                <Shield className="w-5 h-5 text-health-green" />
                <span className="text-sm">JCI Accredited</span>
              </div>
              <div className="flex items-center space-x-2">
                <Globe className="w-5 h-5 text-health-green" />
                <span className="text-sm">24/7 Support</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="w-5 h-5 text-health-green" />
                <span className="text-sm">Expert Doctors</span>
              </div>
              <div className="flex items-center space-x-2">
                <Heart className="w-5 h-5 text-health-green" />
                <span className="text-sm">Complete Care</span>
              </div>
            </div>
          </div>

          {/* Right Column - Quick Inquiry Form */}
          <div className="lg:justify-self-end w-full max-w-md">
            <Card className="p-6 bg-white shadow-glow border-0">
              <div className="space-y-4">
                <div className="text-center">
                  <h3 className="text-xl font-bold text-foreground">Get Free Treatment Quote</h3>
                  <p className="text-muted-foreground text-sm">Connect with our medical experts</p>
                </div>

                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div>
                    <label className="text-sm font-medium text-foreground">Treatment Required</label>
                    <select 
                      className="w-full mt-1 p-3 border border-border rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                      value={formData.treatment}
                      onChange={(e) => setFormData({...formData, treatment: e.target.value})}
                      required
                    >
                      <option value="">Select Treatment</option>
                      <option value="Cardiac Surgery">Cardiac Surgery</option>
                      <option value="Cancer Treatment">Cancer Treatment</option>
                      <option value="Fertility/IVF">Fertility/IVF</option>
                      <option value="Orthopedics">Orthopedics</option>
                      <option value="Organ Transplant">Organ Transplant</option>
                      <option value="Cosmetic Surgery">Cosmetic Surgery</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground">Your Name</label>
                    <input 
                      type="text" 
                      placeholder="Enter your name"
                      className="w-full mt-1 p-3 border border-border rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground">Email</label>
                    <input 
                      type="email" 
                      placeholder="Enter your email"
                      className="w-full mt-1 p-3 border border-border rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      required
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground">Phone Number</label>
                    <input 
                      type="tel" 
                      placeholder="Enter your phone"
                      className="w-full mt-1 p-3 border border-border rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      required
                    />
                  </div>

                  <Button 
                    type="submit"
                    className="w-full bg-gradient-hero hover:opacity-90" 
                    size="lg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Submitting...' : 'Get Free Quote'}
                  </Button>
                </form>

                <p className="text-xs text-muted-foreground text-center">
                  Your information is secure and confidential
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;