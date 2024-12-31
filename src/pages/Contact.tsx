import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';

export default function Contact() {
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="space-y-6">
            <ContactCard
              icon={<MapPin className="h-6 w-6" />}
              title="Visit Us"
              content={['123 Music Street', 'Harmony City, HC 12345']}
            />
            <ContactCard
              icon={<Phone className="h-6 w-6" />}
              title="Call Us"
              content={['(555) 123-4567', '(555) 987-6543']}
            />
            <ContactCard
              icon={<Mail className="h-6 w-6" />}
              title="Email Us"
              content={['info@harmonyacademy.edu', 'admissions@harmonyacademy.edu']}
            />
            <ContactCard
              icon={<Clock className="h-6 w-6" />}
              title="Office Hours"
              content={['Monday - Friday: 9:00 AM - 6:00 PM', 'Saturday: 9:00 AM - 1:00 PM']}
            />
          </div>

          {/* Contact Form */}
          <div className="md:col-span-2">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <Input id="name" placeholder="Your name" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <Input id="email" type="email" placeholder="your@email.com" />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <Input id="subject" placeholder="How can we help?" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Your message"
                  className="min-h-[150px]"
                />
              </div>
              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </div>
        </div>

        {/* Map */}
        <div className="mt-16">
          <iframe
            title="Location Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1!2d-73.9!3d40.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM40zMCcwMC4wIk4gNzPCsDU0JzAwLjAiVw!5e0!3m2!1sen!2sus!4v1234567890"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            className="rounded-lg shadow-md"
          />
        </div>
      </div>
    </div>
  );
}

function ContactCard({ icon, title, content }: { icon: React.ReactNode; title: string; content: string[] }) {
  return (
    <Card className="p-6">
      <div className="flex items-start space-x-4">
        <div className="p-2 bg-primary/10 rounded-full">
          {icon}
        </div>
        <div>
          <h3 className="font-semibold text-lg mb-2">{title}</h3>
          {content.map((line, index) => (
            <p key={index} className="text-gray-600">
              {line}
            </p>
          ))}
        </div>
      </div>
    </Card>
  );
}