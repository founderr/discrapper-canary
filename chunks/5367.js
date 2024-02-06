"use strict";
i.r(t), i.d(t, {
  useCurrentUserGuildBadgeStatus: function() {
    return u
  }
});
var n = i("446674"),
  s = i("26989"),
  l = i("697218"),
  r = i("591023"),
  a = i("520141"),
  o = i("982527");

function u(e) {
  let t = (0, a.useIsMemberVerificationManualApproval)(null != e ? e : ""),
    i = (0, n.useStateFromStores)([o.default, l.default, s.default], () => {
      let t = o.default.getRequest(e),
        i = l.default.getCurrentUser();
      if (null == i || null == t || t.userId !== i.id) return;
      let n = s.default.getMember(e, t.userId),
        a = null != n && !n.isPending;
      if (!a || (0, r.isActionedAndNotAcked)(t)) return t.applicationStatus
    }, [e]);
  return t ? i : void 0
}