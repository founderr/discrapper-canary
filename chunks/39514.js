n(47120), n(411104);
var s, r, i = n(735250),
  l = n(470079),
  a = n(120356),
  o = n.n(a),
  c = n(442837),
  u = n(570140),
  d = n(893776),
  E = n(533307),
  _ = n(978085),
  I = n(232567),
  h = n(388905),
  N = n(362762),
  p = n(108427),
  g = n(314897),
  m = n(896797),
  T = n(82142),
  Z = n(283595),
  A = n(55563),
  f = n(669079),
  x = n(63063),
  O = n(51144),
  S = n(481153),
  v = n(781428),
  D = n(423527),
  P = n(981631),
  C = n(689938),
  R = n(331651);

function M(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
c.ZP.initialize(), (r = s || (s = {})).REGISTER = "register", r.LOGIN = "login";
class L extends l.PureComponent {
  componentDidMount() {
    let {
      authenticated: e,
      isResolved: t
    } = this.props;
    e && this.handleAuthenticated(), !t && this.resolveGiftCode(), (0, p.e)("gift_code")
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
    _.b8(), null == e && this.refreshUser()
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
    } = this.state, r = null != s ? s.code : null;
    return r === P.evJ.INVALID_GIFT_SELF_REDEMPTION ? C.Z.Messages.GIFT_CONFIRMATION_BODY_SELF_GIFT_NO_PAYMENT : r === P.evJ.INVALID_GIFT_REDEMPTION_OWNED && (null == n ? void 0 : n.productLine) === P.POd.COLLECTIBLES ? C.Z.Messages.GIFT_ERROR_OWNED : null != t || r === P.evJ.INVALID_GIFT_REDEMPTION_OWNED ? C.Z.Messages.GIFT_CODE_AUTH_HELP_TEXT_OWNED.format({
      libraryLink: P.Z5c.APPLICATION_LIBRARY
    }) : e.isClaimed || r === P.evJ.INVALID_GIFT_REDEMPTION_EXHAUSTED ? C.Z.Messages.GIFT_CODE_AUTH_HELP_TEXT_CLAIMED : r === P.evJ.INVALID_GIFT_REDEMPTION_FRAUD_REJECTED ? C.Z.Messages.GIFT_CODE_SMITE_REJECT_HELP_TEXT : void 0
  }
  renderSpinner(e) {
    return (0, i.jsxs)(h.ZP, {
      children: [(0, i.jsx)(h.Dx, {
        children: e
      }), (0, i.jsx)(h.Hh, {})]
    })
  }
  renderExpiredInvite() {
    let {
      defaultRoute: e,
      transitionTo: t
    } = this.props;
    return (0, i.jsxs)(h.ZP, {
      children: [(0, i.jsx)(h.Ee, {
        src: n(167969),
        className: R.marginBottom8
      }), (0, i.jsx)(h.Dx, {
        className: o()(R.marginTop8, R.marginBottom8),
        children: C.Z.Messages.GIFT_CODE_AUTH_INVALID_TITLE
      }), (0, i.jsx)(h.DK, {
        children: C.Z.Messages.GIFT_CODE_AUTH_INVALID_BODY
      }), (0, i.jsx)(h.zx, {
        className: o()(R.marginTop40, R.marginBottom8),
        onClick: () => t(e),
        children: C.Z.Messages.CONTINUE_TO_WEBAPP
      }), (0, i.jsx)(h.zx, {
        onClick: () => window.open(x.Z.getArticleURL(P.BhN.GIFTING), "_blank"),
        look: h.zx.Looks.LINK,
        color: h.zx.Colors.LINK,
        children: C.Z.Messages.GIFT_CODE_AUTH_INVALID_TIP
      })]
    })
  }
  renderAppOpened() {
    return (0, i.jsxs)(h.ZP, {
      children: [(0, i.jsx)(h.Dx, {
        className: R.marginBottom8,
        children: C.Z.Messages.APP_OPENED_TITLE
      }), (0, i.jsx)(h.DK, {
        children: C.Z.Messages.APP_OPENED_BODY
      }), (0, i.jsx)(h.zx, {
        className: R.marginTop40,
        onClick: () => this.setState({
          continueOnWeb: !0
        }),
        children: C.Z.Messages.GIFT_CODE_AUTH_CONTINUE_IN_BROWSER
      })]
    })
  }
  renderVerification(e) {
    let {
      sentVerification: t
    } = this.state;
    return (0, i.jsxs)(h.ZP, {
      children: [(0, i.jsx)(h.Ee, {
        src: n(892235),
        className: R.marginBottom8
      }), (0, i.jsx)(h.Dx, {
        children: C.Z.Messages.GIFT_CODE_AUTH_VERIFICATION_TITLE.format({
          username: e.username
        })
      }), (0, i.jsx)(h.DK, {
        className: R.marginTop20,
        children: C.Z.Messages.GIFT_CODE_AUTH_HELP_TEXT_VERIFICATION_REQUIRED
      }), (0, i.jsx)(h.zx, {
        disabled: t,
        className: R.marginTop40,
        onClick: this.handleResendVerification,
        children: t ? C.Z.Messages.GIFT_CODE_AUTH_VERIFICATION_SENT : C.Z.Messages.RESEND_VERIFICATION_EMAIL
      }), (0, i.jsx)(h.zx, {
        look: h.zx.Looks.LINK,
        color: h.zx.Colors.LINK,
        onClick: this.refreshUser,
        className: R.marginTop8,
        children: C.Z.Messages.GIFT_CODE_AUTH_CHECK_VERIFICATION_AGAIN
      })]
    })
  }
  renderAuthenticated(e, t) {
    let n = this.getErrorMessage(e);
    return (0, i.jsxs)(h.ZP, {
      children: [(0, i.jsx)(S.Z, {
        giftCode: e
      }), (0, i.jsx)(h.zx, {
        disabled: null != n,
        className: R.marginTop40,
        onClick: this.handleAccept,
        children: C.Z.Messages.GIFT_CODE_AUTH_ACCEPT
      }), null != n ? (0, i.jsx)(h.DK, {
        className: R.marginTop20,
        children: n
      }) : (0, i.jsx)(h.i_, {
        className: R.marginTop20,
        children: C.Z.Messages.GIFT_CODE_AUTH_LOGGED_IN_AS.format({
          userTag: O.ZP.getUserTag(t),
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
      isResolved: r,
      isAccepting: l,
      transitionTo: a,
      location: o
    } = this.props, {
      fetchingUser: c,
      continueOnWeb: u
    } = this.state;
    if (e === P.kEZ.OPEN && !u) return this.renderAppOpened();
    if (e === P.kEZ.OPENING) return this.renderSpinner(C.Z.Messages.APP_OPENING);
    if (l) return this.renderSpinner(C.Z.Messages.GIFT_CODE_AUTH_ACCEPTING);
    if (null == s) return r ? this.renderExpiredInvite() : this.renderSpinner(C.Z.Messages.GIFT_CODE_AUTH_RESOLVING);
    if (r) {
      if (n) {
        let e = this.state.currentUser;
        return c || null == e ? this.renderSpinner(C.Z.Messages.GIFT_CODE_AUTH_FETCHING_USER) : this.requiresVerification && null != e ? this.renderVerification(e) : this.renderAuthenticated(s, e)
      }
      return "login" === this.getMode() ? (0, i.jsx)(v.Z, {
        giftCodeSKU: t,
        giftCode: s,
        transitionTo: a,
        location: o
      }) : (0, i.jsx)(D.Z, {
        giftCodeSKU: t,
        giftCode: s,
        transitionTo: a,
        location: o
      })
    }
    return null
  }
  constructor(...e) {
    super(...e), M(this, "state", {
      error: null,
      continueOnWeb: !1,
      currentUser: null,
      sentVerification: !1,
      fetchingUser: !1
    }), M(this, "refreshUser", () => {
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
    }), M(this, "handleLogout", () => {
      let e = this.props.match.params.giftCode;
      d.Z.logout(P.Z5c.GIFT_CODE_LOGIN(e))
    }), M(this, "handleResendVerification", () => {
      d.Z.verifyResend(), this.setState({
        sentVerification: !0
      })
    }), M(this, "handleAccept", async () => {
      let {
        transitionTo: e,
        giftCode: t
      } = this.props;
      if (null == t) throw Error("Trying to accept gift before resolve");
      let n = this.getCode();
      try {
        this.setState({
          error: null
        }), await E.Z.redeemGiftCode({
          code: n
        }), e(P.Z5c.APP)
      } catch (e) {
        this.setState({
          error: e
        })
      }
    }), M(this, "resolveGiftCode", () => {
      let {
        transitionTo: e
      } = this.props, t = this.getCode();
      E.Z.resolveGiftCode(t, !0, !0).then(n => {
        null != n && null != n.giftCode.promotion && e(P.Z5c.BILLING_PROMOTION_REDEMPTION(t))
      })
    })
  }
}
t.Z = c.ZP.connectStores([T.Z, Z.Z, g.default, A.Z, m.Z, N.Z], e => {
  let t = e.match.params.giftCode,
    n = T.Z.get(t),
    s = null != n ? A.Z.get(n.skuId) : null;
  return {
    giftCode: n,
    sku: s,
    libraryApplication: null != s && (null == n ? void 0 : n.entitlementBranches) != null ? f.z2(n.entitlementBranches, s, Z.Z) : null,
    authenticated: g.default.isAuthenticated(),
    defaultRoute: m.Z.defaultRoute,
    isResolved: T.Z.getIsResolved(t),
    isAccepting: T.Z.getIsAccepting(t),
    libraryApplicationsFetched: Z.Z.fetched,
    nativeAppState: N.Z.getState(t)
  }
})(L)