import { useDispatch, useSelector } from "react-redux";
import "./App.css";

import { useEffect } from "react";
import { fetchLabs, setLabs } from "./redux/labSlice";
import Router from "../Router";

function App() {
  const dispatch = useDispatch();
  const labs = useSelector((state) => state.labs.labs);
  useEffect(() => {
    dispatch(fetchLabs()); // Fetch labs (from localStorage or JSON)
  }, [dispatch]);

  return (
    <div className="">
      <Router />
    </div>
  );
}

export default App;
