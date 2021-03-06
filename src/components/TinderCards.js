import React, { useState, useEffect } from "react";
import "../styles/TinderCards.css";
import TinderCard from "react-tinder-card";
import axios from "./axios";

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
