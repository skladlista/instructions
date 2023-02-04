export default function SettingsConnections() {
  return (
    <div id="ssz-check" className="article ssz-check">
      <p className="article__title">Настройки подключений</p>
      <div className="article__div">
        <ol>
          <li className="article__subtitle">
            <p>
              WMP
            </p>
            <ol className="article__list sublist">
              <li>
                192.168.55.42
              </li>
              <li>
                00
              </li>
            </ol>
          </li>

          <li className="article__subtitle">
            <p>
              IEP
            </p>
            <ol className="article__list sublist">
              <li>
                192.168.55.33
              </li>
              <li>
                40
              </li>
            </ol>
          </li>

          <li className="article__subtitle">
            <p>
              WMQ
            </p>
            <ol className="article__list sublist">
              <li>
                192.168.55.41
              </li>
              <li>
                00
              </li>
            </ol>
          </li>

        </ol>
      </div>
    </div>
  );
}
