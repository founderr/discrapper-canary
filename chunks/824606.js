n.d(t, {
    Z: function () {
        return o;
    }
}),
    n(653041),
    n(47120);
var i = n(192379),
    r = n(442837),
    l = n(430824),
    c = n(973001);
function o(e) {
    let { application: t, showMutualGuilds: n = !0 } = e,
        o = (0, r.e7)([c.Z], () => c.Z.getGuildIdsForApplication(null == t ? void 0 : t.id), [t]),
        s = (0, r.e7)([l.Z], () => l.Z.isLoaded());
    return i.useMemo(() => {
        let e = [];
        if (!s || !n || null == o || null == t) return e;
        for (let t of o) {
            let n = l.Z.getGuild(t);
            null != n && e.push(n);
        }
        return e;
    }, [s, o, t, n]);
}
