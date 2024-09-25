n.d(t, {
    D: function () {
        return d;
    },
    j: function () {
        return c;
    }
});
var r = n(47120);
var i = n(470079),
    a = n(399606),
    o = n(430824),
    s = n(709054),
    l = n(763296);
function u(e, t) {
    return s.default.keys(e).filter((e) => null == t.get(e));
}
function c() {
    let e = (0, a.e7)([o.Z], () => o.Z.getGuilds()),
        t = (0, a.e7)([l.Z], () => l.Z.getSounds());
    return (0, i.useMemo)(() => u(e, t), [e, t]);
}
function d() {
    let e = o.Z.getGuilds();
    return u(e, l.Z.getSounds());
}
