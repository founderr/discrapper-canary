"use strict";
n.r(t), n.d(t, {
  BadgeLocation: function() {
    return l
  },
  BadgesContainer: function() {
    return B
  },
  EpisodeBadge: function() {
    return H
  },
  GameTimestampBadge: function() {
    return j
  },
  ListenTimestampBadge: function() {
    return P
  },
  MarathonBadge: function() {
    return b
  },
  NewGameBadge: function() {
    return D
  },
  ResurrectedBadge: function() {
    return U
  },
  StreakBadge: function() {
    return F
  },
  TopGameBadge: function() {
    return w
  },
  VoiceChannelBadge: function() {
    return O
  },
  WatchTimestampBadge: function() {
    return k
  }
});
var a, l, s = n("735250"),
  i = n("470079"),
  r = n("120356"),
  o = n.n(r),
  u = n("442837"),
  d = n("213602"),
  c = n("149020"),
  f = n("434559"),
  h = n("533883"),
  m = n("324992"),
  p = n("137443"),
  E = n("700287"),
  C = n("71970"),
  g = n("277758"),
  S = n("690172"),
  _ = n("481060"),
  T = n("70956"),
  I = n("719247"),
  A = n("22211"),
  v = n("561308"),
  N = n("371991"),
  x = n("689938"),
  M = n("106940");
(a = l || (l = {}))[a.CARD = 0] = "CARD", a[a.POPOUT = 1] = "POPOUT";
let R = i.createContext({});

function y() {
  return i.useContext(R)
}

function L(e) {
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
  return (0, s.jsx)(_.Tooltip, {
    text: l,
    shouldShow: i,
    children: e => (0, s.jsxs)("div", {
      className: M.badgeContainer,
      ...e,
      children: [(0, s.jsx)(t, {
        width: 12,
        height: 12,
        color: null != a ? a : o
      }), (0, s.jsx)(_.Text, {
        variant: "text-xs/normal",
        color: r,
        className: M.badgeLabel,
        children: n
      })]
    })
  })
}

function O(e) {
  let {
    entry: t
  } = e, {
    channel: n
  } = (0, A.default)(t), {
    location: a
  } = y();
  return null == n || 1 === a ? null : (0, s.jsx)(L, {
    Icon: S.VoiceNormalIcon,
    text: n.name
  })
}

function j(e) {
  let {
    entry: t
  } = e, {
    defaultTextColor: n,
    defaultIconColor: a,
    location: l
  } = y(), i = 0 === l, r = (0, v.isEntryActive)(t), o = i && r ? _.tokens.colors.STATUS_POSITIVE : a, u = i && r ? "text-positive" : n;
  return (0, s.jsxs)("div", {
    className: M.badgeContainer,
    children: [(0, s.jsx)(c.GameControllerIcon, {
      width: 12,
      height: 12,
      color: o
    }), (0, s.jsx)(N.default, {
      entry: t,
      textColor: u
    })]
  })
}

function P(e) {
  var t;
  let {
    entry: n
  } = e, {
    defaultTextColor: a,
    defaultIconColor: l,
    location: i
  } = y(), r = 0 === i, o = (0, u.useStateFromStores)([I.default], () => I.default.getMatchingActivity(n));
  if ((null == o ? void 0 : o.timestamps) == null) return null;
  let d = r ? _.tokens.colors.STATUS_POSITIVE : l,
    c = null === (t = o.timestamps) || void 0 === t ? void 0 : t.start;
  return (0, s.jsxs)("div", {
    className: M.badgeContainer,
    children: [(0, s.jsx)(h.RecordPlayerIcon, {
      width: 12,
      height: 12,
      color: d
    }), (0, s.jsx)(N.ActiveTimestamp, {
      entry: null != c ? {
        start: c
      } : n,
      textColor: r ? "text-positive" : a
    })]
  })
}

function D(e) {
  let {
    entry: t
  } = e, {
    location: n
  } = y(), a = 0 === n ? _.tokens.colors.STATUS_POSITIVE : void 0;
  return (0, v.isEntryNew)(t) ? (0, s.jsx)(L, {
    Icon: f.NewUserLargeIcon,
    text: x.default.Messages.MEMBER_LIST_CONTENT_FEED_NEW_PLAYER,
    iconColor: a
  }) : null
}

function b(e) {
  let {
    entry: t
  } = e, {
    location: n
  } = y();
  if (!(0, v.isEntryMarathon)(t)) return null;
  let a = (0, v.isEntryActive)(t),
    l = 0 === n,
    i = l || a ? (0, v.getMarathonName)(t) : (0, v.getFullMarathonDescription)(t);
  return (0, s.jsx)(L, {
    Icon: p.TimerIcon,
    text: i,
    tooltipText: (0, v.getMarathonDurationStr)(t),
    showTooltip: l && !a
  })
}

function U(e) {
  let {
    entry: t
  } = e, {
    location: n
  } = y(), a = (0, v.getResurrectedEntryLastPlayTime)(t);
  if (null == a) return null;
  let l = (0, v.getFullResurrectedBadgeText)(a);
  return (0, s.jsx)(L, {
    Icon: m.RetryIcon,
    showTooltip: 0 === n,
    tooltipText: l,
    text: 1 === n ? l : x.default.Messages.MEMBER_LIST_CONTENT_FEED_RESURRECTED
  })
}

function F(e) {
  let {
    entry: t
  } = e, {
    location: n
  } = y(), a = (0, v.getStreakCount)(t);
  return (0, v.isValidStreak)(t) ? (0, s.jsx)(L, {
    Icon: d.FlashIcon,
    showTooltip: 0 === n,
    text: x.default.Messages.MEMBER_LIST_CONTENT_FEED_STREAK_DAYS.format({
      days: a
    }),
    tooltipText: x.default.Messages.MEMBER_LIST_CONTENT_FEED_STREAK_TOOLTIP.format({
      days: a
    })
  }) : null
}

function w(e) {
  let {
    entry: t
  } = e, {
    location: n
  } = y(), a = (0, v.getEntryDuration)(t);
  if (null == a) return null;
  let l = 1 === n,
    i = l ? x.default.Messages.MEMBER_LIST_CONTENT_FEED_TIMESTAMP_HOURS_THIS_WEEK : x.default.Messages.MEMBER_LIST_CONTENT_FEED_TIMESTAMP_HOURS;
  return (0, s.jsx)(L, {
    Icon: C.TrophyIcon,
    text: (0, s.jsxs)(s.Fragment, {
      children: [x.default.Messages.MEMBER_LIST_CONTENT_FEED_TOP_GAME, l ? " — " : ": ", i.format({
        hours: Math.round(a / T.default.Seconds.HOUR)
      })]
    })
  })
}

function k(e) {
  let {
    entry: t
  } = e, {
    defaultTextColor: n,
    defaultIconColor: a
  } = y();
  return (0, s.jsxs)("div", {
    className: M.badgeContainer,
    children: [(0, s.jsx)(g.TvIcon, {
      width: 12,
      height: 12,
      color: a
    }), (0, s.jsx)(N.default, {
      entry: t,
      textColor: n
    })]
  })
}

function H(e) {
  var t;
  let {
    entry: n
  } = e, a = /\w+ (\d+), \w+ (\d+)/.exec(null !== (t = n.extra.media_assets_large_text) && void 0 !== t ? t : ""), l = null != a ? x.default.Messages.MEMBER_LIST_CONTENT_FEED_WATCH_SEASON_EPISODE.format({
    seasonNum: a[1],
    episodeNum: a[2]
  }) : null;
  return (0, s.jsx)(L, {
    Icon: E.TopicsIcon,
    text: l
  })
}

function B(e) {
  let {
    location: t,
    children: n
  } = e, a = {};
  return a = 0 === t ? {
    defaultTextColor: "text-secondary"
  } : {
    defaultTextColor: "content-inventory-overlay-text-secondary",
    defaultIconColor: _.tokens.colors.CONTENT_INVENTORY_OVERLAY_TEXT_SECONDARY
  }, (0, s.jsx)(R.Provider, {
    value: {
      location: t,
      ...a
    },
    children: (0, s.jsx)("div", {
      className: o()(M.badgesContainer, {
        [M.badgesContainerCard]: 0 === t,
        [M.badgesContainerPopout]: 1 === t
      }),
      children: n
    })
  })
}