t.d(n, {
  Af: function() {
    return Z
  },
  An: function() {
    return B
  },
  E6: function() {
    return w
  },
  EE: function() {
    return S
  },
  Gk: function() {
    return H
  },
  Gt: function() {
    return a
  },
  OV: function() {
    return p
  },
  Rg: function() {
    return G
  },
  U9: function() {
    return F
  },
  XF: function() {
    return O
  },
  Yl: function() {
    return U
  },
  f: function() {
    return y
  },
  gj: function() {
    return P
  },
  n8: function() {
    return D
  },
  pQ: function() {
    return L
  },
  v1: function() {
    return j
  }
});
var l, a, r = t(735250),
  o = t(470079),
  i = t(120356),
  u = t.n(i),
  s = t(913527),
  c = t.n(s),
  d = t(884439),
  E = t(705512),
  _ = t(442837),
  f = t(481060),
  m = t(70956),
  v = t(709054),
  T = t(719247),
  x = t(22211),
  g = t(561308),
  N = t(265048),
  h = t(371991),
  I = t(689938),
  M = t(757372);
(l = a || (a = {}))[l.CARD = 0] = "CARD", l[l.POPOUT = 1] = "POPOUT";
let C = o.createContext({});

function A() {
  return o.useContext(C)
}

function R(e) {
  let {
    Icon: n,
    text: t,
    iconColor: l,
    tooltipText: a,
    showTooltip: o
  } = e, {
    defaultTextColor: i,
    defaultIconColor: u
  } = A();
  return (0, r.jsx)(f.Tooltip, {
    text: a,
    shouldShow: o,
    children: e => (0, r.jsxs)("div", {
      className: M.badgeContainer,
      ...e,
      children: [(0, r.jsx)(n, {
        size: "xxs",
        color: null != l ? l : u
      }), (0, r.jsx)(f.Text, {
        variant: "text-xs/normal",
        color: i,
        className: M.badgeLabel,
        children: t
      })]
    })
  })
}

function Z(e) {
  let {
    entry: n
  } = e, {
    channel: t
  } = (0, x.Z)(n), {
    location: l
  } = A();
  return null == t || 1 === l ? null : (0, r.jsx)(R, {
    Icon: f.VoiceNormalIcon,
    text: t.name
  })
}

function p(e) {
  let {
    entry: n
  } = e, {
    defaultTextColor: t,
    defaultIconColor: l,
    location: a
  } = A(), o = 0 === a, i = (0, g.kr)(n), u = o && i ? f.tokens.colors.STATUS_POSITIVE : l, s = o && i ? "text-positive" : t;
  return (0, r.jsxs)("div", {
    className: M.badgeContainer,
    children: [(0, r.jsx)(f.GameControllerIcon, {
      size: "xxs",
      color: u
    }), (0, r.jsx)(h.ZP, {
      entry: n,
      textColor: s
    })]
  })
}

function S(e) {
  var n, t, l, a;
  let {
    entry: o
  } = e, {
    defaultTextColor: i,
    defaultIconColor: u
  } = A(), {
    state: s,
    party: c,
    inExperiment: d
  } = (0, N.F)(o);
  if (!d) return null;
  let E = null !== (l = null == c ? void 0 : null === (n = c.size) || void 0 === n ? void 0 : n[0]) && void 0 !== l ? l : void 0,
    _ = null !== (a = null == c ? void 0 : null === (t = c.size) || void 0 === t ? void 0 : t[1]) && void 0 !== a ? a : void 0,
    m = null != E && null != _ ? I.Z.Messages.CONTENT_INVENTORY_GAME_STATE_SIZE.format({
      count: E,
      max: _
    }) : void 0,
    v = null != m && null != s ? "".concat(s, " (").concat(m, ")") : null != s ? s : m;
  return null == v ? null : (0, r.jsxs)("div", {
    className: M.badgeContainer,
    children: [(0, r.jsx)(f.GroupIcon, {
      size: "xxs",
      color: u
    }), (0, r.jsx)(f.Text, {
      variant: "text-xs/normal",
      color: i,
      lineClamp: 1,
      children: v
    })]
  })
}

function O(e) {
  var n;
  let {
    entry: t
  } = e, {
    defaultTextColor: l,
    defaultIconColor: a,
    location: o
  } = A(), i = 0 === o, u = (0, _.e7)([T.Z], () => T.Z.getMatchingActivity(t));
  if ((null == u ? void 0 : u.timestamps) == null) return null;
  let s = i ? f.tokens.colors.STATUS_POSITIVE : a,
    c = null === (n = u.timestamps) || void 0 === n ? void 0 : n.start;
  return (0, r.jsxs)("div", {
    className: M.badgeContainer,
    children: [(0, r.jsx)(f.RecordPlayerIcon, {
      size: "xxs",
      color: s
    }), (0, r.jsx)(h.x3, {
      entry: null != c ? {
        start: c
      } : t,
      textColor: i ? "text-positive" : l
    })]
  })
}

function P(e) {
  let {
    entry: n
  } = e, {
    location: t
  } = A(), l = 0 === t ? f.tokens.colors.STATUS_POSITIVE : void 0;
  return (0, g.Ol)(n) ? (0, r.jsx)(R, {
    Icon: f.NewUserLargeIcon,
    text: I.Z.Messages.MEMBER_LIST_CONTENT_FEED_NEW_PLAYER,
    iconColor: l
  }) : null
}

function L(e) {
  let {
    entry: n
  } = e, {
    location: t
  } = A();
  if (!(0, g.V5)(n)) return null;
  let l = (0, g.kr)(n),
    a = 0 === t,
    o = a || l ? (0, g.z5)(n) : (0, g.nB)(n);
  return (0, r.jsx)(R, {
    Icon: f.TimerIcon,
    text: o,
    tooltipText: (0, g.EX)(n),
    showTooltip: a && !l
  })
}

function j(e) {
  let {
    entry: n
  } = e, {
    location: t
  } = A(), l = (0, g.dw)(n);
  if (null == l) return null;
  let a = (0, g.GE)(l);
  return (0, r.jsx)(R, {
    Icon: f.RetryIcon,
    showTooltip: 0 === t,
    tooltipText: a,
    text: 1 === t ? a : I.Z.Messages.MEMBER_LIST_CONTENT_FEED_RESURRECTED
  })
}

function y(e) {
  let {
    entry: n
  } = e, {
    location: t
  } = A(), l = (0, g.vU)(n);
  return (0, g.q_)(n) ? (0, r.jsx)(R, {
    Icon: f.FlashIcon,
    showTooltip: 0 === t,
    text: I.Z.Messages.MEMBER_LIST_CONTENT_FEED_STREAK_DAYS.format({
      days: l
    }),
    tooltipText: I.Z.Messages.MEMBER_LIST_CONTENT_FEED_STREAK_TOOLTIP.format({
      days: l
    })
  }) : null
}

function w(e) {
  let {
    entry: n
  } = e, {
    location: t
  } = A(), l = (0, g.yA)(n);
  if (null == l) return null;
  let a = 1 === t,
    o = a ? I.Z.Messages.MEMBER_LIST_CONTENT_FEED_TIMESTAMP_HOURS_THIS_WEEK : I.Z.Messages.MEMBER_LIST_CONTENT_FEED_TIMESTAMP_HOURS;
  return (0, r.jsx)(R, {
    Icon: f.TrophyIcon,
    text: (0, r.jsxs)(r.Fragment, {
      children: [I.Z.Messages.MEMBER_LIST_CONTENT_FEED_TOP_GAME, a ? " — " : ": ", o.format({
        hours: Math.round(l / m.Z.Seconds.HOUR)
      })]
    })
  })
}

function B(e) {
  var n;
  let {
    entry: t
  } = e, {
    location: l
  } = A(), a = null === (n = (0, g.PJ)(t, d.N.AGGREGATE_COUNT)) || void 0 === n ? void 0 : n.count;
  if (null == a) return null;
  let o = 1 === l ? I.Z.Messages.MEMBER_LIST_CONTENT_FEED_TOP_ARTIST_TRACKS_THIS_WEEK.format({
    count: a
  }) : I.Z.Messages.MEMBER_LIST_CONTENT_FEED_TRACKS_THIS_WEEK.format({
    count: a
  });
  return (0, r.jsx)(R, {
    Icon: f.TrophyIcon,
    text: o
  })
}

function D(e) {
  let {
    entry: n
  } = e, t = (0, g.ig)(n);
  return null == t || t === E.o.TRENDING_TYPE_UNSPECIFIED ? null : (0, r.jsx)(R, {
    Icon: f.FireIcon,
    text: I.Z.Messages.MEMBER_LIST_CONTENT_FEED_TRENDING
  })
}

function F(e) {
  let {
    entry: n
  } = e, t = v.default.extractTimestamp(n.extra.application_id);
  return c()().diff(c()(t), "days") > 7 ? null : (0, r.jsx)(R, {
    Icon: f.StarShootingIcon,
    text: I.Z.Messages.MEMBER_LIST_CONTENT_FEED_NEW_RELEASE
  })
}

function U(e) {
  let {
    entry: n
  } = e, {
    defaultTextColor: t,
    defaultIconColor: l
  } = A();
  return (0, r.jsxs)("div", {
    className: M.badgeContainer,
    children: [(0, r.jsx)(f.TvIcon, {
      size: "xxs",
      color: l
    }), (0, r.jsx)(h.ZP, {
      entry: n,
      textColor: t
    })]
  })
}

function G(e) {
  var n;
  let {
    entry: t
  } = e, l = /\w+ (\d+), \w+ (\d+)/.exec(null !== (n = t.extra.media_assets_large_text) && void 0 !== n ? n : ""), a = null != l ? I.Z.Messages.MEMBER_LIST_CONTENT_FEED_WATCH_SEASON_EPISODE.format({
    seasonNum: l[1],
    episodeNum: l[2]
  }) : null;
  return (0, r.jsx)(R, {
    Icon: f.TopicsIcon,
    text: a
  })
}

function H(e) {
  let {
    location: n,
    children: t
  } = e, l = {};
  return l = 0 === n ? {
    defaultTextColor: "text-secondary"
  } : {
    defaultTextColor: "content-inventory-overlay-text-secondary",
    defaultIconColor: f.tokens.colors.CONTENT_INVENTORY_OVERLAY_TEXT_SECONDARY
  }, (0, r.jsx)(C.Provider, {
    value: {
      location: n,
      ...l
    },
    children: (0, r.jsx)("div", {
      className: u()(M.badgesContainer, {
        [M.badgesContainerCard]: 0 === n,
        [M.badgesContainerPopout]: 1 === n
      }),
      children: t
    })
  })
}