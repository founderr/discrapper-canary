"use strict";
n.r(t), n.d(t, {
  default: function() {
    return D
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
  m = n("592125"),
  T = n("731290"),
  I = n("944486"),
  p = n("36082"),
  h = n("465670"),
  N = n("455199"),
  S = n("655354"),
  C = n("999671"),
  g = n("324081"),
  A = n("240126"),
  M = n("791914"),
  R = n("981631"),
  v = n("689938"),
  O = n("705332");
let x = {
  offset: {
    left: 4,
    right: -12
  }
};

function L(e, t, n) {
  let s = t ? N.default.guildFilter : null,
    a = t ? N.default.roleFilter : null,
    l = t ? N.default.everyoneFilter : null,
    i = null;
  null != e && null != s && (i = s === R.RecentMentionsFilters.ALL_SERVERS ? null : e.getGuildId()), o.default.fetchRecentMentions(n, R.MAX_MENTIONS_PER_FETCH, i, a, l)
}

function D(e) {
  let {
    setTab: t,
    onJump: n,
    badgeState: r,
    closePopout: E
  } = e, _ = (0, l.useStateFromStores)([m.default, I.default], () => m.default.getChannel(I.default.getChannelId())), {
    messages: T,
    hasMore: p,
    loading: h,
    guildFilter: S,
    roleFilter: g,
    everyoneFilter: A
  } = (0, l.useStateFromStoresObject)([N.default], () => ({
    messages: N.default.getMentions(),
    hasMore: N.default.hasMore,
    loading: N.default.loading,
    guildFilter: N.default.guildFilter,
    roleFilter: N.default.roleFilter,
    everyoneFilter: N.default.everyoneFilter
  })), x = (0, d.default)(S), D = (0, d.default)(g), P = (0, d.default)(A);
  a.useEffect(() => {
    if (!N.default.hasLoadedEver) {
      L(_, !0);
      return
    }(null != x && S !== x || null != D && g !== D || null != P && A !== P) && L(_, !0)
  }, [x, S, D, g, P, A, _, !0]);
  a.useEffect(() => {
    c.AttachmentLinkRefreshExperiment.getCurrentConfig({
      location: "mentions"
    }).enabled && (null == T ? void 0 : T.some(f.messageHasExpiredAttachmentUrl)) && (o.default.clearMentions(), L(_, !0))
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
      className: O.recentMentionsPopout,
      scrollerClassName: O.scroller,
      onFetch: () => null,
      onJump: n,
      onCloseMessage: function(e) {
        o.default.deleteRecentMention(e.id)
      },
      channel: _,
      messages: T,
      loading: h,
      hasMore: p,
      analyticsName: "Recent Mentions",
      loadMore: function() {
        L(_, !0, null != T && T.length > 0 ? T[T.length - 1].id : null)
      },
      canCloseAllMessages: !0,
      renderHeader: U,
      renderEmptyState: j,
      renderMessage: y,
      "aria-label": v.default.Messages.RECENT_MENTIONS,
      listName: "recents"
    })
  })
}

function P(e, t) {
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
  let l = m.default.getChannel(t.channel_id);
  if (null == l) return null;
  let i = T.default.didAgree(l.getGuildId()),
    u = !!l.isNSFW() && !i;
  return (0, s.jsxs)("div", {
    className: O.container,
    children: [(0, s.jsx)(g.default, {
      channel: l,
      gotoChannel: n,
      children: null != a ? (0, s.jsx)(r.CircleIconButton, {
        className: O.closeButton,
        tooltip: v.default.Messages.CLOSE,
        color: r.CircleIconButtonColors.TERTIARY,
        icon: (0, s.jsx)(h.default, {
          width: 16,
          height: 16
        }),
        onClick: () => o.default.deleteRecentMention(t.id)
      }) : null
    }), (0, s.jsxs)("div", {
      className: O.messageContainer,
      children: [(0, s.jsx)(S.default, {
        className: O.jumpButton,
        onJump: n
      }), (0, s.jsx)(E.default, {
        message: t,
        channel: l,
        className: O.message,
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
  return (0, s.jsx)(A.default, {
    Icon: p.default,
    header: v.default.Messages.RECENT_MENTIONS_EMPTY_STATE_HEADER,
    tip: v.default.Messages.RECENT_MENTIONS_EMPTY_STATE_TIP
  })
}