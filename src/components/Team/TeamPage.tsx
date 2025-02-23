import Image from "next/image";

const TeamPage: React.FC = () => {
  return (
    <div className="flex flex-col bg-black">
  <h1 className="text-4xl font-bold text-white mb-16 text-center w-full px-4 mt-24">Meet Our Team</h1>

  <div className="flex flex-col w-full">

    {/* MechTeam */}
    <div className="flex items-center w-full mb-0">
      <div className="flex-shrink-0 w-1/2">
        <Image 
          src="/images/MechTeam.jpg" 
          width={1600} 
          height={1000} 
          alt="Mechanical Team" 
          className="object-cover w-full"  
        />
      </div>
      <div className="flex flex-col pl-8 w-1/2">
        <h2 className="text-3xl font-semibold text-white mb-4">Mechanical Team</h2>
        <p className="text-lg text-gray-400">Our Mechanical Team specializes in the design and development of innovative mechanical systems, ensuring functionality and efficiency in every project. They work on cutting-edge designs and bring technical excellence to our projects with creativity and precision.</p>
      </div>
    </div>

    {/* ElectricalTeam */}
    <div className="flex items-center w-full mb-0">
      <div className="flex-shrink-0 w-1/2">
        <Image 
          src="/images/ElectricalTeam.jpg" 
          width={1600} 
          height={1000} 
          alt="Electrical Team" 
          className="object-cover w-full" 
        />
      </div>
      <div className="flex flex-col pl-8 w-1/2">
        <h2 className="text-3xl font-semibold text-white mb-4">Electrical Team</h2>
        <p className="text-lg text-gray-400">Our Electrical Team is dedicated to developing reliable electrical systems that power our designs with precision and safety at the core. They ensure that all electrical components work seamlessly with other parts of the design to ensure optimal performance and safety.</p>
      </div>
    </div>

    {/* SoftwareTeam */}
    <div className="flex items-center w-full mb-0">
      <div className="flex-shrink-0 w-1/2">
        <Image 
          src="/images/SoftwareTeam.jpg" 
          width={1600} 
          height={1000} 
          alt="Software Team" 
          className="object-cover w-full" 
        />
      </div>
      <div className="flex flex-col pl-8 w-1/2">
        <h2 className="text-3xl font-semibold text-white mb-4">Software Team</h2>
        <p className="text-lg text-gray-400">Our Software Team is responsible for creating cutting-edge software solutions that integrate seamlessly with our hardware systems to bring ideas to life. They focus on high-performance algorithms and scalable solutions that enable complex tasks to run smoothly.</p>
      </div>
    </div>

    {/* ScienceTeam */}
    <div className="flex items-center w-full mb-0">
      <div className="flex-shrink-0 w-1/2">
        <Image 
          src="/images/ScienceTeam.jpg" 
          width={1600} 
          height={1000} 
          alt="Science Team" 
          className="object-cover w-full" 
        />
      </div>
      <div className="flex flex-col pl-8 w-1/2">
        <h2 className="text-3xl font-semibold text-white mb-4">Science Team</h2>
        <p className="text-lg text-gray-400">Our Science Team applies advanced research and analytical methods to solve complex problems and support our engineering teams with scientific insights. They bridge the gap between theory and practical application, enhancing every project with their deep knowledge of the natural world.</p>
      </div>
    </div>

  </div>
</div>

  );
}

export default TeamPage;