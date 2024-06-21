n.d(t, {
  Z: function() {
    return T
  }
}), n(47120);
var i = n(470079),
  s = n(166516),
  l = n.n(s),
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
  g = n(689938);
let p = new Set(["Blink", "Gecko", "WebKit"]),
  N = m.dG4;
if (h.isPlatformEmbedded) N = e => _.ZP.setBadge(e);
else if (p.has(r().layout)) {
  let e = new(l())({
    animation: "none"
  });
  N = t => {
    try {
      (0, I.PR)(t), e.badge(-1 === t ? "•" : t)
    } catch (e) {}
  }
}

function T() {
  let e = (0, o.e7)([E.Z], () => E.Z.hasIncomingCalls()),
    t = (0, o.e7)([c.default, d.Z, u.Z], () => {
      let e = c.default.getTotalMentionCount(),
        t = d.Z.getPendingCount(),
        n = c.default.hasAnyUnread(),
        i = u.Z.getDisableUnreadBadge(),
        s = e + t;
      return 0 === s && n && !i && (s = -1), s
    });
  i.useEffect(() => {
    if (!e) return;
    let t = _.ZP.bounceDock("critical"),
      n = (0, I.EM)({
        messages: [g.Z.Messages.INCOMING_CALL],
        count: 50
      });
    return () => {
      null == t || t(), n()
    }
  }, [e]), i.useEffect(() => {
    N(t)
  }, [t]), i.useEffect(() => () => N(0), [])
}