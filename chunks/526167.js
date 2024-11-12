n.d(t, {
    hY: function () {
        return h;
    },
    og: function () {
        return g;
    },
    rO: function () {
        return E;
    },
    vu: function () {
        return f;
    }
});
var r,
    i,
    a,
    s,
    o,
    l = n(525654),
    u = n.n(l);
let c = (null !== (r = u().name) && void 0 !== r ? r : 'unknown').toLowerCase(),
    d = 'chrome' === c.toLowerCase() ? parseInt(null !== (i = u().version) && void 0 !== i ? i : '', 10) : -1;
function f() {
    return d;
}
let _ = 'electron' === c.toLowerCase() ? parseInt(null !== (a = u().version) && void 0 !== a ? a : '', 10) : -1,
    p = 'firefox' === c.toLowerCase() ? parseInt(null !== (s = u().version) && void 0 !== s ? s : '', 10) : -1;
function h() {
    return p;
}
let m = 'edge' === c.toLowerCase() ? parseInt(null !== (o = u().version) && void 0 !== o ? o : '', 10) : -1;
function g() {
    return -1 !== d || -1 !== _ || -1 !== p || -1 !== m;
}
function E() {
    var e;
    let t = window.navigator,
        n = t.userAgent.toLowerCase(),
        r = (null === (e = t.mediaCapabilities) || void 0 === e ? void 0 : e.decodingInfo) != null;
    return -1 !== n.indexOf('safari') && !(-1 !== n.indexOf('chrome')) && -1 !== n.indexOf('version/') && r;
}
