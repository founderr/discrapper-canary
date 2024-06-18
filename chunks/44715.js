"use strict";
n.d(t, {
  Qu: function() {
    return o
  },
  W2: function() {
    return s
  }
});
var i = n(327999);
let r = {};

function s(e) {
  return null == r[e] && (r[e] = {}), r[e]
}

function o(e, t) {
  if (0 === t.length) return !1;
  let n = s(e);
  return t.forEach(e => {
    var t, r, s, o, a, l, u, _;
    let c = n[e.userId],
      d = null !== (r = null !== (t = e.joinSourceType) && void 0 !== t ? t : null == c ? void 0 : c.joinSourceType) && void 0 !== r ? r : null;
    (null == d || d === i.gq.UNSPECIFIED) && null != e.sourceInviteCode && (d = i.gq.INVITE), n[e.userId] = {
      userId: e.userId,
      sourceInviteCode: null !== (o = null !== (s = e.sourceInviteCode) && void 0 !== s ? s : null == c ? void 0 : c.sourceInviteCode) && void 0 !== o ? o : null,
      joinSourceType: d,
      inviterId: null !== (l = null !== (a = e.inviterId) && void 0 !== a ? a : null == c ? void 0 : c.inviterId) && void 0 !== l ? l : null,
      integrationType: null !== (_ = null !== (u = e.integrationType) && void 0 !== u ? u : null == c ? void 0 : c.integrationType) && void 0 !== _ ? _ : null
    }
  }), !0
}