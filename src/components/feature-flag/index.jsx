import Accordian from "../accordian";
import TicTacToe from "../tic-tact-toe";
import RandomColor from "../random-color";
import LightDarkMode from "../light-dark-mode";
import TreeView from "../tree-view";
import { FeatureFlagsContext } from "./context";
import { useContext } from "react";
import menus from "../tree-view/data";

export default function FeatureFlags() {
  const { loading, enabledFlags } = useContext(FeatureFlagsContext);

  const componentsToRender = [
    {
      key: "showLightAndDarkMode",
      component: <LightDarkMode />,
    },
    {
      key: "showTicTacToeBoard",
      component: <TicTacToe />,
    },
    {
      key: "showRandomColorGenerator",
      component: <RandomColor />,
    },
    {
      key: "showAccordian",
      component: <Accordian />,
    },
    {
      key: "showTreeView",
      component: <TreeView menus={menus}/>,
    },
  ];

  function checkEnabledFlags(getCurrentKey) {
    // console.log('Error ' + enabledFlags);
    // console.log(getCurrentKey)
    return enabledFlags[getCurrentKey];
  }

  if (loading) {
    return <h1>Loading...Please Wait!</h1>;
  }

  return (
    <div>
      <h1>Feature Flags</h1>
      {componentsToRender.map((componentItem) =>
        checkEnabledFlags(componentItem.key) ? componentItem.component : null
      )}
    </div>
  );
}
