import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  MapPin, 
  Wrench,
  CheckCircle2,
  Clock,
  User,
  Phone
} from "lucide-react";

type Unit = {
  id: string;
  name: string;
  location: string;
  distance: string;
  status: "available" | "on-duty" | "maintenance";
  specialties: string[];
  operator: string;
  eta: string;
};

const units: Unit[] = [
  {
    id: "MG-001",
    name: "Unit Alpha-1",
    location: "NH-48, Km 120, Near Manesar Toll",
    distance: "2.3 km",
    status: "available",
    specialties: ["Tyre Service", "Battery", "Minor Repairs"],
    operator: "Rajesh Kumar",
    eta: "8 min",
  },
  {
    id: "MG-002",
    name: "Unit Beta-3",
    location: "NH-48, Km 135, Near Panchgaon",
    distance: "4.1 km",
    status: "available",
    specialties: ["Engine Repair", "Towing", "Fuel Service"],
    operator: "Vikram Singh",
    eta: "12 min",
  },
  {
    id: "MG-003",
    name: "Unit Gamma-2",
    location: "NH-48, Km 110, Near Bilaspur Chowk",
    distance: "5.8 km",
    status: "on-duty",
    specialties: ["Full Service", "Accident Recovery"],
    operator: "Anil Sharma",
    eta: "Currently busy",
  },
  {
    id: "MG-004",
    name: "Unit Delta-5",
    location: "NH-48, Km 145, Near IMT Manesar",
    distance: "7.2 km",
    status: "available",
    specialties: ["Commercial Vehicles", "Heavy Towing"],
    operator: "Suresh Yadav",
    eta: "18 min",
  },
  {
    id: "MG-005",
    name: "Unit Echo-1",
    location: "NH-48, Km 100, Near HUDA City Centre",
    distance: "8.5 km",
    status: "maintenance",
    specialties: ["All Services"],
    operator: "Under Maintenance",
    eta: "Unavailable",
  },
  {
    id: "MG-006",
    name: "Unit Foxtrot-4",
    location: "NH-48, Km 155, Near Dharuhera",
    distance: "12.3 km",
    status: "available",
    specialties: ["24/7 Service", "Long Distance Towing"],
    operator: "Mohit Tanwar",
    eta: "25 min",
  },
];

const LiveUnits = () => {
  const [filter, setFilter] = useState<"all" | "available" | "on-duty">("all");

  const filteredUnits = units.filter((unit) => {
    if (filter === "all") return true;
    return unit.status === filter;
  });

  const availableCount = units.filter((u) => u.status === "available").length;
  const onDutyCount = units.filter((u) => u.status === "on-duty").length;

  const getStatusStyles = (status: Unit["status"]) => {
    switch (status) {
      case "available":
        return "bg-success/10 text-success border-success/20";
      case "on-duty":
        return "bg-warning/10 text-warning border-warning/20";
      case "maintenance":
        return "bg-muted text-muted-foreground border-border";
    }
  };

  const getStatusLabel = (status: Unit["status"]) => {
    switch (status) {
      case "available":
        return "Available";
      case "on-duty":
        return "On Duty";
      case "maintenance":
        return "Maintenance";
    }
  };

  return (
    <div className="min-h-screen bg-background pt-20 md:pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Live Mobile Units
          </h1>
          <p className="text-muted-foreground text-lg mb-6">
            Real-time status of Mobile Garage units near your area
          </p>

          {/* Stats */}
          <div className="flex flex-wrap gap-4 mb-6">
            <div className="flex items-center gap-2 px-4 py-2 bg-success/10 rounded-lg">
              <div className="w-3 h-3 rounded-full bg-success unit-available" />
              <span className="font-semibold text-success">{availableCount} Available</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-warning/10 rounded-lg">
              <div className="w-3 h-3 rounded-full bg-warning" />
              <span className="font-semibold text-warning">{onDutyCount} On Duty</span>
            </div>
          </div>

          {/* Filters */}
          <div className="flex gap-2">
            {(["all", "available", "on-duty"] as const).map((f) => (
              <Button
                key={f}
                variant={filter === f ? "default" : "outline"}
                size="sm"
                onClick={() => setFilter(f)}
              >
                {f === "all" ? "All Units" : f === "available" ? "Available" : "On Duty"}
              </Button>
            ))}
          </div>
        </div>

        {/* Simulated Map View */}
        <Card variant="elevated" className="mb-8 overflow-hidden">
          <div className="h-48 md:h-64 bg-gradient-to-br from-secondary/5 to-primary/5 flex items-center justify-center relative">
            <div className="absolute inset-0 opacity-30">
              <div className="absolute top-1/4 left-1/4 w-4 h-4 rounded-full bg-success unit-available" />
              <div className="absolute top-1/3 right-1/3 w-4 h-4 rounded-full bg-success unit-available" />
              <div className="absolute bottom-1/4 left-1/3 w-4 h-4 rounded-full bg-warning" />
              <div className="absolute top-1/2 right-1/4 w-4 h-4 rounded-full bg-success unit-available" />
              <div className="absolute bottom-1/3 right-1/2 w-4 h-4 rounded-full bg-muted-foreground" />
              {/* Simulated road */}
              <div className="absolute top-1/2 left-0 right-0 h-2 bg-secondary/50 transform -translate-y-1/2" />
            </div>
            <div className="text-center z-10">
              <MapPin className="w-12 h-12 text-primary mx-auto mb-2" />
              <p className="font-semibold text-foreground">Highway NH-48 Coverage Map</p>
              <p className="text-sm text-muted-foreground">Simulated view of unit locations</p>
            </div>
          </div>
        </Card>

        {/* Units List */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredUnits.map((unit) => (
            <Card key={unit.id} variant="unit" className="fade-in">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground font-mono">{unit.id}</p>
                    <CardTitle className="text-lg">{unit.name}</CardTitle>
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold border ${getStatusStyles(
                      unit.status
                    )}`}
                  >
                    {unit.status === "available" && (
                      <span className="inline-block w-2 h-2 rounded-full bg-success mr-1.5 unit-available" />
                    )}
                    {getStatusLabel(unit.status)}
                  </span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-2 text-sm">
                  <MapPin className="w-4 h-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-foreground">{unit.location}</p>
                    <p className="text-primary font-semibold">{unit.distance} away</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-sm">
                  <User className="w-4 h-4 text-muted-foreground" />
                  <span className="text-foreground">{unit.operator}</span>
                </div>

                <div className="flex items-center gap-2 text-sm">
                  <Clock className="w-4 h-4 text-muted-foreground" />
                  <span className={unit.status === "available" ? "text-success font-semibold" : "text-muted-foreground"}>
                    ETA: {unit.eta}
                  </span>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {unit.specialties.map((specialty) => (
                    <span
                      key={specialty}
                      className="px-2 py-0.5 bg-muted text-muted-foreground text-xs rounded-md"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>

                {unit.status === "available" && (
                  <Button variant="hero" size="sm" className="w-full mt-2">
                    <Phone className="w-4 h-4" />
                    Request This Unit
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredUnits.length === 0 && (
          <div className="text-center py-12">
            <Wrench className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
            <p className="text-muted-foreground">No units found with the selected filter.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default LiveUnits;
