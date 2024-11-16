t.d(n, {
    l: function () {
        return m;
    }
});
var l = t(200651),
    i = t(192379),
    r = t(481060),
    s = t(100527),
    a = t(906732),
    o = t(184301),
    d = t(347475),
    c = t(592125),
    u = t(91047);
function m(e) {
    var n, t;
    let { user: m, channelId: f, guildId: h, messageId: g, stopPropagation: x = !1, ariaLabel: v } = e,
        { analyticsLocations: j } = (0, a.ZP)(s.Z.USERNAME);
    let p =
        ((n = m),
        (t = f),
        i.useCallback(
            (e) => {
                let l = c.Z.getChannel(t);
                null != l && null != n && (0, u.Pv)(e, n, l);
            },
            [n, t]
        ));
    return i.useCallback(
        (e) => (n, t) => {
            let i = (t) =>
                    (0, l.jsx)(r.NameWithRoleAnchor, {
                        ...(null != t ? t : {}),
                        onContextMenu: p,
                        name: n,
                        color: null == e ? void 0 : e.colorString,
                        roleName: null == e ? void 0 : e.colorRoleName,
                        'aria-label': v
                    }),
                s = (e) => (n) => {
                    x && n.stopPropagation(), e(n);
                };
            return (0, l.jsx)(
                a.Gt,
                {
                    value: j,
                    children:
                        null != m
                            ? (0, l.jsx)(r.Popout, {
                                  position: 'right',
                                  preload: () =>
                                      (0, o.Z)(m.id, m.getAvatarURL(h, 80), {
                                          guildId: h,
                                          channelId: f
                                      }),
                                  renderPopout: (n) =>
                                      (0, l.jsx)(d.Z, {
                                          ...n,
                                          userId: m.id,
                                          guildId: h,
                                          channelId: f,
                                          messageId: g,
                                          roleId: null == e ? void 0 : e.colorRoleId
                                      }),
                                  children: (e) => {
                                      let { onClick: n, ...t } = e;
                                      return i({
                                          onClick: s(n),
                                          ...t
                                      });
                                  }
                              })
                            : i(void 0)
                },
                t
            );
        },
        [j, m, f, h, g, p, x, v]
    );
}
