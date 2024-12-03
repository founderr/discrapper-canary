n.d(t, {
    KM: function () {
        return T;
    },
    U0: function () {
        return f;
    },
    YG: function () {
        return S;
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
    E = n(531441),
    o = n(236289),
    s = n(788080),
    c = n(800530);
function A() {
    return (0, l.Wu)([o.Z], () => o.Z.getClassifications()).sort((e, t) => a.default.extractTimestamp(t.id) - a.default.extractTimestamp(e.id));
}
function S(e) {
    let t;
    let n = (0, l.e7)([o.Z], () => o.Z.getClassification(e)),
        a = (0, l.e7)([o.Z], () => o.Z.getClassificationRequestState(e)),
        A = (0, l.e7)([o.Z], () => o.Z.getIsDsaEligible()),
        S = (0, l.e7)([o.Z], () => o.Z.getIsAppealEligible()),
        d = (0, u.A)('classification_detail'),
        T = (0, _.V)('classification_detail');
    if ((0, s.FB)(n)) {
        var f;
        t = (null === (f = n.guild_metadata) || void 0 === f ? void 0 : f.member_type) === E.wO.OWNER ? c.qS.GUILD_OWNER : c.qS.GUILD_MEMBER;
    } else t = c.qS.USER;
    return (
        i.useEffect(() => {
            void 0 === n && null == a && r.NA(e);
        }, [e, n, a]),
        {
            classification: n,
            classificationRequestState: a,
            isDsaEligible: A,
            isAppealEligible: (T || S) && null != n && null == n.appeal_status && (!(0, s.FB)(n) || d),
            violationType: t
        }
    );
}
function d() {
    let e = A(),
        t = new Date();
    return e.filter((e) => new Date(e.max_expiration_time) > t);
}
function T() {
    let e = A(),
        t = new Date();
    return e.filter((e) => new Date(e.max_expiration_time) <= t);
}
function f() {
    return (0, l.e7)([o.Z], () => o.Z.getAppealSignal());
}
