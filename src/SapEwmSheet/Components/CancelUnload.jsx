export default function CancelUnload(props) {
  return (
    <div id="cancel-unload" className="article cancel-unload">
      <p className="article__title">Вернуть назад выгруженный вагон</p>
      <div className="article__div">
        <ol>
            <li className="article__subtitle">
            <span className="bold"> Не имеет смысла. Все статусы выгруженного вагона останутся
             и выгружать возможно будет только вручную (в планшете его не будет).</span>
          </li>
          <li className="article__subtitle">
            Если вагон выгружен на склад, то возвратить его можно вернув листы на ворота
             и сделать стороно ПМ в  поставке.
          </li>
          
        </ol>
      </div>
    </div>
  );
}
