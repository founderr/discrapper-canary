n.d(t, {
  Z: function() {
    return v
  }
});
var s = n(735250),
  i = n(470079),
  l = n(442837),
  a = n(524437),
  r = n(481060),
  o = n(235820),
  c = n(494404),
  u = n(110924),
  d = n(796798),
  E = n(198620),
  _ = n(294218),
  I = n(695346),
  T = n(592125),
  m = n(731290),
  N = n(944486),
  h = n(455199),
  C = n(655354),
  S = n(999671),
  A = n(324081),
  g = n(240126),
  p = n(791914),
  f = n(981631),
  R = n(689938),
  O = n(174766);
let M = {
  offset: {
    left: 4,
    right: -12
  }
};

function x(e, t, n) {
  let s = t ? h.Z.guildFilter : null,
    i = t ? h.Z.roleFilter : null,
    l = t ? h.Z.everyoneFilter : null,
    a = null;
  null != e && null != s && (a = s === f.NgX.ALL_SERVERS ? null : e.getGuildId()), o.Z.fetchRecentMentions(n, f.DJj, a, i, l)
}

function v(e) {
  let {
    setTab: t,
    onJump: n,
    badgeState: r,
    closePopout: _
  } = e, I = (0, l.e7)([T.Z, N.Z], () => T.Z.getChannel(N.Z.getChannelId())), {
    messages: m,
    hasMore: C,
    loading: A,
    guildFilter: g,
    roleFilter: M,
    everyoneFilter: v
  } = (0, l.cj)([h.Z], () => ({
    messages: h.Z.getMentions(),
    hasMore: h.Z.hasMore,
    loading: h.Z.loading,
    guildFilter: h.Z.guildFilter,
    roleFilter: h.Z.roleFilter,
    everyoneFilter: h.Z.everyoneFilter
  })), L = (0, u.Z)(g), P = (0, u.Z)(M), j = (0, u.Z)(v);
  i.useEffect(() => {
    if (!h.Z.hasLoadedEver) {
      x(I, !0);
      return
    }(null != L && g !== L || null != P && M !== P || null != j && v !== j) && x(I, !0)
  }, [L, g, P, M, j, v, I, !0]);
  i.useEffect(() => {
    d.l.getCurrentConfig({
      location: "mentions"
    }).enabled && (null == m ? void 0 : m.some(E.k5)) && (o.Z.clearMentions(), x(I, !0))
  }, []), i.useEffect(() => () => {
    o.Z.truncateMentions(f.DJj)
  }, []);
  let U = i.useCallback(() => (0, s.jsx)(p.Z, {
    tab: a.X.MENTIONS,
    setTab: t,
    badgeState: r,
    closePopout: _,
    children: (0, s.jsx)(S.Z, {})
  }), [!0, t, r, _]);
  return (0, s.jsx)(s.Fragment, {
    children: (0, s.jsx)(c.ZP, {
      className: O.recentMentionsPopout,
      scrollerClassName: O.scroller,
      onFetch: () => null,
      onJump: n,
      onCloseMessage: function(e) {
        o.Z.deleteRecentMention(e.id)
      },
      channel: I,
      messages: m,
      loading: A,
      hasMore: C,
      analyticsName: "Recent Mentions",
      loadMore: function() {
        x(I, !0, null != m && m.length > 0 ? m[m.length - 1].id : null)
      },
      canCloseAllMessages: !0,
      renderHeader: U,
      renderEmptyState: D,
      renderMessage: Z,
      "aria-label": R.Z.Messages.RECENT_MENTIONS,
      listName: "recents"
    })
  })
}

function L(e, t) {
  return [(0, s.jsx)(P, {
    message: e,
    gotoMessage: t
  }, e.id)]
}

function Z(e, t) {
  return [(0, s.jsx)(P, {
    message: e,
    gotoMessage: t,
    dismissible: !0
  }, e.id)]
}

function P(e) {
  let {
    message: t,
    gotoMessage: n,
    dismissible: i
  } = e;
  if (null == t) return null;
  let l = T.Z.getChannel(t.channel_id);
  if (null == l) return null;
  let a = m.Z.didAgree(l.getGuildId()),
    c = !!l.isNSFW() && !a;
  return (0, s.jsxs)("div", {
    className: O.container,
    children: [(0, s.jsx)(A.Z, {
      channel: l,
      gotoChannel: n,
      children: null != i ? (0, s.jsx)(r.CircleIconButton, {
        className: O.closeButton,
        tooltip: R.Z.Messages.CLOSE,
        color: r.CircleIconButtonColors.TERTIARY,
        icon: (0, s.jsx)(r.CloseSmallIcon, {
          size: "xs",
          color: "currentColor"
        }),
        onClick: () => o.Z.deleteRecentMention(t.id)
      }) : null
    }), (0, s.jsxs)("div", {
      className: O.messageContainer,
      children: [(0, s.jsx)(C.Z, {
        className: O.jumpMessageButton,
        onJump: n
      }), (0, s.jsx)(_.Z, {
        message: t,
        channel: l,
        className: O.message,
        hideAccessories: c,
        compact: I.jU.getSetting(),
        animateAvatar: !1,
        focusProps: M,
        trackAnnouncementViews: !0
      }, t.id)]
    })]
  })
}

function D(e) {
  return (0, s.jsx)(g.Z, {
    Icon: r.AtIcon,
    header: R.Z.Messages.RECENT_MENTIONS_EMPTY_STATE_HEADER,
    tip: R.Z.Messages.RECENT_MENTIONS_EMPTY_STATE_TIP
  })
}