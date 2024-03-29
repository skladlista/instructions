import requestTemplate from "../../assets/request-template.jpg";

export default function ZhdRequest() {
  return (
    <div id="unloading__zhd-request" className="article unloading__zhd-request">
      <p className="article__title">СОЗДАНИЕ ЖД ЗАЯВКИ</p>
      <div className="article__div">
        <ol>
          {/* для создания слудющих заголовков дублируй li внизу */}
          <li className="article__subtitle">Сделать заявку по номеру 1616</li>
          <li className="article__subtitle">
            <details>
              <summary>
                <p>Заполнить Журнал заявок</p>
              </summary>
              <ol type="a" className="sublist">
                <li>
                  Открыть журнал → Скопировать строчку за предыдущий день и
                  подогнать под свою смену ,но оставить пустыми колонки{" "}
                  <span className="bold">
                    ЗАЯВКА НА ЗАМЕНУ, ЗАБРАЛИ, ПОСТАВИЛИ ПРИМЕЧАНИЕ
                  </span>
                </li>
                <li>Скопировать их в восемь-десять строк ниже</li>
                <li>
                  Скопировать выше строку с{" "}
                  <span className="bold">ИТОГО ЗА СМЕНУ</span> и вставить под
                  то, что мы скопировали
                </li>
                <li>
                  Заполнить самую первую заявку своей смены началом смены (в
                  день 8:15, в ночь 20:15)
                  <br />
                  <span>
                    <img src={requestTemplate} alt="" />
                  </span>
                </li>
                <li>Записать все свои заявки в получившуюся таблицу</li>
                <li>
                  Заполнить самую последнюю заявку своей смены окончанием своей
                  смены (в день 20:15, в ночь 08:15)
                </li>
                <li>
                  Если строк слишком много, то те, которые не понадобились,
                  удалить. Строку <span className="bold">Итого за смену</span>{" "}
                  не удалять
                </li>
                <li>
                  Если у вас в первых и последних строках вашей таблице пустые
                  ячейки ЗАЯВКА НА ЗАМЕНУ и ПОСТАВИЛИ, то чтобы не было ошибок,
                  надо записать в них начало и конец смены соответственно
                </li>
              </ol>
            </details>
          </li>
          <li className="article__subtitle">
            Делать заявки на сервисе ЖД ЗАЯВОК → Выбрать путь (5 путь) → выбрать
            тип вагонов → выбрать количество → Выбрать состояние → Отправить
          </li>
        </ol>
      </div>
    </div>
  );
}
