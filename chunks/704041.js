n(47120);
var r = n(200651),
    i = n(192379),
    a = n(442837),
    s = n(481060),
    o = n(511010),
    l = n(553795),
    u = n(709054),
    c = n(979192),
    d = n(814059),
    f = n(873128),
    _ = n(114201),
    h = n(154658),
    p = n(370611),
    m = n(463031),
    g = n(981631),
    E = n(231338),
    v = n(388032),
    I = n(304818);
function S(e) {
    let { children: t } = e;
    return (0, r.jsx)(s.ThemeProvider, {
        theme: E.BR.DARK,
        children: (e) =>
            (0, r.jsx)('div', {
                'data-disable-adaptive-theme': !0,
                className: e,
                children: t
            })
    });
}
function T(e) {
    let { leaderboard: t } = e,
        n = i.useMemo(() => (0, d.n)(u.default.extractTimestamp(t.interval_end)), [t]);
    return (0, r.jsxs)('div', {
        className: I.header,
        children: [
            (0, r.jsx)(s.LeagueOfLegendsBrandIcon, { size: 'md' }),
            (0, r.jsx)(s.Spacer, {
                size: 8,
                horizontal: !0
            }),
            (0, r.jsx)(s.Heading, {
                variant: 'heading-sm/normal',
                className: I.leaderboardTitle,
                children: v.intl.format(v.t['MlT4+P'], {
                    leaderboardName: 'League of Legends',
                    timeLeft: n,
                    leaderboardNameHook: (e, t) =>
                        (0, r.jsx)(
                            s.Text,
                            {
                                variant: 'text-sm/medium',
                                className: I.leaderboardName,
                                children: e
                            },
                            t
                        )
                })
            }),
            (0, r.jsx)(_.Z, {
                guildId: t.guild_id,
                leaderboardId: m._
            })
        ]
    });
}
function b(e) {
    let { guildId: t, leaderboardId: i } = e,
        { leaderboardsDisabled: u } = (0, c.O)(t, i);
    return null == (0, a.e7)([l.Z], () => l.Z.getAccount(null, g.ABu.RIOT_GAMES)) || u
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(o.Z, { className: I.divider }),
                  (0, r.jsx)(s.Button, {
                      className: I.joinLeaderboardButton,
                      onClick: function () {
                          (0, s.openModalLazy)(async () => {
                              let { default: e } = await n.e('73217').then(n.bind(n, 139964));
                              return (n) =>
                                  (0, r.jsx)(e, {
                                      ...n,
                                      guildId: t
                                  });
                          });
                      },
                      children: v.intl.string(v.t['0yRXHx'])
                  })
              ]
          })
        : null;
}
t.Z = (e) => {
    let { guildId: t, previewMode: n = !1 } = e,
        [a, o] = i.useState(n),
        l = i.useRef(null),
        u = (0, f.Z)({
            guildId: t,
            leaderboardId: m._,
            intervalOffset: 0
        });
    return ((0, s.useFocusLock)(l), null == u)
        ? null
        : (0, r.jsx)(S, {
              children: (0, r.jsxs)('div', {
                  className: I.popout,
                  ref: l,
                  children: [
                      (0, r.jsxs)('div', {
                          className: I.content,
                          children: [
                              (0, r.jsx)(T, { leaderboard: u }),
                              (0, r.jsx)(p.Z, {
                                  leaderboard: u,
                                  previewMode: a
                              }),
                              a
                                  ? null
                                  : (0, r.jsxs)(r.Fragment, {
                                        children: [
                                            (0, r.jsx)(h.Z, {
                                                className: I.previousChampion,
                                                guildId: t,
                                                leaderboardId: m._,
                                                intervalOffset: -1
                                            }),
                                            (0, r.jsx)(b, {
                                                guildId: t,
                                                leaderboardId: m._
                                            })
                                        ]
                                    })
                          ]
                      }),
                      a
                          ? (0, r.jsx)(r.Fragment, {
                                children: (0, r.jsx)(s.Clickable, {
                                    onClick: () => o(!1),
                                    children: (0, r.jsx)('div', {
                                        className: I.exitPreviewModeButton,
                                        children: (0, r.jsx)(s.Text, {
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
