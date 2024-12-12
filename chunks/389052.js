r.d(n, {
    Z: function () {
        return m;
    }
});
var i = r(627341);
var a = r(200651);
r(192379);
var s = r(278074),
    o = r(442837),
    l = r(481060),
    u = r(194359),
    c = r(922611),
    d = r(478923),
    f = r(681678),
    _ = r(699516),
    h = r(594174),
    p = r(388032);
function m(e) {
    let { user: n, color: r, guildId: i, channelId: m, onBlock: g, onIgnore: E, onUnblock: v, location: I = 'ContextMenu' } = e,
        { id: T } = n,
        b = (0, o.e7)(
            [h.default],
            () => {
                var e;
                return (null === (e = h.default.getCurrentUser()) || void 0 === e ? void 0 : e.id) === T;
            },
            [T]
        ),
        y = (0, o.e7)([_.Z], () => _.Z.isBlocked(T), [T]),
        S = (0, c.Do)({ location: 'use-block-user-item-web' }),
        A = (0, s.EQ)({
            isStealthRemediationEnabled: S,
            isBlocked: y
        })
            .with(
                {
                    isStealthRemediationEnabled: !0,
                    isBlocked: !0
                },
                () => 'default'
            )
            .with(
                {
                    isStealthRemediationEnabled: !0,
                    isBlocked: !1
                },
                () => 'danger'
            )
            .otherwise(() => r);
    return b
        ? null
        : (0, a.jsx)(l.MenuItem, {
              id: 'block',
              color: null != A ? A : 'default',
              label: y ? p.intl.string(p.t.XyHpKC) : p.intl.string(p.t.l4EmaW),
              action: y
                  ? () => {
                        null == v || v(), u.Z.unblockUser(T, { location: I }), f.Z.showUnblockSuccessToast(T, null != m ? m : void 0);
                    }
                  : () => {
                        (0, l.openModal)((e) =>
                            (0, a.jsx)(d.Z, {
                                ...e,
                                user: n,
                                guildId: i,
                                channelId: m,
                                onBlock: g,
                                onIgnore: E,
                                location: I
                            })
                        );
                    }
          });
}
