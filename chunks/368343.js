t.d(n, {
    B: function () {
        return o;
    }
}),
    t(47120);
var r = t(903797),
    a = t(731965),
    i = t(520623);
let s = new Map(),
    o = (0, r.Z)((e, n) => ({
        topGames: new Map(),
        tryFetchTopGames: async (t) => {
            let r = n().topGames,
                o = s.get(t);
            if (null != o && Date.now() - o < 3600000) {
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
                s.set(t, Date.now()),
                c
            );
        }
    }));
