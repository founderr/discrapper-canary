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
    u = n(347475),
    c = n(592125),
    d = n(91047);
function f(e) {
    var t, n;
    let { user: f, channelId: _, guildId: p, messageId: m, stopPropagation: h = !1, ariaLabel: v } = e,
        { analyticsLocations: E } = (0, l.ZP)(a.Z.USERNAME);
    let b =
        ((t = f),
        (n = _),
        i.useCallback(
            (e) => {
                let r = c.Z.getChannel(n);
                null != r && null != t && (0, d.Pv)(e, t, r);
            },
            [t, n]
        ));
    return i.useCallback(
        (e) => (t, n) => {
            let i = (n) =>
                    (0, r.jsx)(o.NameWithRoleAnchor, {
                        ...(null != n ? n : {}),
                        onContextMenu: b,
                        name: t,
                        color: null == e ? void 0 : e.colorString,
                        roleName: null == e ? void 0 : e.colorRoleName,
                        'aria-label': v
                    }),
                a = (e) => (t) => {
                    h && t.stopPropagation(), e(t);
                };
            return (0, r.jsx)(
                l.Gt,
                {
                    value: E,
                    children:
                        null != f
                            ? (0, r.jsx)(o.Popout, {
                                  position: 'right',
                                  preload: () =>
                                      (0, s.Z)(f.id, f.getAvatarURL(p, 80), {
                                          guildId: p,
                                          channelId: _
                                      }),
                                  renderPopout: (t) =>
                                      (0, r.jsx)(u.Z, {
                                          ...t,
                                          userId: f.id,
                                          guildId: p,
                                          channelId: _,
                                          messageId: m,
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
        [E, f, _, p, m, b, h, v]
    );
}
