n.d(t, {
    Z: function () {
        return N;
    }
});
var r = n(735250),
    i = n(470079),
    a = n(442837),
    s = n(481060),
    o = n(580587),
    l = n(499254),
    u = n(827498),
    c = n(311819),
    d = n(541716),
    _ = n(592125),
    E = n(944486),
    f = n(626135),
    h = n(572004),
    p = n(591759),
    I = n(135431),
    m = n(621853),
    T = n(429974),
    S = n(475413),
    g = n(981631),
    A = n(689938);
function N(e) {
    let { user: t, closePopout: n, ...N } = e,
        O = (0, a.e7)([m.Z], () => {
            var e;
            return null === (e = m.Z.getUserProfile(t.id)) || void 0 === e ? void 0 : e.application;
        }),
        R = (0, a.e7)([E.Z], () => E.Z.getChannelId()),
        v = (0, a.e7)([_.Z], () => {
            var e;
            return null === (e = _.Z.getChannel(R)) || void 0 === e ? void 0 : e.guild_id;
        }),
        C = (0, o.Z)({ channelId: null != R ? R : void 0 }),
        L = t.id,
        y = i.useCallback(() => {
            null != O &&
                (C
                    ? (l.__(u._b.TEXT, d.I.NORMAL, { applicationId: O.id }), (0, s.closeModal)((0, T.z)(L, v)), null == n || n(), f.default.track(g.rMx.APP_PROFILE_OPEN_APP_BUTTON_CLICKED, { application_id: O.id }))
                    : (0, I.LO)({
                          applicationId: O.id,
                          ...O
                      }));
        }, [C, O, L, v, n]),
        D = C ? A.Z.Messages.APP_LAUNCHER_OPEN_APP : A.Z.Messages.APPLICATION_ADD_BUTTON;
    if (null == O || !(0, I.Eb)(O)) return null;
    let { customInstallUrl: b } = O,
        M = null == b || p.Z.isDiscordUrl(b) ? s.PlusSmallIcon : s.LinkExternalSmallIcon,
        P = C ? void 0 : M;
    return h.wS
        ? (0, r.jsx)(s.Popout, {
              renderPopout: (e) => {
                  let { closePopout: t } = e;
                  return (0, r.jsx)(s.Menu, {
                      navId: 'user-bot-profile-add-app',
                      onClose: t,
                      'aria-label': A.Z.Messages.APPLICATION_ADD_BUTTON_ACTIONS,
                      onSelect: void 0,
                      children: (0, r.jsx)(s.MenuGroup, {
                          children: (0, r.jsx)(s.MenuItem, {
                              id: 'copy',
                              label: A.Z.Messages.APPLICATION_ADD_BUTTON_ACTIONS_COPY,
                              action: () => (0, h.JG)((0, c.J)(O))
                          })
                      })
                  });
              },
              children: (e) => {
                  let { onClick: t, ...n } = e;
                  return (0, r.jsx)(S.tG, {
                      action: 'PRESS_ADD_APP',
                      text: D,
                      icon: P,
                      onContextMenu: t,
                      onClick: y,
                      ...n,
                      ...N
                  });
              }
          })
        : (0, r.jsx)(S.tG, {
              action: 'PRESS_ADD_APP',
              text: D,
              icon: P,
              onClick: y,
              ...N
          });
}
