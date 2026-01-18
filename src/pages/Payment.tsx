import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  CreditCard, 
  Banknote, 
  CheckCircle2, 
  ArrowRight,
  Shield,
  Loader2
} from "lucide-react";

const Payment = () => {
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState<"cash" | "online">("online");
  const [loading, setLoading] = useState(false);
  const [completed, setCompleted] = useState(false);

  const serviceDetails = {
    service: "Battery Jump-start",
    basePrice: 200,
    partsCost: 0,
    laborCharge: 150,
    convenienceFee: 50,
    total: 400,
  };

  const handlePayment = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setCompleted(true);
    }, 2000);
  };

  if (completed) {
    return (
      <div className="min-h-screen bg-background pt-20 md:pt-24 pb-16 flex items-center">
        <div className="container mx-auto px-4 max-w-md">
          <Card variant="elevated" className="text-center p-8">
            <div className="w-20 h-20 rounded-full bg-success/10 flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-10 h-10 text-success" />
            </div>
            <h2 className="font-display text-2xl font-bold text-foreground mb-2">
              Payment Successful!
            </h2>
            <p className="text-muted-foreground mb-6">
              Thank you for choosing Mobile Garage. Have a safe journey!
            </p>
            <div className="bg-muted/50 rounded-lg p-4 mb-6">
              <p className="text-sm text-muted-foreground">Transaction ID</p>
              <p className="font-mono font-semibold text-foreground">
                TXN-{Math.random().toString(36).substr(2, 9).toUpperCase()}
              </p>
            </div>
            <Button variant="hero" size="lg" onClick={() => navigate("/")}>
              Back to Home
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pt-20 md:pt-24 pb-16">
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="text-center mb-8">
          <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
            Complete Payment
          </h1>
          <p className="text-muted-foreground">
            Choose your preferred payment method
          </p>
        </div>

        {/* Service Summary */}
        <Card variant="elevated" className="mb-6">
          <CardHeader>
            <CardTitle>Service Summary</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Service</span>
              <span className="font-medium text-foreground">{serviceDetails.service}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Base Price</span>
              <span className="text-foreground">₹{serviceDetails.basePrice}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Labor Charge</span>
              <span className="text-foreground">₹{serviceDetails.laborCharge}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Convenience Fee</span>
              <span className="text-foreground">₹{serviceDetails.convenienceFee}</span>
            </div>
            <div className="border-t border-border pt-3 flex justify-between">
              <span className="font-semibold text-foreground">Total Amount</span>
              <span className="font-bold text-xl text-primary">₹{serviceDetails.total}</span>
            </div>
          </CardContent>
        </Card>

        {/* Payment Method Selection */}
        <Card variant="elevated" className="mb-6">
          <CardHeader>
            <CardTitle>Payment Method</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <button
              onClick={() => setPaymentMethod("online")}
              className={`w-full flex items-center gap-4 p-4 rounded-xl border-2 transition-all ${
                paymentMethod === "online"
                  ? "border-primary bg-primary/5"
                  : "border-border hover:border-primary/50"
              }`}
            >
              <div
                className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                  paymentMethod === "online"
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground"
                }`}
              >
                <CreditCard className="w-6 h-6" />
              </div>
              <div className="text-left">
                <p className="font-semibold text-foreground">Online Payment</p>
                <p className="text-sm text-muted-foreground">UPI, Card, Net Banking</p>
              </div>
              {paymentMethod === "online" && (
                <CheckCircle2 className="w-6 h-6 text-primary ml-auto" />
              )}
            </button>

            <button
              onClick={() => setPaymentMethod("cash")}
              className={`w-full flex items-center gap-4 p-4 rounded-xl border-2 transition-all ${
                paymentMethod === "cash"
                  ? "border-primary bg-primary/5"
                  : "border-border hover:border-primary/50"
              }`}
            >
              <div
                className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                  paymentMethod === "cash"
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground"
                }`}
              >
                <Banknote className="w-6 h-6" />
              </div>
              <div className="text-left">
                <p className="font-semibold text-foreground">Cash on Service</p>
                <p className="text-sm text-muted-foreground">Pay directly to technician</p>
              </div>
              {paymentMethod === "cash" && (
                <CheckCircle2 className="w-6 h-6 text-primary ml-auto" />
              )}
            </button>
          </CardContent>
        </Card>

        {/* Online Payment Form (Demo) */}
        {paymentMethod === "online" && (
          <Card variant="elevated" className="mb-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-success" />
                Secure Payment (Demo)
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="card">Card Number</Label>
                <Input id="card" placeholder="4242 4242 4242 4242" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="expiry">Expiry</Label>
                  <Input id="expiry" placeholder="MM/YY" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="cvv">CVV</Label>
                  <Input id="cvv" placeholder="123" type="password" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="name">Cardholder Name</Label>
                <Input id="name" placeholder="John Doe" />
              </div>
              <p className="text-xs text-muted-foreground flex items-center gap-1">
                <Shield className="w-3 h-3" />
                This is a demo. No real payment will be processed.
              </p>
            </CardContent>
          </Card>
        )}

        {/* Pay Button */}
        <Button
          variant="hero"
          size="xl"
          className="w-full"
          onClick={handlePayment}
          disabled={loading}
        >
          {loading ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Processing...
            </>
          ) : paymentMethod === "cash" ? (
            "Confirm Cash Payment"
          ) : (
            `Pay ₹${serviceDetails.total}`
          )}
        </Button>

        <p className="text-center text-sm text-muted-foreground mt-4">
          By proceeding, you agree to our Terms of Service
        </p>
      </div>
    </div>
  );
};

export default Payment;
