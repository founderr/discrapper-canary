n.d(t, {
    Qu: function () {
        return s;
    },
    W2: function () {
        return a;
    }
});
var r = n(327999);
let i = {};
function a(e) {
    return null == i[e] && (i[e] = {}), i[e];
}
function s(e, t) {
    if (0 === t.length) return !1;
    let n = a(e);
    return (
        t.forEach((e) => {
            var t, i, a, s, o, l, u, c;
            let d = n[e.userId],
                f = null !== (i = null !== (t = e.joinSourceType) && void 0 !== t ? t : null == d ? void 0 : d.joinSourceType) && void 0 !== i ? i : null;
            (null == f || f === r.gq.UNSPECIFIED) && null != e.sourceInviteCode && (f = r.gq.INVITE),
                (n[e.userId] = {
                    userId: e.userId,
                    sourceInviteCode: null !== (s = null !== (a = e.sourceInviteCode) && void 0 !== a ? a : null == d ? void 0 : d.sourceInviteCode) && void 0 !== s ? s : null,
                    joinSourceType: f,
                    inviterId: null !== (l = null !== (o = e.inviterId) && void 0 !== o ? o : null == d ? void 0 : d.inviterId) && void 0 !== l ? l : null,
                    integrationType: null !== (c = null !== (u = e.integrationType) && void 0 !== u ? u : null == d ? void 0 : d.integrationType) && void 0 !== c ? c : null
                });
        }),
        !0
    );
}
