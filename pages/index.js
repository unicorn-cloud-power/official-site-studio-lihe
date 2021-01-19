import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>独角云动力 - 首页</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel='stylesheet' href='https://cdn.bootcdn.net/ajax/libs/font-awesome/5.15.2/css/regular.min.css' />
      </Head>

      <nav className="nav" id="menu">
        <div className="wrap">
          <div className="brand">
            <img src="/logo.svg" />
            <span>独角云动力</span>
          </div>
          <button id="mobile-btn" className="hamburger-btn">
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>
          <ul className="top-menu" id="top-menu">
            <li><a href="#">产品服务</a></li>
            <li><a href="#">联系我们</a></li>
          </ul>
        </div>
      </nav>
      <header className="hero">
        <div className="content">
          <p>独角云动力</p>
          <p>专业小程序定制</p>
          <div className="clouds">
            <div className="cloud x1"></div>
            <div className="cloud x2"></div>
            <div className="cloud x3"></div>
            <div className="cloud x4"></div>
            <div className="cloud x5"></div>
          </div>
        </div>
      </header>
      <footer className="footer">
        <div className="tab-row">
          <div className="col-6">&copy; 2021 上海里禾网络科技工作室 </div>
          <div className="col-6"> <a href="http://beian.miit.gov.cn" target="_blank">沪ICP备20003440号-1</a></div>
        </div>
      </footer>
    </div>
  )
}
