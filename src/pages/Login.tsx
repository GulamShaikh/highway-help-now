import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  Phone, 
  User,
  Car,
  ArrowRight,
  Wrench
} from "lucide-react";

const Login = () => {
  const navigate = useNavigate();
  const [isSignup, setIsSignup] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    vehicleType: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulated login/signup
    navigate("/request-help");
  };

  const handleGuestContinue = () => {
    navigate("/request-help");
  };

  return (
    <div className="min-h-screen bg-background pt-20 md:pt-24 pb-16 flex items-center">
      <div className="container mx-auto px-4 max-w-md">
        <div className="text-center mb-8">
          <div className="w-16 h-16 rounded-xl primary-gradient flex items-center justify-center mx-auto mb-4 shadow-lg">
            <Wrench className="w-8 h-8 text-primary-foreground" />
          </div>
          <h1 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2">
            {isSignup ? "Create Account" : "Welcome Back"}
          </h1>
          <p className="text-muted-foreground">
            {isSignup 
              ? "Sign up for faster assistance" 
              : "Log in to manage your requests"
            }
          </p>
        </div>

        <Card variant="elevated">
          <CardHeader>
            <CardTitle>{isSignup ? "Sign Up" : "Login"}</CardTitle>
            <CardDescription>
              {isSignup 
                ? "Create an account for a better experience" 
                : "Enter your phone number to continue"
              }
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              {isSignup && (
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                      id="name"
                      placeholder="Enter your name"
                      className="pl-10"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                </div>
              )}

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="Enter your phone number"
                    className="pl-10"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                  />
                </div>
              </div>

              {isSignup && (
                <div className="space-y-2">
                  <Label htmlFor="vehicle">Vehicle Type (Optional)</Label>
                  <div className="relative">
                    <Car className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                      id="vehicle"
                      placeholder="e.g., Sedan, SUV"
                      className="pl-10"
                      value={formData.vehicleType}
                      onChange={(e) => setFormData({ ...formData, vehicleType: e.target.value })}
                    />
                  </div>
                </div>
              )}

              <Button variant="hero" size="lg" type="submit" className="w-full">
                {isSignup ? "Create Account" : "Continue"}
                <ArrowRight className="w-4 h-4" />
              </Button>
            </form>

            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-border" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-card px-2 text-muted-foreground">Or</span>
              </div>
            </div>

            <Button
              variant="outline"
              size="lg"
              className="w-full"
              onClick={handleGuestContinue}
            >
              Continue as Guest
            </Button>

            <p className="text-center text-sm text-muted-foreground mt-6">
              {isSignup ? (
                <>
                  Already have an account?{" "}
                  <button
                    onClick={() => setIsSignup(false)}
                    className="text-primary font-semibold hover:underline"
                  >
                    Login
                  </button>
                </>
              ) : (
                <>
                  Don't have an account?{" "}
                  <button
                    onClick={() => setIsSignup(true)}
                    className="text-primary font-semibold hover:underline"
                  >
                    Sign Up
                  </button>
                </>
              )}
            </p>
          </CardContent>
        </Card>

        <p className="text-center text-xs text-muted-foreground mt-6">
          Emergency? Skip login and{" "}
          <Link to="/request-help" className="text-primary font-semibold hover:underline">
            request help now
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
