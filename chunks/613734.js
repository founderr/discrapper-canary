n.d(e, {
    KM: function () {
        return U;
    },
    U0: function () {
        return d;
    },
    YG: function () {
        return S;
    },
    y9: function () {
        return T;
    }
});
var i = n(192379),
    E = n(442837),
    l = n(709054),
    _ = n(103879),
    a = n(364226),
    r = n(48484),
    u = n(531441),
    A = n(236289),
    o = n(788080),
    s = n(800530);
function c() {
    return (0, E.Wu)([A.Z], () => A.Z.getClassifications()).sort((t, e) => l.default.extractTimestamp(e.id) - l.default.extractTimestamp(t.id));
}
function S(t) {
    let e;
    let n = (0, E.e7)([A.Z], () => A.Z.getClassification(t)),
        l = (0, E.e7)([A.Z], () => A.Z.getClassificationRequestState(t)),
        c = (0, E.e7)([A.Z], () => A.Z.getIsDsaEligible()),
        S = (0, E.e7)([A.Z], () => A.Z.getIsAppealEligible()),
        T = (0, a.A)('classification_detail'),
        U = (0, r.V)('classification_detail');
    if ((0, o.FB)(n)) {
        var d;
        e = (null === (d = n.guild_metadata) || void 0 === d ? void 0 : d.member_type) === u.wO.OWNER ? s.qS.GUILD_OWNER : s.qS.GUILD_MEMBER;
    } else e = s.qS.USER;
    return (
        i.useEffect(() => {
            void 0 === n && null == l && _.NA(t);
        }, [t, n, l]),
        {
            classification: n,
            classificationRequestState: l,
            isDsaEligible: c,
            isAppealEligible: (U || S) && null != n && null == n.appeal_status && (!(0, o.FB)(n) || T),
            violationType: e
        }
    );
}
function T() {
    let t = c(),
        e = new Date();
    return t.filter((t) => new Date(t.max_expiration_time) > e);
}
function U() {
    let t = c(),
        e = new Date();
    return t.filter((t) => new Date(t.max_expiration_time) <= e);
}
function d() {
    return (0, E.e7)([A.Z], () => A.Z.getAppealSignal());
}
