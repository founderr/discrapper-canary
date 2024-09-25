n.d(t, {
    b: function () {
        return d;
    },
    v: function () {
        return c;
    }
});
var r = n(47120);
var i = n(653041);
var a = n(392711),
    o = n.n(a),
    s = n(442837),
    l = n(592125),
    u = n(823379);
function c(e, t, n) {
    let r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        i = o()(l.Z.getMutableGuildChannelsForGuild(e)).values().groupBy('parent_id').value(),
        a = o()(n)
            .map((e) => (e.isCategory() ? e.id : e.parent_id))
            .filter(u.lm)
            .uniq()
            .map((e) => l.Z.getChannel(e))
            .filter(u.lm)
            .sortBy('position')
            .value(),
        s = new Set(a.map((e) => e.id)),
        c = n.filter((e) => !e.isCategory() && (null == e.parent_id || !s.has(e.parent_id)));
    for (let e of ((c = o().sortBy(c, (e) => (e.isGuildVocal() ? e.position + 10000 : e.position))), a)) {
        !r && c.push(e);
        let a = t.has(e.id) ? i[e.id] : n.filter((t) => t.parent_id === e.id);
        (a = o().sortBy(null != a ? a : [], (e) => (e.isGuildVocal() ? e.position + 10000 : e.position))), c.push(...a);
    }
    return c;
}
function d(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    return (0, s.Wu)([l.Z], () => {
        let r = Array.from(t)
            .map((e) => l.Z.getChannel(e))
            .filter(u.lm);
        return c(e, t, r, n);
    });
}
