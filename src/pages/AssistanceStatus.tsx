import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  MapPin, 
  Clock, 
  Phone, 
  User,
  Truck,
  Wrench,
  CheckCircle2,
  ArrowRight,
  MessageCircle
} from "lucide-react";

type Status = "dispatched" | "arriving" | "in-progress" | "completed";

const statusSteps: { key: Status; label: string; description: string }[] = [
  { key: "dispatched", label: "Unit Dispatched", description: "Mobile unit is on its way" },
  { key: "arriving", label: "Unit Arriving", description: "Technician will arrive shortly" },
  { key: "in-progress", label: "Service in Progress", description: "Repair work is underway" },
  { key: "completed", label: "Service Completed", description: "Your vehicle is ready" },
];

const AssistanceStatus = () => {
  const location = useLocation();
  const requestData = location.state as {
    requestId: string;
    issueType: string;
    location: string;
    vehicleType: string;
  } | null;

  const [currentStatus, setCurrentStatus] = useState<Status>("dispatched");
  const [eta, setEta] = useState(12);

  // Simulate status progression
  useEffect(() => {
    const timer1 = setTimeout(() => {
      setCurrentStatus("arriving");
      setEta(3);
    }, 8000);

    const timer2 = setTimeout(() => {
      setCurrentStatus("in-progress");
      setEta(0);
    }, 15000);

    const timer3 = setTimeout(() => {
      setCurrentStatus("completed");
    }, 25000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  // Countdown timer
  useEffect(() => {
    if (eta > 0 && currentStatus !== "in-progress" && currentStatus !== "completed") {
      const interval = setInterval(() => {
        setEta((prev) => Math.max(0, prev - 1));
      }, 60000);
      return () => clearInterval(interval);
    }
  }, [eta, currentStatus]);

  const currentStepIndex = statusSteps.findIndex((s) => s.key === currentStatus);

  const assignedUnit = {
    id: "MG-001",
    name: "Unit Alpha-1",
    operator: "Rajesh Kumar",
    phone: "+91 98765 43210",
    experience: "5 years",
  };

  if (!requestData) {
    return (
      <div className="min-h-screen bg-background pt-20 md:pt-24 pb-16">
        <div className="container mx-auto px-4 text-center">
          <Card variant="elevated" className="max-w-md mx-auto p-8">
            <Truck className="w-16 h-16 text-primary mx-auto mb-4" />
            <h2 className="font-display text-2xl font-bold mb-4">No Active Request</h2>
            <p className="text-muted-foreground mb-6">
              You don't have an active assistance request.
            </p>
            <Link to="/request-help">
              <Button variant="hero" size="lg">
                Request Help Now
              </Button>
            </Link>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pt-20 md:pt-24 pb-16">
      <div className="container mx-auto px-4 max-w-3xl">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-success/10 text-success px-4 py-2 rounded-full mb-4">
            <CheckCircle2 className="w-4 h-4" />
            <span className="text-sm font-medium">Help is on the way!</span>
          </div>
          <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
            Assistance Status
          </h1>
          <p className="text-muted-foreground">
            Request ID: <span className="font-mono text-foreground">{requestData.requestId}</span>
          </p>
        </div>

        {/* ETA Card */}
        {currentStatus !== "completed" && (
          <Card variant="status" className="mb-6 bg-primary/5">
            <CardContent className="p-6 text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Clock className="w-6 h-6 text-primary" />
                <span className="text-lg font-semibold text-foreground">
                  {currentStatus === "in-progress" 
                    ? "Service in Progress" 
                    : `Estimated Arrival: ${eta} min`
                  }
                </span>
              </div>
              {currentStatus !== "in-progress" && (
                <p className="text-muted-foreground text-sm">
                  Our technician is heading to your location
                </p>
              )}
            </CardContent>
          </Card>
        )}

        {/* Status Progress */}
        <Card variant="elevated" className="mb-6">
          <CardHeader>
            <CardTitle>Service Progress</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {statusSteps.map((step, index) => {
                const isCompleted = index < currentStepIndex;
                const isCurrent = index === currentStepIndex;
                const isPending = index > currentStepIndex;

                return (
                  <div key={step.key} className="flex items-start gap-4">
                    <div className="flex flex-col items-center">
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center ${
                          isCompleted
                            ? "bg-success text-success-foreground"
                            : isCurrent
                            ? "bg-primary text-primary-foreground emergency-pulse"
                            : "bg-muted text-muted-foreground"
                        }`}
                      >
                        {isCompleted ? (
                          <CheckCircle2 className="w-5 h-5" />
                        ) : (
                          <span className="font-semibold">{index + 1}</span>
                        )}
                      </div>
                      {index < statusSteps.length - 1 && (
                        <div
                          className={`w-0.5 h-12 ${
                            isCompleted ? "bg-success" : "bg-muted"
                          }`}
                        />
                      )}
                    </div>
                    <div className={`pt-2 ${isPending ? "opacity-50" : ""}`}>
                      <p className="font-semibold text-foreground">{step.label}</p>
                      <p className="text-sm text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* Request Details */}
        <Card variant="elevated" className="mb-6">
          <CardHeader>
            <CardTitle>Request Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-primary mt-0.5" />
              <div>
                <p className="text-sm text-muted-foreground">Location</p>
                <p className="font-medium text-foreground">{requestData.location}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Wrench className="w-5 h-5 text-primary mt-0.5" />
              <div>
                <p className="text-sm text-muted-foreground">Issue Type</p>
                <p className="font-medium text-foreground">{requestData.issueType}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Truck className="w-5 h-5 text-primary mt-0.5" />
              <div>
                <p className="text-sm text-muted-foreground">Vehicle</p>
                <p className="font-medium text-foreground">{requestData.vehicleType}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Assigned Unit */}
        <Card variant="unit" className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-success unit-available" />
              Assigned Unit
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                <User className="w-7 h-7 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-foreground">{assignedUnit.operator}</p>
                <p className="text-sm text-muted-foreground">
                  {assignedUnit.name} • {assignedUnit.experience} experience
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <Button variant="hero" className="flex-1">
                <Phone className="w-4 h-4" />
                Call Technician
              </Button>
              <Button variant="outline" className="flex-1">
                <MessageCircle className="w-4 h-4" />
                Message
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Completed Actions */}
        {currentStatus === "completed" && (
          <Card variant="status" className="bg-success/10 border-success/20">
            <CardContent className="p-6 text-center">
              <CheckCircle2 className="w-16 h-16 text-success mx-auto mb-4" />
              <h3 className="font-display text-2xl font-bold text-foreground mb-2">
                Service Completed!
              </h3>
              <p className="text-muted-foreground mb-6">
                Your vehicle is ready. Thank you for choosing Mobile Garage.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link to="/payment">
                  <Button variant="hero" size="lg">
                    Proceed to Payment
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Support Contact */}
        <div className="mt-8 text-center">
          <p className="text-muted-foreground text-sm mb-2">Need help?</p>
          <Button variant="ghost" className="text-primary">
            <Phone className="w-4 h-4 mr-2" />
            Contact Support: 1800-GARAGE
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AssistanceStatus;
