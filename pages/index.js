import Head from 'next/head'
import { Fragment, useEffect } from 'react';

export default function Home() {
  // const initPage = () => {
  //   var menuId;
  //   function init() {
  //     menuId = document.getElementById("menu");
  //     document.addEventListener("scroll", scrollMenu, false);
  //   }
  //   function scrollMenu() {
  //     if (document.documentElement.scrollTop > 50) {
  //       menuId.classList.add("scroll");
  //       console.log('scroll');
  //     } else {
  //       menuId.classList.remove("scroll");
  //       console.log('no-scroll');
  //     }
  //   }
  //   document.addEventListener("DOMContentLoaded", init, false);
  // }
  // useEffect(() => {
  //   initPage();
  // },[]);
  return (
    <Fragment>
      <Head>
        <title>独角云动力 - 首页</title>
        <link rel="icon" href="/favicon.ico" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-SJTSF06G97"></script>
        <script src="/js/gtag.js"></script>
        <link rel='stylesheet' href='https://cdn.bootcdn.net/ajax/libs/font-awesome/5.15.2/css/all.min.css' />
        <script src="/js/init.js"></script>
      </Head>
      <nav className="nav" id="menu">
        <div className="wrap">
          <div className="brand">
            <img className="logo" src="/logo.svg" alt="Logo" />
            <span>独角云动力 / 小程序定制</span>
          </div>
          <button id="mobile-btn" className="hamburger-btn">
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>
          <ul className="top-menu" id="top-menu">
            <li><a href="#hero"><i className="fas fa-home"></i></a></li>
            <li><a href="#solution">解决方案</a></li>
            <li><a href="#system">后台管理</a></li>
            <li><a href="#customer">客户案例</a></li>
            <li><a href="#contact">联系我们</a></li>
          </ul>
        </div>
      </nav>
      <header id="hero" className="hero">
        <div className="content">
          <p>专业小程序定制</p>
          <p>让品牌的数字化之路轻松起步</p>
          <p>一切尽在掌握</p>
        </div>
      </header>
      <main className="main">
        <section id="solution" className="solution">
          <div className="tab-row">
            <div className="col-6">
              <h2>个性化解决方案</h2>
              <p>提供功能丰富的定制功能，</p>
              <p>优化各种使用场景的客户体验。</p>
            </div>
            <div className="col-6">
              <img className="img-solution" src="/images/solving-problems.png" alt="solution" />
            </div>
          </div>
        </section>
        <section id="system" className="feature">
          <div className="tab-row">
            <div className="col-6">
              <img className="img-feature" src="/images/relaxing-on-couch.png" alt="feature" />
            </div>
            <div className="col-6 right">
              <h2>超便捷后台管理</h2>
              <p>告别复杂难用的维护管理，</p>
              <p>编辑一次，同时同步到你的网站与小程序，</p>
              <p>让更多人看到你的品牌和产品。</p>
            </div>
          </div>
        </section>
        <section id="customer" className="customer">
          <div className="tab-row">
            <div className="col-6">
              <h2>客户案例</h2>
            </div>
            <div className="col-6">
              <img className="img-qrcode" src="/images/alqvimia-qrcode.png" alt="alqvimia mini-program's qrcode" />
              <h2>Alqvimia 爱奇蜜雅</h2>
              <p>西班牙护肤护体品牌</p>
            </div>
          </div>
        </section>
        <section id="contact" className="contact">
          <div className="tab-row">
            <div className="col-6">
              <img className="img-contact" src="/images/contact.jpeg" alt="contact" />
            </div>
            <div className="col-6">
              <h2>联系我们</h2>
              <p>使用微信扫描左侧二维码</p>
            </div>
          </div>
        </section>
      </main>
      <footer className="footer">
        <div className="left">&copy; 2021 上海里禾网络科技工作室</div>
        <div className="right"><a href="http://beian.miit.gov.cn" target="_blank">沪ICP备20003440号-1</a></div>
      </footer>
    </Fragment>
  )
}
