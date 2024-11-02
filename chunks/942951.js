n.d(t, {
    l: function () {
        return h;
    }
});
var i = n(200651),
    o = n(192379),
    a = n(481060),
    s = n(100527),
    l = n(906732),
    r = n(184301),
    c = n(347475),
    d = n(592125),
    u = n(91047);
function h(e) {
    var t, n;
    let { user: h, channelId: m, guildId: p, messageId: f, stopPropagation: g = !1, ariaLabel: v } = e,
        { analyticsLocations: b } = (0, l.ZP)(s.Z.USERNAME);
    let T =
        ((t = h),
        (n = m),
        o.useCallback(
            (e) => {
                let i = d.Z.getChannel(n);
                null != i && null != t && (0, u.Pv)(e, t, i);
            },
            [t, n]
        ));
    return o.useCallback(
        (e) => (t, n) => {
            let o = (n) =>
                    (0, i.jsx)(a.NameWithRoleAnchor, {
                        ...(null != n ? n : {}),
                        onContextMenu: T,
                        name: t,
                        color: null == e ? void 0 : e.colorString,
                        roleName: null == e ? void 0 : e.colorRoleName,
                        'aria-label': v
                    }),
                s = (e) => (t) => {
                    g && t.stopPropagation(), e(t);
                };
            return (0, i.jsx)(
                l.Gt,
                {
                    value: b,
                    children:
                        null != h
                            ? (0, i.jsx)(a.Popout, {
                                  position: 'right',
                                  preload: () =>
                                      (0, r.Z)(h.id, h.getAvatarURL(p, 80), {
                                          guildId: p,
                                          channelId: m
                                      }),
                                  renderPopout: (t) =>
                                      (0, i.jsx)(c.Z, {
                                          ...t,
                                          userId: h.id,
                                          guildId: p,
                                          channelId: m,
                                          messageId: f,
                                          roleId: null == e ? void 0 : e.colorRoleId
                                      }),
                                  children: (e) => {
                                      let { onClick: t, ...n } = e;
                                      return o({
                                          onClick: s(t),
                                          ...n
                                      });
                                  }
                              })
                            : o(void 0)
                },
                n
            );
        },
        [b, h, m, p, f, T, g, v]
    );
}
