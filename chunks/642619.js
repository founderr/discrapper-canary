n.d(e, {
    H: function () {
        return i;
    }
});
var r = n(200651);
n(192379);
var a = n(481060);
let i = (t) => {
    let { analyticsLocations: e, initialSelectedEffectId: i, guild: o } = t;
    (0, a.openModalLazy)(async () => {
        let { default: t } = await n.e('55183').then(n.bind(n, 191564));
        return (n) =>
            (0, r.jsx)(t, {
                ...n,
                guild: o,
                initialSelectedEffectId: i,
                analyticsLocations: e
            });
    }, {});
};
