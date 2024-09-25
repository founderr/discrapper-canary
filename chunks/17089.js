n.d(t, {
    LN: function () {
        return r;
    }
});
function r(e) {
    var t, n;
    null === (n = i()) || void 0 === n || null === (t = n.reportEvent) || void 0 === t || t.call(n, e);
}
function i() {
    return 'undefined' != typeof window ? window.__DISCORD_DEVTOOLS : null;
}
