s.r(t),
    s.d(t, {
        default: function () {
            return g;
        }
    });
var n = s(735250);
s(470079);
var o = s(442837),
    a = s(481060),
    l = s(231757),
    i = s(511010),
    r = s(553795),
    d = s(430824),
    c = s(979192),
    u = s(647529),
    x = s(463031),
    m = s(981631),
    h = s(689938),
    _ = s(97741);
function g(e) {
    let { guildId: t, ...s } = e,
        l = (0, o.e7)([d.Z], () => d.Z.getGuild(t));
    return null == l
        ? null
        : (0, n.jsx)(u.Z, {
              guildId: t,
              title: h.Z.Messages.LEADERBOARD_MODAL_TITLE,
              ...s,
              children: (0, n.jsxs)(a.ModalContent, {
                  className: _.modalContent,
                  children: [
                      (0, n.jsxs)('div', {
                          className: _.subtitleContainer,
                          children: [
                              (0, n.jsx)(a.Text, {
                                  variant: 'text-md/normal',
                                  color: 'text-secondary',
                                  children: h.Z.Messages.LEADERBOARD_MODAL_SUBTITLE
                              }),
                              (0, n.jsx)(a.LeagueOfLegendsBrandIcon, { size: 'xs' })
                          ]
                      }),
                      (0, n.jsxs)('div', {
                          className: _.notes,
                          children: [(0, n.jsx)(j, {}), (0, n.jsx)(a.Spacer, { size: 4 }), (0, n.jsx)(i.Z, { className: _.divider }), null != l && (0, n.jsx)(S, { guild: l })]
                      })
                  ]
              })
          });
}
function j() {
    return (0, n.jsxs)('div', {
        className: _.row,
        children: [
            (0, n.jsx)(a.Text, {
                variant: 'text-md/medium',
                children: h.Z.Messages.LEADERBOARD_MODAL_CONNECT_RIOT
            }),
            (0, n.jsx)(N, {})
        ]
    });
}
function N() {
    return null != (0, o.e7)([r.Z], () => r.Z.getAccount(null, m.ABu.RIOT_GAMES))
        ? (0, n.jsxs)(a.Button, {
              disabled: !0,
              color: a.Button.Colors.TRANSPARENT,
              look: a.Button.Looks.OUTLINED,
              innerClassName: _.doneButton,
              children: [
                  (0, n.jsx)(a.CheckmarkSmallIcon, {}),
                  (0, n.jsx)(a.Text, {
                      variant: 'text-sm/medium',
                      children: h.Z.Messages.DONE
                  })
              ]
          })
        : (0, n.jsx)(a.Button, {
              onClick: () => (0, l.Z)({ platformType: m.ABu.RIOT_GAMES }),
              size: a.Button.Sizes.SMALL,
              color: a.Button.Colors.PRIMARY,
              children: h.Z.Messages.LEADERBOARD_SETTINGS_SIGN_IN_TO_CONNECTION
          });
}
function S(e) {
    let { guild: t } = e,
        { leaderboardsDisabled: s, toggleGuildLeaderboardsDisabled: o } = (0, c.O)(t.id, x._);
    return (0, n.jsx)(a.FormSwitch, {
        hideBorder: !0,
        onChange: o,
        value: !s,
        className: _.guildOptoutSwitch,
        children: h.Z.Messages.LEADERBOARD_SHARE_STATS
    });
}
