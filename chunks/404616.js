"use strict";
i.r(t), i.d(t, {
  DefaultReaction: function() {
    return er
  },
  Facepile: function() {
    return ec
  },
  MAX_THUMBNAIL_HEIGHT: function() {
    return et
  },
  MAX_THUMBNAIL_WIDTH: function() {
    return ei
  },
  MessageCount: function() {
    return eo
  },
  MostUsedReaction: function() {
    return eu
  },
  useHighlightedChannelName: function() {
    return ea
  }
}), i("47120");
var n = i("735250"),
  a = i("470079"),
  s = i("120356"),
  l = i.n(s),
  o = i("512722"),
  r = i.n(o),
  u = i("913527"),
  d = i.n(u),
  c = i("924826"),
  h = i("442837"),
  m = i("692547"),
  f = i("481060"),
  p = i("738619"),
  g = i("393238"),
  T = i("963374"),
  S = i("118139"),
  v = i("169525"),
  E = i("566006"),
  R = i("255269"),
  I = i("937889"),
  N = i("443877"),
  C = i("524444"),
  _ = i("287151"),
  x = i("695346"),
  O = i("433355"),
  j = i("592125"),
  A = i("496675"),
  M = i("699516"),
  b = i("451478"),
  y = i("18732"),
  L = i("68588"),
  P = i("974029"),
  U = i("512665"),
  w = i("602623"),
  F = i("55935"),
  D = i("109434"),
  B = i("456269"),
  k = i("109590"),
  H = i("660189"),
  V = i("208970"),
  G = i("73315"),
  z = i("470623"),
  W = i("196255"),
  K = i("858543"),
  J = i("265641"),
  Y = i("627896"),
  Z = i("883728"),
  X = i("981631"),
  q = i("768760"),
  Q = i("689938"),
  $ = i("861186"),
  ee = i("946278");
let et = 72,
  ei = 72;
t.default = a.memo(function(e) {
  let {
    threadId: t,
    goToThread: i,
    observePostVisibilityAnalytics: s,
    overrideMedia: o,
    className: u,
    containerWidth: d
  } = e, {
    channel: m,
    isOpen: p,
    messageCount: T,
    firstMessage: S,
    content: v,
    media: E
  } = function(e) {
    let {
      threadId: t,
      overrideMedia: i
    } = e, n = (0, h.useStateFromStores)([j.default], () => j.default.getChannel(t));
    r()(null != n, "the thread should not be null here, a store must have missed an update");
    let a = (0, h.useStateFromStores)([O.default], () => O.default.getCurrentSidebarChannelId(n.parent_id) === n.id),
      {
        firstMessage: s
      } = (0, k.useFirstForumPostMessage)(n),
      {
        content: l,
        firstMedia: o
      } = (0, B.useForumPostFirstMessageMarkup)({
        firstMessage: s
      }),
      {
        messageCountText: u
      } = (0, B.useMessageCount)(n);
    return {
      channel: n,
      isOpen: a,
      messageCount: u,
      firstMessage: s,
      content: l,
      media: null != i ? i : o
    }
  }({
    threadId: t,
    overrideMedia: o
  }), {
    ref: R,
    height: I
  } = (0, g.default)(), N = (0, z.useForumPostComposerStore)(e => e.setCardHeight);
  a.useEffect(() => {
    null != I && N(t, I)
  }, [I, N, t]), a.useEffect(() => {
    null == s || s(R.current, t)
  }, [R, s, t]);
  let C = a.useRef(null),
    {
      handleLeftClick: _,
      handleRightClick: x
    } = (0, Z.default)({
      facepileRef: C,
      goToThread: i,
      channel: m
    }),
    {
      role: A,
      onFocus: M,
      ...b
    } = (0, c.useListItem)(t),
    {
      isFocused: y,
      handleFocus: L,
      handleBlur: P
    } = (0, J.default)(M);
  return (0, n.jsxs)("div", {
    ref: R,
    "data-item-id": t,
    onClick: _,
    onContextMenu: x,
    className: l()($.container, u, {
      [$.isOpen]: p
    }),
    children: [(0, n.jsx)(f.Clickable, {
      onClick: _,
      focusProps: {
        ringTarget: R
      },
      onContextMenu: x,
      "aria-label": Q.default.Messages.FORUM_POST_ARIA_LABEL.format({
        title: m.name,
        count: T
      }),
      className: $.focusTarget,
      onFocus: L,
      onBlur: P,
      ...b
    }), (0, n.jsxs)("div", {
      className: $.left,
      children: [(0, n.jsx)(f.HeadingLevel, {
        children: (0, n.jsx)(en, {
          channel: m,
          firstMessage: S,
          content: v,
          hasMediaAttachment: null != E,
          containerWidth: d
        })
      }), (0, n.jsx)(f.FocusBlock, {
        enabled: !y,
        children: (0, n.jsx)(el, {
          channel: m,
          firstMessage: S,
          facepileRef: C
        })
      })]
    }), (null == S ? void 0 : S.blocked) || null == E ? null : (0, n.jsx)(eh, {
      channel: m,
      firstMedia: E
    })]
  })
});

function en(e) {
  let {
    channel: t,
    firstMessage: i,
    content: a,
    hasMediaAttachment: s,
    containerWidth: o
  } = e, {
    isNew: r,
    hasUnreads: u
  } = (0, B.useForumPostReadStates)(t), d = ea(t), {
    postTitleRef: c,
    isNewBadgeOverflow: h
  } = (0, Y.useNewBadgeOverflowAware)(r, 24, o);
  return (0, n.jsxs)("div", {
    className: $.body,
    children: [(0, n.jsx)(K.default, {
      channel: t
    }), (0, n.jsx)("div", {
      className: l()($.header, {
        [$.withNewBadgeOverflow]: h
      }),
      children: (0, n.jsxs)("div", {
        className: $.headerText,
        children: [(0, n.jsx)(f.Heading, {
          variant: "heading-lg/semibold",
          color: u ? "header-primary" : "text-muted",
          lineClamp: 2,
          className: $.postTitleText,
          children: (0, n.jsxs)("span", {
            ref: c,
            children: [d, r && (0, n.jsx)("span", {
              className: $.newBadgeWrapper,
              children: (0, n.jsx)(f.TextBadge, {
                className: $.newBadge,
                color: m.default.unsafe_rawColors.BRAND_260.css,
                text: Q.default.Messages.NEW
              })
            })]
          })
        }), r && h && (0, n.jsx)(f.TextBadge, {
          className: $.newBadge,
          color: m.default.unsafe_rawColors.BRAND_260.css,
          text: Q.default.Messages.NEW
        })]
      })
    }), (0, n.jsx)("div", {
      className: $.message,
      children: (0, n.jsx)(es, {
        channel: t,
        message: i,
        content: a,
        hasMediaAttachment: s,
        hasUnreads: u
      })
    })]
  })
}

function ea(e) {
  let t = (0, h.useStateFromStores)([V.default], () => V.default.getHasSearchResults(e.parent_id)),
    i = (0, h.useStateFromStores)([V.default], () => V.default.getSearchQuery(e.parent_id)),
    n = a.useMemo(() => (0, T.createASTHighlighter)(t && null != i ? i : ""), [t, i]);
  return a.useMemo(() => (0, I.default)({
    content: e.name,
    embeds: []
  }, {
    postProcessor: n
  }).content, [e.name, n])
}
let es = a.memo(function(e) {
  let {
    message: t,
    channel: i,
    content: a,
    hasMediaAttachment: s,
    hasUnreads: o
  } = e, r = (0, h.useStateFromStores)([M.default], () => null != t && M.default.isBlocked(t.author.id)), u = (0, h.useStateFromStores)([H.default], () => H.default.isLoading(i.id)), d = (0, h.useStateFromStores)([A.default], () => A.default.can(X.Permissions.MANAGE_MESSAGES, i)), c = x.RenderSpoilers.useSetting(), m = null;
  if (r) m = (0, n.jsx)(f.Text, {
    className: $.blockedMessage,
    variant: "text-sm/medium",
    color: "text-muted",
    children: Q.default.Messages.FORUM_POST_BLOCKED_FIRST_MESSAGE
  });
  else {
    let {
      contentPlaceholder: e,
      renderedContent: i
    } = null == t ? {
      contentPlaceholder: null,
      renderedContent: null
    } : (0, U.renderSingleLineMessage)(t, a, r, l()($.messageContent, ee.inlineFormat, ee.__invalid_smallFontSize), {
      leadingIconClass: $.messageContentLeadingIcon,
      trailingIconClass: $.messageContentTrailingIcon,
      iconSize: q.SINGLE_LINE_MESSAGE_DEFAULT_ICON_SIZE
    });
    m = null != i ? (0, n.jsx)(f.Text, {
      variant: "text-sm/semibold",
      color: o ? "header-secondary" : "text-muted",
      children: i
    }) : s ? null : (0, n.jsx)(f.Text, {
      tag: "span",
      variant: "text-sm/medium",
      color: o ? "header-secondary" : "text-muted",
      className: $.messageContent,
      children: null == t ? u ? null : Q.default.Messages.REPLY_QUOTE_MESSAGE_DELETED : e
    })
  }
  return (0, n.jsxs)(L.ObscuredDisplayContext.Provider, {
    value: (0, R.default)(c, d),
    children: [!r && (0, n.jsx)(W.default, {
      channel: i,
      message: t,
      renderColon: null != m,
      hasUnreads: o
    }), (0, n.jsx)(f.FocusBlock, {
      className: $.messageFocusBlock,
      children: m
    })]
  })
});

function el(e) {
  let {
    channel: t,
    facepileRef: i,
    firstMessage: a
  } = e, s = (0, B.useTypingUserIds)(t), l = (null == a ? void 0 : a.reactions) != null && a.reactions.length > 0;
  return (0, n.jsxs)("div", {
    className: $.footer,
    children: [l || null == a ? null : (0, n.jsx)(er, {
      firstMessage: a,
      channel: t
    }), null == a ? null : (0, n.jsx)(eu, {
      firstMessage: a,
      channel: t
    }), (0, n.jsx)(eo, {
      channel: t,
      iconSize: 14
    }), (0, n.jsx)("span", {
      className: $.bullet,
      children: "•"
    }), s.length > 0 ? (0, n.jsxs)("div", {
      className: $.typing,
      children: [(0, n.jsx)(ec, {
        channel: t,
        userIds: s,
        facepileRef: i
      }), (0, n.jsx)("div", {
        className: $.dots,
        children: (0, n.jsx)(f.Dots, {
          themed: !0,
          dotRadius: 2
        })
      }), (0, n.jsx)(p.default, {
        channel: t,
        className: $.typingUsers,
        renderDots: !1
      })]
    }) : (0, n.jsx)(ed, {
      channel: t
    })]
  })
}

function eo(e) {
  let {
    channel: t,
    iconSize: i,
    showReadState: a = !1
  } = e, {
    messageCountText: s,
    unreadCount: o
  } = (0, B.useMessageCount)(t);
  return (0, n.jsxs)("div", {
    className: l()($.messageCountBox, {
      [$.hasRead]: a && null == o
    }),
    children: [(0, n.jsx)("span", {
      className: $.messageCountIcon,
      children: (0, n.jsx)(P.default, {
        width: i,
        height: i
      })
    }), "number" == typeof s ? (0, n.jsx)(y.default, {
      value: s,
      digitWidth: 9,
      className: $.messageCountText
    }) : (0, n.jsx)("div", {
      className: $.messageCountText,
      children: s
    }), null == o ? null : (0, n.jsxs)(f.Text, {
      className: $.newMessageCount,
      variant: "text-sm/semibold",
      color: "text-brand",
      children: ["(", Q.default.Messages.FORUM_POST_MESSAGE_COUNT_SHORT.format({
        count: o
      }), ")"]
    })]
  })
}

function er(e) {
  let {
    firstMessage: t,
    channel: i
  } = e, a = (0, h.useStateFromStores)([j.default], () => j.default.getChannel(i.parent_id)), s = (0, B.useDefaultReactionEmoji)(a), {
    disableReactionCreates: l,
    isLurking: o,
    isPendingMember: r
  } = (0, N.default)(i);
  return null == s || l ? null : (0, n.jsx)(_.Reaction, {
    className: $.updateReactionButton,
    message: t,
    readOnly: i.isArchivedLockedThread(),
    useChatFontScaling: !1,
    isLurking: o,
    isPendingMember: r,
    emoji: s,
    hideCount: !0,
    count: 0,
    burst_count: 0,
    me: !1,
    me_burst: !1,
    type: E.ReactionTypes.NORMAL,
    emojiSize: "reaction"
  })
}

function eu(e) {
  var t;
  let {
    firstMessage: i,
    channel: a
  } = e, s = (0, B.useMostUsedReaction)(i), {
    disableReactionUpdates: l,
    isLurking: o,
    isPendingMember: r
  } = (0, N.default)(a);
  return null == s ? null : (0, n.jsx)(_.Reaction, {
    className: $.updateReactionButton,
    message: i,
    readOnly: l || a.isArchivedLockedThread(),
    isLurking: o,
    isPendingMember: r,
    useChatFontScaling: !1,
    type: s.burst_count >= s.count ? E.ReactionTypes.BURST : E.ReactionTypes.NORMAL,
    emojiSize: "reaction",
    ...s
  }, "".concat(null !== (t = s.emoji.id) && void 0 !== t ? t : 0, ":").concat(s.emoji.name))
}

function ed(e) {
  var t;
  let {
    channel: i
  } = e, {
    sortOrder: a
  } = (0, D.useForumChannelStore)(i.parent_id), s = (0, B.useLastActiveTimestamp)(i, a), l = null === (t = i.threadMetadata) || void 0 === t ? void 0 : t.createTimestamp, o = null == l ? null : Q.default.Messages.FORUM_POST_CREATED_AT_TOOLTIP.format({
    timestamp: (0, F.dateFormat)(d()(l), "LLLL")
  });
  return (0, n.jsx)(f.Tooltip, {
    text: o,
    tooltipClassName: $.timestampTooltip,
    children: e => (0, n.jsx)(f.Text, {
      className: $.__invalid_activityText,
      variant: "text-sm/normal",
      color: "header-secondary",
      ...e,
      children: s
    })
  })
}

function ec(e) {
  let {
    channel: t,
    userIds: i,
    facepileRef: a
  } = e, s = (0, B.useFacepileUsers)(t, i);
  return (0, n.jsx)("div", {
    ref: a,
    children: (0, n.jsx)(w.default, {
      className: $.__invalid_facepile,
      showDefaultAvatarsForNullUsers: !0,
      guildId: t.guild_id,
      users: s,
      max: 5,
      size: 16,
      hideMoreUsers: !0,
      showUserPopout: !0
    })
  })
}

function eh(e) {
  let t, i, {
      channel: a,
      firstMedia: s
    } = e,
    o = (0, h.useStateFromStores)([b.default], () => b.default.isFocused()),
    r = (0, S.isAnimatedImageUrl)(s.src),
    u = x.GifAutoPlay.useSetting(),
    [d, c] = (0, v.useShouldObscure)({
      media: s,
      channel: a
    }),
    m = (0, v.getObscuredAlt)(c),
    {
      src: p,
      width: g,
      height: T,
      alt: E
    } = s;
  return T > g ? i = ei : t = et, (0, n.jsx)(f.FocusBlock, {
    enabled: !0,
    children: (0, n.jsxs)("div", {
      className: $.bodyMedia,
      onClick: e => e.stopPropagation(),
      children: [p.startsWith("data:") ? (0, n.jsx)(f.Image, {
        src: p,
        maxHeight: t,
        maxWidth: i,
        width: g,
        height: T,
        alt: null != E && d ? m : E,
        className: $.thumbnailContainer,
        imageClassName: l()({
          [$.obscured]: d,
          [$.thumbnailOverride]: !0
        })
      }) : (0, C.renderImageComponent)({
        src: p,
        maxHeight: t,
        maxWidth: i,
        width: g,
        height: T,
        alt: null != E && d ? m : E,
        autoPlay: u,
        animated: r && !d && o,
        containerClassName: $.thumbnailContainer,
        imageClassName: l()({
          [$.obscured]: d
        })
      }), d && (0, n.jsx)(G.default, {
        iconClassname: $.obscuredTag,
        obscureReason: c
      })]
    })
  })
}