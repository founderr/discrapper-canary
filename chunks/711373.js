t.d(n, {
    Z: function () {
        return o;
    }
}),
    t(724458),
    t(47120),
    t(653041);
var l = t(470079),
    i = t(442837),
    r = t(924301),
    a = t(765305);
function o(e, n) {
    let t = (0, i.Wu)([r.ZP], () => Object.values(r.ZP.getUsersForGuildEvent(e, null)), [e]),
        o = (0, i.Wu)([r.ZP], () => Object.values(r.ZP.getUsersForGuildEvent(e, n)), [e, n]);
    return (0, l.useMemo)(() => {
        let e = o.reduce((e, n) => ((e[n.user_id] = n), e), {}),
            n = t.filter((n) => {
                let t = e[n.user_id];
                return null == t || t.response === a.gv.INTERESTED;
            }),
            l = o.filter((e) => e.response === a.gv.INTERESTED),
            i = new Set(),
            r = [],
            c = (e) => {
                !i.has(e.user_id) && (r.push(e), i.add(e.user_id));
            };
        return n.forEach(c), l.forEach(c), r;
    }, [t, o]);
}
