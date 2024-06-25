n.d(t, {
  Z: function() {
    return N
  }
}), n(47120);
var s = n(470079),
  i = n(166516),
  l = n.n(i),
  a = n(525654),
  r = n.n(a),
  o = n(442837),
  c = n(888369),
  u = n(292959),
  d = n(699516),
  E = n(340895),
  h = n(358085),
  _ = n(998502),
  I = n(252618),
  m = n(981631),
  T = n(689938);
let g = new Set(["Blink", "Gecko", "WebKit"]),
  p = m.dG4;
if (h.isPlatformEmbedded) p = e => _.ZP.setBadge(e);
else if (g.has(r().layout)) {
  let e = new(l())({
    animation: "none"
  });
  p = t => {
    try {
      (0, I.PR)(t), e.badge(-1 === t ? "•" : t)
    } catch (e) {}
  }
}

function N() {
  let e = (0, o.e7)([E.Z], () => E.Z.hasIncomingCalls()),
    t = (0, o.e7)([c.default, d.Z, u.Z], () => {
      let e = c.default.getTotalMentionCount(),
        t = d.Z.getPendingCount(),
        n = c.default.hasAnyUnread(),
        s = u.Z.getDisableUnreadBadge(),
        i = e + t;
      return 0 === i && n && !s && (i = -1), i
    });
  s.useEffect(() => {
    if (!e) return;
    let t = _.ZP.bounceDock("critical"),
      n = (0, I.EM)({
        messages: [T.Z.Messages.INCOMING_CALL],
        count: 50
      });
    return () => {
      null == t || t(), n()
    }
  }, [e]), s.useEffect(() => {
    p(t)
  }, [t]), s.useEffect(() => () => p(0), [])
}