import React, { useState, useEffect } from "react";
import "../styles/TinderCards.css";
import TinderCard from "react-tinder-card";
import axios from "./axios";

// {
//   name: "Elon Musk",
//   url:
//     "https://www.biography.com/.image/c_fill%2Ccs_srgb%2Cfl_progressive%2Ch_400%2Cq_auto:good%2Cw_620/MTY2MzU3Nzk2OTM2MjMwNTkx/elon_musk_royal_society.jpg",
// },
// {
//   name: "Jeff Bezos",
//   url:
//     "https://as01.epimg.net/us/imagenes/2020/02/13/tikitakas/1581616228_763081_1581616644_noticia_normal_recorte1.jpg",
// },

const TinderCards = () => {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let { data } = await axios.get("/tinder/cards");
      setPeople(data);
    };

    fetchData();
  }, []);

  const swipe = (direction, nameToDelete) => {
    console.log("Removing", nameToDelete);
    // setLastDirection(direction)
  };

  const outOfFrame = (name) => {
    console.log(name, "left the screen!");
  };

  return (
    <div className="tinderCards">
      <div className="tinderCards__cardConteiner">
        {people?.map((person) => {
          return (
            <TinderCard
              className="swipe"
              key={person.name}
              preventSwipe={["up", "down"]}
              onSwipe={(dir) => swipe(dir, person.name)}
              onCardLeftScreen={() => outOfFrame(person.name)}
            >
              <div
                style={{ background: `url(${person.imgUrl})` }}
                className="card"
              >
                <h3>{person.name}</h3>
              </div>
            </TinderCard>
          );
        })}
      </div>
    </div>
  );
};

export default TinderCards;
