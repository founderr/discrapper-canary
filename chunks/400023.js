n(47120);
var l = n(735250),
  i = n(470079),
  s = n(120356),
  a = n.n(s),
  r = n(91192),
  o = n(442837),
  c = n(481060),
  u = n(904245),
  d = n(902840),
  h = n(607070),
  m = n(580747),
  p = n(135938),
  E = n(160404),
  g = n(765104),
  f = n(695346),
  C = n(314897),
  _ = n(323873),
  I = n(607744),
  x = n(375954),
  T = n(496675),
  N = n(306680),
  Z = n(62817),
  S = n(594174),
  v = n(68588),
  A = n(459273),
  M = n(255269),
  R = n(47481),
  j = n(977391),
  L = n(73274),
  O = n(419388),
  P = n(406534),
  y = n(981631),
  b = n(689938),
  D = n(601621);
let U = i.memo(function(e) {
  var t, n;
  let {
    className: s,
    messageGroupSpacing: d,
    scrollerClassName: m,
    channel: p,
    messages: g,
    unreadCount: f,
    showNewMessagesBar: C,
    messageDisplayCompact: _,
    channelStream: I,
    uploads: x,
    hasUnreads: N,
    editingMessageId: Z,
    fontSize: S,
    keyboardModeEnabled: v,
    filterAfterTimestamp: M,
    showingQuarantineBanner: R,
    hideSummaries: U = !1
  } = e, [k, w] = i.useState(!1), H = i.useMemo(() => _ ? (0, j.aJ)({
    compact: !0,
    messageGroups: 30,
    groupRange: 4,
    attachments: 8,
    fontSize: S,
    groupSpacing: d
  }) : (0, j.aJ)({
    compact: !1,
    messageGroups: 26,
    groupRange: 4,
    attachments: 8,
    fontSize: S,
    groupSpacing: d
  }), [_, S, d]), B = (0, O.ZP)({
    messages: g,
    channel: p,
    compact: _,
    hasUnreads: N,
    focusId: Z,
    placeholderHeight: H.totalHeight,
    canLoadMore: null == M,
    handleScrollToBottom: i.useCallback(() => w(!0), [w]),
    handleScrollFromBottom: i.useCallback(() => w(!1), [w])
  }), G = (0, L.Z)({
    scrollerRef: B.ref,
    isEditing: null != Z,
    keyboardModeEnabled: v,
    hasMoreAfter: g.hasMoreAfter
  });
  let V = (n = p, (0, o.e7)([E.Z], () => T.Z.can(y.Plq.READ_MESSAGE_HISTORY, n) ? null : E.Z.getViewingRolesTimestamp(n.getGuildId()))),
    {
      channelStreamMarkup: F,
      newMessagesBar: z,
      jumpToPresentBar: W,
      forumPostActionBar: Y,
      safetyWarningBanner: K
    } = (0, P.Z)({
      channel: p,
      messages: g,
      unreadCount: f,
      showNewMessagesBar: C,
      messageDisplayCompact: _,
      channelStream: I,
      uploads: x,
      loadMore: B.loadMore,
      scrollManager: B,
      specs: H,
      filterAfterTimestamp: null != M ? M : V,
      showingQuarantineBanner: R,
      hideSummaries: U,
      isAtBottom: k,
      jumpToPresent: () => {
        if (g.hasPresent()) {
          var e;
          null === (e = B.ref.current) || void 0 === e || e.scrollToBottom({
            animate: !h.Z.useReducedMotion
          })
        } else u.Z.jumpToPresent(p.id, y.AQB)
      }
    });
  ! function(e) {
    let t = i.useCallback(() => {
        var t;
        return null === (t = e.current) || void 0 === t ? void 0 : t.scrollToBottom()
      }, [e]),
      n = i.useCallback(() => {
        var t;
        return null === (t = e.current) || void 0 === t ? void 0 : t.scrollPageUp({
          animate: !h.Z.useReducedMotion
        })
      }, [e]),
      l = i.useCallback(() => {
        var t;
        return null === (t = e.current) || void 0 === t ? void 0 : t.scrollPageDown({
          animate: !h.Z.useReducedMotion
        })
      }, [e]);
    (0, A.yp)({
      event: y.CkL.SCROLLTO_PRESENT,
      handler: t
    }), (0, A.yp)({
      event: y.CkL.SCROLL_PAGE_UP,
      handler: n
    }), (0, A.yp)({
      event: y.CkL.SCROLL_PAGE_DOWN,
      handler: l
    })
  }(B.ref);
  let q = (0, c.useFocusJumpSection)(),
    {
      ref: X,
      ...Q
    } = (0, r.l2)(G),
    J = i.useCallback(e => {
      var t;
      B.ref.current = e, X.current = null !== (t = null == e ? void 0 : e.getScrollerNode()) && void 0 !== t ? t : null
    }, []);
  return (0, l.jsxs)(r.bG, {
    navigator: G,
    children: [null != K && K, (0, l.jsxs)("div", {
      className: a()(D.messagesWrapper, s, "group-spacing-".concat(d)),
      children: [null == K && z, (0, l.jsxs)(c.PinToBottomScrollerAuto, {
        ref: J,
        customTheme: !0,
        className: a()(m, D.scroller),
        contentClassName: D.scrollerContent,
        onResize: B.handleResize,
        onScroll: B.handleScroll,
        onMouseDown: B.handleMouseDown,
        onMouseUp: B.handleMouseUp,
        ...q,
        tabIndex: -1,
        role: "group",
        children: [Y, (0, l.jsxs)("ol", {
          className: D.scrollerInner,
          "aria-label": b.Z.Messages.CHANNEL_MESSAGES_A11Y_LABEL.format({
            channelName: p.name
          }),
          ...Q,
          children: [(0, l.jsx)("span", {
            className: D.navigationDescription,
            id: "messagesNavigationDescription",
            "aria-hidden": !0,
            children: b.Z.Messages.CHANNEL_MESSAGES_A11Y_DESCRIPTION
          }), F, (0, l.jsx)("div", {
            className: a()({
              [D.scrollerSpacer]: !R,
              [D.empty]: 0 === g.length && !g.loadingMore,
              [D.emptyForum]: 1 === g.length && !g.loadingMore && p.isForumPost() && (null === (t = g.first()) || void 0 === t ? void 0 : t.isFirstMessageInForumPost(p))
            })
          })]
        })]
      }), W]
    })]
  })
}, (e, t) => null != e.isHidden && null != t.isHidden && e.isHidden && t.isHidden);
t.Z = i.memo(function(e) {
  let {
    channel: t,
    showingQuarantineBanner: n,
    hideSummaries: s = !1,
    forceCompact: a = !1,
    forceCozy: r = !1,
    ...c
  } = e, {
    canManageMessages: u,
    permissionVersion: E,
    canChat: A
  } = function(e) {
    let t = e.getGuildId(),
      n = (0, o.e7)([I.Z], () => null == t || I.Z.canChatInGuild(t), [t]),
      {
        canManageMessages: l,
        permissionVersion: i
      } = (0, o.cj)([T.Z], () => ({
        canManageMessages: T.Z.can(y.Plq.MANAGE_MESSAGES, e),
        permissionVersion: null != t ? T.Z.getGuildVersion(t) : null
      }), [e, t]);
    return {
      canChat: n,
      permissionVersion: i,
      canManageMessages: l
    }
  }(t), {
    messageGroupSpacing: j,
    fontSize: L,
    messageDisplayCompact: O,
    renderSpoilers: P,
    keyboardModeEnabled: b
  } = function() {
    let e = f.jU.useSetting(),
      t = f.cC.useSetting(),
      {
        messageGroupSpacing: n,
        fontSize: l,
        keyboardModeEnabled: i
      } = (0, o.cj)([h.Z], () => {
        let {
          messageGroupSpacing: e,
          fontSize: t,
          keyboardModeEnabled: n
        } = h.Z;
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
      fontSize: l,
      keyboardModeEnabled: i
    }
  }(), {
    messages: D,
    channelStream: k,
    oldestUnreadMessageId: w,
    editingMessageId: H
  } = function(e) {
    var t, n;
    let l = (0, o.e7)([x.Z], () => x.Z.getMessages(e.id), [e.id]),
      s = (0, o.e7)([N.ZP], () => {
        var t;
        return null !== (t = N.ZP.getOldestUnreadMessageId(e.id)) && void 0 !== t ? t : null
      }, [e.id]),
      {
        enabled: a
      } = p.Z.useExperiment({
        location: "41de6d_1"
      }, {
        autoTrackExposure: !1
      }),
      r = null !== (n = null === (t = S.default.getUser(C.default.getId())) || void 0 === t ? void 0 : t.hasFlag(y.xW$.SPAMMER)) && void 0 !== n && n,
      c = (0, d.ts)(e),
      u = (0, m.Z)("use_topic_dividers_in_chat"),
      h = (0, o.Wu)([g.Z], () => {
        var t;
        return c && u && null !== (t = g.Z.summaries(e.id)) && void 0 !== t ? t : []
      }, [c, e.id, u]),
      E = (0, o.e7)([g.Z], () => c ? g.Z.selectedSummary(e.id) : null, [c, e.id]),
      f = i.useMemo(() => (0, R.Z)({
        channel: e,
        messages: l,
        oldestUnreadMessageId: s,
        treatSpam: a && !r,
        summaries: h,
        selectedSummary: E
      }), [l, e, s, a, h, E]);
    return {
      messages: l,
      channelStream: f,
      oldestUnreadMessageId: s,
      editingMessageId: (0, o.e7)([_.Z], () => {
        var t;
        return null === (t = _.Z.getEditingMessage(e.id)) || void 0 === t ? void 0 : t.id
      })
    }
  }(t);
  return (0, l.jsx)(v.a.Provider, {
    value: (0, M.Z)(P, u),
    children: (0, l.jsx)(U, {
      ...c,
      messageGroupSpacing: j,
      showNewMessagesBar: !0,
      channel: t,
      messageDisplayCompact: !r && (a || O),
      messages: D,
      channelStream: k,
      permissionVersion: E,
      uploads: (0, o.e7)([Z.Z], () => Z.Z.getFiles(t.id), [t]),
      unreadCount: (0, o.e7)([N.ZP], () => N.ZP.getUnreadCount(t.id), [t]),
      hasUnreads: null != w,
      canChat: A,
      editingMessageId: H,
      fontSize: L,
      keyboardModeEnabled: b,
      showingQuarantineBanner: n,
      hideSummaries: s
    })
  })
})