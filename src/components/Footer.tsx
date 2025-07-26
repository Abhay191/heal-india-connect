import { Heart, Phone, Mail, MapPin, Globe, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const services = [
    "Cardiac Surgery",
    "Cancer Treatment", 
    "Fertility & IVF",
    "Orthopedics",
    "Organ Transplants",
    "Cosmetic Surgery",
    "Dental Care",
    "Ayurveda"
  ];

  const quickLinks = [
    "About Us",
    "Our Services", 
    "Top Hospitals",
    "Find Doctors",
    "Cost Calculator",
    "Patient Reviews",
    "Travel Assistance",
    "Contact Us"
  ];

  const locations = [
    "Delhi NCR",
    "Mumbai",
    "Chennai", 
    "Bangalore",
    "Hyderabad",
    "Kolkata",
    "Pune",
    "Ahmedabad"
  ];

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-hero rounded-lg flex items-center justify-center">
                <Heart className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">HealYourTrip</span>
            </div>
            <p className="text-background/80 leading-relaxed">
              Connecting international patients with India's finest hospitals and doctors. 
              Save up to 70% on medical treatments without compromising on quality.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-health-green" />
                <span className="text-sm">+91 99999 88888</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-health-green" />
                <span className="text-sm">info@healyourtrip.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Globe className="w-4 h-4 text-health-green" />
                <span className="text-sm">24/7 Support Available</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Medical Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a href="#" className="text-background/80 hover:text-health-green transition-colors text-sm">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-background/80 hover:text-health-green transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Stay Connected</h3>
            <p className="text-background/80 text-sm">
              Get the latest updates on medical tourism and special offers.
            </p>
            
            {/* Newsletter Signup */}
            <div className="space-y-3">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="w-full p-3 rounded-md bg-background/10 border border-background/20 text-background placeholder-background/60 focus:outline-none focus:ring-2 focus:ring-health-green"
              />
              <Button className="w-full bg-health-green hover:bg-success-green text-white">
                Subscribe
              </Button>
            </div>

            {/* Office Locations */}
            <div className="space-y-3">
              <h4 className="font-medium">Office Locations</h4>
              <div className="grid grid-cols-2 gap-2">
                {locations.slice(0, 4).map((location, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <MapPin className="w-3 h-3 text-health-green" />
                    <span className="text-xs text-background/80">{location}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Social Media & Bottom Section */}
        <div className="py-8 border-t border-background/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Social Media */}
            <div className="flex items-center space-x-4">
              <span className="text-sm text-background/80">Follow us:</span>
              <div className="flex space-x-3">
                <a href="#" className="w-8 h-8 bg-background/10 rounded-full flex items-center justify-center hover:bg-health-green transition-colors">
                  <Facebook className="w-4 h-4" />
                </a>
                <a href="#" className="w-8 h-8 bg-background/10 rounded-full flex items-center justify-center hover:bg-health-green transition-colors">
                  <Twitter className="w-4 h-4" />
                </a>
                <a href="#" className="w-8 h-8 bg-background/10 rounded-full flex items-center justify-center hover:bg-health-green transition-colors">
                  <Instagram className="w-4 h-4" />
                </a>
                <a href="#" className="w-8 h-8 bg-background/10 rounded-full flex items-center justify-center hover:bg-health-green transition-colors">
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Copyright & Legal */}
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-sm text-background/80">
              <span>© 2024 HealYourTrip. All rights reserved.</span>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-health-green transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-health-green transition-colors">Terms of Service</a>
                <a href="#" className="hover:text-health-green transition-colors">Disclaimer</a>
              </div>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="py-6 border-t border-background/20">
          <div className="flex flex-wrap justify-center items-center space-x-8 space-y-2">
            <div className="text-center">
              <div className="text-xs text-background/60">Certified by</div>
              <div className="text-sm font-medium">ISO 9001:2015</div>
            </div>
            <div className="text-center">
              <div className="text-xs text-background/60">Member of</div>
              <div className="text-sm font-medium">Medical Tourism Association</div>
            </div>
            <div className="text-center">
              <div className="text-xs text-background/60">Partners with</div>
              <div className="text-sm font-medium">JCI Accredited Hospitals</div>
            </div>
            <div className="text-center">
              <div className="text-xs text-background/60">Secure payments by</div>
              <div className="text-sm font-medium">SSL Encrypted</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;