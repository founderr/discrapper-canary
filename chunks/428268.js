var i = r(200651);
r(192379);
var a = r(442837),
    s = r(692547),
    o = r(481060),
    l = r(726542),
    u = r(231757),
    c = r(511010),
    d = r(553795),
    f = r(979192),
    _ = r(873128),
    h = r(981631),
    p = r(388032),
    m = r(804665);
function g(e) {
    let { guildId: n, leaderboardId: g } = e,
        { leaderboardsDisabled: E } = (0, f.O)(n, g),
        v = (0, a.e7)([d.Z], () => d.Z.getAccount(null, h.ABu.RIOT_GAMES)),
        I = (0, a.e7)([d.Z], () => d.Z.getAccount(null, h.ABu.LEAGUE_OF_LEGENDS)),
        T = (0, _.Z)({
            guildId: n,
            leaderboardId: g
        });
    if (null != v && null != I && !E) return null;
    let b = l.Z.get(h.ABu.RIOT_GAMES),
        y = null == v && null == I,
        S = null != v && null == I,
        A = null == v && null != I,
        N = S || A;
    function C() {
        if (null != T)
            (0, o.openModalLazy)(async () => {
                let { default: e } = await r.e('73217').then(r.bind(r, 139964));
                return (r) =>
                    (0, i.jsx)(e, {
                        ...r,
                        guildId: n,
                        leaderboard: T
                    });
            });
    }
    function R() {
        return y || N ? (0, u.Z)({ platformType: h.ABu.RIOT_GAMES }) : C();
    }
    function O() {
        return y ? p.intl.string(p.t.w6VSSE) : N ? p.intl.string(p.t.CHNBdn) : p.intl.string(p.t['0yRXHx']);
    }
    function D() {
        if (E) return null;
        let e = y
                ? (0, i.jsx)(o.CircleInformationIcon, { className: m.infoMessageIcon })
                : (0, i.jsx)(o.WarningIcon, {
                      color: s.Z.colors.STATUS_WARNING,
                      className: m.infoMessageIcon
                  }),
            n = y ? p.intl.string(p.t['Ihg/Dg']) : p.intl.string(p.t['J8U+Iy']);
        return (0, i.jsxs)('div', {
            className: m.updateMessage,
            children: [
                e,
                (0, i.jsx)(o.Text, {
                    variant: 'text-xs/medium',
                    color: 'text-muted',
                    children: n
                })
            ]
        });
    }
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(c.Z, { className: m.divider }),
            D(),
            (0, i.jsxs)(o.Button, {
                className: m.joinLeaderboardButton,
                innerClassName: m.joinLeaderboardButtonInner,
                onClick: R,
                children: [
                    !E &&
                        (0, i.jsx)('img', {
                            alt: 'Riot Games',
                            src: b.icon.whiteSVG,
                            className: m.riotIcon
                        }),
                    O()
                ]
            })
        ]
    });
}
n.Z = g;
