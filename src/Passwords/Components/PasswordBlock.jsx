import LoginPassCopy from "../../scripts/LoginPassCopy";
import CopyButton from "../../assets/copy_button.png"

export default function PasswordBlock(props) {
  return (
    <div>
      <div className="login-and-pass">
        <div>
          <img
            width="20px"
            src={CopyButton}
            alt="..."
            onClick={() => {
              LoginPassCopy(
                props.keyId + props.login + props.password + "login"
              );
            }}
          />
          <input
            id={props.keyId + props.login + props.password + "login"}
            type="text"
            placeholder="login"
            defaultValue={props.login}
          />
        </div>
        <div>
          <img
            width="20px"
            src={CopyButton}

            alt="..."
            onClick={() => {
              LoginPassCopy(
                props.keyId + props.login + props.password + "password"
              );
            }}
          />
          <input
            id={props.keyId + props.login + props.password + "password"}
            type="password"
            placeholder="password"
            defaultValue={props.password}
          />
        </div>
      </div>
    </div>
  );
}
