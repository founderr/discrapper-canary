n.d(t, {
    u: function () {
        return a;
    }
});
var r = n(63568),
    i = n(981631);
let a = (e) => {
    var t, n, a, s;
    return (0, r.K2)(e.id, 'invite') ? (null === (t = e.features) || void 0 === t ? void 0 : t.includes(i.oNc.MEMBER_VERIFICATION_GATE_ENABLED)) && (null === (n = e.features) || void 0 === n ? void 0 : n.includes(i.oNc.MEMBER_VERIFICATION_MANUAL_APPROVAL)) : (null === (a = e.features) || void 0 === a ? void 0 : a.includes(i.oNc.MEMBER_VERIFICATION_GATE_ENABLED)) && !(null === (s = e.features) || void 0 === s ? void 0 : s.includes(i.oNc.PREVIEW_ENABLED));
};
