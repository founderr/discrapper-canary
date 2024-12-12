r.d(n, {
    E: function () {
        return s;
    },
    Z: function () {
        return a;
    }
});
var i = r(653041);
function a(e, n, r, i) {
    if (e === n) return !0;
    if (void 0 === e || void 0 === n) return e === n;
    let a = Object.keys(e),
        s = Object.keys(n);
    if (a.length !== s.length) return null != i && i('shallowEqual: unequal key lengths '.concat(a.length, ' !=== ').concat(s.length)), !1;
    let o = [];
    for (let s = 0; s < a.length; s++) {
        let l = a[s];
        if (e[l] !== n[l] && (null == r || !r.includes(l))) {
            if (null == i) return !1;
            o.push(l);
        }
    }
    return null != i && o.length > 0 && i('shallowEqual: unequal keys: '.concat(o.join(', '))), 0 === o.length;
}
function s(e, n) {
    return null != n && e.length === n.length && !e.some((e, r) => n[r] !== e);
}
