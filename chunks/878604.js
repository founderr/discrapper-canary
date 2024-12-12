function i(e, n, r) {
    let i = e[n];
    return null == i ? (r ? ''.concat(e.any, ' (any)') : '100') : i.toString();
}
function a(e, n) {
    let r = e[n];
    return null == r ? e.any : r;
}
r.d(n, {
    F: function () {
        return a;
    },
    f: function () {
        return i;
    }
});
