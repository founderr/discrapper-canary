function i(e, n, r) {
    let i = 0,
        a = e.length;
    for (; i < a; ) {
        let s = (i + a) >>> 1;
        0 > r(e[s], n) ? (i = s + 1) : (a = s);
    }
    return i;
}
function a(e, n, r) {
    let a = i(e, n, r);
    e.splice(a, 0, n);
}
r.d(n, {
    $: function () {
        return a;
    }
});
