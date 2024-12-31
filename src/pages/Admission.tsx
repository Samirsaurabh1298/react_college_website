import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function Admission() {
  const [step, setStep] = useState(1);

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Apply for Admission</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Take the first step towards your musical future. Complete our application process to join our vibrant community.
          </p>
        </div>

        {/* Programs Overview */}
        <div className="mb-16">
          <Tabs defaultValue="undergraduate">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="undergraduate">Undergraduate Programs</TabsTrigger>
              <TabsTrigger value="graduate">Graduate Programs</TabsTrigger>
            </TabsList>
            <TabsContent value="undergraduate">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                <ProgramCard
                  title="Bachelor of Music"
                  duration="4 years"
                  tuition="$32,000/year"
                  details={[
                    'Classical Performance',
                    'Jazz Studies',
                    'Music Education',
                    'Music Production'
                  ]}
                />
                <ProgramCard
                  title="Artist Diploma"
                  duration="2 years"
                  tuition="$28,000/year"
                  details={[
                    'Intensive Performance Training',
                    'Private Instruction',
                    'Performance Opportunities',
                    'Career Development'
                  ]}
                />
                <ProgramCard
                  title="Certificate Program"
                  duration="1 year"
                  tuition="$24,000/year"
                  details={[
                    'Music Technology',
                    'Sound Engineering',
                    'Digital Production',
                    'Industry Internships'
                  ]}
                />
              </div>
            </TabsContent>
            <TabsContent value="graduate">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                <ProgramCard
                  title="Master of Music"
                  duration="2 years"
                  tuition="$36,000/year"
                  details={[
                    'Advanced Performance',
                    'Composition',
                    'Conducting',
                    'Research Opportunities'
                  ]}
                />
                <ProgramCard
                  title="Doctoral Program"
                  duration="3-5 years"
                  tuition="$38,000/year"
                  details={[
                    'Musical Arts',
                    'Music Theory',
                    'Musicology',
                    'Teaching Fellowships'
                  ]}
                />
                <ProgramCard
                  title="Graduate Certificate"
                  duration="1 year"
                  tuition="$30,000/year"
                  details={[
                    'Specialized Study',
                    'Professional Development',
                    'Advanced Techniques',
                    'Industry Networking'
                  ]}
                />
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Application Form */}
        <Card className="p-8">
          <div className="mb-8">
            <div className="flex justify-between items-center mb-4">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className={`w-1/3 h-2 rounded ${i <= step ? 'bg-primary' : 'bg-gray-200'}`}
                />
              ))}
            </div>
            <div className="flex justify-between text-sm">
              <span className={step >= 1 ? 'text-primary' : 'text-gray-500'}>
                Personal Information
              </span>
              <span className={step >= 2 ? 'text-primary' : 'text-gray-500'}>
                Program Selection
              </span>
              <span className={step >= 3 ? 'text-primary' : 'text-gray-500'}>
                Additional Information
              </span>
            </div>
          </div>

          <form className="space-y-6">
            {step === 1 && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name
                    </label>
                    <Input placeholder="Enter your first name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name
                    </label>
                    <Input placeholder="Enter your last name" />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <Input type="email" placeholder="your@email.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone
                    </label>
                    <Input placeholder="(555) 123-4567" />
                  </div>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Program Level
                  </label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select program level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="undergraduate">Undergraduate</SelectItem>
                      <SelectItem value="graduate">Graduate</SelectItem>
                      <SelectItem value="certificate">Certificate</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Program of Interest
                  </label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select program" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="classical">Classical Performance</SelectItem>
                      <SelectItem value="jazz">Jazz Studies</SelectItem>
                      <SelectItem value="production">Music Production</SelectItem>
                      <SelectItem value="education">Music Education</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Primary Instrument
                  </label>
                  <Input placeholder="Enter your primary instrument" />
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Musical Background
                  </label>
                  <Textarea
                    placeholder="Describe your musical experience and training"
                    className="min-h-[100px]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Statement of Purpose
                  </label>
                  <Textarea
                    placeholder="Why do you want to study at Harmony Academy?"
                    className="min-h-[150px]"
                  />
                </div>
              </div>
            )}

            <div className="flex justify-between pt-6">
              {step > 1 && (
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setStep(step - 1)}
                >
                  Previous
                </Button>
              )}
              {step < 3 ? (
                <Button
                  type="button"
                  className="ml-auto"
                  onClick={() => setStep(step + 1)}
                >
                  Next
                </Button>
              ) : (
                <Button type="submit" className="ml-auto">
                  Submit Application
                </Button>
              )}
            </div>
          </form>
        </Card>
      </div>
    </div>
  );
}

function ProgramCard({ title, duration, tuition, details }: { title: string; duration: string; tuition: string; details: string[] }) {
  return (
    <Card className="p-6">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <div className="mb-4">
        <p className="text-gray-600">Duration: {duration}</p>
        <p className="text-gray-600">Tuition: {tuition}</p>
      </div>
      <ul className="space-y-2">
        {details.map((detail, index) => (
          <li key={index} className="text-gray-600">
            • {detail}
          </li>
        ))}
      </ul>
    </Card>
  );
}
