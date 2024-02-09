"use strict";
E.r(t), E.d(t, {
  default: function() {
    return L
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
  l = E("877671"),
  L = s.memo(function(e) {
    var t, E, s;
    let {
      message: a,
      channel: L,
      compact: o,
      className: r,
      isGroupStart: d,
      hideSimpleEmbedContent: N = !0,
      disableInteraction: S
    } = e, g = (0, n.useShowImprovedMarkdownUserExperimentConfig)((null !== (t = a.editedTimestamp) && void 0 !== t ? t : a.timestamp).valueOf()), D = (0, n.useShowImprovedMarkdownGuildExperimentConfig)(null !== (E = null == L ? void 0 : L.guild_id) && void 0 !== E ? E : "", (null !== (s = a.editedTimestamp) && void 0 !== s ? s : a.timestamp).valueOf()), {
      content: G
    } = (0, u.default)(a, {
      hideSimpleEmbedContent: N,
      allowList: g.showListsAndHeaders || D.showListsAndHeaders,
      allowHeading: g.showListsAndHeaders || D.showListsAndHeaders,
      allowLinks: g.showMaskedLinks || D.showMaskedLinks,
      previewLinkTarget: g.showMaskedLinks || D.showMaskedLinks
    });
    return (0, _.jsx)(A.default, {
      compact: o,
      className: T(r, {
        [l.message]: !0,
        [l.cozyMessage]: !o,
        [l.groupStart]: d
      }),
      childrenHeader: (0, i.default)({
        ...e,
        channel: L,
        guildId: void 0
      }),
      childrenMessageContent: (0, I.default)(e, G),
      disableInteraction: S
    })
  })