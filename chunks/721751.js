"use strict";
n.r(t), n("47120");
var s = n("735250"),
  a = n("470079"),
  i = n("120356"),
  r = n.n(i),
  l = n("873546"),
  o = n("442837"),
  u = n("481060"),
  d = n("980591"),
  c = n("605782"),
  f = n("566010"),
  h = n("353926"),
  E = n("703656"),
  g = n("980483"),
  _ = n("612744"),
  m = n("624138"),
  p = n("830064"),
  T = n("981631"),
  A = n("734541");
let I = n("407025"),
  S = n("2984"),
  N = (0, m.cssValueToNumber)(A.responsiveWidthMobile),
  R = [T.Routes.LOGIN, T.Routes.LOGIN_HANDOFF, T.Routes.REGISTER, T.Routes.INVITE(""), T.Routes.GIFT_CODE(""), T.Routes.GUILD_TEMPLATE_LOGIN(""), T.Routes.GUILD_TEMPLATE(""), T.Routes.DISABLE_EMAIL_NOTIFICATIONS, T.Routes.DISABLE_SERVER_HIGHLIGHT_NOTIFICATIONS, T.Routes.BILLING_PREMIUM_SUBSCRIBE, T.Routes.BILLING_PAYMENT_SOURCES_CREATE, T.Routes.BILLING_PAYMENTS, T.Routes.BILLING_PREMIUM_SWITCH_PLAN, T.Routes.BILLING_GUILD_SUBSCRIPTIONS_PURCHASE, T.Routes.VERIFY, T.Routes.VERIFY_HUB_EMAIL, T.Routes.REJECT_IP, T.Routes.REJECT_MFA, T.Routes.AUTHORIZE_IP, T.Routes.AUTHORIZE_PAYMENT, T.Routes.RESET, T.Routes.HANDOFF, T.Routes.REPORT, T.Routes.REPORT_SECOND_LOOK];

function C(e) {
  return R.some(t => e.startsWith(t))
}

function O(e) {
  let {
    children: t
  } = e;
  switch (function() {
      let [e, t] = a.useState(!1), [n, s] = a.useState(!1), i = f.default.useExperiment({
        location: "authWrapper"
      }, {
        autoTrackExposure: !1
      }), r = (0, o.useStateFromStores)([h.default], () => h.default.hasLoadedExperiments);
      return ((0, d.default)(() => {
        !r && s(!0)
      }, 300), !n && r) ? (!e && (f.default.trackExposure({
        location: "authWrapper"
      }), t(!0)), i.isWelcomeRefreshEnabled ? "refresh" : "legacy") : n ? "legacy" : "loading"
    }()) {
    case "refresh":
      return (0, s.jsxs)(s.Fragment, {
        children: [(0, s.jsx)("img", {
          className: A.artwork,
          src: I,
          alt: ""
        }), (0, s.jsx)("img", {
          className: A.logoWithText,
          src: S,
          alt: ""
        }), t]
      });
    case "legacy":
      return (0, s.jsxs)(s.Fragment, {
        children: [(0, s.jsx)(p.default, {
          className: A.artwork,
          preserveAspectRatio: "xMinYMin slice"
        }), t]
      });
    case "loading":
      return null
  }
}
class v extends a.Component {
  componentDidMount() {
    window.addEventListener("resize", this.handleResize)
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize)
  }
  mobileTransitionTo(e, t) {
    if (C(e))(0, E.transitionTo)(e, t);
    else {
      let n = null != t && null != t.search ? t.search : null;
      window.location = null == n ? e : "".concat(e, "?").concat(n)
    }
  }
  mobileReplaceWith(e) {
    C(e) ? (0, E.replaceWith)(e) : window.location = e
  }
  renderDefault() {
    let {
      splash: e
    } = this.props, t = (0, s.jsx)(c.default, {
      component: a.Fragment,
      children: a.Children.map(this.props.children, e => a.cloneElement(e, {
        transitionTo: E.transitionTo,
        replaceWith: E.replaceWith
      }))
    });
    return (0, s.jsx)("div", {
      className: A.characterBackground,
      children: (0, s.jsx)(u.HeadingLevel, {
        forceLevel: 1,
        children: null != e ? (0, s.jsxs)(s.Fragment, {
          children: [(0, s.jsx)(g.default, {
            show: !0,
            className: r()(A.logo)
          }), (0, s.jsx)(_.Splash, {
            splash: e,
            children: t
          })]
        }) : (0, s.jsx)(O, {
          children: t
        })
      })
    })
  }
  renderMobile() {
    return (0, s.jsx)(c.default, {
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
        isMobileWidth: window.innerWidth <= N
      })
    }, n in t ? Object.defineProperty(t, n, {
      value: s,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[n] = s, this.state = {
      isMobileWidth: window.innerWidth <= N
    }
  }
}
t.default = v