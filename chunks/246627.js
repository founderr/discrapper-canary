n.d(t, {
    Z: function () {
        return r;
    }
}),
    n(47120),
    n(653041);
var a = n(470079),
    l = n(442837),
    i = n(235587);
function r(e) {
    let { guildId: t, leaderboardId: n, intervalStart: r } = e,
        s = (0, l.e7)(
            [i.Z],
            () => {
                var e, a;
                return null !== (a = null === (e = i.Z.getPrevLeaderboardRanks(t, n, r)) || void 0 === e ? void 0 : e.ranks) && void 0 !== a ? a : [];
            },
            [t, r, n]
        ),
        o = (0, l.e7)(
            [i.Z],
            () => {
                var e, a;
                return null !== (a = null === (e = i.Z.getCurrentLeaderboardRanks(t, n, r)) || void 0 === e ? void 0 : e.ranks) && void 0 !== a ? a : [];
            },
            [t, r, n]
        );
    return {
        rankChanges: a.useMemo(() => {
            let e = new Map();
            s.forEach((t, n) => {
                e.set(t, n + 1);
            });
            let t = [];
            return (
                o.forEach((n, a) => {
                    let l = a + 1,
                        i = e.get(n);
                    i !== l &&
                        t.push({
                            userId: n,
                            currentRank: l,
                            previousRank: i
                        });
                }),
                t
            );
        }, [s, o])
    };
}
