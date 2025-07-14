import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, DollarSign, Code, Camera, Zap, ArrowRight, Users, Award, TrendingUp, Star, ChevronDown, ChevronUp } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import MetaTags from '../components/SEO/MetaTags';
import StructuredData from '../components/SEO/StructuredData';

const Careers = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const [expandedTrack, setExpandedTrack] = useState(null);

  const jobs = [
    {
      id: 1,
      title: "Software Engineer Intern (Remote)",
      department: "Software",
      location: "Remote",
      type: "Internship",
      salary: "Project-based",
      description: "Join our team as a Software Engineer Intern and gain hands-on experience in building modern web applications using cutting-edge technologies.",
      requirements: ["React", "TypeScript", "Firebase", "Node.js", "ASP.NET"],
    },
    {
      id: 2,
      title: "Software Engineer Intern (Remote)",
      department: "Software",
      location: "Remote",
      type: "Internship",
      salary: "Project-based",
      description: "We are seeking an enthusiastic Software Engineer Intern to work on innovative projects involving .NET technologies, Firebase, and C# Machine Learning.",
      requirements: [".NET Framework", "C#", "Firebase", "ASP.NET", "C# ML"],
    },
    {
      id: 3,
      title: "Software Engineer (Web) - Onsite",
      department: "Software",
      location: "Colombo, Sri Lanka",
      type: "Full-time",
      salary: "Project-based",
      description: "We are looking for a talented Software Engineer specializing in web development to join our team on an onsite basis.",
      requirements: ["Expertise in web development", "Proficiency in frontend and backend technologies"],
    },
    {
      id: 4,
      title: "Arduino Programmer",
      department: "Electrical",
      location: "Colombo, Sri Lanka",
      type: "Full-time",
      salary: "Project-based",
      description: "We're seeking skilled Arduino Programmers to develop innovative IoT solutions and embedded systems for our clients.",
      requirements: [
        "Proficiency in Arduino programming",
        "Experience with C/C++ programming",
        "Knowledge of electronic circuits and sensors",
        "Problem-solving capabilities",
        "Ability to work in a team",
      ],
    },
    {
      id: 5,
      title: "Electrical Technician",
      department: "Electrical",
      location: "Colombo, Sri Lanka",
      type: "Full-time",
      salary: "Project-based",
      description: "We're seeking skilled Electrical Technicians to join our team and provide top-quality electrical services to our clients.",
      requirements: [
        "Relevant experience in the field",
        "Strong communication skills",
        "Ability to work in a team",
        "Problem-solving capabilities",
      ],
    },
  ];

  const careerTracks = [
    {
      title: "Software Engineering Track",
      icon: Code,
      color: "from-blue-500 to-cyan-500",
      paths: [
        {
          name: "Full-Stack Web Path",
          progression: [
            "Intern Developer",
            "Associate Software Engineer (ASE)",
            "Software Engineer",
            "Senior Developer",
            "Tech Lead"
          ]
        },
        {
          name: ".NET & C# / ML Development Path",
          progression: [
            "Intern Developer",
            "Associate Software Engineer (.NET)",
            "Software Engineer (.NET)",
            "Senior Software Engineer (.NET / ML)",
            "Software Architect"
          ]
        },
        {
          name: "Freelance",
          progression: ["Independent Contractor"]
        }
      ]
    },
    {
      title: "Studio Track",
      icon: Camera,
      color: "from-purple-500 to-pink-500",
      paths: [
        {
          name: "Photography Path",
          progression: [
            "Photography Intern",
            "Junior Photographer",
            "Photographer",
            "Creative Director"
          ]
        },
        {
          name: "Videography (Cinematic) Path",
          progression: [
            "Video Intern",
            "Cinematic Editor",
            "Videographer",
            "Video Production Lead"
          ]
        },
        {
          name: "Mixing & Mastering Path",
          progression: [
            "Audio Intern",
            "Assistant Audio Engineer",
            "Mixing/Mastering Specialist",
            "Studio Audio Lead"
          ]
        }
      ]
    },
    {
      title: "Electrical Track",
      icon: Zap,
      color: "from-orange-500 to-red-500",
      paths: [
        {
          name: "Electrical Field Path",
          progression: [
            "Intern Technician",
            "Assistant Electrician",
            "Field Technician",
            "Electrical Project Engineer"
          ]
        },
        {
          name: "IoT Field Path",
          progression: [
            "IoT Intern",
            "IoT Assistant",
            "IoT Engineer",
            "Smart Systems Engineer",
            "IoT Solutions Lead"
          ]
        }
      ]
    }
  ];

  const benefits = [
    {
      icon: Users,
      title: "Mentorship Program",
      description: "Learn from experienced professionals who guide your career growth"
    },
    {
      icon: Award,
      title: "Professional Certifications",
      description: "Company-sponsored certifications to enhance your skills"
    },
    {
      icon: TrendingUp,
      title: "Performance-Based Advancement",
      description: "Clear promotion criteria based on merit and achievements"
    },
    {
      icon: Star,
      title: "Hands-on Projects",
      description: "Work on real-world projects that make a difference"
    }
  ];

  const handleApplyClick = (job) => {
    setSelectedJob(job);
    setShowModal(true);
  };

  const handleEmailChoice = (choice) => {
    const email = "careers@detzglobal.com";
    const subject = encodeURIComponent(`Application for ${selectedJob.title}`);
    const body = encodeURIComponent("Dear Hiring Team, I am interested in applying for this role.");

    switch (choice) {
      case "gmail":
        window.open(`https://mail.google.com/mail/?view=cm&to=${email}&su=${subject}&body=${body}`, "_blank");
        break;
      case "outlook":
        window.open(`https://outlook.live.com/owa/?path=/mail/action/compose&to=${email}&subject=${subject}`, "_blank");
        break;
      case "default":
        window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
        break;
      default:
        break;
    }
    setShowModal(false);
  };

  const toggleTrack = (index) => {
    setExpandedTrack(expandedTrack === index ? null : index);
  };

  // Generate structured data for job postings
  const jobPostingsStructuredData = jobs.map(job => ({
    "@type": "JobPosting",
    "title": job.title,
    "description": job.description,
    "employmentType": job.type === "Full-time" ? "FULL_TIME" : "INTERN",
    "jobLocation": {
      "@type": "Place",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": job.location.includes("Remote") ? "Remote" : "Colombo",
        "addressCountry": "LK"
      }
    },
    "baseSalary": {
      "@type": "MonetaryAmount",
      "currency": "LKR",
      "value": {
        "@type": "QuantitativeValue",
        "value": job.salary
      }
    },
    "datePosted": "2024-01-25",
    "validThrough": "2024-12-31"
  }));

  return (
    <div className="min-h-screen">
      <MetaTags
        title="Careers at DETZ Global - Software, Studios & Electrical Jobs in Sri Lanka"
        description="Join DETZ Global team! Current openings for Software Engineers, Arduino Programmers, Electrical Technicians in Colombo, Sri Lanka. Remote and onsite positions available with career growth opportunities."
        keywords="jobs sri lanka, software engineer jobs colombo, electrical technician jobs, arduino programmer jobs, remote work sri lanka, detz global careers, tech jobs sri lanka, internship opportunities"
        url="https://detzglobal.com/careers"
      />
      
      {jobPostingsStructuredData.map((jobData, index) => (
        <StructuredData key={index} type="JobPosting" data={jobData} />
      ))}

      <PageHeader
        title="Join Our Team"
        description="Build your career with DETZ Global"
        backgroundImage="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80"
      />

      {/* Current Openings - Moved to Top */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <div className="inline-flex items-center bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-2 rounded-full mb-4">
              <Star className="w-5 h-5 mr-2 animate-pulse" />
              <span className="font-semibold">Now Hiring</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 px-4">
              Current Openings
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 px-4">
              Join our team and start your career journey with us
            </p>
          </motion.div>

          <div className="space-y-6 sm:space-y-8">
            {jobs.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className="p-6 sm:p-8">
                  <div className="flex flex-col space-y-6">
                    {/* Job Header */}
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between space-y-4 sm:space-y-0">
                      <div className="flex items-start space-x-4">
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
                          job.department === 'Software' ? 'bg-blue-100' :
                          job.department === 'Electrical' ? 'bg-orange-100' : 'bg-purple-100'
                        }`}>
                          {job.department === 'Software' ? <Code className="w-6 h-6 text-blue-600" /> :
                           job.department === 'Electrical' ? <Zap className="w-6 h-6 text-orange-600" /> :
                           <Camera className="w-6 h-6 text-purple-600" />}
                        </div>
                        <div className="min-w-0 flex-1">
                          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1">{job.title}</h3>
                          <p className="text-blue-600 font-medium">{job.department}</p>
                        </div>
                      </div>

                      {/* Apply Button */}
                      <div className="flex-shrink-0">
                        <motion.button
                          onClick={() => handleApplyClick(job)}
                          disabled={job.type === "Internship"}
                          whileHover={{ scale: job.type === "Internship" ? 1 : 1.05 }}
                          whileTap={{ scale: job.type === "Internship" ? 1 : 0.95 }}
                          className={`w-full sm:w-auto px-6 sm:px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${
                            job.type === "Internship"
                              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                              : "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl"
                          }`}
                        >
                          {job.type === "Internship" ? "Opening Soon" : "Apply Now"}
                        </motion.button>
                      </div>
                    </div>

                    {/* Job Details */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div className="flex items-center space-x-2 text-gray-600">
                        <MapPin className="w-5 h-5 flex-shrink-0" />
                        <span className="text-sm sm:text-base">{job.location}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-gray-600">
                        <Clock className="w-5 h-5 flex-shrink-0" />
                        <span className="text-sm sm:text-base">{job.type}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-gray-600">
                        <DollarSign className="w-5 h-5 flex-shrink-0" />
                        <span className="text-sm sm:text-base">{job.salary}</span>
                      </div>
                    </div>

                    {/* Job Description */}
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{job.description}</p>

                    {/* Requirements */}
                    <div className="border-t pt-6">
                      <h4 className="font-semibold text-gray-900 mb-3 text-sm sm:text-base">Requirements:</h4>
                      <div className="flex flex-wrap gap-2">
                        {job.requirements.map((req, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs sm:text-sm"
                          >
                            {req}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Progression Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <div className="inline-flex items-center bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 sm:px-6 py-2 rounded-full mb-4 sm:mb-6 text-sm sm:text-base">
              <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              <span className="font-semibold">Career Growth</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 px-4">
              Career Progression Opportunities
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              DETZ Global offers well-defined and flexible career progression opportunities across our core divisions
            </p>
          </motion.div>

          <div className="space-y-8 sm:space-y-12 lg:space-y-16">
            {careerTracks.map((track, trackIndex) => (
              <motion.div
                key={trackIndex}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: trackIndex * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl sm:rounded-3xl shadow-xl overflow-hidden"
              >
                {/* Track Header */}
                <div className={`bg-gradient-to-r ${track.color} p-6 sm:p-8`}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-white">
                      <div className="bg-white/20 p-2 sm:p-3 rounded-xl sm:rounded-2xl mr-3 sm:mr-4">
                        <track.icon className="w-6 h-6 sm:w-8 sm:h-8" />
                      </div>
                      <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold">{track.title}</h3>
                    </div>
                    
                    {/* Mobile Toggle Button */}
                    <button
                      onClick={() => toggleTrack(trackIndex)}
                      className="lg:hidden bg-white/20 p-2 rounded-lg text-white hover:bg-white/30 transition-colors"
                    >
                      {expandedTrack === trackIndex ? (
                        <ChevronUp className="w-5 h-5" />
                      ) : (
                        <ChevronDown className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Track Content */}
                <div className={`p-6 sm:p-8 ${expandedTrack === trackIndex || window.innerWidth >= 1024 ? 'block' : 'hidden lg:block'}`}>
                  <div className="space-y-6 sm:space-y-8">
                    {track.paths.map((path, pathIndex) => (
                      <motion.div
                        key={pathIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: pathIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="border-l-4 border-gray-200 pl-4 sm:pl-6"
                      >
                        <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">{path.name}</h4>
                        
                        {/* Mobile: Vertical Layout */}
                        <div className="block sm:hidden space-y-3">
                          {path.progression.map((role, roleIndex) => (
                            <motion.div
                              key={roleIndex}
                              initial={{ opacity: 0, scale: 0.8 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              transition={{ delay: roleIndex * 0.1 }}
                              viewport={{ once: true }}
                              className={`px-3 py-2 rounded-lg text-sm font-semibold text-center ${
                                roleIndex === 0 
                                  ? 'bg-green-100 text-green-800' 
                                  : roleIndex === path.progression.length - 1
                                  ? `bg-gradient-to-r ${track.color} text-white`
                                  : 'bg-gray-100 text-gray-800'
                              }`}
                            >
                              {role}
                              {roleIndex < path.progression.length - 1 && (
                                <div className="flex justify-center mt-2">
                                  <ArrowRight className="w-4 h-4 text-gray-400 rotate-90" />
                                </div>
                              )}
                            </motion.div>
                          ))}
                        </div>

                        {/* Desktop: Horizontal Layout */}
                        <div className="hidden sm:flex flex-wrap items-center gap-3">
                          {path.progression.map((role, roleIndex) => (
                            <React.Fragment key={roleIndex}>
                              <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: roleIndex * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{ scale: 1.05 }}
                                className={`px-3 sm:px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300 ${
                                  roleIndex === 0 
                                    ? 'bg-green-100 text-green-800' 
                                    : roleIndex === path.progression.length - 1
                                    ? `bg-gradient-to-r ${track.color} text-white`
                                    : 'bg-gray-100 text-gray-800'
                                }`}
                              >
                                {role}
                              </motion.div>
                              {roleIndex < path.progression.length - 1 && (
                                <ArrowRight className="w-4 h-4 text-gray-400 hidden sm:block" />
                              )}
                            </React.Fragment>
                          ))}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 px-4">
              Career Growth Support
            </h2>
            <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto px-4">
              Career growth is supported through comprehensive programs designed for your success
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-white/20 rounded-2xl mb-4">
                  <benefit.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2">{benefit.title}</h3>
                <p className="text-white/80 text-sm sm:text-base">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {showModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 w-full max-w-md"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 text-center">
              Choose an Email Client
            </h3>
            <div className="space-y-4">
              <motion.button
                onClick={() => handleEmailChoice("gmail")}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-red-500 text-white px-6 py-3 rounded-xl hover:bg-red-600 transition-colors font-semibold"
              >
                Gmail
              </motion.button>
              <motion.button
                onClick={() => handleEmailChoice("outlook")}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition-colors font-semibold"
              >
                Outlook
              </motion.button>
              <motion.button
                onClick={() => handleEmailChoice("default")}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gray-600 text-white px-6 py-3 rounded-xl hover:bg-gray-700 transition-colors font-semibold"
              >
                Default Mail App
              </motion.button>
            </div>
            <button
              onClick={() => setShowModal(false)}
              className="mt-6 w-full text-gray-600 underline hover:text-gray-800 transition-colors"
            >
              Cancel
            </button>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default Careers;