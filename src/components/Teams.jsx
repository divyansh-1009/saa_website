import SAATeam from './TeamCard.jsx';

export default function Teams() {
  return (
    <div className="relative w-full min-h-screen pt-20 sm:pt-24 pb-12 overflow-x-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30 dark:from-gray-950 dark:via-blue-950/30 dark:to-purple-950/30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)] dark:bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.05),transparent_50%)]"></div>
      </div>
      <div className="relative z-10 px-2 sm:px-4">
        <SAATeam />
      </div>
    </div>
  );
}


