n.r(t),
    n.d(t, {
        default: function () {
            return f;
        }
    });
var i = n(200651),
    s = n(192379),
    o = n(442837),
    l = n(481060),
    a = n(367907),
    r = n(231757),
    d = n(511010),
    c = n(553795),
    u = n(430824),
    x = n(979192),
    m = n(647529),
    h = n(463031),
    g = n(981631),
    j = n(388032),
    _ = n(97741);
function f(e) {
    let { guildId: t, ...n } = e,
        r = (0, o.e7)([u.Z], () => u.Z.getGuild(t));
    return (s.useEffect(() => {
        null != t &&
            a.ZP.trackWithMetadata(g.rMx.OPEN_MODAL, {
                type: g.jXE.GUILD_LEADERBOARD_ACCESS_MODAL,
                guild_id: t
            });
    }, [t]),
    null == r)
        ? null
        : (0, i.jsx)(m.Z, {
              guildId: t,
              title: j.intl.string(j.t['WWBw5+']),
              ...n,
              children: (0, i.jsxs)(l.ModalContent, {
                  className: _.modalContent,
                  children: [
                      (0, i.jsxs)('div', {
                          className: _.subtitleContainer,
                          children: [
                              (0, i.jsx)(l.Text, {
                                  variant: 'text-md/normal',
                                  color: 'text-secondary',
                                  children: j.intl.string(j.t.OBuzJi)
                              }),
                              (0, i.jsx)(l.LeagueOfLegendsBrandIcon, { size: 'xs' })
                          ]
                      }),
                      (0, i.jsxs)('div', {
                          className: _.notes,
                          children: [(0, i.jsx)(B, {}), (0, i.jsx)(l.Spacer, { size: 4 }), (0, i.jsx)(d.Z, { className: _.divider }), null != r && (0, i.jsx)(C, { guild: r })]
                      })
                  ]
              })
          });
}
function B() {
    return (0, i.jsxs)('div', {
        className: _.row,
        children: [
            (0, i.jsx)(l.Text, {
                variant: 'text-md/medium',
                children: j.intl.string(j.t.PL48CA)
            }),
            (0, i.jsx)(p, {})
        ]
    });
}
function p() {
    return null != (0, o.e7)([c.Z], () => c.Z.getAccount(null, g.ABu.RIOT_GAMES))
        ? (0, i.jsxs)(l.Button, {
              disabled: !0,
              color: l.Button.Colors.TRANSPARENT,
              look: l.Button.Looks.OUTLINED,
              innerClassName: _.doneButton,
              children: [
                  (0, i.jsx)(l.CheckmarkSmallIcon, {}),
                  (0, i.jsx)(l.Text, {
                      variant: 'text-sm/medium',
                      children: j.intl.string(j.t.i4jeWV)
                  })
              ]
          })
        : (0, i.jsx)(l.Button, {
              onClick: () => (0, r.Z)({ platformType: g.ABu.RIOT_GAMES }),
              size: l.Button.Sizes.SMALL,
              color: l.Button.Colors.PRIMARY,
              children: j.intl.string(j.t.To26Nj)
          });
}
function C(e) {
    let { guild: t } = e,
        { leaderboardsDisabled: n, toggleGuildLeaderboardsDisabled: s } = (0, x.O)(t.id, h._);
    return (0, i.jsx)(l.FormSwitch, {
        hideBorder: !0,
        onChange: s,
        value: !n,
        className: _.guildOptoutSwitch,
        children: j.intl.string(j.t.eZhXQU)
    });
}
