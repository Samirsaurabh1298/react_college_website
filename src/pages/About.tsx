import { GraduationCap, Users, Trophy, Music } from 'lucide-react';

export default function About() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-blue-950 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center relative h-[60vh] overflow-hidden">
              <div className="absolute inset-0">
              <img src="https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=2850&amp;q=80" alt="Music instruments" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-blue-900/70"></div>
              </div>
            <div className="relative h-full flex items-center justify-center text-center text-white px-4">
              <div className="max-w-4xl">
                <h2 className="text-5xl text-yellow-300 font-extrabold mb-6">Nurturing Musical Excellence Since 2010</h2>
                <p className="text-xl text-gray-200">Where tradition meets innovation in musical education</p>
                </div>
              </div>
            <h1 className="text-4xl font-bold mb-4">About Harmony Academy</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Since 1970, we've been dedicated to nurturing musical talent and fostering creativity
              in aspiring musicians from around the world.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <StatCard
              icon={<GraduationCap className="h-8 w-8" />}
              number="5000+"
              label="Graduates"
            />
            <StatCard
              icon={<Users className="h-8 w-8" />}
              number="100+"
              label="Expert Faculty"
            />
            <StatCard
              icon={<Trophy className="h-8 w-8" />}
              number="250+"
              label="Awards Won"
            />
            <StatCard
              icon={<Music className="h-8 w-8" />}
              number="50+"
              label="Performance Venues"
            />
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our History</h2>
              <div className="space-y-4">
                <p className="text-gray-600">
                  Founded in 1970, Harmony Academy began as a small music school with a vision
                  to provide world-class music education to aspiring musicians.
                </p>
                <p className="text-gray-600">
                  Over the decades, we've grown into one of the most prestigious music
                  institutions, known for our commitment to excellence and innovation in
                  music education.
                </p>
                <p className="text-gray-600">
                  Today, our alumni perform in renowned orchestras, produce chart-topping
                  albums, and lead music education programs worldwide.
                </p>
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1445985543470-41fba5c3144a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Historic building"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Faculty Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Faculty</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FacultyCard
              image="https://images.unsplash.com/photo-1530268729831-4b0b9e170218?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              name="Dr. Sarah Johnson"
              title="Head of Classical Performance"
              description="Concert pianist with over 20 years of international performance experience"
            />
            <FacultyCard
              image="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              name="Prof. James Wilson"
              title="Jazz Studies Director"
              description="Grammy-nominated jazz saxophonist and composer"
            />
            <FacultyCard
              image="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              name="Dr. Emily Chen"
              title="Music Theory Department Chair"
              description="Published author and researcher in contemporary music theory"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

function StatCard({ icon, number, label }: { icon: React.ReactNode; number: string; label: string }) {
  return (
    <div className="text-center p-6 bg-white rounded-lg shadow-md">
      <div className="inline-block p-3 bg-primary/10 rounded-full mb-4">
        {icon}
      </div>
      <div className="text-3xl font-bold mb-2">{number}</div>
      <div className="text-gray-600">{label}</div>
    </div>
  );
}

function FacultyCard({ image, name, title, description }: { image: string; name: string; title: string; description: string }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={image} alt={name} className="w-full h-64 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-1">{name}</h3>
        <h4 className="text-primary mb-2">{title}</h4>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}