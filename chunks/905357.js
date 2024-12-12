r.d(n, {
    T: function () {
        return l;
    },
    k: function () {
        return o;
    }
});
var i = r(311570),
    a = r(228624),
    s = r(388032);
let o = (e) => {
        let n = (0, a.hv)('useProductName') === i.v.VARIANTS_GROUP;
        if (null == e) return '';
        let r = s.intl.string(s.t.z7y5vL);
        return n && 'baseVariantName' in e && null != e.baseVariantName && e.variantLabel !== r
            ? s.intl.formatToPlainString(s.t.BZN5k5, {
                  baseVariantName: e.baseVariantName,
                  variantLabel: e.variantLabel
              })
            : e.name;
    },
    l = (e) => {
        let n = (0, a.hv)('useProductName') === i.v.VARIANTS_GROUP;
        if (null == e) return '';
        if (n) {
            if ('baseVariantName' in e && null != e.baseVariantName) return e.baseVariantName;
            if (null != e.variants && e.variants.length > 0) return e.variants[0].baseVariantName;
        }
        return e.name;
    };
