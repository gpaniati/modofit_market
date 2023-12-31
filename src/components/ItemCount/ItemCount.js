import Button from "react-bootstrap/Button";
import { useEffect, useState } from "react";

function ItemCount({inicial , stock , onAdd}) {

  const [contador, setContador] = useState(inicial);

  useEffect(() => {
    setContador(inicial);
  },[inicial])

  function handleIncrementar(){
    setContador(contador + 1);
  }

  function handleDecrementar(){
    setContador(contador - 1);
  }

  return (
    <div className="d-flex justify-content-around align-items-center">
      <Button variant="success" size="md" onClick={handleDecrementar} disabled={contador <= 1}>
        -
      </Button>
      <span> {contador} </span>
      <Button variant="success" size="md" onClick={handleIncrementar} disabled={contador >= stock}>
        +
      </Button>
      <Button variant="success" size="md" onClick={() => onAdd(contador)} disabled={stock <= 0} >
        Añadir al Carrito
      </Button>
    </div>
  );
}

export default ItemCount;