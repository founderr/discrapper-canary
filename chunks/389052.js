n.d(t, {
    Z: function () {
        return m;
    }
}),
    n(627341);
var r = n(200651),
    i = n(192379),
    a = n(278074),
    s = n(442837),
    o = n(481060),
    l = n(194359),
    u = n(760030),
    c = n(922611),
    d = n(478923),
    f = n(699516),
    _ = n(594174),
    p = n(51144),
    h = n(388032);
function m(e) {
    let { user: t, color: n, guildId: m, channelId: g, onBlock: E, onIgnore: v, onUnblock: I, location: b = 'ContextMenu' } = e,
        { id: T } = t,
        S = (0, s.e7)(
            [_.default],
            () => {
                var e;
                return (null === (e = _.default.getCurrentUser()) || void 0 === e ? void 0 : e.id) === T;
            },
            [T]
        ),
        y = (0, s.e7)([f.Z], () => f.Z.isBlocked(T), [T]),
        A = (0, c.Do)({ location: 'use-block-user-item-web' }),
        N = (0, a.EQ)({
            isStealthRemediationEnabled: A,
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
            .otherwise(() => n),
        C = i.useMemo(() => p.ZP.getUserTag(t), [t]);
    return S
        ? null
        : (0, r.jsx)(o.MenuItem, {
              id: 'block',
              color: null != N ? N : 'default',
              label: y ? h.intl.string(h.t.XyHpKC) : h.intl.string(h.t.l4EmaW),
              action: y
                  ? () => {
                        null == I || I(), l.Z.unblockUser(T, { location: b }), u.Z.showUnblockSuccessToast(C);
                    }
                  : () => {
                        (0, o.openModal)((e) =>
                            (0, r.jsx)(d.Z, {
                                ...e,
                                user: t,
                                guildId: m,
                                channelId: g,
                                onBlock: E,
                                onIgnore: v,
                                location: b
                            })
                        );
                    }
          });
}
