"use strict";
E.r(t), E.d(t, {
  default: function() {
    return o
  }
});
var _ = E("37983"),
  s = E("884691"),
  a = E("414456"),
  T = E.n(a),
  n = E("193865"),
  A = E("780571"),
  u = E("39331"),
  I = E("596368"),
  i = E("227439"),
  l = E("49111"),
  L = E("5762"),
  o = s.memo(function(e) {
    var t, E, s;
    let {
      message: a,
      channel: o,
      compact: r,
      className: d,
      isGroupStart: N,
      hideSimpleEmbedContent: S = !0,
      disableInteraction: g
    } = e, D = (0, n.useShowImprovedMarkdownUserExperimentConfig)((null !== (t = a.editedTimestamp) && void 0 !== t ? t : a.timestamp).valueOf()), G = (0, n.useShowImprovedMarkdownGuildExperimentConfig)(null !== (E = null == o ? void 0 : o.guild_id) && void 0 !== E ? E : l.EMPTY_STRING_GUILD_ID, (null !== (s = a.editedTimestamp) && void 0 !== s ? s : a.timestamp).valueOf()), {
      content: O
    } = (0, u.default)(a, {
      hideSimpleEmbedContent: S,
      allowList: D.showListsAndHeaders || G.showListsAndHeaders,
      allowHeading: D.showListsAndHeaders || G.showListsAndHeaders,
      allowLinks: D.showMaskedLinks || G.showMaskedLinks,
      previewLinkTarget: D.showMaskedLinks || G.showMaskedLinks
    });
    return (0, _.jsx)(A.default, {
      compact: r,
      className: T(d, {
        [L.message]: !0,
        [L.cozyMessage]: !r,
        [L.groupStart]: N
      }),
      childrenHeader: (0, i.default)({
        ...e,
        channel: o,
        guildId: void 0
      }),
      childrenMessageContent: (0, I.default)(e, O),
      disableInteraction: g
    })
  })