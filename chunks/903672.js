"use strict";
n.r(t), n.d(t, {
  default: function() {
    return b
  }
});
var a = n("735250"),
  l = n("470079"),
  s = n("442837"),
  i = n("524437"),
  r = n("235820"),
  o = n("494404"),
  u = n("110924"),
  d = n("796798"),
  c = n("198620"),
  f = n("294218"),
  h = n("695346"),
  E = n("592125"),
  m = n("731290"),
  p = n("944486"),
  S = n("836946"),
  g = n("36082"),
  _ = n("465670"),
  N = n("455199"),
  T = n("655354"),
  I = n("999671"),
  C = n("324081"),
  A = n("240126"),
  v = n("791914"),
  M = n("981631"),
  R = n("689938"),
  x = n("705332");
let L = {
  offset: {
    left: 4,
    right: -12
  }
};

function O(e, t, n) {
  let a = t ? N.default.guildFilter : null,
    l = t ? N.default.roleFilter : null,
    s = t ? N.default.everyoneFilter : null,
    i = null;
  null != e && null != a && (i = a === M.RecentMentionsFilters.ALL_SERVERS ? null : e.getGuildId()), r.default.fetchRecentMentions(n, M.MAX_MENTIONS_PER_FETCH, i, l, s)
}

function b(e) {
  let {
    setTab: t,
    onJump: n,
    badgeState: f,
    closePopout: h
  } = e, m = (0, s.useStateFromStores)([E.default, p.default], () => E.default.getChannel(p.default.getChannelId())), {
    messages: S,
    hasMore: g,
    loading: _,
    guildFilter: T,
    roleFilter: C,
    everyoneFilter: A
  } = (0, s.useStateFromStoresObject)([N.default], () => ({
    messages: N.default.getMentions(),
    hasMore: N.default.hasMore,
    loading: N.default.loading,
    guildFilter: N.default.guildFilter,
    roleFilter: N.default.roleFilter,
    everyoneFilter: N.default.everyoneFilter
  })), L = (0, u.default)(T), b = (0, u.default)(C), y = (0, u.default)(A);
  l.useEffect(() => {
    if (!N.default.hasLoadedEver) {
      O(m, !0);
      return
    }(null != L && T !== L || null != b && C !== b || null != y && A !== y) && O(m, !0)
  }, [L, T, b, C, y, A, m, !0]);
  l.useEffect(() => {
    d.AttachmentLinkRefreshExperiment.getCurrentConfig({
      location: "mentions"
    }).enabled && (null == S ? void 0 : S.some(c.messageHasExpiredAttachmentUrl)) && (r.default.clearMentions(), O(m, !0))
  }, []), l.useEffect(() => () => {
    r.default.truncateMentions(M.MAX_MENTIONS_PER_FETCH)
  }, []);
  let D = l.useCallback(() => (0, a.jsx)(v.default, {
    tab: i.InboxTab.MENTIONS,
    setTab: t,
    badgeState: f,
    closePopout: h,
    children: (0, a.jsx)(I.default, {})
  }), [!0, t, f, h]);
  return (0, a.jsx)(a.Fragment, {
    children: (0, a.jsx)(o.default, {
      className: x.recentMentionsPopout,
      scrollerClassName: x.scroller,
      onFetch: () => null,
      onJump: n,
      onCloseMessage: function(e) {
        r.default.deleteRecentMention(e.id)
      },
      channel: m,
      messages: S,
      loading: _,
      hasMore: g,
      analyticsName: "Recent Mentions",
      loadMore: function() {
        O(m, !0, null != S && S.length > 0 ? S[S.length - 1].id : null)
      },
      canCloseAllMessages: !0,
      renderHeader: D,
      renderEmptyState: j,
      renderMessage: F,
      "aria-label": R.default.Messages.RECENT_MENTIONS,
      listName: "recents"
    })
  })
}

function y(e, t) {
  return [(0, a.jsx)(D, {
    message: e,
    gotoMessage: t
  }, e.id)]
}

function F(e, t) {
  return [(0, a.jsx)(D, {
    message: e,
    gotoMessage: t,
    dismissible: !0
  }, e.id)]
}

function D(e) {
  let {
    message: t,
    gotoMessage: n,
    dismissible: l
  } = e;
  if (null == t) return null;
  let s = E.default.getChannel(t.channel_id);
  if (null == s) return null;
  let i = m.default.didAgree(s.getGuildId()),
    o = !!s.isNSFW() && !i;
  return (0, a.jsxs)("div", {
    className: x.container,
    children: [(0, a.jsx)(C.default, {
      channel: s,
      gotoChannel: n,
      children: null != l ? (0, a.jsx)(S.default, {
        className: x.closeButton,
        tooltip: R.default.Messages.CLOSE,
        color: S.CircleIconButtonColors.TERTIARY,
        icon: (0, a.jsx)(_.default, {
          width: 16,
          height: 16
        }),
        onClick: () => r.default.deleteRecentMention(t.id)
      }) : null
    }), (0, a.jsxs)("div", {
      className: x.messageContainer,
      children: [(0, a.jsx)(T.default, {
        className: x.jumpButton,
        onJump: n
      }), (0, a.jsx)(f.default, {
        message: t,
        channel: s,
        className: x.message,
        hideAccessories: o,
        compact: h.MessageDisplayCompact.getSetting(),
        animateAvatar: !1,
        focusProps: L,
        trackAnnouncementViews: !0
      }, t.id)]
    })]
  })
}

function j(e) {
  return (0, a.jsx)(A.default, {
    Icon: g.default,
    header: R.default.Messages.RECENT_MENTIONS_EMPTY_STATE_HEADER,
    tip: R.default.Messages.RECENT_MENTIONS_EMPTY_STATE_TIP
  })
}