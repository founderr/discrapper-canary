function r(l, o) {
    var n, r;
    if (null == l) return !1;
    let e = null == l ? void 0 : null === (n = l.ownerDocument) || void 0 === n ? void 0 : n.defaultView;
    if (null == e) return console.warn('Unable to determine render window for element', l), !1;
    let t = null !== (r = null == o ? void 0 : o.name) && void 0 !== r ? r : 'Element',
        i = e[t];
    return null == i ? (console.warn('Unable to find element constructor "'.concat(t, '" in'), e), !1) : l instanceof i;
}
function e(l) {
    let o = parseInt(l, 10);
    return isNaN(o) ? 0 : o;
}
n.d(o, {
    M: function () {
        return e;
    },
    k: function () {
        return r;
    }
});
