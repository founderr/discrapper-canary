r.d(n, {
    Qu: function () {
        return o;
    },
    W2: function () {
        return s;
    }
});
var i = r(327999);
let a = {};
function s(e) {
    return null == a[e] && (a[e] = {}), a[e];
}
function o(e, n) {
    if (0 === n.length) return !1;
    let r = s(e);
    return (
        n.forEach((e) => {
            var n, a, s, o, l, u, c, d;
            let f = r[e.userId],
                _ = null !== (a = null !== (n = e.joinSourceType) && void 0 !== n ? n : null == f ? void 0 : f.joinSourceType) && void 0 !== a ? a : null;
            (null == _ || _ === i.gq.UNSPECIFIED) && null != e.sourceInviteCode && (_ = i.gq.INVITE),
                (r[e.userId] = {
                    userId: e.userId,
                    sourceInviteCode: null !== (o = null !== (s = e.sourceInviteCode) && void 0 !== s ? s : null == f ? void 0 : f.sourceInviteCode) && void 0 !== o ? o : null,
                    joinSourceType: _,
                    inviterId: null !== (u = null !== (l = e.inviterId) && void 0 !== l ? l : null == f ? void 0 : f.inviterId) && void 0 !== u ? u : null,
                    integrationType: null !== (d = null !== (c = e.integrationType) && void 0 !== c ? c : null == f ? void 0 : f.integrationType) && void 0 !== d ? d : null
                });
        }),
        !0
    );
}
