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
  r = n("235820"),
  o = n("494404"),
  u = n("110924"),
  d = n("796798"),
  c = n("198620"),
  f = n("294218"),
  E = n("695346"),
  _ = n("592125"),
  m = n("731290"),
  T = n("944486"),
  I = n("836946"),
  p = n("36082"),
  h = n("465670"),
  N = n("455199"),
  S = n("655354"),
  C = n("999671"),
  A = n("324081"),
  g = n("240126"),
  M = n("791914"),
  R = n("981631"),
  v = n("689938"),
  O = n("483373");
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
  null != e && null != s && (i = s === R.RecentMentionsFilters.ALL_SERVERS ? null : e.getGuildId()), r.default.fetchRecentMentions(n, R.MAX_MENTIONS_PER_FETCH, i, a, l)
}

function D(e) {
  let {
    setTab: t,
    onJump: n,
    badgeState: f,
    closePopout: E
  } = e, m = (0, l.useStateFromStores)([_.default, T.default], () => _.default.getChannel(T.default.getChannelId())), {
    messages: I,
    hasMore: p,
    loading: h,
    guildFilter: S,
    roleFilter: A,
    everyoneFilter: g
  } = (0, l.useStateFromStoresObject)([N.default], () => ({
    messages: N.default.getMentions(),
    hasMore: N.default.hasMore,
    loading: N.default.loading,
    guildFilter: N.default.guildFilter,
    roleFilter: N.default.roleFilter,
    everyoneFilter: N.default.everyoneFilter
  })), x = (0, u.default)(S), D = (0, u.default)(A), P = (0, u.default)(g);
  a.useEffect(() => {
    if (!N.default.hasLoadedEver) {
      L(m, !0);
      return
    }(null != x && S !== x || null != D && A !== D || null != P && g !== P) && L(m, !0)
  }, [x, S, D, A, P, g, m, !0]);
  a.useEffect(() => {
    d.AttachmentLinkRefreshExperiment.getCurrentConfig({
      location: "mentions"
    }).enabled && (null == I ? void 0 : I.some(c.messageHasExpiredAttachmentUrl)) && (r.default.clearMentions(), L(m, !0))
  }, []), a.useEffect(() => () => {
    r.default.truncateMentions(R.MAX_MENTIONS_PER_FETCH)
  }, []);
  let U = a.useCallback(() => (0, s.jsx)(M.default, {
    tab: i.InboxTab.MENTIONS,
    setTab: t,
    badgeState: f,
    closePopout: E,
    children: (0, s.jsx)(C.default, {})
  }), [!0, t, f, E]);
  return (0, s.jsx)(s.Fragment, {
    children: (0, s.jsx)(o.default, {
      className: O.recentMentionsPopout,
      scrollerClassName: O.scroller,
      onFetch: () => null,
      onJump: n,
      onCloseMessage: function(e) {
        r.default.deleteRecentMention(e.id)
      },
      channel: m,
      messages: I,
      loading: h,
      hasMore: p,
      analyticsName: "Recent Mentions",
      loadMore: function() {
        L(m, !0, null != I && I.length > 0 ? I[I.length - 1].id : null)
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
  let l = _.default.getChannel(t.channel_id);
  if (null == l) return null;
  let i = m.default.didAgree(l.getGuildId()),
    o = !!l.isNSFW() && !i;
  return (0, s.jsxs)("div", {
    className: O.container,
    children: [(0, s.jsx)(A.default, {
      channel: l,
      gotoChannel: n,
      children: null != a ? (0, s.jsx)(I.default, {
        className: O.closeButton,
        tooltip: v.default.Messages.CLOSE,
        color: I.CircleIconButtonColors.TERTIARY,
        icon: (0, s.jsx)(h.default, {
          width: 16,
          height: 16
        }),
        onClick: () => r.default.deleteRecentMention(t.id)
      }) : null
    }), (0, s.jsxs)("div", {
      className: O.messageContainer,
      children: [(0, s.jsx)(S.default, {
        className: O.jumpButton,
        onJump: n
      }), (0, s.jsx)(f.default, {
        message: t,
        channel: l,
        className: O.message,
        hideAccessories: o,
        compact: E.MessageDisplayCompact.getSetting(),
        animateAvatar: !1,
        focusProps: x,
        trackAnnouncementViews: !0
      }, t.id)]
    })]
  })
}

function j(e) {
  return (0, s.jsx)(g.default, {
    Icon: p.default,
    header: v.default.Messages.RECENT_MENTIONS_EMPTY_STATE_HEADER,
    tip: v.default.Messages.RECENT_MENTIONS_EMPTY_STATE_TIP
  })
}