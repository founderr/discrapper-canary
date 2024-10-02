n.d(t, {
    Z: function () {
        return l;
    }
});
var r = n(47120);
var i = n(653041);
var a = n(470079),
    o = n(442837),
    s = n(235587);
function l(e) {
    let { guildId: t, leaderboardId: n, intervalStart: r } = e,
        i = (0, o.e7)(
            [s.Z],
            () => {
                var e, i;
                return null !== (i = null === (e = s.Z.getPrevLeaderboardRanks(t, n, r)) || void 0 === e ? void 0 : e.ranks) && void 0 !== i ? i : [];
            },
            [t, r, n]
        ),
        l = (0, o.e7)(
            [s.Z],
            () => {
                var e, i;
                return null !== (i = null === (e = s.Z.getCurrentLeaderboardRanks(t, n, r)) || void 0 === e ? void 0 : e.ranks) && void 0 !== i ? i : [];
            },
            [t, r, n]
        );
    return {
        rankChanges: a.useMemo(() => {
            let e = new Map();
            i.forEach((t, n) => {
                e.set(t, n + 1);
            });
            let t = [];
            return (
                l.forEach((n, r) => {
                    let i = r + 1,
                        a = e.get(n);
                    a !== i &&
                        t.push({
                            userId: n,
                            currentRank: i,
                            previousRank: a
                        });
                }),
                t
            );
        }, [i, l])
    };
}
