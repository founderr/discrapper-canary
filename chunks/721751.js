"use strict";
n.r(t);
var s = n("735250"),
  a = n("470079"),
  i = n("120356"),
  r = n.n(i),
  l = n("873546"),
  o = n("481060"),
  u = n("605782"),
  d = n("566010"),
  c = n("703656"),
  f = n("980483"),
  h = n("612744"),
  E = n("624138"),
  g = n("830064"),
  _ = n("981631"),
  m = n("734541");
let p = n("407025"),
  T = n("2984"),
  A = (0, E.cssValueToNumber)(m.responsiveWidthMobile),
  I = [_.Routes.LOGIN, _.Routes.LOGIN_HANDOFF, _.Routes.REGISTER, _.Routes.INVITE(""), _.Routes.GIFT_CODE(""), _.Routes.GUILD_TEMPLATE_LOGIN(""), _.Routes.GUILD_TEMPLATE(""), _.Routes.DISABLE_EMAIL_NOTIFICATIONS, _.Routes.DISABLE_SERVER_HIGHLIGHT_NOTIFICATIONS, _.Routes.BILLING_PREMIUM_SUBSCRIBE, _.Routes.BILLING_PAYMENT_SOURCES_CREATE, _.Routes.BILLING_PAYMENTS, _.Routes.BILLING_PREMIUM_SWITCH_PLAN, _.Routes.BILLING_GUILD_SUBSCRIPTIONS_PURCHASE, _.Routes.VERIFY, _.Routes.VERIFY_HUB_EMAIL, _.Routes.REJECT_IP, _.Routes.REJECT_MFA, _.Routes.AUTHORIZE_IP, _.Routes.AUTHORIZE_PAYMENT, _.Routes.RESET, _.Routes.HANDOFF, _.Routes.REPORT, _.Routes.REPORT_SECOND_LOOK];

function S(e) {
  return I.some(t => e.startsWith(t))
}
class N extends a.Component {
  componentDidMount() {
    window.addEventListener("resize", this.handleResize)
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize)
  }
  mobileTransitionTo(e, t) {
    if (S(e))(0, c.transitionTo)(e, t);
    else {
      let n = null != t && null != t.search ? t.search : null;
      window.location = null == n ? e : "".concat(e, "?").concat(n)
    }
  }
  mobileReplaceWith(e) {
    S(e) ? (0, c.replaceWith)(e) : window.location = e
  }
  renderDefault() {
    let {
      splash: e
    } = this.props, {
      isWelcomeRefreshEnabled: t
    } = d.default.getCurrentConfig({
      location: "authWrapper"
    }, {
      autoTrackExposure: !0
    }), n = (0, s.jsx)(u.default, {
      component: a.Fragment,
      children: a.Children.map(this.props.children, e => a.cloneElement(e, {
        transitionTo: c.transitionTo,
        replaceWith: c.replaceWith
      }))
    });
    return (0, s.jsx)("div", {
      className: m.characterBackground,
      children: (0, s.jsx)(o.HeadingLevel, {
        forceLevel: 1,
        children: null != e ? (0, s.jsxs)(s.Fragment, {
          children: [(0, s.jsx)(f.default, {
            show: !0,
            className: r()(m.logo)
          }), (0, s.jsx)(h.Splash, {
            splash: e,
            children: n
          })]
        }) : t ? (0, s.jsxs)(s.Fragment, {
          children: [(0, s.jsx)("img", {
            className: m.artwork,
            src: p,
            alt: ""
          }), (0, s.jsx)("img", {
            className: m.logoWithText,
            src: T,
            alt: ""
          }), n]
        }) : (0, s.jsxs)(s.Fragment, {
          children: [(0, s.jsx)(g.default, {
            className: m.artwork,
            preserveAspectRatio: "xMinYMin slice"
          }), n]
        })
      })
    })
  }
  renderMobile() {
    return (0, s.jsx)(u.default, {
      component: a.Fragment,
      children: a.Children.map(this.props.children, e => a.cloneElement(e, {
        transitionTo: this.mobileTransitionTo,
        replaceWith: this.mobileReplaceWith
      }))
    })
  }
  render() {
    let {
      isMobileWidth: e
    } = this.state, t = navigator.userAgent.includes("GameLauncher");
    return e || l.isMobile || l.isTablet || t ? this.renderMobile() : this.renderDefault()
  }
  constructor(e) {
    var t, n, s;
    super(e), t = this, n = "handleResize", s = () => {
      this.setState({
        isMobileWidth: window.innerWidth <= A
      })
    }, n in t ? Object.defineProperty(t, n, {
      value: s,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[n] = s, this.state = {
      isMobileWidth: window.innerWidth <= A
    }
  }
}
t.default = N