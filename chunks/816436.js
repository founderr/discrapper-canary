r.d(n, {
    b: function () {
        return f;
    },
    v: function () {
        return d;
    }
});
var i = r(47120);
var a = r(653041);
var s = r(392711),
    o = r.n(s),
    l = r(442837),
    u = r(592125),
    c = r(823379);
function d(e, n, r) {
    let i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        a = o()(u.Z.getMutableGuildChannelsForGuild(e)).values().groupBy('parent_id').value(),
        s = o()(r)
            .map((e) => (e.isCategory() ? e.id : e.parent_id))
            .filter(c.lm)
            .uniq()
            .map((e) => u.Z.getChannel(e))
            .filter(c.lm)
            .sortBy('position')
            .value(),
        l = new Set(s.map((e) => e.id)),
        d = r.filter((e) => !e.isCategory() && (null == e.parent_id || !l.has(e.parent_id)));
    for (let e of ((d = o().sortBy(d, (e) => (e.isGuildVocal() ? e.position + 10000 : e.position))), s)) {
        !i && d.push(e);
        let s = n.has(e.id) ? a[e.id] : r.filter((n) => n.parent_id === e.id);
        (s = o().sortBy(null != s ? s : [], (e) => (e.isGuildVocal() ? e.position + 10000 : e.position))), d.push(...s);
    }
    return d;
}
function f(e, n) {
    let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    return (0, l.Wu)([u.Z], () => {
        let i = Array.from(n)
            .map((e) => u.Z.getChannel(e))
            .filter(c.lm);
        return d(e, n, i, r);
    });
}
