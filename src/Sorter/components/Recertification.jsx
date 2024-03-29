import dateZadacha from "../../assets/date-zadacha.jpg";
import sort from "../../assets/sort.jpg";
import recert1 from "../../assets/recert1.png";
import recert2 from "../../assets/recert2.png";
import recertIntegration from "../../assets/recertIntegration.png";
import recertRequest from "../../assets/recertRequest.png";
import recertSoglasovanya from "../../assets/recertSoglasovanya.png";

export default function Recertification() {
  return (
    <div id="recertification" className="article recertification">
      <p className="article__title">ПЕРЕАТТЕСТАЦИЯ ЛИСТОВ В 1С</p>
      <div className="article__div">
        <ol>
          <li className="article__subtitle">
            По всем вопросам к ПЗ НА ПЕРЕАТТЕСТАЦИЮ звонить Порошковой Анастасии
            (1618)
          </li>
          <li className="article__subtitle">
            По всем вопросам к АКТУ НА ПЕРЕАТТЕСТАЦИЮ звонить Пученкиной Ирине
            (1857)
          </li>
          <li className="article__subtitle">
            <details>
              <summary>
                <p>
                  Найти ПЗ и АКТ НА ПЕРЕАТТЕСТАЦИЮ (может быть указан с ССЗ,
                  иначе искать по ширине и стенке в папке ПЗ НА ДОРАБОТКУ)
                </p>
              </summary>
              <ol className="article__list sublist">
                <li>
                  ПЗ НА ПЕРЕАТТЕСТАЦИЮ в папке <br />
                  <span className="bold">
                    X:\Производственная дирекция\Производство\Производственные
                    задания\ПЗ на доработку\год
                  </span>
                </li>
                <li>
                  АКТ на ПЕРЕАТТЕСТАЦИЮ в папке <br />
                  <span className="bold">
                    X:\Производственная дирекция\Производство\Производственные
                    задания\Акты ПЕРЕАТТЕСТАЦИИ
                  </span>
                </li>
                <li>
                  Сверить найденный <span className="bold">АКТ</span> с{" "}
                  <span className="bold">ПЗ в 1С</span>
                </li>
                <li>
                  Если АКТ <span className="bold">НЕ СХОДИТСЯ</span> с ПЗ в 1С,
                  то необходимо звонить в{" "}
                  <span className="bold">ПРОИЗВОДСТВЕННЫЙ ОТДЕЛ</span> (Леунова
                  Елена Валерьевна <span className="bold">1803</span>) и
                  сообщать об этом
                </li>
                <li>
                  Если акта на переаттестацию нет необходимо оповестить мастера
                  склада листа, а при его отсутствии (например, в ночную смену)
                  сотрудника ОТК и начальника смены
                </li>
                <li>
                  <span className="bold">
                    Без АКТА НА ПЕРЕАТТЕСТАЦИЮ переаттестация и задача запрещена
                    и производится только после согласования с начальником ОТК
                    или лицом, исполняющим его обязанности
                  </span>
                </li>
              </ol>
            </details>
          </li>
          <li className="article__subtitle">
            Найти листы на переаттестацию. Требования к ним указаны в
            <span className="bold"> АКТЕ НА ПЕРЕАТТЕСТАЦИЮ</span>
          </li>
          <li className="article__subtitle">
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
            <span className="bold"> ПЗ на ПЕРЕАТТЕСТАЦИЮ</span> не будет всех
            листов (тех, которые недавно приехали), их можно будет
            переаттестовать только если в{" "}
            <span className="bold">ПЗ на ПЕРЕАТТЕСТАЦИЮ</span> указано +ПОДХОД.
            Такие листы можно будет переаттестовать, только придется написать
            письмо на расширение АКТА ПЕРЕАТТЕСТАЦИИ. Письмо надо писать на
            ПИВОВАРОВУ, ПУЧЕНКИНУ и ПОРОШКОВУ. Также в копию мастеров склада
            листа (АНШМИДТ, БЕЗРУКОВ)
            <br />
            <br />
            Эти листы надо искать самому в 1С по параметрам{" "}
            <span className="bold">
              ширина, стенка, класс прочности, марка стали ДО переаттестации.
            </span>
          </li>
          <li className="article__subtitle">
            <details>
              <summary>
                <p>Найти листы в 1С</p>
              </summary>
              <ol>
                <li className="article__subtitle">
                  Скопировать колонки Плавка и Номер листа поставщика из EWM и вставить в черновик в Excel
                </li>
                <li className="article__subtitle">
                  В 1С → Отчеты → Лист на складе онлайн → Выставить фильтры на ширину и толщину →
                  Скопировать найденное в черновик в EXCEL → С помощью ДОПОЛНИТЕЛЬНОГО ФИЛЬТРА найти в
                  данном черновике листы из предыдущего черновика (там, где плавка и номер листа из EWM) →
                  Скопировать найденное на новый черновик и удалить предыдущие два.
                </li>
                <li className="article__subtitle">
                  Выделить все найденные строки → Вкладка ПРИЁМКА → Переаттестация (листы из 1С)
                </li>
                <li className="article__subtitle">
                  Будет сформирована таблица
                </li>
              </ol>
            </details>
          </li>

          <li className="article__subtitle">
            <details>
              <summary>
                <p>Создать документ «Изменение размеров листа»</p>
              </summary>
              <ol>
                <li className="article__subtitle">
                  Открыть в 1С &#8594; Документы &#8594; Изменение размеров
                  листа &#8594; Создать
                </li>
                <li className="article__subtitle">
                  Можно вставлять по одному листу через кнопку{" "}
                  <span className="bold">
                    ДОБАВИТЬ &#8594; Вписать номер листа и плавку &#8594;{" "}
                  </span>{" "}
                  В блоке <span className="bold">«СТАЛО»</span> записать те
                  параметры, которые надо изменить в соответствии с{" "}
                  <span className="bold">ПРОИЗВОДСТВЕННЫМ ЗАДАНИЕМ</span> в 1С
                </li>
                <li className="article__subtitle">
                  Или можно вставить сразу несколько листов, нажав кнопку{" "}
                  <span className="bold">ДОБАВИТЬ ИЗ ТАБ. ДОКУМЕНТА</span>
                </li>
                <li className="article__subtitle">
                  Вставить сформированную до этого таблицу в открывшееся окно
                  &#8594; проверить все колонки на правильность (марку стали и
                  класс прочности заполнить из ПЗ в 1С)&#8594; нажать{" "}
                  <span className="bold">ДАЛЕЕ</span>
                </li>
                <li className="article__subtitle">
                  Прикрепить «Акт на переаттестацию»
                </li>
                <li className="article__subtitle">
                  <details>
                    <summary>
                      <p>Отправить на согласование</p>
                    </summary>
                    <ol>
                      <li>Во вкладке «Дополнительно» заполнить поля:</li>
                      <ol>
                        <li className="article__subtitle">
                          Номер акта - обязательно для заполнения
                          <br />
                          Формат поля «Номер акта» имеет вид ХХХХ-ХХ либо ХХХХ,
                          где Х – цифра от 0 до 9. Пример: 0124-01, 0035
                        </li>
                        <li className="article__subtitle">
                          Дата акта - обязательно для заполнения
                        </li>
                        <li className="article__subtitle">Ответственный ОТК</li>
                        <img src={recert1} />
                      </ol>
                      <li>Записать документ</li>
                      <li>Нажать на кнопку «Отправить на согласование»</li>
                      <img src={recert2} />
                      <li>Система 1С выведет вопрос:</li>
                      <img src={recertRequest} />
                      <li>
                        После нажатия «Да» - сотрудникам ОТК будет отправлено
                        сообщение email вида:
                      </li>
                      <img src={recertIntegration} />
                      <li>
                        Далее сотрудник ОТК находит данный документ в списке
                        документов «Изменение размеров листа», открывает,
                        проверяет и нажимает кнопку «Согласовать»
                      </li>
                      <li>
                        После нажатия на кнопку «Согласовать», сотруднику будет
                        задан вопрос:
                      </li>
                      <img src={recertSoglasovanya} />
                      <li>
                        После нажатия «Да» документ автоматически проводится.
                      </li>
                      <li>
                        <span style={{ color: "red" }}>Внимание!!! </span>После
                        согласования изменить данные в документе будет нельзя!
                      </li>
                    </ol>
                  </details>
                </li>
              </ol>
            </details>
          </li>
        </ol>
      </div>
    </div>
  );
}
