s.r(t),
    s.d(t, {
        default: function () {
            return _;
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
    x = s(981631),
    m = s(689938),
    h = s(97741);
function _(e) {
    let { guildId: t, ...s } = e,
        l = (0, o.e7)([d.Z], () => d.Z.getGuild(t));
    return null == l
        ? null
        : (0, n.jsx)(u.Z, {
              guildId: t,
              title: m.Z.Messages.LEADERBOARD_MODAL_TITLE,
              ...s,
              children: (0, n.jsxs)(a.ModalContent, {
                  className: h.modalContent,
                  children: [
                      (0, n.jsxs)('div', {
                          className: h.subtitleContainer,
                          children: [
                              (0, n.jsx)(a.Text, {
                                  variant: 'text-md/normal',
                                  color: 'text-secondary',
                                  children: m.Z.Messages.LEADERBOARD_MODAL_SUBTITLE
                              }),
                              (0, n.jsx)(a.LeagueOfLegendsBrandIcon, { size: 'xs' })
                          ]
                      }),
                      (0, n.jsxs)('div', {
                          className: h.notes,
                          children: [(0, n.jsx)(g, {}), (0, n.jsx)(a.Spacer, { size: 4 }), (0, n.jsx)(i.Z, { className: h.divider }), null != l && (0, n.jsx)(N, { guild: l })]
                      })
                  ]
              })
          });
}
function g() {
    return (0, n.jsxs)('div', {
        className: h.row,
        children: [
            (0, n.jsx)(a.Text, {
                variant: 'text-md/medium',
                children: m.Z.Messages.LEADERBOARD_MODAL_CONNECT_RIOT
            }),
            (0, n.jsx)(j, {})
        ]
    });
}
function j() {
    return null != (0, o.e7)([r.Z], () => r.Z.getAccount(null, x.ABu.RIOT_GAMES))
        ? (0, n.jsxs)(a.Button, {
              disabled: !0,
              color: a.Button.Colors.TRANSPARENT,
              look: a.Button.Looks.OUTLINED,
              innerClassName: h.doneButton,
              children: [
                  (0, n.jsx)(a.CheckmarkSmallIcon, {}),
                  (0, n.jsx)(a.Text, {
                      variant: 'text-sm/medium',
                      children: m.Z.Messages.DONE
                  })
              ]
          })
        : (0, n.jsx)(a.Button, {
              onClick: () => (0, l.Z)({ platformType: x.ABu.RIOT_GAMES }),
              size: a.Button.Sizes.SMALL,
              color: a.Button.Colors.PRIMARY,
              children: m.Z.Messages.LEADERBOARD_SETTINGS_SIGN_IN_TO_CONNECTION
          });
}
function N(e) {
    let { guild: t } = e,
        { leaderboardsDisabled: s, toggleGuildLeaderboardsDisabled: o } = (0, c.O)(t.id);
    return (0, n.jsx)(a.FormSwitch, {
        hideBorder: !0,
        onChange: o,
        value: !s,
        className: h.guildOptoutSwitch,
        children: m.Z.Messages.LEADERBOARD_SHARE_STATS
    });
}
