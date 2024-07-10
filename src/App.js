import './App.css';
import Accordian from "./components/accordian";
import RandomColor from "./components/random-color";
import StarRating from "./components/star-rating";
import ImageSlider from "./components/image-slider";
import LoadMoreData from "./components/load-more-data";
import TreeView from "./components/tree-view";
import menus from "./components/tree-view/data";
import QRCodeGenerator from "./components/qr-code-generator";
import LightDarkMode from "./components/light-dark-mode";
import ScrollIndicator from "./components/scroll-indicator";
import TabTest from "./components/custom-tabs/tab-test";
import ModalTest from "./components/custom-modal-popup/modal-test";
import GitHubProfileFinder from "./components/github-profile-finder";
import SearchAutoComplete from "./components/search-auto-complete-withAPI";
import TicTacToe from "./components/tic-tact-toe";
import FeatureFlagGlobalState from "./components/feature-flag/context";
import FeatureFlags from "./components/feature-flag";
import UseFetchHookTest from "./components/use-fetch/test";
import UseOnClickOutsideTest from './components/use-outside-click/test';
function App() {
  return (
    <div className="App">
      {/* Accordian Component */}
      {/* <Accordian /> */}

      {/* Random Color Component */}
      {/* <RandomColor /> */}

      {/* Star Rating Component */}
      {/* <StarRating noOfStars={10} /> */}

      {/* Image Slider Component */}
      {/* <ImageSlider
        url={"https://picsum.photos/v2/list"}
        limit={"10"}
        page={"1"}
      /> */}

      {/* Load More Data Component */}
      {/* <LoadMoreData /> */}

      {/* Tree View Component or Recursive Navigation Menu */}
      {/* <TreeView menus={menus} /> */}

      {/* QR Code Generator */}
      {/* <QRCodeGenerator /> */}

      {/* Light and Dark Mode Component */}
      {/* <LightDarkMode /> */}

      {/* Scroll Indicator Component */}
      {/* <ScrollIndicator url={"https://dummyjson.com/products?limit=100"} /> */}

      {/* Custom Tabs Component */}
      {/* <TabTest /> */}

      {/* Custom Modal Component */}
      {/* <ModalTest /> */}

      {/* Github Profile Finder Component */}
      {/* <GitHubProfileFinder /> */}

      {/* Search Autocomplete with API Component */}
      {/* <SearchAutoComplete /> */}

      {/* Tic Tac Toe Component */}
      {/* <TicTacToe /> */}

      {/* Feature Flag Implentation */}
      {/* <FeatureFlagGlobalState>
        <FeatureFlags />
      </FeatureFlagGlobalState> */}

      {/* UseFetch Custom Hook Component */}
      {/* <UseFetchHookTest /> */}

      {/* UseOnClickOutside Custom Hook Component */}
      <UseOnClickOutsideTest />
    </div>
  );
}

export default App;
