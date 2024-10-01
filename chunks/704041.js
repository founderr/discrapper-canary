var r = n(47120);
var i = n(735250),
    a = n(470079),
    o = n(481060),
    s = n(114201),
    l = n(154658),
    u = n(370611),
    c = n(463031),
    d = n(231338),
    _ = n(689938),
    E = n(304818);
function f(e) {
    let { children: t } = e;
    return (0, i.jsx)(o.ThemeProvider, {
        theme: d.BR.DARK,
        children: (e) =>
            (0, i.jsx)('div', {
                'data-disable-adaptive-theme': !0,
                className: e,
                children: t
            })
    });
}
let h = (e) => {
    let { guildId: t, previewMode: n = !1 } = e,
        [r, d] = a.useState(n),
        h = a.useRef(null);
    return ((0, o.useFocusLock)(h), null == t)
        ? null
        : (0, i.jsx)(f, {
              children: (0, i.jsxs)('div', {
                  className: E.popout,
                  ref: h,
                  children: [
                      (0, i.jsxs)('div', {
                          className: E.content,
                          children: [
                              (0, i.jsxs)('div', {
                                  className: E.header,
                                  children: [
                                      (0, i.jsx)(o.LeagueOfLegendsBrandIcon, { size: 'md' }),
                                      (0, i.jsx)(o.Spacer, {
                                          size: 8,
                                          horizontal: !0
                                      }),
                                      (0, i.jsx)(o.Heading, {
                                          variant: 'heading-sm/normal',
                                          className: E.leaderboardTitle,
                                          children: _.Z.Messages.LEADERBOARD_POPOUT_TITLE.format({
                                              leaderboardName: 'League of Legends',
                                              leaderboardNameHook: (e, t) =>
                                                  (0, i.jsx)(
                                                      o.Text,
                                                      {
                                                          variant: 'text-sm/medium',
                                                          className: E.leaderboardName,
                                                          children: e
                                                      },
                                                      t
                                                  )
                                          })
                                      }),
                                      (0, i.jsx)(s.Z, {})
                                  ]
                              }),
                              (0, i.jsx)(u.Z, {
                                  guildId: t,
                                  leaderboardId: c._,
                                  intervalOffset: 0,
                                  previewMode: r
                              }),
                              r
                                  ? null
                                  : (0, i.jsx)(i.Fragment, {
                                        children: (0, i.jsx)(l.Z, {
                                            className: E.previousChampion,
                                            guildId: t,
                                            leaderboardId: c._,
                                            intervalOffset: -1
                                        })
                                    })
                          ]
                      }),
                      r
                          ? (0, i.jsx)(i.Fragment, {
                                children: (0, i.jsx)(o.Clickable, {
                                    onClick: () => d(!1),
                                    children: (0, i.jsx)('div', {
                                        className: E.exitPreviewModeButton,
                                        children: (0, i.jsx)(o.Text, {
                                            variant: 'text-sm/medium',
                                            className: E.exitPreviewModeText,
                                            children: _.Z.Messages.LEADERBOARD_POPOUT_PREVIEW_SHOW_FULL_LEADERBOARD
                                        })
                                    })
                                })
                            })
                          : null
                  ]
              })
          });
};
t.Z = h;
