var r = n(47120);
var i = n(735250),
    a = n(470079),
    o = n(481060),
    s = n(114201),
    l = n(154658),
    u = n(370611),
    c = n(463031),
    d = n(689938),
    _ = n(304818);
let E = (e) => {
    let { guildId: t, previewMode: n = !1 } = e,
        [r, E] = a.useState(n),
        f = a.useRef(null);
    return ((0, o.useFocusLock)(f), null == t)
        ? null
        : (0, i.jsxs)('div', {
              className: _.popout,
              ref: f,
              children: [
                  (0, i.jsxs)('div', {
                      className: _.content,
                      children: [
                          (0, i.jsxs)('div', {
                              className: _.header,
                              children: [
                                  (0, i.jsx)(o.LeagueOfLegendsBrandIcon, { size: 'md' }),
                                  (0, i.jsx)(o.Spacer, {
                                      size: 8,
                                      horizontal: !0
                                  }),
                                  (0, i.jsx)(o.Heading, {
                                      variant: 'heading-sm/normal',
                                      className: _.leaderboardTitle,
                                      children: d.Z.Messages.LEADERBOARD_POPOUT_TITLE.format({
                                          leaderboardName: 'League of Legends',
                                          leaderboardNameHook: (e, t) =>
                                              (0, i.jsx)(
                                                  o.Text,
                                                  {
                                                      variant: 'text-sm/medium',
                                                      className: _.leaderboardName,
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
                                        className: _.previousChampion,
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
                                onClick: () => E(!1),
                                children: (0, i.jsx)('div', {
                                    className: _.exitPreviewModeButton,
                                    children: (0, i.jsx)(o.Text, {
                                        variant: 'text-sm/medium',
                                        className: _.exitPreviewModeText,
                                        children: d.Z.Messages.LEADERBOARD_POPOUT_PREVIEW_SHOW_FULL_LEADERBOARD
                                    })
                                })
                            })
                        })
                      : null
              ]
          });
};
t.Z = E;
