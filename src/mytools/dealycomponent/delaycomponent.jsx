import { useEffect, useState } from "react";
import Loader from '../loader/loader'

function DelayedComponent({ children, delay = 1000 }) {
  const [show, setShow] = useState(false);

  (()=>{
    const timeout = setTimeout(() => {
      setShow(true);
    }, delay);

    return () => {
      clearTimeout(timeout);
      setShow(false); // reset on unmount
    };
  })();

  return show ? children : <Loader></Loader>;
}
export default DelayedComponent;