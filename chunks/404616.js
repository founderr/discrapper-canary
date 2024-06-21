n.d(t, {
  Lp: function() {
    return ee
  },
  NN: function() {
    return ei
  },
  TJ: function() {
    return et
  },
  au: function() {
    return er
  },
  kZ: function() {
    return eo
  },
  m9: function() {
    return el
  },
  og: function() {
    return ec
  }
}), n(47120);
var i = n(735250),
  s = n(470079),
  a = n(120356),
  l = n.n(a),
  o = n(512722),
  r = n.n(o),
  u = n(913527),
  c = n.n(u),
  d = n(91192),
  h = n(442837),
  m = n(692547),
  p = n(481060),
  g = n(738619),
  T = n(393238),
  f = n(963374),
  v = n(406432),
  E = n(169525),
  I = n(566006),
  N = n(255269),
  x = n(937889),
  S = n(443877),
  C = n(524444),
  R = n(287151),
  Z = n(267128),
  _ = n(695346),
  O = n(433355),
  j = n(592125),
  A = n(496675),
  M = n(699516),
  b = n(451478),
  P = n(18732),
  L = n(68588),
  y = n(602623),
  U = n(55935),
  w = n(109434),
  k = n(456269),
  D = n(109590),
  B = n(660189),
  F = n(208970),
  V = n(73315),
  H = n(470623),
  G = n(196255),
  W = n(858543),
  z = n(265641),
  K = n(627896),
  Y = n(883728),
  J = n(981631),
  q = n(217702),
  X = n(689938),
  $ = n(804702),
  Q = n(25450);
let ee = 72,
  et = 72;
t.ZP = s.memo(function(e) {
  let {
    threadId: t,
    goToThread: n,
    observePostVisibilityAnalytics: a,
    overrideMedia: o,
    className: u,
    containerWidth: c
  } = e, {
    channel: m,
    isOpen: g,
    messageCount: f,
    firstMessage: v,
    content: E,
    media: I
  } = function(e) {
    let {
      threadId: t,
      overrideMedia: n
    } = e, i = (0, h.e7)([j.Z], () => j.Z.getChannel(t));
    r()(null != i, "the thread should not be null here, a store must have missed an update");
    let s = (0, h.e7)([O.ZP], () => O.ZP.getCurrentSidebarChannelId(i.parent_id) === i.id),
      {
        firstMessage: a
      } = (0, D.cl)(i),
      {
        content: l,
        firstMedia: o
      } = (0, k.mX)({
        firstMessage: a
      }),
      {
        messageCountText: u
      } = (0, k.nP)(i);
    return {
      channel: i,
      isOpen: s,
      messageCount: u,
      firstMessage: a,
      content: l,
      media: null != n ? n : o
    }
  }({
    threadId: t,
    overrideMedia: o
  }), {
    ref: N,
    height: x
  } = (0, T.Z)(), S = (0, H.xH)(e => e.setCardHeight);
  s.useEffect(() => {
    null != x && S(t, x)
  }, [x, S, t]), s.useEffect(() => {
    null == a || a(N.current, t)
  }, [N, a, t]);
  let C = s.useRef(null),
    {
      handleLeftClick: R,
      handleRightClick: Z
    } = (0, Y.Z)({
      facepileRef: C,
      goToThread: n,
      channel: m
    }),
    {
      role: _,
      onFocus: A,
      ...M
    } = (0, d.JA)(t),
    {
      isFocused: b,
      handleFocus: P,
      handleBlur: L
    } = (0, z.Z)(A);
  return (0, i.jsxs)("div", {
    ref: N,
    "data-item-id": t,
    onClick: R,
    onContextMenu: Z,
    className: l()($.container, u, {
      [$.isOpen]: g
    }),
    children: [(0, i.jsx)(p.Clickable, {
      onClick: R,
      focusProps: {
        ringTarget: N
      },
      onContextMenu: Z,
      "aria-label": X.Z.Messages.FORUM_POST_ARIA_LABEL.format({
        title: m.name,
        count: f
      }),
      className: $.focusTarget,
      onFocus: P,
      onBlur: L,
      ...M
    }), (0, i.jsxs)("div", {
      className: $.left,
      children: [(0, i.jsx)(p.HeadingLevel, {
        children: (0, i.jsx)(en, {
          channel: m,
          firstMessage: v,
          content: E,
          hasMediaAttachment: null != I,
          containerWidth: c
        })
      }), (0, i.jsx)(p.FocusBlock, {
        enabled: !b,
        children: (0, i.jsx)(ea, {
          channel: m,
          firstMessage: v,
          facepileRef: C
        })
      })]
    }), (null == v ? void 0 : v.blocked) || null == I ? null : (0, i.jsx)(ed, {
      channel: m,
      firstMedia: I
    })]
  })
});

function en(e) {
  let {
    channel: t,
    firstMessage: n,
    content: s,
    hasMediaAttachment: a,
    containerWidth: o
  } = e, {
    isNew: r,
    hasUnreads: u
  } = (0, k.J$)(t), c = ei(t), {
    postTitleRef: d,
    isNewBadgeOverflow: h
  } = (0, K.x)(r, 24, o);
  return (0, i.jsxs)("div", {
    className: $.body,
    children: [(0, i.jsx)(W.ZP, {
      channel: t
    }), (0, i.jsx)("div", {
      className: l()($.header, {
        [$.withNewBadgeOverflow]: h
      }),
      children: (0, i.jsxs)("div", {
        className: $.headerText,
        children: [(0, i.jsx)(p.Heading, {
          variant: "heading-lg/semibold",
          color: u ? "header-primary" : "text-muted",
          lineClamp: 2,
          className: $.postTitleText,
          children: (0, i.jsxs)("span", {
            ref: d,
            children: [c, r && (0, i.jsx)("span", {
              className: $.newBadgeWrapper,
              children: (0, i.jsx)(p.TextBadge, {
                className: $.newBadge,
                color: m.Z.unsafe_rawColors.BRAND_260.css,
                text: X.Z.Messages.NEW
              })
            })]
          })
        }), r && h && (0, i.jsx)(p.TextBadge, {
          className: $.newBadge,
          color: m.Z.unsafe_rawColors.BRAND_260.css,
          text: X.Z.Messages.NEW
        })]
      })
    }), (0, i.jsx)("div", {
      className: $.message,
      children: (0, i.jsx)(es, {
        channel: t,
        message: n,
        content: s,
        hasMediaAttachment: a,
        hasUnreads: u
      })
    })]
  })
}

function ei(e) {
  let t = (0, h.e7)([F.Z], () => F.Z.getHasSearchResults(e.parent_id)),
    n = (0, h.e7)([F.Z], () => F.Z.getSearchQuery(e.parent_id)),
    i = s.useMemo(() => (0, f.nC)(t && null != n ? n : ""), [t, n]);
  return s.useMemo(() => (0, x.ZP)({
    content: e.name,
    embeds: []
  }, {
    postProcessor: i
  }).content, [e.name, i])
}
let es = s.memo(function(e) {
  let {
    message: t,
    channel: n,
    content: s,
    hasMediaAttachment: a,
    hasUnreads: o
  } = e, r = (0, h.e7)([M.Z], () => null != t && M.Z.isBlockedForMessage(t)), u = (0, h.e7)([B.Z], () => B.Z.isLoading(n.id)), c = (0, h.e7)([A.Z], () => A.Z.can(J.Plq.MANAGE_MESSAGES, n)), d = _.cC.useSetting(), m = null;
  if (r) m = (0, i.jsx)(p.Text, {
    className: $.blockedMessage,
    variant: "text-sm/medium",
    color: "text-muted",
    children: X.Z.Messages.FORUM_POST_BLOCKED_FIRST_MESSAGE
  });
  else {
    let {
      contentPlaceholder: e,
      renderedContent: n
    } = null == t ? {
      contentPlaceholder: null,
      renderedContent: null
    } : (0, Z.f)(t, s, r, l()($.messageContent, Q.inlineFormat, Q.__invalid_smallFontSize), {
      leadingIconClass: $.messageContentLeadingIcon,
      trailingIconClass: $.messageContentTrailingIcon,
      iconSize: q.WW
    });
    m = null != n ? (0, i.jsx)(p.Text, {
      variant: "text-sm/semibold",
      color: o ? "header-secondary" : "text-muted",
      children: n
    }) : a ? null : (0, i.jsx)(p.Text, {
      tag: "span",
      variant: "text-sm/medium",
      color: o ? "header-secondary" : "text-muted",
      className: $.messageContent,
      children: null == t ? u ? null : X.Z.Messages.REPLY_QUOTE_MESSAGE_DELETED : e
    })
  }
  return (0, i.jsxs)(L.a.Provider, {
    value: (0, N.Z)(d, c),
    children: [!r && (0, i.jsx)(G.Z, {
      channel: n,
      message: t,
      renderColon: null != m,
      hasUnreads: o
    }), (0, i.jsx)(p.FocusBlock, {
      className: $.messageFocusBlock,
      children: m
    })]
  })
});

function ea(e) {
  let {
    channel: t,
    facepileRef: n,
    firstMessage: s
  } = e, a = (0, k.Q)(t), l = (null == s ? void 0 : s.reactions) != null && s.reactions.length > 0;
  return (0, i.jsxs)("div", {
    className: $.footer,
    children: [l || null == s ? null : (0, i.jsx)(eo, {
      firstMessage: s,
      channel: t
    }), null == s ? null : (0, i.jsx)(er, {
      firstMessage: s,
      channel: t
    }), (0, i.jsx)(el, {
      channel: t,
      iconSize: 14
    }), (0, i.jsx)("span", {
      className: $.bullet,
      children: "•"
    }), a.length > 0 ? (0, i.jsxs)("div", {
      className: $.typing,
      children: [(0, i.jsx)(ec, {
        channel: t,
        userIds: a,
        facepileRef: n
      }), (0, i.jsx)("div", {
        className: $.dots,
        children: (0, i.jsx)(p.Dots, {
          themed: !0,
          dotRadius: 2
        })
      }), (0, i.jsx)(g.Z, {
        channel: t,
        className: $.typingUsers,
        renderDots: !1
      })]
    }) : (0, i.jsx)(eu, {
      channel: t
    })]
  })
}

function el(e) {
  let {
    channel: t,
    iconSize: n,
    showReadState: s = !1
  } = e, {
    messageCountText: a,
    unreadCount: o
  } = (0, k.nP)(t);
  return (0, i.jsxs)("div", {
    className: l()($.messageCountBox, {
      [$.hasRead]: s && null == o
    }),
    children: [(0, i.jsx)("span", {
      className: $.messageCountIcon,
      children: (0, i.jsx)(p.ChatIcon, {
        size: "custom",
        color: "currentColor",
        width: n,
        height: n
      })
    }), "number" == typeof a ? (0, i.jsx)(P.Z, {
      value: a,
      digitWidth: 9,
      className: $.messageCountText
    }) : (0, i.jsx)("div", {
      className: $.messageCountText,
      children: a
    }), null == o ? null : (0, i.jsxs)(p.Text, {
      className: $.newMessageCount,
      variant: "text-sm/semibold",
      color: "text-brand",
      children: ["(", X.Z.Messages.FORUM_POST_MESSAGE_COUNT_SHORT.format({
        count: o
      }), ")"]
    })]
  })
}

function eo(e) {
  let {
    firstMessage: t,
    channel: n
  } = e, s = (0, h.e7)([j.Z], () => j.Z.getChannel(n.parent_id)), a = (0, k.Bs)(s), {
    disableReactionCreates: l,
    isLurking: o,
    isPendingMember: r
  } = (0, S.Z)(n);
  return null == a || l ? null : (0, i.jsx)(R.le, {
    className: $.updateReactionButton,
    message: t,
    readOnly: n.isArchivedLockedThread(),
    useChatFontScaling: !1,
    isLurking: o,
    isPendingMember: r,
    emoji: a,
    hideCount: !0,
    count: 0,
    burst_count: 0,
    me: !1,
    me_burst: !1,
    type: I.O.NORMAL,
    emojiSize: "reaction"
  })
}

function er(e) {
  var t;
  let {
    firstMessage: n,
    channel: s
  } = e, a = (0, k.IN)(n), {
    disableReactionUpdates: l,
    isLurking: o,
    isPendingMember: r
  } = (0, S.Z)(s);
  return null == a ? null : (0, i.jsx)(R.le, {
    className: $.updateReactionButton,
    message: n,
    readOnly: l || s.isArchivedLockedThread(),
    isLurking: o,
    isPendingMember: r,
    useChatFontScaling: !1,
    type: a.burst_count >= a.count ? I.O.BURST : I.O.NORMAL,
    emojiSize: "reaction",
    ...a
  }, "".concat(null !== (t = a.emoji.id) && void 0 !== t ? t : 0, ":").concat(a.emoji.name))
}

function eu(e) {
  var t;
  let {
    channel: n
  } = e, {
    sortOrder: s
  } = (0, w.H)(n.parent_id), a = (0, k.xw)(n, s), l = null === (t = n.threadMetadata) || void 0 === t ? void 0 : t.createTimestamp, o = null == l ? null : X.Z.Messages.FORUM_POST_CREATED_AT_TOOLTIP.format({
    timestamp: (0, U.vc)(c()(l), "LLLL")
  });
  return (0, i.jsx)(p.Tooltip, {
    text: o,
    tooltipClassName: $.timestampTooltip,
    children: e => (0, i.jsx)(p.Text, {
      className: $.__invalid_activityText,
      variant: "text-sm/normal",
      color: "header-secondary",
      ...e,
      children: a
    })
  })
}

function ec(e) {
  let {
    channel: t,
    userIds: n,
    facepileRef: s
  } = e, a = (0, k.iM)(t, n);
  return (0, i.jsx)("div", {
    ref: s,
    children: (0, i.jsx)(y.Z, {
      className: $.__invalid_facepile,
      showDefaultAvatarsForNullUsers: !0,
      guildId: t.guild_id,
      users: a,
      max: 5,
      size: 16,
      hideMoreUsers: !0,
      showUserPopout: !0
    })
  })
}

function ed(e) {
  let t, n, {
      channel: s,
      firstMedia: a
    } = e,
    o = (0, h.e7)([b.Z], () => b.Z.isFocused()),
    r = (0, v.d$)(a.src),
    u = _.QK.useSetting(),
    [c, d] = (0, E.hL)({
      media: a,
      channel: s
    }),
    m = (0, E.MC)(d),
    {
      src: g,
      width: T,
      height: f,
      alt: I
    } = a;
  return f > T ? n = et : t = ee, (0, i.jsx)(p.FocusBlock, {
    enabled: !0,
    children: (0, i.jsxs)("div", {
      className: $.bodyMedia,
      onClick: e => e.stopPropagation(),
      children: [g.startsWith("data:") ? (0, i.jsx)(p.Image, {
        src: g,
        maxHeight: t,
        maxWidth: n,
        width: T,
        height: f,
        alt: null != I && c ? m : I,
        className: $.thumbnailContainer,
        imageClassName: l()({
          [$.obscured]: c,
          [$.thumbnailOverride]: !0
        })
      }) : (0, C.Yi)({
        src: g,
        maxHeight: t,
        maxWidth: n,
        width: T,
        height: f,
        alt: null != I && c ? m : I,
        autoPlay: u,
        animated: r && !c && o,
        containerClassName: $.thumbnailContainer,
        imageClassName: l()({
          [$.obscured]: c
        }),
        renderForwardComponent: J.VqG
      }), c && (0, i.jsx)(V.Z, {
        iconClassname: $.obscuredTag,
        obscureReason: d
      })]
    })
  })
}