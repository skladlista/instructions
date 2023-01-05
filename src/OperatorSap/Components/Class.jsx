export default function Class() {
  return (
    <div id="class" className="article class">
      <p className="article__title">ПРОСМОТР КЛАССИФИКАЦИИ МАТЕРИАЛА В ERP</p>
      <div className="article__div">
        <ol>
          <li className="article__subtitle">
            <p>Транзакция MM03</p>
            <ol className={"sublist"}>
              <li>Ввод материала</li>
              <li>Ракус классификация (если нет, то значит не заведена)</li>
              <li>Вид класса 001 </li>
            </ol>
          </li>
        </ol>
      </div>
    </div>
  );
}
