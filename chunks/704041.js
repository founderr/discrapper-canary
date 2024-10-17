n(47120);
var r = n(735250),
    i = n(470079),
    a = n(442837),
    s = n(481060),
    o = n(511010),
    l = n(553795),
    u = n(979192),
    c = n(114201),
    d = n(154658),
    _ = n(370611),
    E = n(463031),
    f = n(981631),
    h = n(231338),
    p = n(689938),
    I = n(304818);
function m(e) {
    let { children: t } = e;
    return (0, r.jsx)(s.ThemeProvider, {
        theme: h.BR.DARK,
        children: (e) =>
            (0, r.jsx)('div', {
                'data-disable-adaptive-theme': !0,
                className: e,
                children: t
            })
    });
}
function T(e) {
    let { guildId: t } = e,
        { leaderboardsDisabled: i } = (0, u.O)(t);
    return null == (0, a.e7)([l.Z], () => l.Z.getAccount(null, f.ABu.RIOT_GAMES)) || i
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
                      children: p.Z.Messages.JOIN_LEADERBOARD
                  })
              ]
          })
        : null;
}
t.Z = (e) => {
    let { guildId: t, previewMode: n = !1 } = e,
        [a, o] = i.useState(n),
        l = i.useRef(null);
    return ((0, s.useFocusLock)(l), null == t)
        ? null
        : (0, r.jsx)(m, {
              children: (0, r.jsxs)('div', {
                  className: I.popout,
                  ref: l,
                  children: [
                      (0, r.jsxs)('div', {
                          className: I.content,
                          children: [
                              (0, r.jsxs)('div', {
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
                                          children: p.Z.Messages.LEADERBOARD_POPOUT_TITLE.format({
                                              leaderboardName: 'League of Legends',
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
                                      (0, r.jsx)(c.Z, {
                                          guildId: t,
                                          leaderboardId: E._
                                      })
                                  ]
                              }),
                              (0, r.jsx)(_.Z, {
                                  guildId: t,
                                  leaderboardId: E._,
                                  intervalOffset: 0,
                                  previewMode: a
                              }),
                              a
                                  ? null
                                  : (0, r.jsxs)(r.Fragment, {
                                        children: [
                                            (0, r.jsx)(d.Z, {
                                                className: I.previousChampion,
                                                guildId: t,
                                                leaderboardId: E._,
                                                intervalOffset: -1
                                            }),
                                            (0, r.jsx)(T, { guildId: t })
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
                                            children: p.Z.Messages.LEADERBOARD_POPOUT_PREVIEW_SHOW_FULL_LEADERBOARD
                                        })
                                    })
                                })
                            })
                          : null
                  ]
              })
          });
};
