r.d(n, {
    Z: function () {
        return s;
    }
});
var i = r(580747),
    a = r(479801);
function s(e) {
    let n = null == e ? void 0 : e.paymentGateway,
        r = (0, i.Z)('shop_disable_cache'),
        s = (0, i.Z)('shop_include_unpublished');
    return (0, a.e)({
        noCache: r,
        includeUnpublished: s,
        paymentGateway: n,
        includeBundles: !0
    });
}
