import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import './People.css';

import Person1 from "../../assets/updated photo.jpeg";
import Person2 from "../../assets/my-imgae.png";
import Person3 from "../../assets/chicho.jpeg";
import MentorImage from "../../assets/prof-sunil-pandey.jpg"; // Importing mentor's image

const People = () => {
  const teamPpl = [
    { img: Person1, name: "Harshit Tripathi" },
    { img: Person2, name: "Samyak Agarwal" },
    { img: Person3, name: "Harshit Chicholikar" },
  ];

  return (
    <>
      <Navbar />

      <section className="team-page">
        <div className="container-p">
        <h2 className="topic-c">Mentored By :- </h2>
          <div className="team-container">
            <div className="team-container__box">
              <div className="peopleImg">
                <img src={MentorImage} alt="Prof. Sunil Pandey's profile" />
              </div>
              <div className="desc">
                <h3>Prof. Sunil Pandey</h3>
              </div>
            </div>
          </div>
          <h2 className="topic-c">Developed By :- </h2>
          <div className="team-container">
            {teamPpl.map((ppl, id) => (
              <div key={id} className="team-container__box">
                <div className="peopleImg">
                  <img src={ppl.img} alt={`${ppl.name}'s profile`} />
                </div>
                <div className="desc">
                  <h3>{ppl.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default People;
