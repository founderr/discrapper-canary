var r = n(200651);
n(192379);
var i = n(120356),
    a = n.n(i),
    s = n(442837),
    o = n(481060),
    l = n(385499),
    u = n(813549),
    c = n(246946),
    d = n(51144),
    f = n(388032),
    _ = n(514340);
let h = (e) => {
    let { primary: t, secondary: n, botType: i, botVerified: s, discriminatorClass: u, className: c, usernameClass: d, color: h, botClass: p, showStreamerModeTooltip: m } = e;
    return (0, r.jsxs)('div', {
        className: a()(_.info, c),
        children: [
            (0, r.jsx)(o.Tooltip, {
                text: f.intl.string(f.t.Br1ls7),
                shouldShow: m,
                'aria-label': !!m && void 0,
                children: (e) =>
                    (0, r.jsx)('span', {
                        ...e,
                        className: a()(_.__invalid_username, d),
                        style: null != h ? { color: h } : void 0,
                        children: t
                    })
            }),
            null != n
                ? (0, r.jsx)('span', {
                      className: a()(_.infoSpacing, u),
                      children: n
                  })
                : void 0,
            null != i &&
                (0, r.jsx)(l.Z, {
                    type: i,
                    className: a()(_.infoSpacing, p),
                    verified: s
                })
        ]
    });
};
t.Z = (e) => {
    let { user: t, nick: n, forceUsername: i, showAccountIdentifier: a, overrideDiscriminator: o, forcePomelo: l, hideBotTag: f = !1, hideDiscriminator: _ = !1, ...p } = e,
        m = (0, s.e7)([c.Z], () => c.Z.hidePersonalInformation),
        g = m || _ || t.isNonUserBot(),
        E = t.toString(),
        v = f
            ? null
            : (function (e) {
                  if (e.isSystemUser()) return u.J.SYSTEM_DM;
                  if (e.isClyde()) return u.J.AI;
                  if (e.bot) return u.J.BOT;
                  return null;
              })(t),
        I = t.isVerifiedBot(),
        S = d.ZP.getName(t),
        b = i ? E : null != n ? n : S,
        T = t.isPomelo() || l;
    if (T || b !== E) {
        let e = b === E && T && i ? d.ZP.getUserTag(t, { forcePomelo: l }) : b,
            n = a && e !== '@'.concat(E) ? d.ZP.getUserTag(t) : void 0;
        return (0, r.jsx)(h, {
            primary: e,
            secondary: n,
            botType: v,
            botVerified: I,
            showStreamerModeTooltip: m && d.ZP.isNameConcealed(e),
            ...p
        });
    }
    return (0, r.jsx)(u.Z, {
        name: b,
        botType: v,
        botVerified: I,
        discriminator: g || b !== E ? null : null != o ? o : t.discriminator,
        ...p
    });
};
