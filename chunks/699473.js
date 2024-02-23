"use strict";
n.r(t), n.d(t, {
  default: function() {
    return P
  }
}), n("702976");
var s = n("37983"),
  l = n("884691"),
  a = n("414456"),
  i = n.n(a),
  r = n("974667"),
  o = n("446674"),
  u = n("193865"),
  d = n("405645"),
  c = n("256572"),
  E = n("42203"),
  f = n("957255"),
  _ = n("780571"),
  T = n("568734"),
  I = n("299039"),
  m = n("383667"),
  N = n("574073"),
  p = n("865343"),
  S = n("39331"),
  A = n("68480"),
  C = n("115859"),
  h = n("596368"),
  g = n("227439"),
  M = n("862451"),
  O = n("611792"),
  R = n("554372"),
  L = n("49111"),
  v = n("5762"),
  P = l.memo(function(e) {
    var t, n;
    let {
      message: l,
      compact: a = !1,
      className: P,
      onContextMenu: D,
      onClick: x,
      disableInteraction: y = !1,
      hideSimpleEmbedContent: U = !0,
      channel: j,
      isGroupStart: b,
      animateAvatar: G,
      subscribeToComponentDispatch: B,
      renderThreadAccessory: k,
      trackAnnouncementViews: F = !1,
      asPartialPreview: w = !0,
      ...H
    } = e, V = l.isFirstMessageInForumPost(j), Y = (0, u.useShowImprovedMarkdownUserExperimentConfig)((null !== (t = l.editedTimestamp) && void 0 !== t ? t : l.timestamp).valueOf()), K = (0, u.useShowImprovedMarkdownGuildExperimentConfig)(j.guild_id, (null !== (n = l.editedTimestamp) && void 0 !== n ? n : l.timestamp).valueOf()), {
      content: W,
      hasSpoilerEmbeds: z
    } = (0, S.default)(l, {
      hideSimpleEmbedContent: U,
      allowList: V || Y.showListsAndHeaders || K.showListsAndHeaders,
      allowHeading: V || Y.showListsAndHeaders || K.showListsAndHeaders,
      allowLinks: Y.showMaskedLinks || K.showMaskedLinks,
      previewLinkTarget: Y.showMaskedLinks || K.showMaskedLinks
    }), Q = l.type === L.MessageTypes.REPLY ? l.messageReference : void 0, Z = (0, o.useStateFromStores)([c.default], () => c.default.getMessageByReference(Q)), J = (0, r.useListItem)(l.id), X = (0, N.default)(l), q = (0, o.useStateFromStores)([E.default], () => l.hasFlag(L.MessageFlags.HAS_THREAD) && E.default.getChannel(I.default.castMessageIdAsChannelId(l.id))), $ = (0, d.useRoleIcon)({
      guildId: j.guild_id,
      roleId: X.iconRoleId
    }), ee = (0, o.useStateFromStores)([f.default], () => f.default.can(L.Permissions.CREATE_INSTANT_INVITE, j)), et = (0, A.default)({
      message: l,
      channel: j,
      enabled: F
    });
    if ((0, m.default)(l, ee)) return null;
    let en = (0, p.getMessageAriaLabelledBy)(l),
      es = (0, p.getMessageAriaDescribedBy)(l);
    return (0, s.jsx)(_.default, {
      compact: a,
      className: i(P, {
        [v.ephemeral]: (0, T.hasFlag)(l.flags, L.MessageFlags.EPHEMERAL),
        [v.disableInteraction]: y
      }),
      disableInteraction: y,
      childrenRepliedMessage: (0, R.default)(l, j, Q, Z, a),
      childrenExecutedCommand: (0, O.default)(l, j, a),
      childrenHeader: (0, g.default)({
        ...e,
        guildId: j.guild_id,
        author: X,
        roleIcon: $
      }),
      childrenAccessories: e.hideAccessories ? void 0 : (0, C.renderSimpleAccessories)(e, z),
      childrenMessageContent: (0, h.default)({
        ...e,
        asPartialPreview: w
      }, W),
      childrenSystemMessage: (0, M.default)(e),
      onContextMenu: D,
      onClick: x,
      hasThread: k && null != q && l.hasFlag(L.MessageFlags.HAS_THREAD),
      hasReply: l.type === L.MessageTypes.REPLY,
      "aria-labelledby": en,
      "aria-describedby": es,
      messageRef: et,
      ...J,
      ...H
    })
  })