e.d(t, {
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
    u = e(531441),
    r = e(236289),
    _ = e(788080),
    d = e(800530);
function f() {
    return (0, a.Wu)([r.Z], () => r.Z.getClassifications()).sort((n, t) => l.default.extractTimestamp(t.id) - l.default.extractTimestamp(n.id));
}
function E(n) {
    let t;
    let e = (0, a.e7)([r.Z], () => r.Z.getClassification(n)),
        l = (0, a.e7)([r.Z], () => r.Z.getClassificationRequestState(n)),
        f = (0, a.e7)([r.Z], () => r.Z.getIsDsaEligible()),
        E = (0, a.e7)([r.Z], () => r.Z.getIsAppealEligible()),
        p = (0, s.A)('classification_detail'),
        S = (0, c.V)('classification_detail');
    if ((0, _.FB)(e)) {
        var A;
        t = (null === (A = e.guild_metadata) || void 0 === A ? void 0 : A.member_type) === u.wO.OWNER ? d.qS.GUILD_OWNER : d.qS.GUILD_MEMBER;
    } else t = d.qS.USER;
    return (
        i.useEffect(() => {
            void 0 === e && null == l && o.NA(n);
        }, [n, e, l]),
        {
            classification: e,
            classificationRequestState: l,
            isDsaEligible: f,
            isAppealEligible: (S || E) && null != e && null == e.appeal_status && (!(0, _.FB)(e) || p),
            violationType: t
        }
    );
}
function p() {
    let n = f(),
        t = new Date();
    return n.filter((n) => new Date(n.max_expiration_time) > t);
}
function S() {
    let n = f(),
        t = new Date();
    return n.filter((n) => new Date(n.max_expiration_time) <= t);
}
function A() {
    return (0, a.e7)([r.Z], () => r.Z.getAppealSignal());
}
