"use strict";
n.r(t), n.d(t, {
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
    return b
  },
  ListenTimestampBadge: function() {
    return Z
  },
  MarathonBadge: function() {
    return W
  },
  NewGameBadge: function() {
    return k
  },
  NewReleaseBadge: function() {
    return J
  },
  ResurrectedBadge: function() {
    return Y
  },
  RichGameStateBadge: function() {
    return V
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
var a, r, l = n("735250"),
  i = n("470079"),
  o = n("120356"),
  s = n.n(o),
  u = n("913527"),
  d = n.n(u),
  c = n("884439"),
  g = n("705512"),
  f = n("729878"),
  m = n("388469"),
  E = n("442837"),
  T = n("213602"),
  _ = n("149020"),
  h = n("781511"),
  v = n("434559"),
  I = n("533883"),
  N = n("324992"),
  x = n("137443"),
  C = n("700287"),
  A = n("71970"),
  p = n("277758"),
  M = n("690172"),
  R = n("481060"),
  S = n("70956"),
  O = n("709054"),
  P = n("719247"),
  y = n("22211"),
  w = n("561308"),
  L = n("265048"),
  B = n("371991"),
  D = n("689938"),
  H = n("106940");
(a = r || (r = {}))[a.CARD = 0] = "CARD", a[a.POPOUT = 1] = "POPOUT";
let F = i.createContext({});

function G() {
  return i.useContext(F)
}

function j(e) {
  let {
    Icon: t,
    text: n,
    iconColor: a,
    tooltipText: r,
    showTooltip: i
  } = e, {
    defaultTextColor: o,
    defaultIconColor: s
  } = G();
  return (0, l.jsx)(R.Tooltip, {
    text: r,
    shouldShow: i,
    children: e => (0, l.jsxs)("div", {
      className: H.badgeContainer,
      ...e,
      children: [(0, l.jsx)(t, {
        width: 12,
        height: 12,
        color: null != a ? a : s
      }), (0, l.jsx)(R.Text, {
        variant: "text-xs/normal",
        color: o,
        className: H.badgeLabel,
        children: n
      })]
    })
  })
}

function U(e) {
  let {
    entry: t
  } = e, {
    channel: n
  } = (0, y.default)(t), {
    location: a
  } = G();
  return null == n || 1 === a ? null : (0, l.jsx)(j, {
    Icon: M.VoiceNormalIcon,
    text: n.name
  })
}

function b(e) {
  let {
    entry: t
  } = e, {
    defaultTextColor: n,
    defaultIconColor: a,
    location: r
  } = G(), i = 0 === r, o = (0, w.isEntryActive)(t), s = i && o ? R.tokens.colors.STATUS_POSITIVE : a, u = i && o ? "text-positive" : n;
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

function V(e) {
  var t, n, a, r;
  let {
    entry: i
  } = e, {
    defaultTextColor: o,
    defaultIconColor: s
  } = G(), {
    state: u,
    party: d,
    inExperiment: c
  } = (0, L.useGamingContentData)(i);
  if (!c) return null;
  let g = null !== (a = null == d ? void 0 : null === (t = d.size) || void 0 === t ? void 0 : t[0]) && void 0 !== a ? a : void 0,
    f = null !== (r = null == d ? void 0 : null === (n = d.size) || void 0 === n ? void 0 : n[1]) && void 0 !== r ? r : void 0,
    E = null != g && null != f ? D.default.Messages.CONTENT_INVENTORY_GAME_STATE_SIZE.format({
      count: g,
      max: f
    }) : void 0,
    T = null != E && null != u ? "".concat(u, " (").concat(E, ")") : null != u ? u : E;
  return null == T ? null : (0, l.jsxs)("div", {
    className: H.badgeContainer,
    children: [(0, l.jsx)(m.GroupIcon, {
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

function Z(e) {
  var t;
  let {
    entry: n
  } = e, {
    defaultTextColor: a,
    defaultIconColor: r,
    location: i
  } = G(), o = 0 === i, s = (0, E.useStateFromStores)([P.default], () => P.default.getMatchingActivity(n));
  if ((null == s ? void 0 : s.timestamps) == null) return null;
  let u = o ? R.tokens.colors.STATUS_POSITIVE : r,
    d = null === (t = s.timestamps) || void 0 === t ? void 0 : t.start;
  return (0, l.jsxs)("div", {
    className: H.badgeContainer,
    children: [(0, l.jsx)(I.RecordPlayerIcon, {
      width: 12,
      height: 12,
      color: u
    }), (0, l.jsx)(B.ActiveTimestamp, {
      entry: null != d ? {
        start: d
      } : n,
      textColor: o ? "text-positive" : a
    })]
  })
}

function k(e) {
  let {
    entry: t
  } = e, {
    location: n
  } = G(), a = 0 === n ? R.tokens.colors.STATUS_POSITIVE : void 0;
  return (0, w.isEntryNew)(t) ? (0, l.jsx)(j, {
    Icon: v.NewUserLargeIcon,
    text: D.default.Messages.MEMBER_LIST_CONTENT_FEED_NEW_PLAYER,
    iconColor: a
  }) : null
}

function W(e) {
  let {
    entry: t
  } = e, {
    location: n
  } = G();
  if (!(0, w.isEntryMarathon)(t)) return null;
  let a = (0, w.isEntryActive)(t),
    r = 0 === n,
    i = r || a ? (0, w.getMarathonName)(t) : (0, w.getFullMarathonDescription)(t);
  return (0, l.jsx)(j, {
    Icon: x.TimerIcon,
    text: i,
    tooltipText: (0, w.getMarathonDurationStr)(t),
    showTooltip: r && !a
  })
}

function Y(e) {
  let {
    entry: t
  } = e, {
    location: n
  } = G(), a = (0, w.getResurrectedEntryLastPlayTime)(t);
  if (null == a) return null;
  let r = (0, w.getFullResurrectedBadgeText)(a);
  return (0, l.jsx)(j, {
    Icon: N.RetryIcon,
    showTooltip: 0 === n,
    tooltipText: r,
    text: 1 === n ? r : D.default.Messages.MEMBER_LIST_CONTENT_FEED_RESURRECTED
  })
}

function z(e) {
  let {
    entry: t
  } = e, {
    location: n
  } = G(), a = (0, w.getStreakCount)(t);
  return (0, w.isValidStreak)(t) ? (0, l.jsx)(j, {
    Icon: T.FlashIcon,
    showTooltip: 0 === n,
    text: D.default.Messages.MEMBER_LIST_CONTENT_FEED_STREAK_DAYS.format({
      days: a
    }),
    tooltipText: D.default.Messages.MEMBER_LIST_CONTENT_FEED_STREAK_TOOLTIP.format({
      days: a
    })
  }) : null
}

function K(e) {
  let {
    entry: t
  } = e, {
    location: n
  } = G(), a = (0, w.getEntryDuration)(t);
  if (null == a) return null;
  let r = 1 === n,
    i = r ? D.default.Messages.MEMBER_LIST_CONTENT_FEED_TIMESTAMP_HOURS_THIS_WEEK : D.default.Messages.MEMBER_LIST_CONTENT_FEED_TIMESTAMP_HOURS;
  return (0, l.jsx)(j, {
    Icon: A.TrophyIcon,
    text: (0, l.jsxs)(l.Fragment, {
      children: [D.default.Messages.MEMBER_LIST_CONTENT_FEED_TOP_GAME, r ? " — " : ": ", i.format({
        hours: Math.round(a / S.default.Seconds.HOUR)
      })]
    })
  })
}

function q(e) {
  var t;
  let {
    entry: n
  } = e, {
    location: a
  } = G(), r = null === (t = (0, w.getTrait)(n, c.ContentInventoryTraitType.AGGREGATE_COUNT)) || void 0 === t ? void 0 : t.count;
  if (null == r) return null;
  let i = 1 === a ? D.default.Messages.MEMBER_LIST_CONTENT_FEED_TOP_ARTIST_TRACKS_THIS_WEEK.format({
    count: r
  }) : D.default.Messages.MEMBER_LIST_CONTENT_FEED_TRACKS_THIS_WEEK.format({
    count: r
  });
  return (0, l.jsx)(j, {
    Icon: A.TrophyIcon,
    text: i
  })
}

function X(e) {
  let {
    entry: t
  } = e, n = (0, w.getTrendingType)(t);
  return null == n || n === g.TrendingType.TRENDING_TYPE_UNSPECIFIED ? null : (0, l.jsx)(j, {
    Icon: h.GlobeEarthIcon,
    text: D.default.Messages.MEMBER_LIST_CONTENT_FEED_TRENDING
  })
}

function J(e) {
  let {
    entry: t
  } = e, n = O.default.extractTimestamp(t.extra.application_id);
  return d()().diff(d()(n), "days") > 7 ? null : (0, l.jsx)(j, {
    Icon: f.CircleExclamationPointIcon,
    text: "New Release"
  })
}

function Q(e) {
  let {
    entry: t
  } = e, {
    defaultTextColor: n,
    defaultIconColor: a
  } = G();
  return (0, l.jsxs)("div", {
    className: H.badgeContainer,
    children: [(0, l.jsx)(p.TvIcon, {
      width: 12,
      height: 12,
      color: a
    }), (0, l.jsx)(B.default, {
      entry: t,
      textColor: n
    })]
  })
}

function $(e) {
  var t;
  let {
    entry: n
  } = e, a = /\w+ (\d+), \w+ (\d+)/.exec(null !== (t = n.extra.media_assets_large_text) && void 0 !== t ? t : ""), r = null != a ? D.default.Messages.MEMBER_LIST_CONTENT_FEED_WATCH_SEASON_EPISODE.format({
    seasonNum: a[1],
    episodeNum: a[2]
  }) : null;
  return (0, l.jsx)(j, {
    Icon: C.TopicsIcon,
    text: r
  })
}

function ee(e) {
  let {
    location: t,
    children: n
  } = e, a = {};
  return a = 0 === t ? {
    defaultTextColor: "text-secondary"
  } : {
    defaultTextColor: "content-inventory-overlay-text-secondary",
    defaultIconColor: R.tokens.colors.CONTENT_INVENTORY_OVERLAY_TEXT_SECONDARY
  }, (0, l.jsx)(F.Provider, {
    value: {
      location: t,
      ...a
    },
    children: (0, l.jsx)("div", {
      className: s()(H.badgesContainer, {
        [H.badgesContainerCard]: 0 === t,
        [H.badgesContainerPopout]: 1 === t
      }),
      children: n
    })
  })
}