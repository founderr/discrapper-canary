n.d(t, {
    Z: function () {
        return v;
    }
});
var r = n(200651);
n(192379);
var i = n(99815),
    a = n(442837),
    s = n(481060),
    o = n(239091),
    l = n(314897),
    u = n(553795),
    c = n(430824),
    d = n(496675),
    f = n(70956),
    _ = n(425128),
    h = n(979192),
    p = n(703733),
    m = n(981631),
    g = n(388032),
    E = n(288984);
function v(e) {
    let { guildId: t, leaderboardId: v } = e,
        I = (0, a.e7)([l.default], () => l.default.getId()),
        S = (0, a.e7)([u.Z], () => u.Z.getAccount(null, m.ABu.RIOT_GAMES)),
        T = (0, a.e7)([u.Z], () => u.Z.getAccount(null, m.ABu.LEAGUE_OF_LEGENDS)),
        { leaderboardsDisabled: b } = (0, h.O)(t, v),
        y =
            null != T && null != S
                ? () => {
                      (0, _._7)({
                          riotConnectionId: S.id,
                          lolConnectionId: T.id
                      });
                  }
                : m.dG4,
        A = null == S || b ? g.intl.string(g.t['0yRXHx']) : g.intl.string(g.t['KWpU6+']),
        { lastUpdateRequested: N, statisticLastUpdatedDate: C } = (0, p.Z)({
            userId: I,
            guildId: t,
            leaderboardId: v,
            statisticId: i.E.LOL_TOTAL_KILLS
        }),
        { disabled: R, subtext: O } = (function (e, t) {
            if (null == e)
                return {
                    disabled: !1,
                    subtext: void 0
                };
            let n = (Date.now() - e.getTime()) / f.Z.Millis.SECOND;
            if (n < 0)
                return {
                    disabled: !1,
                    subtext: void 0
                };
            let r = null != t ? e.getTime() > t.getTime() && n < f.Z.Seconds.HOUR : n < f.Z.Seconds.HOUR,
                i = r
                    ? g.intl.string(g.t['3gPhoa'])
                    : (function (e) {
                          if (e > f.Z.Seconds.DAYS_30) {
                              let t = Math.round(e / f.Z.Seconds.DAYS_30);
                              return g.intl.formatToPlainString(g.t['HF7p4+'], { count: t });
                          }
                          if (e > 2 * f.Z.Seconds.DAY) {
                              let t = Math.round(e / f.Z.Seconds.DAY);
                              return g.intl.formatToPlainString(g.t.HkESOj, { count: t });
                          }
                          if (e > f.Z.Seconds.DAY) return g.intl.string(g.t.gvgh9P);
                          else if (e > f.Z.Seconds.HOUR) {
                              let t = Math.round(e / f.Z.Seconds.HOUR);
                              return g.intl.formatToPlainString(g.t.mW55WV, { count: t });
                          } else {
                              if (!(e > f.Z.Seconds.MINUTE)) return g.intl.string(g.t.tT0mdn);
                              let t = Math.round(e / f.Z.Seconds.MINUTE);
                              return g.intl.formatToPlainString(g.t['1mNjX1'], { count: t });
                          }
                      })(n);
            return {
                disabled: r,
                subtext: i
            };
        })(N, C),
        D = (0, a.e7)(
            [d.Z, c.Z],
            () => {
                let e = c.Z.getGuild(t);
                return d.Z.can(m.Plq.ADMINISTRATOR, e);
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
                'aria-label': g.intl.string(g.t.BjCuf3),
                onSelect: void 0,
                children: (0, r.jsx)(r.Fragment, {
                    children: (0, r.jsxs)(s.MenuGroup, {
                        children: [
                            null != S &&
                                (0, r.jsx)(s.MenuItem, {
                                    id: 'refresh-my-data',
                                    label: g.intl.string(g.t.iopWUV),
                                    action: y,
                                    disabled: R,
                                    subtext: O
                                }),
                            (0, r.jsx)(s.MenuItem, {
                                id: 'leaderboard-modal',
                                label: A,
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
                            D
                                ? (0, r.jsx)(s.MenuItem, {
                                      id: 'leaderboard-settings-modal',
                                      label: g.intl.string(g.t['QV4/6u']),
                                      action: () => {
                                          (0, s.openModalLazy)(async () => {
                                              let { default: e } = await n.e('25526').then(n.bind(n, 262918));
                                              return (n) =>
                                                  (0, r.jsx)(e, {
                                                      ...n,
                                                      guildId: t,
                                                      leaderboardId: v
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
                text: g.intl.string(g.t.UKOtz8),
                children: (t) =>
                    (0, r.jsx)(s.Clickable, {
                        ...t,
                        className: E.menuIcon,
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
