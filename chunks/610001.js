n(47120);
var i, s = n(735250),
  l = n(470079),
  a = n(120356),
  r = n.n(a),
  o = n(873546),
  c = n(481060),
  u = n(1964),
  d = n(63063),
  E = n(285952),
  h = n(672705),
  _ = n(981631),
  I = n(689938),
  m = n(990330),
  g = n(331651);

function p(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let T = d.Z.getArticleURL(_.BhN.VERIFICATION_FAQ);
class N extends(i = l.PureComponent) {
  renderFields() {
    let {
      types: e,
      captchaKey: t,
      theme: n,
      onCaptchaVerify: i
    } = this.props;
    return (0, s.jsx)(s.Fragment, {
      children: e.map(e => e === _.PUi.CAPTCHA ? (0, s.jsx)(h.Z, {
        onVerify: i,
        theme: n
      }, t) : (0, s.jsx)(c.Button, {
        className: r()(g.marginBottom20),
        onClick: () => this.handleClick(e),
        children: u.Z.getButtonTitle(e)
      }, e))
    })
  }
  render() {
    return (0, s.jsxs)(E.Z, {
      className: m.verification,
      align: E.Z.Align.CENTER,
      direction: E.Z.Direction.VERTICAL,
      children: [(0, s.jsxs)(E.Z, {
        className: r()(m.container, {
          [m.isMobile]: o.tq
        }),
        direction: E.Z.Direction.VERTICAL,
        align: E.Z.Align.CENTER,
        justify: E.Z.Justify.CENTER,
        children: [(0, s.jsx)("div", {
          className: m.image
        }), (0, s.jsx)("div", {
          className: r()(m.title, g.marginTop20),
          children: I.Z.Messages.VERIFICATION_TITLE
        }), (0, s.jsx)("div", {
          className: r()(m.body, g.marginTop4, g.marginBottom20),
          children: I.Z.Messages.VERIFICATION_BODY_WITH_HELP_LINK.format({
            helpCenterURL: T
          })
        }), (0, s.jsx)(E.Z, {
          grow: 0,
          direction: E.Z.Direction.VERTICAL,
          justify: E.Z.Justify.CENTER,
          children: this.renderFields()
        })]
      }), (0, s.jsx)("div", {
        className: r()(m.footer, g.marginTop20),
        children: I.Z.Messages.VERIFICATION_FOOTER
      }), (0, s.jsxs)(E.Z, {
        className: r()(g.marginTop4, g.marginBottom20),
        grow: 0,
        children: [(0, s.jsx)("div", {
          className: r()(m.footer, m.footerAction),
          children: I.Z.Messages.VERIFICATION_FOOTER_SUPPORT.format({
            supportURL: d.Z.getSubmitRequestURL()
          })
        }), (0, s.jsx)("div", {
          className: r()(m.footer, m.footerBullet),
          children: "•"
        }), (0, s.jsx)("div", {
          className: r()(m.footer, m.footerAction),
          children: I.Z.Messages.VERIFICATION_FOOTER_LOGOUT.format({
            logoutOnClick: this.props.onLogout
          })
        })]
      })]
    })
  }
  constructor(...e) {
    super(...e), p(this, "handleClick", e => {
      let {
        onClick: t
      } = this.props;
      null == t || t(e)
    })
  }
}
p(N, "defaultProps", {
  types: [_.PUi.CAPTCHA],
  onCaptchaVerify: _.dG4,
  onLogout: _.dG4
}), t.Z = N