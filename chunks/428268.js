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
    _ = r(981631),
    h = r(388032),
    p = r(804665);
function m(e) {
    let { guildId: n, leaderboardId: m } = e,
        { leaderboardsDisabled: g } = (0, f.O)(n, m),
        E = (0, a.e7)([d.Z], () => d.Z.getAccount(null, _.ABu.RIOT_GAMES)),
        v = (0, a.e7)([d.Z], () => d.Z.getAccount(null, _.ABu.LEAGUE_OF_LEGENDS));
    if (null != E && null != v && !g) return null;
    let I = l.Z.get(_.ABu.RIOT_GAMES),
        T = null == E && null == v,
        b = null != E && null == v,
        y = null == E && null != v,
        S = b || y;
    function A() {
        (0, o.openModalLazy)(async () => {
            let { default: e } = await r.e('73217').then(r.bind(r, 139964));
            return (r) =>
                (0, i.jsx)(e, {
                    ...r,
                    guildId: n
                });
        });
    }
    function N() {
        return T || S ? (0, u.Z)({ platformType: _.ABu.RIOT_GAMES }) : A();
    }
    function C() {
        return T ? h.intl.string(h.t.w6VSSE) : S ? h.intl.string(h.t.CHNBdn) : h.intl.string(h.t['0yRXHx']);
    }
    function R() {
        if (g) return null;
        let e = T
                ? (0, i.jsx)(o.CircleInformationIcon, { className: p.infoMessageIcon })
                : (0, i.jsx)(o.WarningIcon, {
                      color: s.Z.colors.STATUS_WARNING,
                      className: p.infoMessageIcon
                  }),
            n = T ? h.intl.string(h.t['Ihg/Dg']) : h.intl.string(h.t['J8U+Iy']);
        return (0, i.jsxs)('div', {
            className: p.updateMessage,
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
            (0, i.jsx)(c.Z, { className: p.divider }),
            R(),
            (0, i.jsxs)(o.Button, {
                className: p.joinLeaderboardButton,
                innerClassName: p.joinLeaderboardButtonInner,
                onClick: N,
                children: [
                    !g &&
                        (0, i.jsx)('img', {
                            alt: 'Riot Games',
                            src: I.icon.whiteSVG,
                            className: p.riotIcon
                        }),
                    C()
                ]
            })
        ]
    });
}
n.Z = m;
