import { Route, Routes } from "react-router-dom";
import MainPage from "./features/main-page/MainPage";
import Apply from "./features/dashboard/apply/Apply";
import AddItem from "./features/dashboard/add-item/AddItem";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route
        path="/dashboard"
        element={
          <MainPage>
            <Apply />
          </MainPage>
        }
      />
      <Route
        path="/dashboard/add-item"
        element={
          <MainPage>
            <AddItem />
          </MainPage>
        }
      />
    </Routes>
  );
}

export default App;
