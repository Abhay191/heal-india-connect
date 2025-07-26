import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      country: "United Kingdom",
      treatment: "Cardiac Surgery",
      image: "https://images.unsplash.com/photo-1494790108755-2616b6d8-c4ec?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "The cardiac surgery I received in Delhi was exceptional. The doctors were highly skilled, and the hospital facilities were world-class. I saved over $80,000 compared to the UK, and the care was even better.",
      hospital: "Apollo Hospital Delhi"
    },
    {
      name: "Michael Rodriguez",
      country: "United States", 
      treatment: "Hip Replacement",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "I was amazed by the quality of orthopedic care in Mumbai. The robotic hip replacement surgery was performed flawlessly, and the recovery was faster than expected. HealYourTrip made everything seamless.",
      hospital: "Fortis Hospital Mumbai"
    },
    {
      name: "Emma Thompson",
      country: "Australia",
      treatment: "IVF Treatment",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "After failed IVF attempts in Australia, we found success in Chennai. The fertility specialists were compassionate and experienced. We now have our beautiful twins and saved thousands of dollars.",
      hospital: "Apollo Fertility Chennai"
    },
    {
      name: "Ahmed Hassan",
      country: "UAE",
      treatment: "Cancer Treatment",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "The oncology team in Bangalore provided exceptional cancer care. The treatment protocols were advanced, and the medical team was incredibly supportive throughout my journey. Truly grateful.",
      hospital: "Medanta Bangalore"
    },
    {
      name: "Lisa Chen",
      country: "Canada",
      treatment: "Cosmetic Surgery",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "My plastic surgery experience in Delhi exceeded all expectations. The surgeon was highly skilled, and the results are natural and beautiful. The cost was a fraction of what I would pay in Canada.",
      hospital: "Max Hospital Delhi"
    },
    {
      name: "James Wilson",
      country: "New Zealand",
      treatment: "Spine Surgery",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "The minimally invasive spine surgery in Chennai changed my life. After years of back pain, I'm now pain-free and back to my active lifestyle. The expertise and care were outstanding.",
      hospital: "Apollo Hospital Chennai"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Patient Success Stories
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Hear from thousands of international patients who received life-changing 
            medical care in India through HealYourTrip.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-hover transition-all duration-300 bg-gradient-card border-0 relative overflow-hidden"
            >
              {/* Quote Icon */}
              <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote className="w-8 h-8 text-primary" />
              </div>

              <CardContent className="p-6 space-y-4">
                {/* Rating */}
                <div className="flex items-center space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-muted-foreground leading-relaxed italic">
                  "{testimonial.text}"
                </p>

                {/* Patient Info */}
                <div className="flex items-center space-x-4 pt-4 border-t border-border">
                  <Avatar className="w-12 h-12">
                    <AvatarImage src={testimonial.image} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <div className="font-semibold text-foreground text-sm">{testimonial.name}</div>
                    <div className="text-xs text-muted-foreground">{testimonial.country}</div>
                    <div className="text-xs text-primary font-medium">{testimonial.treatment}</div>
                  </div>
                </div>

                {/* Hospital */}
                <div className="text-xs text-muted-foreground bg-muted rounded-md px-3 py-2">
                  <span className="font-medium">Treated at:</span> {testimonial.hospital}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">98%</div>
              <div className="text-sm text-muted-foreground">Patient Satisfaction</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">15k+</div>
              <div className="text-sm text-muted-foreground">International Patients</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">4.9</div>
              <div className="text-sm text-muted-foreground">Average Rating</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">24/7</div>
              <div className="text-sm text-muted-foreground">Patient Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;