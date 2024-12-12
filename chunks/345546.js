function i() {
    var e, n;
    return 'undefined' == typeof platform ? 0 : parseInt(null !== (n = null === (e = platform) || void 0 === e ? void 0 : e.version) && void 0 !== n ? n : '0', 10);
}
r.d(n, {
    n: function () {
        return i;
    }
});
