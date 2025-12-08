import { useEffect, useState } from 'react';
import { teamDataByYear } from '../utils/TeamData';

// ========================
// Simple Team Member Card - Basic Circular Photos
// ========================

const TeamMemberCard = ({ member }) => (
  <div className="flex flex-col items-center text-center p-4">
    {/* Profile Image - Circular */}
    <div className="mb-4">
      <img
        className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full object-cover border-2 border-gray-200 dark:border-gray-600"
        src={member.img}
        alt={member.name}
      />
    </div>

    {/* Name and Position */}
    <div className="text-center">
      <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-1">
        {member.name}
      </h3>
      <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
        {member.position}
      </p>
      {member.verticle && (
        <p className="text-xs text-gray-900 dark:text-gray-900">
          {member.verticle}
        </p>
      )}
    </div>
  </div>
);

// ========================
// Simple Role Section - Basic Grid Layout
// ========================

const RoleSection = ({ title, members, columns }) => {
  if (members.length === 0) return null;

  const colsForSection = Math.min(columns, Math.max(members.length, 1));

  return (
    <div className="mb-12">
      {/* Section Header */}
      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
        {title}
      </h3>

      {/* Simple Grid Layout - Centered */}
      <div
        className="grid gap-6 sm:gap-8 justify-items-center mx-auto"
        style={{
          gridTemplateColumns: `repeat(${colsForSection}, minmax(0, 1fr))`,
          width: 'fit-content',
          maxWidth: '100%'
        }}
      >
        {members.map((member, index) => (
          <TeamMemberCard key={index} member={member} />
        ))}
      </div>
    </div>
  );
};

// ========================
// Main SAATeam Component
// ========================

const SAATeam = () => {
  const getColumnsForWidth = (width) => {
    if (width >= 1280) return 4; // xl and up
    if (width >= 768) return 3; // md and up
    if (width >= 640) return 2; // sm and up
    return 1;
  };

  const [columns, setColumns] = useState(() =>
    typeof window !== 'undefined' ? getColumnsForWidth(window.innerWidth) : 1
  );

  useEffect(() => {
    const handleResize = () => setColumns(getColumnsForWidth(window.innerWidth));
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const years = Object.keys(teamDataByYear).sort((a, b) => b - a);

  // Function to group team members by position for a given year
  const groupMembersByPosition = (teamData) => {
    return teamData.reduce((acc, member) => {
      const position = member.position.toLowerCase();
      
      if (position.includes('vice president') || position.includes('vp')) {
        if (!acc.vicePresident) acc.vicePresident = [];
        acc.vicePresident.push(member);
      } else if (position.includes('overall coordinator')) {
        if (!acc.overallCoordinators) acc.overallCoordinators = [];
        acc.overallCoordinators.push(member);
      } else if (position.includes('coordinator') && !position.includes('overall')) {
        if (!acc.coordinators) acc.coordinators = [];
        acc.coordinators.push(member);
      } else if (position.includes('core member')) {
        if (!acc.coreMembers) acc.coreMembers = [];
        acc.coreMembers.push(member);
      } else {
        if (!acc.others) acc.others = [];
        acc.others.push(member);
      }
      
      return acc;
    }, {});
  };

  return (
    <section className="mt-4 mb-4 sm:mt-6 sm:mb-6 md:mt-8 md:mb-8 lg:mt-10 lg:mb-10 rounded-2xl sm:rounded-3xl dark:ring-white/10 overflow-hidden">
      <div className="py-6 sm:py-8 md:py-10 lg:py-12 px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12 mx-auto max-w-screen-xl text-center relative overflow-hidden">
        
        {/* Header Section */}
        <div className="relative z-10 mb-8 sm:mb-12 md:mb-16 lg:mb-20">
          <h1 className="mb-3 sm:mb-4 md:mb-6 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold tracking-tight leading-tight text-gray-900 dark:text-gray-100 bg-gradient-to-r from-gray-900 to-blue-600 dark:from-gray-100 dark:to-gray-300 bg-clip-text text-transparent px-2 hover-underline-animation">
            SAA Team
          </h1>
   
          <p className="mb-4 sm:mb-6 md:mb-8 text-sm sm:text-base md:text-lg lg:text-xl font-normal text-gray-600 dark:text-[#A7ADBE] px-4 sm:px-8 md:px-12 lg:px-16 xl:px-32 leading-relaxed max-w-6xl mx-auto">
            Fostering Connections and Facilitating Tech Receiving Alumni Cooperation through Collaboration and Active Engagement.
          </p>
        </div>

        {/* All Teams - Continuous Scrollable Layout */}
        <div className="relative z-10">
          {years.map((year, yearIndex) => {
            const teamData = teamDataByYear[year] || [];
            if (teamData.length === 0) return null;

            const groupedMembers = groupMembersByPosition(teamData);

            return (
              <div key={year} className={`mb-20 sm:mb-24 md:mb-32 ${yearIndex > 0 ? 'pt-12 sm:pt-16 md:pt-20 border-t-2 border-gray-200 dark:border-gray-800' : ''}`}>
                {/* Year Header */}
                <div className="mb-12 sm:mb-16">
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-3 hover-underline-animation">
                    Team {year}
                  </h2>
                  <div className="h-1 w-24 sm:w-32 bg-gradient-to-r from-red-500 to-red-600 mx-auto rounded-full"></div>
                </div>

                {/* Team Sections for this year */}
                <RoleSection 
                  title="VICE PRESIDENT" 
                  members={groupedMembers.vicePresident || []}
                  columns={columns}
                  isCenter={true}
                />
                
                <RoleSection 
                  title="OVERALL COORDINATOR" 
                  members={groupedMembers.overallCoordinators || []}
                  columns={columns}
                />
                
                <RoleSection 
                  title="COORDINATORS" 
                  members={groupedMembers.coordinators || []}
                  columns={columns}
                />
                
                <RoleSection 
                  title="CORE MEMBERS" 
                  members={groupedMembers.coreMembers || []}
                  columns={columns}
                />
                
                {groupedMembers.others && groupedMembers.others.length > 0 && (
                  <RoleSection 
                    title="TEAM MEMBERS" 
                    members={groupedMembers.others}
                    columns={columns}
                  />
                )}
              </div>
            );
          })}
        </div>

        {/* Custom CSS */}
        <style jsx>{`
          @keyframes float {
            0%, 100% { transform: translateY(0px) scale(1); }
            50% { transform: translateY(-5px) scale(1.02); }
          }
          .group:hover {
            animation: float 2s ease-in-out infinite;
          }
          .group/icon:hover {
            animation: pulse 1s infinite;
          }
          @keyframes pulse {
            0%, 100% { transform: scale(1.1); }
            50% { transform: scale(1.15); }
          }
        `}</style>
      </div>
    </section>
  );
};

export default SAATeam;