import { useNavigate } from "react-router-dom";
import "../../css/login.css";
function Login() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };
  return (
    <div className="login">
      <form action="#" method="post">
        <h1>
          <span onClick={handleClick}>
            <img src="img/temp/logo.png" />
          </span>
        </h1>
        <p></p>
        <div className="msg-warn hide">
          <b></b>公共场所不建议自动登录，以防账号丢失
        </div>
        <p>
          <input type="text" name="" value="" placeholder="昵称/邮箱/手机号" />
        </p>
        <p>
          <input type="text" name="" value="" placeholder="密码" />
        </p>
        <p>
          <input type="submit" name="" value="登  录" />
        </p>
        <p className="txt">
          <a className="" href="reg.html">
            免费注册
          </a>
          <a href="forget.html">忘记密码？</a>
        </p>
      </form>
    </div>
  );
}

export default Login;
