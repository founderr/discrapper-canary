"use strict";
a.r(t), a.d(t, {
  GuildFeedMessage: function() {
    return V
  },
  default: function() {
    return W
  }
}), a("222007");
var l = a("37983"),
  n = a("884691"),
  s = a("414456"),
  i = a.n(s),
  d = a("446674"),
  r = a("77078"),
  u = a("193865"),
  o = a("405645"),
  c = a("887446"),
  f = a("913491"),
  m = a("574073"),
  h = a("865343"),
  E = a("909917"),
  g = a("380986"),
  I = a("969706"),
  _ = a("39331"),
  x = a("115859"),
  v = a("862451"),
  C = a("611792"),
  S = a("554372"),
  N = a("256572"),
  p = a("208021"),
  T = a("582713"),
  A = a("42203"),
  M = a("780571"),
  j = a("497880"),
  D = a("93332"),
  F = a("299039"),
  L = a("713810"),
  R = a("185014"),
  b = a("2804"),
  G = a("603371"),
  O = a("515631"),
  y = a("49111"),
  H = a("724210"),
  k = a("894488"),
  U = a("782340"),
  w = a("840741"),
  B = a("5762");
let P = n.memo(function(e) {
    let {
      message: t,
      channel: a,
      animateAvatar: s,
      repliedMessage: i
    } = e, {
      popouts: d,
      setPopout: r
    } = (0, I.default)(t.id, k.DEFAULT_POPOUTS), {
      usernameProfile: u,
      avatarProfile: c
    } = d, f = (0, g.useContextMenuUser)(t.author.id, a.id), h = (0, g.useClickMessageAuthorUsername)(t, a, u, r), _ = (0, g.useClickMessageAuthorAvatar)(c, r), x = n.useCallback(() => r({
      usernameProfile: !1,
      avatarProfile: !1,
      referencedUsernameProfile: !1
    }), [r]), v = (0, m.default)(t), C = (0, o.useRoleIcon)({
      guildId: a.guild_id,
      roleId: v.iconRoleId
    });
    return (0, l.jsx)(D.default, {
      guildId: a.guild_id,
      message: t,
      channel: a,
      repliedMessage: i,
      author: v,
      showTimestampOnHover: t.type !== y.MessageTypes.REPLY,
      renderPopout: E.default,
      showAvatarPopout: c,
      showUsernamePopout: u,
      onClickAvatar: _,
      onClickUsername: h,
      onPopoutRequestClose: x,
      onContextMenu: f,
      roleIcon: C,
      animate: s
    })
  }),
  V = n.forwardRef(function(e, t) {
    var a, s;
    let {
      guildId: o,
      channel: m,
      message: E,
      feedItemId: g,
      className: I,
      animateAvatar: D,
      contentClassName: G,
      children: k,
      groupId: U,
      onMessageClick: w,
      hideHeader: V = !1,
      forceAddReactions: W = !0,
      ...K
    } = e, z = n.useRef(null), Y = (0, d.useStateFromStores)([A.default], () => A.default.getChannel(m.id)), Z = null != Y && E.isFirstMessageInForumPost(Y), X = (0, u.useShowImprovedMarkdownUserExperimentConfig)((null !== (a = E.editedTimestamp) && void 0 !== a ? a : E.timestamp).valueOf()), J = (0, u.useShowImprovedMarkdownGuildExperimentConfig)(o, (null !== (s = E.editedTimestamp) && void 0 !== s ? s : E.timestamp).valueOf()), {
      content: q,
      hasSpoilerEmbeds: Q
    } = (0, _.default)(E, {
      hideSimpleEmbedContent: !0,
      allowList: Z || X.showListsAndHeaders || J.showListsAndHeaders,
      allowHeading: Z || X.showListsAndHeaders || J.showListsAndHeaders,
      allowLinks: X.showMaskedLinks || J.showMaskedLinks,
      previewLinkTarget: X.showMaskedLinks || J.showMaskedLinks
    }), $ = E.type === y.MessageTypes.REPLY ? E.messageReference : void 0, ee = (0, d.useStateFromStores)([N.default], () => N.default.getMessageByReference($)), et = (0, d.useStateFromStores)([A.default], () => E.hasFlag(y.MessageFlags.HAS_THREAD) && A.default.getChannel(F.default.castMessageIdAsChannelId(E.id))), ea = (0, h.getMessageAriaLabelledBy)(E, U, {
      hasTimestamp: E.id === U
    }), el = (0, h.getMessageAriaDescribedBy)(E), en = null != $ ? (0, l.jsx)(r.Clickable, {
      onClick: e => {
        null != ee.message && (e.stopPropagation(), (0, L.trackFeedItemInteracted)({
          feed_item_type: (0, b.getFeedItemTypeFromId)(g),
          feed_item_id: g,
          load_id: R.default.getLoadId(o),
          action_type: O.FeedItemInteractionType.REFERENCED_MESSAGE_CLICKED,
          guild_id: o,
          channel_id: m.id,
          message_id: E.id,
          home_session_id: c.default.getHomeSessionId(o)
        }), p.default.openChannelAsSidebar({
          guildId: m.guild_id,
          channelId: m.id,
          baseChannelId: H.StaticChannelRoute.GUILD_HOME,
          details: {
            type: T.SidebarOpenDetailsType.HOME,
            initialMessageId: ee.message.id
          }
        }))
      },
      children: (0, S.default)(E, m, $, ee, !1)
    }) : null, es = (0, f.default)(E), ei = n.useCallback(e => {
      w(e, z.current, E)
    }, [w, E]);
    return (0, l.jsx)(M.default, {
      messageRef: z,
      className: i(I, {
        [B.mentioned]: E.mentioned && !(0, f.default)(E)
      }),
      onClick: ei,
      childrenRepliedMessage: en,
      childrenExecutedCommand: (0, C.default)(E, m, !1),
      childrenHeader: es || V ? null : (0, l.jsx)(P, {
        channel: m,
        message: E,
        animateAvatar: D,
        repliedMessage: ee
      }),
      childrenAccessories: (0, x.default)({
        channelMessageProps: e,
        hasSpoilerEmbeds: Q,
        isInteracting: !1,
        forceAddReactions: W
      }),
      childrenMessageContent: (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsx)(j.default, {
          className: G,
          message: E,
          content: q,
          contentRef: t
        }), k]
      }),
      childrenSystemMessage: (0, v.default)(e),
      hasThread: null != et && E.hasFlag(y.MessageFlags.HAS_THREAD),
      hasReply: E.type === y.MessageTypes.REPLY,
      isSystemMessage: es,
      "aria-labelledby": ea,
      "aria-describedby": el,
      ...K
    })
  });
var W = n.memo(function(e) {
  let {
    message: t,
    guildId: a,
    feedItemId: s,
    disableTruncation: d
  } = e, u = t.attachments.length > 0, [o, c] = n.useState(!1), [f, m] = (0, G.default)(a, s);
  return (0, l.jsx)(V, {
    ref: e => {
      null != e && !d && c(e.scrollHeight > e.clientHeight)
    },
    contentClassName: i({
      [w.clampLarge]: !d && !f && !u,
      [w.clampSmall]: !d && !f && u
    }),
    ...e,
    children: o && !f ? (0, l.jsx)(r.Clickable, {
      className: w.showMore,
      onClick: e => m(e, t),
      "aria-hidden": !0,
      children: U.default.Messages.GUILD_FEED_TRUNCATED_MESSAGE_SEE_MORE
    }) : null
  })
})