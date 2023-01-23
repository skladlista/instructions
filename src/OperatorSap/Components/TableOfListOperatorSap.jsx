import "../OperatorSap.scss";
import TableOfListMenuClick from "../../scripts/TableOfListMenuClick";
import { NavLink } from "react-router-dom";

export default function TableOfListOperatorSap(props) {
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    TableOfListMenuClick();
  }

  return (
    <section className="table-of-list">
      <ul>
        <li onClick={topFunction}>
          <NavLink className="tableOfList__link" to="vd107">
            107 вд
          </NavLink>
        </li>
        <li onClick={topFunction}>
          <NavLink className="tableOfList__link" to="vd109">
            109 ВД
          </NavLink>
        </li>
        <li onClick={topFunction}>
          <NavLink className="tableOfList__link" to="vd261">
            261 ВД Списание под карты
          </NavLink>
        </li>
        <li onClick={topFunction}>
          <NavLink className="tableOfList__link" to="vd309">
            309 ВД измен. материала
          </NavLink>
        </li>

        <li onClick={topFunction}>
          <NavLink className="tableOfList__link" to="vd311">
            311 ВД перемещение
          </NavLink>
        </li>

        <li onClick={topFunction}>
          <NavLink className="tableOfList__link" to="vd343">
            343 ВД - из блока
          </NavLink>
        </li>

        <li onClick={topFunction}>
          <NavLink className="tableOfList__link" to="vd344">
            344 ВД - в блок
          </NavLink>
        </li>

        <li onClick={topFunction}>
          <NavLink className="tableOfList__link" to="vd325">
            325 ВД двигать блок-запас
          </NavLink>
        </li>

        <li onClick={topFunction}>
          <NavLink className="tableOfList__link" to="zadacha_lista">
            Задача листа
          </NavLink>
        </li>

        <li onClick={topFunction}>
          <NavLink className="tableOfList__link" to="zmm">
            ZMM_MBC
          </NavLink>
        </li>

        <li onClick={topFunction}>
          <NavLink className="tableOfList__link" to="cards">
            Сварка карт
          </NavLink>
        </li>

        <li onClick={topFunction}>
          <NavLink className="tableOfList__link" to="storno_many_cards">
            Сторно карт
          </NavLink>
        </li>

        <li onClick={topFunction}>
          <NavLink className="tableOfList__link" to="storno_card">
            Сторно одной карты
          </NavLink>
        </li>

        <li onClick={topFunction}>
          <NavLink className="tableOfList__link" to="num_sf">
            Номер сф по партии
          </NavLink>
        </li>

        <li onClick={topFunction}>
          <NavLink className="tableOfList__link" to="cogi">
            Обработка ошибок
          </NavLink>
        </li>

        <li onClick={topFunction}>
          <NavLink className="tableOfList__link" to="msc3n">
            Просмотр партии
          </NavLink>
        </li>

        <li onClick={topFunction}>
          <NavLink className="tableOfList__link" to="class">
            Просмотр классификации материала
          </NavLink>
        </li>

        <li onClick={topFunction}>
          <NavLink className="tableOfList__link" to="solve_integration_problem">
            Вывод из блока вручную
          </NavLink>
        </li>
      </ul>
    </section>
  );
}
