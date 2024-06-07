"use strict";
n.r(t), n.d(t, {
  default: function() {
    return x
  }
});
var a = n("735250"),
  l = n("470079"),
  s = n("442837"),
  i = n("25209"),
  r = n("39154"),
  o = n("35125"),
  u = n("200120"),
  d = n("628238"),
  c = n("499401"),
  f = n("693912"),
  h = n("869765"),
  m = n("699516"),
  p = n("512665"),
  E = n("352736"),
  C = n("937889"),
  g = n("739566"),
  S = n("507418"),
  _ = n("348238"),
  T = n("981631"),
  I = n("689938");
let A = l.memo(function(e) {
  var t;
  let {
    baseMessage: n,
    referencedMessage: A,
    channel: x,
    compact: v = !1,
    referencedUsernameProfile: N,
    referencedAvatarProfile: M,
    setPopout: R
  } = e, y = A.state === h.ReferencedMessageState.LOADED ? A.message : void 0, L = (0, g.useNullableMessageAuthor)(y), j = (0, u.useActiveKeywordFiltersCacheKey)(), O = (0, d.isMessageNewerThanImprovedMarkdownEpoch)((null !== (t = n.editedTimestamp) && void 0 !== t ? t : n.timestamp).valueOf()), P = l.useMemo(() => {
    if (null == y) return null;
    let e = (0, r.default)(y);
    if (e.type === T.MessageTypes.USER_JOIN) {
      let t = E.default.getWelcomeMessageKind(x.guild_id);
      return (0, i.astToString)(E.default.getSystemMessageUserJoin(e.id, t).astFormat({
        username: null != L ? L.nick : e.author.username,
        usernameHook: e => e
      }))
    }
    if (e.type === T.MessageTypes.ROLE_SUBSCRIPTION_PURCHASE) return (0, i.astToString)((0, o.getRoleSubscriptionPurchaseSystemMessageAstFormattedContent)({
      username: null != L ? L.nick : e.author.username,
      guildId: null == x ? void 0 : x.guild_id,
      roleSubscriptionData: e.roleSubscriptionData
    }));
    if (e.type === T.MessageTypes.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION) return (0, i.astToString)((0, c.getApplicationSubscriptionSystemMessageASTContent)({
      application: null == e ? void 0 : e.application,
      username: null == L ? void 0 : L.nick
    }));
    else if (e.type === T.MessageTypes.PRIVATE_CHANNEL_INTEGRATION_ADDED) return (0, i.astToString)((0, f.getPrivateChannelIntegrationAddedSystemMessageASTContent)({
      application: null == e ? void 0 : e.application,
      username: null == L ? void 0 : L.nick
    }));
    else if (e.type === T.MessageTypes.PRIVATE_CHANNEL_INTEGRATION_REMOVED) return (0, i.astToString)((0, f.getPrivateChannelIntegrationRemovedSystemMessageASTContent)({
      application: null == e ? void 0 : e.application,
      username: null == L ? void 0 : L.nick
    }));
    else if (e.type === T.MessageTypes.GUILD_DEADCHAT_REVIVE_PROMPT) return "" !== e.content ? e.content : I.default.Messages.DEADCHAT_PROMPT_1;
    if (null != e.content && "" !== e.content) {
      let t = {
          formatInline: !0,
          allowLinks: !0,
          shouldFilterKeywords: null != j
        },
        n = e.isFirstMessageInForumPost(x) ? {
          ...t,
          noStyleAndInteraction: !0,
          allowHeading: !0,
          allowList: !0
        } : {
          ...t,
          formatInline: !0,
          allowHeading: O,
          allowList: O
        };
      return (0, C.default)(e, n).content
    }
    return null
  }, [y, L, x, O, j]), D = (0, s.useStateFromStores)([m.default], () => null != y && m.default.isBlocked(y.author.id), [y]), b = (0, _.useContextMenuUser)(null == y ? void 0 : y.author.id, x.id), U = (0, _.useClickReply)(n, y, D), F = (0, _.useClickReferencedMessageAuthorUsername)(y, x, N, R), w = (0, _.useClickReferencedMessageAuthorAvatar)(M, R), k = l.useCallback(() => R({
    referencedUsernameProfile: !1,
    referencedAvatarProfile: !1
  }), [R]), H = (0, g.useNullableMessageAuthor)(n);
  return (0, a.jsx)(p.default, {
    repliedAuthor: L,
    baseMessage: n,
    channel: x,
    baseAuthor: H,
    referencedMessage: A,
    content: P,
    compact: v,
    isReplyAuthorBlocked: D,
    showAvatarPopout: M,
    showUsernamePopout: N,
    renderPopout: S.default,
    onClickAvatar: w,
    onClickUsername: F,
    onClickReply: U,
    onContextMenu: b,
    onPopoutRequestClose: k
  })
});

function x(e, t, n, l, s) {
  let {
    message: i,
    channel: r,
    compact: o
  } = e, {
    referencedUsernameProfile: u,
    referencedAvatarProfile: d
  } = n, c = i.type === T.MessageTypes.REPLY && null != l && (0, a.jsx)(A, {
    baseMessage: i,
    replyReference: l,
    referencedMessage: s,
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