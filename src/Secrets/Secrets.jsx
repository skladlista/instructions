import "./Secrets.scss";

export default function Secrets(props) {
  window.scrollTo(0,0)
  props.setActivePage('НЮАНСЫ')


  return (
    <section className="main">
      <div id="secrets" className="article secrets">
        <p className="article__title">НЮАНСЫ</p>
        <div className="article__div">
          <ol className="zadacha">
            <li className="article__subtitle">
              При задаче по ведомости если не находится лист или плавка
              проверять существование такой плавки. Эта плавка или лист может
              быть другого сортамента.
            </li>
            <li className="article__subtitle">
              Если даешь старый лист проверять ПЗ
            </li>
            <li className="article__subtitle">
              В конце смены убирать переадресацию
            </li>
            <li className="article__subtitle">
              Перед задачей проверять разведчиков
            </li>
            <li className="article__subtitle">
              Задавать строго по ССЗ, чтобы листы с разным ПЗ не перемешивались
              (даже если одинаковые)
            </li>
            <li className="article__subtitle">
              Проверять ссз на переаттестацию
            </li>
          </ol>
          <ol className="skladLista">
            <li className="article__subtitle">
              В конце смены убирать листы из которых сварены карты
            </li>
            <li className="article__subtitle">
              При убирании текста как число не брать метинвест в рассчет, т.к.
              ломается
            </li>
            <li className="article__subtitle">
              В колонках дата задачи должен быть формат даты
            </li>
            <li className="article__subtitle">
              Формат ОБЩИЙ у ширины, толщины, длины, массы
            </li>
            <li className="article__subtitle">
              Проверять наличие двойников ЕО в складе листа
            </li>
            <li className="article__subtitle">
              У одной номенклатуры одни параметры толщины, ширины, кп, нд
            </li>
            <li className="article__subtitle">
              Возможна точка в складе листа в весе (заменять её на запятую)
            </li>
            <li className="article__subtitle">
              У нд убирать пробелы в начале и конце ячейки
            </li>

            <li className="article__subtitle">
              Если висит Склад листа глянуть где последняя ячейка
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}
