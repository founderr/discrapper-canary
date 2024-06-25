n.d(t, {
  Z: function() {
    return I
  }
});
var s = n(735250),
  i = n(470079),
  l = n(442837),
  a = n(905405),
  r = n(869765),
  o = n(699516),
  c = n(512665),
  u = n(937889),
  d = n(739566),
  E = n(981631);
let _ = i.memo(function(e) {
  let {
    baseMessage: t,
    channel: n,
    referencedMessage: E,
    compact: _ = !1
  } = e, I = E.state === r.Y.LOADED ? E.message : void 0, T = (0, a.p)(), m = i.useMemo(() => (null == I ? void 0 : I.content) != null && "" !== I.content ? (0, u.ZP)(I, {
    formatInline: !0,
    shouldFilterKeywords: T
  }).content : null, [I, T]), N = (0, l.e7)([o.Z], () => null != I && o.Z.isBlockedForMessage(I), [I]), h = (0, d.Uj)(I), C = (0, d.Uj)(t);
  return (0, s.jsx)(c.Z, {
    repliedAuthor: h,
    baseAuthor: C,
    baseMessage: t,
    channel: n,
    referencedMessage: E,
    content: m,
    compact: _,
    isReplyAuthorBlocked: N
  })
});

function I(e, t, n, i, l) {
  return e.type !== E.uaV.REPLY || null == n ? null : (0, s.jsx)(_, {
    baseMessage: e,
    channel: t,
    referencedMessage: i,
    compact: l
  })
}