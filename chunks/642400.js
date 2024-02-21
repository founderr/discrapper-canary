"use strict";
n.r(t), n.d(t, {
  default: function() {
    return m
  }
}), n("222007");
var a = n("37983"),
  s = n("884691"),
  i = n("414456"),
  l = n.n(i),
  r = n("394846"),
  o = n("77078"),
  u = n("892313"),
  d = n("701909"),
  c = n("145131"),
  f = n("109507"),
  E = n("49111"),
  h = n("782340"),
  _ = n("450552"),
  C = n("890957");
let I = d.default.getArticleURL(E.HelpdeskArticles.VERIFICATION_FAQ);
class S extends s.PureComponent {
  renderFields() {
    let {
      types: e,
      captchaKey: t,
      theme: n,
      onCaptchaVerify: s
    } = this.props;
    return (0, a.jsx)(a.Fragment, {
      children: e.map(e => e === E.VerificationTypes.CAPTCHA ? (0, a.jsx)(f.default, {
        onVerify: s,
        theme: n
      }, t) : (0, a.jsx)(o.Button, {
        className: l(C.marginBottom20),
        onClick: () => this.handleClick(e),
        children: u.default.getButtonTitle(e)
      }, e))
    })
  }
  render() {
    return (0, a.jsxs)(c.default, {
      className: _.verification,
      align: c.default.Align.CENTER,
      direction: c.default.Direction.VERTICAL,
      children: [(0, a.jsxs)(c.default, {
        className: l(_.container, {
          [_.isMobile]: r.isMobile
        }),
        direction: c.default.Direction.VERTICAL,
        align: c.default.Align.CENTER,
        justify: c.default.Justify.CENTER,
        children: [(0, a.jsx)("div", {
          className: _.image
        }), (0, a.jsx)("div", {
          className: l(_.title, C.marginTop20),
          children: h.default.Messages.VERIFICATION_TITLE
        }), (0, a.jsx)("div", {
          className: l(_.body, C.marginTop4, C.marginBottom20),
          children: h.default.Messages.VERIFICATION_BODY_WITH_HELP_LINK.format({
            helpCenterURL: I
          })
        }), (0, a.jsx)(c.default, {
          grow: 0,
          direction: c.default.Direction.VERTICAL,
          justify: c.default.Justify.CENTER,
          children: this.renderFields()
        })]
      }), (0, a.jsx)("div", {
        className: l(_.footer, C.marginTop20),
        children: h.default.Messages.VERIFICATION_FOOTER
      }), (0, a.jsxs)(c.default, {
        className: l(C.marginTop4, C.marginBottom20),
        grow: 0,
        children: [(0, a.jsx)("div", {
          className: l(_.footer, _.footerAction),
          children: h.default.Messages.VERIFICATION_FOOTER_SUPPORT.format({
            supportURL: d.default.getSubmitRequestURL()
          })
        }), (0, a.jsx)("div", {
          className: l(_.footer, _.footerBullet),
          children: "•"
        }), (0, a.jsx)("div", {
          className: l(_.footer, _.footerAction),
          children: h.default.Messages.VERIFICATION_FOOTER_LOGOUT.format({
            logoutOnClick: this.props.onLogout
          })
        })]
      })]
    })
  }
  constructor(...e) {
    super(...e), this.handleClick = e => {
      let {
        onClick: t
      } = this.props;
      null == t || t(e)
    }
  }
}
S.defaultProps = {
  types: [E.VerificationTypes.CAPTCHA],
  onCaptchaVerify: E.NOOP,
  onLogout: E.NOOP
};
var m = S