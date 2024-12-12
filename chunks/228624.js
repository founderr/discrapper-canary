r.d(n, {
    ed: function () {
        return c;
    },
    hv: function () {
        return l;
    },
    k: function () {
        return o;
    },
    oj: function () {
        return u;
    }
});
var i = r(311570),
    a = r(818083),
    s = r(987338);
let o = (0, a.B)({
        kind: 'user',
        id: '2024-10_shop_variants',
        label: 'Shop Variants Experiment',
        defaultConfig: { variantsReturnStyle: i.v.INDIVIDUAL_PRODUCTS },
        treatments: [
            {
                id: 1,
                label: 'Return Variants as Group',
                config: { variantsReturnStyle: i.v.VARIANTS_GROUP }
            }
        ],
        commonTriggerPoint: s.$P.COLLECTIBLES_SHOP_OPEN
    }),
    l = (e) => o.useExperiment({ location: e }).variantsReturnStyle,
    u = (e) => o.getCurrentConfig({ location: e }, { autoTrackExposure: !1 }).variantsReturnStyle,
    c = (e) => l(e) === i.v.VARIANTS_GROUP;
