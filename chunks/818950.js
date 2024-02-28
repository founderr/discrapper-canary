"use strict";
n.r(t), n.d(t, {
  default: function() {
    return U
  }
}), n("222007");
var a = n("37983"),
  s = n("884691"),
  l = n("414456"),
  i = n.n(l),
  r = n("974667"),
  o = n("446674"),
  u = n("77078"),
  d = n("819689"),
  c = n("734575"),
  f = n("206230"),
  h = n("890503"),
  C = n("336696"),
  p = n("38654"),
  E = n("347738"),
  m = n("845579"),
  g = n("271938"),
  _ = n("836417"),
  S = n("88093"),
  T = n("377253"),
  A = n("957255"),
  M = n("660478"),
  I = n("462495"),
  N = n("697218"),
  v = n("505684"),
  L = n("378765"),
  R = n("70845"),
  y = n("51714"),
  x = n("88243"),
  O = n("31511"),
  D = n("120379"),
  P = n("221068"),
  j = n("49111"),
  b = n("782340"),
  F = n("430759");
let H = s.memo(function(e) {
  var t, n;
  let {
    className: l,
    messageGroupSpacing: c,
    scrollerClassName: h,
    channel: C,
    messages: E,
    unreadCount: m,
    showNewMessagesBar: g,
    messageDisplayCompact: _,
    channelStream: S,
    uploads: T,
    hasUnreads: M,
    editingMessageId: I,
    fontSize: N,
    keyboardModeEnabled: v,
    filterAfterTimestamp: R,
    showingQuarantineBanner: y
  } = e, [H, U] = s.useState(!1), k = s.useMemo(() => _ ? (0, x.generateMessageSpecs)({
    compact: !0,
    messageGroups: 30,
    groupRange: 4,
    attachments: 8,
    fontSize: N,
    groupSpacing: c
  }) : (0, x.generateMessageSpecs)({
    compact: !1,
    messageGroups: 26,
    groupRange: 4,
    attachments: 8,
    fontSize: N,
    groupSpacing: c
  }), [_, N, c]), G = (0, D.default)({
    messages: E,
    channel: C,
    compact: _,
    hasUnreads: M,
    focusId: I,
    placeholderHeight: k.totalHeight,
    canLoadMore: null == R,
    handleScrollToBottom: s.useCallback(() => U(!0), [U]),
    handleScrollFromBottom: s.useCallback(() => U(!1), [U])
  }), B = (0, O.default)({
    scrollerRef: G.ref,
    isEditing: null != I,
    keyboardModeEnabled: v,
    hasMoreAfter: E.hasMoreAfter
  });
  let w = (n = C, (0, o.useStateFromStores)([p.default], () => {
      let e = A.default.can(j.Permissions.READ_MESSAGE_HISTORY, n);
      return e ? null : p.default.getViewingRolesTimestamp(n.getGuildId())
    })),
    {
      channelStreamMarkup: V,
      newMessagesBar: W,
      jumpToPresentBar: Z,
      forumPostActionBar: z,
      safetyWarningBanner: Y
    } = (0, P.default)({
      channel: C,
      messages: E,
      unreadCount: m,
      showNewMessagesBar: g,
      messageDisplayCompact: _,
      channelStream: S,
      uploads: T,
      loadMore: G.loadMore,
      scrollManager: G,
      specs: k,
      filterAfterTimestamp: null != R ? R : w,
      showingQuarantineBanner: y,
      isAtBottom: H,
      jumpToPresent: () => {
        if (E.hasPresent()) {
          var e;
          null === (e = G.ref.current) || void 0 === e || e.scrollToBottom({
            animate: !f.default.useReducedMotion
          })
        } else d.default.jumpToPresent(C.id, j.MAX_MESSAGES_PER_CHANNEL)
      }
    });
  ! function(e) {
    let t = s.useCallback(() => {
        var t;
        return null === (t = e.current) || void 0 === t ? void 0 : t.scrollToBottom()
      }, [e]),
      n = s.useCallback(() => {
        var t;
        return null === (t = e.current) || void 0 === t ? void 0 : t.scrollPageUp({
          animate: !f.default.useReducedMotion
        })
      }, [e]),
      a = s.useCallback(() => {
        var t;
        return null === (t = e.current) || void 0 === t ? void 0 : t.scrollPageDown({
          animate: !f.default.useReducedMotion
        })
      }, [e]);
    (0, L.useComponentAction)({
      event: j.ComponentActions.SCROLLTO_PRESENT,
      handler: t
    }), (0, L.useComponentAction)({
      event: j.ComponentActions.SCROLL_PAGE_UP,
      handler: n
    }), (0, L.useComponentAction)({
      event: j.ComponentActions.SCROLL_PAGE_DOWN,
      handler: a
    })
  }(G.ref);
  let K = (0, u.useFocusJumpSection)(),
    {
      ref: q,
      ...X
    } = (0, r.getContainerPropsFromNavigator)(B),
    J = s.useCallback(e => {
      var t;
      G.ref.current = e, q.current = null !== (t = null == e ? void 0 : e.getScrollerNode()) && void 0 !== t ? t : null
    }, []);
  return (0, a.jsx)(r.ListNavigatorProvider, {
    navigator: B,
    children: (0, a.jsxs)("div", {
      className: i(F.messagesWrapper, l, "group-spacing-".concat(c)),
      children: [null != Y ? Y : W, (0, a.jsxs)(u.PinToBottomScrollerAuto, {
        ref: J,
        customTheme: !0,
        className: i(h, F.scroller),
        contentClassName: F.scrollerContent,
        onResize: G.handleResize,
        onScroll: G.handleScroll,
        onMouseDown: G.handleMouseDown,
        onMouseUp: G.handleMouseUp,
        ...K,
        tabIndex: -1,
        role: "group",
        children: [z, (0, a.jsxs)("ol", {
          className: F.scrollerInner,
          "aria-label": b.default.Messages.CHANNEL_MESSAGES_A11Y_LABEL.format({
            channelName: C.name
          }),
          ...X,
          children: [(0, a.jsx)("span", {
            className: F.navigationDescription,
            id: "messagesNavigationDescription",
            "aria-hidden": !0,
            children: b.default.Messages.CHANNEL_MESSAGES_A11Y_DESCRIPTION
          }), V, (0, a.jsx)("div", {
            className: i({
              [F.scrollerSpacer]: !y,
              [F.empty]: 0 === E.length && !E.loadingMore,
              [F.emptyForum]: 1 === E.length && !E.loadingMore && C.isForumPost() && (null === (t = E.first()) || void 0 === t ? void 0 : t.isFirstMessageInForumPost(C))
            })
          })]
        })]
      }), Z]
    })
  })
}, (e, t) => null != e.isHidden && null != t.isHidden && e.isHidden && t.isHidden);
var U = s.memo(function(e) {
  let {
    channel: t,
    showingQuarantineBanner: n,
    forceCompact: l = !1,
    forceCozy: i = !1,
    ...r
  } = e, {
    canManageMessages: u,
    permissionVersion: d,
    canChat: p
  } = function(e) {
    let t = e.getGuildId(),
      n = (0, o.useStateFromStores)([S.default], () => null == t || S.default.canChatInGuild(t), [t]),
      {
        canManageMessages: a,
        permissionVersion: s
      } = (0, o.useStateFromStoresObject)([A.default], () => ({
        canManageMessages: A.default.can(j.Permissions.MANAGE_MESSAGES, e),
        permissionVersion: null != t ? A.default.getGuildVersion(t) : null
      }), [e, t]);
    return {
      canChat: n,
      permissionVersion: s,
      canManageMessages: a
    }
  }(t), {
    messageGroupSpacing: L,
    fontSize: x,
    messageDisplayCompact: O,
    renderSpoilers: D,
    keyboardModeEnabled: P
  } = function() {
    let e = m.MessageDisplayCompact.useSetting(),
      t = m.RenderSpoilers.useSetting(),
      {
        messageGroupSpacing: n,
        fontSize: a,
        keyboardModeEnabled: s
      } = (0, o.useStateFromStoresObject)([f.default], () => {
        let {
          messageGroupSpacing: e,
          fontSize: t,
          keyboardModeEnabled: n
        } = f.default;
        return {
          messageGroupSpacing: e,
          fontSize: t,
          keyboardModeEnabled: n
        }
      });
    return {
      messageGroupSpacing: n,
      messageDisplayCompact: e,
      renderSpoilers: t,
      fontSize: a,
      keyboardModeEnabled: s
    }
  }(), {
    messages: b,
    channelStream: F,
    oldestUnreadMessageId: U,
    editingMessageId: k
  } = function(e) {
    var t, n;
    let a = (0, o.useStateFromStores)([T.default], () => T.default.getMessages(e.id), [e.id]),
      l = (0, o.useStateFromStores)([M.default], () => {
        var t;
        return null !== (t = M.default.getOldestUnreadMessageId(e.id)) && void 0 !== t ? t : null
      }, [e.id]),
      {
        enabled: i
      } = C.default.useExperiment({
        location: "41de6d_1"
      }, {
        autoTrackExposure: !1
      }),
      r = null !== (n = null === (t = N.default.getUser(g.default.getId())) || void 0 === t ? void 0 : t.hasFlag(j.UserFlags.SPAMMER)) && void 0 !== n && n,
      u = (0, c.useChannelSummariesExperiment)(e),
      d = (0, h.default)("use_topic_dividers_in_chat"),
      f = (0, o.useStateFromStoresArray)([E.default], () => {
        var t;
        return u && d && null !== (t = E.default.summaries(e.id)) && void 0 !== t ? t : []
      }, [u, e.id, d]),
      p = (0, o.useStateFromStores)([E.default], () => u ? E.default.selectedSummary(e.id) : null, [u, e.id]),
      m = s.useMemo(() => (0, y.default)({
        channel: e,
        messages: a,
        oldestUnreadMessageId: l,
        treatSpam: i && !r,
        summaries: f,
        selectedSummary: p
      }), [a, e, l, i, f, p]),
      S = (0, o.useStateFromStores)([_.default], () => {
        var t;
        return null === (t = _.default.getEditingMessage(e.id)) || void 0 === t ? void 0 : t.id
      });
    return {
      messages: a,
      channelStream: m,
      oldestUnreadMessageId: l,
      editingMessageId: S
    }
  }(t);
  return (0, a.jsx)(v.ObscuredDisplayContext.Provider, {
    value: (0, R.default)(D, u),
    children: (0, a.jsx)(H, {
      ...r,
      messageGroupSpacing: L,
      showNewMessagesBar: !0,
      channel: t,
      messageDisplayCompact: !i && (l || O),
      messages: b,
      channelStream: F,
      permissionVersion: d,
      uploads: (0, o.useStateFromStores)([I.default], () => I.default.getFiles(t.id), [t]),
      unreadCount: (0, o.useStateFromStores)([M.default], () => M.default.getUnreadCount(t.id), [t]),
      hasUnreads: null != U,
      canChat: p,
      editingMessageId: k,
      fontSize: x,
      keyboardModeEnabled: P,
      showingQuarantineBanner: n
    })
  })
})