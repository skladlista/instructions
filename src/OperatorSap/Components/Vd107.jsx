export default function Vd107() {
  return (
    <div className="article vd107">
      <p className="article__title">107 ВИД ДВИЖЕНИЯ</p>
      <div className="article__div">
        <ol>
          <p className="article__subtitle">
            Чтобы посмотреть номер последнего 107 вд можно в транзакции MIGO в
            окне слева
          </p>
          <li className="article__subtitle">
            <p>
              Найти и распечатать счета-фактур и записать последний сделанный в
              блокнот в конце
            </p>
            <ol className="article__list sublist">
              <li>
                Если во входящих документах счет-фактуры на лист без вложений и
                без номеров вагонов в счет-фактуре, то надо сообщать о ней
              </li>
              <li>
                Если на один два разных документа (даты близкие, могут быть
                отличия в счёте фактуры или еще что-то, то сообщать Печникову)
              </li>
              <li>
                Транзакция <span className="bold">ВХОДЯЩИЕ ДОКУМЕНТЫ</span>
              </li>
              <li>Ввести нужного кредитора (поставщик) или найти все сразу</li>
              <li>
                Распечатать новые, выделить все необходимое (дата, вагон,
                счет-фактура, сортамент)
              </li>
              <li>
                Если рулонная сталь, то приложить сертификат к счет-фактуре
              </li>
              <li>
                Посмотреть сертификат и написать изменения по партии и длине
              </li>
              <li>Положить в то место, где лежат доки без входящих</li>
            </ol>
          </li>
          <li className="article__subtitle">
            <p>Проверить созданы ли входящие</p>
            <ol className="article__list sublist">
              <li>
                <span className="bold">ОТЧЕТ ВХОДЯЩИЕ ПОСТАВКИ</span> для
                просмотра созданных входящих
              </li>
              <li>Номер счет поставщика = поставщик</li>
              <li>Смотреть, создано ли новое</li>
            </ol>
          </li>
          <li className="article__subtitle">
            <p>107 ВД</p>
            <ol className="article__list">
              <li>
                Транзакция MIGO (поступление материала → входящие поставка →
                Открыть вспомогательное меню (нажать на квадраты) → слева должен
                быть 107 в.д. → Enter
              </li>
              <li>
                Если пишет что заказ не деблокирован, то надо звонить Печникову
              </li>
              <li>
                <p>
                  Искать по номеру вагона, а потом сверить по номеру квитанции
                  или году
                </p>
                <ol className={"sublist"}>
                  <li>
                    ДАТУ ОТГРУЗКИ и ДАТУ ПРОВОДКИ = ДАТА ОТГРУЗКИ в{" "}
                    <span className="bold">СЧЕТ-ФАКТУРЕ</span>
                    (бывает не сразу понятно где дата, тогда узнавать у
                    бухгалтерии)
                  </li>
                  <li>
                    НАКЛАДНАЯ = № СЧЕТ-ФАКТУРЫ (у уральской стали без /00)
                  </li>
                  <li>Текст Заголовок = Номер вагона</li>
                  <li>
                    Галки в колонке <span className="bold">ОК</span> должны
                    стоять, иначе ставить вручную
                  </li>
                </ol>
              </li>
              <li>Написать номер входящей на счет фактуре</li>
              <li>Сверить тоннаж и сортамент (входящую и счет фактуру)</li>
              <li>Сверить тоннаж и сортамент (входящую и счет фактуру)</li>
              <li>
                Если одна входящая для двух счет фактур, то сначала делать одну
                и убирать галки из других счет фактур, потом другую
              </li>
              <li>
                Нажать ПРОВЕРИТЬ и если ОК (желтый или зеленый), то нажать
                ПРОВЕСТИ
              </li>
              <li>
                Если после ПРОВЕРИТЬ не хватает веса, то сообщать ПЕЧНИКОВУ
                (номер входящей и заказ (его номер есть внизу))
              </li>
              <li>Вписать номер 107 вд на счет фактуре</li>
              <li>Исправить данные в соответствии с сертификатом</li>
              <li>
                Положить счет фактуру к сделанным 107 соответствующего
                поставщика в соответствии с сортаментом
              </li>
              <li>
                В Алчевск и в поставщиков без электронного документооборота
                делать вложение (накладная и жд квитанция). Слева наверху кнопка
                → Сделать приложение → …
              </li>
            </ol>
          </li>
        </ol>
      </div>
    </div>
  );
}
