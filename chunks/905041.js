l.d(t, {
    Z: function () {
        return _;
    }
});
var e = l(200651);
l(192379);
var i = l(481060),
    u = l(829883),
    r = l(976853),
    a = l(378233),
    o = l(902676),
    d = l(626135),
    c = l(49012),
    s = l(358085),
    v = l(998502),
    f = l(36998),
    h = l(981631),
    p = l(388032);
function _(n, t, l, _) {
    let Z = (0, r.Z)(null == l ? void 0 : l.getChannelId());
    if (!s.isPlatformEmbedded || null == n || '' === n || Z || (null == _ ? void 0 : _.shouldHideMediaOptions) === !0 || (null != n && null != (0, a.B0)(n)) || (null != n && (0, u.zt)(n))) return null;
    let C = (0, o.F)(n),
        E = (l) => {
            d.default.track(h.rMx.CONTEXT_MENU_LINK_OPENED, {
                hostname: C,
                ...(0, f.v)()
            }),
                (0, c.q)(
                    {
                        href: n,
                        trusted: (0, c.r)(n, t),
                        shouldConfirm: !0
                    },
                    l
                );
        };
    return [
        (0, e.jsx)(
            i.MenuItem,
            {
                id: 'copy-native-link',
                label: p.intl.string(p.t.WqhZsr),
                action: () => {
                    d.default.track(h.rMx.CONTEXT_MENU_LINK_COPIED, {
                        hostname: C,
                        ...(0, f.v)()
                    }),
                        v.ZP.copy(n);
                }
            },
            'copy-native-link'
        ),
        (0, e.jsx)(
            i.MenuItem,
            {
                id: 'open-native-link',
                label: p.intl.string(p.t.wuRE8P),
                action: (n) => E(n)
            },
            'open-native-link'
        )
    ];
}
