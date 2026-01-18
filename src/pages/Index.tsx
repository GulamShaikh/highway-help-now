import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  ArrowRight, 
  Clock, 
  MapPin, 
  Shield, 
  Wrench, 
  Zap,
  Phone,
  ChevronRight,
  Car,
  Battery,
  Fuel,
  AlertTriangle
} from "lucide-react";
import heroVan from "@/assets/hero-van.jpg";

const Index = () => {
  const features = [
    {
      icon: Clock,
      title: "Faster Response",
      description: "Average arrival time under 15 minutes from nearby highway stations.",
    },
    {
      icon: MapPin,
      title: "Nearest Unit Dispatched",
      description: "Smart routing ensures the closest available unit reaches you first.",
    },
    {
      icon: Shield,
      title: "Safer Highways",
      description: "Trained professionals equipped for any roadside emergency.",
    },
  ];

  const services = [
    { icon: Wrench, name: "On-spot Repair", time: "~20 min" },
    { icon: Car, name: "Tyre Replacement", time: "~15 min" },
    { icon: Battery, name: "Battery Jump-start", time: "~10 min" },
    { icon: Fuel, name: "Fuel Assistance", time: "~15 min" },
    { icon: AlertTriangle, name: "Towing Service", time: "~25 min" },
  ];

  const stats = [
    { value: "15K+", label: "Rescues Completed" },
    { value: "< 15min", label: "Avg. Response Time" },
    { value: "98%", label: "Customer Satisfaction" },
    { value: "500+", label: "Highway Coverage (km)" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center hero-gradient overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroVan} 
            alt="Mobile Garage Service Van"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/95 to-secondary/80" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10 pt-20 pb-12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-primary/20 text-primary px-4 py-2 rounded-full mb-6 slide-up">
              <Zap className="w-4 h-4" />
              <span className="text-sm font-medium">Highway Emergency? Help is minutes away</span>
            </div>
            
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-secondary-foreground mb-6 slide-up">
              🚘 Mobile Garage — <br />
              <span className="text-gradient">Help Comes to You</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-secondary-foreground/80 mb-8 leading-relaxed slide-up">
              Instant roadside repair and towing support on highways. 
              Our mobile units are stationed nearby, ready to respond in minutes.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 slide-up">
              <Link to="/request-help">
                <Button variant="hero" size="xl" className="w-full sm:w-auto">
                  <Phone className="w-5 h-5" />
                  Request Help Now
                </Button>
              </Link>
              <Link to="/services">
                <Button variant="outline" size="xl" className="w-full sm:w-auto border-secondary-foreground/30 text-secondary-foreground hover:bg-secondary-foreground hover:text-secondary">
                  View Services
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-secondary-foreground/30 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-primary rounded-full" />
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-primary py-6 md:py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-display text-2xl md:text-3xl font-bold text-primary-foreground">
                  {stat.value}
                </div>
                <div className="text-primary-foreground/80 text-sm mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose Mobile Garage?
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Traditional roadside assistance makes you wait. We bring the garage to you.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {features.map((feature) => (
              <Card key={feature.title} variant="service" className="p-8">
                <div className="w-14 h-14 rounded-xl primary-gradient flex items-center justify-center mb-6 shadow-md">
                  <feature.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-12">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
                Our Services
              </h2>
              <p className="text-muted-foreground text-lg">
                Comprehensive roadside assistance for any situation
              </p>
            </div>
            <Link to="/services">
              <Button variant="outline" className="group">
                View All Services
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {services.map((service) => (
              <Card key={service.name} variant="service" className="p-6 text-center">
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">
                  <service.icon className="w-6 h-6" />
                </div>
                <h4 className="font-semibold text-foreground mb-1 text-sm md:text-base">
                  {service.name}
                </h4>
                <span className="text-xs text-success font-medium">
                  {service.time}
                </span>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-primary rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-primary rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-secondary-foreground mb-6">
              Stranded on the Highway?
            </h2>
            <p className="text-xl text-secondary-foreground/80 mb-8">
              Don't wait for hours. Get instant help from the nearest Mobile Garage unit.
            </p>
            <Link to="/request-help">
              <Button variant="hero" size="xl" className="shadow-2xl">
                <Phone className="w-5 h-5" />
                Request Help Now
              </Button>
            </Link>
            <p className="mt-6 text-secondary-foreground/60 text-sm">
              Or call our emergency hotline: <span className="text-primary font-semibold">1800-GARAGE</span>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
