export default function WrittingOffASheet(props) {
  return (
    <div id="writing-off-a-sheet" className="article writing-off-a-sheet">
      <p className="article__title">
        Передача на ERP склады (3011, 3037, 3044)
      </p>
      <div className="article__div">
        <ol>
          <li className="article__subtitle">В ADGI</li>
          <li className="article__subtitle">
            Выбрать процесс ОМ – Не EWM склад (вписать склад получатель)
          </li>
          <li className="article__subtitle">Вписать ЕО</li>
          <li className="article__subtitle">
            Выбрать <span className="bold">ПроводкаОМ</span>
          </li>
          <li className="article__subtitle">
            Найти ЕО (в мониторе) и{" "}
            <span className="bold">удалить единицу обработки</span>
          </li>
        </ol>
      </div>
    </div>
  );
}
