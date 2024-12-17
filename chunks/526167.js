r.d(n, {
    G6: function () {
        return T;
    },
    hY: function () {
        return g;
    },
    og: function () {
        return I;
    },
    rO: function () {
        return b;
    },
    vu: function () {
        return _;
    }
});
var i,
    a,
    s,
    o,
    l,
    u = r(525654),
    c = r.n(u);
let d = (null !== (i = c().name) && void 0 !== i ? i : 'unknown').toLowerCase(),
    f = 'chrome' === d.toLowerCase() ? parseInt(null !== (a = c().version) && void 0 !== a ? a : '', 10) : -1;
function _() {
    return f;
}
let h = 'electron' === d.toLowerCase() ? parseInt(null !== (s = c().version) && void 0 !== s ? s : '', 10) : -1;
function p() {
    return h;
}
let m = 'firefox' === d.toLowerCase() ? parseInt(null !== (o = c().version) && void 0 !== o ? o : '', 10) : -1;
function g() {
    return m;
}
let E = 'edge' === d.toLowerCase() ? parseInt(null !== (l = c().version) && void 0 !== l ? l : '', 10) : -1;
function v() {
    return E;
}
function I() {
    return -1 !== _() || -1 !== p() || -1 !== g() || -1 !== v();
}
function T() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : navigator.userAgent,
        n = e.toLowerCase();
    return -1 !== n.indexOf('safari') && !(-1 !== n.indexOf('chrome')) && -1 !== n.indexOf('version/');
}
function b() {
    var e;
    let n = window.navigator,
        r = (null === (e = n.mediaCapabilities) || void 0 === e ? void 0 : e.decodingInfo) != null;
    return T(n.userAgent) && r;
}
