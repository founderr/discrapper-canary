n.d(t, {
    e: function () {
        return a;
    }
});
var r = n(47120);
let i = '_errors';
function a(e) {
    return o(e, void 0);
}
function o(e, t) {
    let n = e[i];
    if (null != n && Array.isArray(n)) return n[0];
    for (let [n, r] of Object.entries(e)) {
        if (n !== i && null != r) {
            if ('object' == typeof r) return o(r, null != t ? t : n);
        }
    }
    return null;
}
