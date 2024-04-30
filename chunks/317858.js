"use strict";
a.r(t), a.d(t, {
  default: function() {
    return I
  }
}), a("47120");
var n = a("470079"),
  s = a("166516"),
  l = a.n(s),
  i = a("525654"),
  r = a.n(i),
  o = a("442837"),
  u = a("888369"),
  d = a("292959"),
  c = a("699516"),
  f = a("340895"),
  E = a("358085"),
  h = a("998502"),
  _ = a("252618"),
  C = a("981631"),
  m = a("689938");
let S = new Set(["Blink", "Gecko", "WebKit"]),
  p = C.NOOP;
if (E.isPlatformEmbedded) p = e => h.default.setBadge(e);
else if (S.has(r().layout)) {
  let e = new(l())({
    animation: "none"
  });
  p = t => {
    try {
      (0, _.setPageTitleNotificationCount)(t), e.badge(-1 === t ? "•" : t)
    } catch (e) {}
  }
}

function I() {
  let e = (0, o.useStateFromStores)([f.default], () => f.default.hasIncomingCalls()),
    t = (0, o.useStateFromStores)([u.default, c.default, d.default], () => {
      let e = u.default.getTotalMentionCount(),
        t = c.default.getPendingCount(),
        a = u.default.hasAnyUnread(),
        n = d.default.getDisableUnreadBadge(),
        s = e + t;
      return 0 === s && a && !n && (s = -1), s
    });
  n.useEffect(() => {
    if (!e) return;
    let t = h.default.bounceDock("critical"),
      a = (0, _.flashPageTitle)({
        messages: [m.default.Messages.INCOMING_CALL],
        count: 50
      });
    return () => {
      null == t || t(), a()
    }
  }, [e]), n.useEffect(() => {
    p(t)
  }, [t]), n.useEffect(() => () => p(0), [])
}