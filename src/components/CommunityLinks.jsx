import GlassIcons from './GlassIcons';
import {
  FaLinkedin,
  FaWhatsapp,
  FaFacebook,
  FaDiscord,
  FaTelegram,
  FaYoutube,
  FaTwitter,
  FaInstagram
} from 'react-icons/fa';

export default function CommunityLinks() {

  const items = [
    {
      icon: <FaLinkedin />,
      color: 'blue',
      label: 'LinkedIn Group',
      url: 'https://www.linkedin.com/school/iit-jodhpur'
    },
    {
      icon: <FaWhatsapp />,
      color: 'green',
      label: 'WhatsApp Community',
      url: '#'
    },
    {
      icon: <FaFacebook />,
      color: 'blue',
      label: 'Facebook Alumni Group',
      url: 'https://www.facebook.com/iitjodhpur'
    },
    {
      icon: <FaDiscord />,
      color: 'indigo',
      label: 'Discord Server',
      url: '#'
    },
    {
      icon: <FaTelegram />,
      color: 'blue',
      label: 'Telegram Channel',
      url: '#'
    },
    {
      icon: <FaYoutube />,
      color: 'red',
      label: 'YouTube Channel',
      url: 'https://www.youtube.com/@IITJodhpur'
    },
    {
      icon: <FaTwitter />,
      color: 'blue',
      label: 'Twitter/X Community',
      url: 'https://twitter.com/iitjodhpur'
    },
    {
      icon: <FaInstagram />,
      color: 'gray',
      label: 'Instagram',
      url: 'https://www.instagram.com/iitjodhpur'
    }
  ];

  return (
    <div className="min-h-screen pt-20 sm:pt-24 md:pt-28 pb-12 sm:pb-16 px-3 sm:px-4 md:px-6 lg:px-8 bg-gray-50 dark:bg-gray-950 mt-4 sm:mt-6 overflow-x-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16 animate-fade-in px-2">
          <h1 className="mb-3 sm:mb-4 md:mb-6 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold tracking-tight leading-tight text-gray-900 dark:text-gray-100 bg-gradient-to-r from-gray-900 to-blue-600 dark:from-gray-100 dark:to-gray-300 bg-clip-text text-transparent px-2">
            Community Links
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed px-2">
            Stay connected with the IIT Jodhpur alumni community across multiple platforms. 
            Join discussions, share opportunities, and build lasting connections.
          </p>
        </div>

        {/* Links Grid */}
        <div className="mb-16 sm:mb-20 md:mb-24 relative">
          <GlassIcons items={items} className="custom-class"/>
        </div>

        {/* Call to Action */}
        <div className="mt-20 sm:mt-24 md:mt-28 lg:mt-32 text-center bg-white dark:bg-gray-800 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-2xl border-2 border-gray-200 dark:border-gray-600 animate-fade-in mx-2">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
            Can't find what you're looking for?
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base md:text-lg px-2">
            Reach out to us and we'll help you connect with the right community.
          </p>
          <a
            href="mailto:saa@iitj.ac.in"
            className="inline-block bg-red-600 dark:bg-blue-600 text-white font-semibold px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base rounded-full hover:bg-red-700 dark:hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
}