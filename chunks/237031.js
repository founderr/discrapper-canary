r.d(t, {
    T: function () {
        return i;
    },
    v: function () {
        return l;
    }
});
var s = r(200651);
r(192379);
var n = r(481060);
let a = 'collectibles shop product details modal',
    i = (e) => {
        let { product: t, category: i, analyticsSource: l, analyticsLocations: o, returnRef: c } = e;
        (0, n.openModalLazy)(
            async () => {
                let { default: e } = await r.e('2026').then(r.bind(r, 702370));
                return (r) =>
                    (0, s.jsx)(e, {
                        ...r,
                        product: t,
                        category: i,
                        analyticsSource: l,
                        analyticsLocations: o,
                        returnRef: c
                    });
            },
            { modalKey: a }
        );
    },
    l = () => {
        (0, n.closeModal)(a);
    };
