t.d(n, {
    B: function () {
        return s;
    }
}),
    t(47120);
var r = t(905837),
    a = t(731965),
    i = t(520623);
let o = new Map(),
    s = (0, r.Ue)((e, n) => ({
        topGames: new Map(),
        tryFetchTopGames: async (t) => {
            let r = n().topGames,
                s = o.get(t);
            if (null != s && Date.now() - s < 3600000) {
                var l;
                return null !== (l = r.get(t)) && void 0 !== l ? l : {};
            }
            let c = await (0, i.M)(t),
                d = new Map(r);
            return (
                d.set(t, c),
                (0, a.j)(() => {
                    e({ topGames: d });
                }),
                o.set(t, Date.now()),
                c
            );
        }
    }));
