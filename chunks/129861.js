var r = n(735250);
n(470079);
var i = n(120356),
    a = n.n(i),
    o = n(442837),
    s = n(481060),
    l = n(385499),
    u = n(813549),
    c = n(246946),
    d = n(51144),
    _ = n(689938),
    E = n(845286);
function f(e) {
    if (e.isSystemUser()) return u.J.SYSTEM_DM;
    if (e.isClyde()) return u.J.AI;
    if (e.bot) return u.J.BOT;
    return null;
}
let h = (e) => {
        let { user: t, nick: n, forceUsername: i, showAccountIdentifier: a, overrideDiscriminator: s, forcePomelo: l, hideBotTag: _ = !1, hideDiscriminator: E = !1, ...h } = e,
            m = (0, o.e7)([c.Z], () => c.Z.hidePersonalInformation),
            I = m || E || t.isNonUserBot(),
            T = t.toString(),
            g = _ ? null : f(t),
            S = t.isVerifiedBot(),
            A = d.ZP.getName(t),
            v = i ? T : null != n ? n : A,
            N = t.isPomelo() || l;
        if (N || v !== T) {
            let e = v === T && N && i ? d.ZP.getUserTag(t, { forcePomelo: l }) : v,
                n = a && e !== '@'.concat(T) ? d.ZP.getUserTag(t) : void 0;
            return (0, r.jsx)(p, {
                primary: e,
                secondary: n,
                botType: g,
                botVerified: S,
                showStreamerModeTooltip: m && d.ZP.isNameConcealed(e),
                ...h
            });
        }
        return (0, r.jsx)(u.Z, {
            name: v,
            botType: g,
            botVerified: S,
            discriminator: I || v !== T ? null : null != s ? s : t.discriminator,
            ...h
        });
    },
    p = (e) => {
        let { primary: t, secondary: n, botType: i, botVerified: o, discriminatorClass: u, className: c, usernameClass: d, color: f, botClass: h, showStreamerModeTooltip: p } = e;
        return (0, r.jsxs)('div', {
            className: a()(E.info, c),
            children: [
                (0, r.jsx)(s.Tooltip, {
                    text: _.Z.Messages.STREAMER_MODE_ENABLED,
                    shouldShow: p,
                    'aria-label': !!p && void 0,
                    children: (e) =>
                        (0, r.jsx)('span', {
                            ...e,
                            className: a()(E.__invalid_username, d),
                            style: null != f ? { color: f } : void 0,
                            children: t
                        })
                }),
                null != n
                    ? (0, r.jsx)('span', {
                          className: a()(E.infoSpacing, u),
                          children: n
                      })
                    : void 0,
                null != i &&
                    (0, r.jsx)(l.Z, {
                        type: i,
                        className: a()(E.infoSpacing, h),
                        verified: o
                    })
            ]
        });
    };
t.Z = h;
