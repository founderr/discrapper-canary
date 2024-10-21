s.d(t, {
    T: function () {
        return i;
    },
    v: function () {
        return l;
    }
});
var a = s(200651);
s(192379);
var r = s(481060);
let n = 'collectibles shop product details modal',
    i = (e) => {
        let { product: t, category: i, analyticsSource: l, analyticsLocations: o, returnRef: c } = e;
        (0, r.openModalLazy)(
            async () => {
                let { default: e } = await s.e('2026').then(s.bind(s, 702370));
                return (s) =>
                    (0, a.jsx)(e, {
                        ...s,
                        product: t,
                        category: i,
                        analyticsSource: l,
                        analyticsLocations: o,
                        returnRef: c
                    });
            },
            { modalKey: n }
        );
    },
    l = () => {
        (0, r.closeModal)(n);
    };
