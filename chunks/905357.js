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
        let t = (0, i.hv)('useProductName') === r.v.VARIANTS_GROUP;
        if (null == e) return '';
        let n = a.intl.string(a.t.z7y5vL);
        return t && 'baseVariantName' in e && null != e.baseVariantName && e.variantLabel !== n
            ? a.intl.formatToPlainString(a.t.BZN5k5, {
                  baseVariantName: e.baseVariantName,
                  variantLabel: e.variantLabel
              })
            : e.name;
    },
    o = (e) => {
        let t = (0, i.hv)('useProductName') === r.v.VARIANTS_GROUP;
        if (null == e) return '';
        if (t) {
            if ('baseVariantName' in e && null != e.baseVariantName) return e.baseVariantName;
            if (null != e.variants && e.variants.length > 0) return e.variants[0].baseVariantName;
        }
        return e.name;
    };
