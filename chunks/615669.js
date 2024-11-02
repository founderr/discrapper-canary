t.d(n, {
    Z: function () {
        return s;
    },
    z: function () {
        return i;
    }
}),
    t(653041);
var i,
    l,
    r = t(442837),
    a = t(314897);
(l = i || (i = {}))[(l.END_EARLY = 0)] = 'END_EARLY';
let o = [];
function s(e) {
    let n = (0, r.e7)([a.default], () => a.default.getId()),
        { poll: t } = e;
    if (!e.isPoll() || null == t) return o;
    let i = [];
    return !t.expiry.isSameOrBefore(Date.now()) && e.author.id === n && i.push(0), i;
}
