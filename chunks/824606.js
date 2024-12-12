r.d(n, {
    Z: function () {
        return c;
    }
});
var i = r(653041);
var a = r(47120);
var s = r(192379),
    o = r(442837),
    l = r(430824),
    u = r(973001);
function c(e) {
    let { application: n, showMutualGuilds: r = !0 } = e,
        i = (0, o.e7)([u.Z], () => u.Z.getGuildIdsForApplication(null == n ? void 0 : n.id), [n]),
        a = (0, o.e7)([l.Z], () => l.Z.isLoaded());
    return s.useMemo(() => {
        let e = [];
        if (!a || !r || null == i || null == n) return e;
        for (let n of i) {
            let r = l.Z.getGuild(n);
            null != r && e.push(r);
        }
        return e;
    }, [a, i, n, r]);
}
