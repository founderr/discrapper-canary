n.d(t, {
    Z: function () {
        return E;
    }
});
var r = n(47120);
var i = n(470079),
    a = n(392711);
var o = n(442837),
    s = n(881052),
    l = n(699682),
    u = n(81897),
    c = n(771845),
    d = n(621853),
    _ = n(484459);
function E(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        [n, r] = (0, o.Wu)([d.Z], () => [d.Z.getMutualGuilds(e), d.Z.isFetchingProfile(e)]),
        E = (0, u.Z)(),
        [f, h] = (0, i.useState)(null),
        p = t && null == f && !r && null == n;
    (0, i.useEffect)(() => {
        if (!!p)
            (async () => {
                try {
                    await (0, _.Z)(e, void 0, {
                        withMutualGuilds: !0,
                        abortSignal: E
                    });
                } catch (e) {
                    h(new s.Hx(e));
                }
            })();
    }, [p, e, E]);
    let m = (0, o.e7)([c.ZP], () => c.ZP.getFlattenedGuildIds()),
        I = (0, i.useMemo)(() => {
            if (null == n) return null;
            if (n.length < 2) return n;
            let e = Object.fromEntries(m.map((e, t) => [e, t]));
            return (0, a.sortBy)(n, (t) => {
                var n;
                let { guild: r } = t;
                return null !== (n = e[r.id]) && void 0 !== n ? n : m.length;
            });
        }, [n, m]),
        T = (0, l.Z)(I);
    return {
        mutualGuilds: null != I ? I : T,
        isFetching: r
    };
}
