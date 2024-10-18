t.d(e, {
    Z: function () {
        return c;
    }
}),
    t(653041),
    t(47120);
var r = t(470079),
    i = t(442837),
    o = t(430824),
    l = t(973001);
function c(n) {
    let { application: e, showMutualGuilds: t = !0 } = n,
        c = (0, i.e7)([l.Z], () => l.Z.getGuildIdsForApplication(null == e ? void 0 : e.id), [e]),
        u = (0, i.e7)([o.Z], () => o.Z.isLoaded());
    return r.useMemo(() => {
        let n = [];
        if (!u || !t || null == c || null == e) return n;
        for (let e of c) {
            let t = o.Z.getGuild(e);
            null != t && n.push(t);
        }
        return n;
    }, [u, c, e, t]);
}
