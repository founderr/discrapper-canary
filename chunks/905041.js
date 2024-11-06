n.d(e, {
    Z: function () {
        return v;
    }
});
var r = n(200651);
n(192379);
var l = n(481060),
    i = n(378409),
    a = n(976853),
    u = n(902676),
    o = n(626135),
    d = n(49012),
    s = n(358085),
    c = n(998502),
    h = n(36998),
    f = n(981631),
    p = n(388032);
function v(t, e, n, v) {
    let m = (0, a.Z)(null == n ? void 0 : n.getChannelId());
    if (!s.isPlatformEmbedded || null == t || '' === t || m || (null == v ? void 0 : v.shouldHideMediaOptions) === !0 || !(0, i.Jj)(t)) return null;
    let g = (0, u.F)(t),
        P = (n) => {
            o.default.track(f.rMx.CONTEXT_MENU_LINK_OPENED, {
                hostname: g,
                ...(0, h.v)()
            }),
                (0, d.q)(
                    {
                        href: t,
                        trusted: (0, d.r)(t, e),
                        shouldConfirm: !0
                    },
                    n
                );
        };
    return [
        (0, r.jsx)(
            l.MenuItem,
            {
                id: 'copy-native-link',
                label: p.intl.string(p.t.WqhZsr),
                action: () => {
                    o.default.track(f.rMx.CONTEXT_MENU_LINK_COPIED, {
                        hostname: g,
                        ...(0, h.v)()
                    }),
                        c.ZP.copy(t);
                }
            },
            'copy-native-link'
        ),
        (0, r.jsx)(
            l.MenuItem,
            {
                id: 'open-native-link',
                label: p.intl.string(p.t.wuRE8P),
                action: (t) => P(t)
            },
            'open-native-link'
        )
    ];
}
