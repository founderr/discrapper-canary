e.d(n, {
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
var i = e(192379),
    a = e(442837),
    l = e(709054),
    o = e(103879),
    s = e(364226),
    c = e(48484),
    r = e(531441),
    u = e(236289),
    _ = e(788080),
    d = e(800530);
function f() {
    return (0, a.Wu)([u.Z], () => u.Z.getClassifications()).sort((t, n) => l.default.extractTimestamp(n.id) - l.default.extractTimestamp(t.id));
}
function E(t) {
    let n;
    let e = (0, a.e7)([u.Z], () => u.Z.getClassification(t)),
        l = (0, a.e7)([u.Z], () => u.Z.getClassificationRequestState(t)),
        f = (0, a.e7)([u.Z], () => u.Z.getIsDsaEligible()),
        E = (0, a.e7)([u.Z], () => u.Z.getIsAppealEligible()),
        p = (0, s.A)('classification_detail'),
        S = (0, c.V)('classification_detail');
    if ((0, _.FB)(e)) {
        var A;
        n = (null === (A = e.guild_metadata) || void 0 === A ? void 0 : A.member_type) === r.wO.OWNER ? d.qS.GUILD_OWNER : d.qS.GUILD_MEMBER;
    } else n = d.qS.USER;
    return (
        i.useEffect(() => {
            void 0 === e && null == l && o.NA(t);
        }, [t, e, l]),
        {
            classification: e,
            classificationRequestState: l,
            isDsaEligible: f,
            isAppealEligible: (S || E) && null != e && null == e.appeal_status && (!(0, _.FB)(e) || p),
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
