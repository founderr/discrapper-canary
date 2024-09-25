n.d(t, {
    Z: function () {
        return o;
    }
});
var r = n(335832),
    i = n(665336);
function a(e, t) {
    for (var n = 0; n < t.length; n++) {
        var a = t[n];
        (a.enumerable = a.enumerable || !1), (a.configurable = !0), 'value' in a && (a.writable = !0), r(e, (0, i.Z)(a.key), a);
    }
}
function o(e, t, n) {
    return t && a(e.prototype, t), n && a(e, n), r(e, 'prototype', { writable: !1 }), e;
}
