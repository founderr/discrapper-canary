n.d(t, {
    Z: function () {
        return y;
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
    f = n(433355),
    _ = n(592125),
    p = n(944486),
    h = n(626135),
    m = n(572004),
    g = n(591759),
    E = n(135431),
    v = n(621853),
    I = n(429974),
    T = n(475413),
    b = n(981631),
    S = n(388032);
function y(e) {
    let { user: t, closePopout: n, ...y } = e,
        A = (0, a.e7)([v.Z], () => {
            var e;
            return null === (e = v.Z.getUserProfile(t.id)) || void 0 === e ? void 0 : e.application;
        }),
        N = (0, a.e7)([p.Z], () => p.Z.getChannelId()),
        C = (0, a.e7)([_.Z], () => {
            var e;
            return null === (e = _.Z.getChannel(N)) || void 0 === e ? void 0 : e.guild_id;
        }),
        R = (0, o.Z)({ channelId: null != N ? N : void 0 }),
        O = t.id,
        D = i.useCallback(() => {
            if (null != A) {
                if (R) {
                    let e = p.Z.getCurrentlySelectedChannelId(),
                        t = _.Z.getChannel(e),
                        r = null != f.ZP.getSidebarState(e) || (null == t ? void 0 : t.isGuildVocal()) ? d.Ie.SIDEBAR : d.Ie.NORMAL;
                    l.__(u._b.TEXT, r, { applicationId: A.id }), (0, s.closeModal)((0, I.z)(O, C)), null == n || n(), h.default.track(b.rMx.APP_PROFILE_OPEN_APP_BUTTON_CLICKED, { application_id: A.id });
                } else
                    (0, E.LO)({
                        applicationId: A.id,
                        ...A
                    });
            }
        }, [R, A, O, C, n]),
        L = R ? S.intl.string(S.t['Cia+Aw']) : S.intl.string(S.t.NgXl3N);
    if (null == A || !(0, E.Eb)(A)) return null;
    let { customInstallUrl: x } = A,
        w = null == x || g.Z.isDiscordUrl(x) ? s.PlusSmallIcon : s.LinkExternalSmallIcon,
        P = R ? void 0 : w;
    return m.wS
        ? (0, r.jsx)(s.Popout, {
              renderPopout: (e) => {
                  let { closePopout: t } = e;
                  return (0, r.jsx)(s.Menu, {
                      navId: 'user-bot-profile-add-app',
                      onClose: t,
                      'aria-label': S.intl.string(S.t.dbkxVl),
                      onSelect: void 0,
                      children: (0, r.jsx)(s.MenuGroup, {
                          children: (0, r.jsx)(s.MenuItem, {
                              id: 'copy',
                              label: S.intl.string(S.t.XWDiho),
                              action: () => (0, m.JG)((0, c.J)(A))
                          })
                      })
                  });
              },
              children: (e) => {
                  let { onClick: t, ...n } = e;
                  return (0, r.jsx)(T.tG, {
                      action: 'PRESS_ADD_APP',
                      text: L,
                      icon: P,
                      onContextMenu: t,
                      onClick: D,
                      ...n,
                      ...y
                  });
              }
          })
        : (0, r.jsx)(T.tG, {
              action: 'PRESS_ADD_APP',
              text: L,
              icon: P,
              onClick: D,
              ...y
          });
}
