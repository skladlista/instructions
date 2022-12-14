export default function Cards() {
  return (
    <div id="cards" className="article cards">
      <p className="article__title">СВАРКА КАРТ</p>
      <div className="article__div">
        <ol>
          <li className="article__subtitle">Нужен акт сварки карт</li>
          <li className="article__subtitle">
            Найти два листа с карты в таблице с соответствующим поставщиком
          </li>
          <li className="article__subtitle">
            В таблице проставить дату задачи (в акте) и правее номер карты
          </li>
          <li className="article__subtitle">
            Найти листы в MB52 (должны быть либо на 3044 (задание 2055…), либо
            на 3037 (задание 2072…)), иначе необходимо их переместить на эти
            склады
          </li>
          <li className="article__subtitle">
            <p>Зайти в транзакцию CO11N</p>
            <ol className={"sublist"}>
              <li>
                Заказ = номер задания из акта выполненых работ (уточнять у
                леуновой)
              </li>
              <li>Выход продукции = вес 2х листов</li>
              <li>
                При ошибке неравенства количества запланированного к
                подтвержденному пропускать это
              </li>
              <li>Дата проводки = дата в акте</li>
              <li>Нажать движение материала</li>
            </ol>
          </li>
          <li className="article__subtitle">
            Там должна быть карта и два листа (если нет, то добавить)
          </li>
          <li className="article__subtitle">
            Написать материал (у листов из МВ52)
          </li>
          <li className="article__subtitle">
            Написать партию SAP у карты и у листов (у карты из акта, у листов из
            МВ52)
          </li>
          <li className="article__subtitle">Вес листов написать</li>
          <li className="article__subtitle">Склад должен быть одинаков</li>
          <li className="article__subtitle">
            Сохранить и внизу должно быть 0 ошибок
          </li>
          <li className="article__subtitle">
            Проверить остаток в mb52 (листы должны отсутствовать на остатках)
          </li>
          <li className="article__subtitle">
            <p>Зайти в ZMM_MBC (массовый ввод признаков тмц)</p>
            <ol className={"sublist"}>
              <li>Ввести класс партии = ZTZ_BATCH_WMAP</li>
              <li>Ввести номер партии карты</li>
            </ol>
          </li>
          <li className="article__subtitle">
            <p>Заполнить поля и сохранить</p>
            <ol className={"sublist"}>
              <li>Плавка и партия всегда двойная через /</li>
              <li>Остальные поля через / только если они разные</li>
              <li>
                На листе «здесь собрать» все очистить (выделить и DELETE).
                <span className="bold"> СТРОКИ НЕ УДАЛЯТЬ!!!</span>
              </li>
              <li>Найти акт сварки и по нему документ поступления</li>
              <li>Найти отчет сварки карт по дате акта</li>
              <li>Скопировать отчёт в черновик</li>
              <li>
                Из документа поступления скопировать в черновик сертификат и
                номер карты, отфильтровать от а до я. найти эти листы в
                черновике из «отчет сварки карт»
              </li>
              <li>
                Скопировать в лист «здесь собрать» и отфильтровать от а до я
              </li>
              <li>
                Вставить сертификат из черновика с вагоном и сертификатом в
                самую правую колонку в листе «здесь собрать»
              </li>
              <li>Обновить формулы</li>
            </ol>
          </li>
        </ol>
      </div>
    </div>
  );
}
