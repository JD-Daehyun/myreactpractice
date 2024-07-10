import { useRef } from "react";
import useFetch from "../use-fetch";

export default function ScrollToTopAndBottom() {
  const { data, error, pending } = useFetch(
    "https://dummyjson.com/products?limit=100",
    {}
  );

  const bottomRef = useRef(null);

  function handleScrollToTop(){
    window.scrollTo({
        top: 0, left: 0, behavior: 'smooth'
    })
  };

  function handleScrollToBottom(){
    bottomRef.current.scrollIntoView({behavior: 'smooth'});
  }

  return (
    <div>
      <h1>Scroll To Top and Bottom Feature</h1>
      <h3>This is the TOP</h3>
      <button onClick={handleScrollToBottom}>Scroll To Bottom</button>
      {error ? <h3>Error</h3> : null}
      {pending ? <h3>Pending! Please Wait</h3> : null}
      <ul style={{listStyle: 'none'}}>
        {data && data.products && data.products.length
          ? data.products.map((item) => <li>{item.title}</li>)
          : null}
      </ul>
      <button onClick={handleScrollToTop}>Scroll To Top</button>
      <h3>This is the BOTTOM</h3>
      <div ref={bottomRef}></div>
    </div>
  );
}
