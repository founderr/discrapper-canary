n.d(t, {
    m: function () {
        return o;
    }
}),
    n(653041);
var r = n(200651);
n(192379);
var i = n(481060),
    a = n(185625),
    s = n(186023);
async function o(e, t, n, o) {
    let l = !(arguments.length > 4) || void 0 === arguments[4] || arguments[4],
        u = !(arguments.length > 5) || void 0 === arguments[5] || arguments[5],
        c = arguments.length > 6 ? arguments[6] : void 0,
        d = (0, i.getInteractingModalContext)();
    try {
        let f,
            _ = u ? await (0, a.Nt)(e, t) : await (0, a.B0)(e, t),
            h = [];
        let p = (e) => {
                h.push(e);
            },
            m = (e) => {
                (f = e), null == n || n();
            };
        (0, i.openModal)(
            (t) =>
                (0, r.jsx)(s.Z, {
                    menu: _,
                    reportType: e,
                    modalProps: t,
                    onNavigate: p,
                    onSubmit: m,
                    isAuthenticated: u,
                    emailToken: c
                }),
            {
                onCloseCallback: () => {
                    (0, a.k8)(e, h, f), null == o || o(), l && (0, a.X)(e, null != f ? f : null);
                }
            },
            d
        );
    } catch {}
}
