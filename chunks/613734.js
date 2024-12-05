n.d(e, {
    KM: function () {
        return d;
    },
    U0: function () {
        return U;
    },
    YG: function () {
        return S;
    },
    y9: function () {
        return T;
    }
});
var i = n(192379),
    l = n(442837),
    E = n(709054),
    _ = n(103879),
    a = n(364226),
    r = n(48484),
    u = n(531441),
    o = n(236289),
    A = n(788080),
    s = n(800530);
function c() {
    return (0, l.Wu)([o.Z], () => o.Z.getClassifications()).sort((t, e) => E.default.extractTimestamp(e.id) - E.default.extractTimestamp(t.id));
}
function S(t) {
    let e;
    let n = (0, l.e7)([o.Z], () => o.Z.getClassification(t)),
        E = (0, l.e7)([o.Z], () => o.Z.getClassificationRequestState(t)),
        c = (0, l.e7)([o.Z], () => o.Z.getIsDsaEligible()),
        S = (0, l.e7)([o.Z], () => o.Z.getIsAppealEligible()),
        T = (0, a.A)('classification_detail'),
        d = (0, r.V)('classification_detail');
    if ((0, A.FB)(n)) {
        var U;
        e = (null === (U = n.guild_metadata) || void 0 === U ? void 0 : U.member_type) === u.wO.OWNER ? s.qS.GUILD_OWNER : s.qS.GUILD_MEMBER;
    } else e = s.qS.USER;
    return (
        i.useEffect(() => {
            void 0 === n && null == E && _.NA(t);
        }, [t, n, E]),
        {
            classification: n,
            classificationRequestState: E,
            isDsaEligible: c,
            isAppealEligible: (d || S) && null != n && null == n.appeal_status && (!(0, A.FB)(n) || T),
            violationType: e
        }
    );
}
function T() {
    let t = c(),
        e = new Date();
    return t.filter((t) => new Date(t.max_expiration_time) > e);
}
function d() {
    let t = c(),
        e = new Date();
    return t.filter((t) => new Date(t.max_expiration_time) <= e);
}
function U() {
    return (0, l.e7)([o.Z], () => o.Z.getAppealSignal());
}
