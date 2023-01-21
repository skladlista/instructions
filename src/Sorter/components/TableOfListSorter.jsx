import TableOfListMenuClick from "../../scripts/TableOfListMenuClick";
import {NavLink} from "react-router-dom";

export default function TableOfListSorter(props) {

    function topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;

        TableOfListMenuClick()
    }
  return (
      <section className="table-of-list">
        <ul className="ul">


            <li onClick={topFunction}>
                <NavLink className="tableOfList__link" to="check-ssz">ПРОВЕРКА ССЗ</NavLink>

            </li>

            <li onClick={topFunction}>
                <NavLink className="tableOfList__link" to="recertification">Переаттестация листа</NavLink>

            </li>

            <li onClick={topFunction}>
                <NavLink className="tableOfList__link" to="production__sheet">Добавление задачи листа</NavLink>
            </li>

            <li onClick={topFunction}>
                <NavLink className="tableOfList__link" to="unloading">ВЫГРУЗКА ОТ ПОСТАВЩИКА</NavLink>
            </li>

            <li onClick={topFunction}>
                <NavLink className="tableOfList__link" to="unloading_external">ПЕРЕМЕЩЕНИЕ С ВНЕШНЕГО СКЛАДА</NavLink>
            </li>

            <li onClick={topFunction}>
                <NavLink className="tableOfList__link" to="storno">СТОРНИРОВАНИЕ ВАГОНА</NavLink>
            </li>

            <li onClick={topFunction}>
                <NavLink className="tableOfList__link" to="asutl">ВЫГРУЗКА ВАГОНОВ ПО АСУ ТЛ</NavLink>
            </li>

            <li onClick={topFunction}>
                <NavLink className="tableOfList__link" to="zhd-request">СОЗДАНИЕ ЖД ЗАЯВКИ</NavLink>
            </li>

            <li onClick={topFunction}>
                <NavLink className="tableOfList__link" to="activate">АКТИВАЦИЯ ЗАДАНИЯ НА ПРОИЗВОДСТВО</NavLink>
            </li>

            <li onClick={topFunction}>
                <NavLink className="tableOfList__link" to="create-new-task">СОЗДАНИЕ СКЛАДСКОЙ ЗАДАЧИ</NavLink>
            </li>

            <li onClick={topFunction}>
                <NavLink className="tableOfList__link" to="find_sheets">КАК НАХОДИТЬ ЛИСТЫ В SAP</NavLink>
            </li>

            <li onClick={topFunction}>
                <NavLink className="tableOfList__link" to="move_sheets">ПЕРЕМЕЩЕНИЕ ЛИСТОВ</NavLink>
            </li>

            <li onClick={topFunction}>
                <NavLink className="tableOfList__link" to="letter_report">ФОРМИРОВАНИЕ ПИСЬМА-ОТЧЕТА</NavLink>
            </li>

            <li onClick={topFunction}>
                <NavLink className="tableOfList__link" to="filter">ДОПОЛНИТЕЛЬНЫЙ ФИЛЬТР</NavLink>
            </li>

            <li onClick={topFunction}>
                <NavLink className="tableOfList__link" to="auto_unloading">ВЫГРУЗКА ВАГОНА БЕЗ ПЛАНШЕТА</NavLink>
            </li>

            <li onClick={topFunction}>
                <NavLink className="tableOfList__link" to="sklad_erp">ПЕРЕДАЧА НА ERP склад</NavLink>
            </li>

            <li onClick={topFunction}>
                <NavLink className="tableOfList__link" to="issuance_of_cards">ВЫПУСК КАРТ В 1С</NavLink>
            </li>

            <li onClick={topFunction}>
                <NavLink className="tableOfList__link" to="add_cards">ДОБАВЛЕНИЕ КАРТ В EXCEL</NavLink>
            </li>

            <li onClick={topFunction}>
                <NavLink className="tableOfList__link" to="order_of_sheets">ИЗМЕНЕНИЕ УРОВНЯ В ШТАБЕЛЕ</NavLink>
            </li>

            <li onClick={topFunction}>
                <NavLink className="tableOfList__link" to="cards_unloading">ПРИЕМ КАРТ ИЗ ЦСК ИЛИ ВС</NavLink>
            </li>

            <li onClick={topFunction}>
                <NavLink className="tableOfList__link" to="comeback_sheet">Вернуть лист из производства</NavLink>
            </li>

            <li onClick={topFunction}>
                <NavLink className="tableOfList__link" to="add_sheet_in_start">Задать лист вне очереди</NavLink>
            </li>

            <li onClick={topFunction}>
                <NavLink className="tableOfList__link" to="check_cast_test">Плавки "разведчики"</NavLink>
            </li>

        </ul>
      </section>
  );
}
