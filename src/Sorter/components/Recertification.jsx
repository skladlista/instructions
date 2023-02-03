import dateZadacha from "../../assets/date-zadacha.jpg";
import sort from "../../assets/sort.jpg";

export default function Recertification() {
  return (
    <div id="recertification" className="article recertification">
      <p className="article__title">ПЕРЕАТТЕСТАЦИЯ ЛИСТОВ В 1С</p>
      <div className="article__div">
        <ol>
          <li className="article__subtitle">
            <ol className="article__list sublist">
              <li>
                По всем вопросам к ПЗ НА ПЕРЕАТТЕСТАЦИЮ звонить Порошковой Анастасии (1618)
                <br/>
                По всем вопросам к АКТУ НА ПЕРЕАТТЕСТАЦИЮ звонить Пученкиной Ирине (1857)

              </li>
              <li>
                <p>
                  Найти ПЗ и АКТ
                  НА ПЕРЕАТТЕСТАЦИЮ (может быть указан с ССЗ, иначе искать по ширине
                  и стенке в папке ПЗ НА ДОРАБОТКУ)
                </p>
                <ol className="article__list sublist">
                  <li>
                    ПЗ НА ПЕРЕАТТЕСТАЦИЮ в папке <br/>
                    <span className="bold">X:\Производственная дирекция\Производство\Производственные
                                  задания\ПЗ на доработку\год
                                </span>
                  </li>
                  <li>
                    АКТ на ПЕРЕАТТЕСТАЦИЮ в папке <br/>
                    <span className="bold">X:\Производственная дирекция\Производство\Производственные
                                  задания\Акты ПЕРЕАТТЕСТАЦИИ</span>
                  </li>
                  <li>
                    Сверить найденный <span className="bold">АКТ</span> с{" "}
                    <span className="bold">ПЗ в 1С</span>
                  </li>
                  <li>
                    Если АКТ <span className="bold">НЕ СХОДИТСЯ</span> с ПЗ в 1С, то
                    необходимо звонить в{" "}
                    <span className="bold">ПРОИЗВОДСТВЕННЫЙ ОТДЕЛ</span> (Леунова
                    Елена Валерьевна <span className="bold">1803</span>) и сообщать
                    об этом
                  </li>
                  <li>
                    Если акта на переаттестацию нет необходимо оповестить мастера
                    склада листа, а при его отсутствии (например, в ночную смену)
                    сотрудника ОТК и начальника смены
                  </li>
                  <li><span className="bold">
                              Без АКТА НА ПЕРЕАТТЕСТАЦИЮ переаттестация и задача запрещена и
                              производится только после согласования с начальником ОТК или
                              лицом, исполняющим его обязанности</span>
                  </li>
                </ol>
              </li>
              <li>
                Найти листы на переаттестацию. Требования к ним указаны в
                <span className="bold"> АКТЕ НА ПЕРЕАТТЕСТАЦИЮ</span>
              </li>
              <li>
                Сравнить найденные листы со списком листов для переаттестации. В
                папке{" "}
                <span className="bold">
                  X:\Производственная дирекция\Производство\Производственные
                  задания\ПЗ на доработку\год
                </span>{" "}
                будет EXCEL файл со списком. Этот список также есть в
                <span className="bold"> АКТЕ НА ПЕРЕАТТЕСТАЦИЮ</span>
                <br />
                <br />
                Также может быть такая ситуация, что в списке к
                <span className="bold"> ПЗ на ПЕРЕАТТЕСТАЦИЮ</span> не будет
                всех листов (тех, которые недавно приехали), их можно будет
                переаттестовать только если в{" "}
                <span className="bold">ПЗ на ПЕРЕАТТЕСТАЦИЮ</span> указано
                +ПОДХОД. Такие листы можно будет переаттестовать, только
                придется написать письмо на расширение АКТА ПЕРЕАТТЕСТАЦИИ.
                Письмо надо писать на ПИВОВАРОВУ, ПУЧЕНКИНУ и ПОРОШКОВУ. Также в
                копию мастеров склада листа (АНШМИДТ, БЕЗРУКОВ)
                <br />
                <br />
                Эти листы надо искать самому в 1С по параметрам{" "}
                <span className="bold">
                  ширина, стенка, класс прочности, марка стали ДО
                  переаттестации.
                </span>
              </li>
              <li>
                <p>Найти эти листы в 1С</p>
                <ol className="sublist">
                  <li className="article__subtitle">
                      <li>
                        Для нахождения листов из EWM в 1С, надо скопировать колонки
                        НОМЕР ЛИСТА и ПЛАВКУ из EWM и вставить в черновик в Excel. И с
                        помощью <span className="bold">ДОПОЛНИТЕЛЬНОГО ФИЛЬТРА</span>{" "}
                        найти данные листы в таблице СКЛАД ЛИСТА и скопировать их в
                        черновик, чтобы можно было проверить их.
                      </li>
                      <li>
                        Для нахождения листов из EXCEL в 1С надо зайти в 1С в Отчеты
                        &#8594; Лист на складе онлайн &#8594; Выставить фильтры на
                        ширину и толщину &#8594; Скопировать найденное в черновик в
                        EXCEL &#8594; С помощью ДОПОЛНИТЕЛЬНОГО ФИЛЬТРА найти в данном
                        черновике листы из предыдущего черновика (там, где листы,
                        найденные из EWM в EXCEL) &#8594; Скопировать найденное на новый
                        черновик и удалить предыдущие два.
                      </li>
                    <li>
                      Выделить все строки &#8594; Вкладка ПРИЁМКА &#8594; Переаттестация (листы из 1С)
                    </li>
                    <li>
                      Будет сформирована таблица
                    </li>
                  </li>
                </ol>
              </li>
              <li>
                Открыть в 1С &#8594; Документы &#8594; Изменение размеров листа
                &#8594; Создать
              </li>
              <li>
                Можно вставлять по одному листу через кнопку{" "}
                <span className="bold">
                  ДОБАВИТЬ &#8594; Вписать номер листа и плавку &#8594;{" "}
                </span>{" "}
                В блоке <span className="bold">«СТАЛО»</span> записать те
                параметры, которые надо изменить в соответствии с{" "}
                <span className="bold">ПРОИЗВОДСТВЕННЫМ ЗАДАНИЕМ</span> в 1С
              </li>
              <li>
                Или можно вставить сразу несколько листов, нажав кнопку{" "}
                <span className="bold">ДОБАВИТЬ ИЗ ТАБ. ДОКУМЕНТА</span>
              </li>
              <li>
                Вставить сформированную до этого таблицу в открывшееся окно &#8594;
                проверить все колонки на правильность (марку стали и класс прочности заполнить)&#8594;
                нажать <span className="bold">ДАЛЕЕ</span> &#8594; нажать
                <span className="bold"> ПРОВЕСТИ И ЗАКРЫТЬ</span>
              </li>
            </ol>
          </li>
        </ol>
      </div>
    </div>
  );
}
