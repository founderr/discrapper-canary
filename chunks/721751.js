let s;
n(47120);
var r = n(735250),
  i = n(470079),
  a = n(120356),
  o = n.n(a),
  l = n(873546),
  c = n(442837),
  u = n(481060),
  d = n(980591),
  h = n(605782),
  E = n(133853),
  _ = n(568154),
  g = n(353926),
  f = n(703656),
  p = n(981631),
  m = n(453931);
let N = n(575703),
  I = n(2984),
  A = [p.Z5c.LOGIN, p.Z5c.LOGIN_HANDOFF, p.Z5c.REGISTER, p.Z5c.INVITE(""), p.Z5c.GIFT_CODE(""), p.Z5c.GUILD_TEMPLATE_LOGIN(""), p.Z5c.GUILD_TEMPLATE(""), p.Z5c.DISABLE_EMAIL_NOTIFICATIONS, p.Z5c.DISABLE_SERVER_HIGHLIGHT_NOTIFICATIONS, p.Z5c.BILLING_PREMIUM_SUBSCRIBE, p.Z5c.BILLING_PAYMENT_SOURCES_CREATE, p.Z5c.BILLING_PAYMENTS, p.Z5c.BILLING_PREMIUM_SWITCH_PLAN, p.Z5c.BILLING_GUILD_SUBSCRIPTIONS_PURCHASE, p.Z5c.VERIFY, p.Z5c.VERIFY_HUB_EMAIL, p.Z5c.REJECT_IP, p.Z5c.REJECT_MFA, p.Z5c.AUTHORIZE_IP, p.Z5c.AUTHORIZE_PAYMENT, p.Z5c.RESET, p.Z5c.HANDOFF, p.Z5c.REPORT, p.Z5c.REPORT_SECOND_LOOK];

function R(e) {
  return A.some(t => e.startsWith(t))
}
let T = e => (s = e, e);

function C(e) {
  let {
    children: t
  } = e;
  switch (function() {
      let [e, t] = i.useState(!1), [n, r] = i.useState(true), a = function() {
        return null
      }(), o = (0, c.e7)([g.Z], () => g.Z.hasLoadedExperiments);
      return ((0, d.Z)(() => {}, 300), void 0 !== s) ? s : !n && o ? (!e && t(!0), T(function(e) {
        return "default"
      }(a))) : n ? T("default") : "loading"
    }()) {
    case "default":
      return (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)("img", {
          className: m.artwork,
          src: N,
          alt: ""
        }), (0, r.jsx)("img", {
          className: m.logoWithText,
          src: I,
          alt: ""
        }), t]
      });
    case "experimental":
    case "loading":
      return null
  }
}
class S extends i.Component {
  componentDidMount() {
    window.addEventListener("resize", this.handleResize)
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize)
  }
  mobileTransitionTo(e, t) {
    if (R(e))(0, f.uL)(e, t);
    else {
      let n = null != t && null != t.search ? t.search : null;
      window.location = null == n ? e : "".concat(e, "?").concat(n)
    }
  }
  mobileReplaceWith(e) {
    R(e) ? (0, f.dL)(e) : window.location = e
  }
  renderDefault() {
    let {
      splash: e
    } = this.props, t = (0, r.jsx)(h.Z, {
      component: i.Fragment,
      children: i.Children.map(this.props.children, e => i.cloneElement(e, {
        transitionTo: f.uL,
        replaceWith: f.dL
      }))
    });
    return (0, r.jsx)("div", {
      className: m.characterBackground,
      children: (0, r.jsx)(u.HeadingLevel, {
        forceLevel: 1,
        children: null != e ? (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)(E.Z, {
            show: !0,
            className: o()(m.logo)
          }), (0, r.jsx)(_.h, {
            splash: e,
            children: t
          })]
        }) : (0, r.jsx)(C, {
          children: t
        })
      })
    })
  }
  renderMobile() {
    return (0, r.jsx)(h.Z, {
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
t.Z = S