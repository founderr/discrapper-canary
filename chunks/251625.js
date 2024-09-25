n.d(t, {
    EF: function () {
        return o;
    },
    Ti: function () {
        return u;
    },
    ad: function () {
        return l;
    },
    oH: function () {
        return s;
    }
});
var r = n(653041);
var i = n(177593);
var a = n(47120);
function o(e, t) {
    if (e === t) return !0;
    if (null == e || null == t || e.length !== t.length) return !1;
    let n = e.length;
    for (let r = 0; r < n; r++) if (e[r] !== t[r]) return !1;
    return !0;
}
function s(e) {
    let t = null,
        n = null;
    return function () {
        for (var r = arguments.length, i = Array(r), a = 0; a < r; a++) i[a] = arguments[a];
        return !o(t, i) && (n = e(...i)), (t = i), n;
    };
}
function l(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 5000,
        n = -1,
        r = null;
    return () => ((null == r || Date.now() >= n) && ((n = Date.now() + t), (r = e())), r);
}
function u(e) {
    for (var t in e) e.hasOwnProperty(t) && delete e[t];
}
