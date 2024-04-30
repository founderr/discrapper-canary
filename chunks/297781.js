"use strict";
n.r(t), n.d(t, {
  BadgeLocation: function() {
    return l
  },
  BadgesContainer: function() {
    return w
  },
  EpisodeBadge: function() {
    return F
  },
  GameTimestampBadge: function() {
    return y
  },
  MarathonBadge: function() {
    return j
  },
  NewGameBadge: function() {
    return O
  },
  ResurrectedBadge: function() {
    return P
  },
  StreakBadge: function() {
    return D
  },
  TopGameBadge: function() {
    return b
  },
  VoiceChannelBadge: function() {
    return L
  },
  WatchTimestampBadge: function() {
    return U
  }
});
var a, l, s = n("735250"),
  i = n("470079"),
  r = n("120356"),
  o = n.n(r),
  u = n("213602"),
  d = n("149020"),
  c = n("434559"),
  f = n("324992"),
  h = n("137443"),
  m = n("700287"),
  p = n("71970"),
  E = n("277758"),
  C = n("690172"),
  g = n("481060"),
  S = n("70956"),
  _ = n("162461"),
  T = n("22211"),
  I = n("561308"),
  A = n("371991"),
  N = n("689938"),
  v = n("509058");
(a = l || (l = {}))[a.CARD = 0] = "CARD", a[a.POPOUT = 1] = "POPOUT";
let x = i.createContext({});

function M() {
  return i.useContext(x)
}

function R(e) {
  let {
    Icon: t,
    text: n,
    iconColor: a,
    tooltipText: l,
    showTooltip: i
  } = e, {
    defaultTextColor: r,
    defaultIconColor: o
  } = M();
  return (0, s.jsx)(g.Tooltip, {
    text: l,
    shouldShow: i,
    children: e => (0, s.jsxs)("div", {
      className: v.badgeContainer,
      ...e,
      children: [(0, s.jsx)(t, {
        width: 12,
        height: 12,
        color: null != a ? a : o
      }), (0, s.jsx)(g.Text, {
        variant: "text-xs/normal",
        color: r,
        className: v.badgeLabel,
        children: n
      })]
    })
  })
}

function L(e) {
  let {
    entry: t
  } = e, {
    channel: n
  } = (0, T.default)(t), {
    showBadge: a
  } = _.VoiceEnrichmentsExperiment.useExperiment({
    location: "content_badge"
  });
  return a && null != n ? (0, s.jsx)(R, {
    Icon: C.VoiceNormalIcon,
    text: n.name
  }) : null
}

function y(e) {
  let {
    entry: t
  } = e, {
    defaultTextColor: n,
    defaultIconColor: a,
    location: l
  } = M(), i = (0, I.isEntryActive)(t), r = 0 === l && i ? g.tokens.colors.REDESIGN_BUTTON_PRIMARY_ON_BLURPLE_PRESSED_TEXT : a;
  return (0, s.jsxs)("div", {
    className: v.badgeContainer,
    children: [(0, s.jsx)(d.GameControllerIcon, {
      width: 12,
      height: 12,
      color: r
    }), (0, s.jsx)(A.default, {
      entry: t,
      textColor: n
    })]
  })
}

function O(e) {
  let {
    entry: t
  } = e, {
    location: n
  } = M(), a = 0 === n ? g.tokens.colors.STATUS_POSITIVE : void 0;
  return (0, I.isEntryNew)(t) ? (0, s.jsx)(R, {
    Icon: c.NewUserLargeIcon,
    text: N.default.Messages.MEMBER_LIST_CONTENT_FEED_NEW_PLAYER,
    iconColor: a
  }) : null
}

function j(e) {
  let {
    entry: t
  } = e, {
    location: n
  } = M();
  if (!(0, I.isEntryMarathon)(t)) return null;
  let a = (0, I.isEntryActive)(t),
    l = 0 === n,
    i = l || a ? (0, I.getMarathonName)(t) : (0, I.getFullMarathonDescription)(t);
  return (0, s.jsx)(R, {
    Icon: h.TimerIcon,
    text: i,
    tooltipText: (0, I.getMarathonDurationStr)(t),
    showTooltip: l && !a
  })
}

function P(e) {
  let {
    entry: t
  } = e, {
    location: n
  } = M(), a = (0, I.getResurrectedEntryLastPlayTime)(t);
  if (null == a) return null;
  let l = (0, I.getFullResurrectedBadgeText)(a);
  return (0, s.jsx)(R, {
    Icon: f.RetryIcon,
    showTooltip: 0 === n,
    tooltipText: l,
    text: 1 === n ? l : N.default.Messages.MEMBER_LIST_CONTENT_FEED_RESURRECTED
  })
}

function D(e) {
  let {
    entry: t
  } = e, n = (0, I.getStreakCount)(t);
  return null == n || n < 2 ? null : (0, s.jsx)(R, {
    Icon: u.FlashIcon,
    text: N.default.Messages.MEMBER_LIST_CONTENT_FEED_STREAK_DAYS.format({
      days: n
    })
  })
}

function b(e) {
  let {
    entry: t
  } = e, {
    location: n
  } = M(), a = (0, I.getEntryDuration)(t);
  if (null == a) return null;
  let l = 1 === n,
    i = l ? N.default.Messages.MEMBER_LIST_CONTENT_FEED_TIMESTAMP_HOURS_THIS_WEEK : N.default.Messages.MEMBER_LIST_CONTENT_FEED_TIMESTAMP_HOURS;
  return (0, s.jsx)(R, {
    Icon: p.TrophyIcon,
    text: (0, s.jsxs)(s.Fragment, {
      children: [N.default.Messages.MEMBER_LIST_CONTENT_FEED_TOP_GAME, l ? " — " : ": ", i.format({
        hours: Math.round(a / S.default.Seconds.HOUR)
      })]
    })
  })
}

function U(e) {
  let {
    entry: t
  } = e, {
    defaultTextColor: n,
    defaultIconColor: a
  } = M();
  return (0, s.jsxs)("div", {
    className: v.badgeContainer,
    children: [(0, s.jsx)(E.TvIcon, {
      width: 12,
      height: 12,
      color: a
    }), (0, s.jsx)(A.default, {
      entry: t,
      textColor: n
    })]
  })
}

function F(e) {
  var t;
  let {
    entry: n
  } = e, a = /\w+ (\d+), \w+ (\d+)/.exec(null !== (t = n.extra.media_assets_large_text) && void 0 !== t ? t : ""), l = null != a ? N.default.Messages.MEMBER_LIST_CONTENT_FEED_WATCH_SEASON_EPISODE.format({
    seasonNum: a[1],
    episodeNum: a[2]
  }) : null;
  return (0, s.jsx)(R, {
    Icon: m.TopicsIcon,
    text: l
  })
}

function w(e) {
  let {
    location: t,
    children: n
  } = e, a = {};
  return a = 0 === t ? {
    defaultTextColor: "text-secondary"
  } : {
    defaultTextColor: "always-white",
    defaultIconColor: g.tokens.colors.TEXT_PRIMARY
  }, (0, s.jsx)(x.Provider, {
    value: {
      location: t,
      ...a
    },
    children: (0, s.jsx)("div", {
      className: o()(v.badgesContainer, {
        [v.badgesContainerCard]: 0 === t,
        [v.badgesContainerPopout]: 1 === t
      }),
      children: n
    })
  })
}