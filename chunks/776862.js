r.d(n, {
    Z: function () {
        return o;
    }
});
var i = r(358085),
    a = r(998502),
    s = r(522474);
function o(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        r = s.Z.getWindow(e);
    if (null != r && !r.closed) i.isPlatformEmbedded ? a.ZP.focus(e, n) : r.focus();
}
