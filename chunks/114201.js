n.d(t, {
    Z: function () {
        return I;
    }
});
var r = n(735250);
n(470079);
var i = n(99815),
    a = n(442837),
    s = n(481060),
    o = n(239091),
    l = n(314897),
    u = n(553795),
    c = n(70956),
    d = n(425128),
    _ = n(979192),
    E = n(703733),
    f = n(981631),
    h = n(689938),
    p = n(288984);
function I(e) {
    let { guildId: t, leaderboardId: I } = e,
        m = (0, a.e7)([l.default], () => l.default.getId()),
        T = (0, a.e7)([u.Z], () => u.Z.getAccount(null, f.ABu.RIOT_GAMES)),
        S = (0, a.e7)([u.Z], () => u.Z.getAccount(null, f.ABu.LEAGUE_OF_LEGENDS)),
        { leaderboardsDisabled: g } = (0, _.O)(t),
        A =
            null != S && null != T
                ? () => {
                      (0, d._)({
                          riotConnectionId: T.id,
                          lolConnectionId: S.id
                      });
                  }
                : f.dG4,
        N = null == T || g ? h.Z.Messages.JOIN_LEADERBOARD : h.Z.Messages.LEAVE_LEADERBOARD,
        { lastUpdateRequested: R, statisticLastUpdatedDate: O } = (0, E.Z)({
            userId: m,
            guildId: t,
            leaderboardId: I,
            statisticId: i.E.LOL_TOTAL_KILLS
        }),
        { disabled: v, subtext: C } = (function (e, t) {
            if (null == e)
                return {
                    disabled: !1,
                    subtext: void 0
                };
            let n = (Date.now() - e.getTime()) / c.Z.Millis.SECOND;
            if (n < 0)
                return {
                    disabled: !1,
                    subtext: void 0
                };
            let r = null != t ? e.getTime() > t.getTime() && n < c.Z.Seconds.HOUR : n < c.Z.Seconds.HOUR,
                i = r
                    ? h.Z.Messages.LEADERBOARD_UPDATE_IN_PROGRESS
                    : (function (e) {
                          if (e > c.Z.Seconds.DAYS_30) {
                              let t = Math.round(e / c.Z.Seconds.DAYS_30);
                              return h.Z.Messages.LEADERBOARD_UPDATED_AGO_TIMESTAMP_MONTHS.format({ count: t });
                          }
                          if (e > 2 * c.Z.Seconds.DAY) {
                              let t = Math.round(e / c.Z.Seconds.DAY);
                              return h.Z.Messages.LEADERBOARD_UPDATED_AGO_TIMESTAMP_DAYS.format({ count: t });
                          }
                          if (e > c.Z.Seconds.DAY) return h.Z.Messages.LEADERBOARD_UPDATED_YESTERDAY;
                          else if (e > c.Z.Seconds.HOUR) {
                              let t = Math.round(e / c.Z.Seconds.HOUR);
                              return h.Z.Messages.LEADERBOARD_UPDATED_AGO_TIMESTAMP_HOURS.format({ count: t });
                          } else {
                              if (!(e > c.Z.Seconds.MINUTE)) return h.Z.Messages.LEADERBOARD_UPDATED_JUST_NOW;
                              let t = Math.round(e / c.Z.Seconds.MINUTE);
                              return h.Z.Messages.LEADERBOARD_UPDATED_AGO_TIMESTAMP_MINUTES.format({ count: t });
                          }
                      })(n);
            return {
                disabled: r,
                subtext: i
            };
        })(R, O);
    return (0, r.jsx)(s.Popout, {
        align: 'top',
        position: 'right',
        disablePointerEvents: !1,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, r.jsx)(s.Menu, {
                navId: 'leaderboard-popout-context-menu',
                onClose: () => {
                    (0, o.Zy)(), t();
                },
                'aria-label': h.Z.Messages.LEADERBOARD_ACTIONS_MENU_LABEL,
                onSelect: void 0,
                children: (0, r.jsx)(r.Fragment, {
                    children: (0, r.jsxs)(s.MenuGroup, {
                        children: [
                            (0, r.jsx)(s.MenuItem, {
                                id: 'refresh-my-data',
                                label: h.Z.Messages.MEMBER_LIST_CONTENT_FEED_LEADERBOARD_MENU_REFRESH_MY_DATA,
                                action: A,
                                disabled: v,
                                subtext: C
                            }),
                            (0, r.jsx)(s.MenuItem, {
                                id: 'leaderboard-modal',
                                label: N,
                                action: () => {
                                    (0, s.openModalLazy)(async () => {
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
            (0, r.jsx)(s.Tooltip, {
                text: h.Z.Messages.MORE,
                children: (t) =>
                    (0, r.jsx)(s.Clickable, {
                        ...t,
                        className: p.menuIcon,
                        ...e,
                        children: (0, r.jsx)(s.MoreHorizontalIcon, {
                            color: 'currentColor',
                            size: 'custom',
                            width: 16,
                            height: 16
                        })
                    })
            })
    });
}
