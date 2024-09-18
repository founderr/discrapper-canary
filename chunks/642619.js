n.d(t, {
    H: function () {
        return s;
    }
});
var r = n(735250);
n(470079);
var a = n(481060);
let s = (e) => {
    let { analyticsLocations: t, initialSelectedEffectId: s, guild: o } = e;
    (0, a.openModalLazy)(async () => {
        let { default: e } = await n.e('55183').then(n.bind(n, 191564));
        return (n) =>
            (0, r.jsx)(e, {
                ...n,
                guild: o,
                initialSelectedEffectId: s,
                analyticsLocations: t
            });
    }, {});
};
