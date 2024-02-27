"use strict";
n.r(t), n.d(t, {
  default: function() {
    return A
  }
});
var a = n("37983"),
  s = n("884691"),
  l = n("446674"),
  i = n("933805"),
  r = n("193865"),
  o = n("843257"),
  u = n("846564"),
  d = n("950576"),
  c = n("256572"),
  f = n("27618"),
  h = n("93427"),
  C = n("700097"),
  p = n("95045"),
  E = n("574073"),
  m = n("909917"),
  g = n("380986"),
  _ = n("49111"),
  S = n("782340");
let T = s.memo(function(e) {
  var t, n, T;
  let {
    baseMessage: A,
    referencedMessage: M,
    channel: I,
    compact: N = !1,
    referencedUsernameProfile: v,
    referencedAvatarProfile: L,
    setPopout: R
  } = e, y = M.state === c.ReferencedMessageState.LOADED ? M.message : void 0, x = (0, E.useNullableMessageAuthor)(y), O = (0, r.useShowImprovedMarkdownUserExperimentConfig)((null !== (t = A.editedTimestamp) && void 0 !== t ? t : A.timestamp).valueOf()), D = (0, r.useShowImprovedMarkdownGuildExperimentConfig)(null !== (n = null == I ? void 0 : I.guild_id) && void 0 !== n ? n : "", (null !== (T = A.editedTimestamp) && void 0 !== T ? T : A.timestamp).valueOf()), P = s.useMemo(() => {
    if (null == y) return null;
    if (y.type === _.MessageTypes.USER_JOIN) return (0, i.astToString)(C.default.getSystemMessageUserJoin(y.id).astFormat({
      username: null != x ? x.nick : y.author.username,
      usernameHook: e => e
    }));
    if (y.type === _.MessageTypes.ROLE_SUBSCRIPTION_PURCHASE) return (0, i.astToString)((0, o.getRoleSubscriptionPurchaseSystemMessageAstFormattedContent)({
      username: null != x ? x.nick : y.author.username,
      guildId: null == I ? void 0 : I.guild_id,
      roleSubscriptionData: y.roleSubscriptionData
    }));
    if (y.type === _.MessageTypes.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION) return (0, i.astToString)((0, u.getApplicationSubscriptionSystemMessageASTContent)({
      application: null == y ? void 0 : y.application,
      username: null == x ? void 0 : x.nick
    }));
    else if (y.type === _.MessageTypes.PRIVATE_CHANNEL_INTEGRATION_ADDED) return (0, i.astToString)((0, d.getPrivateChannelIntegrationAddedSystemMessageASTContent)({
      application: null == y ? void 0 : y.application,
      username: null == x ? void 0 : x.nick
    }));
    else if (y.type === _.MessageTypes.PRIVATE_CHANNEL_INTEGRATION_REMOVED) return (0, i.astToString)((0, d.getPrivateChannelIntegrationRemovedSystemMessageASTContent)({
      application: null == y ? void 0 : y.application,
      username: null == x ? void 0 : x.nick
    }));
    else if (y.type === _.MessageTypes.GUILD_DEADCHAT_REVIVE_PROMPT) return "" !== y.content ? y.content : S.default.Messages.DEADCHAT_PROMPT_1;
    if (null != y.content && "" !== y.content) {
      let e = y.isFirstMessageInForumPost(I) ? {
        formatInline: !0,
        noStyleAndInteraction: !0,
        allowHeading: !0,
        allowList: !0,
        allowLinks: O.showMaskedLinks || D.showMaskedLinks
      } : {
        formatInline: !0,
        allowHeading: O.showListsAndHeaders || D.showListsAndHeaders,
        allowList: O.showListsAndHeaders || D.showListsAndHeaders,
        allowLinks: O.showMaskedLinks || D.showMaskedLinks
      };
      return (0, p.default)(y, e).content
    }
    return null
  }, [y, x, I, O, D]), j = (0, l.useStateFromStores)([f.default], () => null != y && f.default.isBlocked(y.author.id), [y]), b = (0, g.useContextMenuUser)(null == y ? void 0 : y.author.id, I.id), F = (0, g.useClickReply)(A, y, j), H = (0, g.useClickReferencedMessageAuthorUsername)(y, I, v, R), U = (0, g.useClickReferencedMessageAuthorAvatar)(L, R), k = s.useCallback(() => R({
    referencedUsernameProfile: !1,
    referencedAvatarProfile: !1
  }), [R]), G = (0, E.useNullableMessageAuthor)(A);
  return (0, a.jsx)(h.default, {
    repliedAuthor: x,
    baseMessage: A,
    channel: I,
    baseAuthor: G,
    referencedMessage: M,
    content: P,
    compact: N,
    isReplyAuthorBlocked: j,
    showAvatarPopout: L,
    showUsernamePopout: v,
    renderPopout: m.default,
    onClickAvatar: U,
    onClickUsername: H,
    onClickReply: F,
    onContextMenu: b,
    onPopoutRequestClose: k
  })
});

function A(e, t, n, s, l) {
  let {
    message: i,
    channel: r,
    compact: o
  } = e, {
    referencedUsernameProfile: u,
    referencedAvatarProfile: d
  } = n, c = i.type === _.MessageTypes.REPLY && null != s && (0, a.jsx)(T, {
    baseMessage: i,
    replyReference: s,
    referencedMessage: l,
    channel: r,
    compact: o,
    setPopout: t,
    referencedUsernameProfile: u,
    referencedAvatarProfile: d
  });
  return (0, a.jsx)(a.Fragment, {
    children: c
  })
}