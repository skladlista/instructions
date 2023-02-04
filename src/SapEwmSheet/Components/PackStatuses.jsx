export default function PackStatuses(props) {
  return (
    <div id="pack" className="article pack">
      <p className="article__title">Идентификаторы для ЕО в Pack</p>
      <div className="article__div">
        <ol>
          <li className="article__subtitle">D - время</li>
          <li className="article__subtitle">N - номер</li>
          <li className="article__subtitle">P - номер задания из ZPLP</li>
          <li className="article__subtitle">L - уровень в транспорте</li>
        </ol>
      </div>
    </div>
  );
}
