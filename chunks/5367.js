"use strict";
n.r(t), n.d(t, {
  useCurrentUserGuildBadgeStatus: function() {
    return u
  }
});
var l = n("446674"),
  i = n("26989"),
  a = n("697218"),
  s = n("591023"),
  r = n("520141"),
  o = n("982527");

function u(e) {
  let t = (0, r.useIsMemberVerificationManualApproval)(null != e ? e : ""),
    n = (0, l.useStateFromStores)([o.default, a.default, i.default], () => {
      let t = o.default.getRequest(e),
        n = a.default.getCurrentUser();
      if (null == n || null == t || t.userId !== n.id) return;
      let l = i.default.getMember(e, t.userId),
        r = null != l && !l.isPending;
      if (!r || (0, s.isActionedAndNotAcked)(t)) return t.applicationStatus
    }, [e]);
  return t ? n : void 0
}