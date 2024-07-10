import { createContext, useEffect, useState } from "react";
import featureFlagsDataServiceCall from "../data";
//Using context helps manage state and other data that need to be accessed by multiple components at different levels of the component tree,
//avoiding "prop drilling" where props are passed down through many levels of components.

export const FeatureFlagsContext = createContext(null);

export default function FeatureFlagGlobalState({ children }) {
  const [loading, setLoading] = useState(false);
  const [enabledFlags, setEnabledFlags] = useState({});

  async function fetchFeatureFlags() {
    try {
      setLoading(true);
      //original service call
      const response = await featureFlagsDataServiceCall();
      setEnabledFlags(response);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
      throw new Error(error);
    }
  }

  useEffect(() => {
    fetchFeatureFlags();
  }, []);

  return (
    //Context Provider (Provider): This component provides the context value to its child components.
    <FeatureFlagsContext.Provider value={{ loading, enabledFlags }}>
      {children}
    </FeatureFlagsContext.Provider>
  );
}

//Normally, you need this in the main index.js and wrap <App />
