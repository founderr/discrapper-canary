r.d(n, {
    Z: function () {
        return a;
    }
});
var i = r(186901);
function a(e, n) {
    if (null == n) return !0;
    if ('string' == typeof n) return e.includes(n);
    if ('object' != typeof n) return !1;
    let r = n[i.Gp.ANY],
        a = n[i.Gp.ALL];
    return !!((Array.isArray(r) && r.some((n) => e.includes(n))) || (Array.isArray(a) && a.every((n) => e.includes(n)))) || !1;
}
