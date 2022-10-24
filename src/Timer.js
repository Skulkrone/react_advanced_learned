import React from "react";
import { useState, useEffect } from "react";

function Timer() {
  const [timer, setTimer] = useState(1);

  // setInterval(() => {
  //   setTimer(timer + 1);
  // }, 1000);

  // on peut mettre une fonction dans setTimer
  const intervalID = useEffect(() => {
    setInterval(() => {
      setTimer((timer) => timer +1);
    }, 1000);
    //on peut retourner une fonction dans useEffect = quand le composant va se détuire (qd rendu conditonnel) ça va retourner une cleanup function
    return () => {
      // alert("Composant détruit");
      clearInterval(intervalID);
    };
  }, []);

  return (
  // pour éviter d'alourdir le DOM avec des div qui entourent des éléments de composants annexes on peu utilise les Reatc Fragment
  // soit on utilise un import de Fragment avec les balises <Fragment></Fragment>
  // soit on importe rien et ça se fait naturellement :
    <>
      <h1>{timer}</h1>
    </>
  );
}

export default Timer;
