import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { 
  Wrench, 
  Car, 
  Battery, 
  Fuel, 
  AlertTriangle,
  Clock,
  CheckCircle2,
  ArrowRight,
  Truck
} from "lucide-react";

const services = [
  {
    id: "repair",
    icon: Wrench,
    title: "On-spot Repair",
    description: "Quick fixes for minor mechanical issues right where you are. Our technicians carry essential tools and spare parts.",
    features: ["Engine diagnostics", "Belt replacement", "Minor electrical fixes", "Fluid top-ups"],
    estimatedTime: "15-30 min",
    price: "Starting ₹500",
  },
  {
    id: "tyre",
    icon: Car,
    title: "Tyre Replacement",
    description: "Puncture repair or complete tyre replacement with high-quality spare tyres available in all sizes.",
    features: ["Puncture repair", "Tyre replacement", "Spare tyre mounting", "Tyre pressure check"],
    estimatedTime: "10-20 min",
    price: "Starting ₹300",
  },
  {
    id: "battery",
    icon: Battery,
    title: "Battery Jump-start",
    description: "Dead battery? We'll get you running with professional jump-start service or battery replacement.",
    features: ["Jump-start service", "Battery testing", "New battery installation", "Alternator check"],
    estimatedTime: "5-15 min",
    price: "Starting ₹200",
  },
  {
    id: "fuel",
    icon: Fuel,
    title: "Fuel Assistance",
    description: "Ran out of fuel? We deliver petrol, diesel, or provide assistance for fuel system issues.",
    features: ["Emergency fuel delivery", "Fuel system diagnosis", "Wrong fuel recovery", "Fuel filter check"],
    estimatedTime: "10-20 min",
    price: "Starting ₹400",
  },
  {
    id: "towing",
    icon: Truck,
    title: "Towing Service",
    description: "When on-spot repair isn't possible, our flatbed tow trucks will safely transport your vehicle.",
    features: ["Flatbed towing", "Long-distance transport", "Accident recovery", "Off-road recovery"],
    estimatedTime: "20-40 min",
    price: "Starting ₹1500",
  },
  {
    id: "emergency",
    icon: AlertTriangle,
    title: "Accident Assistance",
    description: "Complete support during accidents including documentation, police coordination, and insurance help.",
    features: ["On-site assistance", "Documentation support", "Insurance coordination", "Vehicle recovery"],
    estimatedTime: "Immediate",
    price: "Free Coordination",
  },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-background pt-20 md:pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Our Services
          </h1>
          <p className="text-lg text-muted-foreground">
            Comprehensive roadside assistance for every highway emergency. 
            Professional service, transparent pricing.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service) => (
            <Card key={service.id} variant="service" className="flex flex-col">
              <CardHeader>
                <div className="w-14 h-14 rounded-xl primary-gradient flex items-center justify-center mb-4 shadow-md">
                  <service.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <ul className="space-y-2 mb-6 flex-1">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-success flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="space-y-3 pt-4 border-t border-border">
                  <div className="flex items-center justify-between text-sm">
                    <span className="flex items-center gap-1 text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      Est. Time
                    </span>
                    <span className="font-semibold text-success">{service.estimatedTime}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Price</span>
                    <span className="font-semibold text-foreground">{service.price}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center bg-muted/50 rounded-2xl p-8 md:p-12">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
            Need Immediate Assistance?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Don't wait. Request help now and the nearest Mobile Garage unit will be dispatched to your location.
          </p>
          <Link to="/request-help">
            <Button variant="hero" size="lg">
              Request Service Now
              <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;
