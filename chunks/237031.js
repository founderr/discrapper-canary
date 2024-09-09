r.d(t, {
    T: function () {
        return i;
    },
    v: function () {
        return o;
    }
});
var a = r(735250);
r(470079);
var n = r(481060);
let s = 'collectibles shop product details modal',
    i = (e) => {
        let { product: t, category: i, analyticsSource: o, analyticsLocations: l, returnRef: c } = e;
        (0, n.openModalLazy)(
            async () => {
                let { default: e } = await r.e('2026').then(r.bind(r, 702370));
                return (r) =>
                    (0, a.jsx)(e, {
                        ...r,
                        product: t,
                        category: i,
                        analyticsSource: o,
                        analyticsLocations: l,
                        returnRef: c
                    });
            },
            { modalKey: s }
        );
    },
    o = () => {
        (0, n.closeModal)(s);
    };
