s.d(t, {
    G: function () {
        return c;
    },
    Q: function () {
        return l;
    }
});
var n = s(192379),
    r = s(442837),
    i = s(232567),
    a = s(594174),
    o = s(276444);
let l = 3;
function c() {
    let e = (0, r.Wu)([o.Z], () => o.Z.getSentUserIds()),
        t = (0, r.Wu)([a.default], () => e.map((e) => a.default.getUser(e)).filter((e) => null != e));
    n.useEffect(() => {
        e.forEach((e) => {
            (0, i.PR)(e);
        });
    }, [e]);
    let s = e.length === l;
    return {
        referralSentUsers: t,
        hasSentAllReferrals: s,
        refreshAt: (0, r.e7)([o.Z], () => o.Z.getRefreshAt())
    };
}
