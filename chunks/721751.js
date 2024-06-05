"use strict";
let s;
n.r(t), n("47120");
var a = n("735250"),
  i = n("470079"),
  r = n("120356"),
  l = n.n(r),
  o = n("873546"),
  u = n("442837"),
  d = n("481060"),
  c = n("980591"),
  f = n("605782"),
  h = n("566010"),
  E = n("353926"),
  g = n("703656"),
  m = n("980483"),
  _ = n("612744"),
  p = n("624138"),
  T = n("830064"),
  I = n("981631"),
  S = n("734541");
let A = n("407025"),
  N = n("2984"),
  R = (0, p.cssValueToNumber)(S.responsiveWidthMobile),
  C = [I.Routes.LOGIN, I.Routes.LOGIN_HANDOFF, I.Routes.REGISTER, I.Routes.INVITE(""), I.Routes.GIFT_CODE(""), I.Routes.GUILD_TEMPLATE_LOGIN(""), I.Routes.GUILD_TEMPLATE(""), I.Routes.DISABLE_EMAIL_NOTIFICATIONS, I.Routes.DISABLE_SERVER_HIGHLIGHT_NOTIFICATIONS, I.Routes.BILLING_PREMIUM_SUBSCRIBE, I.Routes.BILLING_PAYMENT_SOURCES_CREATE, I.Routes.BILLING_PAYMENTS, I.Routes.BILLING_PREMIUM_SWITCH_PLAN, I.Routes.BILLING_GUILD_SUBSCRIPTIONS_PURCHASE, I.Routes.VERIFY, I.Routes.VERIFY_HUB_EMAIL, I.Routes.REJECT_IP, I.Routes.REJECT_MFA, I.Routes.AUTHORIZE_IP, I.Routes.AUTHORIZE_PAYMENT, I.Routes.RESET, I.Routes.HANDOFF, I.Routes.REPORT, I.Routes.REPORT_SECOND_LOOK];

function O(e) {
  return C.some(t => e.startsWith(t))
}
let v = e => (s = e, e);

function L(e) {
  let {
    children: t
  } = e;
  switch (function() {
      let [e, t] = i.useState(!1), [n, a] = i.useState(!1), r = h.default.useExperiment({
        location: "authWrapper"
      }, {
        autoTrackExposure: !1
      }), l = (0, u.useStateFromStores)([E.default], () => E.default.hasLoadedExperiments);
      return ((0, c.default)(() => {
        !l && a(!0)
      }, 300), void 0 !== s) ? s : !n && l ? (!e && (h.default.trackExposure({
        location: "authWrapper"
      }), t(!0)), v(r.isWelcomeRefreshEnabled ? "refresh" : "legacy")) : n ? v("legacy") : "loading"
    }()) {
    case "refresh":
      return (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)("img", {
          className: S.artwork,
          src: A,
          alt: ""
        }), (0, a.jsx)("img", {
          className: S.logoWithText,
          src: N,
          alt: ""
        }), t]
      });
    case "legacy":
      return (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)(T.default, {
          className: S.artwork,
          preserveAspectRatio: "xMinYMin slice"
        }), t]
      });
    case "loading":
      return null
  }
}
class x extends i.Component {
  componentDidMount() {
    window.addEventListener("resize", this.handleResize)
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize)
  }
  mobileTransitionTo(e, t) {
    if (O(e))(0, g.transitionTo)(e, t);
    else {
      let n = null != t && null != t.search ? t.search : null;
      window.location = null == n ? e : "".concat(e, "?").concat(n)
    }
  }
  mobileReplaceWith(e) {
    O(e) ? (0, g.replaceWith)(e) : window.location = e
  }
  renderDefault() {
    let {
      splash: e
    } = this.props, t = (0, a.jsx)(f.default, {
      component: i.Fragment,
      children: i.Children.map(this.props.children, e => i.cloneElement(e, {
        transitionTo: g.transitionTo,
        replaceWith: g.replaceWith
      }))
    });
    return (0, a.jsx)("div", {
      className: S.characterBackground,
      children: (0, a.jsx)(d.HeadingLevel, {
        forceLevel: 1,
        children: null != e ? (0, a.jsxs)(a.Fragment, {
          children: [(0, a.jsx)(m.default, {
            show: !0,
            className: l()(S.logo)
          }), (0, a.jsx)(_.Splash, {
            splash: e,
            children: t
          })]
        }) : (0, a.jsx)(L, {
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
        isMobileWidth: window.innerWidth <= R
      })
    }, n in t ? Object.defineProperty(t, n, {
      value: s,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[n] = s, this.state = {
      isMobileWidth: window.innerWidth <= R
    }
  }
}
t.default = x