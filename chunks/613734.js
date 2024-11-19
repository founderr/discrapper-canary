n.d(t, {
    KM: function () {
        return T;
    },
    U0: function () {
        return p;
    },
    YG: function () {
        return A;
    },
    y9: function () {
        return d;
    }
});
var i = n(192379),
    l = n(442837),
    a = n(709054),
    r = n(103879),
    u = n(364226),
    _ = n(48484),
    o = n(531441),
    E = n(236289),
    s = n(788080),
    c = n(800530);
function S() {
    return (0, l.Wu)([E.Z], () => E.Z.getClassifications()).sort((e, t) => a.default.extractTimestamp(t.id) - a.default.extractTimestamp(e.id));
}
function A(e) {
    let t;
    let n = (0, l.e7)([E.Z], () => E.Z.getClassification(e)),
        a = (0, l.e7)([E.Z], () => E.Z.getClassificationRequestState(e)),
        S = (0, l.e7)([E.Z], () => E.Z.getIsDsaEligible()),
        A = (0, l.e7)([E.Z], () => E.Z.getIsAppealEligible()),
        d = (0, u.A)('classification_detail'),
        T = (0, _.V)('classification_detail');
    if ((0, s.FB)(n)) {
        var p;
        t = (null === (p = n.guild_metadata) || void 0 === p ? void 0 : p.member_type) === o.wO.OWNER ? c.qS.GUILD_OWNER : c.qS.GUILD_MEMBER;
    } else t = c.qS.USER;
    return (
        i.useEffect(() => {
            void 0 === n && null == a && r.NA(e);
        }, [e, n, a]),
        {
            classification: n,
            classificationRequestState: a,
            isDsaEligible: S,
            isAppealEligible: (T || A) && null != n && null == n.appeal_status && (!(0, s.FB)(n) || d),
            violationType: t
        }
    );
}
function d() {
    let e = S(),
        t = new Date();
    return e.filter((e) => new Date(e.max_expiration_time) > t);
}
function T() {
    let e = S(),
        t = new Date();
    return e.filter((e) => new Date(e.max_expiration_time) <= t);
}
function p() {
    return (0, l.e7)([E.Z], () => E.Z.getAppealSignal());
}
