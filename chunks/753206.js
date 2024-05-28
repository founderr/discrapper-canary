"use strict";
i.r(s);
var t = i("735250"),
  n = i("470079"),
  E = i("120356"),
  r = i.n(E),
  S = i("628238"),
  o = i("998951"),
  _ = i("25015"),
  l = i("963550"),
  a = i("845080"),
  I = i("373947");
s.default = n.memo(function(e) {
  var s;
  let {
    message: i,
    channel: n,
    compact: E,
    className: u,
    isGroupStart: N,
    hideSimpleEmbedContent: A = !0,
    disableInteraction: R
  } = e, O = (0, S.isMessageNewerThanImprovedMarkdownEpoch)((null !== (s = i.editedTimestamp) && void 0 !== s ? s : i.timestamp).valueOf()), {
    content: T
  } = (0, _.default)(i, {
    hideSimpleEmbedContent: A,
    allowList: O,
    allowHeading: O,
    allowLinks: !0,
    previewLinkTarget: !0
  });
  return (0, t.jsx)(o.default, {
    compact: E,
    className: r()(u, {
      [I.message]: !0,
      [I.cozyMessage]: !E,
      [I.groupStart]: N
    }),
    childrenHeader: (0, a.default)({
      ...e,
      channel: n,
      guildId: void 0
    }),
    childrenMessageContent: (0, l.default)(e, T),
    disableInteraction: R
  })
})