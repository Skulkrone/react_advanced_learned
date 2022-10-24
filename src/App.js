import { useState, useEffect, useRef, useMemo, useCallback } from "react";
import "./App.css";
// import Timer from './Timer';
// import Video from "./Video.mp4";
// import Content from './Content';
import useDimension from "./useDimension";

function App() {
  // ----------------------- Hook useEffect ----------------------------------

  // const [dataComponent, setDataComponent] = useState(1);

  // const changeState = () => {
  //   setDataComponent(dataComponent + 1);
  // };
  // useEffect utilise une fonction callback qui va appaler les fonctions à des moments précis (exmple ici qd le state se met à jour)
  // peut se faire qu'au 1er affichage avec un tableau vide [] = parfait pour les appels à des API
  // useEffect(() => {
  //   console.log("dataComponent changed");
  // }, [])

  // return (
  //   <div className="App">
  //     <h1>Le state est {dataComponent}</h1>
  //     <button onClick={changeState}>Change state</button>
  //   </div>
  // );

  // -------------------- API avec useEffect ----------------------------------

  // const [dataImg, setDataImg] = useState();

  // useEffect(() => {
  //   fetch("https://api.thecatapi.com/v1/images/search")
  //     .then((response) => {
  //       console.log(response);
  //       return response.json();
  //     })
  //     .then((data) => {
  //       console.log(data);
  //       setDataImg(data[0].url);
  //     });
  // }, []);

  // return (
  //   <div className="App">
  //     {/* utilisation de short-circuit operator
  //         affiche une image que si dataImg est true
  //     */}
  //     {dataImg && (
  //       <img src={dataImg} alt="cat image" style={{ width: "500px" }}></img>
  //     )}
  //   </div>
  // );

  // -------------------- Utilisation d'un Timer -------------------------

  // const [timer, setTimer] = useState(1);

  // ---------------- Garder bouton Toggle ------------------------
  // const [toggle, setToggle] = useState(1);
  

  // const toggleFunc = () => {
  //   setToggle(!toggle);
  // };

  // *****---- Ne jamais changer un state dans un tableau ou objet *****--------
  // const [toggle, setToggle] = useState([1,2,3]);
  // const toggleFunc = () => {
  //   // toggle.push(4); --> ne fonctionne pas car React ne reconnait pas la modification du state
  //   // recopier toutes les valeurs qu'il ya dans le tableau ou objet
  //   // modifier ce qu'on a envie de modifier dans nouveau tableau ou objet
  //   // ensuite on change le state avec ce noutableau ou objet
  //   const newArr = [...toggle];
  //   newArr.push(4);
  //   // console.log(toggle);
  //   setToggle(newArr);
  // };

  // console.log("mise à jour");

  // ----------------------- Garder bouton Toggle ------------------------------

  // setInterval(() => {
  //   setTimer(timer + 1);
  // }, 1000);

  // on peut mettre une fonction dans setTimer
  // const intervalID = useEffect(() => {
  //   setInterval(() => {
  //     setTimer((timer) => timer + 1);
  //   }, 1000)
  //   //on peut retourner une fonction dans useEffect = quand le composant va se détuire (qd rendu conditonnel) ça va retourner une cleanup function
  //   return () => {
  //     clearInterval(intervalID);
  //   }
  // }, []);

  // -------------------------- Utilisation de useRef ------------------------
  // utile lorsque bcp d'animations
  // const ref = useRef();

  // ***** Sélection d'un tableau d'élément *****
  // const ref = useRef([]);

  // console.log(ref);

  // useEffect(() => {
  //   // console.log(ref.current);
  //   setTimeout(() => {
  //     ref.current.pause();
  //   }, 3000);
  // }, []);

  // useEffect(() => {
  //   // console.log(ref);

  //   // utilisation d'addEventListener pour avoir accès à des éléments en dehors de JSX
  //   window.addEventListener('resize', actionResize);

  //   function actionResize() {
  //     console.log("Resized!!!!");
  //   }

  //   return () => {
  //     window.removeEventListener('resize', actionResize);
  //   }
  // }, []);

  // Sélection d'un tableau d'élément = créer une méthode passée 
  // dans ref ->ref={addToRef}
  // const addToRef = el => {
  //   // console.log(el);
  //   // !ref.current.includes(el) = est-ce que le tableau incluse déjà l'élément, si oui ça retourne true donc !ref.current.includes(el) fait false et ne lancer pas le if
  //   //inverse de true s'il est à l'intérieur, seulement qd il n'y a pas déjà cet élément à l'intérieur
  //   if(el && !ref.current.includes(el)){
  //     // on ajoute les éléments qu tableau créé vide de base useRef([]);
  //     ref.current.push(el);
  //   }
  // }

  // ----------------------- Reactmemo =  mémorisation-----------------------
  // améliorer les performances d'une application React
  // mémorisation fonctionne avec tous les props SAUF props.children
  // ne fonctionne plus avec un tableau mais on peut surveiller les valeurs de référence qu'on peut passer en props à des enfants = surveiller un tableau/objet avec useMemo
  // Utiliser les memo n'est pas très utilisé car si on les emplie, les performances de l'appli peuvent être impactées

  // const tableau = [1,2,3,4,5,6];

  // const tableau = useMemo(() => {
  //   return [1,2,3,4,5,6];
  // }, []);

  // // useCallback agit de la même manière que useMemo mais pour les fonctions
  // const foo = useCallback(() => {
  //   console.log('click');
  // }, []);

  // return (
  //   <div className="App">
  //     {/* Utilisation de useRef */}
  //     {/* <video ref={ref} width="750" height="500" autoPlay controls muted>
  //       <source src={Video} type="video/mp4" />
  //     </video> */}
  //     {/* Sélection d'un tableau d'élément */}
  //     {/* <video ref={addToRef} width="750" height="500" autoPlay controls muted>
  //       <source src={Video} type="video/mp4" />
  //     </video>
  //     <video ref={addToRef} width="750" height="500" autoPlay controls muted>
  //       <source src={Video} type="video/mp4" />
  //     </video>
  //     <video ref={addToRef} width="750" height="500" autoPlay controls muted>
  //       <source src={Video} type="video/mp4" />
  //     </video> */}

  //     {/* Ne jamais changer un state dans un tableau ou objet */}
  //     {/* <h1>{toggle}</h1> */}

  //     {/* Comprendre props.children */}
  //     {/* <Content>
  //       <h1>Titre de mon article 1</h1>
  //       <p>Lorem ipsum dolor sit amet.</p>
  //     </Content>
  //     <Content>
  //       <h1>Titre de mon article 2</h1>
  //       <p>Lorem ipsum dolor sit amet.</p>
  //     </Content>
  //     <Content>
  //       <h1>Titre de mon article 3</h1>
  //       <p>Lorem ipsum dolor sit amet.</p>
  //     </Content> */}

  //     {/* Utilisation de Reactmemo */}
  //     <Content num={tableau} foo={foo}></Content>

  //     <button onClick={toggleFunc}>Toggle</button>

  //     {/* <h2>{toggle ? "True":"False"}</h2> */}
  //     {/* Utilisation d'un Timer */}
  //     {/* <h1>{timer}</h1> */}
  //     {/* {toggle && <Timer></Timer>} */}
  //   </div>
  // );

  // -------------- Créer Hook Personnalisé -----------------------------

  const browserWidth = useDimension();
  // console.log(browserWidth);

  if(browserWidth > 772){
    console.log("Grand écran");
  } else {
    console.log("Petit écran");
  }
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
