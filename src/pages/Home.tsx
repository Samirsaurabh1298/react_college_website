import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Music, Mic2, BookOpen, Users } from 'lucide-react';

export default function Home() {
  return (
    <div>
      {/* Hero Section with Video Background */}
      <section className="relative h-screen">
        <div className="absolute inset-0 overflow-hidden">
          <video className="object-cover w-full h-full z-[-1]" autoPlay loop muted playsInline poster="/assets/images/training-pinao.jpg">
            <source src="/assets/videos/01_resized.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-indigo-900/90"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center z-10">
          <div className="text-white container mx-auto text-center px-4">
            <h1 className="text-5xl md:text-7xl text-yellow-500 font-bold leading-tight mb-6 animate-fade-in">
              Welcome to Saryug Sangeet Mahavidalya
            </h1>
            <p className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto">
              संगीत में बसी है हमारी पहचान, जहां हर स्वर में है नयी जान।
            </p>
            <Link to="/admission">
              <Button size="lg" className="text-lg">
                Begin Your Journey
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Harmony Academy?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              icon={<Music className="h-8 w-8" />}
              title="Expert Faculty"
              description="Learn from world-renowned musicians and industry professionals"
            />
            <FeatureCard
              icon={<Mic2 className="h-8 w-8" />}
              title="State-of-the-art Facilities"
              description="Access to professional recording studios and practice rooms"
            />
            <FeatureCard
              icon={<BookOpen className="h-8 w-8" />}
              title="Diverse Programs"
              description="Choose from a wide range of musical disciplines and specializations"
            />
            <FeatureCard
              icon={<Users className="h-8 w-8" />}
              title="Strong Community"
              description="Join a supportive network of passionate musicians"
            />
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Programs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProgramCard
              image="https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              title="Classical Performance"
              description="Master your instrument with intensive training in classical repertoire"
            />
            <ProgramCard
              image="https://images.unsplash.com/photo-1516280440614-37939bbacd81?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              title="Jazz Studies"
              description="Develop your improvisational skills and jazz theory knowledge"
            />
            <ProgramCard
              image="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              title="Music Production"
              description="Learn modern production techniques and studio engineering"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md text-center">
      <div className="inline-block p-3 bg-primary/10 rounded-full mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function ProgramCard({ image, title, description }: { image: string; title: string; description: string }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="w-full">
          <Link to="/admission">
            <Button variant="outline" className="w-full">
              Learn More
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
