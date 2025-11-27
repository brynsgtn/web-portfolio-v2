import React, { useEffect, useRef, useState } from 'react';
import { GraduationCap, Briefcase, Award, ExternalLink, Filter } from 'lucide-react';

const education = [
  { school: "Mapua University", course: "BS Information Technology", year: "2022-Present" },
  { school: "Philippine School of Business Administration", course: "Master's in Business Administration", year: "2020-2022" },
  { school: "Wesleyan University-Philippines", course: "BSBA Major in Financial Management", year: "2012-2016" }
];

const experience = [
  {
    position: "Revenue Officer",
    company: "Bureau of Internal Revenue",
    location: "Quezon City, Philippines",
    duration: "2021 - 2022",
    responsibilities: [
      "Received and organized processed tax return forms ensuring secure safekeeping of sensitive taxpayer documents",
      "Verified completeness of tax submissions by checking required attachments and supporting documentation",
      "Conducted quality checks on document submissions identifying missing or incomplete documentation",
      "Collaborated with tax officers and administrative staff to ensure proper documentation flow and compliance",
    ]
  },
  {
    position: "Legal Assistant",
    company: "UCPB Leasing and Finance Corporation",
    location: "Makati City, Philippines",
    duration: "2018 - 2021",
    responsibilities: [
      "Prepared legal documents and correspondence for attorney review ensuring accuracy in formatting and recipient details",
      "Coordinated with courts and government agencies to track case progress and maintain compliance timelines",
      "Digitized case filing systems reducing document retrieval time and improving case management efficiency",
      "Maintained detailed records of legal actions, deadlines, and correspondence supporting $X million in asset recovery",
      "Managed communication flow between legal team, borrowers, and external agencies",
    ]
  },
  {
    position: "Loans Operation Specialist",
    company: "United Coconut Planters Bank (UCPB)",
    location: "Makati City, Philippines",
    duration: "2017 - 2018",
    responsibilities: [
      "Received and securely stored loan documents and collateral records from loan processing teams",
      "Maintained organized filing system enabling quick retrieval for audits and loan officer needs",
      "Tracked loan folders checked out by loan officers creating weekly monitoring reports on folder status",
      "Supported internal and external audits by providing requested loan documentation promptly",
      "Ensured all loan records were accounted for and properly filed according to bank protocols",
    ]
  }
];

const certifications = [
  {
    title: "Full-stack Web Development",
    organization: "Zuitt - Coding Bootcamp",
    date: "Aug 2023",
    link: "https://share.zertify.zuitt.co/certificate/6fbc6310-b435-4106-a559-65a6aefde5a4/"
  },
  {
    title: "AWS Fundamentals",
    organization: "Zuitt - Coding Bootcamp",
    date: "Sep 2024",
    link: "https://share.zertify.zuitt.co/certificate/0e05044e-8995-4243-93f9-6253d44c17cb/"
  },
  {
    title: "AWS Serverless",
    organization: "Zuitt - Coding Bootcamp",
    date: "Sep 2024",
    link: "https://share.zertify.zuitt.co/certificate/fe897952-328c-4539-af8e-c6889e8c0a62/"
  },
  {
    title: "AWS Managed Services",
    organization: "Zuitt - Coding Bootcamp",
    date: "Sep 2024",
    link: "https://share.zertify.zuitt.co/certificate/ba6c40aa-d06c-44ba-a998-648e85198c69/"
  },
  {
    title: "Prompt Engineering for Web Developers",
    organization: "Scrimba",
    date: "Sep 2024",
    link: "https://coursera.org/share/eb60adf0d1c08799ce09826ce3b3c48d"
  },
  {
    title: "Introduction to MySQL",
    organization: "Zuitt - Coding Bootcamp",
    date: "May 2025",
    link: "https://share.zertify.zuitt.co/certificate/a6d00620-f2c7-47ee-9cf2-a91290b7b137/"
  },
  {
    title: "Introduction to Python",
    organization: "Zuitt - Coding Bootcamp",
    date: "May 2025",
    link: "https://share.zertify.zuitt.co/certificate/d868c74a-e060-4f6d-a06f-ea8c02e7cff2/"
  },
  {
    title: "Introduction to Django",
    organization: "Zuitt - Coding Bootcamp",
    date: "May 2025",
    link: "https://share.zertify.zuitt.co/certificate/e0b2375d-ba0a-4509-ac08-e0485fbd340e/"
  },
  {
    title: "Tester Essentials",
    organization: "Zuitt - Coding Bootcamp",
    date: "Jun 2025",
    link: "https://share.zertify.zuitt.co/certificate/a03dc3a0-6a83-4db5-8c21-c9537aefeac6/"
  },
  {
    title: "Introduction to Unit Testing",
    organization: "Zuitt - Coding Bootcamp",
    date: "Jul 2025",
    link: "https://share.zertify.zuitt.co/certificate/46813f77-ad5c-42aa-9c59-393d884893e6/"
  },
];

const TimelineItem = ({ children, icon: Icon, isLeft }) => {
  const [isVisible, setIsVisible] = useState(false);
  const itemRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    if (itemRef.current) observer.observe(itemRef.current);

    return () => {
      if (itemRef.current) observer.unobserve(itemRef.current);
    };
  }, []);

  return (
    <li ref={itemRef}>
      <hr className="bg-success w-1 h-20 mx-auto border-0" />
      <div className="timeline-middle">
        <div className={`w-10 h-10 rounded-full bg-success flex items-center justify-center transition-all duration-700 ${isVisible ? 'scale-100 rotate-0' : 'scale-0 rotate-180'}`}>
          <Icon className="w-5 h-5 text-base-100" />
        </div>
      </div>
      <div className={`${isLeft ? 'timeline-start lg:text-start' : 'timeline-end text-end'} mb-10 w-full transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : isLeft ? 'opacity-0 -translate-x-10' : 'opacity-0 translate-x-10'}`}>
        {children}
      </div>
      <hr className="bg-success" />
    </li>
  );
};

const ProfessionalBackground = () => {
  const [filter, setFilter] = useState('all');

  const allItems = [
    ...education.map(edu => ({ type: 'education', icon: GraduationCap, date: edu.year.split('-')[0], displayDate: edu.year, title: edu.school, subtitle: edu.course, data: edu })),
    ...experience.map(exp => ({ type: 'experience', icon: Briefcase, date: exp.duration.split('-')[1].trim(), displayDate: exp.duration, title: exp.position, subtitle: exp.company, data: exp })),
    ...certifications.map(cert => ({ type: 'certification', icon: Award, date: cert.date, displayDate: cert.date, title: cert.title, subtitle: cert.organization, data: cert }))
  ].sort((a, b) => new Date(b.date) - new Date(a.date));

  const filteredItems = filter === 'all' ? allItems : allItems.filter(item => item.type === filter);

  return (
    <div className="min-h-screen py-20 xl:px-50">
      <h1 className="text-primary-content text-4xl font-bold mb-10 py-5 relative">
        Professional Timeline
        <span className="absolute left-0 bottom-0 w-24 border-b-2 border-primary-content"></span>
      </h1>

      {/* Filter Buttons */}
      <div className="flex gap-2 flex-wrap mt-10 mb-20">
        {['all', 'certification', 'education', 'experience'].map((type) => {
          const Icon = type === 'all' ? Filter : type === 'certification' ? Award : type === 'education' ? GraduationCap : Briefcase;
          return (
            <button
              key={type}
              onClick={() => setFilter(type)}
              className={`px-4 py-2 rounded-lg transition-all flex items-center gap-2 hover:cursor-pointer transform hover:scale-110 hover:text-base-100 hover:bg-success ${filter === type ? 'bg-success text-base-100' : 'bg-base-200 text-primary-content hover:bg-base-300'}`}
            >
              <Icon className="w-4 h-4" />
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </button>
          );
        })}
      </div>

      <div className='flex justify-center mb-9'>
        <div className='bg-success text-base-100 px-4 py-2 rounded-full font-bold text-lg shadow-lg flex items-center gap-2'>
          <span>PRESENT</span>
        </div>
      </div>

      <ul className="timeline timeline-snap-icon max-w-6xl mx-auto timeline-vertical">
        {filteredItems.map((item, i) => (
          <TimelineItem key={i} icon={item.icon} isLeft={i % 2 === 0}>
            <h3 className="text-xl font-bold text-primary-content lg:border-b lg:border-success">{item.title}</h3>
            <p className="text-secondary-content">{item.subtitle}</p>
            <p className="text-sm opacity-70">{item.displayDate}</p>

            {item.type === 'certification' && (
              <a href={item.data.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-success hover:text-primary-content transition-colors group mt-2 block">
                <span className="font-medium">View Certificate</span>
                <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            )}

            {item.type === 'experience' && (
              <ul className="mt-2 text-sm opacity-70 text-left list-none hidden md:block">
                {item.data.responsibilities.map((resp, idx) => (
                  <li key={idx} className='my-2'><span className="text-success">▹</span> {resp}</li>
                ))}
              </ul>
            )}
          </TimelineItem>
        ))}
      </ul>

      <div className='flex justify-center '>
        <div className='bg-success text-base-100 px-4 py-2 rounded-full font-bold text-lg shadow-lg flex items-center gap-2'>
          <span className="text-2xl">★</span>
          <span>THE BEGINNING</span>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalBackground;
