"use strict";
n.r(t), n.d(t, {
  BadgeLocation: function() {
    return l
  },
  BadgesContainer: function() {
    return ee
  },
  EpisodeBadge: function() {
    return $
  },
  GameTimestampBadge: function() {
    return H
  },
  ListenTimestampBadge: function() {
    return V
  },
  MarathonBadge: function() {
    return Y
  },
  NewGameBadge: function() {
    return W
  },
  NewReleaseBadge: function() {
    return Q
  },
  ResurrectedBadge: function() {
    return z
  },
  RichGameStateBadge: function() {
    return G
  },
  StreakBadge: function() {
    return K
  },
  TopArtistBadge: function() {
    return q
  },
  TopGameBadge: function() {
    return Z
  },
  TrendingBadge: function() {
    return X
  },
  VoiceChannelBadge: function() {
    return B
  },
  WatchTimestampBadge: function() {
    return J
  }
});
var a, l, s = n("735250"),
  i = n("470079"),
  r = n("120356"),
  o = n.n(r),
  u = n("913527"),
  d = n.n(u),
  c = n("884439"),
  f = n("705512"),
  h = n("729878"),
  m = n("388469"),
  p = n("442837"),
  E = n("213602"),
  C = n("149020"),
  g = n("781511"),
  S = n("434559"),
  _ = n("533883"),
  T = n("324992"),
  I = n("137443"),
  A = n("700287"),
  v = n("71970"),
  N = n("277758"),
  x = n("690172"),
  M = n("481060"),
  R = n("70956"),
  y = n("709054"),
  L = n("719247"),
  O = n("22211"),
  j = n("561308"),
  P = n("265048"),
  D = n("371991"),
  b = n("689938"),
  U = n("106940");
(a = l || (l = {}))[a.CARD = 0] = "CARD", a[a.POPOUT = 1] = "POPOUT";
let F = i.createContext({});

function w() {
  return i.useContext(F)
}

function k(e) {
  let {
    Icon: t,
    text: n,
    iconColor: a,
    tooltipText: l,
    showTooltip: i
  } = e, {
    defaultTextColor: r,
    defaultIconColor: o
  } = w();
  return (0, s.jsx)(M.Tooltip, {
    text: l,
    shouldShow: i,
    children: e => (0, s.jsxs)("div", {
      className: U.badgeContainer,
      ...e,
      children: [(0, s.jsx)(t, {
        width: 12,
        height: 12,
        color: null != a ? a : o
      }), (0, s.jsx)(M.Text, {
        variant: "text-xs/normal",
        color: r,
        className: U.badgeLabel,
        children: n
      })]
    })
  })
}

function B(e) {
  let {
    entry: t
  } = e, {
    channel: n
  } = (0, O.default)(t), {
    location: a
  } = w();
  return null == n || 1 === a ? null : (0, s.jsx)(k, {
    Icon: x.VoiceNormalIcon,
    text: n.name
  })
}

function H(e) {
  let {
    entry: t
  } = e, {
    defaultTextColor: n,
    defaultIconColor: a,
    location: l
  } = w(), i = 0 === l, r = (0, j.isEntryActive)(t), o = i && r ? M.tokens.colors.STATUS_POSITIVE : a, u = i && r ? "text-positive" : n;
  return (0, s.jsxs)("div", {
    className: U.badgeContainer,
    children: [(0, s.jsx)(C.GameControllerIcon, {
      width: 12,
      height: 12,
      color: o
    }), (0, s.jsx)(D.default, {
      entry: t,
      textColor: u
    })]
  })
}

function G(e) {
  var t, n, a, l;
  let {
    entry: i
  } = e, {
    defaultTextColor: r,
    defaultIconColor: o
  } = w(), {
    state: u,
    party: d,
    inExperiment: c
  } = (0, P.useGamingContentData)(i);
  if (!c) return null;
  let f = null !== (a = null == d ? void 0 : null === (t = d.size) || void 0 === t ? void 0 : t[0]) && void 0 !== a ? a : void 0,
    h = null !== (l = null == d ? void 0 : null === (n = d.size) || void 0 === n ? void 0 : n[1]) && void 0 !== l ? l : void 0,
    p = null != f && null != h ? b.default.Messages.USER_ACTIVITY_STATE_SIZE.format({
      count: f,
      max: h
    }) : void 0,
    E = null != p && null != u ? "".concat(u, " (").concat(p, ")") : null != u ? u : p;
  return null == E ? null : (0, s.jsxs)("div", {
    className: U.badgeContainer,
    children: [(0, s.jsx)(m.GroupIcon, {
      width: 12,
      height: 12,
      color: o
    }), (0, s.jsx)(M.Text, {
      variant: "text-xs/normal",
      color: r,
      lineClamp: 1,
      children: E
    })]
  })
}

function V(e) {
  var t;
  let {
    entry: n
  } = e, {
    defaultTextColor: a,
    defaultIconColor: l,
    location: i
  } = w(), r = 0 === i, o = (0, p.useStateFromStores)([L.default], () => L.default.getMatchingActivity(n));
  if ((null == o ? void 0 : o.timestamps) == null) return null;
  let u = r ? M.tokens.colors.STATUS_POSITIVE : l,
    d = null === (t = o.timestamps) || void 0 === t ? void 0 : t.start;
  return (0, s.jsxs)("div", {
    className: U.badgeContainer,
    children: [(0, s.jsx)(_.RecordPlayerIcon, {
      width: 12,
      height: 12,
      color: u
    }), (0, s.jsx)(D.ActiveTimestamp, {
      entry: null != d ? {
        start: d
      } : n,
      textColor: r ? "text-positive" : a
    })]
  })
}

function W(e) {
  let {
    entry: t
  } = e, {
    location: n
  } = w(), a = 0 === n ? M.tokens.colors.STATUS_POSITIVE : void 0;
  return (0, j.isEntryNew)(t) ? (0, s.jsx)(k, {
    Icon: S.NewUserLargeIcon,
    text: b.default.Messages.MEMBER_LIST_CONTENT_FEED_NEW_PLAYER,
    iconColor: a
  }) : null
}

function Y(e) {
  let {
    entry: t
  } = e, {
    location: n
  } = w();
  if (!(0, j.isEntryMarathon)(t)) return null;
  let a = (0, j.isEntryActive)(t),
    l = 0 === n,
    i = l || a ? (0, j.getMarathonName)(t) : (0, j.getFullMarathonDescription)(t);
  return (0, s.jsx)(k, {
    Icon: I.TimerIcon,
    text: i,
    tooltipText: (0, j.getMarathonDurationStr)(t),
    showTooltip: l && !a
  })
}

function z(e) {
  let {
    entry: t
  } = e, {
    location: n
  } = w(), a = (0, j.getResurrectedEntryLastPlayTime)(t);
  if (null == a) return null;
  let l = (0, j.getFullResurrectedBadgeText)(a);
  return (0, s.jsx)(k, {
    Icon: T.RetryIcon,
    showTooltip: 0 === n,
    tooltipText: l,
    text: 1 === n ? l : b.default.Messages.MEMBER_LIST_CONTENT_FEED_RESURRECTED
  })
}

function K(e) {
  let {
    entry: t
  } = e, {
    location: n
  } = w(), a = (0, j.getStreakCount)(t);
  return (0, j.isValidStreak)(t) ? (0, s.jsx)(k, {
    Icon: E.FlashIcon,
    showTooltip: 0 === n,
    text: b.default.Messages.MEMBER_LIST_CONTENT_FEED_STREAK_DAYS.format({
      days: a
    }),
    tooltipText: b.default.Messages.MEMBER_LIST_CONTENT_FEED_STREAK_TOOLTIP.format({
      days: a
    })
  }) : null
}

function Z(e) {
  let {
    entry: t
  } = e, {
    location: n
  } = w(), a = (0, j.getEntryDuration)(t);
  if (null == a) return null;
  let l = 1 === n,
    i = l ? b.default.Messages.MEMBER_LIST_CONTENT_FEED_TIMESTAMP_HOURS_THIS_WEEK : b.default.Messages.MEMBER_LIST_CONTENT_FEED_TIMESTAMP_HOURS;
  return (0, s.jsx)(k, {
    Icon: v.TrophyIcon,
    text: (0, s.jsxs)(s.Fragment, {
      children: [b.default.Messages.MEMBER_LIST_CONTENT_FEED_TOP_GAME, l ? " — " : ": ", i.format({
        hours: Math.round(a / R.default.Seconds.HOUR)
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
  } = w(), l = null === (t = (0, j.getTrait)(n, c.ContentInventoryTraitType.AGGREGATE_COUNT)) || void 0 === t ? void 0 : t.count;
  if (null == l) return null;
  let i = 1 === a ? b.default.Messages.MEMBER_LIST_CONTENT_FEED_TOP_ARTIST_TRACKS_THIS_WEEK.format({
    count: l
  }) : b.default.Messages.MEMBER_LIST_CONTENT_FEED_TRACKS_THIS_WEEK.format({
    count: l
  });
  return (0, s.jsx)(k, {
    Icon: v.TrophyIcon,
    text: i
  })
}

function X(e) {
  let {
    entry: t
  } = e, n = (0, j.getTrendingType)(t);
  return null == n || n === f.TrendingType.TRENDING_TYPE_UNSPECIFIED ? null : (0, s.jsx)(k, {
    Icon: g.GlobeEarthIcon,
    text: b.default.Messages.MEMBER_LIST_CONTENT_FEED_TRENDING
  })
}

function Q(e) {
  let {
    entry: t
  } = e, n = y.default.extractTimestamp(t.extra.application_id);
  return d()().diff(d()(n), "days") > 7 ? null : (0, s.jsx)(k, {
    Icon: h.CircleExclamationPointIcon,
    text: "New Release"
  })
}

function J(e) {
  let {
    entry: t
  } = e, {
    defaultTextColor: n,
    defaultIconColor: a
  } = w();
  return (0, s.jsxs)("div", {
    className: U.badgeContainer,
    children: [(0, s.jsx)(N.TvIcon, {
      width: 12,
      height: 12,
      color: a
    }), (0, s.jsx)(D.default, {
      entry: t,
      textColor: n
    })]
  })
}

function $(e) {
  var t;
  let {
    entry: n
  } = e, a = /\w+ (\d+), \w+ (\d+)/.exec(null !== (t = n.extra.media_assets_large_text) && void 0 !== t ? t : ""), l = null != a ? b.default.Messages.MEMBER_LIST_CONTENT_FEED_WATCH_SEASON_EPISODE.format({
    seasonNum: a[1],
    episodeNum: a[2]
  }) : null;
  return (0, s.jsx)(k, {
    Icon: A.TopicsIcon,
    text: l
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
    defaultIconColor: M.tokens.colors.CONTENT_INVENTORY_OVERLAY_TEXT_SECONDARY
  }, (0, s.jsx)(F.Provider, {
    value: {
      location: t,
      ...a
    },
    children: (0, s.jsx)("div", {
      className: o()(U.badgesContainer, {
        [U.badgesContainerCard]: 0 === t,
        [U.badgesContainerPopout]: 1 === t
      }),
      children: n
    })
  })
}