"use strict";
n.r(t), n.d(t, {
  default: function() {
    return A
  }
});
var a = n("735250"),
  l = n("470079"),
  s = n("442837"),
  i = n("25209"),
  r = n("35125"),
  o = n("200120"),
  u = n("628238"),
  d = n("499401"),
  c = n("693912"),
  f = n("869765"),
  h = n("699516"),
  m = n("512665"),
  p = n("352736"),
  E = n("937889"),
  C = n("739566"),
  g = n("507418"),
  S = n("348238"),
  _ = n("981631"),
  T = n("689938");
let I = l.memo(function(e) {
  var t;
  let {
    baseMessage: n,
    referencedMessage: I,
    channel: A,
    compact: v = !1,
    referencedUsernameProfile: N,
    referencedAvatarProfile: x,
    setPopout: M
  } = e, R = I.state === f.ReferencedMessageState.LOADED ? I.message : void 0, y = (0, C.useNullableMessageAuthor)(R), L = (0, o.useActiveKeywordFiltersCacheKey)(), O = (0, u.isMessageNewerThanImprovedMarkdownEpoch)((null !== (t = n.editedTimestamp) && void 0 !== t ? t : n.timestamp).valueOf()), j = l.useMemo(() => {
    if (null == R) return null;
    if (R.type === _.MessageTypes.USER_JOIN) return (0, i.astToString)(p.default.getSystemMessageUserJoin(R.id).astFormat({
      username: null != y ? y.nick : R.author.username,
      usernameHook: e => e
    }));
    if (R.type === _.MessageTypes.ROLE_SUBSCRIPTION_PURCHASE) return (0, i.astToString)((0, r.getRoleSubscriptionPurchaseSystemMessageAstFormattedContent)({
      username: null != y ? y.nick : R.author.username,
      guildId: null == A ? void 0 : A.guild_id,
      roleSubscriptionData: R.roleSubscriptionData
    }));
    if (R.type === _.MessageTypes.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION) return (0, i.astToString)((0, d.getApplicationSubscriptionSystemMessageASTContent)({
      application: null == R ? void 0 : R.application,
      username: null == y ? void 0 : y.nick
    }));
    else if (R.type === _.MessageTypes.PRIVATE_CHANNEL_INTEGRATION_ADDED) return (0, i.astToString)((0, c.getPrivateChannelIntegrationAddedSystemMessageASTContent)({
      application: null == R ? void 0 : R.application,
      username: null == y ? void 0 : y.nick
    }));
    else if (R.type === _.MessageTypes.PRIVATE_CHANNEL_INTEGRATION_REMOVED) return (0, i.astToString)((0, c.getPrivateChannelIntegrationRemovedSystemMessageASTContent)({
      application: null == R ? void 0 : R.application,
      username: null == y ? void 0 : y.nick
    }));
    else if (R.type === _.MessageTypes.GUILD_DEADCHAT_REVIVE_PROMPT) return "" !== R.content ? R.content : T.default.Messages.DEADCHAT_PROMPT_1;
    if (null != R.content && "" !== R.content) {
      let e = {
          formatInline: !0,
          allowLinks: !0,
          shouldFilterKeywords: null != L
        },
        t = R.isFirstMessageInForumPost(A) ? {
          ...e,
          noStyleAndInteraction: !0,
          allowHeading: !0,
          allowList: !0
        } : {
          ...e,
          formatInline: !0,
          allowHeading: O,
          allowList: O
        };
      return (0, E.default)(R, t).content
    }
    return null
  }, [R, y, A, O, L]), P = (0, s.useStateFromStores)([h.default], () => null != R && h.default.isBlocked(R.author.id), [R]), D = (0, S.useContextMenuUser)(null == R ? void 0 : R.author.id, A.id), b = (0, S.useClickReply)(n, R, P), U = (0, S.useClickReferencedMessageAuthorUsername)(R, A, N, M), F = (0, S.useClickReferencedMessageAuthorAvatar)(x, M), w = l.useCallback(() => M({
    referencedUsernameProfile: !1,
    referencedAvatarProfile: !1
  }), [M]), k = (0, C.useNullableMessageAuthor)(n);
  return (0, a.jsx)(m.default, {
    repliedAuthor: y,
    baseMessage: n,
    channel: A,
    baseAuthor: k,
    referencedMessage: I,
    content: j,
    compact: v,
    isReplyAuthorBlocked: P,
    showAvatarPopout: x,
    showUsernamePopout: N,
    renderPopout: g.default,
    onClickAvatar: F,
    onClickUsername: U,
    onClickReply: b,
    onContextMenu: D,
    onPopoutRequestClose: w
  })
});

function A(e, t, n, l, s) {
  let {
    message: i,
    channel: r,
    compact: o
  } = e, {
    referencedUsernameProfile: u,
    referencedAvatarProfile: d
  } = n, c = i.type === _.MessageTypes.REPLY && null != l && (0, a.jsx)(I, {
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