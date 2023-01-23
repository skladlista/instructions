import Vd107 from "./Components/Vd107";
import Vd109 from "./Components/Vd109";
import Vd309 from "./Components/Vd309";
import Vd311 from "./Components/Vd311";
import Vd343 from "./Components/Vd343";
import Vd344 from "./Components/Vd344";
import Vd325 from "./Components/Vd325";
import ZadachaLista from "./Components/ZadachaLista";
import Zmm from "./Components/Zmm";
import Cards from "./Components/Cards";
import StornoManyCards from "./Components/StornoManyCards";
import StornoCard from "./Components/StornoCard";
import NumSF from "./Components/NumSF";
import Provider from "./Components/Provider";
import Cogi from "./Components/Cogi";
import Msc3n from "./Components/Msc3n";
import Class from "./Components/Class";
import Vd261 from "./Components/Vd261";
import { Route, Routes } from "react-router-dom";
import SolveIntegrationProblem from "./Components/SolveIntegrationProblem";

export default function OperatorSap(props) {
  window.scrollTo(0, 0);
  props.setActivePage("Оператор-SAP");

  return (
    <Routes>
      <Route path="/" element={<Vd107 />} />
      <Route path="/vd107" element={<Vd107 />} />
      <Route path="/vd109" element={<Vd109 />} />
      <Route path="/vd261" element={<Vd261 />} />
      <Route path="/vd309" element={<Vd309 />} />
      <Route path="/vd311" element={<Vd311 />} />
      <Route path="/vd343" element={<Vd343 />} />
      <Route path="/vd344" element={<Vd344 />} />
      <Route path="/vd325" element={<Vd325 />} />
      <Route path="/zadacha_lista" element={<ZadachaLista />} />
      <Route path="/zmm" element={<Zmm />} />
      <Route path="/cards" element={<Cards />} />
      <Route path="/storno_many_cards" element={<StornoManyCards />} />
      <Route path="/storno_card" element={<StornoCard />} />
      <Route path="/num_sf" element={<NumSF />} />
      <Route path="/cogi" element={<Cogi />} />
      <Route path="/msc3n" element={<Msc3n />} />
      <Route path="/class" element={<Class />} />
      <Route path="/provider" element={<Provider />} />
      <Route
        path="/solve_integration_problem"
        element={<SolveIntegrationProblem />}
      />
    </Routes>
  );
}
