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
    u = n(592125),
    d = n(91047);
function f(e) {
    var t, n;
    let { user: f, channelId: p, guildId: h, messageId: v, stopPropagation: _ = !1, ariaLabel: m } = e,
        { analyticsLocations: b } = (0, l.ZP)(a.Z.USERNAME);
    let g =
        ((t = f),
        (n = p),
        i.useCallback(
            (e) => {
                let r = u.Z.getChannel(n);
                null != r && null != t && (0, d.Pv)(e, t, r);
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
                    _ && t.stopPropagation(), e(t);
                };
            return (0, r.jsx)(
                l.Gt,
                {
                    value: b,
                    children:
                        null != f
                            ? (0, r.jsx)(o.Popout, {
                                  position: 'right',
                                  preload: () =>
                                      (0, s.Z)(f.id, f.getAvatarURL(h, 80), {
                                          guildId: h,
                                          channelId: p
                                      }),
                                  renderPopout: (t) =>
                                      (0, r.jsx)(c.Z, {
                                          ...t,
                                          userId: f.id,
                                          guildId: h,
                                          channelId: p,
                                          messageId: v,
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
        [b, f, p, h, v, g, _, m]
    );
}
