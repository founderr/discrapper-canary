n(47120);
var s, i = n(735250),
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
  T = n(331651);

function g(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let p = d.Z.getArticleURL(_.BhN.VERIFICATION_FAQ);
class N extends(s = l.PureComponent) {
  renderFields() {
    let {
      types: e,
      captchaKey: t,
      theme: n,
      onCaptchaVerify: s
    } = this.props;
    return (0, i.jsx)(i.Fragment, {
      children: e.map(e => e === _.PUi.CAPTCHA ? (0, i.jsx)(h.Z, {
        onVerify: s,
        theme: n
      }, t) : (0, i.jsx)(c.Button, {
        className: r()(T.marginBottom20),
        onClick: () => this.handleClick(e),
        children: u.Z.getButtonTitle(e)
      }, e))
    })
  }
  render() {
    return (0, i.jsxs)(E.Z, {
      className: m.verification,
      align: E.Z.Align.CENTER,
      direction: E.Z.Direction.VERTICAL,
      children: [(0, i.jsxs)(E.Z, {
        className: r()(m.container, {
          [m.isMobile]: o.tq
        }),
        direction: E.Z.Direction.VERTICAL,
        align: E.Z.Align.CENTER,
        justify: E.Z.Justify.CENTER,
        children: [(0, i.jsx)("div", {
          className: m.image
        }), (0, i.jsx)("div", {
          className: r()(m.title, T.marginTop20),
          children: I.Z.Messages.VERIFICATION_TITLE
        }), (0, i.jsx)("div", {
          className: r()(m.body, T.marginTop4, T.marginBottom20),
          children: I.Z.Messages.VERIFICATION_BODY_WITH_HELP_LINK.format({
            helpCenterURL: p
          })
        }), (0, i.jsx)(E.Z, {
          grow: 0,
          direction: E.Z.Direction.VERTICAL,
          justify: E.Z.Justify.CENTER,
          children: this.renderFields()
        })]
      }), (0, i.jsx)("div", {
        className: r()(m.footer, T.marginTop20),
        children: I.Z.Messages.VERIFICATION_FOOTER
      }), (0, i.jsxs)(E.Z, {
        className: r()(T.marginTop4, T.marginBottom20),
        grow: 0,
        children: [(0, i.jsx)("div", {
          className: r()(m.footer, m.footerAction),
          children: I.Z.Messages.VERIFICATION_FOOTER_SUPPORT.format({
            supportURL: d.Z.getSubmitRequestURL()
          })
        }), (0, i.jsx)("div", {
          className: r()(m.footer, m.footerBullet),
          children: "•"
        }), (0, i.jsx)("div", {
          className: r()(m.footer, m.footerAction),
          children: I.Z.Messages.VERIFICATION_FOOTER_LOGOUT.format({
            logoutOnClick: this.props.onLogout
          })
        })]
      })]
    })
  }
  constructor(...e) {
    super(...e), g(this, "handleClick", e => {
      let {
        onClick: t
      } = this.props;
      null == t || t(e)
    })
  }
}
g(N, "defaultProps", {
  types: [_.PUi.CAPTCHA],
  onCaptchaVerify: _.dG4,
  onLogout: _.dG4
}), t.Z = N