n.r(t),
    n.d(t, {
        default: function () {
            return p;
        }
    });
var i = n(200651),
    o = n(192379),
    s = n(442837),
    l = n(481060),
    a = n(367907),
    r = n(231757),
    d = n(511010),
    c = n(553795),
    u = n(430824),
    x = n(979192),
    m = n(647529),
    h = n(986398),
    g = n(463031),
    j = n(981631),
    _ = n(388032),
    f = n(168423);
function p(e) {
    let { guildId: t, leaderboard: n, ...r } = e,
        c = (0, s.e7)([u.Z], () => u.Z.getGuild(t));
    return (o.useEffect(() => {
        null != t &&
            a.ZP.trackWithMetadata(j.rMx.OPEN_MODAL, {
                type: j.jXE.GUILD_LEADERBOARD_ACCESS_MODAL,
                guild_id: t
            });
    }, [t]),
    null == c)
        ? null
        : (0, i.jsx)(m.Z, {
              guildId: t,
              title: _.intl.string(_.t['WWBw5+']),
              ...r,
              children: (0, i.jsxs)(l.ModalContent, {
                  className: f.modalContent,
                  children: [
                      (0, i.jsxs)('div', {
                          className: f.subtitleContainer,
                          children: [
                              (0, i.jsx)(l.Text, {
                                  variant: 'text-md/normal',
                                  color: 'text-secondary',
                                  children: _.intl.string(_.t.OBuzJi)
                              }),
                              (0, i.jsx)(h.Z, {
                                  className: f.winnerImage,
                                  leaderboard: n
                              })
                          ]
                      }),
                      (0, i.jsxs)('div', {
                          className: f.notes,
                          children: [(0, i.jsx)(B, {}), (0, i.jsx)(l.Spacer, { size: 4 }), (0, i.jsx)(d.Z, { className: f.divider }), null != c && (0, i.jsx)(N, { guild: c })]
                      })
                  ]
              })
          });
}
function B() {
    return (0, i.jsxs)('div', {
        className: f.row,
        children: [
            (0, i.jsx)(l.Text, {
                variant: 'text-md/medium',
                children: _.intl.string(_.t.PL48CA)
            }),
            (0, i.jsx)(C, {})
        ]
    });
}
function C() {
    return null != (0, s.e7)([c.Z], () => c.Z.getAccount(null, j.ABu.RIOT_GAMES))
        ? (0, i.jsxs)(l.Button, {
              disabled: !0,
              color: l.Button.Colors.TRANSPARENT,
              look: l.Button.Looks.OUTLINED,
              innerClassName: f.doneButton,
              children: [
                  (0, i.jsx)(l.CheckmarkSmallIcon, {}),
                  (0, i.jsx)(l.Text, {
                      variant: 'text-sm/medium',
                      children: _.intl.string(_.t.i4jeWV)
                  })
              ]
          })
        : (0, i.jsx)(l.Button, {
              onClick: () => (0, r.Z)({ platformType: j.ABu.RIOT_GAMES }),
              size: l.Button.Sizes.SMALL,
              color: l.Button.Colors.PRIMARY,
              children: _.intl.string(_.t.To26Nj)
          });
}
function N(e) {
    let { guild: t } = e,
        { leaderboardsDisabled: n, toggleGuildLeaderboardsDisabled: o } = (0, x.O)(t.id, g._);
    return (0, i.jsx)(l.FormSwitch, {
        hideBorder: !0,
        onChange: o,
        value: !n,
        className: f.guildOptoutSwitch,
        children: _.intl.string(_.t.eZhXQU)
    });
}
