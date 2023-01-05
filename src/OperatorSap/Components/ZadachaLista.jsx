export default function ZadachaLista() {
  return (
    <div id="zadacha-lista" className="article zadacha-lista">
      <p className="article__title">ЗАДАЧА ЛИСТА</p>
      <div className="article__div">
        <ol>
          <li className="article__subtitle">
            В картах буква K написана латиницей
          </li>
          <li className="article__subtitle">
            Найти листы заданные за предыдущие сутки
          </li>
          <li className="article__subtitle">
            Найти листы в таблице с нужным поставщиком
          </li>
          <li className="article__subtitle">
            Найти листы в MB51 (вид движения – 311, склад – 3037, и вставить партию SAP)
          </li>
          <li className="article__subtitle">Сравнить вес</li>
          <li className="article__subtitle">
            Если сошлось, добавить дату задачи и прописать «автомат» правее
          </li>
          <li className="article__subtitle">
            Если не сошлось, то выяснить каких нет и проверить их в MB51 только по партии
          </li>
        </ol>
      </div>
    </div>
  );
}
