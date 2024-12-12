r.d(n, {
    K: function () {
        return l;
    }
});
var i = r(200651),
    a = r(481060),
    s = r(982330),
    o = r(701865);
function l(e) {
    let { location: n, contextKey: l, onCloseCallback: u, ...c } = e,
        d = (0, s.Kc)(n);
    (0, a.openModalLazy)(
        async () => {
            let { default: e } = d ? await r.e('39476').then(r.bind(r, 97594)) : await r.e('87267').then(r.bind(r, 950120));
            return (n) =>
                (0, i.jsx)(e, {
                    ...n,
                    ...c
                });
        },
        {
            modalKey: o.U,
            contextKey: l,
            onCloseCallback: u,
            backdropStyle: a.BackdropStyles.IMMERSIVE
        }
    );
}
