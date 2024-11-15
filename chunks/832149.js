var i = n(200651);
n(192379);
var l = n(481060);
t.Z = (e) => {
    let { product: t, analyticsLocations: s, title: r, description: C } = e;
    (0, l.openModalLazy)(async () => {
        let { default: e } = await Promise.all([n.e('87624'), n.e('81520')]).then(n.bind(n, 331042));
        return (n) =>
            (0, i.jsx)(e, {
                product: t,
                analyticsLocations: s,
                title: r,
                description: C,
                ...n
            });
    });
};
