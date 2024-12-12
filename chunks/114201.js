r.d(n, {
    Z: function () {
        return y;
    }
});
var i = r(200651);
r(192379);
var a = r(99815),
    s = r(442837),
    o = r(481060),
    l = r(239091),
    u = r(314897),
    c = r(553795),
    d = r(430824),
    f = r(496675),
    _ = r(626135),
    h = r(70956),
    p = r(425128),
    m = r(979192),
    g = r(703733),
    E = r(981631),
    v = r(388032),
    I = r(234032);
function T(e) {
    if (e > h.Z.Seconds.DAYS_30) {
        let n = Math.round(e / h.Z.Seconds.DAYS_30);
        return v.intl.formatToPlainString(v.t['HF7p4+'], { count: n });
    }
    if (e > 2 * h.Z.Seconds.DAY) {
        let n = Math.round(e / h.Z.Seconds.DAY);
        return v.intl.formatToPlainString(v.t.HkESOj, { count: n });
    }
    if (e > h.Z.Seconds.DAY) return v.intl.string(v.t.gvgh9P);
    else if (e > h.Z.Seconds.HOUR) {
        let n = Math.round(e / h.Z.Seconds.HOUR);
        return v.intl.formatToPlainString(v.t.mW55WV, { count: n });
    } else {
        if (!(e > h.Z.Seconds.MINUTE)) return v.intl.string(v.t.tT0mdn);
        let n = Math.round(e / h.Z.Seconds.MINUTE);
        return v.intl.formatToPlainString(v.t['1mNjX1'], { count: n });
    }
}
function b(e, n) {
    if (null == e)
        return {
            disabled: !1,
            subtext: void 0
        };
    let r = (Date.now() - e.getTime()) / h.Z.Millis.SECOND;
    if (r < 0)
        return {
            disabled: !1,
            subtext: void 0
        };
    let i = null != n ? e.getTime() > n.getTime() && r < h.Z.Seconds.HOUR : r < h.Z.Seconds.HOUR,
        a = i ? v.intl.string(v.t['3gPhoa']) : T(r);
    return {
        disabled: i,
        subtext: a
    };
}
function y(e) {
    let { guildId: n, leaderboardId: h } = e,
        T = (0, s.e7)([u.default], () => u.default.getId()),
        y = (0, s.e7)([c.Z], () => c.Z.getAccount(null, E.ABu.RIOT_GAMES)),
        S = (0, s.e7)([c.Z], () => c.Z.getAccount(null, E.ABu.LEAGUE_OF_LEGENDS)),
        { leaderboardsDisabled: A } = (0, m.O)(n, h),
        N =
            null != S && null != y
                ? () => {
                      _.default.track(E.rMx.LEADERBOARD_USER_DATA_REFRESH_REQUESTED, {
                          leaderboard_id: h,
                          guild_id: n
                      }),
                          (0, p._7)({
                              riotConnectionId: y.id,
                              lolConnectionId: S.id
                          });
                  }
                : E.dG4,
        C = null == y || A ? v.intl.string(v.t['0yRXHx']) : v.intl.string(v.t['KWpU6+']),
        { lastUpdateRequested: R, statisticLastUpdatedDate: O } = (0, g.Z)({
            userId: T,
            guildId: n,
            leaderboardId: h,
            statisticId: a.E.LOL_TOTAL_KILLS
        }),
        { disabled: D, subtext: L } = b(R, O),
        x = (0, s.e7)(
            [f.Z, d.Z],
            () => {
                let e = d.Z.getGuild(n);
                return f.Z.can(E.Plq.ADMINISTRATOR, e);
            },
            [n]
        );
    return (0, i.jsx)(o.Popout, {
        align: 'top',
        position: 'right',
        disablePointerEvents: !1,
        renderPopout: (e) => {
            let { closePopout: a } = e;
            return (0, i.jsx)(o.Menu, {
                navId: 'leaderboard-popout-context-menu',
                onClose: () => {
                    (0, l.Zy)(), a();
                },
                'aria-label': v.intl.string(v.t.BjCuf3),
                onSelect: void 0,
                children: (0, i.jsx)(i.Fragment, {
                    children: (0, i.jsxs)(o.MenuGroup, {
                        children: [
                            null != y &&
                                (0, i.jsx)(o.MenuItem, {
                                    id: 'refresh-my-data',
                                    label: v.intl.string(v.t.iopWUV),
                                    action: N,
                                    disabled: D,
                                    subtext: L
                                }),
                            (0, i.jsx)(o.MenuItem, {
                                id: 'leaderboard-modal',
                                label: C,
                                action: () => {
                                    (0, o.openModalLazy)(async () => {
                                        let { default: e } = await r.e('73217').then(r.bind(r, 139964));
                                        return (r) =>
                                            (0, i.jsx)(e, {
                                                ...r,
                                                guildId: n
                                            });
                                    }),
                                        null == a || a();
                                }
                            }),
                            x
                                ? (0, i.jsx)(o.MenuItem, {
                                      id: 'leaderboard-settings-modal',
                                      label: v.intl.string(v.t['QV4/6u']),
                                      action: () => {
                                          (0, o.openModalLazy)(async () => {
                                              let { default: e } = await r.e('25526').then(r.bind(r, 262918));
                                              return (r) =>
                                                  (0, i.jsx)(e, {
                                                      ...r,
                                                      guildId: n,
                                                      leaderboardId: h
                                                  });
                                          }),
                                              null == a || a();
                                      }
                                  })
                                : null
                        ]
                    })
                })
            });
        },
        children: (e) =>
            (0, i.jsx)(o.Tooltip, {
                text: v.intl.string(v.t.UKOtz8),
                children: (n) =>
                    (0, i.jsx)(o.Clickable, {
                        ...n,
                        className: I.menuIcon,
                        ...e,
                        children: (0, i.jsx)(o.MoreHorizontalIcon, {
                            color: 'currentColor',
                            size: 'custom',
                            width: 16,
                            height: 16
                        })
                    })
            })
    });
}
