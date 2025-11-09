import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">HomeHero</h3>
            <p className="text-sm leading-relaxed">
              Your trusted platform for finding and booking local household services with ease and confidence.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'Services', 'About', 'Contact', 'FAQ'].map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-blue-400 transition-colors duration-200">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2">
              {['Electricians', 'Plumbers', 'Cleaners', 'Handymen', 'Painters'].map((service) => (
                <li key={service}>
                  <a href="#" className="hover:text-blue-400 transition-colors duration-200">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <a href="tel:+1234567890" className="hover:text-blue-400">
                  +8801863199573
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <a href="mailto:support@homehero.com" className="hover:text-blue-400">
                  ayasmahmud48@gmail.com
                </a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <p>Inani-4750, Cox's Bazar, Bangladesh</p>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-gray-700 mb-6" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            &copy; 2025 HomeHero. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex gap-4 mt-4 md:mt-0">
            {[
              { icon: Facebook, label: 'Facebook' ,link:'https://www.facebook.com/md.ayas.998691' },
              { icon: Twitter, label: 'Twitter', link:'https://twitter.com/AyasMahmud48' },
              { icon: Instagram, label: 'Instagram', link:'https://www.instagram.com/the_ayas_mahmud/'},
              { icon: Linkedin, label: 'LinkedIn', link:'https://www.linkedin.com/in/mohammad-ayas/' }
            ].map(({ icon: Icon, label ,link}) => (
              <a
                key={label}
                href={link || "#"}
                aria-label={label}
                className="hover:text-blue-400 transition-colors duration-200"
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
