n.d(t, {
    T: function () {
        return l;
    },
    v: function () {
        return s;
    }
});
var r = n(200651);
n(192379);
var a = n(481060);
let i = 'collectibles shop product details modal',
    l = (e) => {
        let { product: t, category: l, analyticsSource: s, analyticsLocations: o, returnRef: c } = e;
        (0, a.openModalLazy)(
            async () => {
                let { default: e } = await n.e('2026').then(n.bind(n, 702370));
                return (n) =>
                    (0, r.jsx)(e, {
                        ...n,
                        product: t,
                        category: l,
                        analyticsSource: s,
                        analyticsLocations: o,
                        returnRef: c
                    });
            },
            { modalKey: i }
        );
    },
    s = () => {
        (0, a.closeModal)(i);
    };
