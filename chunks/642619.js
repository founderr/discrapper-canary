n.d(e, {
    H: function () {
        return a;
    }
});
var r = n(200651);
n(192379);
var i = n(481060);
let a = (t) => {
    let { analyticsLocations: e, initialSelectedEffectId: a, guild: s } = t;
    (0, i.openModalLazy)(async () => {
        let { default: t } = await n.e('55183').then(n.bind(n, 191564));
        return (n) =>
            (0, r.jsx)(t, {
                ...n,
                guild: s,
                initialSelectedEffectId: a,
                analyticsLocations: e
            });
    }, {});
};
