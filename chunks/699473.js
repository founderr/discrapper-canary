"use strict";
n.r(t), n.d(t, {
  default: function() {
    return v
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
  I = n("383667"),
  m = n("574073"),
  N = n("865343"),
  p = n("39331"),
  S = n("68480"),
  A = n("115859"),
  C = n("596368"),
  h = n("227439"),
  g = n("862451"),
  M = n("611792"),
  O = n("554372"),
  R = n("49111"),
  L = n("5762"),
  v = l.memo(function(e) {
    var t, n;
    let {
      message: l,
      compact: a = !1,
      className: v,
      onContextMenu: P,
      onClick: D,
      disableInteraction: x = !1,
      hideSimpleEmbedContent: y = !0,
      channel: U,
      isGroupStart: j,
      animateAvatar: b,
      subscribeToComponentDispatch: G,
      renderThreadAccessory: B,
      trackAnnouncementViews: k = !1,
      asPartialPreview: F = !0,
      ...w
    } = e, H = l.isFirstMessageInForumPost(U), V = (0, u.useShowImprovedMarkdownUserExperimentConfig)((null !== (t = l.editedTimestamp) && void 0 !== t ? t : l.timestamp).valueOf()), Y = (0, u.useShowImprovedMarkdownGuildExperimentConfig)(U.guild_id, (null !== (n = l.editedTimestamp) && void 0 !== n ? n : l.timestamp).valueOf()), {
      content: W,
      hasSpoilerEmbeds: K
    } = (0, p.default)(l, {
      hideSimpleEmbedContent: y,
      allowList: H || V.showListsAndHeaders || Y.showListsAndHeaders,
      allowHeading: H || V.showListsAndHeaders || Y.showListsAndHeaders,
      allowLinks: V.showMaskedLinks || Y.showMaskedLinks,
      previewLinkTarget: V.showMaskedLinks || Y.showMaskedLinks
    }), z = l.type === R.MessageTypes.REPLY ? l.messageReference : void 0, Q = (0, o.useStateFromStores)([c.default], () => c.default.getMessageByReference(z)), Z = (0, r.useListItem)(l.id), J = (0, m.default)(l), X = (0, o.useStateFromStores)([E.default], () => l.hasFlag(R.MessageFlags.HAS_THREAD) && E.default.getChannel(l.id)), q = (0, d.useRoleIcon)({
      guildId: U.guild_id,
      roleId: J.iconRoleId
    }), $ = (0, o.useStateFromStores)([f.default], () => f.default.can(R.Permissions.CREATE_INSTANT_INVITE, U)), ee = (0, S.default)({
      message: l,
      channel: U,
      enabled: k
    });
    if ((0, I.default)(l, $)) return null;
    let et = (0, N.getMessageAriaLabelledBy)(l),
      en = (0, N.getMessageAriaDescribedBy)(l);
    return (0, s.jsx)(_.default, {
      compact: a,
      className: i(v, {
        [L.ephemeral]: (0, T.hasFlag)(l.flags, R.MessageFlags.EPHEMERAL),
        [L.disableInteraction]: x
      }),
      disableInteraction: x,
      childrenRepliedMessage: (0, O.default)(l, U, z, Q, a),
      childrenExecutedCommand: (0, M.default)(l, U, a),
      childrenHeader: (0, h.default)({
        ...e,
        guildId: U.guild_id,
        author: J,
        roleIcon: q
      }),
      childrenAccessories: e.hideAccessories ? void 0 : (0, A.renderSimpleAccessories)(e, K),
      childrenMessageContent: (0, C.default)({
        ...e,
        asPartialPreview: F
      }, W),
      childrenSystemMessage: (0, g.default)(e),
      onContextMenu: P,
      onClick: D,
      hasThread: B && null != X && l.hasFlag(R.MessageFlags.HAS_THREAD),
      hasReply: l.type === R.MessageTypes.REPLY,
      "aria-labelledby": et,
      "aria-describedby": en,
      messageRef: ee,
      ...Z,
      ...w
    })
  })