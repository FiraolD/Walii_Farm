import { FeatureCard } from './FeatureCard';
import { GiBarn, GiFarmTractor, GiTreehouse, GiCampfire } from 'react-icons/gi';

const features = [
  {
    icon: <GiBarn size={40} />,
    title: "Authentic Farmhouse",
    description: "Historic 19th-century farmhouse with original wood beams and stone fireplace"
  },
  {
    icon: <GiFarmTractor size={40} />,
    title: "Working Farm",
    description: "Experience farm life with seasonal activities and fresh produce"
  },
  {
    icon: <GiTreehouse size={40} />,
    title: "Modern Amenities",
    description: "Fully equipped kitchen, high-speed WiFi, and luxury bedding"
  },
  {
    icon: <GiCampfire size={40} />,
    title: "Outdoor Spaces",
    description: "Private garden, fire pit, and scenic hiking trails"
  }
];

export function Features() {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container">
        <h2 className="text-4xl font-serif font-bold text-center mb-16">
          What Makes Us Special
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}