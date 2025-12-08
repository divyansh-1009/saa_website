
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/pagination';
// import { Pagination, Autoplay } from 'swiper/modules';
// import krati from "../assets/Memoir/memoir_krati.jpeg"
// import prabhash from "../assets/Memoir/memoir_prabhas.jpeg"
// import ujjwal from "../assets/Memoir/memoir_ujjwal.jpeg"
// import rishabh from "../assets/Memoir/memoir_rishabh.jpeg"


// const alumniData = [
//   {
//     name: 'Rishabh Shukla',
//     position: 'Product Manager at Paytm',
//     quote: 'The technological landscape evolves rapidly, making it crucial for professionals in tech, business, or marketing to stay updated with the latest tools and trends',
//     title: 'Prioritize continuous upskilling',
//     img: rishabh,
//     linkedin: 'https://www.linkedin.com/in/rishabh-rs-shukla/'
//   },
//   {
//     name: 'Prabhash Jain',
//     position: 'Associate Software Engineer, Microsoft',
//     quote: 'If you consider the process as an investment towards the end goal, then you\'re creating far worse opportunity cost for yourself. So, for all the selfish reasons, start enjoying the process.',
//     title: 'Don\'t try to get too far ahead of yourself',
//     img: prabhash,
//     linkedin: 'https://www.linkedin.com/in/jainprabhash/'
//   },
//   {
//     name: 'Ujjwal Anand',
//     position: 'Senior Software Engineer, Razorpay',
//     quote: 'Without doing something wrong, you will never know that you are doing anything wrong... So talk to your seniors, reach out to your alumni, learn to benefit from their experiences.',
//     title: 'Benefit from the experiences of your seniors',
//     img: ujjwal,
//     linkedin: 'https://www.linkedin.com/in/imujjwalanand/'
//   },
//   {
//     name: 'Krati Saxena',
//     position: 'Senior Software Engineer, Alien Technology Transfer',
//     quote: 'My aversion to deadline pressure, the prospect of a chill life coupled with continuous learning fueled my passion for research.',
//     title: 'Avoid Deadline pressure',
//     img: krati,
//     linkedin: 'https://www.linkedin.com/in/kratisaxena/'
//   },
// ];

// const AlumniMemoir = () => {
//   return (
//     <section className="mt-8 bg-white">
//       <div className="py-8 px-4 mx-auto max-w-screen-xl text-center">
//         <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-black md:text-5xl lg:text-6xl">
//           Alumni Memoirs
//         </h1>
//         <p className="mb-8 text-4xl font-normal text-black lg:text-xl sm:px-28 xl:px-128">
//           Everybody has a story. And there's something to be learnt from every experience.
//         </p>

//         <Swiper
//           modules={[Pagination, Autoplay]}
//           spaceBetween={30}
//           slidesPerView={1}
//           pagination={{ clickable: true }}
//           autoplay={{ delay: 3000 }}
//           loop={true}
//           className="bg-[#f1eedc] rounded-lg p-6"
//         >
//           {alumniData.map((alumnus, idx) => (
//             <SwiperSlide key={idx}>
//               <figure className="flex flex-col items-center justify-center p-8 text-center">
//                 <blockquote className="max-w-2xl mx-auto mb-4 text-gray-950 lg:mb-8">
//                   <h3 className="text-lg font-semibold text-black">{alumnus.title}</h3>
//                   <p className="my-4">"{alumnus.quote}"</p>
//                 </blockquote>
//                 <figcaption className="flex items-center justify-center">
//                   <a href={alumnus.linkedin} target="_blank" rel="noopener noreferrer">
//                     <img
//                       className="h-12 w-12 rounded-full object-cover"
//                       src={alumnus.img}
//                       alt={alumnus.name}
//                       width={48}
//                       height={48}
//                     />
//                   </a>
//                   <div className="space-y-0.5 font-medium text-left rtl:text-right ms-3">
//                     <div>{alumnus.name}</div>
//                     <div className="text-sm text-gray-950">{alumnus.position}</div>
//                   </div>
//                 </figcaption>
//               </figure>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </section>
//   );
// };

// export default AlumniMemoir;

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import krati from "../assets/Memoir/memoir_krati.jpeg"
import prabhash from "../assets/Memoir/memoir_prabhas.jpeg"
import ujjwal from "../assets/Memoir/memoir_ujjwal.jpeg"
import rishabh from "../assets/Memoir/memoir_rishabh.jpeg"

const alumniData = [
  {
    name: 'Rishabh Shukla',
    position: 'Product Manager at Paytm',
    quote: 'The technological landscape evolves rapidly, making it crucial for professionals in tech, business, or marketing to stay updated with the latest tools and trends',
    title: 'Prioritize continuous upskilling',
    img: rishabh,
    linkedin: 'https://www.linkedin.com/in/rishabh-rs-shukla/'
  },
  {
    name: 'Prabhash Jain',
    position: 'Associate Software Engineer, Microsoft',
    quote: 'If you consider the process as an investment towards the end goal, then you\'re creating far worse opportunity cost for yourself. So, for all the selfish reasons, start enjoying the process.',
    title: 'Don\'t try to get too far ahead of yourself',
    img: prabhash,
    linkedin: 'https://www.linkedin.com/in/jainprabhash/'
  },
  {
    name: 'Ujjwal Anand',
    position: 'Senior Software Engineer, Razorpay',
    quote: 'Without doing something wrong, you will never know that you are doing anything wrong... So talk to your seniors, reach out to your alumni, learn to benefit from their experiences.',
    title: 'Benefit from the experiences of your seniors',
    img: ujjwal,
    linkedin: 'https://www.linkedin.com/in/imujjwalanand/'
  },
  {
    name: 'Krati Saxena',
    position: 'Senior Software Engineer, Alien Technology Transfer',
    quote: 'My aversion to deadline pressure, the prospect of a chill life coupled with continuous learning fueled my passion for research.',
    title: 'Avoid Deadline pressure',
    img: krati,
    linkedin: 'https://www.linkedin.com/in/kratisaxena/'
  },
];
//from slate 50
const AlumniMemoir = () => {
  return (
    <section className="mt-10 mb-10 bg-white dark:bg-black/10 rounded-3xl shadow-xl border border-gray-100 dark:border-white/10 backdrop-blur-md dark:ring-white/10">
      <div className="py-12 px-6 mx-auto text-center relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-red-200/20 dark:bg-white/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-200/20 dark:bg-white/3 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
        
        {/* Header Section */}
        <div className="relative z-10 mb-12">
        
          
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight leading-none text-gray-900 dark:text-gray-100 md:text-5xl lg:text-6xl bg-gradient-to-r from-gray-900 to-red-600 dark:from-gray-100 dark:to-gray-300 bg-clip-text text-transparent">
            Alumni Memoirs
          </h1>
   
          <p className="mb-8 text-xl font-normal text-gray-600 dark:text-white/80 lg:text-2xl sm:px-16 xl:px-48 leading-relaxed">
            Everybody has a story. And there's something to be learnt from every experience.
          </p>
        </div>

        {/* Enhanced Swiper Container */}
        <div className="relative z-10">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ 
              clickable: true,
              bulletClass: 'swiper-pagination-bullet memoir-pagination-bullet',
              bulletActiveClass: 'memoir-pagination-bullet-active'
            }}
            autoplay={{ 
              delay: 4000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true 
            }}
            loop={true}
            speed={600}
            grabCursor={true}
            touchRatio={1}
            threshold={5}
            className="memoir-swiper bg-white/80 dark:bg-black/80 rounded-2xl p-8 shadow-2xl backdrop-blur-md border border-white/50 dark:border-white/10 hover:shadow-3xl transition-all duration-500"
          >
            {alumniData.map((alumnus, idx) => (
              <SwiperSlide key={idx}>
                <figure className="group relative flex flex-col items-center justify-center p-8 text-center">
                  {/* Decorative quote icon */}
                  <div className="absolute top-2 left-6 text-red-200/40 dark:text-red-700/30 text-6xl font-serif leading-none">
                    "
                  </div>
                  
                  <blockquote className="relative max-w-5xl mx-auto mb-8 text-gray-800 dark:text-gray-200 lg:mb-10 z-10">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight leading-tight">
                      {alumnus.title}
                    </h3>
                    <p className="my-6 text-gray-700 dark:text-gray-300 italic text-xl leading-relaxed font-light relative px-8">
                      <span className="text-red-500 dark:text-red-400 text-3xl absolute -left-2 -top-2">"</span>
                      {alumnus.quote}
                      <span className="text-red-500 dark:text-red-400 text-3xl ml-1">"</span>
                    </p>
                  </blockquote>
                  
                  <figcaption className="flex items-center justify-center group-hover:scale-105 transition-all duration-300">
                    <a 
                      href={alumnus.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="relative transition-all hover:scale-110 duration-300 group/avatar mr-5"
                    >
                      {/* Glowing ring effect */}
                      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-red-500 via-red-500 to-red-700 dark:from-[#3b82f6] dark:via-[#3b82f6] dark:to-[#1d4ed8] opacity-0 group-hover/avatar:opacity-30 blur-md transition-opacity duration-300 animate-pulse"></div>
                      
                      <img
                        className="relative h-20 w-20 rounded-full object-cover ring-4 ring-red-200 dark:ring-[#1f2937] shadow-xl group-hover/avatar:ring-red-400 dark:group-hover/avatar:ring-[#3b82f6] transition-all duration-300"
                        src={alumnus.img}
                        alt={alumnus.name}
                        width={80}
                        height={80}
                      />
                      
                      {/* LinkedIn indicator */}
                      <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-red-600 dark:bg-[#3b82f6] rounded-full flex items-center justify-center shadow-lg">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"/>
                        </svg>
                      </div>
                    </a>
                    
                    <div className="space-y-1 font-medium text-left">
                      <div className="text-gray-900 dark:text-white font-bold text-xl group-hover:text-red-600 dark:group-hover:text-[#60a5fa] transition-colors duration-300 hover-underline-animation">
                        {alumnus.name}
                      </div>
                      <div className="text-base text-gray-600 dark:text-gray-400 font-medium">
                        {alumnus.position}
                      </div>
                    </div>
                  </figcaption>
                </figure>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Enhanced Custom CSS */}
        <style jsx>{`
          .memoir-swiper {
            min-height: 400px;
          }
          
          .memoir-pagination-bullet {
            width: 12px !important;
            height: 12px !important;
            background: linear-gradient(135deg, #ffffff, #e5e7eb) !important; /* light grey/white */
            opacity: 0.7 !important;
            transition: all 0.3s ease !important;
            border: 2px solid rgba(0,0,0,0.1) !important;
          }
          
          .memoir-pagination-bullet:hover {
            transform: scale(1.1) !important;
            opacity: 0.8 !important;
          }
          
          .dark .memoir-pagination-bullet {
            background: linear-gradient(135deg, #1f2937, #111827) !important; /* dark greys */
            border-color: rgba(255,255,255,0.15) !important;
          }
          
          .memoir-pagination-bullet-active {
            background: linear-gradient(135deg, #ff0000, #b30000) !important; /* red */
            opacity: 1 !important;
            transform: scale(1.3) !important;
            border: 2px solid rgba(255, 0, 0, 0.3) !important;
            box-shadow: 0 0 20px rgba(255, 0, 0, 0.35) !important;
          }
          
          .dark .memoir-pagination-bullet-active {
            background: linear-gradient(135deg, #60a5fa, #3b82f6) !important; /* blue */
            border: 2px solid rgba(96, 165, 250, 0.35) !important;
            box-shadow: 0 0 20px rgba(96, 165, 250, 0.4) !important;
          }
          
          .memoir-swiper:hover {
            transform: translateY(-2px);
          }
          
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
          }
          
          .memoir-swiper::before {
            content: '';
            position: absolute;
            top: -10px;
            left: -10px;
            right: -10px;
            bottom: -10px;
            background: linear-gradient(45deg, transparent, rgba(255, 0, 0, 0.1), transparent);
            border-radius: 24px;
            opacity: 0;
            transition: opacity 0.3s ease;
            z-index: -1;
          }
          
          .memoir-swiper:hover::before {
            opacity: 1;
          }
        `}</style>
      </div>
    </section>
  );
};

export default AlumniMemoir;