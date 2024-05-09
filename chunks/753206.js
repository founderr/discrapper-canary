"use strict";
s.r(t);
var a = s("735250"),
  n = s("470079"),
  i = s("120356"),
  E = s.n(i),
  l = s("628238"),
  _ = s("998951"),
  r = s("25015"),
  u = s("963550"),
  o = s("845080"),
  T = s("373947");
t.default = n.memo(function(e) {
  var t;
  let {
    message: s,
    channel: n,
    compact: i,
    className: d,
    isGroupStart: A,
    hideSimpleEmbedContent: I = !0,
    disableInteraction: L
  } = e, c = (0, l.isMessageNewerThanImprovedMarkdownEpoch)((null !== (t = s.editedTimestamp) && void 0 !== t ? t : s.timestamp).valueOf()), {
    content: N
  } = (0, r.default)(s, {
    hideSimpleEmbedContent: I,
    allowList: c,
    allowHeading: c,
    allowLinks: !0,
    previewLinkTarget: !0
  });
  return (0, a.jsx)(_.default, {
    compact: i,
    className: E()(d, {
      [T.message]: !0,
      [T.cozyMessage]: !i,
      [T.groupStart]: A
    }),
    childrenHeader: (0, o.default)({
      ...e,
      channel: n,
      guildId: void 0
    }),
    childrenMessageContent: (0, u.default)(e, N),
    disableInteraction: L
  })
})