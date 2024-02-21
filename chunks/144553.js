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
  r = n("409129"),
  o = n("193865"),
  u = n("843257"),
  d = n("950576"),
  c = n("256572"),
  f = n("27618"),
  h = n("93427"),
  C = n("700097"),
  p = n("95045"),
  E = n("574073"),
  m = n("909917"),
  g = n("380986"),
  S = n("49111"),
  _ = n("782340");
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
  } = e, x = M.state === c.ReferencedMessageState.LOADED ? M.message : void 0, y = (0, E.useNullableMessageAuthor)(x), O = (0, o.useShowImprovedMarkdownUserExperimentConfig)((null !== (t = A.editedTimestamp) && void 0 !== t ? t : A.timestamp).valueOf()), D = (0, o.useShowImprovedMarkdownGuildExperimentConfig)(null !== (n = null == I ? void 0 : I.guild_id) && void 0 !== n ? n : "", (null !== (T = A.editedTimestamp) && void 0 !== T ? T : A.timestamp).valueOf()), P = s.useMemo(() => {
    if (null == x) return null;
    if (x.type === S.MessageTypes.USER_JOIN) return (0, i.astToString)(C.default.getSystemMessageUserJoin(x.id).astFormat({
      username: null != y ? y.nick : x.author.username,
      usernameHook: e => e
    }));
    if (x.type === S.MessageTypes.ROLE_SUBSCRIPTION_PURCHASE) return (0, i.astToString)((0, u.getRoleSubscriptionPurchaseSystemMessageAstFormattedContent)({
      username: null != y ? y.nick : x.author.username,
      guildId: null == I ? void 0 : I.guild_id,
      roleSubscriptionData: x.roleSubscriptionData
    }));
    if (x.type === S.MessageTypes.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION) return (0, i.astToString)((0, r.getApplicationSubscriptionSystemMessageASTContent)({
      application: null == x ? void 0 : x.application,
      username: null == y ? void 0 : y.nick
    }));
    else if (x.type === S.MessageTypes.PRIVATE_CHANNEL_INTEGRATION_ADDED) return (0, i.astToString)((0, d.getPrivateChannelIntegrationAddedSystemMessageASTContent)({
      application: null == x ? void 0 : x.application,
      username: null == y ? void 0 : y.nick
    }));
    else if (x.type === S.MessageTypes.PRIVATE_CHANNEL_INTEGRATION_REMOVED) return (0, i.astToString)((0, d.getPrivateChannelIntegrationRemovedSystemMessageASTContent)({
      application: null == x ? void 0 : x.application,
      username: null == y ? void 0 : y.nick
    }));
    else if (x.type === S.MessageTypes.GUILD_DEADCHAT_REVIVE_PROMPT) return "" !== x.content ? x.content : _.default.Messages.DEADCHAT_PROMPT_1;
    if (null != x.content && "" !== x.content) {
      let e = x.isFirstMessageInForumPost(I) ? {
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
      return (0, p.default)(x, e).content
    }
    return null
  }, [x, y, I, O, D]), j = (0, l.useStateFromStores)([f.default], () => null != x && f.default.isBlocked(x.author.id), [x]), b = (0, g.useContextMenuUser)(null == x ? void 0 : x.author.id, I.id), H = (0, g.useClickReply)(A, x, j), F = (0, g.useClickReferencedMessageAuthorUsername)(x, I, v, R), U = (0, g.useClickReferencedMessageAuthorAvatar)(L, R), k = s.useCallback(() => R({
    referencedUsernameProfile: !1,
    referencedAvatarProfile: !1
  }), [R]), w = (0, E.useNullableMessageAuthor)(A);
  return (0, a.jsx)(h.default, {
    repliedAuthor: y,
    baseMessage: A,
    channel: I,
    baseAuthor: w,
    referencedMessage: M,
    content: P,
    compact: N,
    isReplyAuthorBlocked: j,
    showAvatarPopout: L,
    showUsernamePopout: v,
    renderPopout: m.default,
    onClickAvatar: U,
    onClickUsername: F,
    onClickReply: H,
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
  } = n, c = i.type === S.MessageTypes.REPLY && null != s && (0, a.jsx)(T, {
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