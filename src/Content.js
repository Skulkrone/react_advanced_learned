import React from 'react';

function Content(props) {
  console.log("Mise à jour");
  return (
    <div className='content'>
      {/* Comprendre props.children */}
      {/* {props.children} */}

      {/* Utilisation de Reactmemo pour mémoriser ce composant pour voir au moment du rerender s'il a changé ou pas (si les props reçus ont changé ou pas) donc si son contenu doit changé et s'il ne change pas, il ne remet pas à jour
      
      Ne fonctionne plus avec un tableau car un tableau est une valeur de référence alors qu'un nombre est une valeur primitive

      A chaque mise à jour, react recréé un tableau donc mise à jour à chaque fois

      POur surveiller et éviter ça, on utilise useMemo dans le composant parent
      
      */}
      <h1>{props.num}</h1>
    </div>
  )
}

export default React.memo(Content);