n.d(t, {
    T: function () {
        return i;
    },
    v: function () {
        return l;
    }
});
var r = n(200651);
n(192379);
var s = n(481060);
let a = 'collectibles shop product details modal',
    i = (e) => {
        let { product: t, category: i, analyticsSource: l, analyticsLocations: o, returnRef: c } = e;
        (0, s.openModalLazy)(
            async () => {
                let { default: e } = await n.e('2026').then(n.bind(n, 702370));
                return (n) =>
                    (0, r.jsx)(e, {
                        ...n,
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
        (0, s.closeModal)(a);
    };
