r.d(n, {
    m: function () {
        return u;
    }
});
var i = r(653041);
var a = r(200651);
r(192379);
var s = r(481060),
    o = r(185625),
    l = r(186023);
async function u(e, n, r, i) {
    let u = !(arguments.length > 4) || void 0 === arguments[4] || arguments[4],
        c = !(arguments.length > 5) || void 0 === arguments[5] || arguments[5],
        d = arguments.length > 6 ? arguments[6] : void 0,
        f = (0, s.getInteractingModalContext)();
    try {
        let _,
            h = c ? await (0, o.Nt)(e, n) : await (0, o.B0)(e, n),
            p = [];
        let m = (e) => {
                p.push(e);
            },
            g = (e) => {
                (_ = e), null == r || r();
            };
        (0, s.openModal)(
            (n) =>
                (0, a.jsx)(l.Z, {
                    menu: h,
                    reportType: e,
                    modalProps: n,
                    onNavigate: m,
                    onSubmit: g,
                    isAuthenticated: c,
                    emailToken: d
                }),
            {
                onCloseCallback: () => {
                    (0, o.k8)(e, p, _), null == i || i(), u && (0, o.X)(e, null != _ ? _ : null);
                }
            },
            f
        );
    } catch {}
}
