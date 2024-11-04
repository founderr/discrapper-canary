n.d(t, {
    Z: function () {
        return u;
    }
}),
    n(47120);
var i = n(200651),
    s = n(192379),
    r = n(593473),
    l = n(512969),
    o = n(489863),
    c = n(787025),
    a = n(397394),
    d = n(388032);
function u() {
    let e;
    let t = (0, l.TH)(),
        [n, u] = s.useState(!1),
        [h, p] = s.useState(!1);
    return (
        s.useEffect(() => {
            (async function e() {
                let e = (0, r.parse)(t.search);
                try {
                    var n;
                    await (0, o.g)(null !== (n = e.token) && void 0 !== n ? n : ''), u(!0);
                } catch {
                    p(!0);
                }
            })();
        }, [t.search]),
        (e = n
            ? (0, i.jsx)(a.c7, {
                  message: d.intl.string(d.t.Tqu3OT),
                  showsCloseWindowText: !0
              })
            : h
              ? (0, i.jsx)(a.Lk, {
                    message: d.intl.string(d.t.J8LsCg),
                    showsCloseWindowText: !0
                })
              : (0, i.jsx)(a.ZP, {
                    message: d.intl.string(d.t.BAcf6e),
                    spinner: !0
                })),
        (0, i.jsx)(c.G, { children: e })
    );
}
