"use strict";
n.r(t), n.d(t, {
  default: function() {
    return y
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
  N = n("465670"),
  _ = n("455199"),
  I = n("655354"),
  T = n("999671"),
  C = n("324081"),
  A = n("240126"),
  v = n("791914"),
  x = n("981631"),
  R = n("689938"),
  M = n("705332");
let b = {
  offset: {
    left: 4,
    right: -12
  }
};

function O(e, t, n) {
  let a = t ? _.default.guildFilter : null,
    l = t ? _.default.roleFilter : null,
    s = t ? _.default.everyoneFilter : null,
    i = null;
  null != e && null != a && (i = a === x.RecentMentionsFilters.ALL_SERVERS ? null : e.getGuildId()), r.default.fetchRecentMentions(n, x.MAX_MENTIONS_PER_FETCH, i, l, s)
}

function y(e) {
  let {
    setTab: t,
    onJump: n,
    badgeState: f,
    closePopout: h
  } = e, m = (0, s.useStateFromStores)([E.default, p.default], () => E.default.getChannel(p.default.getChannelId())), {
    messages: S,
    hasMore: g,
    loading: N,
    guildFilter: I,
    roleFilter: C,
    everyoneFilter: A
  } = (0, s.useStateFromStoresObject)([_.default], () => ({
    messages: _.default.getMentions(),
    hasMore: _.default.hasMore,
    loading: _.default.loading,
    guildFilter: _.default.guildFilter,
    roleFilter: _.default.roleFilter,
    everyoneFilter: _.default.everyoneFilter
  })), b = (0, u.default)(I), y = (0, u.default)(C), L = (0, u.default)(A);
  l.useEffect(() => {
    if (!_.default.hasLoadedEver) {
      O(m, !0);
      return
    }(null != b && I !== b || null != y && C !== y || null != L && A !== L) && O(m, !0)
  }, [b, I, y, C, L, A, m, !0]);
  l.useEffect(() => {
    d.AttachmentLinkRefreshExperiment.getCurrentConfig({
      location: "mentions"
    }).enabled && (null == S ? void 0 : S.some(c.messageHasExpiredAttachmentUrl)) && (r.default.clearMentions(), O(m, !0))
  }, []), l.useEffect(() => () => {
    r.default.truncateMentions(x.MAX_MENTIONS_PER_FETCH)
  }, []);
  let D = l.useCallback(() => (0, a.jsx)(v.default, {
    tab: i.InboxTab.MENTIONS,
    setTab: t,
    badgeState: f,
    closePopout: h,
    children: (0, a.jsx)(T.default, {})
  }), [!0, t, f, h]);
  return (0, a.jsx)(a.Fragment, {
    children: (0, a.jsx)(o.default, {
      className: M.recentMentionsPopout,
      scrollerClassName: M.scroller,
      onFetch: () => null,
      onJump: n,
      onCloseMessage: function(e) {
        r.default.deleteRecentMention(e.id)
      },
      channel: m,
      messages: S,
      loading: N,
      hasMore: g,
      analyticsName: "Recent Mentions",
      loadMore: function() {
        O(m, !0, null != S && S.length > 0 ? S[S.length - 1].id : null)
      },
      canCloseAllMessages: !0,
      renderHeader: D,
      renderEmptyState: F,
      renderMessage: j,
      "aria-label": R.default.Messages.RECENT_MENTIONS,
      listName: "recents"
    })
  })
}

function L(e, t) {
  return [(0, a.jsx)(D, {
    message: e,
    gotoMessage: t
  }, e.id)]
}

function j(e, t) {
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
    className: M.container,
    children: [(0, a.jsx)(C.default, {
      channel: s,
      gotoChannel: n,
      children: null != l ? (0, a.jsx)(S.default, {
        className: M.closeButton,
        tooltip: R.default.Messages.CLOSE,
        color: S.CircleIconButtonColors.TERTIARY,
        icon: (0, a.jsx)(N.default, {
          width: 16,
          height: 16
        }),
        onClick: () => r.default.deleteRecentMention(t.id)
      }) : null
    }), (0, a.jsxs)("div", {
      className: M.messageContainer,
      children: [(0, a.jsx)(I.default, {
        className: M.jumpButton,
        onJump: n
      }), (0, a.jsx)(f.default, {
        message: t,
        channel: s,
        className: M.message,
        hideAccessories: o,
        compact: h.MessageDisplayCompact.getSetting(),
        animateAvatar: !1,
        focusProps: b,
        trackAnnouncementViews: !0
      }, t.id)]
    })]
  })
}

function F(e) {
  return (0, a.jsx)(A.default, {
    Icon: g.default,
    header: R.default.Messages.RECENT_MENTIONS_EMPTY_STATE_HEADER,
    tip: R.default.Messages.RECENT_MENTIONS_EMPTY_STATE_TIP
  })
}