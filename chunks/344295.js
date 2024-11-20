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
    p = n(899370),
    g = n(267394),
    m = n(388905),
    f = n(639946),
    x = n(792766),
    _ = n(362762),
    E = n(978684),
    v = n(264229),
    I = n(929809),
    b = n(703656),
    N = n(108427),
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
    y = n(423527),
    D = n(981631),
    k = n(188785),
    w = n(701476),
    M = n(436620),
    B = n(388032),
    G = n(113207);
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
    if (null != t) (0, g.A)(t);
}
class K extends r.PureComponent {
    componentDidMount() {
        let { isUnderage: e, login: t, inviteKey: n } = this.props;
        if ((T.default.track(D.rMx.INVITE_VIEWED, { invite_code: n }, { flush: !0 }), (0, N.e)('invite'), !M.KO)) {
            let e = this.getInviteKey();
            L.Z.launch('discord://' + D.Z5c.INVITE(e), () => void 0);
        }
        if (!t && e) {
            let e = this.getInviteKey(),
                { baseCode: t } = (0, v.fU)(e);
            (0, b.dL)(D.Z5c.INVITE_LOGIN(t));
        }
    }
    componentDidUpdate(e) {
        let { invite: t, nativeAppState: n, authenticated: i, transitionTo: r } = this.props,
            s = this.getInviteKey();
        if (s !== this.getInviteKey(e)) V(s);
        else if (t.state === D.r2o.APP_NOT_OPENED) this.handleContinue();
        else if (this.getMode() === z.LOGIN && i !== e.authenticated && i) {
            let e = C.default.getFingerprint();
            if (null != e) {
                let t = (0, o.s)(e);
                this.track(D.rMx.INVITE_LOGIN_SUCCESSFUL, !0, { prev_user_id: t });
            }
            d.Z.acceptInvite({
                inviteKey: s,
                context: this.getAcceptInviteContext(F),
                skipOnboarding: !0,
                callback: this.handleContinue
            });
        }
        if ((n !== e.nativeAppState && n === D.kEZ.OPEN && this.track(D.rMx.INVITE_APP_INVOKED, !1), this.getMode() === z.REGISTER && i && !e.authenticated)) {
            let { channel: e } = t;
            null != e && ((0, I.c)(w.M5.INVITE_UNCLAIMED), null != t.guild ? r(D.Z5c.APP_WITH_INVITE_AND_GUILD_ONBOARDING(t.code)) : d.Z.transitionToInvite(t, r));
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
            s = (0, v.jX)(r),
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
                    children: B.intl.string(B.t.kux01N)
                }),
                (0, i.jsx)(m.DK, { children: e ? B.intl.string(B.t['5AkWAQ']) : B.intl.string(B.t['+qUJAg']) }),
                this.renderButton(B.intl.string(B.t.fIv16O)),
                (0, i.jsx)(m.zx, {
                    onClick: () => window.open(Z.Z.getArticleURL(D.BhN.INVALID_INVITES), '_blank'),
                    look: m.zx.Looks.LINK,
                    color: m.zx.Colors.LINK,
                    className: G.marginTop8,
                    children: B.intl.string(B.t.urIwn5)
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
                (null === (t = this.state.error) || void 0 === t ? void 0 : t.code) === D.evJ.INVALID_CANNOT_FRIEND_SELF ? this.renderButton(B.intl.string(B.t.fIv16O)) : this.renderButton(B.intl.string(B.t.ohMvm5), this.handleAccept)
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
                    children: B.intl.string(B.t.csrAMD)
                }),
                (0, i.jsx)(m.DK, { children: B.intl.string(B.t['m1+IBg']) }),
                this.renderButton(B.intl.string(B.t.fIv16O), () => t())
            ]
        });
    }
    renderAuthenticatedHeader() {
        let { invite: e } = this.props;
        return null != e.stage_instance && null != e.guild
            ? (0, i.jsx)(x.Z, {
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
                  children: (0, i.jsx)(x.y, {
                      guild: e.guild,
                      onlineCount: e.approximate_presence_count
                  })
              })
            : null;
    }
    renderAuthenticatedOrDownload() {
        let { invite: e } = this.props,
            t = null != e.stage_instance ? B.intl.string(B.t['5UKyUl']) : B.intl.string(B.t.ohMvm5);
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
            children: [(0, i.jsx)(m.Dx, { children: B.intl.string(B.t.fOc4go) }), this.renderButton(B.intl.string(B.t.fIv16O))]
        });
    }
    render() {
        let { invite: e, nativeAppState: t, authenticated: n, transitionTo: r, location: s } = this.props;
        if (t === D.kEZ.OPEN) return this.renderAppOpened();
        switch (e.state) {
            case D.r2o.APP_OPENED:
                return this.renderAppOpened();
            case D.r2o.APP_NOT_OPENED:
                return this.renderContinue();
            case D.r2o.RESOLVING:
                return k.a ? this.renderSpinner(B.intl.string(B.t.MKDeyM)) : this.renderSpinner(B.intl.string(B.t['Z+hCVV']));
            case D.r2o.APP_OPENING:
                return this.renderSpinner(B.intl.string(B.t['Z+hCVV']));
            case D.r2o.RESOLVED:
                var l;
                if (n && (0, j.yE)(null !== (l = e.flags) && void 0 !== l ? l : 0, a.$.IS_GUEST_INVITE)) return d.Z.openApp(e.code), u.x.set(E.J, e.code), this.renderAppOpened(() => r(D.Z5c.APP));
                if (n || !M.KO) return this.renderAuthenticatedOrDownload();
                else if (this.getMode() === z.LOGIN)
                    return (0, i.jsx)(O.Z, {
                        invite: e,
                        transitionTo: r,
                        location: s
                    });
                else
                    return (0, i.jsx)(y.Z, {
                        invite: e,
                        onLoginStart: () => this.track(D.rMx.INVITE_LOGIN, !0),
                        location: s,
                        transitionTo: r
                    });
            case D.r2o.ACCEPTING:
                return this.renderSpinner(B.intl.string(B.t['6wsY19']));
            case D.r2o.EXPIRED:
                return this.renderExpiredInvite();
            case D.r2o.BANNED:
                return this.renderBannedInvite();
            case D.r2o.ERROR:
                return this.renderErrorInvite();
            case D.r2o.ACCEPTED:
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
                    (null === (i = t.guild) || void 0 === i ? void 0 : i.id) != null ? n(D.Z5c.APP_WITH_INVITE_AND_GUILD_ONBOARDING(t.code)) : d.Z.transitionToInvite(null != e ? e : t, n);
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
                        (0, g.A)(t), null != t.channel && d.Z.openApp(e, t.channel.id);
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
                                message: B.intl.string(B.t.dDZRd3)
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
                return M.KO
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
t.Z = c.ZP.connectStores([A.Z, S.Z, C.default, _.Z, p.Z], (e) => {
    var t;
    let { inviteKey: n } = e;
    return {
        invite: null !== (t = A.Z.getInvite(n)) && void 0 !== t ? t : {},
        nativeAppState: _.Z.getState(n),
        authenticated: C.default.isAuthenticated(),
        defaultRoute: S.Z.defaultRoute,
        isUnderage: p.Z.isUnderageAnonymous()
    };
})(K);
