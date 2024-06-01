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
  E = n("981631");
let f = a.memo(function(e) {
  let {
    baseMessage: t,
    channel: n,
    referencedMessage: E,
    compact: f = !1
  } = e, _ = E.state === r.ReferencedMessageState.LOADED ? E.message : void 0, T = (0, i.useActiveKeywordFiltersCacheKey)(), m = a.useMemo(() => (null == _ ? void 0 : _.content) != null && "" !== _.content ? (0, d.default)(_, {
    formatInline: !0,
    shouldFilterKeywords: null != T
  }).content : null, [_, T]), I = (0, l.useStateFromStores)([o.default], () => null != _ && o.default.isBlocked(_.author.id), [_]), N = (0, c.useNullableMessageAuthor)(_), p = (0, c.useNullableMessageAuthor)(t);
  return (0, s.jsx)(u.default, {
    repliedAuthor: N,
    baseAuthor: p,
    baseMessage: t,
    channel: n,
    referencedMessage: E,
    content: m,
    compact: f,
    isReplyAuthorBlocked: I
  })
});

function _(e, t, n, a, l) {
  return e.type !== E.MessageTypes.REPLY || null == n ? null : (0, s.jsx)(f, {
    baseMessage: e,
    channel: t,
    referencedMessage: a,
    compact: l
  })
}