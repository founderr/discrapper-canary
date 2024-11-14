n.d(t, {
    T: function () {
        return o;
    },
    k: function () {
        return s;
    }
});
var r = n(311570),
    i = n(228624),
    a = n(388032);
let s = (e) => {
        let t = (0, i.h)('useProductName') === r.v.VARIANTS_GROUP;
        return null == e
            ? ''
            : t && 'baseVariantName' in e
              ? a.intl.formatToPlainString(a.t.BZN5k5, {
                    baseVariantName: e.baseVariantName,
                    variantLabel: e.variantLabel
                })
              : e.name;
    },
    o = (e) => {
        let t = (0, i.h)('useProductName') === r.v.VARIANTS_GROUP;
        return null == e ? '' : t && 'baseVariantName' in e ? e.baseVariantName : e.name;
    };
