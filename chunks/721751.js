"use strict";
let s;
n.r(t), n("47120");
var a = n("735250"),
  i = n("470079"),
  l = n("120356"),
  r = n.n(l),
  o = n("873546"),
  u = n("442837"),
  d = n("481060"),
  c = n("980591"),
  f = n("605782"),
  h = n("353926"),
  E = n("703656"),
  g = n("980483"),
  m = n("612744"),
  _ = n("981631"),
  p = n("734541");
let T = n("575703"),
  S = n("2984"),
  A = [_.Routes.LOGIN, _.Routes.LOGIN_HANDOFF, _.Routes.REGISTER, _.Routes.INVITE(""), _.Routes.GIFT_CODE(""), _.Routes.GUILD_TEMPLATE_LOGIN(""), _.Routes.GUILD_TEMPLATE(""), _.Routes.DISABLE_EMAIL_NOTIFICATIONS, _.Routes.DISABLE_SERVER_HIGHLIGHT_NOTIFICATIONS, _.Routes.BILLING_PREMIUM_SUBSCRIBE, _.Routes.BILLING_PAYMENT_SOURCES_CREATE, _.Routes.BILLING_PAYMENTS, _.Routes.BILLING_PREMIUM_SWITCH_PLAN, _.Routes.BILLING_GUILD_SUBSCRIPTIONS_PURCHASE, _.Routes.VERIFY, _.Routes.VERIFY_HUB_EMAIL, _.Routes.REJECT_IP, _.Routes.REJECT_MFA, _.Routes.AUTHORIZE_IP, _.Routes.AUTHORIZE_PAYMENT, _.Routes.RESET, _.Routes.HANDOFF, _.Routes.REPORT, _.Routes.REPORT_SECOND_LOOK];

function I(e) {
  return A.some(t => e.startsWith(t))
}
let N = e => (s = e, e);

function R(e) {
  let {
    children: t
  } = e;
  switch (function() {
      let [e, t] = i.useState(!1), [n, a] = i.useState(true), l = function() {
        return null
      }(), r = (0, u.useStateFromStores)([h.default], () => h.default.hasLoadedExperiments);
      return ((0, c.default)(() => {}, 300), void 0 !== s) ? s : !n && r ? (!e && t(!0), N(function(e) {
        return "default"
      }(l))) : n ? N("default") : "loading"
    }()) {
    case "default":
      return (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)("img", {
          className: p.artwork,
          src: T,
          alt: ""
        }), (0, a.jsx)("img", {
          className: p.logoWithText,
          src: S,
          alt: ""
        }), t]
      });
    case "experimental":
    case "loading":
      return null
  }
}
class C extends i.Component {
  componentDidMount() {
    window.addEventListener("resize", this.handleResize)
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize)
  }
  mobileTransitionTo(e, t) {
    if (I(e))(0, E.transitionTo)(e, t);
    else {
      let n = null != t && null != t.search ? t.search : null;
      window.location = null == n ? e : "".concat(e, "?").concat(n)
    }
  }
  mobileReplaceWith(e) {
    I(e) ? (0, E.replaceWith)(e) : window.location = e
  }
  renderDefault() {
    let {
      splash: e
    } = this.props, t = (0, a.jsx)(f.default, {
      component: i.Fragment,
      children: i.Children.map(this.props.children, e => i.cloneElement(e, {
        transitionTo: E.transitionTo,
        replaceWith: E.replaceWith
      }))
    });
    return (0, a.jsx)("div", {
      className: p.characterBackground,
      children: (0, a.jsx)(d.HeadingLevel, {
        forceLevel: 1,
        children: null != e ? (0, a.jsxs)(a.Fragment, {
          children: [(0, a.jsx)(g.default, {
            show: !0,
            className: r()(p.logo)
          }), (0, a.jsx)(m.Splash, {
            splash: e,
            children: t
          })]
        }) : (0, a.jsx)(R, {
          children: t
        })
      })
    })
  }
  renderMobile() {
    return (0, a.jsx)(f.default, {
      component: i.Fragment,
      children: i.Children.map(this.props.children, e => i.cloneElement(e, {
        transitionTo: this.mobileTransitionTo,
        replaceWith: this.mobileReplaceWith
      }))
    })
  }
  render() {
    let {
      isMobileWidth: e
    } = this.state, t = navigator.userAgent.includes("GameLauncher");
    return e || o.isMobile || o.isTablet || t ? this.renderMobile() : this.renderDefault()
  }
  constructor(e) {
    var t, n, s;
    super(e), t = this, n = "handleResize", s = () => {
      this.setState({
        isMobileWidth: window.innerWidth <= 485
      })
    }, n in t ? Object.defineProperty(t, n, {
      value: s,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[n] = s, this.state = {
      isMobileWidth: window.innerWidth <= 485
    }
  }
}
t.default = C