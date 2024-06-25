let r;
n(47120);
var s = n(735250),
  i = n(470079),
  a = n(120356),
  o = n.n(a),
  l = n(873546),
  c = n(442837),
  u = n(481060),
  d = n(980591),
  h = n(605782),
  _ = n(133853),
  p = n(568154),
  f = n(353926),
  g = n(703656),
  E = n(981631),
  m = n(453931);
let I = n(575703),
  A = n(2984),
  N = [E.Z5c.LOGIN, E.Z5c.LOGIN_HANDOFF, E.Z5c.REGISTER, E.Z5c.INVITE(""), E.Z5c.GIFT_CODE(""), E.Z5c.GUILD_TEMPLATE_LOGIN(""), E.Z5c.GUILD_TEMPLATE(""), E.Z5c.DISABLE_EMAIL_NOTIFICATIONS, E.Z5c.DISABLE_SERVER_HIGHLIGHT_NOTIFICATIONS, E.Z5c.BILLING_PREMIUM_SUBSCRIBE, E.Z5c.BILLING_PAYMENT_SOURCES_CREATE, E.Z5c.BILLING_PAYMENTS, E.Z5c.BILLING_PREMIUM_SWITCH_PLAN, E.Z5c.BILLING_GUILD_SUBSCRIPTIONS_PURCHASE, E.Z5c.VERIFY, E.Z5c.VERIFY_HUB_EMAIL, E.Z5c.REJECT_IP, E.Z5c.REJECT_MFA, E.Z5c.AUTHORIZE_IP, E.Z5c.AUTHORIZE_PAYMENT, E.Z5c.RESET, E.Z5c.HANDOFF, E.Z5c.REPORT, E.Z5c.REPORT_SECOND_LOOK];

function C(e) {
  return N.some(t => e.startsWith(t))
}
let T = e => (r = e, e);

function R(e) {
  let {
    children: t
  } = e;
  switch (function() {
      let [e, t] = i.useState(!1), [n, s] = i.useState(true), a = function() {
        return null
      }(), o = (0, c.e7)([f.Z], () => f.Z.hasLoadedExperiments);
      return ((0, d.Z)(() => {}, 300), void 0 !== r) ? r : !n && o ? (!e && t(!0), T(function(e) {
        return "default"
      }(a))) : n ? T("default") : "loading"
    }()) {
    case "default":
      return (0, s.jsxs)(s.Fragment, {
        children: [(0, s.jsx)("img", {
          className: m.artwork,
          src: I,
          alt: ""
        }), (0, s.jsx)("img", {
          className: m.logoWithText,
          src: A,
          alt: ""
        }), t]
      });
    case "experimental":
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
    if (C(e))(0, g.uL)(e, t);
    else {
      let n = null != t && null != t.search ? t.search : null;
      window.location = null == n ? e : "".concat(e, "?").concat(n)
    }
  }
  mobileReplaceWith(e) {
    C(e) ? (0, g.dL)(e) : window.location = e
  }
  renderDefault() {
    let {
      splash: e
    } = this.props, t = (0, s.jsx)(h.Z, {
      component: i.Fragment,
      children: i.Children.map(this.props.children, e => i.cloneElement(e, {
        transitionTo: g.uL,
        replaceWith: g.dL
      }))
    });
    return (0, s.jsx)("div", {
      className: m.characterBackground,
      children: (0, s.jsx)(u.HeadingLevel, {
        forceLevel: 1,
        children: null != e ? (0, s.jsxs)(s.Fragment, {
          children: [(0, s.jsx)(_.Z, {
            show: !0,
            className: o()(m.logo)
          }), (0, s.jsx)(p.h, {
            splash: e,
            children: t
          })]
        }) : (0, s.jsx)(R, {
          children: t
        })
      })
    })
  }
  renderMobile() {
    return (0, s.jsx)(h.Z, {
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
    return e || l.tq || l.Em || t ? this.renderMobile() : this.renderDefault()
  }
  constructor(e) {
    var t, n, r;
    super(e), t = this, n = "handleResize", r = () => {
      this.setState({
        isMobileWidth: window.innerWidth <= 485
      })
    }, n in t ? Object.defineProperty(t, n, {
      value: r,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[n] = r, this.state = {
      isMobileWidth: window.innerWidth <= 485
    }
  }
}
t.Z = x