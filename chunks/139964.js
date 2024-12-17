n.r(t),
    n.d(t, {
        default: function () {
            return N;
        }
    });
var i = n(200651),
    l = n(192379),
    a = n(442837),
    o = n(481060),
    s = n(367907),
    r = n(812206),
    d = n(231757),
    c = n(511010),
    u = n(553795),
    m = n(430824),
    x = n(979192),
    h = n(647529),
    g = n(986398),
    j = n(463031),
    _ = n(981631),
    p = n(388032),
    f = n(168423);
function N(e) {
    let { guildId: t, leaderboard: n, ...d } = e,
        u = (0, a.e7)([m.Z], () => m.Z.getGuild(t)),
        x = (0, a.e7)([r.Z], () => r.Z.getApplication(n.settings.application_id));
    return (l.useEffect(() => {
        null != t &&
            s.ZP.trackWithMetadata(_.rMx.OPEN_MODAL, {
                type: _.jXE.GUILD_LEADERBOARD_ACCESS_MODAL,
                guild_id: t
            });
    }, [t]),
    null == u || null == x)
        ? null
        : (0, i.jsx)(h.Z, {
              guildId: t,
              title: p.intl.formatToPlainString(p.t['3BZonp'], { applicationName: x.name }),
              ...d,
              children: (0, i.jsxs)(o.ModalContent, {
                  className: f.modalContent,
                  children: [
                      (0, i.jsxs)('div', {
                          className: f.subtitleContainer,
                          children: [
                              (0, i.jsx)(o.Text, {
                                  variant: 'text-md/normal',
                                  color: 'text-secondary',
                                  children: p.intl.string(p.t.OBuzJi)
                              }),
                              (0, i.jsx)(g.Z, {
                                  className: f.winnerImage,
                                  leaderboard: n
                              })
                          ]
                      }),
                      (0, i.jsxs)('div', {
                          className: f.notes,
                          children: [
                              n.leaderboard_id === j._
                                  ? (0, i.jsxs)(i.Fragment, {
                                        children: [(0, i.jsx)(B, {}), (0, i.jsx)(o.Spacer, { size: 4 }), (0, i.jsx)(c.Z, { className: f.divider })]
                                    })
                                  : null,
                              null != u && (0, i.jsx)(b, { guild: u })
                          ]
                      })
                  ]
              })
          });
}
function B() {
    return (0, i.jsxs)('div', {
        className: f.row,
        children: [
            (0, i.jsx)(o.Text, {
                variant: 'text-md/medium',
                children: p.intl.string(p.t.PL48CA)
            }),
            (0, i.jsx)(C, {})
        ]
    });
}
function C() {
    return null != (0, a.e7)([u.Z], () => u.Z.getAccount(null, _.ABu.RIOT_GAMES))
        ? (0, i.jsxs)(o.Button, {
              disabled: !0,
              color: o.Button.Colors.TRANSPARENT,
              look: o.Button.Looks.OUTLINED,
              innerClassName: f.doneButton,
              children: [
                  (0, i.jsx)(o.CheckmarkSmallIcon, {}),
                  (0, i.jsx)(o.Text, {
                      variant: 'text-sm/medium',
                      children: p.intl.string(p.t.i4jeWV)
                  })
              ]
          })
        : (0, i.jsx)(o.Button, {
              onClick: () => (0, d.Z)({ platformType: _.ABu.RIOT_GAMES }),
              size: o.Button.Sizes.SMALL,
              color: o.Button.Colors.PRIMARY,
              children: p.intl.string(p.t.To26Nj)
          });
}
function b(e) {
    let { guild: t } = e,
        { leaderboardsDisabled: n, toggleGuildLeaderboardsDisabled: l } = (0, x.O)(t.id, j._);
    return (0, i.jsx)(o.FormSwitch, {
        hideBorder: !0,
        onChange: l,
        value: !n,
        className: f.guildOptoutSwitch,
        children: p.intl.string(p.t.eZhXQU)
    });
}
