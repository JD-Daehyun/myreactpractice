import useWindowResize from ".";
import '../use-fetch/styles.css'
export default function UseWindowResizeTest() {
  const windowSize = useWindowResize();
  const { width, height } = windowSize;
  return (
    <div className="custom-hook-container">
      <h1>Use Window Resize Hook</h1>
      <p>Width is {width}</p>
      <p>Height is {height}</p>
    </div>
  );
}
