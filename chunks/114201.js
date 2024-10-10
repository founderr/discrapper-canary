n.d(t, {
    Z: function () {
        return E;
    }
});
var r = n(735250);
n(470079);
var i = n(442837),
    a = n(481060),
    s = n(239091),
    o = n(553795),
    l = n(425128),
    u = n(979192),
    c = n(981631),
    d = n(689938),
    _ = n(288984);
function E(e) {
    let { guildId: t } = e,
        E = (0, i.e7)([o.Z], () => o.Z.getAccount(null, c.ABu.RIOT_GAMES)),
        f = (0, i.e7)([o.Z], () => o.Z.getAccount(null, c.ABu.LEAGUE_OF_LEGENDS)),
        { leaderboardsDisabled: h } = (0, u.Oz)(t),
        p =
            null != f && null != E
                ? () => {
                      (0, l._)({
                          riotConnectionId: E.id,
                          lolConnectionId: f.id
                      });
                  }
                : c.dG4,
        I = null == E || h ? d.Z.Messages.JOIN_LEADERBOARD : d.Z.Messages.LEAVE_LEADERBOARD;
    return (0, r.jsx)(a.Popout, {
        align: 'top',
        position: 'right',
        disablePointerEvents: !1,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, r.jsx)(a.Menu, {
                navId: 'leaderboard-popout-context-menu',
                onClose: () => {
                    (0, s.Zy)(), t();
                },
                'aria-label': d.Z.Messages.LEADERBOARD_ACTIONS_MENU_LABEL,
                onSelect: void 0,
                children: (0, r.jsx)(r.Fragment, {
                    children: (0, r.jsxs)(a.MenuGroup, {
                        children: [
                            (0, r.jsx)(a.MenuItem, {
                                id: 'refresh-my-data',
                                label: d.Z.Messages.MEMBER_LIST_CONTENT_FEED_LEADERBOARD_MENU_REFRESH_MY_DATA,
                                action: p
                            }),
                            (0, r.jsx)(a.MenuItem, {
                                id: 'leaderboard-modal',
                                label: I,
                                action: () => {
                                    (0, a.openModalLazy)(async () => {
                                        let { default: e } = await n.e('73217').then(n.bind(n, 139964));
                                        return (t) => (0, r.jsx)(e, { ...t });
                                    }),
                                        null == t || t();
                                }
                            })
                        ]
                    })
                })
            });
        },
        children: (e) =>
            (0, r.jsx)(a.Tooltip, {
                text: d.Z.Messages.MORE,
                children: (t) =>
                    (0, r.jsx)(a.Clickable, {
                        ...t,
                        className: _.menuIcon,
                        ...e,
                        children: (0, r.jsx)(a.MoreHorizontalIcon, {
                            color: 'currentColor',
                            size: 'custom',
                            width: 16,
                            height: 16
                        })
                    })
            })
    });
}
