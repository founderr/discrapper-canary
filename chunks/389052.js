n.d(t, {
    Z: function () {
        return p;
    }
}),
    n(627341);
var r = n(200651);
n(192379);
var i = n(278074),
    a = n(442837),
    s = n(481060),
    o = n(194359),
    l = n(922611),
    u = n(478923),
    c = n(681678),
    d = n(699516),
    f = n(594174),
    _ = n(388032);
function p(e) {
    let { user: t, color: n, guildId: p, channelId: h, onBlock: m, onIgnore: g, onUnblock: E, location: v = 'ContextMenu' } = e,
        { id: b } = t,
        I = (0, a.e7)(
            [f.default],
            () => {
                var e;
                return (null === (e = f.default.getCurrentUser()) || void 0 === e ? void 0 : e.id) === b;
            },
            [b]
        ),
        T = (0, a.e7)([d.Z], () => d.Z.isBlocked(b), [b]),
        S = (0, l.Do)({ location: 'use-block-user-item-web' }),
        y = (0, i.EQ)({
            isStealthRemediationEnabled: S,
            isBlocked: T
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
            .otherwise(() => n);
    return I
        ? null
        : (0, r.jsx)(s.MenuItem, {
              id: 'block',
              color: null != y ? y : 'default',
              label: T ? _.intl.string(_.t.XyHpKC) : _.intl.string(_.t.l4EmaW),
              action: T
                  ? () => {
                        null == E || E(), o.Z.unblockUser(b, { location: v }), c.Z.showUnblockSuccessToast(b, null != h ? h : void 0);
                    }
                  : () => {
                        (0, s.openModal)((e) =>
                            (0, r.jsx)(u.Z, {
                                ...e,
                                user: t,
                                guildId: p,
                                channelId: h,
                                onBlock: m,
                                onIgnore: g,
                                location: v
                            })
                        );
                    }
          });
}
