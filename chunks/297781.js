t.d(n, {
  Af: function() {
return S;
  },
  An: function() {
return B;
  },
  E6: function() {
return w;
  },
  EE: function() {
return O;
  },
  Gk: function() {
return k;
  },
  Gt: function() {
return r;
  },
  OV: function() {
return p;
  },
  Rg: function() {
return H;
  },
  U9: function() {
return G;
  },
  XF: function() {
return P;
  },
  Yl: function() {
return U;
  },
  f: function() {
return j;
  },
  gj: function() {
return L;
  },
  n8: function() {
return F;
  },
  pQ: function() {
return D;
  },
  v1: function() {
return y;
  }
});
var l, r, a = t(735250),
  o = t(470079),
  i = t(120356),
  u = t.n(i),
  s = t(913527),
  c = t.n(s),
  d = t(884439),
  E = t(705512),
  _ = t(442837),
  f = t(481060),
  T = t(70956),
  v = t(823379),
  m = t(709054),
  N = t(719247),
  x = t(22211),
  I = t(561308),
  g = t(265048),
  h = t(371991),
  M = t(689938),
  A = t(945285);
(l = r || (r = {}))[l.CARD = 0] = 'CARD', l[l.POPOUT = 1] = 'POPOUT', l[l.GAME_PROFILE = 2] = 'GAME_PROFILE';
let C = o.createContext({});

function R() {
  return o.useContext(C);
}

function Z(e) {
  let {
Icon: n,
text: t,
iconColor: l,
tooltipText: r,
showTooltip: o
  } = e, {
defaultTextColor: i,
defaultIconColor: u
  } = R();
  return (0, a.jsx)(f.Tooltip, {
text: r,
shouldShow: o,
children: e => (0, a.jsxs)('div', {
  className: A.badgeContainer,
  ...e,
  children: [
    (0, a.jsx)(n, {
      size: 'xxs',
      color: null != l ? l : u
    }),
    (0, a.jsx)(f.Text, {
      variant: 'text-xs/normal',
      color: i,
      className: A.badgeLabel,
      children: t
    })
  ]
})
  });
}

function S(e) {
  let {
entry: n
  } = e, {
channel: t
  } = (0, x.Z)(n), {
location: l
  } = R();
  return null == t || (0, v.Hi)(l, [
1,
2
  ]) ? null : (0, a.jsx)(Z, {
Icon: f.VoiceNormalIcon,
text: t.name
  });
}

function p(e) {
  let {
entry: n,
hovered: t
  } = e, {
defaultTextColor: l,
defaultIconColor: r,
location: o
  } = R(), i = 0 === o, u = (0, I.kr)(n), s = i && u ? f.tokens.colors.STATUS_POSITIVE : r, c = i && u ? 'text-positive' : l;
  return (0, a.jsxs)('div', {
className: A.badgeContainer,
children: [
  (0, a.jsx)(f.GameControllerIcon, {
    size: 'xxs',
    color: s
  }),
  (0, a.jsx)(h.ZP, {
    entry: n,
    textColor: c,
    hovered: t
  })
]
  });
}

function O(e) {
  var n, t, l, r;
  let {
entry: o
  } = e, {
defaultTextColor: i,
defaultIconColor: u
  } = R(), {
state: s,
party: c,
inExperiment: d
  } = (0, g.F)(o);
  if (!d)
return null;
  let E = null !== (l = null == c ? void 0 : null === (n = c.size) || void 0 === n ? void 0 : n[0]) && void 0 !== l ? l : void 0,
_ = null !== (r = null == c ? void 0 : null === (t = c.size) || void 0 === t ? void 0 : t[1]) && void 0 !== r ? r : void 0,
T = null != E && null != _ ? M.Z.Messages.CONTENT_INVENTORY_GAME_STATE_SIZE.format({
  count: E,
  max: _
}) : void 0,
v = null != T && null != s ? ''.concat(s, ' (').concat(T, ')') : null != s ? s : T;
  return null == v ? null : (0, a.jsxs)('div', {
className: A.badgeContainer,
children: [
  (0, a.jsx)(f.GroupIcon, {
    size: 'xxs',
    color: u
  }),
  (0, a.jsx)(f.Text, {
    variant: 'text-xs/normal',
    color: i,
    lineClamp: 1,
    children: v
  })
]
  });
}

function P(e) {
  var n;
  let {
entry: t,
hovered: l
  } = e, {
defaultTextColor: r,
defaultIconColor: o,
location: i
  } = R(), u = 0 === i, s = (0, _.e7)([N.Z], () => N.Z.getMatchingActivity(t));
  if ((null == s ? void 0 : s.timestamps) == null)
return null;
  let c = u ? f.tokens.colors.STATUS_POSITIVE : o,
d = null === (n = s.timestamps) || void 0 === n ? void 0 : n.start;
  return (0, a.jsxs)('div', {
className: A.badgeContainer,
children: [
  (0, a.jsx)(f.RecordPlayerIcon, {
    size: 'xxs',
    color: c
  }),
  (0, a.jsx)(h.x3, {
    entry: null != d ? {
      start: d
    } : t,
    textColor: u ? 'text-positive' : r,
    hovered: l
  })
]
  });
}

function L(e) {
  let {
entry: n
  } = e, {
location: t
  } = R(), l = 0 === t ? f.tokens.colors.STATUS_POSITIVE : void 0;
  return (0, I.Ol)(n) ? (0, a.jsx)(Z, {
Icon: f.NewUserSmallIcon,
text: M.Z.Messages.MEMBER_LIST_CONTENT_FEED_NEW_PLAYER,
iconColor: l
  }) : null;
}

function D(e) {
  let {
entry: n
  } = e, {
location: t
  } = R();
  if (!(0, I.V5)(n))
return null;
  let l = (0, I.kr)(n),
r = 0 === t,
o = r || l ? (0, I.z5)(n) : (0, I.nB)(n);
  return (0, a.jsx)(Z, {
Icon: f.TimerIcon,
text: o,
tooltipText: (0, I.EX)(n),
showTooltip: r && !l
  });
}

function y(e) {
  let {
entry: n
  } = e, {
location: t
  } = R(), l = 0 !== t, r = (0, I.dw)(n);
  if (null == r)
return null;
  let o = (0, I.GE)(r);
  return (0, a.jsx)(Z, {
Icon: f.RetryIcon,
showTooltip: !l,
tooltipText: o,
text: l ? o : M.Z.Messages.MEMBER_LIST_CONTENT_FEED_RESURRECTED
  });
}

function j(e) {
  let {
entry: n
  } = e, {
location: t
  } = R(), l = (0, I.vU)(n);
  return (0, I.q_)(n) ? (0, a.jsx)(Z, {
Icon: f.FlashIcon,
showTooltip: 0 === t,
text: M.Z.Messages.MEMBER_LIST_CONTENT_FEED_STREAK_DAYS.format({
  days: l
}),
tooltipText: M.Z.Messages.MEMBER_LIST_CONTENT_FEED_STREAK_TOOLTIP.format({
  days: l
})
  }) : null;
}

function w(e) {
  let {
entry: n
  } = e, {
location: t
  } = R(), l = 0 !== t, r = (0, I.yA)(n);
  if (null == r)
return null;
  let o = l ? M.Z.Messages.MEMBER_LIST_CONTENT_FEED_TIMESTAMP_HOURS_THIS_WEEK : M.Z.Messages.MEMBER_LIST_CONTENT_FEED_TIMESTAMP_HOURS;
  return (0, a.jsx)(Z, {
Icon: f.TrophyIcon,
text: (0, a.jsxs)(a.Fragment, {
  children: [
    M.Z.Messages.MEMBER_LIST_CONTENT_FEED_TOP_GAME,
    l ? ' \u2014 ' : ': ',
    o.format({
      hours: Math.round(r / T.Z.Seconds.HOUR)
    })
  ]
})
  });
}

function B(e) {
  var n;
  let {
entry: t
  } = e, {
location: l
  } = R(), r = null === (n = (0, I.PJ)(t, d.N.AGGREGATE_COUNT)) || void 0 === n ? void 0 : n.count;
  if (null == r)
return null;
  let o = 1 === l ? M.Z.Messages.MEMBER_LIST_CONTENT_FEED_TOP_ARTIST_TRACKS_THIS_WEEK.format({
count: r
  }) : M.Z.Messages.MEMBER_LIST_CONTENT_FEED_TRACKS_THIS_WEEK.format({
count: r
  });
  return (0, a.jsx)(Z, {
Icon: f.TrophyIcon,
text: o
  });
}

function F(e) {
  let {
entry: n
  } = e, {
location: t
  } = R();
  if (2 === t)
return null;
  let l = (0, I.ig)(n);
  return null == l || l === E.o.TRENDING_TYPE_UNSPECIFIED ? null : (0, a.jsx)(Z, {
Icon: f.FireIcon,
text: M.Z.Messages.MEMBER_LIST_CONTENT_FEED_TRENDING
  });
}

function G(e) {
  let {
entry: n
  } = e, {
location: t
  } = R();
  if (2 === t)
return null;
  let l = m.default.extractTimestamp(n.extra.application_id);
  return c()().diff(c()(l), 'days') > 7 ? null : (0, a.jsx)(Z, {
Icon: f.StarShootingIcon,
text: M.Z.Messages.MEMBER_LIST_CONTENT_FEED_NEW_RELEASE
  });
}

function U(e) {
  let {
entry: n,
hovered: t
  } = e, {
defaultTextColor: l,
defaultIconColor: r
  } = R();
  return (0, a.jsxs)('div', {
className: A.badgeContainer,
children: [
  (0, a.jsx)(f.TvIcon, {
    size: 'xxs',
    color: r
  }),
  (0, a.jsx)(h.ZP, {
    entry: n,
    textColor: l,
    hovered: t
  })
]
  });
}

function H(e) {
  var n;
  let {
entry: t
  } = e, l = /\w+ (\d+), \w+ (\d+)/.exec(null !== (n = t.extra.media_assets_large_text) && void 0 !== n ? n : ''), r = null != l ? M.Z.Messages.MEMBER_LIST_CONTENT_FEED_WATCH_SEASON_EPISODE.format({
seasonNum: l[1],
episodeNum: l[2]
  }) : null;
  return (0, a.jsx)(Z, {
Icon: f.TopicsIcon,
text: r
  });
}

function k(e) {
  let {
location: n,
children: t
  } = e, l = 1 === n ? {
defaultTextColor: 'content-inventory-overlay-text-secondary',
defaultIconColor: f.tokens.colors.CONTENT_INVENTORY_OVERLAY_TEXT_SECONDARY
  } : {
defaultTextColor: 'text-secondary'
  };
  return (0, a.jsx)(C.Provider, {
value: {
  location: n,
  ...l
},
children: (0, a.jsx)('div', {
  className: u()(A.badgesContainer, {
    [A.badgesContainerCard]: 0 === n,
    [A.badgesContainerPopout]: 1 === n,
    [A.badgesContainerGameProfile]: 2 === n
  }),
  children: t
})
  });
}