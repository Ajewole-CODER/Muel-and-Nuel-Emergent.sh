import React, { useState } from 'react';

// Header Component
export const Header = ({ currentPage, setCurrentPage }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigationItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'programs', label: 'Programs' },
    { id: 'facilities', label: 'Facilities' },
    { id: 'admissions', label: 'Admissions' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-lg">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">MNS</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-800">Mueland Nuel Schools</h1>
              <p className="text-sm text-gray-600">Excellence in Education</p>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setCurrentPage(item.id)}
                className={`text-sm font-medium transition-colors duration-200 ${
                  currentPage === item.id 
                    ? 'text-blue-600 border-b-2 border-blue-600' 
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className={`bg-gray-800 block h-0.5 w-6 rounded-sm transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1' : ''}`}></span>
              <span className={`bg-gray-800 block h-0.5 w-6 rounded-sm my-0.5 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`bg-gray-800 block h-0.5 w-6 rounded-sm transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1' : ''}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t pt-4">
            <div className="flex flex-col space-y-3">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setCurrentPage(item.id);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`text-left py-2 px-3 rounded transition-colors duration-200 ${
                    currentPage === item.id 
                      ? 'bg-blue-600 text-white' 
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

// Hero Component
export const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1616964361016-4dadd4cc67ca')`
        }}
      />
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          Welcome to <br />
          <span className="text-blue-400">Mueland Nuel Schools</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto leading-relaxed">
          Nurturing Excellence, Building Future Leaders in Ayegbaju, Ekiti State
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105">
            Discover Our Programs
          </button>
          <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300">
            Schedule a Visit
          </button>
        </div>
      </div>
    </section>
  );
};

// About Component
export const About = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">About Mueland Nuel Schools</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Located in the heart of Ayegbaju, Ekiti State, we are committed to providing world-class education that prepares students for success in the 21st century.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1708580889030-0fb937ded40b" 
                alt="School Building" 
                className="rounded-lg shadow-lg w-full h-80 object-cover"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Our Mission</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                To provide quality education that develops critical thinking, creativity, and character while fostering academic excellence and moral values in our students.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Academic Excellence</h4>
                    <p className="text-gray-600">Rigorous curriculum designed to challenge and inspire students</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Character Development</h4>
                    <p className="text-gray-600">Building integrity, leadership, and moral values</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Innovation</h4>
                    <p className="text-gray-600">Modern teaching methods and technology integration</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Programs Component
export const Programs = () => {
  const programs = [
    {
      title: "Early Years Foundation",
      description: "Nursery and Pre-primary education with play-based learning and foundational literacy",
      age: "Ages 2-5",
      image: "https://images.unsplash.com/photo-1574130303188-31a915382726",
      subjects: ["Basic Literacy", "Numeracy", "Social Skills", "Creative Arts", "Physical Development"]
    },
    {
      title: "Basic Education (Primary)",
      description: "Primary 1-6 following the Nigerian Basic Education Curriculum with vocational skills",
      age: "Ages 6-11",
      image: "https://images.pexels.com/photos/7616608/pexels-photo-7616608.jpeg",
      subjects: ["English Language", "Mathematics", "Basic Science", "Social Studies", "History", "Religious Studies", "Vocational Skills"]
    },
    {
      title: "Junior Secondary Education",
      description: "JSS 1-3 with integrated vocational training and practical skills development",
      age: "Ages 12-14",
      image: "https://images.pexels.com/photos/8532850/pexels-photo-8532850.jpeg",
      subjects: ["Core Subjects", "Agricultural Science", "Computer Studies", "Business Studies", "French", "Vocational Skills (2 minimum)"]
    },
    {
      title: "Senior Secondary Education",
      description: "SSS 1-3 with WAEC/NECO preparation and specialized subject combinations",
      age: "Ages 15-18",
      image: "https://images.unsplash.com/photo-1653250198415-6bae22e0c796",
      subjects: ["Science Track", "Commercial Track", "Arts Track", "Technical Track", "History (Compulsory)"]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Academic Programs</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Following the Nigerian Basic Education Curriculum with integrated vocational skills and practical training as mandated by the Federal Government's 2025 educational reforms.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {programs.map((program, index) => (
              <div key={index} className="bg-gray-50 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img 
                  src={program.image} 
                  alt={program.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="text-blue-600 text-sm font-semibold mb-2">{program.age}</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{program.title}</h3>
                  <p className="text-gray-600 mb-4">{program.description}</p>
                  {program.subjects && (
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-700 mb-2">Key Subjects:</h4>
                      <div className="flex flex-wrap gap-2">
                        {program.subjects.map((subject, idx) => (
                          <span key={idx} className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                            {subject}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  <button className="text-blue-600 hover:text-blue-800 font-semibold">
                    Learn More →
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-blue-50 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">2025 Educational Reforms</h3>
            <p className="text-gray-600 mb-6">
              In line with Federal Government directives, all students must select at least two vocational skills during their basic education:
            </p>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div>
                <h4 className="font-semibold text-gray-700 mb-2">Technical Skills</h4>
                <ul className="text-gray-600 space-y-1">
                  <li>• Digital Literacy & Robotics</li>
                  <li>• GSM Repairs</li>
                  <li>• CCTV Installation</li>
                  <li>• Solar Installation</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-700 mb-2">Creative & Service</h4>
                <ul className="text-gray-600 space-y-1">
                  <li>• Event Management</li>
                  <li>• Interior Design</li>
                  <li>• Hairstyling & Makeup</li>
                  <li>• Garment Making</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-700 mb-2">Agriculture & Trade</h4>
                <ul className="text-gray-600 space-y-1">
                  <li>• Crop Production</li>
                  <li>• Poultry & Livestock</li>
                  <li>• Bakery & Confectioneries</li>
                  <li>• Plumbing & Tiling</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Facilities Component
export const Facilities = () => {
  const facilities = [
    {
      title: "Modern Classrooms",
      description: "44 newly constructed and 1,084 renovated classrooms equipped with modern furniture and teaching aids",
      icon: "🏫",
      details: "Air-conditioned, well-lit spaces with interactive boards and ergonomic furniture"
    },
    {
      title: "ICT Laboratory",
      description: "Fully equipped computer lab with 2,600 computer devices and high-speed internet access",
      icon: "💻",
      details: "Latest computers, robotics kits, and software for digital literacy programs"
    },
    {
      title: "Science Laboratories",
      description: "Comprehensive labs for Physics, Chemistry, Biology, and Agricultural Science practicals",
      icon: "🔬",
      details: "Modern equipment for hands-on learning and WAEC/NECO practical examinations"
    },
    {
      title: "School Library",
      description: "Extensive collection of books, journals, and digital resources for research",
      icon: "📚",
      details: "Over 5,000 books, e-library access, and quiet study spaces"
    },
    {
      title: "Sports Complex",
      description: "Multi-purpose sports facilities for football, basketball, volleyball, and athletics",
      icon: "⚽",
      details: "Football pitch, basketball court, volleyball court, and 400m track"
    },
    {
      title: "Vocational Workshop",
      description: "Dedicated spaces for practical training in the 15 mandated vocational skills",
      icon: "🔧",
      details: "Equipment for plumbing, electrical work, garment making, and agricultural processing"
    },
    {
      title: "Art & Music Studio",
      description: "Creative spaces for arts, crafts, music, and cultural activities",
      icon: "🎨",
      details: "Musical instruments, art supplies, and performance spaces"
    },
    {
      title: "Hostel Facilities",
      description: "Modern boarding facilities with 240 new toilets and renovated hostels",
      icon: "🏠",
      details: "Comfortable dormitories, dining hall, and recreational areas"
    },
    {
      title: "Health Center",
      description: "On-campus medical facility with qualified health personnel",
      icon: "🏥",
      details: "First aid, health screenings, and emergency medical care"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">World-Class Facilities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our campus features modern facilities developed with ₦14 billion investment under the AGILE project, providing an optimal learning environment for all students.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilities.map((facility, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105">
                <div className="text-4xl mb-4">{facility.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{facility.title}</h3>
                <p className="text-gray-600 mb-3">{facility.description}</p>
                {facility.details && (
                  <p className="text-sm text-blue-600 font-medium">{facility.details}</p>
                )}
              </div>
            ))}
          </div>

          <div className="mt-16 bg-green-50 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">AGILE Project Investment</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-gray-700 mb-3">Infrastructure Development</h4>
                <ul className="text-gray-600 space-y-2">
                  <li>• 44 newly constructed classrooms</li>
                  <li>• 1,084 renovated existing classrooms</li>
                  <li>• 240 new modern toilet facilities</li>
                  <li>• 2,978 pieces of new furniture</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-700 mb-3">Technology Integration</h4>
                <ul className="text-gray-600 space-y-2">
                  <li>• 2,600 computer devices installed</li>
                  <li>• High-speed internet connectivity</li>
                  <li>• Interactive learning systems</li>
                  <li>• Digital literacy programs</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// News Component
export const News = () => {
  const news = [
    {
      title: "2024/2025 Academic Session Begins",
      date: "September 15, 2024",
      summary: "We welcome all students back for another exciting academic year filled with opportunities for growth and learning.",
      image: "https://images.unsplash.com/photo-1653250198415-6bae22e0c796"
    },
    {
      title: "New Science Laboratory Inaugurated",
      date: "August 20, 2024",
      summary: "Our new state-of-the-art science laboratory is now operational, providing enhanced learning opportunities for our students.",
      image: "https://images.unsplash.com/photo-1541178735493-479c1a27ed24"
    },
    {
      title: "Outstanding WAEC Results",
      date: "July 10, 2024",
      summary: "Our students achieved exceptional results in the 2024 WAEC examinations, with 95% pass rate.",
      image: "https://images.pexels.com/photos/159746/notebook-pen-pencil-education-159746.jpeg"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Latest News & Updates</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay informed about the latest happenings at Mueland Nuel Schools.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {news.map((item, index) => (
              <div key={index} className="bg-gray-50 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="text-blue-600 text-sm font-semibold mb-2">{item.date}</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{item.title}</h3>
                  <p className="text-gray-600 mb-4">{item.summary}</p>
                  <button className="text-blue-600 hover:text-blue-800 font-semibold">
                    Read More →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Admissions Component
export const Admissions = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Admissions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join our community of learners and discover your potential at Mueland Nuel Schools.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Admission Requirements</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Application Form</h4>
                    <p className="text-gray-600">Completed application form with all required information</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Birth Certificate</h4>
                    <p className="text-gray-600">Original birth certificate and photocopies</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Medical Report</h4>
                    <p className="text-gray-600">Recent medical report from a certified physician</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Passport Photographs</h4>
                    <p className="text-gray-600">Recent passport-sized photographs</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Application Process</h3>
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">1</div>
                    <h4 className="font-semibold text-gray-800">Submit Application</h4>
                  </div>
                  <p className="text-gray-600 ml-11">Complete and submit your application form with required documents</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">2</div>
                    <h4 className="font-semibold text-gray-800">Entrance Assessment</h4>
                  </div>
                  <p className="text-gray-600 ml-11">Take the entrance assessment (for applicable grade levels)</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">3</div>
                    <h4 className="font-semibold text-gray-800">Interview</h4>
                  </div>
                  <p className="text-gray-600 ml-11">Attend the interview with parents/guardians</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">4</div>
                    <h4 className="font-semibold text-gray-800">Admission Decision</h4>
                  </div>
                  <p className="text-gray-600 ml-11">Receive admission decision and enrollment information</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300">
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

// Gallery Component
export const Gallery = () => {
  const galleryImages = [
    "https://images.unsplash.com/photo-1574130303188-31a915382726",
    "https://images.pexels.com/photos/7616608/pexels-photo-7616608.jpeg",
    "https://images.pexels.com/photos/8532850/pexels-photo-8532850.jpeg",
    "https://images.unsplash.com/photo-1653250198415-6bae22e0c796",
    "https://images.unsplash.com/photo-1541178735493-479c1a27ed24",
    "https://images.pexels.com/photos/159746/notebook-pen-pencil-education-159746.jpeg"
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Photo Gallery</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore life at Mueland Nuel Schools through our photo gallery showcasing student activities, facilities, and achievements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div key={index} className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img 
                  src={image} 
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-20 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Contact Component
export const Contact = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Contact Us</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get in touch with us for more information about admissions, programs, or any questions you may have.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Get In Touch</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white text-xl">
                    📍
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Address</h4>
                    <p className="text-gray-600">
                      MNS Avenue, KM 1 Oye Road,<br />
                      Opposite Club 009 Estate,<br />
                      Ayegbaju, Ekiti State 370111,<br />
                      Nigeria
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white text-xl">
                    📞
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Phone</h4>
                    <p className="text-gray-600">+234 706 266 2726</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white text-xl">
                    ✉️
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Email</h4>
                    <p className="text-gray-600">info@muelandnuelschools.sch.ng</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white text-xl">
                    🕒
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Office Hours</h4>
                    <p className="text-gray-600">
                      Monday - Friday: 8:00 AM - 4:00 PM<br />
                      Saturday: 9:00 AM - 2:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Send us a Message</h3>
              <form className="space-y-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Full Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    placeholder="Your full name"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Email Address</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    placeholder="Your email address"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Phone Number</label>
                  <input 
                    type="tel" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    placeholder="Your phone number"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Message</label>
                  <textarea 
                    rows="5" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    placeholder="Your message"
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Footer Component
export const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">MNS</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold">Mueland Nuel Schools</h3>
                  <p className="text-gray-400 text-sm">Excellence in Education</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Nurturing excellence and building future leaders through quality education in Ekiti State, Nigeria.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Programs</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Admissions</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Facilities</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Gallery</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Programs</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Early Years</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Primary School</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Secondary School</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Extra-curricular</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-sm">
                <p className="text-gray-400">MNS Avenue, KM 1 Oye Road</p>
                <p className="text-gray-400">Ayegbaju, Ekiti State</p>
                <p className="text-gray-400">+234 706 266 2726</p>
                <p className="text-gray-400">info@muelandnuelschools.sch.ng</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              &copy; 2024 Mueland Nuel Schools. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};