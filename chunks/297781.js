"use strict";
a.r(t), a.d(t, {
  BadgeLocation: function() {
    return r
  },
  BadgesContainer: function() {
    return ee
  },
  EpisodeBadge: function() {
    return $
  },
  GameTimestampBadge: function() {
    return Z
  },
  ListenTimestampBadge: function() {
    return V
  },
  MarathonBadge: function() {
    return k
  },
  NewGameBadge: function() {
    return W
  },
  NewReleaseBadge: function() {
    return J
  },
  ResurrectedBadge: function() {
    return Y
  },
  RichGameStateBadge: function() {
    return b
  },
  StreakBadge: function() {
    return z
  },
  TopArtistBadge: function() {
    return q
  },
  TopGameBadge: function() {
    return K
  },
  TrendingBadge: function() {
    return X
  },
  VoiceChannelBadge: function() {
    return U
  },
  WatchTimestampBadge: function() {
    return Q
  }
});
var n, r, l = a("735250"),
  i = a("470079"),
  o = a("120356"),
  s = a.n(o),
  u = a("913527"),
  d = a.n(u),
  c = a("884439"),
  g = a("705512"),
  f = a("388469"),
  E = a("442837"),
  m = a("293732"),
  T = a("213602"),
  _ = a("149020"),
  h = a("434559"),
  v = a("533883"),
  I = a("324992"),
  N = a("460568"),
  x = a("137443"),
  C = a("700287"),
  A = a("71970"),
  p = a("277758"),
  M = a("690172"),
  R = a("481060"),
  S = a("70956"),
  O = a("709054"),
  P = a("719247"),
  y = a("22211"),
  L = a("561308"),
  w = a("265048"),
  B = a("371991"),
  D = a("689938"),
  H = a("106940");
(n = r || (r = {}))[n.CARD = 0] = "CARD", n[n.POPOUT = 1] = "POPOUT";
let F = i.createContext({});

function j() {
  return i.useContext(F)
}

function G(e) {
  let {
    Icon: t,
    text: a,
    iconColor: n,
    tooltipText: r,
    showTooltip: i
  } = e, {
    defaultTextColor: o,
    defaultIconColor: s
  } = j();
  return (0, l.jsx)(R.Tooltip, {
    text: r,
    shouldShow: i,
    children: e => (0, l.jsxs)("div", {
      className: H.badgeContainer,
      ...e,
      children: [(0, l.jsx)(t, {
        width: 12,
        height: 12,
        color: null != n ? n : s
      }), (0, l.jsx)(R.Text, {
        variant: "text-xs/normal",
        color: o,
        className: H.badgeLabel,
        children: a
      })]
    })
  })
}

function U(e) {
  let {
    entry: t
  } = e, {
    channel: a
  } = (0, y.default)(t), {
    location: n
  } = j();
  return null == a || 1 === n ? null : (0, l.jsx)(G, {
    Icon: M.VoiceNormalIcon,
    text: a.name
  })
}

function Z(e) {
  let {
    entry: t
  } = e, {
    defaultTextColor: a,
    defaultIconColor: n,
    location: r
  } = j(), i = 0 === r, o = (0, L.isEntryActive)(t), s = i && o ? R.tokens.colors.STATUS_POSITIVE : n, u = i && o ? "text-positive" : a;
  return (0, l.jsxs)("div", {
    className: H.badgeContainer,
    children: [(0, l.jsx)(_.GameControllerIcon, {
      width: 12,
      height: 12,
      color: s
    }), (0, l.jsx)(B.default, {
      entry: t,
      textColor: u
    })]
  })
}

function b(e) {
  var t, a, n, r;
  let {
    entry: i
  } = e, {
    defaultTextColor: o,
    defaultIconColor: s
  } = j(), {
    state: u,
    party: d,
    inExperiment: c
  } = (0, w.useGamingContentData)(i);
  if (!c) return null;
  let g = null !== (n = null == d ? void 0 : null === (t = d.size) || void 0 === t ? void 0 : t[0]) && void 0 !== n ? n : void 0,
    E = null !== (r = null == d ? void 0 : null === (a = d.size) || void 0 === a ? void 0 : a[1]) && void 0 !== r ? r : void 0,
    m = null != g && null != E ? D.default.Messages.CONTENT_INVENTORY_GAME_STATE_SIZE.format({
      count: g,
      max: E
    }) : void 0,
    T = null != m && null != u ? "".concat(u, " (").concat(m, ")") : null != u ? u : m;
  return null == T ? null : (0, l.jsxs)("div", {
    className: H.badgeContainer,
    children: [(0, l.jsx)(f.GroupIcon, {
      width: 12,
      height: 12,
      color: s
    }), (0, l.jsx)(R.Text, {
      variant: "text-xs/normal",
      color: o,
      lineClamp: 1,
      children: T
    })]
  })
}

function V(e) {
  var t;
  let {
    entry: a
  } = e, {
    defaultTextColor: n,
    defaultIconColor: r,
    location: i
  } = j(), o = 0 === i, s = (0, E.useStateFromStores)([P.default], () => P.default.getMatchingActivity(a));
  if ((null == s ? void 0 : s.timestamps) == null) return null;
  let u = o ? R.tokens.colors.STATUS_POSITIVE : r,
    d = null === (t = s.timestamps) || void 0 === t ? void 0 : t.start;
  return (0, l.jsxs)("div", {
    className: H.badgeContainer,
    children: [(0, l.jsx)(v.RecordPlayerIcon, {
      width: 12,
      height: 12,
      color: u
    }), (0, l.jsx)(B.ActiveTimestamp, {
      entry: null != d ? {
        start: d
      } : a,
      textColor: o ? "text-positive" : n
    })]
  })
}

function W(e) {
  let {
    entry: t
  } = e, {
    location: a
  } = j(), n = 0 === a ? R.tokens.colors.STATUS_POSITIVE : void 0;
  return (0, L.isEntryNew)(t) ? (0, l.jsx)(G, {
    Icon: h.NewUserLargeIcon,
    text: D.default.Messages.MEMBER_LIST_CONTENT_FEED_NEW_PLAYER,
    iconColor: n
  }) : null
}

function k(e) {
  let {
    entry: t
  } = e, {
    location: a
  } = j();
  if (!(0, L.isEntryMarathon)(t)) return null;
  let n = (0, L.isEntryActive)(t),
    r = 0 === a,
    i = r || n ? (0, L.getMarathonName)(t) : (0, L.getFullMarathonDescription)(t);
  return (0, l.jsx)(G, {
    Icon: x.TimerIcon,
    text: i,
    tooltipText: (0, L.getMarathonDurationStr)(t),
    showTooltip: r && !n
  })
}

function Y(e) {
  let {
    entry: t
  } = e, {
    location: a
  } = j(), n = (0, L.getResurrectedEntryLastPlayTime)(t);
  if (null == n) return null;
  let r = (0, L.getFullResurrectedBadgeText)(n);
  return (0, l.jsx)(G, {
    Icon: I.RetryIcon,
    showTooltip: 0 === a,
    tooltipText: r,
    text: 1 === a ? r : D.default.Messages.MEMBER_LIST_CONTENT_FEED_RESURRECTED
  })
}

function z(e) {
  let {
    entry: t
  } = e, {
    location: a
  } = j(), n = (0, L.getStreakCount)(t);
  return (0, L.isValidStreak)(t) ? (0, l.jsx)(G, {
    Icon: T.FlashIcon,
    showTooltip: 0 === a,
    text: D.default.Messages.MEMBER_LIST_CONTENT_FEED_STREAK_DAYS.format({
      days: n
    }),
    tooltipText: D.default.Messages.MEMBER_LIST_CONTENT_FEED_STREAK_TOOLTIP.format({
      days: n
    })
  }) : null
}

function K(e) {
  let {
    entry: t
  } = e, {
    location: a
  } = j(), n = (0, L.getEntryDuration)(t);
  if (null == n) return null;
  let r = 1 === a,
    i = r ? D.default.Messages.MEMBER_LIST_CONTENT_FEED_TIMESTAMP_HOURS_THIS_WEEK : D.default.Messages.MEMBER_LIST_CONTENT_FEED_TIMESTAMP_HOURS;
  return (0, l.jsx)(G, {
    Icon: A.TrophyIcon,
    text: (0, l.jsxs)(l.Fragment, {
      children: [D.default.Messages.MEMBER_LIST_CONTENT_FEED_TOP_GAME, r ? " — " : ": ", i.format({
        hours: Math.round(n / S.default.Seconds.HOUR)
      })]
    })
  })
}

function q(e) {
  var t;
  let {
    entry: a
  } = e, {
    location: n
  } = j(), r = null === (t = (0, L.getTrait)(a, c.ContentInventoryTraitType.AGGREGATE_COUNT)) || void 0 === t ? void 0 : t.count;
  if (null == r) return null;
  let i = 1 === n ? D.default.Messages.MEMBER_LIST_CONTENT_FEED_TOP_ARTIST_TRACKS_THIS_WEEK.format({
    count: r
  }) : D.default.Messages.MEMBER_LIST_CONTENT_FEED_TRACKS_THIS_WEEK.format({
    count: r
  });
  return (0, l.jsx)(G, {
    Icon: A.TrophyIcon,
    text: i
  })
}

function X(e) {
  let {
    entry: t
  } = e, a = (0, L.getTrendingType)(t);
  return null == a || a === g.TrendingType.TRENDING_TYPE_UNSPECIFIED ? null : (0, l.jsx)(G, {
    Icon: m.FireIcon,
    text: D.default.Messages.MEMBER_LIST_CONTENT_FEED_TRENDING
  })
}

function J(e) {
  let {
    entry: t
  } = e, a = O.default.extractTimestamp(t.extra.application_id);
  return d()().diff(d()(a), "days") > 7 ? null : (0, l.jsx)(G, {
    Icon: N.StarShootingIcon,
    text: D.default.Messages.MEMBER_LIST_CONTENT_FEED_NEW_RELEASE
  })
}

function Q(e) {
  let {
    entry: t
  } = e, {
    defaultTextColor: a,
    defaultIconColor: n
  } = j();
  return (0, l.jsxs)("div", {
    className: H.badgeContainer,
    children: [(0, l.jsx)(p.TvIcon, {
      width: 12,
      height: 12,
      color: n
    }), (0, l.jsx)(B.default, {
      entry: t,
      textColor: a
    })]
  })
}

function $(e) {
  var t;
  let {
    entry: a
  } = e, n = /\w+ (\d+), \w+ (\d+)/.exec(null !== (t = a.extra.media_assets_large_text) && void 0 !== t ? t : ""), r = null != n ? D.default.Messages.MEMBER_LIST_CONTENT_FEED_WATCH_SEASON_EPISODE.format({
    seasonNum: n[1],
    episodeNum: n[2]
  }) : null;
  return (0, l.jsx)(G, {
    Icon: C.TopicsIcon,
    text: r
  })
}

function ee(e) {
  let {
    location: t,
    children: a
  } = e, n = {};
  return n = 0 === t ? {
    defaultTextColor: "text-secondary"
  } : {
    defaultTextColor: "content-inventory-overlay-text-secondary",
    defaultIconColor: R.tokens.colors.CONTENT_INVENTORY_OVERLAY_TEXT_SECONDARY
  }, (0, l.jsx)(F.Provider, {
    value: {
      location: t,
      ...n
    },
    children: (0, l.jsx)("div", {
      className: s()(H.badgesContainer, {
        [H.badgesContainerCard]: 0 === t,
        [H.badgesContainerPopout]: 1 === t
      }),
      children: a
    })
  })
}