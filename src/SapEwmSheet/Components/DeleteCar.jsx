export default function DeleteCar(props) {
  return (
    <div id="delete-car" className="article delete-car">
      <p className="article__title">Снять не выгруженный вагон с ворот</p>
      <div className="article__div">
        <ol>
          <li className="article__subtitle">
            Найти вагон в ZPRIEM (Планирование приемки ЛП) и нажать кнопку СНЯТЬ
            С ВОРОТ (следующие пункты повторяют действия этой кнопки)
          </li>
          <li className="article__subtitle">
            Зайти во входящую поставку (нажать на номер вагона)
          </li>
          <li className="article__subtitle">Открыть вкладку ЕО</li>
          <li className="article__subtitle">
            Выделить всю таблицу и нажать{" "}
            <span className="bold">СТОРНИРОВАТЬ ПМ</span>
          </li>
          <li className="article__subtitle">
            В 1С найти связанные документы{" "}
            <span className="bold">Поступления листа на склад</span> и
            распровести их
          </li>
        </ol>
      </div>
    </div>
  );
}
