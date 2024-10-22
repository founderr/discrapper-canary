n.d(t, {
    Z: function () {
        return R;
    }
});
var r = n(200651),
    i = n(192379),
    a = n(442837),
    s = n(481060),
    o = n(580587),
    l = n(499254),
    u = n(827498),
    c = n(311819),
    d = n(541716),
    _ = n(433355),
    E = n(592125),
    f = n(944486),
    h = n(626135),
    p = n(572004),
    I = n(591759),
    m = n(135431),
    T = n(621853),
    S = n(429974),
    g = n(475413),
    A = n(981631),
    N = n(689938);
function R(e) {
    let { user: t, closePopout: n, ...R } = e,
        O = (0, a.e7)([T.Z], () => {
            var e;
            return null === (e = T.Z.getUserProfile(t.id)) || void 0 === e ? void 0 : e.application;
        }),
        v = (0, a.e7)([f.Z], () => f.Z.getChannelId()),
        C = (0, a.e7)([E.Z], () => {
            var e;
            return null === (e = E.Z.getChannel(v)) || void 0 === e ? void 0 : e.guild_id;
        }),
        L = (0, o.Z)({ channelId: null != v ? v : void 0 }),
        D = t.id,
        y = i.useCallback(() => {
            if (null != O) {
                if (L) {
                    let e = f.Z.getCurrentlySelectedChannelId(),
                        t = E.Z.getChannel(e),
                        r = null != _.ZP.getSidebarState(e) || (null == t ? void 0 : t.isGuildVocal()) ? d.I.SIDEBAR : d.I.NORMAL;
                    l.__(u._b.TEXT, r, { applicationId: O.id }), (0, s.closeModal)((0, S.z)(D, C)), null == n || n(), h.default.track(A.rMx.APP_PROFILE_OPEN_APP_BUTTON_CLICKED, { application_id: O.id });
                } else
                    (0, m.LO)({
                        applicationId: O.id,
                        ...O
                    });
            }
        }, [L, O, D, C, n]),
        b = L ? N.Z.Messages.APP_LAUNCHER_OPEN_APP : N.Z.Messages.APPLICATION_ADD_BUTTON;
    if (null == O || !(0, m.Eb)(O)) return null;
    let { customInstallUrl: M } = O,
        P = null == M || I.Z.isDiscordUrl(M) ? s.PlusSmallIcon : s.LinkExternalSmallIcon,
        U = L ? void 0 : P;
    return p.wS
        ? (0, r.jsx)(s.Popout, {
              renderPopout: (e) => {
                  let { closePopout: t } = e;
                  return (0, r.jsx)(s.Menu, {
                      navId: 'user-bot-profile-add-app',
                      onClose: t,
                      'aria-label': N.Z.Messages.APPLICATION_ADD_BUTTON_ACTIONS,
                      onSelect: void 0,
                      children: (0, r.jsx)(s.MenuGroup, {
                          children: (0, r.jsx)(s.MenuItem, {
                              id: 'copy',
                              label: N.Z.Messages.APPLICATION_ADD_BUTTON_ACTIONS_COPY,
                              action: () => (0, p.JG)((0, c.J)(O))
                          })
                      })
                  });
              },
              children: (e) => {
                  let { onClick: t, ...n } = e;
                  return (0, r.jsx)(g.tG, {
                      action: 'PRESS_ADD_APP',
                      text: b,
                      icon: U,
                      onContextMenu: t,
                      onClick: y,
                      ...n,
                      ...R
                  });
              }
          })
        : (0, r.jsx)(g.tG, {
              action: 'PRESS_ADD_APP',
              text: b,
              icon: U,
              onClick: y,
              ...R
          });
}
