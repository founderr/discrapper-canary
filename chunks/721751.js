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
  _ = n("624138"),
  p = n("981631"),
  T = n("734541");
let S = n("575703"),
  A = n("2984"),
  I = (0, _.cssValueToNumber)(T.responsiveWidthMobile),
  N = [p.Routes.LOGIN, p.Routes.LOGIN_HANDOFF, p.Routes.REGISTER, p.Routes.INVITE(""), p.Routes.GIFT_CODE(""), p.Routes.GUILD_TEMPLATE_LOGIN(""), p.Routes.GUILD_TEMPLATE(""), p.Routes.DISABLE_EMAIL_NOTIFICATIONS, p.Routes.DISABLE_SERVER_HIGHLIGHT_NOTIFICATIONS, p.Routes.BILLING_PREMIUM_SUBSCRIBE, p.Routes.BILLING_PAYMENT_SOURCES_CREATE, p.Routes.BILLING_PAYMENTS, p.Routes.BILLING_PREMIUM_SWITCH_PLAN, p.Routes.BILLING_GUILD_SUBSCRIPTIONS_PURCHASE, p.Routes.VERIFY, p.Routes.VERIFY_HUB_EMAIL, p.Routes.REJECT_IP, p.Routes.REJECT_MFA, p.Routes.AUTHORIZE_IP, p.Routes.AUTHORIZE_PAYMENT, p.Routes.RESET, p.Routes.HANDOFF, p.Routes.REPORT, p.Routes.REPORT_SECOND_LOOK];

function R(e) {
  return N.some(t => e.startsWith(t))
}
let C = e => (s = e, e);

function O(e) {
  let {
    children: t
  } = e;
  switch (function() {
      let [e, t] = i.useState(!1), [n, a] = i.useState(true), l = function() {
        return null
      }(), r = (0, u.useStateFromStores)([h.default], () => h.default.hasLoadedExperiments);
      return ((0, c.default)(() => {}, 300), void 0 !== s) ? s : !n && r ? (!e && t(!0), C(function(e) {
        return "default"
      }(l))) : n ? C("default") : "loading"
    }()) {
    case "default":
      return (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)("img", {
          className: T.artwork,
          src: S,
          alt: ""
        }), (0, a.jsx)("img", {
          className: T.logoWithText,
          src: A,
          alt: ""
        }), t]
      });
    case "experimental":
    case "loading":
      return null
  }
}
class v extends i.Component {
  componentDidMount() {
    window.addEventListener("resize", this.handleResize)
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize)
  }
  mobileTransitionTo(e, t) {
    if (R(e))(0, E.transitionTo)(e, t);
    else {
      let n = null != t && null != t.search ? t.search : null;
      window.location = null == n ? e : "".concat(e, "?").concat(n)
    }
  }
  mobileReplaceWith(e) {
    R(e) ? (0, E.replaceWith)(e) : window.location = e
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
      className: T.characterBackground,
      children: (0, a.jsx)(d.HeadingLevel, {
        forceLevel: 1,
        children: null != e ? (0, a.jsxs)(a.Fragment, {
          children: [(0, a.jsx)(g.default, {
            show: !0,
            className: r()(T.logo)
          }), (0, a.jsx)(m.Splash, {
            splash: e,
            children: t
          })]
        }) : (0, a.jsx)(O, {
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
        isMobileWidth: window.innerWidth <= I
      })
    }, n in t ? Object.defineProperty(t, n, {
      value: s,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[n] = s, this.state = {
      isMobileWidth: window.innerWidth <= I
    }
  }
}
t.default = v