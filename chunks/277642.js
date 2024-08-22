n.d(t, {
    r: function () {
        return c;
    },
    t: function () {
        return o;
    }
});
var i = n(442837),
    a = n(314897),
    s = n(19780),
    l = n(959457);
function r(e, t) {
    return 0 === e.size || (1 === e.size && e.has(t));
}
function o(e) {
    return (0, i.e7)([l.Z, a.default], () => {
        if (null == e) return !0;
        let t = l.Z.getUserIds(e);
        return null == t || r(t, a.default.getId());
    });
}
function c() {
    return (0, i.e7)([s.Z, a.default], () => {
        let e = s.Z.getUserIds();
        return null == e || r(e, a.default.getId());
    });
}
