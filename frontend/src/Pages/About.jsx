import React from 'react';

const About = () => {
  const cards = [
    {
      title: 'About Us',
      content: `At JobLane, we're more than just a job application platform – we're your partners in realizing your professional aspirations...`,
    },
    {
      title: 'What Sets Us Apart',
      content: `Tailored Matches: We understand that each candidate... Exceptional Support: Your success is our priority...`,
    },
    {
      title: 'Join the JobLane Community',
      content: `When you join JobLane, you're not just signing up for a platform – you're becoming part of a dynamic community...`,
    },
  ];

  return (
    <section className="w-full h-screen bg-gray-900 text-white py-16 px-4">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 gap-y-8 md:grid-cols-3 md:gap-x-6">
        {cards.map((card, idx) => (
          <div key={idx} className="bg-gray-600 p-6 rounded-md flex flex-col">
            <h2 className="text-yellow-400 text-3xl font-bold mb-4">{card.title}</h2>
            <p className="text-lg">{card.content}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
