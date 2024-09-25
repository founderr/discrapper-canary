n.d(t, {
    m: function () {
        return l;
    }
});
var r = n(653041);
var i = n(735250);
n(470079);
var a = n(481060),
    o = n(185625),
    s = n(186023);
async function l(e, t, n, r) {
    let l = !(arguments.length > 4) || void 0 === arguments[4] || arguments[4],
        u = !(arguments.length > 5) || void 0 === arguments[5] || arguments[5],
        c = arguments.length > 6 ? arguments[6] : void 0,
        d = (0, a.getInteractingModalContext)();
    try {
        let _,
            E = u ? await (0, o.Nt)(e, t) : await (0, o.B0)(e, t),
            f = [];
        let h = (e) => {
                f.push(e);
            },
            p = (e) => {
                (_ = e), null == n || n();
            };
        (0, a.openModal)(
            (t) =>
                (0, i.jsx)(s.Z, {
                    menu: E,
                    reportType: e,
                    modalProps: t,
                    onNavigate: h,
                    onSubmit: p,
                    isAuthenticated: u,
                    emailToken: c
                }),
            {
                onCloseCallback: () => {
                    (0, o.k8)(e, f, _), null == r || r(), l && (0, o.X)(e, null != _ ? _ : null);
                }
            },
            d
        );
    } catch {}
}
