r.r(s);
var o = r(735250),
  a = r(470079),
  t = r(120356),
  c = r.n(t),
  n = r(613828),
  d = r(481060),
  i = r(710845),
  l = r(361207),
  m = r(954824),
  p = r(981631),
  h = r(689938),
  w = r(548582);
let x = [{
    id: "discord",
    getName: () => h.Z.Messages.DESKTOP_APP,
    url: (0, l.t3)()
  }, {
    id: "chrome",
    getName: () => h.Z.Messages.BROWSER_CHROME,
    url: "https://www.google.com/chrome/browser/desktop/"
  }, {
    id: "firefox",
    getName: () => h.Z.Messages.BROWSER_FIREFOX,
    url: "https://www.mozilla.org/en-US/firefox/new/?scene=2"
  }],
  u = {
    discord: "browserDiscord",
    firefox: "browserFirefox",
    chrome: "browserChrome"
  };
class N extends a.Component {
  render() {
    let e;
    let {
      id: s,
      getName: r,
      url: a
    } = this.props.browser;
    return e = null != a ? (0, o.jsx)(d.Anchor, {
      className: w.btn,
      href: a,
      children: h.Z.Messages.DOWNLOAD
    }) : (0, o.jsx)(n.rU, {
      className: w.btn,
      to: p.Z5c.APPS,
      children: h.Z.Messages.DOWNLOAD
    }), (0, o.jsxs)("li", {
      className: w.browserItem,
      children: [(0, o.jsx)("div", {
        className: c()(w.browserItemText, w.browser, w[u[s]])
      }), (0, o.jsx)("div", {
        className: w.browserItemText,
        children: r()
      }), e]
    })
  }
}
class b extends a.Component {
  componentDidMount() {
    m.Z.launch("discord://" + this.props.location.pathname, e => {
      new i.Z("UnsupportedBrowser").log("discord://", e)
    })
  }
  render() {
    let e = x.map(e => (0, o.jsx)(N, {
      browser: e
    }, e.id));
    return (0, o.jsx)("div", {
      className: w.unsupportedBrowser,
      children: (0, o.jsxs)("div", {
        className: w.wrap,
        children: [(0, o.jsx)(d.H, {
          className: w.title,
          children: h.Z.Messages.UNSUPPORTED_BROWSER_TITLE
        }), (0, o.jsx)("p", {
          className: w.message,
          children: h.Z.Messages.UNSUPPORTED_BROWSER_BODY
        }), (0, o.jsx)("ul", {
          className: w.browserList,
          children: e
        })]
      })
    })
  }
}
s.default = b