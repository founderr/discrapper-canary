"use strict";
s.r(t);
var E = s("735250"),
  _ = s("470079"),
  a = s("120356"),
  n = s.n(a),
  T = s("628238"),
  u = s("998951"),
  i = s("25015"),
  A = s("963550"),
  l = s("845080"),
  I = s("913144");
t.default = _.memo(function(e) {
  var t;
  let {
    message: s,
    channel: _,
    compact: a,
    className: L,
    isGroupStart: o,
    hideSimpleEmbedContent: r = !0,
    disableInteraction: d
  } = e, S = (0, T.isMessageNewerThanImprovedMarkdownEpoch)((null !== (t = s.editedTimestamp) && void 0 !== t ? t : s.timestamp).valueOf()), {
    content: N
  } = (0, i.default)(s, {
    hideSimpleEmbedContent: r,
    allowList: S,
    allowHeading: S,
    allowLinks: !0,
    previewLinkTarget: !0
  });
  return (0, E.jsx)(u.default, {
    compact: a,
    className: n()(L, {
      [I.message]: !0,
      [I.cozyMessage]: !a,
      [I.groupStart]: o
    }),
    childrenHeader: (0, l.default)({
      ...e,
      channel: _,
      guildId: void 0
    }),
    childrenMessageContent: (0, A.default)(e, N),
    disableInteraction: d
  })
})