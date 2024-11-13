l.d(t, {
    l: function () {
        return m;
    }
});
var n = l(200651),
    i = l(192379),
    a = l(481060),
    o = l(100527),
    s = l(906732),
    r = l(184301),
    d = l(347475),
    u = l(592125),
    c = l(91047);
function m(e) {
    var t, l;
    let { user: m, channelId: f, guildId: g, messageId: h, stopPropagation: p = !1, ariaLabel: x } = e,
        { analyticsLocations: _ } = (0, s.ZP)(o.Z.USERNAME);
    let v =
        ((t = m),
        (l = f),
        i.useCallback(
            (e) => {
                let n = u.Z.getChannel(l);
                null != n && null != t && (0, c.Pv)(e, t, n);
            },
            [t, l]
        ));
    return i.useCallback(
        (e) => (t, l) => {
            let i = (l) =>
                    (0, n.jsx)(a.NameWithRoleAnchor, {
                        ...(null != l ? l : {}),
                        onContextMenu: v,
                        name: t,
                        color: null == e ? void 0 : e.colorString,
                        roleName: null == e ? void 0 : e.colorRoleName,
                        'aria-label': x
                    }),
                o = (e) => (t) => {
                    p && t.stopPropagation(), e(t);
                };
            return (0, n.jsx)(
                s.Gt,
                {
                    value: _,
                    children:
                        null != m
                            ? (0, n.jsx)(a.Popout, {
                                  position: 'right',
                                  preload: () =>
                                      (0, r.Z)(m.id, m.getAvatarURL(g, 80), {
                                          guildId: g,
                                          channelId: f
                                      }),
                                  renderPopout: (t) =>
                                      (0, n.jsx)(d.Z, {
                                          ...t,
                                          userId: m.id,
                                          guildId: g,
                                          channelId: f,
                                          messageId: h,
                                          roleId: null == e ? void 0 : e.colorRoleId
                                      }),
                                  children: (e) => {
                                      let { onClick: t, ...l } = e;
                                      return i({
                                          onClick: o(t),
                                          ...l
                                      });
                                  }
                              })
                            : i(void 0)
                },
                l
            );
        },
        [_, m, f, g, h, v, p, x]
    );
}
