n.d(t, {
    Z: function () {
        return T;
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
    c = n(430824),
    d = n(496675),
    _ = n(70956),
    E = n(425128),
    f = n(979192),
    h = n(703733),
    p = n(981631),
    I = n(689938),
    m = n(288984);
function T(e) {
    let { guildId: t, leaderboardId: T } = e,
        S = (0, a.e7)([l.default], () => l.default.getId()),
        g = (0, a.e7)([u.Z], () => u.Z.getAccount(null, p.ABu.RIOT_GAMES)),
        A = (0, a.e7)([u.Z], () => u.Z.getAccount(null, p.ABu.LEAGUE_OF_LEGENDS)),
        { leaderboardsDisabled: N } = (0, f.O)(t, T),
        R =
            null != A && null != g
                ? () => {
                      (0, E._7)({
                          riotConnectionId: g.id,
                          lolConnectionId: A.id
                      });
                  }
                : p.dG4,
        O = null == g || N ? I.Z.Messages.JOIN_LEADERBOARD : I.Z.Messages.LEAVE_LEADERBOARD,
        { lastUpdateRequested: v, statisticLastUpdatedDate: C } = (0, h.Z)({
            userId: S,
            guildId: t,
            leaderboardId: T,
            statisticId: i.E.LOL_TOTAL_KILLS
        }),
        { disabled: L, subtext: D } = (function (e, t) {
            if (null == e)
                return {
                    disabled: !1,
                    subtext: void 0
                };
            let n = (Date.now() - e.getTime()) / _.Z.Millis.SECOND;
            if (n < 0)
                return {
                    disabled: !1,
                    subtext: void 0
                };
            let r = null != t ? e.getTime() > t.getTime() && n < _.Z.Seconds.HOUR : n < _.Z.Seconds.HOUR,
                i = r
                    ? I.Z.Messages.LEADERBOARD_UPDATE_IN_PROGRESS
                    : (function (e) {
                          if (e > _.Z.Seconds.DAYS_30) {
                              let t = Math.round(e / _.Z.Seconds.DAYS_30);
                              return I.Z.Messages.LEADERBOARD_UPDATED_AGO_TIMESTAMP_MONTHS.format({ count: t });
                          }
                          if (e > 2 * _.Z.Seconds.DAY) {
                              let t = Math.round(e / _.Z.Seconds.DAY);
                              return I.Z.Messages.LEADERBOARD_UPDATED_AGO_TIMESTAMP_DAYS.format({ count: t });
                          }
                          if (e > _.Z.Seconds.DAY) return I.Z.Messages.LEADERBOARD_UPDATED_YESTERDAY;
                          else if (e > _.Z.Seconds.HOUR) {
                              let t = Math.round(e / _.Z.Seconds.HOUR);
                              return I.Z.Messages.LEADERBOARD_UPDATED_AGO_TIMESTAMP_HOURS.format({ count: t });
                          } else {
                              if (!(e > _.Z.Seconds.MINUTE)) return I.Z.Messages.LEADERBOARD_UPDATED_JUST_NOW;
                              let t = Math.round(e / _.Z.Seconds.MINUTE);
                              return I.Z.Messages.LEADERBOARD_UPDATED_AGO_TIMESTAMP_MINUTES.format({ count: t });
                          }
                      })(n);
            return {
                disabled: r,
                subtext: i
            };
        })(v, C),
        y = (0, a.e7)(
            [d.Z, c.Z],
            () => {
                let e = c.Z.getGuild(t);
                return d.Z.can(p.Plq.ADMINISTRATOR, e);
            },
            [t]
        );
    return (0, r.jsx)(s.Popout, {
        align: 'top',
        position: 'right',
        disablePointerEvents: !1,
        renderPopout: (e) => {
            let { closePopout: i } = e;
            return (0, r.jsx)(s.Menu, {
                navId: 'leaderboard-popout-context-menu',
                onClose: () => {
                    (0, o.Zy)(), i();
                },
                'aria-label': I.Z.Messages.LEADERBOARD_ACTIONS_MENU_LABEL,
                onSelect: void 0,
                children: (0, r.jsx)(r.Fragment, {
                    children: (0, r.jsxs)(s.MenuGroup, {
                        children: [
                            null != g &&
                                (0, r.jsx)(s.MenuItem, {
                                    id: 'refresh-my-data',
                                    label: I.Z.Messages.MEMBER_LIST_CONTENT_FEED_LEADERBOARD_MENU_REFRESH_MY_DATA,
                                    action: R,
                                    disabled: L,
                                    subtext: D
                                }),
                            (0, r.jsx)(s.MenuItem, {
                                id: 'leaderboard-modal',
                                label: O,
                                action: () => {
                                    (0, s.openModalLazy)(async () => {
                                        let { default: e } = await n.e('73217').then(n.bind(n, 139964));
                                        return (n) =>
                                            (0, r.jsx)(e, {
                                                ...n,
                                                guildId: t
                                            });
                                    }),
                                        null == i || i();
                                }
                            }),
                            y
                                ? (0, r.jsx)(s.MenuItem, {
                                      id: 'leaderboard-settings-modal',
                                      label: I.Z.Messages.LEADERBOARD_CONTEXT_MENU_SETTINGS_LABEL,
                                      action: () => {
                                          (0, s.openModalLazy)(async () => {
                                              let { default: e } = await n.e('25526').then(n.bind(n, 262918));
                                              return (n) =>
                                                  (0, r.jsx)(e, {
                                                      ...n,
                                                      guildId: t,
                                                      leaderboardId: T
                                                  });
                                          }),
                                              null == i || i();
                                      }
                                  })
                                : null
                        ]
                    })
                })
            });
        },
        children: (e) =>
            (0, r.jsx)(s.Tooltip, {
                text: I.Z.Messages.MORE,
                children: (t) =>
                    (0, r.jsx)(s.Clickable, {
                        ...t,
                        className: m.menuIcon,
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
