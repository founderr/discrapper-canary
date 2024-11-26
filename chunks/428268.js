var r = n(200651);
n(192379);
var i = n(442837),
    a = n(692547),
    s = n(481060),
    o = n(726542),
    l = n(231757),
    u = n(511010),
    c = n(553795),
    d = n(979192),
    f = n(981631),
    _ = n(388032),
    p = n(804665);
t.Z = function (e) {
    let { guildId: t, leaderboardId: h } = e,
        { leaderboardsDisabled: m } = (0, d.O)(t, h),
        g = (0, i.e7)([c.Z], () => c.Z.getAccount(null, f.ABu.RIOT_GAMES)),
        E = (0, i.e7)([c.Z], () => c.Z.getAccount(null, f.ABu.LEAGUE_OF_LEGENDS));
    if (null != g && null != E && !m) return null;
    let v = o.Z.get(f.ABu.RIOT_GAMES),
        I = null == g && null == E,
        T = (null != g && null == E) || (null == g && null != E);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(u.Z, { className: p.divider }),
            (function () {
                if (m) return null;
                let e = I
                        ? (0, r.jsx)(s.CircleInformationIcon, { className: p.infoMessageIcon })
                        : (0, r.jsx)(s.WarningIcon, {
                              color: a.Z.colors.STATUS_WARNING,
                              className: p.infoMessageIcon
                          }),
                    t = I ? _.intl.string(_.t['Ihg/Dg']) : _.intl.string(_.t['J8U+Iy']);
                return (0, r.jsxs)('div', {
                    className: p.updateMessage,
                    children: [
                        e,
                        (0, r.jsx)(s.Text, {
                            variant: 'text-xs/medium',
                            color: 'text-muted',
                            children: t
                        })
                    ]
                });
            })(),
            (0, r.jsxs)(s.Button, {
                className: p.joinLeaderboardButton,
                innerClassName: p.joinLeaderboardButtonInner,
                onClick: function () {
                    return I || T
                        ? (0, l.Z)({ platformType: f.ABu.RIOT_GAMES })
                        : void (0, s.openModalLazy)(async () => {
                              let { default: e } = await n.e('73217').then(n.bind(n, 139964));
                              return (n) =>
                                  (0, r.jsx)(e, {
                                      ...n,
                                      guildId: t
                                  });
                          });
                },
                children: [
                    !m &&
                        (0, r.jsx)('img', {
                            alt: 'Riot Games',
                            src: v.icon.whiteSVG,
                            className: p.riotIcon
                        }),
                    I ? _.intl.string(_.t.w6VSSE) : T ? _.intl.string(_.t.CHNBdn) : _.intl.string(_.t['0yRXHx'])
                ]
            })
        ]
    });
};
