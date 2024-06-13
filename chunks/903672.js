"use strict";
n.r(t), n.d(t, {
  default: function() {
    return P
  }
});
var s = n("735250"),
  a = n("470079"),
  l = n("442837"),
  i = n("524437"),
  r = n("481060"),
  o = n("235820"),
  u = n("494404"),
  d = n("110924"),
  c = n("796798"),
  f = n("198620"),
  E = n("294218"),
  _ = n("695346"),
  T = n("592125"),
  m = n("731290"),
  I = n("944486"),
  N = n("36082"),
  p = n("465670"),
  h = n("455199"),
  S = n("655354"),
  C = n("999671"),
  A = n("324081"),
  g = n("240126"),
  M = n("791914"),
  R = n("981631"),
  O = n("689938"),
  v = n("705332");
let x = {
  offset: {
    left: 4,
    right: -12
  }
};

function L(e, t, n) {
  let s = t ? h.default.guildFilter : null,
    a = t ? h.default.roleFilter : null,
    l = t ? h.default.everyoneFilter : null,
    i = null;
  null != e && null != s && (i = s === R.RecentMentionsFilters.ALL_SERVERS ? null : e.getGuildId()), o.default.fetchRecentMentions(n, R.MAX_MENTIONS_PER_FETCH, i, a, l)
}

function P(e) {
  let {
    setTab: t,
    onJump: n,
    badgeState: r,
    closePopout: E
  } = e, _ = (0, l.useStateFromStores)([T.default, I.default], () => T.default.getChannel(I.default.getChannelId())), {
    messages: m,
    hasMore: N,
    loading: p,
    guildFilter: S,
    roleFilter: A,
    everyoneFilter: g
  } = (0, l.useStateFromStoresObject)([h.default], () => ({
    messages: h.default.getMentions(),
    hasMore: h.default.hasMore,
    loading: h.default.loading,
    guildFilter: h.default.guildFilter,
    roleFilter: h.default.roleFilter,
    everyoneFilter: h.default.everyoneFilter
  })), x = (0, d.default)(S), P = (0, d.default)(A), D = (0, d.default)(g);
  a.useEffect(() => {
    if (!h.default.hasLoadedEver) {
      L(_, !0);
      return
    }(null != x && S !== x || null != P && A !== P || null != D && g !== D) && L(_, !0)
  }, [x, S, P, A, D, g, _, !0]);
  a.useEffect(() => {
    c.AttachmentLinkRefreshExperiment.getCurrentConfig({
      location: "mentions"
    }).enabled && (null == m ? void 0 : m.some(f.messageHasExpiredAttachmentUrl)) && (o.default.clearMentions(), L(_, !0))
  }, []), a.useEffect(() => () => {
    o.default.truncateMentions(R.MAX_MENTIONS_PER_FETCH)
  }, []);
  let U = a.useCallback(() => (0, s.jsx)(M.default, {
    tab: i.InboxTab.MENTIONS,
    setTab: t,
    badgeState: r,
    closePopout: E,
    children: (0, s.jsx)(C.default, {})
  }), [!0, t, r, E]);
  return (0, s.jsx)(s.Fragment, {
    children: (0, s.jsx)(u.default, {
      className: v.recentMentionsPopout,
      scrollerClassName: v.scroller,
      onFetch: () => null,
      onJump: n,
      onCloseMessage: function(e) {
        o.default.deleteRecentMention(e.id)
      },
      channel: _,
      messages: m,
      loading: p,
      hasMore: N,
      analyticsName: "Recent Mentions",
      loadMore: function() {
        L(_, !0, null != m && m.length > 0 ? m[m.length - 1].id : null)
      },
      canCloseAllMessages: !0,
      renderHeader: U,
      renderEmptyState: j,
      renderMessage: y,
      "aria-label": O.default.Messages.RECENT_MENTIONS,
      listName: "recents"
    })
  })
}

function D(e, t) {
  return [(0, s.jsx)(U, {
    message: e,
    gotoMessage: t
  }, e.id)]
}

function y(e, t) {
  return [(0, s.jsx)(U, {
    message: e,
    gotoMessage: t,
    dismissible: !0
  }, e.id)]
}

function U(e) {
  let {
    message: t,
    gotoMessage: n,
    dismissible: a
  } = e;
  if (null == t) return null;
  let l = T.default.getChannel(t.channel_id);
  if (null == l) return null;
  let i = m.default.didAgree(l.getGuildId()),
    u = !!l.isNSFW() && !i;
  return (0, s.jsxs)("div", {
    className: v.container,
    children: [(0, s.jsx)(A.default, {
      channel: l,
      gotoChannel: n,
      children: null != a ? (0, s.jsx)(r.CircleIconButton, {
        className: v.closeButton,
        tooltip: O.default.Messages.CLOSE,
        color: r.CircleIconButtonColors.TERTIARY,
        icon: (0, s.jsx)(p.default, {
          width: 16,
          height: 16
        }),
        onClick: () => o.default.deleteRecentMention(t.id)
      }) : null
    }), (0, s.jsxs)("div", {
      className: v.messageContainer,
      children: [(0, s.jsx)(S.default, {
        className: v.jumpButton,
        onJump: n
      }), (0, s.jsx)(E.default, {
        message: t,
        channel: l,
        className: v.message,
        hideAccessories: u,
        compact: _.MessageDisplayCompact.getSetting(),
        animateAvatar: !1,
        focusProps: x,
        trackAnnouncementViews: !0
      }, t.id)]
    })]
  })
}

function j(e) {
  return (0, s.jsx)(g.default, {
    Icon: N.default,
    header: O.default.Messages.RECENT_MENTIONS_EMPTY_STATE_HEADER,
    tip: O.default.Messages.RECENT_MENTIONS_EMPTY_STATE_TIP
  })
}