i.d(n, {
    KM: function () {
        return S;
    },
    U0: function () {
        return A;
    },
    YG: function () {
        return E;
    },
    y9: function () {
        return p;
    }
});
var e = i(192379),
    a = i(442837),
    l = i(709054),
    o = i(103879),
    s = i(364226),
    c = i(48484),
    r = i(531441),
    u = i(236289),
    _ = i(788080),
    d = i(800530);
function f() {
    return (0, a.Wu)([u.Z], () => u.Z.getClassifications()).sort((t, n) => l.default.extractTimestamp(n.id) - l.default.extractTimestamp(t.id));
}
function E(t) {
    let n;
    let i = (0, a.e7)([u.Z], () => u.Z.getClassification(t)),
        l = (0, a.e7)([u.Z], () => u.Z.getClassificationRequestState(t)),
        f = (0, a.e7)([u.Z], () => u.Z.getIsDsaEligible()),
        E = (0, a.e7)([u.Z], () => u.Z.getIsAppealEligible()),
        p = (0, s.A)('classification_detail'),
        S = (0, c.V)('classification_detail');
    if ((0, _.FB)(i)) {
        var A;
        n = (null === (A = i.guild_metadata) || void 0 === A ? void 0 : A.member_type) === r.wO.OWNER ? d.qS.GUILD_OWNER : d.qS.GUILD_MEMBER;
    } else n = d.qS.USER;
    return (
        e.useEffect(() => {
            void 0 === i && null == l && o.NA(t);
        }, [t, i, l]),
        {
            classification: i,
            classificationRequestState: l,
            isDsaEligible: f,
            isAppealEligible: (S || E) && null != i && null == i.appeal_status && (!(0, _.FB)(i) || p),
            violationType: n
        }
    );
}
function p() {
    let t = f(),
        n = new Date();
    return t.filter((t) => new Date(t.max_expiration_time) > n);
}
function S() {
    let t = f(),
        n = new Date();
    return t.filter((t) => new Date(t.max_expiration_time) <= n);
}
function A() {
    return (0, a.e7)([u.Z], () => u.Z.getAppealSignal());
}
