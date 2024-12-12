function i(e, n, r) {
    return 'string' == typeof e.content || void 0 === e.content ? e.content : n(e.content, r);
}
function a(e) {
    return 'home' === e || 'browse' === e || 'customize' === e || 'guide' === e || 'linked-roles' === e;
}
r.d(n, {
    S: function () {
        return i;
    },
    k: function () {
        return a;
    }
});
