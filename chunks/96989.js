r.d(n, {
    e: function () {
        return s;
    }
});
var i = r(47120);
let a = '_errors';
function s(e) {
    return o(e, void 0);
}
function o(e, n) {
    let r = e[a];
    if (null != r && Array.isArray(r)) return r[0];
    for (let [r, i] of Object.entries(e)) {
        if (r !== a && null != i) {
            if ('object' == typeof i) return o(i, null != n ? n : r);
        }
    }
    return null;
}
