"use strict";
n.r(t), n.d(t, {
  default: function() {
    return f
  }
});
var s = n("735250"),
  l = n("470079"),
  a = n("442837"),
  i = n("869765"),
  r = n("699516"),
  o = n("512665"),
  u = n("937889"),
  d = n("739566"),
  c = n("981631");
let E = l.memo(function(e) {
  let {
    baseMessage: t,
    channel: n,
    referencedMessage: c,
    compact: E = !1
  } = e, f = c.state === i.ReferencedMessageState.LOADED ? c.message : void 0, _ = l.useMemo(() => (null == f ? void 0 : f.content) != null && "" !== f.content ? (0, u.default)(f, {
    formatInline: !0
  }).content : null, [f]), T = (0, a.useStateFromStores)([r.default], () => null != f && r.default.isBlocked(f.author.id), [f]), I = (0, d.useNullableMessageAuthor)(f), m = (0, d.useNullableMessageAuthor)(t);
  return (0, s.jsx)(o.default, {
    repliedAuthor: I,
    baseAuthor: m,
    baseMessage: t,
    channel: n,
    referencedMessage: c,
    content: _,
    compact: E,
    isReplyAuthorBlocked: T
  })
});

function f(e, t, n, l, a) {
  return e.type !== c.MessageTypes.REPLY || null == n ? null : (0, s.jsx)(E, {
    baseMessage: e,
    channel: t,
    referencedMessage: l,
    compact: a
  })
}