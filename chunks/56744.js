"use strict";
n.r(t), n.d(t, {
  default: function() {
    return _
  }
});
var s = n("735250"),
  a = n("470079"),
  l = n("442837"),
  i = n("200120"),
  r = n("869765"),
  o = n("699516"),
  u = n("512665"),
  d = n("937889"),
  c = n("739566"),
  f = n("981631");
let E = a.memo(function(e) {
  let {
    baseMessage: t,
    channel: n,
    referencedMessage: f,
    compact: E = !1
  } = e, _ = f.state === r.ReferencedMessageState.LOADED ? f.message : void 0, m = (0, i.useShouldFilterKeywords)(), T = a.useMemo(() => (null == _ ? void 0 : _.content) != null && "" !== _.content ? (0, d.default)(_, {
    formatInline: !0,
    shouldFilterKeywords: m
  }).content : null, [_, m]), I = (0, l.useStateFromStores)([o.default], () => null != _ && o.default.isBlocked(_.author.id), [_]), p = (0, c.useNullableMessageAuthor)(_), h = (0, c.useNullableMessageAuthor)(t);
  return (0, s.jsx)(u.default, {
    repliedAuthor: p,
    baseAuthor: h,
    baseMessage: t,
    channel: n,
    referencedMessage: f,
    content: T,
    compact: E,
    isReplyAuthorBlocked: I
  })
});

function _(e, t, n, a, l) {
  return e.type !== f.MessageTypes.REPLY || null == n ? null : (0, s.jsx)(E, {
    baseMessage: e,
    channel: t,
    referencedMessage: a,
    compact: l
  })
}