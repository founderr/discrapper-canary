n.d(t, {
    Z: function () {
        return _;
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
    c = n(699516),
    d = n(594174),
    f = n(388032);
function _(e) {
    let { user: t, color: n, guildId: _, channelId: p, onBlock: h, onIgnore: m, onUnblock: g, location: E = 'ContextMenu' } = e,
        { id: v } = t,
        I = (0, a.e7)(
            [d.default],
            () => {
                var e;
                return (null === (e = d.default.getCurrentUser()) || void 0 === e ? void 0 : e.id) === v;
            },
            [v]
        ),
        b = (0, a.e7)([c.Z], () => c.Z.isBlocked(v), [v]),
        T = (0, l.Do)({ location: 'use-block-user-item-web' }),
        S = (0, i.EQ)({
            isStealthRemediationEnabled: T,
            isBlocked: b
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
              color: null != S ? S : 'default',
              label: b ? f.intl.string(f.t.XyHpKC) : f.intl.string(f.t.l4EmaW),
              action: b
                  ? () => {
                        null == g || g(), o.Z.unblockUser(v, { location: E });
                    }
                  : () => {
                        (0, s.openModal)((e) =>
                            (0, r.jsx)(u.Z, {
                                ...e,
                                user: t,
                                guildId: _,
                                channelId: p,
                                onBlock: h,
                                onIgnore: m,
                                location: E
                            })
                        );
                    }
          });
}
