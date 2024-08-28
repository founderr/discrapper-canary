n.d(t, {
    T: function () {
        return i;
    },
    v: function () {
        return o;
    }
});
var r = n(735250);
n(470079);
var s = n(481060);
let a = 'collectibles shop product details modal',
    i = (e) => {
        let { product: t, category: i, analyticsSource: o, analyticsLocations: l, returnRef: c } = e;
        (0, s.openModalLazy)(
            async () => {
                let { default: e } = await n.e('2026').then(n.bind(n, 702370));
                return (n) =>
                    (0, r.jsx)(e, {
                        ...n,
                        product: t,
                        category: i,
                        analyticsSource: o,
                        analyticsLocations: l,
                        returnRef: c
                    });
            },
            { modalKey: a }
        );
    },
    o = () => {
        (0, s.closeModal)(a);
    };
