import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Star, Award, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useHospitals } from "@/hooks/useSupabaseData";

const FeaturedHospitals = () => {
  const navigate = useNavigate();
  const { hospitals, loading, error } = useHospitals();

  if (loading) {
    return (
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Top Partner Hospitals
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Loading hospitals...
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Top Partner Hospitals
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Trusted by international patients, our partner hospitals are JCI and NABH accredited 
            with world-class infrastructure and expert medical teams.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {hospitals.map((hospital, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-hover transition-all duration-300 overflow-hidden bg-gradient-card border-0"
            >
              {/* Hospital Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={hospital.image_url || "https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=400&h=300&fit=crop"} 
                  alt={hospital.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <div className="flex gap-2">
                    {hospital.accreditations?.map((acc, i) => (
                      <Badge key={i} variant="secondary" className="bg-white/90 text-primary">
                        {acc}
                      </Badge>
                    )) || []}
                  </div>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="bg-white/90 px-2 py-1 rounded flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span className="text-sm font-medium">{hospital.rating}</span>
                  </div>
                </div>
              </div>

              <CardHeader className="pb-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-foreground">{hospital.name}</h3>
                  <div className="flex items-center text-muted-foreground">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span className="text-sm">{hospital.location}</span>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {hospital.description || "Leading healthcare facility with advanced medical services."}
                </p>

                {/* Specializations */}
                <div>
                  <span className="text-sm font-medium text-foreground mb-2 block">Specializations:</span>
                  <div className="flex flex-wrap gap-2">
                    {hospital.specializations?.map((spec, i) => (
                      <Badge key={i} variant="outline" className="text-xs">
                        {spec}
                      </Badge>
                    )) || []}
                  </div>
                </div>

                {/* Stats */}
                <div className="flex justify-between items-center pt-4 border-t border-border">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Award className="w-4 h-4 text-primary" />
                      <span className="text-sm text-muted-foreground">Accredited</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="w-4 h-4 text-primary" />
                      <span className="text-sm text-muted-foreground">{hospital.total_reviews?.toLocaleString() || '0'} reviews</span>
                    </div>
                  </div>
                  <Button 
                    size="sm" 
                    className="bg-gradient-hero hover:opacity-90"
                    onClick={() => navigate('/hospitals')}
                  >
                    View Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            size="lg" 
            variant="outline" 
            className="px-8"
            onClick={() => navigate('/hospitals')}
          >
            View All Hospitals
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedHospitals;