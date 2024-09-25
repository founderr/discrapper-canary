n.d(t, {
    l: function () {
        return E;
    }
});
var r = n(735250),
    i = n(470079),
    a = n(481060),
    o = n(100527),
    s = n(906732),
    l = n(184301),
    u = n(347475),
    c = n(592125),
    d = n(91047);
function _(e, t) {
    return i.useCallback(
        (n) => {
            let r = c.Z.getChannel(t);
            null != r && null != e && (0, d.Pv)(n, e, r);
        },
        [e, t]
    );
}
function E(e) {
    let { user: t, channelId: n, guildId: c, messageId: d, stopPropagation: E = !1, ariaLabel: f } = e,
        { analyticsLocations: h } = (0, s.ZP)(o.Z.USERNAME),
        p = _(t, n);
    return i.useCallback(
        (e) => (o, _) => {
            let m = (t, n) =>
                    (0, i.createElement)(a.NameWithRoleAnchor, {
                        ...(null != t ? t : {}),
                        key: n,
                        onContextMenu: p,
                        name: o,
                        color: null == e ? void 0 : e.colorString,
                        roleName: null == e ? void 0 : e.colorRoleName,
                        'aria-label': f
                    }),
                I = (e) => (t) => {
                    E && t.stopPropagation(), e(t);
                };
            return (0, r.jsx)(s.Gt, {
                value: h,
                children:
                    null != t
                        ? (0, r.jsx)(
                              a.Popout,
                              {
                                  position: 'right',
                                  preload: () =>
                                      (0, l.Z)(t.id, t.getAvatarURL(c, 80), {
                                          guildId: c,
                                          channelId: n
                                      }),
                                  renderPopout: (i) =>
                                      (0, r.jsx)(u.Z, {
                                          ...i,
                                          userId: t.id,
                                          guildId: c,
                                          channelId: n,
                                          messageId: d,
                                          roleId: null == e ? void 0 : e.colorRoleId
                                      }),
                                  children: (e) => {
                                      let { onClick: t, ...n } = e;
                                      return m({
                                          onClick: I(t),
                                          ...n
                                      });
                                  }
                              },
                              _
                          )
                        : m(void 0, _)
            });
        },
        [h, t, n, c, d, p, E, f]
    );
}
