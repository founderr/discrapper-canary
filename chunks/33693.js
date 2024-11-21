n.d(t, {
    d: function () {
        return s;
    }
});
var r = n(842763),
    i = n(334066),
    a = n(90620);
function s(...e) {
    let t = { ...e[0] };
    for (let n = 1; n < e.length; n++) {
        let s = e[n];
        for (let e in s) {
            let n = t[e],
                o = s[e];
            'function' == typeof n && 'function' == typeof o && 'o' === e[0] && 'n' === e[1] && e.charCodeAt(2) >= 65 && 90 >= e.charCodeAt(2) ? (t[e] = (0, r.t)(n, o)) : ('className' === e || 'UNSAFE_className' === e) && 'string' == typeof n && 'string' == typeof o ? (t[e] = (0, a.Z)(n, o)) : 'id' === e && n && o ? (t.id = (0, i.ur)(n, o)) : (t[e] = void 0 !== o ? o : n);
        }
    }
    return t;
}
