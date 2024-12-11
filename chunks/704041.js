n(47120);
var r = n(200651),
    i = n(192379),
    a = n(481060),
    s = n(835473),
    o = n(626135),
    l = n(709054),
    u = n(814059),
    c = n(873128),
    d = n(428268),
    f = n(114201),
    _ = n(154658),
    p = n(370611),
    h = n(463031),
    m = n(981631),
    g = n(701488),
    E = n(231338),
    v = n(388032),
    I = n(743022);
function T(e) {
    let { children: t } = e;
    return (0, r.jsx)(a.ThemeProvider, {
        theme: E.BR.DARK,
        disableAdaptiveTheme: !0,
        children: (e) =>
            (0, r.jsx)('div', {
                className: e,
                children: t
            })
    });
}
function b(e) {
    let { leaderboard: t, application: n } = e,
        s = i.useMemo(() => (0, u.n)(l.default.extractTimestamp(t.interval_end)), [t]),
        o = n.getIconURL(g.Si.LARGE),
        c =
            null == o
                ? null
                : (0, r.jsx)('img', {
                      className: I.gameIcon,
                      src: o,
                      'aria-hidden': !0,
                      alt: ''
                  });
    return (0, r.jsxs)('div', {
        className: I.header,
        children: [
            c,
            (0, r.jsx)(a.Spacer, {
                size: 8,
                horizontal: !0
            }),
            (0, r.jsx)(a.Heading, {
                variant: 'text-xs/normal',
                className: I.leaderboardTitle,
                children: v.intl.format(v.t['MlT4+P'], {
                    leaderboardName: n.name,
                    timeLeft: s,
                    leaderboardNameHook: (e, t) =>
                        (0, r.jsx)(
                            a.Text,
                            {
                                variant: 'text-sm/medium',
                                className: I.leaderboardName,
                                children: e
                            },
                            t
                        )
                })
            }),
            (0, r.jsx)(f.Z, {
                guildId: t.guild_id,
                leaderboardId: h._
            })
        ]
    });
}
t.Z = (e) => {
    var t;
    let { guildId: n, previewMode: l = !1, source: u, trackRankingItemInteraction: f } = e,
        g = h._,
        [E, S] = i.useState(l),
        y = i.useRef(null),
        A = (0, c.Z)({
            guildId: n,
            leaderboardId: h._,
            intervalOffset: 0
        }),
        N = (0, c.Z)({
            guildId: n,
            leaderboardId: h._,
            intervalOffset: -1
        });
    (0, a.useFocusLock)(y),
        !(function (e) {
            let { guildId: t, leaderboardId: n, source: r } = e,
                a = (0, c.Z)({
                    guildId: null != t ? t : '',
                    leaderboardId: n,
                    intervalOffset: 0
                }),
                s = (0, c.Z)({
                    guildId: null != t ? t : '',
                    leaderboardId: n,
                    intervalOffset: -1
                });
            i.useEffect(() => {
                let e, n;
                if (null == a) return;
                let i = a.guild_settings.sort_by_statistic_id;
                if (null != s) {
                    var l, u;
                    let t = s.guild_settings.sort_by_statistic_id,
                        r = s.users[0];
                    (e = null == r ? void 0 : r.user_id), (n = null == r ? void 0 : null === (u = r.statistics) || void 0 === u ? void 0 : null === (l = u[t]) || void 0 === l ? void 0 : l.value);
                }
                o.default.track(m.rMx.LEADERBOARD_POPOUT_VIEWED, {
                    guild_id: t,
                    leaderboard_id: a.leaderboard_id,
                    interval_start: a.interval_start,
                    interval_end: a.interval_end,
                    sort_by_statistic_id: i,
                    sort_desc: a.guild_settings.sort_desc,
                    ordered_leaderboard_user_ids: a.users.map((e) => e.user_id),
                    ordered_leaderboard_user_values: a.users.map((e) => {
                        var t, n;
                        return null !== (n = null === (t = e.statistics[i]) || void 0 === t ? void 0 : t.value) && void 0 !== n ? n : 0;
                    }),
                    opened_from_source: r,
                    last_interval_champion_id: e,
                    last_interval_champion_value: n
                });
            }, [t, n, r]);
        })({
            guildId: n,
            leaderboardId: g,
            source: u
        });
    let C = (0, s.q)(null == A ? void 0 : null === (t = A.settings) || void 0 === t ? void 0 : t.application_id);
    return null == A || null == C
        ? null
        : (0, r.jsx)(T, {
              children: (0, r.jsxs)('div', {
                  className: I.popout,
                  ref: y,
                  children: [
                      (0, r.jsxs)('div', {
                          className: I.content,
                          children: [
                              (0, r.jsx)(b, {
                                  leaderboard: A,
                                  application: C
                              }),
                              (0, r.jsx)(p.Z, {
                                  leaderboard: A,
                                  previewMode: E,
                                  trackRankingItemInteraction: f
                              }),
                              E
                                  ? null
                                  : (0, r.jsxs)(r.Fragment, {
                                        children: [
                                            null != N &&
                                                (0, r.jsx)(_.Z, {
                                                    className: I.previousChampion,
                                                    guildId: n,
                                                    leaderboard: N
                                                }),
                                            (0, r.jsx)(d.Z, {
                                                guildId: n,
                                                leaderboardId: g
                                            })
                                        ]
                                    })
                          ]
                      }),
                      E
                          ? (0, r.jsx)(r.Fragment, {
                                children: (0, r.jsx)(a.Clickable, {
                                    onClick: () => S(!1),
                                    children: (0, r.jsx)('div', {
                                        className: I.exitPreviewModeButton,
                                        children: (0, r.jsx)(a.Text, {
                                            variant: 'text-sm/medium',
                                            className: I.exitPreviewModeText,
                                            children: v.intl.string(v.t.GLeQe3)
                                        })
                                    })
                                })
                            })
                          : null
                  ]
              })
          });
};
