s.d(t, {
    b: function () {
        return o;
    }
});
var n = s(442837),
    r = s(276444),
    i = s(912244),
    a = s(232076);
let o = (e) => {
    let { enabled: t, eligibleToFetch: s } = (0, i.N)(e);
    (0, a.B)(e, !s);
    let o = (0, n.e7)([r.Z], () => r.Z.getIsEligibleToSendReferrals());
    return t && o;
};
