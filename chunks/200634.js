n.d(t, {
    Z: function () {
        return f;
    }
}),
    n(47120);
var r = n(192379),
    i = n(392711),
    a = n(442837),
    s = n(881052),
    o = n(699682),
    l = n(81897),
    u = n(771845),
    c = n(621853),
    d = n(484459);
function f(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        [n, f] = (0, a.Wu)([c.Z], () => [c.Z.getMutualGuilds(e), c.Z.isFetchingProfile(e)]),
        _ = (0, l.Z)(),
        [h, p] = (0, r.useState)(null),
        m = t && null == h && !f && null == n;
    (0, r.useEffect)(() => {
        if (!!m)
            (async () => {
                try {
                    await (0, d.Z)(e, void 0, {
                        withMutualGuilds: !0,
                        abortSignal: _
                    });
                } catch (e) {
                    p(new s.Hx(e));
                }
            })();
    }, [m, e, _]);
    let g = (0, a.e7)([u.ZP], () => u.ZP.getFlattenedGuildIds()),
        E = (0, r.useMemo)(() => {
            if (null == n) return null;
            if (n.length < 2) return n;
            let e = Object.fromEntries(g.map((e, t) => [e, t]));
            return (0, i.sortBy)(n, (t) => {
                var n;
                let { guild: r } = t;
                return null !== (n = e[r.id]) && void 0 !== n ? n : g.length;
            });
        }, [n, g]),
        v = (0, o.Z)(E);
    return {
        mutualGuilds: null != E ? E : v,
        isFetching: f
    };
}
