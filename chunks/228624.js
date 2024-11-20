n.d(t, {
    ed: function () {
        return u;
    },
    hv: function () {
        return o;
    },
    oj: function () {
        return l;
    }
});
var r = n(311570),
    i = n(818083),
    a = n(987338);
let s = (0, i.B)({
        kind: 'user',
        id: '2024-10_shop_variants',
        label: 'Shop Variants Experiment',
        defaultConfig: { variantsReturnStyle: r.v.INDIVIDUAL_PRODUCTS },
        treatments: [
            {
                id: 1,
                label: 'Return Variants as Group',
                config: { variantsReturnStyle: r.v.VARIANTS_GROUP }
            }
        ],
        commonTriggerPoint: a.$P.COLLECTIBLES_SHOP_OPEN
    }),
    o = (e) => s.useExperiment({ location: e }).variantsReturnStyle,
    l = (e) => s.getCurrentConfig({ location: e }).variantsReturnStyle,
    u = (e) => o(e) === r.v.VARIANTS_GROUP;
