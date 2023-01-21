export default function AddSheetInStart() {
  return (
    <div id="add__sheet__in__start" className="article add__sheet__in__start">
      <p className="article__title">ЗАДАТЬ ЛИСТ ВНЕ ОЧЕРЕДИ </p>
      <div className="article__div">
        <ol>
          <li className="article__subtitle">
            В 1С &#8594; Рабочий стол оператора (валковая формовка) &#8594;
            Посмотреть какой лист не сформован и запомнить время (до красной
            полосы)
          </li>
          <li className="article__subtitle">
            В 1С &#8594; Документы &#8594; Задача листа в производство &#8594;
            Найти документ с этим листом &#8594; Отменить его и все после него
          </li>
          <li className="article__subtitle">
            Задать лист по SAP вручную (Сделать задание, запланировать,
            переместить в карман, отправить в производство)
          </li>

          <li className="article__subtitle">
            <p>На данном этапе доступно 2 варианта</p>
            <ol className="article__list sublist">
              <li>Задать в 1С лист самостоятельно, а в SAP лист перекинуть на склад 3037</li>
              <li>
                Задать лист по SAP вручную (Сделать задание, запланировать,
                переместить в карман, отправить в производство)
              </li>
            </ol>
          </li>
          <li className="article__subtitle">
            В 1С восстановить очередь (для этого нужно перепроводить отменённые
            документы по порядку, генерируя для них новый номер листа ТЭСЦ)
          </li>
        </ol>
      </div>
    </div>
  );
}