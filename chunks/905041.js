l.d(e, {
    Z: function () {
        return M;
    }
});
var t = l(735250);
l(470079);
var u = l(481060),
    i = l(829883),
    r = l(976853),
    a = l(378233),
    d = l(902676),
    o = l(626135),
    c = l(49012),
    s = l(358085),
    v = l(998502),
    f = l(36998),
    _ = l(981631),
    p = l(689938);
function M(n, e, l, M) {
    let h = (0, r.Z)(null == l ? void 0 : l.getChannelId());
    if (!s.isPlatformEmbedded || null == n || '' === n || h || (null == M ? void 0 : M.shouldHideMediaOptions) === !0 || (null != n && null != (0, a.B0)(n)) || (null != n && (0, i.zt)(n))) return null;
    let E = (0, d.F)(n),
        C = (l) => {
            o.default.track(_.rMx.CONTEXT_MENU_LINK_OPENED, {
                hostname: E,
                ...(0, f.v)()
            }),
                (0, c.q)(
                    {
                        href: n,
                        trusted: (0, c.r)(n, e),
                        shouldConfirm: !0
                    },
                    l
                );
        };
    return [
        (0, t.jsx)(
            u.MenuItem,
            {
                id: 'copy-native-link',
                label: p.Z.Messages.COPY_LINK,
                action: () => {
                    o.default.track(_.rMx.CONTEXT_MENU_LINK_COPIED, {
                        hostname: E,
                        ...(0, f.v)()
                    }),
                        v.ZP.copy(n);
                }
            },
            'copy-native-link'
        ),
        (0, t.jsx)(
            u.MenuItem,
            {
                id: 'open-native-link',
                label: p.Z.Messages.OPEN_LINK,
                action: (n) => C(n)
            },
            'open-native-link'
        )
    ];
}
