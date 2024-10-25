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
    _ = n(873128),
    E = n(114201),
    f = n(154658),
    h = n(370611),
    p = n(463031),
    I = n(981631),
    m = n(231338),
    T = n(689938),
    S = n(304818);
function g(e) {
    let { children: t } = e;
    return (0, r.jsx)(s.ThemeProvider, {
        theme: m.BR.DARK,
        children: (e) =>
            (0, r.jsx)('div', {
                'data-disable-adaptive-theme': !0,
                className: e,
                children: t
            })
    });
}
function A(e) {
    let { leaderboard: t } = e,
        n = i.useMemo(() => (0, d.n)(u.default.extractTimestamp(t.interval_end)), [t]);
    return (0, r.jsxs)('div', {
        className: S.header,
        children: [
            (0, r.jsx)(s.LeagueOfLegendsBrandIcon, { size: 'md' }),
            (0, r.jsx)(s.Spacer, {
                size: 8,
                horizontal: !0
            }),
            (0, r.jsx)(s.Heading, {
                variant: 'heading-sm/normal',
                className: S.leaderboardTitle,
                children: T.Z.Messages.LEADERBOARD_POPOUT_TITLE.format({
                    leaderboardName: 'League of Legends',
                    timeLeft: n,
                    leaderboardNameHook: (e, t) =>
                        (0, r.jsx)(
                            s.Text,
                            {
                                variant: 'text-sm/medium',
                                className: S.leaderboardName,
                                children: e
                            },
                            t
                        )
                })
            }),
            (0, r.jsx)(E.Z, {
                guildId: t.guild_id,
                leaderboardId: p._
            })
        ]
    });
}
function N(e) {
    let { guildId: t, leaderboardId: i } = e,
        { leaderboardsDisabled: u } = (0, c.O)(t, i);
    return null == (0, a.e7)([l.Z], () => l.Z.getAccount(null, I.ABu.RIOT_GAMES)) || u
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(o.Z, { className: S.divider }),
                  (0, r.jsx)(s.Button, {
                      className: S.joinLeaderboardButton,
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
                      children: T.Z.Messages.JOIN_LEADERBOARD
                  })
              ]
          })
        : null;
}
t.Z = (e) => {
    let { guildId: t, previewMode: n = !1 } = e,
        [a, o] = i.useState(n),
        l = i.useRef(null),
        u = (0, _.Z)({
            guildId: t,
            leaderboardId: p._,
            intervalOffset: 0
        });
    return ((0, s.useFocusLock)(l), null == u)
        ? null
        : (0, r.jsx)(g, {
              children: (0, r.jsxs)('div', {
                  className: S.popout,
                  ref: l,
                  children: [
                      (0, r.jsxs)('div', {
                          className: S.content,
                          children: [
                              (0, r.jsx)(A, { leaderboard: u }),
                              (0, r.jsx)(h.Z, {
                                  leaderboard: u,
                                  previewMode: a
                              }),
                              a
                                  ? null
                                  : (0, r.jsxs)(r.Fragment, {
                                        children: [
                                            (0, r.jsx)(f.Z, {
                                                className: S.previousChampion,
                                                guildId: t,
                                                leaderboardId: p._,
                                                intervalOffset: -1
                                            }),
                                            (0, r.jsx)(N, {
                                                guildId: t,
                                                leaderboardId: p._
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
                                        className: S.exitPreviewModeButton,
                                        children: (0, r.jsx)(s.Text, {
                                            variant: 'text-sm/medium',
                                            className: S.exitPreviewModeText,
                                            children: T.Z.Messages.LEADERBOARD_POPOUT_PREVIEW_SHOW_FULL_LEADERBOARD
                                        })
                                    })
                                })
                            })
                          : null
                  ]
              })
          });
};
