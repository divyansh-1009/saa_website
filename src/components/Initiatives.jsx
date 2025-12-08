import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Masonry from "./Masonry";
import { useImageAspectRatio } from '../hooks/useImageAspectRatio';
import dashak_1 from '../assets/dashak_1.JPG';
import dashak_2 from '../assets/dashak_2.JPG';
import dashak_3 from '../assets/dashak_3.JPG';
import dashak_4 from '../assets/dashak_4.JPG';
import dashak_5 from '../assets/dashak_5.JPG';
import dashak_6 from '../assets/dashak_6.JPG';
import convocation_1 from '../assets/convocation_1.jpg';
import convocation_2 from '../assets/convocation_2.jpg';
import convocation_3 from '../assets/convocation_3.jpg';
import convocation_4 from '../assets/convocation_4.jpg';
import convocation_5 from '../assets/convocation_5.jpg';
import convocation_6 from '../assets/convocation_6.jpg';
import convocation_7 from '../assets/convocation_7.jpg';
import convocation_8 from '../assets/convocation_8.jpg';
import convocation_9 from '../assets/convocation_9.jpg';
import farewell_1 from '../assets/farewell_1.jpeg';
import farewell_2 from '../assets/farewell_2.jpeg';
import farewell_3 from '../assets/farewell_3.jpeg';
import farewell_4 from '../assets/farewell_4.jpeg';
import farewell_5 from '../assets/farewell_5.jpeg';
import farewell_6 from '../assets/farewell_6.jpeg';

const ImageCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentImageAspectRatio = useImageAspectRatio(images[currentIndex]);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div 
      className="relative w-full overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800 transition-all duration-500"
      style={{
        aspectRatio: currentImageAspectRatio ? `${currentImageAspectRatio}` : '16/9',
        minHeight: '256px',
        maxHeight: '600px'
      }}
    >
      <AnimatePresence mode="wait">
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="w-full h-full object-cover"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.3 }}
        />
      </AnimatePresence>

      <button
        onClick={prevImage}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-gray-800/80 hover:bg-white dark:hover:bg-gray-700 text-gray-800 dark:text-white p-2 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
        aria-label="Previous image"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={nextImage}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-gray-800/80 hover:bg-white dark:hover:bg-gray-700 text-gray-800 dark:text-white p-2 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
        aria-label="Next image"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-200 ${
              index === currentIndex
                ? 'bg-white dark:bg-gray-200 w-6'
                : 'bg-white/50 dark:bg-gray-400/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

const EventModal = ({ event, isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 dark:bg-black/80 z-50 backdrop-blur-sm"
          />

          <div className="fixed inset-0 z-50 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ type: 'spring', duration: 0.5 }}
                className="relative w-full max-w-4xl bg-white dark:bg-gray-900 rounded-2xl shadow-2xl overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 z-10 bg-white/90 dark:bg-gray-800/90 hover:bg-white dark:hover:bg-gray-700 text-gray-800 dark:text-white p-2 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
                  aria-label="Close modal"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                <div className="p-6 sm:p-8">
                  <ImageCarousel images={event.images} />

                  <div className="mt-6 sm:mt-8">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                      {event.title}
                    </h2>
                    
                    <div className="prose prose-lg dark:prose-invert max-w-none">
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                        {event.fullDescription}
                      </p>
                      
                      {event.highlights && (
                        <div className="mt-6">
                          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                            Highlights
                          </h3>
                          <ul className="space-y-2">
                            {event.highlights.map((highlight, index) => (
                              <li key={index} className="flex items-start gap-3">
                                <span className="text-red-600 dark:text-red-400 mt-1">•</span>
                                <span className="text-gray-700 dark:text-gray-300">{highlight}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default function Initiatives() {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const flagshipEvents = [
    {
      title: "Dashak",
      desc: "Our flagship alumni festival bringing together the IITJ family for celebrations, networking, and cultural exchange.",
      image: dashak_2,
      images: [dashak_1, dashak_2, dashak_3,dashak_4,dashak_5,dashak_6],
      fullDescription:
        "Dashak is the prestigious 10-yearly alumni meetup of IIT Jodhpur — a grand celebration of connection, nostalgia, and pride. More than a reunion, Dashak honors the journeys of alumni who have carried the institute’s legacy across the globe. The event serves as a bridge between the past and the present, bringing together graduates, faculty, and current students to celebrate milestones and envision the future. Through keynote sessions, cultural evenings, campus walks, and networking opportunities, Dashak revives the cherished memories of campus life while strengthening the lifelong bond that defines the IIT Jodhpur community.",
      highlights: [
        'Alumni networking sessions across multiple batches',
        'Inspiring keynote speeches from successful alumni',
        'Campus tours highlighting new facilities and developments',
        'Cultural performances and entertainment',
        'Recognition of outstanding alumni achievements',
        'Interactive workshops and panel discussions'
      ]
    },
    {
      title: "Convocation",
      desc: "A milestone event honoring our graduates as they step into the next chapter of their journey with pride and achievement.",
      image: convocation_4,
      images: [convocation_1, convocation_2, convocation_3,convocation_4,convocation_5,convocation_6,convocation_7,convocation_8,convocation_9],
      fullDescription:
        "The Convocation ceremony is a momentous occasion marking the culmination of years of hard work and dedication. It's where students transition from being members of the institute to becoming part of the illustrious alumni network. The ceremony features the conferring of degrees, inspiring speeches from distinguished guests, and the symbolic passing of the torch to the next generation. It's not just an end, but the beginning of a lifelong association with IIT Jodhpur.",
      highlights: [
        'Formal degree conferral ceremony',
        'Addresses by eminent personalities and chief guests',
        'Recognition of academic excellence and achievements',
        'Traditional academic procession',
        'Official induction into the alumni association',
        'Memorable moments with faculty, friends, and family'
      ]
    },
    {
      title: "Farewell",
      desc: "A heartfelt send-off for our graduating students, filled with nostalgia, celebration, and wishes for a bright future ahead.",
      image: farewell_1,
      images: [farewell_1, farewell_2, farewell_3,farewell_4,farewell_5,farewell_6],
      fullDescription:
        "The Farewell event is an emotional celebration organized by juniors to bid adieu to graduating seniors. It's a night filled with nostalgia, laughter, and tears as students reminisce about their time at IIT Jodhpur. The event includes cultural performances, heartfelt speeches, fun activities, and awards that capture the unique personalities and contributions of each graduate. It's a beautiful transition from student life to alumni status, marking the beginning of new adventures while celebrating the bonds formed during their time at the institute.",
      highlights: [
        'Emotional speeches and memories shared',
        'Cultural performances and entertainment',
        'Fun awards and recognition',
        'Photo sessions and memory book signing',
        'Dinner and celebration with peers and faculty',
        'Traditional passing of responsibilities to juniors'
      ]
    },
  ];

  const initiatives = [
    {
      title: "Alumni Student Mentorship Program",
      desc: "Pairing experienced alumni with current students to provide guidance, career advice, and networking opportunities.",
      image: dashak_1,
      images: [dashak_1, dashak_2, dashak_3],
      fullDescription:
        "The Alumni Student Mentorship Program connects current IIT Jodhpur students with experienced alumni who serve as mentors. This structured program provides personalized guidance on career development, academic planning, and professional networking. Mentors share their industry insights, help with resume building, interview preparation, and offer valuable advice on navigating the transition from academic life to professional careers. The program fosters long-term relationships that extend beyond graduation, creating a supportive network for lifelong success.",
      highlights: [
        'One-on-one mentorship matching based on interests and career goals',
        'Regular virtual and in-person mentoring sessions',
        'Career guidance and industry insights from experienced professionals',
        'Networking opportunities with alumni across various sectors',
        'Resume review and interview preparation support',
        'Long-term professional relationships and guidance'
      ]
    },
    {
      title: "Mock Interviews",
      desc: "Helping students prepare for placements and internships with realistic interview simulations by alumni and professionals.",
      image: convocation_1,
      images: [convocation_1, convocation_2, convocation_3],
      fullDescription:
        "The Mock Interviews program provides students with realistic interview experiences conducted by alumni and industry professionals. Participants undergo comprehensive interview simulations that mirror actual placement and internship processes. The program covers technical interviews, behavioral questions, system design problems, and industry-specific scenarios. Alumni interviewers provide constructive feedback, tips for improvement, and insights into what employers look for in candidates. This hands-on preparation builds confidence and helps students perform better in real interviews.",
      highlights: [
        'Realistic interview simulations by industry professionals',
        'Technical and behavioral interview practice',
        'Detailed feedback and improvement suggestions',
        'Industry-specific interview scenarios and questions',
        'Confidence building through repeated practice sessions',
        'Insights into employer expectations and evaluation criteria'
      ]
    },
    {
      title: "Legacy",
      desc: "A long-term impact program: caution depot, money donation, reading rooms, co-working spaces, and game rooms for the IITJ community.",
      image: farewell_2,
      images: [farewell_2, farewell_3, farewell_4],
      fullDescription:
        "The Legacy program represents our commitment to giving back to the IIT Jodhpur community through sustainable impact initiatives. This comprehensive program includes establishing caution depots for emergency financial support, creating dedicated reading rooms and study spaces, developing modern co-working areas, and providing recreational facilities like game rooms. Alumni contributions fund these initiatives, ensuring that current and future students have access to resources that enhance their academic experience and overall well-being at the institute.",
      highlights: [
        'Caution depot for emergency financial assistance',
        'Modern reading rooms and study spaces',
        'Professional co-working areas for collaboration',
        'Recreational facilities including game rooms',
        'Sustainable funding through alumni contributions',
        'Enhanced campus facilities for student community'
      ]
    },
    {
      title: "Roommate Rewind",
      desc: "A new tradition where juniors host their seniors, reliving memories, gaining guidance, and fostering heartfelt reunions.",
      image: dashak_3,
      images: [dashak_3, dashak_4, dashak_5],
      fullDescription:
        "Roommate Rewind is a cherished tradition where junior students host their senior counterparts, creating opportunities for intergenerational bonding and knowledge transfer. During these intimate gatherings, seniors share their IIT Jodhpur experiences, offer guidance on academic and personal matters, and provide insights into life after graduation. The program strengthens the institute's community bonds, preserves institutional traditions, and ensures that valuable experiences and wisdom are passed down through generations of students.",
      highlights: [
        'Intergenerational bonding between juniors and seniors',
        'Knowledge sharing and mentorship opportunities',
        'Preservation of institutional traditions and culture',
        'Personal guidance on academic and career matters',
        'Heartfelt reunions and memory sharing',
        'Strengthening of community bonds across batches'
      ]
    },
    {
      title: "Intern Bridge",
      desc: "Bridging academic learning with real-world experience through daily updates, opportunities, and guidance for career readiness.",
      image: convocation_3,
      images: [convocation_3, convocation_4, convocation_5],
      fullDescription:
        "Intern Bridge serves as a vital connection between academic learning and professional experience, helping students navigate the complex landscape of internships and job placements. The program provides daily updates on internship opportunities, application guidance, and interview preparation. Alumni mentors offer insights into different industries, help with resume optimization, and provide feedback on application materials. This comprehensive support system ensures that students are well-prepared to secure meaningful internships that align with their career goals.",
      highlights: [
        'Daily updates on internship and job opportunities',
        'Application guidance and resume optimization',
        'Interview preparation and mock sessions',
        'Industry insights from alumni mentors',
        'Career guidance and goal setting support',
        'Comprehensive preparation for professional opportunities'
      ]
    },
    {
      title: "Memoirs Lane",
      desc: "Celebrating the memories of our graduating batch—friendships, experiences, and stories that shaped their IITJ journey.",
      image: farewell_4,
      images: [farewell_4, farewell_5, farewell_6],
      fullDescription:
        "Memoirs Lane is a heartfelt celebration of the graduating batch's journey through IIT Jodhpur. This program captures and preserves the unique stories, friendships, challenges, and triumphs that define each student's experience at the institute. Through photo exhibitions, video testimonials, written memoirs, and interactive sessions, graduating students share their most memorable moments. The program creates a lasting legacy of experiences that inspires future generations and strengthens the bonds between alumni and current students.",
      highlights: [
        'Photo exhibitions and video testimonials',
        'Written memoirs and personal stories',
        'Interactive sessions sharing memorable experiences',
        'Preservation of institutional memories and traditions',
        'Inspiration for future generations of students',
        'Strengthening alumni-current student connections'
      ]
    },
    {
      title: "Alumni Induction Dinner",
      desc: "A special dinner welcoming graduating students into the alumni community, fostering connections and celebrating their journey.",
      image: dashak_4,
      images: [dashak_4, dashak_5, dashak_6],
      fullDescription:
        "The Alumni Induction Dinner marks a significant milestone in every graduating student's journey, formally welcoming them into the prestigious IIT Jodhpur alumni community. This elegant dinner brings together graduating students, faculty, and alumni for an evening of celebration, reflection, and networking. Distinguished alumni speakers share their post-graduation experiences, while the ceremony officially inducts graduates into the alumni network. The event symbolizes the transition from student life to alumni status and celebrates the beginning of a lifelong association with the institute.",
      highlights: [
        'Formal induction ceremony into alumni community',
        'Elegant dinner with faculty and alumni',
        'Speeches by distinguished alumni speakers',
        'Networking opportunities with alumni network',
        'Celebration of academic achievements and journey',
        'Symbolic transition from student to alumni status'
      ]
    },
    {
      title: "Ask an Alumnus sessions",
      desc: "Interactive talks and networking opportunities where distinguished alumni share career insights, experiences, and guidance with current students.",
      image: convocation_8,
      images: [convocation_8, convocation_9, convocation_1],
      fullDescription:
        "Ask an Alumnus sessions provide a platform for distinguished alumni to share their professional journeys, career insights, and valuable experiences with current students. These interactive sessions cover diverse topics including industry trends, career planning, entrepreneurship, work-life balance, and overcoming professional challenges. Alumni speakers offer practical advice, answer student questions, and provide networking opportunities. The sessions bridge the gap between academic learning and professional reality, inspiring students and helping them make informed career decisions.",
      highlights: [
        'Interactive talks by distinguished alumni speakers',
        'Career insights and professional guidance',
        'Industry trends and future outlook discussions',
        'Networking opportunities with alumni professionals',
        'Q&A sessions and personal career advice',
        'Inspiration and motivation for career planning'
      ]
    },
    // {
    //   title: "Crack The Call",
    //   desc: "Alumni-led mock internship interviews where 3rd-year students gain real-world practice, insider feedback, and confidence to crack their internship calls.",
    //   image: farewell_3,
    //   images: [farewell_3, farewell_1, farewell_2],
    //   fullDescription:
    //     "Crack The Call is an intensive mock interview program specifically designed for third-year students preparing for internship placements. Experienced alumni conduct realistic interview simulations that replicate actual company recruitment processes. The program covers technical interviews, coding challenges, system design problems, and behavioral questions. Participants receive detailed feedback on their performance, communication skills, and technical knowledge. This hands-on preparation builds confidence, improves interview skills, and significantly increases the chances of securing coveted internship positions.",
    //   highlights: [
    //     'Mock interviews conducted by experienced alumni',
    //     'Realistic simulation of company recruitment processes',
    //     'Technical and behavioral interview practice',
    //     'Detailed performance feedback and improvement tips',
    //     'Coding challenges and system design problems',
    //     'Confidence building for actual internship interviews'
    //   ]
    // },
  ];

  // Prepare masonry items for all events and initiatives
  const masonryItems = [
    ...flagshipEvents.map((event, idx) => ({
      id: `flagship-${idx}`,
      img: event.image,
      url: '#',
      height: idx === 0 ? 800 : idx === 1 ? 700 : 600,
      title: event.title,
      desc: event.desc,
      isFlagship: true,
      eventData: event
    })),
    ...initiatives.map((initiative, idx) => ({
      id: `initiative-${idx}`,
      img: initiative.image,
      url: '#',
      height: [500, 600, 450, 550, 650, 500, 600, 450, 550][idx],
      title: initiative.title,
      desc: initiative.desc,
      isFlagship: true,
      eventData: initiative
    }))
  ];
  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="relative z-10 text-gray-900 dark:text-gray-100 transition-colors duration-300">
        <header className="relative w-full pt-20 sm:pt-24 md:pt-32 pb-16 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h1
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight mb-6"
            >
              Our Initiatives
            </h1>
            <p
              className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto"
            >
              Connecting alumni, fostering collaboration, and driving impact
              through innovative programs, events, and traditions.
            </p>
          </div>
        </header>

        <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <h2
            className="text-2xl sm:text-3xl font-semibold text-center mb-8 sm:mb-12"
          >
            Our Key Initiatives & Events
          </h2>

          <div className="w-full" style={{ minHeight: '800px' }}>
            <Masonry
              items={masonryItems}
              ease="power3.out"
              duration={0.6}
              stagger={0.05}
              animateFrom="bottom"
              scaleOnHover={true}
              hoverScale={0.95}
              blurToFocus={true}
              colorShiftOnHover={false}
              onItemClick={(item) => {
                if (item.isFlagship) {
                  setSelectedEvent(item.eventData);
                }
              }}
            />
          </div>
        </section>
      </div>

      <EventModal
        event={selectedEvent}
        isOpen={selectedEvent !== null}
        onClose={() => setSelectedEvent(null)}
      />
    </div>
  );
}