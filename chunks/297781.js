"use strict";
n.r(t), n.d(t, {
  BadgeLocation: function() {
    return l
  },
  BadgesContainer: function() {
    return z
  },
  EpisodeBadge: function() {
    return Y
  },
  GameTimestampBadge: function() {
    return b
  },
  ListenTimestampBadge: function() {
    return U
  },
  MarathonBadge: function() {
    return w
  },
  NewGameBadge: function() {
    return F
  },
  ResurrectedBadge: function() {
    return k
  },
  StreakBadge: function() {
    return H
  },
  TopArtistBadge: function() {
    return G
  },
  TopGameBadge: function() {
    return B
  },
  TrendingBadge: function() {
    return V
  },
  VoiceChannelBadge: function() {
    return D
  },
  WatchTimestampBadge: function() {
    return W
  }
});
var a, l, s = n("735250"),
  i = n("470079"),
  r = n("120356"),
  o = n.n(r),
  u = n("884439"),
  d = n("705512"),
  c = n("442837"),
  f = n("213602"),
  h = n("149020"),
  m = n("781511"),
  p = n("434559"),
  E = n("533883"),
  C = n("324992"),
  g = n("137443"),
  S = n("700287"),
  _ = n("71970"),
  T = n("277758"),
  I = n("690172"),
  A = n("481060"),
  N = n("70956"),
  v = n("719247"),
  x = n("22211"),
  M = n("561308"),
  R = n("371991"),
  y = n("689938"),
  L = n("106940");
(a = l || (l = {}))[a.CARD = 0] = "CARD", a[a.POPOUT = 1] = "POPOUT";
let O = i.createContext({});

function j() {
  return i.useContext(O)
}

function P(e) {
  let {
    Icon: t,
    text: n,
    iconColor: a,
    tooltipText: l,
    showTooltip: i
  } = e, {
    defaultTextColor: r,
    defaultIconColor: o
  } = j();
  return (0, s.jsx)(A.Tooltip, {
    text: l,
    shouldShow: i,
    children: e => (0, s.jsxs)("div", {
      className: L.badgeContainer,
      ...e,
      children: [(0, s.jsx)(t, {
        width: 12,
        height: 12,
        color: null != a ? a : o
      }), (0, s.jsx)(A.Text, {
        variant: "text-xs/normal",
        color: r,
        className: L.badgeLabel,
        children: n
      })]
    })
  })
}

function D(e) {
  let {
    entry: t
  } = e, {
    channel: n
  } = (0, x.default)(t), {
    location: a
  } = j();
  return null == n || 1 === a ? null : (0, s.jsx)(P, {
    Icon: I.VoiceNormalIcon,
    text: n.name
  })
}

function b(e) {
  let {
    entry: t
  } = e, {
    defaultTextColor: n,
    defaultIconColor: a,
    location: l
  } = j(), i = 0 === l, r = (0, M.isEntryActive)(t), o = i && r ? A.tokens.colors.STATUS_POSITIVE : a, u = i && r ? "text-positive" : n;
  return (0, s.jsxs)("div", {
    className: L.badgeContainer,
    children: [(0, s.jsx)(h.GameControllerIcon, {
      width: 12,
      height: 12,
      color: o
    }), (0, s.jsx)(R.default, {
      entry: t,
      textColor: u
    })]
  })
}

function U(e) {
  var t;
  let {
    entry: n
  } = e, {
    defaultTextColor: a,
    defaultIconColor: l,
    location: i
  } = j(), r = 0 === i, o = (0, c.useStateFromStores)([v.default], () => v.default.getMatchingActivity(n));
  if ((null == o ? void 0 : o.timestamps) == null) return null;
  let u = r ? A.tokens.colors.STATUS_POSITIVE : l,
    d = null === (t = o.timestamps) || void 0 === t ? void 0 : t.start;
  return (0, s.jsxs)("div", {
    className: L.badgeContainer,
    children: [(0, s.jsx)(E.RecordPlayerIcon, {
      width: 12,
      height: 12,
      color: u
    }), (0, s.jsx)(R.ActiveTimestamp, {
      entry: null != d ? {
        start: d
      } : n,
      textColor: r ? "text-positive" : a
    })]
  })
}

function F(e) {
  let {
    entry: t
  } = e, {
    location: n
  } = j(), a = 0 === n ? A.tokens.colors.STATUS_POSITIVE : void 0;
  return (0, M.isEntryNew)(t) ? (0, s.jsx)(P, {
    Icon: p.NewUserLargeIcon,
    text: y.default.Messages.MEMBER_LIST_CONTENT_FEED_NEW_PLAYER,
    iconColor: a
  }) : null
}

function w(e) {
  let {
    entry: t
  } = e, {
    location: n
  } = j();
  if (!(0, M.isEntryMarathon)(t)) return null;
  let a = (0, M.isEntryActive)(t),
    l = 0 === n,
    i = l || a ? (0, M.getMarathonName)(t) : (0, M.getFullMarathonDescription)(t);
  return (0, s.jsx)(P, {
    Icon: g.TimerIcon,
    text: i,
    tooltipText: (0, M.getMarathonDurationStr)(t),
    showTooltip: l && !a
  })
}

function k(e) {
  let {
    entry: t
  } = e, {
    location: n
  } = j(), a = (0, M.getResurrectedEntryLastPlayTime)(t);
  if (null == a) return null;
  let l = (0, M.getFullResurrectedBadgeText)(a);
  return (0, s.jsx)(P, {
    Icon: C.RetryIcon,
    showTooltip: 0 === n,
    tooltipText: l,
    text: 1 === n ? l : y.default.Messages.MEMBER_LIST_CONTENT_FEED_RESURRECTED
  })
}

function H(e) {
  let {
    entry: t
  } = e, {
    location: n
  } = j(), a = (0, M.getStreakCount)(t);
  return (0, M.isValidStreak)(t) ? (0, s.jsx)(P, {
    Icon: f.FlashIcon,
    showTooltip: 0 === n,
    text: y.default.Messages.MEMBER_LIST_CONTENT_FEED_STREAK_DAYS.format({
      days: a
    }),
    tooltipText: y.default.Messages.MEMBER_LIST_CONTENT_FEED_STREAK_TOOLTIP.format({
      days: a
    })
  }) : null
}

function B(e) {
  let {
    entry: t
  } = e, {
    location: n
  } = j(), a = (0, M.getEntryDuration)(t);
  if (null == a) return null;
  let l = 1 === n,
    i = l ? y.default.Messages.MEMBER_LIST_CONTENT_FEED_TIMESTAMP_HOURS_THIS_WEEK : y.default.Messages.MEMBER_LIST_CONTENT_FEED_TIMESTAMP_HOURS;
  return (0, s.jsx)(P, {
    Icon: _.TrophyIcon,
    text: (0, s.jsxs)(s.Fragment, {
      children: [y.default.Messages.MEMBER_LIST_CONTENT_FEED_TOP_GAME, l ? " — " : ": ", i.format({
        hours: Math.round(a / N.default.Seconds.HOUR)
      })]
    })
  })
}

function G(e) {
  var t;
  let {
    entry: n
  } = e, {
    location: a
  } = j(), l = null === (t = (0, M.getTrait)(n, u.ContentInventoryTraitType.AGGREGATE_COUNT)) || void 0 === t ? void 0 : t.count;
  if (null == l) return null;
  let i = 1 === a ? y.default.Messages.MEMBER_LIST_CONTENT_FEED_TOP_ARTIST_TRACKS_THIS_WEEK.format({
    count: l
  }) : y.default.Messages.MEMBER_LIST_CONTENT_FEED_TRACKS_THIS_WEEK.format({
    count: l
  });
  return (0, s.jsx)(P, {
    Icon: _.TrophyIcon,
    text: i
  })
}

function V(e) {
  let {
    entry: t
  } = e, n = (0, M.getTrendingType)(t);
  return null == n || n === d.TrendingType.TRENDING_TYPE_UNSPECIFIED ? null : (0, s.jsx)(P, {
    Icon: m.GlobeEarthIcon,
    text: y.default.Messages.MEMBER_LIST_CONTENT_FEED_TRENDING
  })
}

function W(e) {
  let {
    entry: t
  } = e, {
    defaultTextColor: n,
    defaultIconColor: a
  } = j();
  return (0, s.jsxs)("div", {
    className: L.badgeContainer,
    children: [(0, s.jsx)(T.TvIcon, {
      width: 12,
      height: 12,
      color: a
    }), (0, s.jsx)(R.default, {
      entry: t,
      textColor: n
    })]
  })
}

function Y(e) {
  var t;
  let {
    entry: n
  } = e, a = /\w+ (\d+), \w+ (\d+)/.exec(null !== (t = n.extra.media_assets_large_text) && void 0 !== t ? t : ""), l = null != a ? y.default.Messages.MEMBER_LIST_CONTENT_FEED_WATCH_SEASON_EPISODE.format({
    seasonNum: a[1],
    episodeNum: a[2]
  }) : null;
  return (0, s.jsx)(P, {
    Icon: S.TopicsIcon,
    text: l
  })
}

function z(e) {
  let {
    location: t,
    children: n
  } = e, a = {};
  return a = 0 === t ? {
    defaultTextColor: "text-secondary"
  } : {
    defaultTextColor: "content-inventory-overlay-text-secondary",
    defaultIconColor: A.tokens.colors.CONTENT_INVENTORY_OVERLAY_TEXT_SECONDARY
  }, (0, s.jsx)(O.Provider, {
    value: {
      location: t,
      ...a
    },
    children: (0, s.jsx)("div", {
      className: o()(L.badgesContainer, {
        [L.badgesContainerCard]: 0 === t,
        [L.badgesContainerPopout]: 1 === t
      }),
      children: n
    })
  })
}