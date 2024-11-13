l.d(t, {
    l: function () {
        return m;
    }
});
var n = l(200651),
    i = l(192379),
    a = l(481060),
    o = l(100527),
    r = l(906732),
    s = l(184301),
    d = l(347475),
    u = l(592125),
    c = l(91047);
function m(e) {
    var t, l;
    let { user: m, channelId: f, guildId: h, messageId: g, stopPropagation: p = !1, ariaLabel: x } = e,
        { analyticsLocations: _ } = (0, r.ZP)(o.Z.USERNAME);
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
                r.Gt,
                {
                    value: _,
                    children:
                        null != m
                            ? (0, n.jsx)(a.Popout, {
                                  position: 'right',
                                  preload: () =>
                                      (0, s.Z)(m.id, m.getAvatarURL(h, 80), {
                                          guildId: h,
                                          channelId: f
                                      }),
                                  renderPopout: (t) =>
                                      (0, n.jsx)(d.Z, {
                                          ...t,
                                          userId: m.id,
                                          guildId: h,
                                          channelId: f,
                                          messageId: g,
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
        [_, m, f, h, g, v, p, x]
    );
}
