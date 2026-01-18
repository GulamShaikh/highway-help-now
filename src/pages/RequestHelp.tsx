import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  MapPin, 
  Car, 
  Wrench, 
  Battery, 
  Fuel, 
  AlertTriangle,
  CheckCircle2,
  Loader2,
  Navigation
} from "lucide-react";

type IssueType = {
  id: string;
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  description: string;
};

const issueTypes: IssueType[] = [
  { id: "flat-tyre", icon: Car, label: "Flat Tyre", description: "Puncture or flat tyre replacement" },
  { id: "engine", icon: Wrench, label: "Engine Trouble", description: "Engine not starting or issues" },
  { id: "battery", icon: Battery, label: "Battery Issue", description: "Dead battery or jump-start needed" },
  { id: "fuel", icon: Fuel, label: "Fuel Problem", description: "Out of fuel or fuel system issue" },
  { id: "towing", icon: AlertTriangle, label: "Accident / Towing", description: "Need towing or major assistance" },
];

const vehicleTypes = [
  "Two Wheeler",
  "Hatchback",
  "Sedan",
  "SUV",
  "Truck / Commercial",
];

const RequestHelp = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    location: "",
    issueType: "",
    vehicleType: "",
    registrationNumber: "",
    additionalNotes: "",
  });

  const handleDetectLocation = () => {
    setLoading(true);
    // Simulated location detection
    setTimeout(() => {
      setFormData({ ...formData, location: "NH-48, Km 125, Near Toll Plaza, Gurugram" });
      setLoading(false);
    }, 1500);
  };

  const handleSubmit = () => {
    setLoading(true);
    // Simulate submission
    setTimeout(() => {
      navigate("/assistance-status", { 
        state: { 
          requestId: "MG-" + Math.random().toString(36).substr(2, 9).toUpperCase(),
          issueType: issueTypes.find(i => i.id === formData.issueType)?.label,
          location: formData.location,
          vehicleType: formData.vehicleType,
        } 
      });
    }, 2000);
  };

  const isStepValid = () => {
    if (step === 1) return formData.location.length > 0;
    if (step === 2) return formData.issueType.length > 0;
    if (step === 3) return formData.vehicleType.length > 0;
    return true;
  };

  return (
    <div className="min-h-screen bg-background pt-20 md:pt-24 pb-12">
      <div className="container mx-auto px-4 max-w-2xl">
        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            {[1, 2, 3].map((s) => (
              <div key={s} className="flex items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-all ${
                    step >= s
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  {step > s ? <CheckCircle2 className="w-5 h-5" /> : s}
                </div>
                {s < 3 && (
                  <div
                    className={`hidden sm:block w-24 md:w-32 h-1 mx-2 rounded ${
                      step > s ? "bg-primary" : "bg-muted"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-between text-sm">
            <span className={step >= 1 ? "text-foreground font-medium" : "text-muted-foreground"}>
              Location
            </span>
            <span className={step >= 2 ? "text-foreground font-medium" : "text-muted-foreground"}>
              Issue Type
            </span>
            <span className={step >= 3 ? "text-foreground font-medium" : "text-muted-foreground"}>
              Vehicle
            </span>
          </div>
        </div>

        <Card variant="elevated" className="slide-up">
          <CardHeader>
            <CardTitle className="text-2xl">
              {step === 1 && "Where are you?"}
              {step === 2 && "What's the issue?"}
              {step === 3 && "Vehicle Details"}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Step 1: Location */}
            {step === 1 && (
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="location">Current Location</Label>
                  <div className="flex gap-2">
                    <Input
                      id="location"
                      placeholder="Enter your location or use GPS"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      className="flex-1"
                    />
                    <Button
                      variant="outline"
                      onClick={handleDetectLocation}
                      disabled={loading}
                    >
                      {loading ? (
                        <Loader2 className="w-4 h-4 animate-spin" />
                      ) : (
                        <Navigation className="w-4 h-4" />
                      )}
                    </Button>
                  </div>
                </div>

                {formData.location && (
                  <div className="p-4 bg-success/10 border border-success/20 rounded-lg flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-success mt-0.5" />
                    <div>
                      <p className="font-medium text-foreground">Location Detected</p>
                      <p className="text-sm text-muted-foreground">{formData.location}</p>
                    </div>
                  </div>
                )}

                <div className="bg-muted/50 p-4 rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    <strong>Tip:</strong> For faster assistance, use GPS detection or include highway name and kilometer marker.
                  </p>
                </div>
              </div>
            )}

            {/* Step 2: Issue Type */}
            {step === 2 && (
              <div className="grid gap-3">
                {issueTypes.map((issue) => (
                  <button
                    key={issue.id}
                    onClick={() => setFormData({ ...formData, issueType: issue.id })}
                    className={`flex items-center gap-4 p-4 rounded-xl border-2 transition-all text-left ${
                      formData.issueType === issue.id
                        ? "border-primary bg-primary/5"
                        : "border-border hover:border-primary/50"
                    }`}
                  >
                    <div
                      className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                        formData.issueType === issue.id
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted text-muted-foreground"
                      }`}
                    >
                      <issue.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{issue.label}</p>
                      <p className="text-sm text-muted-foreground">{issue.description}</p>
                    </div>
                    {formData.issueType === issue.id && (
                      <CheckCircle2 className="w-6 h-6 text-primary ml-auto" />
                    )}
                  </button>
                ))}
              </div>
            )}

            {/* Step 3: Vehicle Details */}
            {step === 3 && (
              <div className="space-y-6">
                <div className="space-y-3">
                  <Label>Vehicle Type</Label>
                  <div className="grid grid-cols-2 gap-2">
                    {vehicleTypes.map((type) => (
                      <button
                        key={type}
                        onClick={() => setFormData({ ...formData, vehicleType: type })}
                        className={`p-3 rounded-lg border-2 font-medium transition-all ${
                          formData.vehicleType === type
                            ? "border-primary bg-primary/5 text-primary"
                            : "border-border hover:border-primary/50"
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="registration">Registration Number (Optional)</Label>
                  <Input
                    id="registration"
                    placeholder="e.g., DL 01 AB 1234"
                    value={formData.registrationNumber}
                    onChange={(e) => setFormData({ ...formData, registrationNumber: e.target.value })}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="notes">Additional Notes (Optional)</Label>
                  <Input
                    id="notes"
                    placeholder="Any specific details about the issue"
                    value={formData.additionalNotes}
                    onChange={(e) => setFormData({ ...formData, additionalNotes: e.target.value })}
                  />
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex gap-3 pt-4">
              {step > 1 && (
                <Button
                  variant="outline"
                  onClick={() => setStep(step - 1)}
                  className="flex-1"
                >
                  Back
                </Button>
              )}
              {step < 3 ? (
                <Button
                  variant="hero"
                  onClick={() => setStep(step + 1)}
                  disabled={!isStepValid()}
                  className="flex-1"
                >
                  Continue
                </Button>
              ) : (
                <Button
                  variant="hero"
                  onClick={handleSubmit}
                  disabled={!isStepValid() || loading}
                  className="flex-1"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Requesting...
                    </>
                  ) : (
                    "Request Assistance"
                  )}
                </Button>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Emergency Notice */}
        <div className="mt-6 p-4 bg-destructive/10 border border-destructive/20 rounded-xl text-center">
          <p className="text-destructive font-semibold">Life-threatening emergency?</p>
          <p className="text-sm text-muted-foreground mt-1">
            Call <span className="font-semibold text-foreground">112</span> for immediate emergency services
          </p>
        </div>
      </div>
    </div>
  );
};

export default RequestHelp;
