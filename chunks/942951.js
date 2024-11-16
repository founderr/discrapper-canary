n.d(t, {
    l: function () {
        return E;
    }
});
var r = n(200651),
    i = n(192379),
    l = n(481060),
    a = n(100527),
    s = n(906732),
    o = n(184301),
    c = n(347475),
    d = n(592125),
    u = n(91047);
function E(e) {
    var t, n;
    let { user: E, channelId: m, guildId: h, messageId: f, stopPropagation: p = !1, ariaLabel: _ } = e,
        { analyticsLocations: T } = (0, s.ZP)(a.Z.USERNAME);
    let g =
        ((t = E),
        (n = m),
        i.useCallback(
            (e) => {
                let r = d.Z.getChannel(n);
                null != r && null != t && (0, u.Pv)(e, t, r);
            },
            [t, n]
        ));
    return i.useCallback(
        (e) => (t, n) => {
            let i = (n) =>
                    (0, r.jsx)(l.NameWithRoleAnchor, {
                        ...(null != n ? n : {}),
                        onContextMenu: g,
                        name: t,
                        color: null == e ? void 0 : e.colorString,
                        roleName: null == e ? void 0 : e.colorRoleName,
                        'aria-label': _
                    }),
                a = (e) => (t) => {
                    p && t.stopPropagation(), e(t);
                };
            return (0, r.jsx)(
                s.Gt,
                {
                    value: T,
                    children:
                        null != E
                            ? (0, r.jsx)(l.Popout, {
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
                                          messageId: f,
                                          roleId: null == e ? void 0 : e.colorRoleId
                                      }),
                                  children: (e) => {
                                      let { onClick: t, ...n } = e;
                                      return i({
                                          onClick: a(t),
                                          ...n
                                      });
                                  }
                              })
                            : i(void 0)
                },
                n
            );
        },
        [T, E, m, h, f, g, p, _]
    );
}
