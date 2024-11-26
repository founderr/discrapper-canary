n(789020), n(47120);
var i = n(200651),
    r = n(192379),
    s = n(120356),
    l = n.n(s),
    a = n(533800),
    o = n(756647),
    c = n(442837),
    u = n(298444),
    d = n(447543),
    h = n(881052),
    g = n(899370),
    p = n(267394),
    m = n(388905),
    f = n(639946),
    _ = n(792766),
    x = n(362762),
    E = n(978684),
    I = n(264229),
    v = n(929809),
    N = n(703656),
    b = n(108427),
    C = n(314897),
    S = n(896797),
    A = n(701190),
    T = n(626135),
    j = n(630388),
    Z = n(63063),
    R = n(782605),
    L = n(954824),
    P = n(588705),
    O = n(781428),
    D = n(423527),
    y = n(981631),
    k = n(188785),
    w = n(701476),
    B = n(436620),
    M = n(388032),
    G = n(232186);
function U(e, t, n) {
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
c.ZP.initialize();
let F = 'Accept Invite Page',
    z = {
        REGISTER: 'register',
        LOGIN: 'login'
    };
async function V(e) {
    let { invite: t } = await d.Z.resolveInvite(e, F);
    if (null != t) (0, p.A)(t);
}
class K extends r.PureComponent {
    componentDidMount() {
        let { isUnderage: e, login: t, inviteKey: n } = this.props;
        if ((T.default.track(y.rMx.INVITE_VIEWED, { invite_code: n }, { flush: !0 }), (0, b.e)('invite'), !B.KO)) {
            let e = this.getInviteKey();
            L.Z.launch('discord://' + y.Z5c.INVITE(e), () => void 0);
        }
        if (!t && e) {
            let e = this.getInviteKey(),
                { baseCode: t } = (0, I.fU)(e);
            (0, N.dL)(y.Z5c.INVITE_LOGIN(t));
        }
    }
    componentDidUpdate(e) {
        let { invite: t, nativeAppState: n, authenticated: i, transitionTo: r } = this.props,
            s = this.getInviteKey();
        if (s !== this.getInviteKey(e)) V(s);
        else if (t.state === y.r2o.APP_NOT_OPENED) this.handleContinue();
        else if (this.getMode() === z.LOGIN && i !== e.authenticated && i) {
            let e = C.default.getFingerprint();
            if (null != e) {
                let t = (0, o.s)(e);
                this.track(y.rMx.INVITE_LOGIN_SUCCESSFUL, !0, { prev_user_id: t });
            }
            d.Z.acceptInvite({
                inviteKey: s,
                context: this.getAcceptInviteContext(F),
                skipOnboarding: !0,
                callback: this.handleContinue
            });
        }
        if ((n !== e.nativeAppState && n === y.kEZ.OPEN && this.track(y.rMx.INVITE_APP_INVOKED, !1), this.getMode() === z.REGISTER && i && !e.authenticated)) {
            let { channel: e } = t;
            null != e && ((0, v.c)(w.M5.INVITE_UNCLAIMED), null != t.guild ? r(y.Z5c.APP_WITH_INVITE_AND_GUILD_ONBOARDING(t.code)) : d.Z.transitionToInvite(t, r));
        }
    }
    getInviteKey() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.props;
        return e.inviteKey;
    }
    getMode() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.props;
        return k.a ? z.REGISTER : e.login ? z.LOGIN : z.REGISTER;
    }
    track(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            { invite: i } = this.props,
            r = this.getInviteKey(),
            s = (0, I.jX)(r),
            l = t
                ? {
                      guild_id: null != i.guild ? i.guild.id : null,
                      channel_id: null != i.channel ? i.channel.id : null,
                      inviter_id: null != i.inviter ? i.inviter.id : null,
                      invite_code: s
                  }
                : { invite_code: s };
        T.default.track(e, {
            ...l,
            ...n
        });
    }
    renderSpinner(e) {
        return (0, i.jsxs)(m.ZP, {
            children: [(0, i.jsx)(m.Dx, { children: e }), (0, i.jsx)(m.Hh, {})]
        });
    }
    renderInvalidInvite() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return (0, i.jsxs)(m.ZP, {
            children: [
                (0, i.jsx)(m.Ee, {
                    src: n(167969),
                    className: G.marginBottom8
                }),
                (0, i.jsx)(m.Dx, {
                    className: l()(G.marginTop8, G.marginBottom8),
                    children: M.intl.string(M.t.kux01N)
                }),
                (0, i.jsx)(m.DK, { children: e ? M.intl.string(M.t['5AkWAQ']) : M.intl.string(M.t['+qUJAg']) }),
                this.renderButton(M.intl.string(M.t.fIv16O)),
                (0, i.jsx)(m.zx, {
                    onClick: () => window.open(Z.Z.getArticleURL(y.BhN.INVALID_INVITES), '_blank'),
                    look: m.zx.Looks.LINK,
                    color: m.zx.Colors.LINK,
                    className: G.marginTop8,
                    children: M.intl.string(M.t.urIwn5)
                })
            ]
        });
    }
    renderErrorInvite() {
        var e, t;
        return (0, i.jsxs)(m.ZP, {
            children: [
                (0, i.jsx)(P.Z, {
                    invite: this.props.invite,
                    error: null === (e = this.state.error) || void 0 === e ? void 0 : e.message
                }),
                (null === (t = this.state.error) || void 0 === t ? void 0 : t.code) === y.evJ.INVALID_CANNOT_FRIEND_SELF ? this.renderButton(M.intl.string(M.t.fIv16O)) : this.renderButton(M.intl.string(M.t.ohMvm5), this.handleAccept)
            ]
        });
    }
    renderExpiredInvite() {
        return this.renderInvalidInvite(!1);
    }
    renderBannedInvite() {
        return this.renderInvalidInvite(!0);
    }
    renderAppOpened(e) {
        let t = null != e ? e : this.handleContinue;
        return (0, i.jsxs)(m.ZP, {
            children: [
                (0, i.jsx)(m.Dx, {
                    className: G.marginBottom8,
                    children: M.intl.string(M.t.csrAMD)
                }),
                (0, i.jsx)(m.DK, { children: M.intl.string(M.t['m1+IBg']) }),
                this.renderButton(M.intl.string(M.t.fIv16O), () => t())
            ]
        });
    }
    renderAuthenticatedHeader() {
        let { invite: e } = this.props;
        return null != e.stage_instance && null != e.guild
            ? (0, i.jsx)(_.Z, {
                  stageInstance: e.stage_instance,
                  guild: e.guild
              })
            : null != e.guild_scheduled_event
              ? (0, i.jsx)(f.r, {
                    channel: e.channel,
                    guildScheduledEvent: e.guild_scheduled_event
                })
              : (0, i.jsx)(P.Z, { invite: e });
    }
    renderAuthenicatedFooter() {
        let { invite: e } = this.props;
        return (null != e.stage_instance || null != e.guild_scheduled_event) && null != e.guild
            ? (0, i.jsx)(m.ZP, {
                  className: G.marginTop20,
                  children: (0, i.jsx)(_.y, {
                      guild: e.guild,
                      onlineCount: e.approximate_presence_count
                  })
              })
            : null;
    }
    renderAuthenticatedOrDownload() {
        let { invite: e } = this.props,
            t = null != e.stage_instance ? M.intl.string(M.t['5UKyUl']) : M.intl.string(M.t.ohMvm5);
        return (0, i.jsxs)('div', {
            children: [
                (0, i.jsxs)(m.ZP, {
                    children: [this.renderAuthenticatedHeader(), this.renderButton(t, this.handleAccept)]
                }),
                this.renderAuthenicatedFooter()
            ]
        });
    }
    renderContinue() {
        return (0, i.jsxs)(m.ZP, {
            children: [(0, i.jsx)(m.Dx, { children: M.intl.string(M.t.fOc4go) }), this.renderButton(M.intl.string(M.t.fIv16O))]
        });
    }
    render() {
        let { invite: e, nativeAppState: t, authenticated: n, transitionTo: r, location: s } = this.props;
        if (t === y.kEZ.OPEN) return this.renderAppOpened();
        switch (e.state) {
            case y.r2o.APP_OPENED:
                return this.renderAppOpened();
            case y.r2o.APP_NOT_OPENED:
                return this.renderContinue();
            case y.r2o.RESOLVING:
                return k.a ? this.renderSpinner(M.intl.string(M.t.MKDeyM)) : this.renderSpinner(M.intl.string(M.t['Z+hCVV']));
            case y.r2o.APP_OPENING:
                return this.renderSpinner(M.intl.string(M.t['Z+hCVV']));
            case y.r2o.RESOLVED:
                var l;
                if (n && (0, j.yE)(null !== (l = e.flags) && void 0 !== l ? l : 0, a.$.IS_GUEST_INVITE)) return d.Z.openApp(e.code), u.x.set(E.J, e.code), this.renderAppOpened(() => r(y.Z5c.APP));
                if (n || !B.KO) return this.renderAuthenticatedOrDownload();
                else if (this.getMode() === z.LOGIN)
                    return (0, i.jsx)(O.Z, {
                        invite: e,
                        transitionTo: r,
                        location: s
                    });
                else
                    return (0, i.jsx)(D.Z, {
                        invite: e,
                        onLoginStart: () => this.track(y.rMx.INVITE_LOGIN, !0),
                        location: s,
                        transitionTo: r
                    });
            case y.r2o.ACCEPTING:
                return this.renderSpinner(M.intl.string(M.t['6wsY19']));
            case y.r2o.EXPIRED:
                return this.renderExpiredInvite();
            case y.r2o.BANNED:
                return this.renderBannedInvite();
            case y.r2o.ERROR:
                return this.renderErrorInvite();
            case y.r2o.ACCEPTED:
            default:
                return null;
        }
    }
    constructor(...e) {
        var t;
        super(...e),
            (t = this),
            U(this, 'state', { error: null }),
            U(this, 'getAcceptInviteContext', (e) => d.Z.getInviteContext(e, this.props.invite)),
            U(this, 'handleContinue', (e) => {
                let { invite: t, transitionTo: n } = this.props;
                if (null != t.channel || (null == e ? void 0 : e.channel) != null) {
                    var i;
                    (null === (i = t.guild) || void 0 === i ? void 0 : i.id) != null ? n(y.Z5c.APP_WITH_INVITE_AND_GUILD_ONBOARDING(t.code)) : d.Z.transitionToInvite(null != e ? e : t, n);
                }
            }),
            U(this, 'handleAccept', () => {
                this.setState({ error: null });
                let e = this.getInviteKey();
                d.Z.acceptInvite({
                    inviteKey: e,
                    context: this.getAcceptInviteContext(F),
                    skipOnboarding: !0,
                    callback: (t) => {
                        (0, p.A)(t), null != t.channel && d.Z.openApp(e, t.channel.id);
                    }
                }).catch((e) => {
                    if (e instanceof h.yZ || e instanceof h.Hx) {
                        let t = (0, R.O)(e.code);
                        this.setState({
                            error: {
                                code: e.code,
                                message: t
                            }
                        });
                    } else
                        this.setState({
                            error: {
                                code: e.code,
                                message: M.intl.string(M.t.dDZRd3)
                            }
                        });
                });
            }),
            U(this, 'handleDefaultTransition', () => {
                let { defaultRoute: e, transitionTo: t } = this.props;
                t(e);
            }),
            U(this, 'renderButton', function (e) {
                let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : t.handleDefaultTransition,
                    { invite: r } = t.props,
                    s = null != r.stage_instance || null != r.guild_scheduled_event;
                return B.KO
                    ? (0, i.jsx)(m.zx, {
                          className: s ? G.marginTop20 : G.marginTop40,
                          onClick: n,
                          color: s ? m.zx.Colors.GREEN : m.zx.Colors.BRAND,
                          children: e
                      })
                    : (0, i.jsx)(m.v6, { className: G.marginTop40 });
            });
    }
}
t.Z = c.ZP.connectStores([A.Z, S.Z, C.default, x.Z, g.Z], (e) => {
    var t;
    let { inviteKey: n } = e;
    return {
        invite: null !== (t = A.Z.getInvite(n)) && void 0 !== t ? t : {},
        nativeAppState: x.Z.getState(n),
        authenticated: C.default.isAuthenticated(),
        defaultRoute: S.Z.defaultRoute,
        isUnderage: g.Z.isUnderageAnonymous()
    };
})(K);
