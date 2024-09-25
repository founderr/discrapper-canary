r.d(t, {
    H: function () {
        return s;
    }
});
var n = r(735250);
r(470079);
var a = r(481060);
let s = (e) => {
    let { analyticsLocations: t, initialSelectedEffectId: s, guild: o } = e;
    (0, a.openModalLazy)(async () => {
        let { default: e } = await r.e('55183').then(r.bind(r, 191564));
        return (r) =>
            (0, n.jsx)(e, {
                ...r,
                guild: o,
                initialSelectedEffectId: s,
                analyticsLocations: t
            });
    }, {});
};
