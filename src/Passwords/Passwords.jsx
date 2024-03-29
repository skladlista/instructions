import PasswordBlock from "./Components/PasswordBlock";
import "../basicStyles.scss";
import "./Passwords.scss";

export default function Passwords(props) {
  window.scrollTo(0, 0);
  props.setActivePage("Пароли");

  return (
    <div className="helpWrapper">
      <div className="article__subtitle passwords__subtitle">
        <p className="article__heading">SAP IEP</p>
        <PasswordBlock
          keyId={"SAPIEP"}
          login={"VBEZRUKOV"}
          password={"585759aA!"}
        />
        <PasswordBlock
          keyId={"SAPIEP"}
          login={"AFAZLIDINOVA"}
          password={"A@ztz6a6"}
        />
        <PasswordBlock
          keyId={"SAPIEP"}
          login={"APROKHOROVA"}
          password={"ZTZA@123"}
        />
      </div>

      <div className="article__subtitle">
        <p className="article__heading">SAP WMP/WMQ</p>
        <PasswordBlock
          keyId={"SAPWMP"}
          login={"AKAPRALOV"}
          password={"Alx202302@"}
        />
        <PasswordBlock
          keyId={"SAPWMQ"}
          login={"AKAPRALOV"}
          password={"Alx202302@"}
        />
      </div>
      <div className="article__subtitle">
        <p className="article__heading">Сервис Заявки ЖД</p>
        <PasswordBlock
          keyId={"ZHDREQUEST"}
          login={"ПаньшинД.Ю."}
          password={"0пдю1763"}
        />
      </div>
      <div className="article__subtitle">
        <p className="article__heading">Сайт Северсталь</p>
        <PasswordBlock
          keyId={"SheetsProvidersSVS"}
          login={"d.panshin@z-t-z.ru"}
          password={"D.panshin@2021"}
        />
      </div>
      <div className="article__subtitle">
        <p className="article__heading">Сайт ММК</p>
        <PasswordBlock
          keyId={"SheetsProvidersMMK"}
          login={"VINNIKOV333082_EXT"}
          password={"Vy261022@"}
        />
      </div>
      <div className="article__subtitle">
        <p className="article__heading">Учётка</p>
        <PasswordBlock
          keyId={"account"}
          login={"a.fazliddinova"}
          password={"A@01012023"}
        />
      </div>
      <div className="article__subtitle">
        <p className="article__heading">1C</p>
        <PasswordBlock
          keyId={"C11"}
          login={"Евдокимов В.О."}
          password={"0501"}
        />
        <PasswordBlock
          keyId={"C12"}
          login={"Гордеев Е.М."}
          password={"Egor4321"}
        />
        <PasswordBlock
          keyId={"C12"}
          login={"Поводова А.Л."}
          password={"3696"}
        />
      </div>
    </div>
  );
}
