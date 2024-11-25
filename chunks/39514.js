n(47120), n(411104);
var i,
    r,
    s = n(200651),
    l = n(192379),
    a = n(120356),
    o = n.n(a),
    c = n(442837),
    u = n(570140),
    d = n(893776),
    h = n(533307),
    p = n(978085),
    g = n(232567),
    m = n(388905),
    f = n(362762),
    x = n(108427),
    _ = n(314897),
    E = n(896797),
    v = n(82142),
    I = n(283595),
    b = n(55563),
    N = n(669079),
    C = n(63063),
    S = n(51144),
    A = n(481153),
    T = n(781428),
    j = n(423527),
    Z = n(981631),
    R = n(388032),
    L = n(232186);
function P(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
c.ZP.initialize(), ((r = i || (i = {})).REGISTER = 'register'), (r.LOGIN = 'login');
class O extends l.PureComponent {
    componentDidMount() {
        let { authenticated: e, isResolved: t } = this.props;
        e && this.handleAuthenticated(), !t && this.resolveGiftCode(), (0, x.e)('gift_code');
    }
    componentDidUpdate(e) {
        let { authenticated: t, isResolved: n } = this.props;
        !n &&
            u.Z.wait(() => {
                this.resolveGiftCode();
            }),
            t && !e.authenticated && this.handleAuthenticated(),
            !t && e.authenticated && this.setState({ currentUser: null });
    }
    handleAuthenticated() {
        let { currentUser: e } = this.state;
        p.b8(), null == e && this.refreshUser();
    }
    get requiresVerification() {
        let { currentUser: e } = this.state;
        return null != e && !e.verified;
    }
    getCode() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.props;
        return e.match.params.giftCode;
    }
    getMode() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.props;
        return e.login ? 'login' : 'register';
    }
    getErrorMessage(e) {
        let { libraryApplication: t, sku: n } = this.props,
            { error: i } = this.state,
            r = null != i ? i.code : null;
        return r === Z.evJ.INVALID_GIFT_SELF_REDEMPTION ? R.intl.string(R.t.wa9h7O) : r === Z.evJ.INVALID_GIFT_REDEMPTION_OWNED && (null == n ? void 0 : n.productLine) === Z.POd.COLLECTIBLES ? R.intl.string(R.t.mdLtb2) : null != t || r === Z.evJ.INVALID_GIFT_REDEMPTION_OWNED ? R.intl.format(R.t.PIdmg4, { libraryLink: Z.Z5c.APPLICATION_LIBRARY }) : e.isClaimed || r === Z.evJ.INVALID_GIFT_REDEMPTION_EXHAUSTED ? R.intl.string(R.t.ilcBeX) : r === Z.evJ.INVALID_GIFT_REDEMPTION_FRAUD_REJECTED ? R.intl.string(R.t.ypuSd3) : void 0;
    }
    renderSpinner(e) {
        return (0, s.jsxs)(m.ZP, {
            children: [(0, s.jsx)(m.Dx, { children: e }), (0, s.jsx)(m.Hh, {})]
        });
    }
    renderExpiredInvite() {
        let { defaultRoute: e, transitionTo: t } = this.props;
        return (0, s.jsxs)(m.ZP, {
            children: [
                (0, s.jsx)(m.Ee, {
                    src: n(167969),
                    className: L.marginBottom8
                }),
                (0, s.jsx)(m.Dx, {
                    className: o()(L.marginTop8, L.marginBottom8),
                    children: R.intl.string(R.t.KPowgo)
                }),
                (0, s.jsx)(m.DK, { children: R.intl.string(R.t.j8734e) }),
                (0, s.jsx)(m.zx, {
                    className: o()(L.marginTop40, L.marginBottom8),
                    onClick: () => t(e),
                    children: R.intl.string(R.t.fIv16O)
                }),
                (0, s.jsx)(m.zx, {
                    onClick: () => window.open(C.Z.getArticleURL(Z.BhN.GIFTING), '_blank'),
                    look: m.zx.Looks.LINK,
                    color: m.zx.Colors.LINK,
                    children: R.intl.string(R.t['/CjuXF'])
                })
            ]
        });
    }
    renderAppOpened() {
        return (0, s.jsxs)(m.ZP, {
            children: [
                (0, s.jsx)(m.Dx, {
                    className: L.marginBottom8,
                    children: R.intl.string(R.t.csrAMD)
                }),
                (0, s.jsx)(m.DK, { children: R.intl.string(R.t['m1+IBg']) }),
                (0, s.jsx)(m.zx, {
                    className: L.marginTop40,
                    onClick: () => this.setState({ continueOnWeb: !0 }),
                    children: R.intl.string(R.t['qsI+EB'])
                })
            ]
        });
    }
    renderVerification(e) {
        let { sentVerification: t } = this.state;
        return (0, s.jsxs)(m.ZP, {
            children: [
                (0, s.jsx)(m.Ee, {
                    src: n(892235),
                    className: L.marginBottom8
                }),
                (0, s.jsx)(m.Dx, { children: R.intl.format(R.t.ivLUf3, { username: e.username }) }),
                (0, s.jsx)(m.DK, {
                    className: L.marginTop20,
                    children: R.intl.string(R.t['8Su18/'])
                }),
                (0, s.jsx)(m.zx, {
                    disabled: t,
                    className: L.marginTop40,
                    onClick: this.handleResendVerification,
                    children: t ? R.intl.string(R.t.CMa9Rk) : R.intl.string(R.t.lm1UKi)
                }),
                (0, s.jsx)(m.zx, {
                    look: m.zx.Looks.LINK,
                    color: m.zx.Colors.LINK,
                    onClick: this.refreshUser,
                    className: L.marginTop8,
                    children: R.intl.string(R.t.Po9eBQ)
                })
            ]
        });
    }
    renderAuthenticated(e, t) {
        let n = this.getErrorMessage(e);
        return (0, s.jsxs)(m.ZP, {
            children: [
                (0, s.jsx)(A.Z, { giftCode: e }),
                (0, s.jsx)(m.zx, {
                    disabled: null != n,
                    className: L.marginTop40,
                    onClick: this.handleAccept,
                    children: R.intl.string(R.t.n6I6k5)
                }),
                null != n
                    ? (0, s.jsx)(m.DK, {
                          className: L.marginTop20,
                          children: n
                      })
                    : (0, s.jsx)(m.i_, {
                          className: L.marginTop20,
                          children: R.intl.format(R.t.NYM08v, {
                              userTag: S.ZP.getUserTag(t),
                              onLogoutClick: this.handleLogout
                          })
                      })
            ]
        });
    }
    render() {
        let { nativeAppState: e, sku: t, authenticated: n, giftCode: i, isResolved: r, isAccepting: l, transitionTo: a, location: o } = this.props,
            { fetchingUser: c, continueOnWeb: u } = this.state;
        if (e === Z.kEZ.OPEN && !u) return this.renderAppOpened();
        if (e === Z.kEZ.OPENING) return this.renderSpinner(R.intl.string(R.t['Z+hCVV']));
        if (l) return this.renderSpinner(R.intl.string(R.t.bhJseH));
        if (null == i) return r ? this.renderExpiredInvite() : this.renderSpinner(R.intl.string(R.t.b3lf1d));
        if (r) {
            if (n) {
                let e = this.state.currentUser;
                return c || null == e ? this.renderSpinner(R.intl.string(R.t.bYb2nZ)) : this.requiresVerification && null != e ? this.renderVerification(e) : this.renderAuthenticated(i, e);
            }
            return 'login' === this.getMode()
                ? (0, s.jsx)(T.Z, {
                      giftCodeSKU: t,
                      giftCode: i,
                      transitionTo: a,
                      location: o
                  })
                : (0, s.jsx)(j.Z, {
                      giftCodeSKU: t,
                      giftCode: i,
                      transitionTo: a,
                      location: o
                  });
        }
        return null;
    }
    constructor(...e) {
        super(...e),
            P(this, 'state', {
                error: null,
                continueOnWeb: !1,
                currentUser: null,
                sentVerification: !1,
                fetchingUser: !1
            }),
            P(this, 'refreshUser', () => {
                this.setState({ fetchingUser: !0 }),
                    g
                        .k({ withAnalyticsToken: !0 })
                        .then((e) =>
                            this.setState({
                                currentUser: e,
                                fetchingUser: !1
                            })
                        )
                        .catch(() => this.setState({ fetchingUser: !1 }));
            }),
            P(this, 'handleLogout', () => {
                let e = this.props.match.params.giftCode;
                d.Z.logout(Z.Z5c.GIFT_CODE_LOGIN(e));
            }),
            P(this, 'handleResendVerification', () => {
                d.Z.verifyResend(), this.setState({ sentVerification: !0 });
            }),
            P(this, 'handleAccept', async () => {
                let { transitionTo: e, giftCode: t } = this.props;
                if (null == t) throw Error('Trying to accept gift before resolve');
                let n = this.getCode();
                try {
                    this.setState({ error: null }), await h.Z.redeemGiftCode({ code: n }), e(Z.Z5c.APP);
                } catch (e) {
                    this.setState({ error: e });
                }
            }),
            P(this, 'resolveGiftCode', () => {
                let { transitionTo: e } = this.props,
                    t = this.getCode();
                h.Z.resolveGiftCode(t, !0, !0).then((n) => {
                    null != n && null != n.giftCode.promotion && e(Z.Z5c.BILLING_PROMOTION_REDEMPTION(t));
                });
            });
    }
}
t.Z = c.ZP.connectStores([v.Z, I.Z, _.default, b.Z, E.Z, f.Z], (e) => {
    let t = e.match.params.giftCode,
        n = v.Z.get(t),
        i = null != n ? b.Z.get(n.skuId) : null;
    return {
        giftCode: n,
        sku: i,
        libraryApplication: null != i && (null == n ? void 0 : n.entitlementBranches) != null ? N.z2(n.entitlementBranches, i, I.Z) : null,
        authenticated: _.default.isAuthenticated(),
        defaultRoute: E.Z.defaultRoute,
        isResolved: v.Z.getIsResolved(t),
        isAccepting: v.Z.getIsAccepting(t),
        libraryApplicationsFetched: I.Z.fetched,
        nativeAppState: f.Z.getState(t)
    };
})(O);
