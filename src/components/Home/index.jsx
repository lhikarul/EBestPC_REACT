import { useContext } from "react";
import cssContext from "../../server/cssContext";
import "../../css/index.css";
import { Link, useNavigate } from "react-router-dom";

(async () => {
  if (typeof window !== "undefined") {
    const { default: Home } = await import("./home.js");
    Home();
  }
})();

function Home() {
  const context = useContext(cssContext);
  if (typeof window === "undefined") {
    // context.css.push(styles._getCss());
  }
  return (
    <div>
      <div className="head">
        <div className="wrapper clearfix">
          <div className="clearfix" id="top">
            <h1 className="fl">
              <a href="/">
                <img src="img/logo.png" />
              </a>
            </h1>
            <div className="fr clearfix" id="top1">
              <p className="fl">
                <Link to={"/login"}>登录</Link>
                <a href="#" id="reg">
                  注册
                </a>
              </p>
              <form action="#" method="get" className="fl">
                <input type="text" placeholder="热门搜索：干花花瓶" />
                <input type="button" />
              </form>
              <div className="btn fl clearfix">
                <a href="mygxin.html">
                  <img src="img/grzx.png" />
                </a>
                <a href="#" className="er1">
                  <img src="img/ewm.png" />
                </a>
                <a href="cart.html">
                  <img src="img/gwc.png" />
                </a>
                <p>
                  <a href="#">
                    <img src="img/smewm.png" />
                  </a>
                </p>
              </div>
            </div>
          </div>
          <ul className="clearfix" id="bott">
            <li>
              <a href="index.html">首页</a>
            </li>
            <li>
              <a href="#">所有商品</a>
              <div className="sList">
                <div className="wrapper clearfix">
                  <a href="paint.html">
                    <dl>
                      <dt>
                        <img src="img/nav1.jpg" />
                      </dt>
                      <dd>浓情欧式</dd>
                    </dl>
                  </a>
                  <a href="paint.html">
                    <dl>
                      <dt>
                        <img src="img/nav2.jpg" />
                      </dt>
                      <dd>浪漫美式</dd>
                    </dl>
                  </a>
                  <a href="paint.html">
                    <dl>
                      <dt>
                        <img src="img/nav3.jpg" />
                      </dt>
                      <dd>雅致中式</dd>
                    </dl>
                  </a>
                  <a href="paint.html">
                    <dl>
                      <dt>
                        <img src="img/nav6.jpg" />
                      </dt>
                      <dd>简约现代</dd>
                    </dl>
                  </a>
                  <a href="paint.html">
                    <dl>
                      <dt>
                        <img src="img/nav7.jpg" />
                      </dt>
                      <dd>创意装饰</dd>
                    </dl>
                  </a>
                </div>
              </div>
            </li>
            <li>
              <a href="flowerDer.html">装饰摆件</a>
              <div className="sList2">
                <div className="clearfix">
                  <a href="proList.html">干花花艺</a>
                  <a href="vase_proList.html">花瓶花器</a>
                </div>
              </div>
            </li>
            <li>
              <a href="decoration.html">布艺软饰</a>
              <div className="sList2">
                <div className="clearfix">
                  <a href="zbproList.html">桌布罩件</a>
                  <a href="bzproList.html">抱枕靠垫</a>
                </div>
              </div>
            </li>
            <li>
              <a href="paint.html">墙式壁挂</a>
            </li>
            <li>
              <a href="perfume.html">蜡艺香薰</a>
            </li>
            <li>
              <a href="idea.html">创意家居</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="block_home_slider">
        <div id="home_slider" className="flexslider">
          <ul className="slides">
            <li>
              <div className="slide">
                <img src="img/banner2.jpg" />
              </div>
            </li>
            <li>
              <div className="slide">
                <img src="img/banner1.jpg" />
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="thImg">
        <div className="clearfix">
          <a href="vase_proList.html">
            <img src="img/i1.jpg" />
          </a>
          <a href="proList.html">
            <img src="img/i2.jpg" />
          </a>
          <a href="#2">
            <img src="img/i3.jpg" />
          </a>
        </div>
      </div>

      <div className="news">
        <div className="wrapper">
          <h2>
            <img src="img/ih1.jpg" />
          </h2>
          <div className="top clearfix">
            <a href="proDetail.html">
              <img src="img/n1.jpg" />
              <p></p>
            </a>
            <a href="proDetail.html">
              <img src="img/n2.jpg" />
              <p></p>
            </a>
            <a href="proDetail.html">
              <img src="img/n3.jpg" />
              <p></p>
            </a>
          </div>
          <div className="bott clearfix">
            <a href="proDetail.html">
              <img src="img/n4.jpg" />
              <p></p>
            </a>
            <a href="proDetail.html">
              <img src="img/n5.jpg" />
              <p></p>
            </a>
            <a href="proDetail.html">
              <img src="img/n6.jpg" />
              <p></p>
            </a>
          </div>
          <h2>
            <img src="img/ih2.jpg" />
          </h2>
          <div className="flower clearfix tran">
            <a href="proDetail.html" className="clearfix">
              <dl>
                <dt>
                  <span className="abl"></span>
                  <img src="img/flo1.jpg" />
                  <span className="abr"></span>
                </dt>
                <dd>【花艺】七头美丽玫瑰仿真花束</dd>
                <dd>
                  <span>¥ 79.00</span>
                </dd>
              </dl>
            </a>
            <a href="proDetail.html">
              <dl>
                <dt>
                  <span className="abl"></span>
                  <img src="img/flo2.jpg" />
                  <span className="abr"></span>
                </dt>
                <dd>【花艺】七头美丽玫瑰仿真花束</dd>
                <dd>
                  <span>¥ 79.00</span>
                </dd>
              </dl>
            </a>
            <a href="proDetail.html">
              <dl>
                <dt>
                  <span className="abl"></span>
                  <img src="img/flo3.jpg" />
                  <span className="abr"></span>
                </dt>
                <dd>【花艺】七头美丽玫瑰仿真花束</dd>
                <dd>
                  <span>¥ 79.00</span>
                </dd>
              </dl>
            </a>
          </div>
          <div className="flower clearfix tran">
            <a href="proDetail.html">
              <dl>
                <dt>
                  <span className="abl"></span>
                  <img src="img/flo4.jpg" />
                  <span className="abr"></span>
                </dt>
                <dd>【花艺】七头美丽玫瑰仿真花束</dd>
                <dd>
                  <span>¥ 79.00</span>
                </dd>
              </dl>
            </a>
            <a href="proDetail.html">
              <dl>
                <dt>
                  <span className="abl"></span>
                  <img src="img/flo5.jpg" />
                  <span className="abr"></span>
                </dt>
                <dd>【花艺】七头美丽玫瑰仿真花束</dd>
                <dd>
                  <span>¥ 79.00</span>
                </dd>
              </dl>
            </a>
            <a href="proDetail.html">
              <dl>
                <dt>
                  <span className="abl"></span>
                  <img src="img/flo6.jpg" />
                  <span className="abr"></span>
                </dt>
                <dd>【花艺】七头美丽玫瑰仿真花束</dd>
                <dd>
                  <span>¥ 79.00</span>
                </dd>
              </dl>
            </a>
          </div>
        </div>
      </div>

      <a href="#" className="ad">
        <img src="img/ib1.jpg" />
      </a>

      <div className="people">
        <div className="wrapper">
          <h2>
            <img src="img/ih3.jpg" />
          </h2>
          <div className="pList clearfix tran">
            <a href="proDetail.html">
              <dl>
                <dt>
                  <span className="abl"></span>
                  <img src="img/s7.jpg" />
                  <span className="abr"></span>
                </dt>
                <dd>【最家】不锈钢壁饰墙饰软装</dd>
                <dd>
                  <span>￥688.00</span>
                </dd>
              </dl>
            </a>
            <a href="proDetail.html">
              <dl>
                <dt>
                  <span className="abl"></span>
                  <img src="img/s10.jpg" />
                  <span className="abr"></span>
                </dt>
                <dd>【最家】小城动物木板画壁挂北欧</dd>
                <dd>
                  <span>￥188.00</span>
                </dd>
              </dl>
            </a>
            <a href="proDetail.html">
              <dl>
                <dt>
                  <span className="abl"></span>
                  <img src="img/s4.jpg" />
                  <span className="abr"></span>
                </dt>
                <dd>【最家】玄关假山水壁饰背景墙饰挂件创意</dd>
                <dd>
                  <span>￥599.00</span>
                </dd>
              </dl>
            </a>
            <a href="proDetail.html">
              <dl>
                <dt>
                  <span className="abl"></span>
                  <img src="img/s9.jpg" />
                  <span className="abr"></span>
                </dt>
                <dd>【最家】金属树枝壁饰铜鸟装饰品</dd>
                <dd>
                  <span>￥928.00</span>
                </dd>
              </dl>
            </a>
          </div>
          <div className="pList clearfix tran">
            <a href="proDetail.html">
              <dl>
                <dt>
                  <span className="abl"></span>
                  <img src="img/s6.jpg" />
                  <span className="abr"></span>
                </dt>
                <dd>【最家】金属壁饰创意背景墙面挂件创意</dd>
                <dd>
                  <span>￥228.00</span>
                </dd>
              </dl>
            </a>
            <a href="proDetail.html">
              <dl>
                <dt>
                  <span className="abl"></span>
                  <img src="img/s8.jpg" />
                  <span className="abr"></span>
                </dt>
                <dd>【最家】小城动物木板画壁挂北欧</dd>
                <dd>
                  <span>￥199.00</span>
                </dd>
              </dl>
            </a>
            <a href="proDetail.html">
              <dl>
                <dt>
                  <span className="abl"></span>
                  <img src="img/s12.jpg" />
                  <span className="abr"></span>
                </dt>
                <dd>【最家】欧式复古挂钟创意餐厅钟表家居挂件</dd>
                <dd>
                  <span>￥666.00</span>
                </dd>
              </dl>
            </a>
            <a href="proDetail.html">
              <dl>
                <dt>
                  <span className="abl"></span>
                  <img src="img/s1.jpg" />
                  <span className="abr"></span>
                </dt>
                <dd>【最家】客厅地中海欧式现代相片墙创意</dd>
                <dd>
                  <span>￥59.80</span>
                </dd>
              </dl>
            </a>
          </div>
          <div className="pList clearfix tran">
            <a href="proDetail.html">
              <dl>
                <dt>
                  <span className="abl"></span>
                  <img src="img/s5.jpg" />
                  <span className="abr"></span>
                </dt>
                <dd>【最家】铁艺荷叶壁挂软装背景墙上装饰品</dd>
                <dd>
                  <span>￥800.00</span>
                </dd>
              </dl>
            </a>
            <a href="proDetail.html">
              <dl>
                <dt>
                  <span className="abl"></span>
                  <img src="img/s3.jpg" />
                  <span className="abr"></span>
                </dt>
                <dd>【最家】欧式照片墙 创意组合结婚礼物</dd>
                <dd>
                  <span>￥189.00</span>
                </dd>
              </dl>
            </a>
            <a href="proDetail.html">
              <dl>
                <dt>
                  <span className="abl"></span>
                  <img src="img/s2.jpg" />
                  <span className="abr"></span>
                </dt>
                <dd>【最家】欧式钟表相框墙挂墙创意组合</dd>
                <dd>
                  <span>￥148.00</span>
                </dd>
              </dl>
            </a>
            <a href="proDetail.html">
              <dl>
                <dt>
                  <span className="abl"></span>
                  <img src="img/s11.jpg" />
                  <span className="abr"></span>
                </dt>
                <dd>【最家】小城动物木板画壁挂北欧</dd>
                <dd>
                  <span>￥188.00</span>
                </dd>
              </dl>
            </a>
          </div>
        </div>
      </div>

      <div className="gotop">
        <a href="cart.html">
          <dl>
            <dt>
              <img src="img/gt1.png" />
            </dt>
            <dd>
              去购
              <br />
              物车
            </dd>
          </dl>
        </a>
        <a href="#" className="dh">
          <dl>
            <dt>
              <img src="img/gt2.png" />
            </dt>
            <dd>
              联系
              <br />
              客服
            </dd>
          </dl>
        </a>
        <a href="mygxin.html">
          <dl>
            <dt>
              <img src="img/gt3.png" />
            </dt>
            <dd>
              个人
              <br />
              中心
            </dd>
          </dl>
        </a>
        <a href="#" className="toptop" style={{ display: "none" }}>
          <dl>
            <dt>
              <img src="img/gt4.png" />
            </dt>
            <dd>
              返回
              <br />
              顶部
            </dd>
          </dl>
        </a>
        <p>400-800-8200</p>
      </div>
      <div className="footer">
        <div className="top">
          <div className="wrapper">
            <div className="clearfix">
              <a href="#2" className="fl">
                <img src="img/foot1.png" />
              </a>
              <span className="fl">7天无理由退货</span>
            </div>
            <div className="clearfix">
              <a href="#2" className="fl">
                <img src="img/foot2.png" />
              </a>
              <span className="fl">15天免费换货</span>
            </div>
            <div className="clearfix">
              <a href="#2" className="fl">
                <img src="img/foot3.png" />
              </a>
              <span className="fl">满599包邮</span>
            </div>
            <div className="clearfix">
              <a href="#2" className="fl">
                <img src="img/foot4.png" />
              </a>
              <span className="fl">手机特色服务</span>
            </div>
          </div>
        </div>
        <p className="dibu">
          最家家居&copy;2013-2017公司版权所有 京ICP备080100-44备0000111000号
          <br />
          违法和不良信息举报电话：400-800-8200，本网站所列数据，除特殊说明，所有数据均出自我司实验室测试
        </p>
      </div>
    </div>
  );
}

export default Home;
