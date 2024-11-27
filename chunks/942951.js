t.d(n, {
    l: function () {
        return f;
    }
});
var r = t(200651),
    i = t(192379),
    l = t(481060),
    u = t(100527),
    o = t(906732),
    a = t(184301),
    s = t(347475),
    c = t(592125),
    d = t(91047);
function f(e) {
    var n, t;
    let { user: f, channelId: m, guildId: v, messageId: p, stopPropagation: h = !1, ariaLabel: g } = e,
        { analyticsLocations: b } = (0, o.ZP)(u.Z.USERNAME);
    let x =
        ((n = f),
        (t = m),
        i.useCallback(
            (e) => {
                let r = c.Z.getChannel(t);
                null != r && null != n && (0, d.Pv)(e, n, r);
            },
            [n, t]
        ));
    return i.useCallback(
        (e) => (n, t) => {
            let i = (t) =>
                    (0, r.jsx)(l.NameWithRoleAnchor, {
                        ...(null != t ? t : {}),
                        onContextMenu: x,
                        name: n,
                        color: null == e ? void 0 : e.colorString,
                        roleName: null == e ? void 0 : e.colorRoleName,
                        'aria-label': g
                    }),
                u = (e) => (n) => {
                    h && n.stopPropagation(), e(n);
                };
            return (0, r.jsx)(
                o.Gt,
                {
                    value: b,
                    children:
                        null != f
                            ? (0, r.jsx)(l.Popout, {
                                  position: 'right',
                                  preload: () =>
                                      (0, a.Z)(f.id, f.getAvatarURL(v, 80), {
                                          guildId: v,
                                          channelId: m
                                      }),
                                  renderPopout: (n) =>
                                      (0, r.jsx)(s.Z, {
                                          ...n,
                                          userId: f.id,
                                          guildId: v,
                                          channelId: m,
                                          messageId: p,
                                          roleId: null == e ? void 0 : e.colorRoleId
                                      }),
                                  children: (e) => {
                                      let { onClick: n, ...t } = e;
                                      return i({
                                          onClick: u(n),
                                          ...t
                                      });
                                  }
                              })
                            : i(void 0)
                },
                t
            );
        },
        [b, f, m, v, p, x, h, g]
    );
}
