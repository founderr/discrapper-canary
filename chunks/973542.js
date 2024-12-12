function i(e) {
    var n;
    return (null == e ? void 0 : null === (n = e.tags) || void 0 === n ? void 0 : n.subscription_listing_id) != null;
}
function a(e) {
    var n;
    return (null == e ? void 0 : null === (n = e.tags) || void 0 === n ? void 0 : n.available_for_purchase) !== void 0;
}
r.d(n, {
    Z: function () {
        return i;
    },
    h: function () {
        return a;
    }
});
