t.d(n, {
    Z: function () {
        return o;
    },
    z: function () {
        return a;
    }
}),
    t(653041);
var a,
    i,
    l = t(442837),
    r = t(314897);
(i = a || (a = {}))[(i.END_EARLY = 0)] = 'END_EARLY';
let s = [];
function o(e) {
    let n = (0, l.e7)([r.default], () => r.default.getId()),
        { poll: t } = e;
    if (!e.isPoll() || null == t) return s;
    let a = [];
    return !t.expiry.isSameOrBefore(Date.now()) && e.author.id === n && a.push(0), a;
}
