t.d(n, {
    Z: function () {
        return o;
    },
    z: function () {
        return i;
    }
}),
    t(653041);
var i,
    a,
    s = t(442837),
    l = t(314897);
(a = i || (i = {}))[(a.END_EARLY = 0)] = 'END_EARLY';
let r = [];
function o(e) {
    let n = (0, s.e7)([l.default], () => l.default.getId()),
        { poll: t } = e;
    if (!e.isPoll() || null == t) return r;
    let i = [];
    return !t.expiry.isSameOrBefore(Date.now()) && e.author.id === n && i.push(0), i;
}
