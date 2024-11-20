n.d(t, {
    l: function () {
        return f;
    }
});
var r = n(200651),
    i = n(192379),
    o = n(481060),
    a = n(100527),
    l = n(906732),
    s = n(184301),
    c = n(347475),
    d = n(592125),
    u = n(91047);
function f(e) {
    var t, n;
    let { user: f, channelId: p, guildId: v, messageId: h, stopPropagation: b = !1, ariaLabel: m } = e,
        { analyticsLocations: _ } = (0, l.ZP)(a.Z.USERNAME);
    let g =
        ((t = f),
        (n = p),
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
                    (0, r.jsx)(o.NameWithRoleAnchor, {
                        ...(null != n ? n : {}),
                        onContextMenu: g,
                        name: t,
                        color: null == e ? void 0 : e.colorString,
                        roleName: null == e ? void 0 : e.colorRoleName,
                        'aria-label': m
                    }),
                a = (e) => (t) => {
                    b && t.stopPropagation(), e(t);
                };
            return (0, r.jsx)(
                l.Gt,
                {
                    value: _,
                    children:
                        null != f
                            ? (0, r.jsx)(o.Popout, {
                                  position: 'right',
                                  preload: () =>
                                      (0, s.Z)(f.id, f.getAvatarURL(v, 80), {
                                          guildId: v,
                                          channelId: p
                                      }),
                                  renderPopout: (t) =>
                                      (0, r.jsx)(c.Z, {
                                          ...t,
                                          userId: f.id,
                                          guildId: v,
                                          channelId: p,
                                          messageId: h,
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
        [_, f, p, v, h, g, b, m]
    );
}
