s.d(t, {
    B: function () {
        return p;
    }
});
var n = s(192379),
    r = s(442837),
    i = s(594174),
    a = s(74538),
    o = s(140465),
    l = s(775412),
    c = s(276444),
    d = s(520540),
    u = s(474936);
let p = function (e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        s = (0, r.e7)([i.default], () => i.default.getCurrentUser()),
        p = (0, o.t7)(),
        f = (0, l._O)(),
        { eligibleToFetch: x } = d.g.useExperiment({ location: e }, { autoTrackExposure: !1 }),
        C = x && null != s && s.verified && (0, a.M5)(s, u.p9.TIER_2) && !p && !f;
    n.useEffect(() => {
        C && !t && c.Z.checkAndFetchReferralsRemaining();
    }, [C, t]);
};
