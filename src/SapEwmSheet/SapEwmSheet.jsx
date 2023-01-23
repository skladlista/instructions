import MoveSheets from "./Components/MoveSheets";
import Queue from "./Components/Queue";
import SapRecertification from "./Components/SapRecertification";
import ToggleTable from "./Components/ToggleTable";
import ZadachaPack from "./Components/ZadachaPack";
import Sklad3037 from "../Sorter/components/Sklad3037";
import Allocation from "./Components/Allocation";
import StornoSheets from "./Components/StornoSheets";
import AdaptationSupply from "./Components/AdaptationSupply";
import AdaptationSheet from "./Components/AdaptationSheet";
import DeleteCar from "./Components/DeleteCar";
import ChangeOzm from "./Components/ChangeOzm";
import Pack from "./Components/Pack";
import CancelUnload from "./Components/CancelUnload";
import "./SapEwmSheet.scss";
import { Route, Routes } from "react-router-dom";

export default function SapEwmSheet(props) {
  window.scrollTo(0, 0);
  props.setActivePage("SAP EWM лист");

  return (
    <Routes>
      <Route path="/" element={<Queue />} />
      <Route path="queue" element={<Queue />} />
      <Route path="toggle_table" element={<ToggleTable />} />
      <Route path="sap_recertification" element={<SapRecertification />} />
      <Route path="move_sheets" element={<MoveSheets />} />
      <Route path="zadacha_pack" element={<ZadachaPack />} />
      <Route path="unloading_sklad_3037" element={<Sklad3037 />} />
      <Route path="allocation" element={<Allocation />} />
      <Route path="storno_sheets" element={<StornoSheets />} />
      <Route path="adaptation_supply" element={<AdaptationSupply />} />
      <Route path="adaptation_sheet" element={<AdaptationSheet />} />
      <Route path="delete_car" element={<DeleteCar />} />
      <Route path="cancel_unload" element={<CancelUnload />} />
      <Route path="change_ozm" element={<ChangeOzm />} />
      <Route path="pack" element={<Pack />} />
    </Routes>
  );
}
