"use strict";
n.r(t), n.d(t, {
  default: function() {
    return E
  }
});
var l = n("37983"),
  i = n("884691"),
  r = n("414456"),
  s = n.n(r),
  o = n("193865"),
  u = n("780571"),
  a = n("39331"),
  c = n("596368"),
  d = n("227439"),
  f = n("877671"),
  E = i.memo(function(e) {
    var t, n, i;
    let {
      message: r,
      channel: E,
      compact: _,
      className: h,
      isGroupStart: p,
      hideSimpleEmbedContent: m = !0,
      disableInteraction: S
    } = e, M = (0, o.useShowImprovedMarkdownUserExperimentConfig)((null !== (t = r.editedTimestamp) && void 0 !== t ? t : r.timestamp).valueOf()), v = (0, o.useShowImprovedMarkdownGuildExperimentConfig)(null !== (n = null == E ? void 0 : E.guild_id) && void 0 !== n ? n : "", (null !== (i = r.editedTimestamp) && void 0 !== i ? i : r.timestamp).valueOf()), {
      content: C
    } = (0, a.default)(r, {
      hideSimpleEmbedContent: m,
      allowList: M.showListsAndHeaders || v.showListsAndHeaders,
      allowHeading: M.showListsAndHeaders || v.showListsAndHeaders,
      allowLinks: M.showMaskedLinks || v.showMaskedLinks,
      previewLinkTarget: M.showMaskedLinks || v.showMaskedLinks
    });
    return (0, l.jsx)(u.default, {
      compact: _,
      className: s(h, {
        [f.message]: !0,
        [f.cozyMessage]: !_,
        [f.groupStart]: p
      }),
      childrenHeader: (0, d.default)({
        ...e,
        channel: E,
        guildId: void 0
      }),
      childrenMessageContent: (0, c.default)(e, C),
      disableInteraction: S
    })
  })