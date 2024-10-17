n.d(t, {
    B: function () {
        return E;
    }
});
var s = n(470079),
    a = n(442837),
    r = n(594174),
    i = n(74538),
    l = n(140465),
    o = n(775412),
    c = n(276444),
    _ = n(520540),
    d = n(474936);
let E = function (e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = (0, a.e7)([r.default], () => r.default.getCurrentUser()),
        E = (0, l.t7)(),
        u = (0, o._O)(),
        { eligibleToFetch: T } = _.g.useExperiment({ location: e }, { autoTrackExposure: !1 }),
        I = T && null != n && n.verified && (0, i.M5)(n, d.p9.TIER_2) && !E && !u;
    s.useEffect(() => {
        I && !t && c.Z.checkAndFetchReferralsRemaining();
    }, [I, t]);
};
