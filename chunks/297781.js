"use strict";
n.r(t), n.d(t, {
  BadgeLocation: function() {
    return l
  },
  BadgesContainer: function() {
    return V
  },
  EpisodeBadge: function() {
    return G
  },
  GameTimestampBadge: function() {
    return P
  },
  ListenTimestampBadge: function() {
    return D
  },
  MarathonBadge: function() {
    return U
  },
  NewGameBadge: function() {
    return b
  },
  ResurrectedBadge: function() {
    return F
  },
  StreakBadge: function() {
    return w
  },
  TopArtistBadge: function() {
    return H
  },
  TopGameBadge: function() {
    return k
  },
  VoiceChannelBadge: function() {
    return j
  },
  WatchTimestampBadge: function() {
    return B
  }
});
var a, l, s = n("735250"),
  i = n("470079"),
  r = n("120356"),
  o = n.n(r),
  u = n("884439"),
  d = n("442837"),
  c = n("213602"),
  f = n("149020"),
  h = n("434559"),
  m = n("533883"),
  p = n("324992"),
  E = n("137443"),
  C = n("700287"),
  g = n("71970"),
  S = n("277758"),
  _ = n("690172"),
  T = n("481060"),
  I = n("70956"),
  A = n("719247"),
  N = n("22211"),
  v = n("561308"),
  x = n("371991"),
  M = n("689938"),
  R = n("106940");
(a = l || (l = {}))[a.CARD = 0] = "CARD", a[a.POPOUT = 1] = "POPOUT";
let L = i.createContext({});

function y() {
  return i.useContext(L)
}

function O(e) {
  let {
    Icon: t,
    text: n,
    iconColor: a,
    tooltipText: l,
    showTooltip: i
  } = e, {
    defaultTextColor: r,
    defaultIconColor: o
  } = y();
  return (0, s.jsx)(T.Tooltip, {
    text: l,
    shouldShow: i,
    children: e => (0, s.jsxs)("div", {
      className: R.badgeContainer,
      ...e,
      children: [(0, s.jsx)(t, {
        width: 12,
        height: 12,
        color: null != a ? a : o
      }), (0, s.jsx)(T.Text, {
        variant: "text-xs/normal",
        color: r,
        className: R.badgeLabel,
        children: n
      })]
    })
  })
}

function j(e) {
  let {
    entry: t
  } = e, {
    channel: n
  } = (0, N.default)(t), {
    location: a
  } = y();
  return null == n || 1 === a ? null : (0, s.jsx)(O, {
    Icon: _.VoiceNormalIcon,
    text: n.name
  })
}

function P(e) {
  let {
    entry: t
  } = e, {
    defaultTextColor: n,
    defaultIconColor: a,
    location: l
  } = y(), i = 0 === l, r = (0, v.isEntryActive)(t), o = i && r ? T.tokens.colors.STATUS_POSITIVE : a, u = i && r ? "text-positive" : n;
  return (0, s.jsxs)("div", {
    className: R.badgeContainer,
    children: [(0, s.jsx)(f.GameControllerIcon, {
      width: 12,
      height: 12,
      color: o
    }), (0, s.jsx)(x.default, {
      entry: t,
      textColor: u
    })]
  })
}

function D(e) {
  var t;
  let {
    entry: n
  } = e, {
    defaultTextColor: a,
    defaultIconColor: l,
    location: i
  } = y(), r = 0 === i, o = (0, d.useStateFromStores)([A.default], () => A.default.getMatchingActivity(n));
  if ((null == o ? void 0 : o.timestamps) == null) return null;
  let u = r ? T.tokens.colors.STATUS_POSITIVE : l,
    c = null === (t = o.timestamps) || void 0 === t ? void 0 : t.start;
  return (0, s.jsxs)("div", {
    className: R.badgeContainer,
    children: [(0, s.jsx)(m.RecordPlayerIcon, {
      width: 12,
      height: 12,
      color: u
    }), (0, s.jsx)(x.ActiveTimestamp, {
      entry: null != c ? {
        start: c
      } : n,
      textColor: r ? "text-positive" : a
    })]
  })
}

function b(e) {
  let {
    entry: t
  } = e, {
    location: n
  } = y(), a = 0 === n ? T.tokens.colors.STATUS_POSITIVE : void 0;
  return (0, v.isEntryNew)(t) ? (0, s.jsx)(O, {
    Icon: h.NewUserLargeIcon,
    text: M.default.Messages.MEMBER_LIST_CONTENT_FEED_NEW_PLAYER,
    iconColor: a
  }) : null
}

function U(e) {
  let {
    entry: t
  } = e, {
    location: n
  } = y();
  if (!(0, v.isEntryMarathon)(t)) return null;
  let a = (0, v.isEntryActive)(t),
    l = 0 === n,
    i = l || a ? (0, v.getMarathonName)(t) : (0, v.getFullMarathonDescription)(t);
  return (0, s.jsx)(O, {
    Icon: E.TimerIcon,
    text: i,
    tooltipText: (0, v.getMarathonDurationStr)(t),
    showTooltip: l && !a
  })
}

function F(e) {
  let {
    entry: t
  } = e, {
    location: n
  } = y(), a = (0, v.getResurrectedEntryLastPlayTime)(t);
  if (null == a) return null;
  let l = (0, v.getFullResurrectedBadgeText)(a);
  return (0, s.jsx)(O, {
    Icon: p.RetryIcon,
    showTooltip: 0 === n,
    tooltipText: l,
    text: 1 === n ? l : M.default.Messages.MEMBER_LIST_CONTENT_FEED_RESURRECTED
  })
}

function w(e) {
  let {
    entry: t
  } = e, {
    location: n
  } = y(), a = (0, v.getStreakCount)(t);
  return (0, v.isValidStreak)(t) ? (0, s.jsx)(O, {
    Icon: c.FlashIcon,
    showTooltip: 0 === n,
    text: M.default.Messages.MEMBER_LIST_CONTENT_FEED_STREAK_DAYS.format({
      days: a
    }),
    tooltipText: M.default.Messages.MEMBER_LIST_CONTENT_FEED_STREAK_TOOLTIP.format({
      days: a
    })
  }) : null
}

function k(e) {
  let {
    entry: t
  } = e, {
    location: n
  } = y(), a = (0, v.getEntryDuration)(t);
  if (null == a) return null;
  let l = 1 === n,
    i = l ? M.default.Messages.MEMBER_LIST_CONTENT_FEED_TIMESTAMP_HOURS_THIS_WEEK : M.default.Messages.MEMBER_LIST_CONTENT_FEED_TIMESTAMP_HOURS;
  return (0, s.jsx)(O, {
    Icon: g.TrophyIcon,
    text: (0, s.jsxs)(s.Fragment, {
      children: [M.default.Messages.MEMBER_LIST_CONTENT_FEED_TOP_GAME, l ? " — " : ": ", i.format({
        hours: Math.round(a / I.default.Seconds.HOUR)
      })]
    })
  })
}

function H(e) {
  var t;
  let {
    entry: n
  } = e, {
    location: a
  } = y(), l = null === (t = (0, v.getTrait)(n, u.ContentInventoryTraitType.AGGREGATE_COUNT)) || void 0 === t ? void 0 : t.count;
  if (null == l) return null;
  let i = 1 === a ? M.default.Messages.MEMBER_LIST_CONTENT_FEED_TOP_ARTIST_TRACKS_THIS_WEEK.format({
    count: l
  }) : M.default.Messages.MEMBER_LIST_CONTENT_FEED_TRACKS_THIS_WEEK.format({
    count: l
  });
  return (0, s.jsx)(O, {
    Icon: g.TrophyIcon,
    text: i
  })
}

function B(e) {
  let {
    entry: t
  } = e, {
    defaultTextColor: n,
    defaultIconColor: a
  } = y();
  return (0, s.jsxs)("div", {
    className: R.badgeContainer,
    children: [(0, s.jsx)(S.TvIcon, {
      width: 12,
      height: 12,
      color: a
    }), (0, s.jsx)(x.default, {
      entry: t,
      textColor: n
    })]
  })
}

function G(e) {
  var t;
  let {
    entry: n
  } = e, a = /\w+ (\d+), \w+ (\d+)/.exec(null !== (t = n.extra.media_assets_large_text) && void 0 !== t ? t : ""), l = null != a ? M.default.Messages.MEMBER_LIST_CONTENT_FEED_WATCH_SEASON_EPISODE.format({
    seasonNum: a[1],
    episodeNum: a[2]
  }) : null;
  return (0, s.jsx)(O, {
    Icon: C.TopicsIcon,
    text: l
  })
}

function V(e) {
  let {
    location: t,
    children: n
  } = e, a = {};
  return a = 0 === t ? {
    defaultTextColor: "text-secondary"
  } : {
    defaultTextColor: "content-inventory-overlay-text-secondary",
    defaultIconColor: T.tokens.colors.CONTENT_INVENTORY_OVERLAY_TEXT_SECONDARY
  }, (0, s.jsx)(L.Provider, {
    value: {
      location: t,
      ...a
    },
    children: (0, s.jsx)("div", {
      className: o()(R.badgesContainer, {
        [R.badgesContainerCard]: 0 === t,
        [R.badgesContainerPopout]: 1 === t
      }),
      children: n
    })
  })
}