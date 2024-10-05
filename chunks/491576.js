n.d(t, {
    Z: function () {
        return l;
    }
}),
    n(653041),
    n(47120);
var i = n(470079),
    a = n(442837),
    s = n(430824),
    r = n(973001);
function l(e) {
    let { application: t, showMutualGuilds: n = !0 } = e,
        l = (0, a.e7)([r.Z], () => r.Z.getGuildIdsForApplication(null == t ? void 0 : t.id), [t]),
        o = (0, a.e7)([s.Z], () => s.Z.isLoaded());
    return i.useMemo(() => {
        let e = [];
        if (!o || !n || null == l || null == t) return e;
        for (let t of l) {
            let n = s.Z.getGuild(t);
            null != n && e.push(n);
        }
        return e;
    }, [o, l, t, n]);
}
