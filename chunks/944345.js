s.d(t, {
    B: function () {
        return p;
    },
    b: function () {
        return f;
    }
});
var n = s(192379),
    r = s(442837),
    i = s(594174),
    a = s(111361),
    o = s(140465),
    l = s(775412),
    c = s(276444),
    d = s(912244),
    u = s(474936);
let p = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            s = (0, r.e7)([i.default], () => i.default.getCurrentUser()),
            p = (0, o.t7)(),
            f = (0, l._O)(),
            { eligibleToFetch: x } = (0, d.N)(e),
            C = x && (null == s ? void 0 : s.verified) === !0 && (0, a.M5)(s, u.p9.TIER_2) && !p && !f;
        n.useEffect(() => {
            C && !t && c.Z.checkAndFetchReferralsRemaining();
        }, [C, t]);
    },
    f = (e) => {
        let { enabled: t, eligibleToFetch: s } = (0, d.N)(e);
        p(e, !s);
        let n = (0, r.e7)([c.Z], () => c.Z.getIsEligibleToSendReferrals());
        return t && n;
    };
