export default function Allocation(props) {
  return (
    <div id="allocation" className="article allocation">
      <p className="article__title">Распределение вагонов в SAP ERP</p>
      <div className="article__div">
        <ol>
            <li className="article__subtitle">
                Найти входящую поставку к вагону (транзакция ZMM_DELIVERYV)
            </li>
            <li className="article__subtitle">
                В MB51 проверить наличие 107 ВД к партиям этом вагоне. Если 107 отсутствует, распределять нельзя.
            </li>
            <li className="article__subtitle">
                В ZMM_LGORT написать склад (3027 или L027) и номер входящей
            </li>
            <li className="article__subtitle">
                Выделить найденные строки и нажать сохранить. Колонка «Статус» должна стать зелёным.
            </li>
            <li className="article__subtitle">
                Перейти в транзакцию VL06I. Нажать «Для распределения».
            </li>
            <li className="article__subtitle">
                Написать входящую поставку, сроки поставки стереть.
            </li>
            <li className="article__subtitle">
                В появившемся окне проверить соответствие входящей поставки и вагона.
            </li>
            <li className="article__subtitle">
                Выделить и нажать «РАСПРЕДЕЛИТЬ»
            </li>

        </ol>
      </div>
    </div>
  );
}
