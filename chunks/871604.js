r.d(n, {
    Z: function () {
        return A;
    }
});
var i = r(200651),
    a = r(192379),
    s = r(442837),
    o = r(481060),
    l = r(580587),
    u = r(499254),
    c = r(827498),
    d = r(311819),
    f = r(541716),
    _ = r(433355),
    h = r(592125),
    p = r(944486),
    m = r(626135),
    g = r(572004),
    E = r(591759),
    v = r(135431),
    I = r(621853),
    T = r(429974),
    b = r(475413),
    y = r(981631),
    S = r(388032);
function A(e) {
    let { user: n, closePopout: r, ...A } = e,
        N = (0, s.e7)([I.Z], () => {
            var e;
            return null === (e = I.Z.getUserProfile(n.id)) || void 0 === e ? void 0 : e.application;
        }),
        C = (0, s.e7)([p.Z], () => p.Z.getChannelId()),
        R = (0, s.e7)([h.Z], () => {
            var e;
            return null === (e = h.Z.getChannel(C)) || void 0 === e ? void 0 : e.guild_id;
        }),
        O = (0, l.Z)({ channelId: null != C ? C : void 0 }),
        D = n.id,
        L = a.useCallback(() => {
            if (null != N) {
                if (O) {
                    let e = p.Z.getCurrentlySelectedChannelId(),
                        n = h.Z.getChannel(e),
                        i = null != _.ZP.getSidebarState(e) || (null == n ? void 0 : n.isGuildVocal()) ? f.Ie.SIDEBAR : f.Ie.NORMAL;
                    u.__(c._b.TEXT, i, { applicationId: N.id }), (0, o.closeModal)((0, T.z)(D, R)), null == r || r(), m.default.track(y.rMx.APP_PROFILE_OPEN_APP_BUTTON_CLICKED, { application_id: N.id });
                } else
                    (0, v.LO)({
                        applicationId: N.id,
                        ...N
                    });
            }
        }, [O, N, D, R, r]),
        x = O ? S.intl.string(S.t['Cia+Aw']) : S.intl.string(S.t.NgXl3N);
    if (null == N || !(0, v.Eb)(N)) return null;
    let { customInstallUrl: w } = N,
        P = null == w || E.Z.isDiscordUrl(w) ? o.PlusSmallIcon : o.LinkExternalSmallIcon,
        M = O ? void 0 : P;
    return g.wS
        ? (0, i.jsx)(o.Popout, {
              renderPopout: (e) => {
                  let { closePopout: n } = e;
                  return (0, i.jsx)(o.Menu, {
                      navId: 'user-bot-profile-add-app',
                      onClose: n,
                      'aria-label': S.intl.string(S.t.dbkxVl),
                      onSelect: void 0,
                      children: (0, i.jsx)(o.MenuGroup, {
                          children: (0, i.jsx)(o.MenuItem, {
                              id: 'copy',
                              label: S.intl.string(S.t.XWDiho),
                              action: () => (0, g.JG)((0, d.J)(N))
                          })
                      })
                  });
              },
              children: (e) => {
                  let { onClick: n, ...r } = e;
                  return (0, i.jsx)(b.tG, {
                      action: 'PRESS_ADD_APP',
                      text: x,
                      icon: M,
                      onContextMenu: n,
                      onClick: L,
                      ...r,
                      ...A
                  });
              }
          })
        : (0, i.jsx)(b.tG, {
              action: 'PRESS_ADD_APP',
              text: x,
              icon: M,
              onClick: L,
              ...A
          });
}
