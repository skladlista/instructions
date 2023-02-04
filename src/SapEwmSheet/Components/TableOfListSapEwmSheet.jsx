import { NavLink } from "react-router-dom";
import TableOfListMenuClick from "../../scripts/TableOfListMenuClick";

export default function TableOfListSapEwmSheet() {
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    TableOfListMenuClick();
  }
  return (
    <section className="table-of-list">
      <ul>
        <li onClick={topFunction}>
          <NavLink className="tableOfList__link" to="queue">
            Просмотр очереди
          </NavLink>
        </li>

        <li onClick={topFunction}>
          <NavLink className="tableOfList__link" to="toggle_table">
            Переключение RFUI
          </NavLink>
        </li>

        <li onClick={topFunction}>
          <NavLink className="tableOfList__link" to="sap_recertification">
            Переаттестация
          </NavLink>
        </li>

        <li onClick={topFunction}>
          <NavLink className="tableOfList__link" to="move_sheets">
            Переместить листы
          </NavLink>
        </li>

        <li onClick={topFunction}>
          <NavLink className="tableOfList__link" to="zadacha_pack">
            Задача через RPACK
          </NavLink>
        </li>

        <li onClick={topFunction}>
          <NavLink className="tableOfList__link" to="pack_statuses">
            Идентификаторы в SAP
          </NavLink>
        </li>

        <li onClick={topFunction}>
          <NavLink className="tableOfList__link" to="unloading_sklad_3037">
            Передача на ERP склад
          </NavLink>
        </li>

        <li onClick={topFunction}>
          <NavLink className="tableOfList__link" to="allocation">
            Распределение вагонов
          </NavLink>
        </li>

        <li onClick={topFunction}>
          <NavLink className="tableOfList__link" to="storno_sheets">
            Сторнирование листов
          </NavLink>
        </li>

        <li onClick={topFunction}>
          <NavLink className="tableOfList__link" to="adaptation_supply">
            Адаптация поставки
          </NavLink>
        </li>

        <li onClick={topFunction}>
          <NavLink className="tableOfList__link" to="adaptation_sheet">
            Адаптация листа
          </NavLink>
        </li>

        <li onClick={topFunction}>
          <NavLink className="tableOfList__link" to="delete_car">
            Снять с ворот
          </NavLink>
        </li>

        <li onClick={topFunction}>
          <NavLink className="tableOfList__link" to="cancel_unload">
            Отмена вагона на складе
          </NavLink>
        </li>

        <li onClick={topFunction}>
          <NavLink className="tableOfList__link" to="change_ozm">
            Изменение номенклатуры
          </NavLink>
        </li>

        <li onClick={topFunction}>
          <NavLink className="tableOfList__link" to="pack">
            Упаковывание листа
          </NavLink>
        </li>
      </ul>
    </section>
  );
}
