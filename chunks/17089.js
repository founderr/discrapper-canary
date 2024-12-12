r.d(n, {
    LN: function () {
        return i;
    }
});
function i(e) {
    var n, r;
    null === (r = a()) || void 0 === r || null === (n = r.reportEvent) || void 0 === n || n.call(r, e);
}
function a() {
    return 'undefined' != typeof window ? window.__DISCORD_DEVTOOLS : null;
}
