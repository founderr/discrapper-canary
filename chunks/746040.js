"use strict";
n.r(t), n.d(t, {
  default: function() {
    return N
  }
});
var s = n("37983"),
  a = n("884691"),
  r = n("414456"),
  i = n.n(r),
  l = n("394846"),
  o = n("77078"),
  u = n("2021"),
  d = n("393414"),
  c = n("725484"),
  f = n("554054"),
  E = n("159885"),
  h = n("528502"),
  g = n("49111"),
  _ = n("513680");
let m = (0, E.cssValueToNumber)(_.responsiveWidthMobile),
  p = [g.Routes.LOGIN, g.Routes.LOGIN_HANDOFF, g.Routes.REGISTER, g.Routes.INVITE(""), g.Routes.GIFT_CODE(""), g.Routes.GUILD_TEMPLATE_LOGIN(""), g.Routes.GUILD_TEMPLATE(""), g.Routes.DISABLE_EMAIL_NOTIFICATIONS, g.Routes.DISABLE_SERVER_HIGHLIGHT_NOTIFICATIONS, g.Routes.BILLING_PREMIUM_SUBSCRIBE, g.Routes.BILLING_PAYMENT_SOURCES_CREATE, g.Routes.BILLING_PAYMENTS, g.Routes.BILLING_PREMIUM_SWITCH_PLAN, g.Routes.BILLING_GUILD_SUBSCRIPTIONS_PURCHASE, g.Routes.VERIFY, g.Routes.VERIFY_HUB_EMAIL, g.Routes.REJECT_IP, g.Routes.REJECT_MFA, g.Routes.AUTHORIZE_IP, g.Routes.AUTHORIZE_PAYMENT, g.Routes.RESET, g.Routes.HANDOFF, g.Routes.REPORT, g.Routes.REPORT_SECOND_LOOK];

function T(e) {
  return p.some(t => e.startsWith(t))
}
class I extends a.Component {
  componentDidMount() {
    window.addEventListener("resize", this.handleResize)
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize)
  }
  mobileTransitionTo(e, t) {
    if (T(e))(0, d.transitionTo)(e, t);
    else {
      let n = null != t && null != t.search ? t.search : null;
      window.location = null == n ? e : "".concat(e, "?").concat(n)
    }
  }
  mobileReplaceWith(e) {
    T(e) ? (0, d.replaceWith)(e) : window.location = e
  }
  renderDefault() {
    let {
      splash: e
    } = this.props, t = (0, s.jsx)(u.default, {
      component: a.Fragment,
      children: a.Children.map(this.props.children, e => a.cloneElement(e, {
        transitionTo: d.transitionTo,
        replaceWith: d.replaceWith
      }))
    });
    return (0, s.jsx)("div", {
      className: _.characterBackground,
      children: (0, s.jsx)(o.HeadingLevel, {
        forceLevel: 1,
        children: null != e ? (0, s.jsxs)(s.Fragment, {
          children: [(0, s.jsx)(c.default, {
            show: !0,
            className: i(_.logo)
          }), (0, s.jsx)(f.Splash, {
            splash: e,
            children: t
          })]
        }) : (0, s.jsxs)(s.Fragment, {
          children: [(0, s.jsx)(h.default, {
            className: _.artwork,
            preserveAspectRatio: "xMinYMin slice"
          }), t]
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
    super(e), this.handleResize = () => {
      this.setState({
        isMobileWidth: window.innerWidth <= m
      })
    }, this.state = {
      isMobileWidth: window.innerWidth <= m
    }
  }
}
var N = I