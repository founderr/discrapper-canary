n.d(t, {
    j: function () {
        return u;
    }
});
var r = n(47120);
var i = n(411104);
var a = n(653041);
var o = n(570140);
let s = {},
    l = !1;
function u(e) {
    for (let t in e) {
        let n = e[t];
        c(t, n), d(n);
    }
    o.Z.addInterceptor(_);
}
function c(e, t) {
    var n;
    n = t.actions;
}
function d(e) {
    var t;
    let n = null !== (t = e.actions) && void 0 !== t ? t : [];
    for (let t of ((e.hasStoreChangeListeners || e.loadAfterConnectionOpen) && (!n.includes('POST_CONNECTION_OPEN') && (n = [...n, 'POST_CONNECTION_OPEN']), !n.includes('OVERLAY_INITIALIZE') && (n = [...n, 'OVERLAY_INITIALIZE'])), e.loadRightBeforeConnectionOpen && (!n.includes('CONNECTION_OPEN') && (n = [...n, 'CONNECTION_OPEN']), !n.includes('OVERLAY_INITIALIZE') && (n = [...n, 'OVERLAY_INITIALIZE'])), n)) !(t in s) && (s[t] = []), s[t].push(e);
}
function _(e) {
    if ((('CONNECTION_OPEN' === e.type || 'OVERLAY_INITIALIZE' === e.type) && (l = !0), e.type in s)) {
        let t = [];
        for (let n of s[e.type]) !l && n.neverLoadBeforeConnectionOpen ? t.push(n) : n.inlineRequire().initialize();
        t.length > 0 ? (s[e.type] = t) : delete s[e.type];
    }
    return !1;
}
