import { useEffect } from "react";

const useOutsideClick = (ref, callback) => {
  const hide = e => {
    if (ref.current && !ref.current.contains(e.target)) {
      callback();
      console.log('removed');
      document.removeEventListener("click", hide);
    }
  };
  const show = ()=>{
    console.log('added');
    document.addEventListener("click", hide);
  }
  return show;
};

export default useOutsideClick;