import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Target, 
  Users, 
  MapPin, 
  Shield, 
  Clock, 
  Award,
  ArrowRight,
  Truck,
  Wrench,
  Zap
} from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Clock,
      title: "Speed",
      description: "Every minute counts in an emergency. Our strategically placed units ensure rapid response.",
    },
    {
      icon: Shield,
      title: "Safety",
      description: "Trained professionals with proper safety protocols for highway emergencies.",
    },
    {
      icon: Award,
      title: "Quality",
      description: "Professional-grade repairs using quality parts and industry-standard procedures.",
    },
    {
      icon: Users,
      title: "Trust",
      description: "Transparent pricing, verified technicians, and real-time tracking for peace of mind.",
    },
  ];

  const stats = [
    { value: "2023", label: "Founded" },
    { value: "50+", label: "Highway Stations" },
    { value: "200+", label: "Trained Technicians" },
    { value: "15K+", label: "Successful Rescues" },
  ];

  const businessModel = [
    {
      icon: Wrench,
      title: "Pay Per Service",
      description: "Transparent pricing for each service rendered. No hidden fees.",
    },
    {
      icon: Zap,
      title: "Subscription Plans",
      description: "Unlimited roadside assistance for frequent highway travelers.",
    },
    {
      icon: MapPin,
      title: "Government Partnerships",
      description: "Collaborations with highway authorities for safer roads.",
    },
    {
      icon: Truck,
      title: "Fleet Contracts",
      description: "Special packages for logistics and commercial fleet operators.",
    },
  ];

  return (
    <div className="min-h-screen bg-background pt-20 md:pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Hero */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Making Highways <span className="text-gradient">Safer</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Mobile Garage is designed to make highways safer by placing mobile repair units 
            at regular intervals. Our mission is to reduce wait times, improve response speed, 
            and ensure safety for every traveler.
          </p>
        </div>

        {/* The Problem */}
        <div className="mb-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                The Problem We Solve
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  On highways, vehicle breakdowns are common. Traditional roadside assistance 
                  often means waiting for hours as help comes from distant locations.
                </p>
                <p>
                  This delay increases risk, causes anxiety, and leaves travelers stranded 
                  in potentially dangerous situations.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-destructive" />
                    Long wait times (1-2 hours average)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-destructive" />
                    Help comes from far locations
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-destructive" />
                    Safety risks for stranded vehicles
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-destructive" />
                    Unreliable service quality
                  </li>
                </ul>
              </div>
            </div>
            <Card variant="elevated" className="p-8 bg-primary/5">
              <div className="text-center">
                <div className="w-16 h-16 rounded-2xl primary-gradient flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-2">
                  Our Solution
                </h3>
                <p className="text-muted-foreground">
                  Mobile garage units stationed at regular highway intervals, each equipped 
                  with tools, spare parts, and towing support. When a breakdown occurs, 
                  the <span className="text-primary font-semibold">nearest unit responds immediately</span>.
                </p>
              </div>
            </Card>
          </div>
        </div>

        {/* Stats */}
        <div className="bg-secondary rounded-2xl p-8 md:p-12 mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-display text-3xl md:text-4xl font-bold text-primary mb-1">
                  {stat.value}
                </div>
                <div className="text-secondary-foreground/70 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Values */}
        <div className="mb-16">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground text-center mb-8">
            Our Core Values
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <Card key={value.title} variant="service" className="p-6 text-center">
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Business Model */}
        <div className="mb-16">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground text-center mb-8">
            How We Operate
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {businessModel.map((model) => (
              <Card key={model.title} variant="elevated" className="p-6">
                <div className="w-12 h-12 rounded-xl primary-gradient flex items-center justify-center mb-4">
                  <model.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{model.title}</h3>
                <p className="text-sm text-muted-foreground">{model.description}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-muted/50 rounded-2xl p-8 md:p-12">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
            Ready to Experience Safer Highways?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Join thousands of travelers who trust Mobile Garage for their highway emergencies.
          </p>
          <Link to="/request-help">
            <Button variant="hero" size="lg">
              Get Started
              <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
