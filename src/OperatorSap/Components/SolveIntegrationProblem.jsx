export default function SolveIntegrationProblem() {
  return (
    <div id="cards" className="article cards">
      <p className="article__title">
        ВЫВОД ИЗ БЛОК-ЗАПАСА, ЕСЛИ В ИНТЕГРАЦИЯ НЕ СРАБОТАЛА
      </p>
      <div className="article__div">
        <ol>
          <li className="article__subtitle">
            Производить только в случае, если консультант SAP EWM (Андреадис
            Денис) не доступен
          </li>
          <li className="article__subtitle">
            И только если листы в 1С выведены из блока, а в EWM они в блоке
          </li>
          <li className="article__subtitle">Переместить листы на склад 3044</li>
          <li className="article__subtitle">
            В ERP по ним сделать 343 ВД (вывод из блок-запаса) и переместить их
            на EWM 311 ВД.
          </li>
          <li className="article__subtitle">
            В EWM распределить созданную входящую поставку
          </li>
        </ol>
      </div>
    </div>
  );
}
