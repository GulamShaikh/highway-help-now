import { Link } from "react-router-dom";
import { Wrench, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg primary-gradient flex items-center justify-center">
                <Wrench className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-display font-bold text-xl">Mobile Garage</span>
            </div>
            <p className="text-secondary-foreground/70 text-sm leading-relaxed">
              Making highways safer with instant roadside repair and towing support.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-display font-semibold text-lg">Quick Links</h4>
            <div className="flex flex-col gap-2">
              {[
                { href: "/", label: "Home" },
                { href: "/services", label: "Services" },
                { href: "/live-units", label: "Live Units" },
                { href: "/about", label: "About Us" },
              ].map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="text-secondary-foreground/70 hover:text-primary transition-colors text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-display font-semibold text-lg">Services</h4>
            <div className="flex flex-col gap-2">
              {[
                "On-spot Repair",
                "Tyre Replacement",
                "Battery Jump-start",
                "Fuel Assistance",
                "Towing Service",
              ].map((service) => (
                <span
                  key={service}
                  className="text-secondary-foreground/70 text-sm"
                >
                  {service}
                </span>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-display font-semibold text-lg">Emergency Contact</h4>
            <div className="flex flex-col gap-3">
              <a
                href="tel:1800-GARAGE"
                className="flex items-center gap-2 text-primary font-semibold hover:text-primary/80 transition-colors"
              >
                <Phone className="w-4 h-4" />
                1800-GARAGE
              </a>
              <a
                href="mailto:help@mobilegarage.com"
                className="flex items-center gap-2 text-secondary-foreground/70 hover:text-primary transition-colors text-sm"
              >
                <Mail className="w-4 h-4" />
                help@mobilegarage.com
              </a>
              <div className="flex items-start gap-2 text-secondary-foreground/70 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Highway Network Coverage Across All Major Routes</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/10 mt-12 pt-8 text-center text-secondary-foreground/50 text-sm">
          <p>© 2024 Mobile Garage. All rights reserved. Making highways safer, one rescue at a time.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
