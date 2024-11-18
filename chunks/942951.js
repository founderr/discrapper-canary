n.d(t, {
    l: function () {
        return E;
    }
});
var r = n(200651),
    l = n(192379),
    i = n(481060),
    a = n(100527),
    s = n(906732),
    o = n(184301),
    c = n(347475),
    d = n(592125),
    u = n(91047);
function E(e) {
    var t, n;
    let { user: E, channelId: m, guildId: h, messageId: p, stopPropagation: f = !1, ariaLabel: x } = e,
        { analyticsLocations: T } = (0, s.ZP)(a.Z.USERNAME);
    let _ =
        ((t = E),
        (n = m),
        l.useCallback(
            (e) => {
                let r = d.Z.getChannel(n);
                null != r && null != t && (0, u.Pv)(e, t, r);
            },
            [t, n]
        ));
    return l.useCallback(
        (e) => (t, n) => {
            let l = (n) =>
                    (0, r.jsx)(i.NameWithRoleAnchor, {
                        ...(null != n ? n : {}),
                        onContextMenu: _,
                        name: t,
                        color: null == e ? void 0 : e.colorString,
                        roleName: null == e ? void 0 : e.colorRoleName,
                        'aria-label': x
                    }),
                a = (e) => (t) => {
                    f && t.stopPropagation(), e(t);
                };
            return (0, r.jsx)(
                s.Gt,
                {
                    value: T,
                    children:
                        null != E
                            ? (0, r.jsx)(i.Popout, {
                                  position: 'right',
                                  preload: () =>
                                      (0, o.Z)(E.id, E.getAvatarURL(h, 80), {
                                          guildId: h,
                                          channelId: m
                                      }),
                                  renderPopout: (t) =>
                                      (0, r.jsx)(c.Z, {
                                          ...t,
                                          userId: E.id,
                                          guildId: h,
                                          channelId: m,
                                          messageId: p,
                                          roleId: null == e ? void 0 : e.colorRoleId
                                      }),
                                  children: (e) => {
                                      let { onClick: t, ...n } = e;
                                      return l({
                                          onClick: a(t),
                                          ...n
                                      });
                                  }
                              })
                            : l(void 0)
                },
                n
            );
        },
        [T, E, m, h, p, _, f, x]
    );
}
