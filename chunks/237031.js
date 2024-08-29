n.d(t, {
    T: function () {
        return o;
    },
    v: function () {
        return i;
    }
});
var a = n(735250);
n(470079);
var r = n(481060);
let s = 'collectibles shop product details modal',
    o = (e) => {
        let { product: t, category: o, analyticsSource: i, analyticsLocations: l, returnRef: c } = e;
        (0, r.openModalLazy)(
            async () => {
                let { default: e } = await n.e('2026').then(n.bind(n, 702370));
                return (n) =>
                    (0, a.jsx)(e, {
                        ...n,
                        product: t,
                        category: o,
                        analyticsSource: i,
                        analyticsLocations: l,
                        returnRef: c
                    });
            },
            { modalKey: s }
        );
    },
    i = () => {
        (0, r.closeModal)(s);
    };
