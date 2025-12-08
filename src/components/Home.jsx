
import Navbar from './Header';
import logo from "../assets/saa_logo_no_background.png"

import AlumniChannelSection from './AlumniChannel';
import AlumniMemoir from './AlumniMemoir';
import FlagshipEvents from './FlagshipEvents';
const Home = () => {
  return (
    <div className="w-full min-h-screen bg-gradient-to-br dark:bg-transparent flex flex-col items-center px-3 sm:px-4 md:px-6 lg:px-8 overflow-x-hidden">

      <div className="relative w-full max-w-6xl pb-6 sm:pb-8 mt-20 sm:mt-24 md:mt-28 lg:mt-32 rounded-2xl sm:rounded-3xl dark:border-white/10 
              bg-white dark:bg-black text-gray-900 dark:text-white 
               dark:shadow-black/90 
              overflow-hidden z-10 backdrop-blur-md dark:ring-white/10 mx-2 sm:mx-4">
        <div className="flex items-center justify-center flex-col overflow-hidden px-3 sm:px-4 md:px-6 lg:px-8">
          <img
            src={logo}
            alt="SAA logo"
            width={400}
            height={400}
            className="dark:invert mt-4 sm:mt-6 lg:mt-7 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96 max-w-full"
          />
          <p className="w-full max-w-4xl text-xs sm:text-sm md:text-base text-gray-600 dark:text-white/80 text-center mx-auto mb-4 sm:mb-6 lg:mb-8 leading-relaxed px-2">
            The SAA community enhances the institute and student growth through organizing events like Convocation, Alumni Induction Dinner, Dashak, Farewell, Alumni Day, Graduating batch see-off ceremony, Soon to be Alumnus, and Ask an Alumnus. The society fosters strong connections and facilitates continuous improvement and development.
          </p>
        </div>
      </div>
      
      <div className="w-full max-w-7xl px-2 sm:px-4">
        <FlagshipEvents/>
      </div>

      <div className="w-full overflow-x-hidden">
        <AlumniChannelSection />
      </div>
      
      <div className="w-full overflow-x-hidden">
        <AlumniMemoir />
      </div>
      
    </div>
  );
};

export default Home;