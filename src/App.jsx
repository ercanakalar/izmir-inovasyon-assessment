import { Route, Routes } from "react-router-dom";
import MainPage from "./features/main-page/MainPage";
import Apply from "./features/dashboard/apply/Apply";
import AddItem from "./features/dashboard/add-item/AddItem";

function App() {
  return (
    <MainPage>
      <Routes>
        <Route path="/dashboard" element={<Apply />} />
        <Route path="/dashboard/add-item" element={<AddItem />} />
      </Routes>
    </MainPage>
  );
}

export default App;
