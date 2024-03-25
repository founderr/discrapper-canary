"use strict";
n.r(t), n.d(t, {
  default: function() {
    return U
  }
}), n("222007"), n("70102");
var s, a, l = n("37983"),
  i = n("884691"),
  r = n("414456"),
  u = n.n(r),
  o = n("446674"),
  d = n("913144"),
  c = n("437822"),
  f = n("569272"),
  E = n("568131"),
  _ = n("327037"),
  I = n("208620"),
  h = n("970366"),
  p = n("271938"),
  T = n("476108"),
  N = n("55411"),
  m = n("686470"),
  A = n("552712"),
  g = n("124969"),
  S = n("659632"),
  v = n("701909"),
  O = n("158998"),
  C = n("404432"),
  R = n("291850"),
  L = n("860959"),
  D = n("49111"),
  x = n("782340"),
  M = n("890957");
o.default.initialize(), (a = s || (s = {})).REGISTER = "register", a.LOGIN = "login";
class P extends i.PureComponent {
  componentDidMount() {
    let {
      authenticated: e,
      isResolved: t
    } = this.props;
    e && this.handleAuthenticated(), !t && this.resolveGiftCode(), (0, h.trackAppUIViewed)("gift_code")
  }
  componentDidUpdate(e) {
    let {
      authenticated: t,
      isResolved: n
    } = this.props;
    !n && d.default.wait(() => {
      this.resolveGiftCode()
    }), t && !e.authenticated && this.handleAuthenticated(), !t && e.authenticated && this.setState({
      currentUser: null
    })
  }
  handleAuthenticated() {
    let {
      currentUser: e
    } = this.state;
    E.fetchLibrary(), null == e && this.refreshUser()
  }
  get requiresVerification() {
    let {
      currentUser: e
    } = this.state;
    return null != e && !e.verified
  }
  getCode() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.props;
    return e.match.params.giftCode
  }
  getMode() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.props;
    return e.login ? "login" : "register"
  }
  getErrorMessage(e) {
    let {
      libraryApplication: t,
      sku: n
    } = this.props, {
      error: s
    } = this.state, a = null != s ? s.code : null;
    return a === D.AbortCodes.INVALID_GIFT_SELF_REDEMPTION ? x.default.Messages.GIFT_CONFIRMATION_BODY_SELF_GIFT_NO_PAYMENT : a === D.AbortCodes.INVALID_GIFT_REDEMPTION_OWNED && (null == n ? void 0 : n.productLine) === D.SKUProductLines.COLLECTIBLES ? x.default.Messages.GIFT_ERROR_OWNED : null != t || a === D.AbortCodes.INVALID_GIFT_REDEMPTION_OWNED ? x.default.Messages.GIFT_CODE_AUTH_HELP_TEXT_OWNED.format({
      libraryLink: D.Routes.APPLICATION_LIBRARY
    }) : e.isClaimed || a === D.AbortCodes.INVALID_GIFT_REDEMPTION_EXHAUSTED ? x.default.Messages.GIFT_CODE_AUTH_HELP_TEXT_CLAIMED : a === D.AbortCodes.INVALID_GIFT_REDEMPTION_FRAUD_REJECTED ? x.default.Messages.GIFT_CODE_SMITE_REJECT_HELP_TEXT : void 0
  }
  renderSpinner(e) {
    return (0, l.jsxs)(g.default, {
      children: [(0, l.jsx)(g.Title, {
        children: e
      }), (0, l.jsx)(g.AuthSpinner, {})]
    })
  }
  renderExpiredInvite() {
    let {
      defaultRoute: e,
      transitionTo: t
    } = this.props;
    return (0, l.jsxs)(g.default, {
      children: [(0, l.jsx)(g.Image, {
        src: n("653240"),
        className: M.marginBottom8
      }), (0, l.jsx)(g.Title, {
        className: u(M.marginTop8, M.marginBottom8),
        children: x.default.Messages.GIFT_CODE_AUTH_INVALID_TITLE
      }), (0, l.jsx)(g.SubTitle, {
        children: x.default.Messages.GIFT_CODE_AUTH_INVALID_BODY
      }), (0, l.jsx)(g.Button, {
        className: u(M.marginTop40, M.marginBottom8),
        onClick: () => t(e),
        children: x.default.Messages.CONTINUE_TO_WEBAPP
      }), (0, l.jsx)(g.Button, {
        onClick: () => window.open(v.default.getArticleURL(D.HelpdeskArticles.GIFTING), "_blank"),
        look: g.Button.Looks.LINK,
        color: g.Button.Colors.LINK,
        children: x.default.Messages.GIFT_CODE_AUTH_INVALID_TIP
      })]
    })
  }
  renderAppOpened() {
    return (0, l.jsxs)(g.default, {
      children: [(0, l.jsx)(g.Title, {
        className: M.marginBottom8,
        children: x.default.Messages.APP_OPENED_TITLE
      }), (0, l.jsx)(g.SubTitle, {
        children: x.default.Messages.APP_OPENED_BODY
      }), (0, l.jsx)(g.Button, {
        className: M.marginTop40,
        onClick: () => this.setState({
          continueOnWeb: !0
        }),
        children: x.default.Messages.GIFT_CODE_AUTH_CONTINUE_IN_BROWSER
      })]
    })
  }
  renderVerification(e) {
    let {
      sentVerification: t
    } = this.state;
    return (0, l.jsxs)(g.default, {
      children: [(0, l.jsx)(g.Image, {
        src: n("951536"),
        className: M.marginBottom8
      }), (0, l.jsx)(g.Title, {
        children: x.default.Messages.GIFT_CODE_AUTH_VERIFICATION_TITLE.format({
          username: e.username
        })
      }), (0, l.jsx)(g.SubTitle, {
        className: M.marginTop20,
        children: x.default.Messages.GIFT_CODE_AUTH_HELP_TEXT_VERIFICATION_REQUIRED
      }), (0, l.jsx)(g.Button, {
        disabled: t,
        className: M.marginTop40,
        onClick: this.handleResendVerification,
        children: t ? x.default.Messages.GIFT_CODE_AUTH_VERIFICATION_SENT : x.default.Messages.RESEND_VERIFICATION_EMAIL
      }), (0, l.jsx)(g.Button, {
        look: g.Button.Looks.LINK,
        color: g.Button.Colors.LINK,
        onClick: this.refreshUser,
        className: M.marginTop8,
        children: x.default.Messages.GIFT_CODE_AUTH_CHECK_VERIFICATION_AGAIN
      })]
    })
  }
  renderAuthenticated(e, t) {
    let n = this.getErrorMessage(e);
    return (0, l.jsxs)(g.default, {
      children: [(0, l.jsx)(C.default, {
        giftCode: e
      }), (0, l.jsx)(g.Button, {
        disabled: null != n,
        className: M.marginTop40,
        onClick: this.handleAccept,
        children: x.default.Messages.GIFT_CODE_AUTH_ACCEPT
      }), null != n ? (0, l.jsx)(g.SubTitle, {
        className: M.marginTop20,
        children: n
      }) : (0, l.jsx)(g.SubText, {
        className: M.marginTop20,
        children: x.default.Messages.GIFT_CODE_AUTH_LOGGED_IN_AS.format({
          userTag: O.default.getUserTag(t),
          onLogoutClick: this.handleLogout
        })
      })]
    })
  }
  render() {
    let {
      nativeAppState: e,
      sku: t,
      authenticated: n,
      giftCode: s,
      isResolved: a,
      isAccepting: i,
      transitionTo: r,
      location: u
    } = this.props, {
      fetchingUser: o,
      continueOnWeb: d
    } = this.state;
    if (e === D.NativeAppStates.OPEN && !d) return this.renderAppOpened();
    if (e === D.NativeAppStates.OPENING) return this.renderSpinner(x.default.Messages.APP_OPENING);
    if (i) return this.renderSpinner(x.default.Messages.GIFT_CODE_AUTH_ACCEPTING);
    if (null == s) return a ? this.renderExpiredInvite() : this.renderSpinner(x.default.Messages.GIFT_CODE_AUTH_RESOLVING);
    if (a) {
      if (n) {
        let e = this.state.currentUser;
        return o || null == e ? this.renderSpinner(x.default.Messages.GIFT_CODE_AUTH_FETCHING_USER) : this.requiresVerification && null != e ? this.renderVerification(e) : this.renderAuthenticated(s, e)
      }
      return "login" === this.getMode() ? (0, l.jsx)(R.default, {
        giftCodeSKU: t,
        giftCode: s,
        transitionTo: r,
        location: u
      }) : (0, l.jsx)(L.default, {
        giftCodeSKU: t,
        giftCode: s,
        transitionTo: r,
        location: u
      })
    }
    return null
  }
  constructor(...e) {
    super(...e), this.state = {
      error: null,
      continueOnWeb: !1,
      currentUser: null,
      sentVerification: !1,
      fetchingUser: !1
    }, this.refreshUser = () => {
      this.setState({
        fetchingUser: !0
      }), _.fetchCurrentUser({
        withAnalyticsToken: !0
      }).then(e => this.setState({
        currentUser: e,
        fetchingUser: !1
      })).catch(() => this.setState({
        fetchingUser: !1
      }))
    }, this.handleLogout = () => {
      let e = this.props.match.params.giftCode;
      c.default.logout(D.Routes.GIFT_CODE_LOGIN(e))
    }, this.handleResendVerification = () => {
      c.default.verifyResend(), this.setState({
        sentVerification: !0
      })
    }, this.handleAccept = async () => {
      let {
        transitionTo: e,
        giftCode: t
      } = this.props;
      if (null == t) throw Error("Trying to accept gift before resolve");
      let n = this.getCode();
      try {
        this.setState({
          error: null
        }), await f.default.redeemGiftCode({
          code: n
        }), e(D.Routes.APP)
      } catch (e) {
        this.setState({
          error: e
        })
      }
    }, this.resolveGiftCode = () => {
      let {
        transitionTo: e
      } = this.props, t = this.getCode();
      f.default.resolveGiftCode(t, !0, !0).then(n => {
        null != n && null != n.giftCode.promotion && e(D.Routes.BILLING_PROMOTION_REDEMPTION(t))
      })
    }
  }
}
var U = o.default.connectStores([N.default, m.default, p.default, A.default, T.default, I.default], e => {
  let t = e.match.params.giftCode,
    n = N.default.get(t),
    s = null != n ? A.default.get(n.skuId) : null;
  return {
    giftCode: n,
    sku: s,
    libraryApplication: null != s && (null == n ? void 0 : n.entitlementBranches) != null ? S.firstLibraryApplicationForGiftCode(n.entitlementBranches, s, m.default) : null,
    authenticated: p.default.isAuthenticated(),
    defaultRoute: T.default.defaultRoute,
    isResolved: N.default.getIsResolved(t),
    isAccepting: N.default.getIsAccepting(t),
    libraryApplicationsFetched: m.default.fetched,
    nativeAppState: I.default.getState(t)
  }
})(P)