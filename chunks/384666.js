n.d(t, {
    Z: function () {
        return u;
    }
}),
    n(47120);
var s = n(200651),
    i = n(192379),
    r = n(593473),
    o = n(512969),
    l = n(489863),
    a = n(787025),
    c = n(397394),
    d = n(689938);
function u() {
    let e;
    let t = (0, o.TH)(),
        [n, u] = i.useState(!1),
        [h, p] = i.useState(!1);
    return (
        i.useEffect(() => {
            (async function e() {
                let e = (0, r.parse)(t.search);
                try {
                    var n;
                    await (0, l.g)(null !== (n = e.token) && void 0 !== n ? n : ''), u(!0);
                } catch {
                    p(!0);
                }
            })();
        }, [t.search]),
        (e = n
            ? (0, s.jsx)(c.c7, {
                  message: d.Z.Messages.WHITELISTED,
                  showsCloseWindowText: !0
              })
            : h
              ? (0, s.jsx)(c.Lk, {
                    message: d.Z.Messages.WHITELIST_FAILED,
                    showsCloseWindowText: !0
                })
              : (0, s.jsx)(c.ZP, {
                    message: d.Z.Messages.WHITELISTING,
                    spinner: !0
                })),
        (0, s.jsx)(a.G, { children: e })
    );
}
