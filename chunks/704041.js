n(47120);
var r = n(200651),
    i = n(192379),
    a = n(481060),
    s = n(626135),
    o = n(709054),
    l = n(814059),
    u = n(873128),
    c = n(428268),
    d = n(114201),
    f = n(154658),
    _ = n(370611),
    p = n(463031),
    h = n(981631),
    m = n(231338),
    g = n(388032),
    E = n(743022);
function v(e) {
    let { children: t } = e;
    return (0, r.jsx)(a.ThemeProvider, {
        theme: m.BR.DARK,
        disableAdaptiveTheme: !0,
        children: (e) =>
            (0, r.jsx)('div', {
                className: e,
                children: t
            })
    });
}
function I(e) {
    let { leaderboard: t } = e,
        n = i.useMemo(() => (0, l.n)(o.default.extractTimestamp(t.interval_end)), [t]);
    return (0, r.jsxs)('div', {
        className: E.header,
        children: [
            (0, r.jsx)(a.LeagueOfLegendsBrandIcon, { size: 'md' }),
            (0, r.jsx)(a.Spacer, {
                size: 8,
                horizontal: !0
            }),
            (0, r.jsx)(a.Heading, {
                variant: 'text-xs/normal',
                className: E.leaderboardTitle,
                children: g.intl.format(g.t['MlT4+P'], {
                    leaderboardName: 'League of Legends',
                    timeLeft: n,
                    leaderboardNameHook: (e, t) =>
                        (0, r.jsx)(
                            a.Text,
                            {
                                variant: 'text-sm/medium',
                                className: E.leaderboardName,
                                children: e
                            },
                            t
                        )
                })
            }),
            (0, r.jsx)(d.Z, {
                guildId: t.guild_id,
                leaderboardId: p._
            })
        ]
    });
}
t.Z = (e) => {
    let { guildId: t, previewMode: n = !1, source: o, trackRankingItemInteraction: l } = e,
        d = p._,
        [m, b] = i.useState(n),
        T = i.useRef(null),
        S = (0, u.Z)({
            guildId: t,
            leaderboardId: p._,
            intervalOffset: 0
        }),
        y = (0, u.Z)({
            guildId: t,
            leaderboardId: p._,
            intervalOffset: -1
        });
    return ((0, a.useFocusLock)(T),
    !(function (e) {
        let { guildId: t, leaderboardId: n, source: r } = e,
            a = (0, u.Z)({
                guildId: null != t ? t : '',
                leaderboardId: n,
                intervalOffset: 0
            }),
            o = (0, u.Z)({
                guildId: null != t ? t : '',
                leaderboardId: n,
                intervalOffset: -1
            });
        i.useEffect(() => {
            let e, n;
            if (null == a) return;
            let i = a.guild_settings.sort_by_statistic_id;
            if (null != o) {
                var l, u;
                let t = o.guild_settings.sort_by_statistic_id,
                    r = o.users[0];
                (e = null == r ? void 0 : r.user_id), (n = null == r ? void 0 : null === (u = r.statistics) || void 0 === u ? void 0 : null === (l = u[t]) || void 0 === l ? void 0 : l.value);
            }
            s.default.track(h.rMx.LEADERBOARD_POPOUT_VIEWED, {
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
        guildId: t,
        leaderboardId: d,
        source: o
    }),
    null == S)
        ? null
        : (0, r.jsx)(v, {
              children: (0, r.jsxs)('div', {
                  className: E.popout,
                  ref: T,
                  children: [
                      (0, r.jsxs)('div', {
                          className: E.content,
                          children: [
                              (0, r.jsx)(I, { leaderboard: S }),
                              (0, r.jsx)(_.Z, {
                                  leaderboard: S,
                                  previewMode: m,
                                  trackRankingItemInteraction: l
                              }),
                              m
                                  ? null
                                  : (0, r.jsxs)(r.Fragment, {
                                        children: [
                                            null != y &&
                                                (0, r.jsx)(f.Z, {
                                                    className: E.previousChampion,
                                                    guildId: t,
                                                    leaderboard: y
                                                }),
                                            (0, r.jsx)(c.Z, {
                                                guildId: t,
                                                leaderboardId: d
                                            })
                                        ]
                                    })
                          ]
                      }),
                      m
                          ? (0, r.jsx)(r.Fragment, {
                                children: (0, r.jsx)(a.Clickable, {
                                    onClick: () => b(!1),
                                    children: (0, r.jsx)('div', {
                                        className: E.exitPreviewModeButton,
                                        children: (0, r.jsx)(a.Text, {
                                            variant: 'text-sm/medium',
                                            className: E.exitPreviewModeText,
                                            children: g.intl.string(g.t.GLeQe3)
                                        })
                                    })
                                })
                            })
                          : null
                  ]
              })
          });
};
