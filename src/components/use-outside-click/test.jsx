import { useRef, useState } from "react";
import useOutSideClick from ".";
import './styles.css'
export default function UseOnClickOutsideTest() {
  const [showContent, setShowContent] = useState(false);
  const ref = useRef();
  useOutSideClick(ref,()=> setShowContent(false))
  return (
    <div className="custom-hook-container">
      {showContent ? (
        <div ref={ref}>
          <h1>This is very random text for the purpose of testing</h1>
          <p>Please click outside of this context!</p>
        </div>
      ) : (
        <button onClick={() => setShowContent(true)}>Show Content</button>
      )}
    </div>
  );
}
