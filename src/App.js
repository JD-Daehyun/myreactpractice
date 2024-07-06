// import './App.css';
import Accordian from './components/accordian';
import RandomColor from './components/random-color';
import StarRating from './components/star-rating';
import ImageSlider from './components/image-slider';
import LoadMoreData from './components/load-more-data';
import TreeView from './components/tree-view';
import menus from './components/tree-view/data'
import QRCodeGenerator from './components/qr-code-generator';
function App() {
  return (
    <div className="App">
      {/* Accordian Component */}
      <Accordian/> 

      {/* Random Color Component */}
      <RandomColor/>

      {/* Star Rating Component */}
      <StarRating noOfStars={10}/>

      {/* Image Slider Component */}
      <ImageSlider url={'https://picsum.photos/v2/list'} limit={"10"} page={"1"}/>

      {/* Load More Data Component */}
      <LoadMoreData />

      {/* Tree View Component or Recursive Navigation Menu */}
      <TreeView menus={menus} />
      {/* QR Code Generator */}
      <QRCodeGenerator />
    </div>
  );
}

export default App;
