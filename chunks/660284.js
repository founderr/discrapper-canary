function i(e) {
    let n = typeof e;
    if ('object' == n) {
        if (Array.isArray(e)) return 'array';
        if (null === e) return 'null';
    }
    return n;
}
function a(e) {
    return null !== e && 'object' == typeof e && !Array.isArray(e);
}
r.d(n, {
    Z: function () {
        return i;
    },
    b: function () {
        return a;
    }
});
