var i = r(47120);
var a = r(200651),
    s = r(192379),
    o = r(481060),
    l = r(835473),
    u = r(626135),
    c = r(709054),
    d = r(814059),
    f = r(873128),
    _ = r(428268),
    h = r(114201),
    p = r(154658),
    m = r(370611),
    g = r(463031),
    E = r(981631),
    v = r(701488),
    I = r(231338),
    T = r(388032),
    b = r(743022);
function y(e) {
    let { children: n } = e;
    return (0, a.jsx)(o.ThemeProvider, {
        theme: I.BR.DARK,
        disableAdaptiveTheme: !0,
        children: (e) =>
            (0, a.jsx)('div', {
                className: e,
                children: n
            })
    });
}
function S(e) {
    let { guildId: n, leaderboardId: r, source: i } = e,
        a = (0, f.Z)({
            guildId: null != n ? n : '',
            leaderboardId: r,
            intervalOffset: 0
        }),
        o = (0, f.Z)({
            guildId: null != n ? n : '',
            leaderboardId: r,
            intervalOffset: -1
        });
    s.useEffect(() => {
        let e, r;
        if (null == a) return;
        let s = a.guild_settings.sort_by_statistic_id;
        if (null != o) {
            var l, c;
            let n = o.guild_settings.sort_by_statistic_id,
                i = o.users[0];
            (e = null == i ? void 0 : i.user_id), (r = null == i ? void 0 : null === (c = i.statistics) || void 0 === c ? void 0 : null === (l = c[n]) || void 0 === l ? void 0 : l.value);
        }
        u.default.track(E.rMx.LEADERBOARD_POPOUT_VIEWED, {
            guild_id: n,
            leaderboard_id: a.leaderboard_id,
            interval_start: a.interval_start,
            interval_end: a.interval_end,
            sort_by_statistic_id: s,
            sort_desc: a.guild_settings.sort_desc,
            ordered_leaderboard_user_ids: a.users.map((e) => e.user_id),
            ordered_leaderboard_user_values: a.users.map((e) => {
                var n, r;
                return null !== (r = null === (n = e.statistics[s]) || void 0 === n ? void 0 : n.value) && void 0 !== r ? r : 0;
            }),
            opened_from_source: i,
            last_interval_champion_id: e,
            last_interval_champion_value: r
        });
    }, [n, r, i]);
}
let A = (e) => {
    var n;
    let { guildId: r, previewMode: i = !1, source: u, trackRankingItemInteraction: c } = e,
        d = g._,
        [h, E] = s.useState(i),
        v = s.useRef(null),
        I = (0, f.Z)({
            guildId: r,
            leaderboardId: g._,
            intervalOffset: 0
        }),
        A = (0, f.Z)({
            guildId: r,
            leaderboardId: g._,
            intervalOffset: -1
        });
    (0, o.useFocusLock)(v),
        S({
            guildId: r,
            leaderboardId: d,
            source: u
        });
    let C = (0, l.q)(null == I ? void 0 : null === (n = I.settings) || void 0 === n ? void 0 : n.application_id);
    return null == I || null == C
        ? null
        : (0, a.jsx)(y, {
              children: (0, a.jsxs)('div', {
                  className: b.popout,
                  ref: v,
                  children: [
                      (0, a.jsxs)('div', {
                          className: b.content,
                          children: [
                              (0, a.jsx)(N, {
                                  leaderboard: I,
                                  application: C
                              }),
                              (0, a.jsx)(m.Z, {
                                  leaderboard: I,
                                  previewMode: h,
                                  trackRankingItemInteraction: c
                              }),
                              h
                                  ? null
                                  : (0, a.jsxs)(a.Fragment, {
                                        children: [
                                            null != A &&
                                                (0, a.jsx)(p.Z, {
                                                    className: b.previousChampion,
                                                    guildId: r,
                                                    leaderboard: A
                                                }),
                                            (0, a.jsx)(_.Z, {
                                                guildId: r,
                                                leaderboardId: d
                                            })
                                        ]
                                    })
                          ]
                      }),
                      h
                          ? (0, a.jsx)(a.Fragment, {
                                children: (0, a.jsx)(o.Clickable, {
                                    onClick: () => E(!1),
                                    children: (0, a.jsx)('div', {
                                        className: b.exitPreviewModeButton,
                                        children: (0, a.jsx)(o.Text, {
                                            variant: 'text-sm/medium',
                                            className: b.exitPreviewModeText,
                                            children: T.intl.string(T.t.GLeQe3)
                                        })
                                    })
                                })
                            })
                          : null
                  ]
              })
          });
};
function N(e) {
    let { leaderboard: n, application: r } = e,
        i = s.useMemo(() => (0, d.n)(c.default.extractTimestamp(n.interval_end)), [n]),
        l = r.getIconURL(v.Si.LARGE),
        u =
            null == l
                ? null
                : (0, a.jsx)('img', {
                      className: b.gameIcon,
                      src: l,
                      'aria-hidden': !0,
                      alt: ''
                  });
    return (0, a.jsxs)('div', {
        className: b.header,
        children: [
            u,
            (0, a.jsx)(o.Spacer, {
                size: 8,
                horizontal: !0
            }),
            (0, a.jsx)(o.Heading, {
                variant: 'text-xs/normal',
                className: b.leaderboardTitle,
                children: T.intl.format(T.t['MlT4+P'], {
                    leaderboardName: r.name,
                    timeLeft: i,
                    leaderboardNameHook: (e, n) =>
                        (0, a.jsx)(
                            o.Text,
                            {
                                variant: 'text-sm/medium',
                                className: b.leaderboardName,
                                children: e
                            },
                            n
                        )
                })
            }),
            (0, a.jsx)(h.Z, {
                guildId: n.guild_id,
                leaderboardId: g._
            })
        ]
    });
}
n.Z = A;
