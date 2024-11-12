n.d(t, {
    Z: function () {
        return y;
    }
}),
    n(47120);
var i,
    r,
    s = n(200651),
    a = n(192379),
    l = n(100621),
    o = n(442837),
    c = n(481060),
    u = n(447543),
    d = n(587444),
    h = n(393238),
    g = n(388905),
    m = n(108427),
    p = n(314897),
    f = n(701190),
    _ = n(626135),
    x = n(768581),
    E = n(823379),
    v = n(264229),
    I = n(230224),
    b = n(617730),
    N = n(258356),
    C = n(981631),
    S = n(388032),
    T = n(712833);
function A() {
    return (0, s.jsx)('div', {
        className: T.centerFlex,
        children: (0, s.jsx)(c.Spinner, {})
    });
}
((r = i || (i = {}))[(r.LOADING = 0)] = 'LOADING'), (r[(r.DETAILS = 1)] = 'DETAILS'), (r[(r.ERROR = 2)] = 'ERROR');
let Z = (e) => {
    let t = (null == e ? void 0 : e.state) == null && (null == e ? void 0 : e.channel) == null;
    if (null == e || null == e.state || t) return 0;
    let n = e.state;
    switch (n) {
        case C.r2o.RESOLVED:
        case C.r2o.ACCEPTED:
        case C.r2o.APP_NOT_OPENED:
        case C.r2o.APP_OPENED:
        case C.r2o.ACCEPTING:
        case C.r2o.APP_OPENING:
            return 1;
        case C.r2o.EXPIRED:
        case C.r2o.BANNED:
        case C.r2o.ERROR:
            return 2;
        case C.r2o.RESOLVING:
            return 0;
        default:
            (0, E.vE)(n);
    }
};
function j(e) {
    let { invite: t, onAcceptInvite: n } = e;
    if ((null == t ? void 0 : t.state) === C.r2o.BANNED)
        return (0, s.jsx)(d.u, {
            text: S.intl.string(S.t['5AkWAQ']),
            buttonCta: S.intl.string(S.t['8osdkp']),
            onClick: n
        });
    return (0, s.jsx)(d.u, {
        text: S.intl.string(S.t['usP+MT']),
        buttonCta: S.intl.string(S.t['8osdkp']),
        onClick: n
    });
}
function R(e) {
    let { children: t, cardChildren: n, startAnimHeightPx: i, innerStyle: r, ...o } = e,
        { invite: u } = o,
        [d, g] = a.useState(Z(u)),
        { ref: m, height: p } = (0, h.Z)(),
        f = (0, c.useSpring)({
            height: null != p && 0 !== p ? ''.concat(p, 'px') : ''.concat(i, 'px'),
            config: l.config.stiff
        });
    return (
        a.useEffect(() => {
            let e = Z(u);
            e !== d && g(e);
        }, [u, d]),
        (0, s.jsxs)(l.animated.div, {
            className: T.inviteCard,
            style: f,
            children: [
                (0, s.jsx)(l.animated.div, {
                    className: T.inviteChildContainer,
                    style: f,
                    children: (0, s.jsx)('section', {
                        ref: m,
                        className: null == r ? void 0 : r(d),
                        children: t(d)
                    })
                }),
                n
            ]
        })
    );
}
function O(e) {
    let { invite: t } = e;
    if (null == t || !(0, I.JI)(t)) return null;
    let n = (e) => {
        if (null == t) return null;
        if (1 === e) return (0, s.jsx)(N.X, { invite: t });
        return null;
    };
    return (0, s.jsx)(R, {
        startAnimHeightPx: 0,
        innerStyle: () => T.guildInfoInner,
        ...e,
        children: (e) => n(e)
    });
}
function L(e) {
    let { invite: t } = e,
        n = (n) => {
            if (null == t) return (0, s.jsx)(A, {});
            switch (n) {
                case 1:
                    return (0, s.jsx)(b.Z, {
                        ...e,
                        invite: t
                    });
                case 2:
                    return (0, s.jsx)(j, {
                        ...e,
                        invite: t
                    });
                default:
                    return (0, s.jsx)(A, {});
            }
        },
        i = {
            1: T.inviteCardInner,
            2: T.inviteCardInnerError,
            0: T.inviteCardInnerLoading
        };
    return (0, s.jsx)(R, {
        startAnimHeightPx: 200,
        innerStyle: (e) => i[e],
        ...e,
        children: (e) => n(e)
    });
}
function P(e) {
    let { invite: t, onAcceptInvite: n } = e,
        { guild: i } = null != t ? t : {},
        r = {};
    if ((null == i ? void 0 : i.splash) != null) {
        let e = x.ZP.getGuildSplashURL({
            id: i.id,
            splash: i.splash
        });
        null != e && ((r.backgroundImage = 'url('.concat(e, ')')), (r.backgroundSize = 'cover'));
    }
    return (0, s.jsxs)(g.ZP, {
        theme: C.BRd.DARK,
        className: T.splashBackground,
        style: r,
        contentClassName: T.centerAuthBoxContent,
        children: [
            (0, s.jsx)(L, {
                ...e,
                onAcceptInvite: n
            }),
            (0, s.jsx)(O, { ...e })
        ]
    });
}
function y(e) {
    let { inviteKey: t, transitionTo: n } = e,
        i = (0, o.e7)([f.Z], () => f.Z.getInvite(t));
    return (
        a.useEffect(() => {
            (0, m.e)('invite_mobile');
        }, []),
        a.useEffect(() => {
            null != i &&
                i.state === C.r2o.RESOLVED &&
                _.default.track(
                    C.rMx.INVITE_VIEWED,
                    {
                        invite_code: t,
                        friends_count: null == i ? void 0 : i.friends_count
                    },
                    { flush: !0 }
                );
        }, [i, t]),
        (0, s.jsx)(P, {
            invite: i,
            onAcceptInvite: (e) => {
                !(function (e, t, n) {
                    var i, r, s;
                    null == e || e.preventDefault(),
                        _.default.track(C.rMx.INVITE_APP_OPENED, {
                            invite_code: (0, v.jX)(t),
                            guild_id: null == n ? void 0 : null === (i = n.guild) || void 0 === i ? void 0 : i.id,
                            channel_id: null == n ? void 0 : null === (r = n.channel) || void 0 === r ? void 0 : r.id,
                            inviter_id: null == n ? void 0 : null === (s = n.inviter) || void 0 === s ? void 0 : s.id
                        });
                    let a = null != n && n.state !== C.r2o.EXPIRED && n.state !== C.r2o.BANNED ? t : void 0,
                        l = p.default.getFingerprint(),
                        o = null != l ? l : p.default.getId(),
                        c = null != n && (null == n ? void 0 : n.type) != null ? Number(null == n ? void 0 : n.type) : void 0;
                    u.Z.openApp(a, void 0, o, void 0, c);
                })(e, t, i);
            },
            transitionTo: n
        })
    );
}
