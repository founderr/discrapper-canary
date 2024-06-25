n(47120), n(411104);
var s, i, r = n(735250),
  a = n(470079),
  l = n(120356),
  o = n.n(l),
  c = n(442837),
  u = n(570140),
  d = n(893776),
  _ = n(533307),
  E = n(978085),
  I = n(232567),
  h = n(388905),
  p = n(362762),
  g = n(108427),
  f = n(314897),
  N = n(896797),
  m = n(82142),
  T = n(283595),
  A = n(55563),
  Z = n(669079),
  x = n(63063),
  S = n(51144),
  O = n(481153),
  v = n(781428),
  C = n(423527),
  D = n(981631),
  P = n(689938),
  R = n(331651);

function L(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
c.ZP.initialize(), (i = s || (s = {})).REGISTER = "register", i.LOGIN = "login";
class b extends a.PureComponent {
  componentDidMount() {
    let {
      authenticated: e,
      isResolved: t
    } = this.props;
    e && this.handleAuthenticated(), !t && this.resolveGiftCode(), (0, g.e)("gift_code")
  }
  componentDidUpdate(e) {
    let {
      authenticated: t,
      isResolved: n
    } = this.props;
    !n && u.Z.wait(() => {
      this.resolveGiftCode()
    }), t && !e.authenticated && this.handleAuthenticated(), !t && e.authenticated && this.setState({
      currentUser: null
    })
  }
  handleAuthenticated() {
    let {
      currentUser: e
    } = this.state;
    E.b8(), null == e && this.refreshUser()
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
    } = this.state, i = null != s ? s.code : null;
    return i === D.evJ.INVALID_GIFT_SELF_REDEMPTION ? P.Z.Messages.GIFT_CONFIRMATION_BODY_SELF_GIFT_NO_PAYMENT : i === D.evJ.INVALID_GIFT_REDEMPTION_OWNED && (null == n ? void 0 : n.productLine) === D.POd.COLLECTIBLES ? P.Z.Messages.GIFT_ERROR_OWNED : null != t || i === D.evJ.INVALID_GIFT_REDEMPTION_OWNED ? P.Z.Messages.GIFT_CODE_AUTH_HELP_TEXT_OWNED.format({
      libraryLink: D.Z5c.APPLICATION_LIBRARY
    }) : e.isClaimed || i === D.evJ.INVALID_GIFT_REDEMPTION_EXHAUSTED ? P.Z.Messages.GIFT_CODE_AUTH_HELP_TEXT_CLAIMED : i === D.evJ.INVALID_GIFT_REDEMPTION_FRAUD_REJECTED ? P.Z.Messages.GIFT_CODE_SMITE_REJECT_HELP_TEXT : void 0
  }
  renderSpinner(e) {
    return (0, r.jsxs)(h.ZP, {
      children: [(0, r.jsx)(h.Dx, {
        children: e
      }), (0, r.jsx)(h.Hh, {})]
    })
  }
  renderExpiredInvite() {
    let {
      defaultRoute: e,
      transitionTo: t
    } = this.props;
    return (0, r.jsxs)(h.ZP, {
      children: [(0, r.jsx)(h.Ee, {
        src: n(167969),
        className: R.marginBottom8
      }), (0, r.jsx)(h.Dx, {
        className: o()(R.marginTop8, R.marginBottom8),
        children: P.Z.Messages.GIFT_CODE_AUTH_INVALID_TITLE
      }), (0, r.jsx)(h.DK, {
        children: P.Z.Messages.GIFT_CODE_AUTH_INVALID_BODY
      }), (0, r.jsx)(h.zx, {
        className: o()(R.marginTop40, R.marginBottom8),
        onClick: () => t(e),
        children: P.Z.Messages.CONTINUE_TO_WEBAPP
      }), (0, r.jsx)(h.zx, {
        onClick: () => window.open(x.Z.getArticleURL(D.BhN.GIFTING), "_blank"),
        look: h.zx.Looks.LINK,
        color: h.zx.Colors.LINK,
        children: P.Z.Messages.GIFT_CODE_AUTH_INVALID_TIP
      })]
    })
  }
  renderAppOpened() {
    return (0, r.jsxs)(h.ZP, {
      children: [(0, r.jsx)(h.Dx, {
        className: R.marginBottom8,
        children: P.Z.Messages.APP_OPENED_TITLE
      }), (0, r.jsx)(h.DK, {
        children: P.Z.Messages.APP_OPENED_BODY
      }), (0, r.jsx)(h.zx, {
        className: R.marginTop40,
        onClick: () => this.setState({
          continueOnWeb: !0
        }),
        children: P.Z.Messages.GIFT_CODE_AUTH_CONTINUE_IN_BROWSER
      })]
    })
  }
  renderVerification(e) {
    let {
      sentVerification: t
    } = this.state;
    return (0, r.jsxs)(h.ZP, {
      children: [(0, r.jsx)(h.Ee, {
        src: n(892235),
        className: R.marginBottom8
      }), (0, r.jsx)(h.Dx, {
        children: P.Z.Messages.GIFT_CODE_AUTH_VERIFICATION_TITLE.format({
          username: e.username
        })
      }), (0, r.jsx)(h.DK, {
        className: R.marginTop20,
        children: P.Z.Messages.GIFT_CODE_AUTH_HELP_TEXT_VERIFICATION_REQUIRED
      }), (0, r.jsx)(h.zx, {
        disabled: t,
        className: R.marginTop40,
        onClick: this.handleResendVerification,
        children: t ? P.Z.Messages.GIFT_CODE_AUTH_VERIFICATION_SENT : P.Z.Messages.RESEND_VERIFICATION_EMAIL
      }), (0, r.jsx)(h.zx, {
        look: h.zx.Looks.LINK,
        color: h.zx.Colors.LINK,
        onClick: this.refreshUser,
        className: R.marginTop8,
        children: P.Z.Messages.GIFT_CODE_AUTH_CHECK_VERIFICATION_AGAIN
      })]
    })
  }
  renderAuthenticated(e, t) {
    let n = this.getErrorMessage(e);
    return (0, r.jsxs)(h.ZP, {
      children: [(0, r.jsx)(O.Z, {
        giftCode: e
      }), (0, r.jsx)(h.zx, {
        disabled: null != n,
        className: R.marginTop40,
        onClick: this.handleAccept,
        children: P.Z.Messages.GIFT_CODE_AUTH_ACCEPT
      }), null != n ? (0, r.jsx)(h.DK, {
        className: R.marginTop20,
        children: n
      }) : (0, r.jsx)(h.i_, {
        className: R.marginTop20,
        children: P.Z.Messages.GIFT_CODE_AUTH_LOGGED_IN_AS.format({
          userTag: S.ZP.getUserTag(t),
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
      isResolved: i,
      isAccepting: a,
      transitionTo: l,
      location: o
    } = this.props, {
      fetchingUser: c,
      continueOnWeb: u
    } = this.state;
    if (e === D.kEZ.OPEN && !u) return this.renderAppOpened();
    if (e === D.kEZ.OPENING) return this.renderSpinner(P.Z.Messages.APP_OPENING);
    if (a) return this.renderSpinner(P.Z.Messages.GIFT_CODE_AUTH_ACCEPTING);
    if (null == s) return i ? this.renderExpiredInvite() : this.renderSpinner(P.Z.Messages.GIFT_CODE_AUTH_RESOLVING);
    if (i) {
      if (n) {
        let e = this.state.currentUser;
        return c || null == e ? this.renderSpinner(P.Z.Messages.GIFT_CODE_AUTH_FETCHING_USER) : this.requiresVerification && null != e ? this.renderVerification(e) : this.renderAuthenticated(s, e)
      }
      return "login" === this.getMode() ? (0, r.jsx)(v.Z, {
        giftCodeSKU: t,
        giftCode: s,
        transitionTo: l,
        location: o
      }) : (0, r.jsx)(C.Z, {
        giftCodeSKU: t,
        giftCode: s,
        transitionTo: l,
        location: o
      })
    }
    return null
  }
  constructor(...e) {
    super(...e), L(this, "state", {
      error: null,
      continueOnWeb: !1,
      currentUser: null,
      sentVerification: !1,
      fetchingUser: !1
    }), L(this, "refreshUser", () => {
      this.setState({
        fetchingUser: !0
      }), I.k({
        withAnalyticsToken: !0
      }).then(e => this.setState({
        currentUser: e,
        fetchingUser: !1
      })).catch(() => this.setState({
        fetchingUser: !1
      }))
    }), L(this, "handleLogout", () => {
      let e = this.props.match.params.giftCode;
      d.Z.logout(D.Z5c.GIFT_CODE_LOGIN(e))
    }), L(this, "handleResendVerification", () => {
      d.Z.verifyResend(), this.setState({
        sentVerification: !0
      })
    }), L(this, "handleAccept", async () => {
      let {
        transitionTo: e,
        giftCode: t
      } = this.props;
      if (null == t) throw Error("Trying to accept gift before resolve");
      let n = this.getCode();
      try {
        this.setState({
          error: null
        }), await _.Z.redeemGiftCode({
          code: n
        }), e(D.Z5c.APP)
      } catch (e) {
        this.setState({
          error: e
        })
      }
    }), L(this, "resolveGiftCode", () => {
      let {
        transitionTo: e
      } = this.props, t = this.getCode();
      _.Z.resolveGiftCode(t, !0, !0).then(n => {
        null != n && null != n.giftCode.promotion && e(D.Z5c.BILLING_PROMOTION_REDEMPTION(t))
      })
    })
  }
}
t.Z = c.ZP.connectStores([m.Z, T.Z, f.default, A.Z, N.Z, p.Z], e => {
  let t = e.match.params.giftCode,
    n = m.Z.get(t),
    s = null != n ? A.Z.get(n.skuId) : null;
  return {
    giftCode: n,
    sku: s,
    libraryApplication: null != s && (null == n ? void 0 : n.entitlementBranches) != null ? Z.z2(n.entitlementBranches, s, T.Z) : null,
    authenticated: f.default.isAuthenticated(),
    defaultRoute: N.Z.defaultRoute,
    isResolved: m.Z.getIsResolved(t),
    isAccepting: m.Z.getIsAccepting(t),
    libraryApplicationsFetched: T.Z.fetched,
    nativeAppState: p.Z.getState(t)
  }
})(b)