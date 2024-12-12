r.d(n, {
    Z: function () {
        return a;
    }
});
var i = r(757143);
function a(e, n) {
    var r;
    let i = null == n ? void 0 : null === (r = n.replace(/-/g, '_')) || void 0 === r ? void 0 : r.toUpperCase();
    if (null != i && i in e) return e[i];
}
