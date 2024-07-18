t.d(n, {
  Af: function() {
return p;
  },
  An: function() {
return F;
  },
  E6: function() {
return w;
  },
  EE: function() {
return P;
  },
  Gk: function() {
return k;
  },
  Gt: function() {
return r;
  },
  OV: function() {
return O;
  },
  Rg: function() {
return b;
  },
  U9: function() {
return B;
  },
  XF: function() {
return L;
  },
  Yl: function() {
return H;
  },
  f: function() {
return U;
  },
  gj: function() {
return y;
  },
  n8: function() {
return G;
  },
  pQ: function() {
return D;
  },
  v1: function() {
return j;
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
  v = t(70956),
  T = t(823379),
  m = t(709054),
  h = t(719247),
  I = t(22211),
  N = t(561308),
  x = t(797342),
  g = t(371991),
  M = t(206583),
  A = t(689938),
  C = t(945285);
(l = r || (r = {}))[l.CARD = 0] = 'CARD', l[l.POPOUT = 1] = 'POPOUT', l[l.GAME_PROFILE = 2] = 'GAME_PROFILE';
let R = o.createContext({});

function S() {
  return o.useContext(R);
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
  } = S();
  return (0, a.jsx)(f.Tooltip, {
text: r,
shouldShow: o,
children: e => (0, a.jsxs)('div', {
  className: C.badgeContainer,
  ...e,
  children: [
    (0, a.jsx)(n, {
      size: 'xxs',
      color: null != l ? l : u
    }),
    (0, a.jsx)(f.Text, {
      variant: 'text-xs/normal',
      color: i,
      className: C.badgeLabel,
      children: t
    })
  ]
})
  });
}

function p(e) {
  let {
entry: n
  } = e, {
channel: t
  } = (0, I.Z)(n), {
location: l
  } = S();
  return null == t || (0, T.Hi)(l, [
1,
2
  ]) ? null : (0, a.jsx)(Z, {
Icon: f.VoiceNormalIcon,
text: t.name
  });
}

function O(e) {
  let {
entry: n,
hovered: t
  } = e, {
defaultTextColor: l,
defaultIconColor: r,
location: o
  } = S(), i = 0 === o, u = (0, N.kr)(n), s = i && u ? f.tokens.colors.STATUS_POSITIVE : r, c = i && u ? 'text-positive' : l, {
streamPreviewUrl: d
  } = (0, I.Z)(n);
  return (0, a.jsxs)('div', {
className: C.badgeContainer,
children: [
  null == d ? (0, a.jsx)(f.GameControllerIcon, {
    size: 'xxs',
    color: s
  }) : (0, a.jsx)(f.ScreenArrowIcon, {
    size: 'xxs',
    color: s
  }),
  (0, a.jsx)(g.ZP, {
    entry: n,
    textColor: c,
    hovered: t,
    bold: !0
  })
]
  });
}

function P(e) {
  var n, t, l, r;
  let {
entry: o
  } = e, {
defaultTextColor: i,
defaultIconColor: u
  } = S(), {
state: s,
party: c,
inExperiment: d
  } = (0, x.n)(o);
  if (!d)
return null;
  let E = null !== (l = null == c ? void 0 : null === (n = c.size) || void 0 === n ? void 0 : n[0]) && void 0 !== l ? l : void 0,
_ = null !== (r = null == c ? void 0 : null === (t = c.size) || void 0 === t ? void 0 : t[1]) && void 0 !== r ? r : void 0,
v = null != E && null != _ ? A.Z.Messages.CONTENT_INVENTORY_GAME_STATE_SIZE.format({
  count: E,
  max: _
}) : void 0,
T = null != v && null != s ? ''.concat(s, ' (').concat(v, ')') : null != s ? s : v;
  return null == T ? null : (0, a.jsxs)('div', {
className: C.badgeContainer,
children: [
  (0, a.jsx)(f.GroupIcon, {
    size: 'xxs',
    color: u
  }),
  (0, a.jsx)(f.Text, {
    variant: 'text-xs/normal',
    color: i,
    lineClamp: 1,
    children: T
  })
]
  });
}

function L(e) {
  var n;
  let {
entry: t,
hovered: l
  } = e, {
defaultTextColor: r,
defaultIconColor: o,
location: i
  } = S(), u = 0 === i, s = (0, _.e7)([h.Z], () => h.Z.getMatchingActivity(t));
  if ((null == s ? void 0 : s.timestamps) == null)
return null;
  let c = u ? f.tokens.colors.STATUS_POSITIVE : o,
d = null === (n = s.timestamps) || void 0 === n ? void 0 : n.start;
  return (0, a.jsxs)('div', {
className: C.badgeContainer,
children: [
  (0, a.jsx)(f.RecordPlayerIcon, {
    size: 'xxs',
    color: c
  }),
  (0, a.jsx)(g.x3, {
    entry: null != d ? {
      start: d
    } : t,
    textColor: u ? 'text-positive' : r,
    hovered: l,
    bold: !0
  })
]
  });
}

function y(e) {
  let {
entry: n
  } = e, {
location: t
  } = S(), l = 0 === t ? f.tokens.colors.STATUS_POSITIVE : void 0;
  return (0, N.Ol)(n) ? (0, a.jsx)(Z, {
Icon: f.NewUserSmallIcon,
text: A.Z.Messages.MEMBER_LIST_CONTENT_FEED_NEW_PLAYER,
iconColor: l
  }) : null;
}

function D(e) {
  let {
entry: n
  } = e, {
location: t
  } = S();
  if (!(0, N.V5)(n))
return null;
  let l = (0, N.kr)(n),
r = 0 === t,
o = r || l ? (0, N.z5)(n) : (0, N.nB)(n);
  return (0, a.jsx)(Z, {
Icon: f.TimerIcon,
text: o,
tooltipText: (0, N.EX)(n),
showTooltip: r && !l
  });
}

function j(e) {
  let {
entry: n
  } = e, {
location: t
  } = S(), l = 0 !== t, r = (0, N.dw)(n);
  if (null == r)
return null;
  let o = (0, N.GE)(r);
  return (0, a.jsx)(Z, {
Icon: f.RetryIcon,
showTooltip: !l,
tooltipText: o,
text: l ? o : A.Z.Messages.MEMBER_LIST_CONTENT_FEED_RESURRECTED
  });
}

function U(e) {
  let {
entry: n
  } = e, {
location: t
  } = S(), l = (0, N.vU)(n);
  return (0, N.q_)(n) ? (0, a.jsx)(Z, {
Icon: f.FlashIcon,
showTooltip: 0 === t,
text: A.Z.Messages.MEMBER_LIST_CONTENT_FEED_STREAK_DAYS.format({
  days: l
}),
tooltipText: A.Z.Messages.MEMBER_LIST_CONTENT_FEED_STREAK_TOOLTIP.format({
  days: l
})
  }) : null;
}

function w(e) {
  let {
entry: n
  } = e, {
location: t
  } = S(), l = 0 !== t, r = (0, N.yA)(n);
  if (null == r)
return null;
  let o = l ? A.Z.Messages.MEMBER_LIST_CONTENT_FEED_TIMESTAMP_HOURS_THIS_WEEK : A.Z.Messages.MEMBER_LIST_CONTENT_FEED_TIMESTAMP_HOURS;
  return (0, a.jsx)(Z, {
Icon: f.TrophyIcon,
text: (0, a.jsxs)(a.Fragment, {
  children: [
    A.Z.Messages.MEMBER_LIST_CONTENT_FEED_TOP_GAME,
    l ? ' \u2014 ' : ': ',
    o.format({
      hours: Math.round(r / v.Z.Seconds.HOUR)
    })
  ]
})
  });
}

function F(e) {
  var n;
  let {
entry: t
  } = e, {
location: l
  } = S(), r = null === (n = (0, N.PJ)(t, d.N.AGGREGATE_COUNT)) || void 0 === n ? void 0 : n.count;
  if (null == r)
return null;
  let o = 1 === l ? A.Z.Messages.MEMBER_LIST_CONTENT_FEED_TOP_ARTIST_TRACKS_THIS_WEEK.format({
count: r
  }) : A.Z.Messages.MEMBER_LIST_CONTENT_FEED_TRACKS_THIS_WEEK.format({
count: r
  });
  return (0, a.jsx)(Z, {
Icon: f.TrophyIcon,
text: o
  });
}

function G(e) {
  let {
entry: n
  } = e, {
location: t
  } = S();
  if (2 === t)
return null;
  let l = (0, N.ig)(n);
  return null == l || l === E.o.TRENDING_TYPE_UNSPECIFIED ? null : (0, a.jsx)(Z, {
Icon: f.FireIcon,
text: A.Z.Messages.MEMBER_LIST_CONTENT_FEED_TRENDING
  });
}

function B(e) {
  let {
entry: n
  } = e, {
location: t
  } = S();
  if (2 === t)
return null;
  let l = m.default.extractTimestamp(n.extra.application_id);
  return c()().diff(c()(l), 'days') > M.G ? null : (0, a.jsx)(Z, {
Icon: f.StarShootingIcon,
text: A.Z.Messages.MEMBER_LIST_CONTENT_FEED_NEW_RELEASE
  });
}

function H(e) {
  let {
entry: n,
hovered: t
  } = e, {
defaultTextColor: l,
defaultIconColor: r
  } = S();
  return (0, a.jsxs)('div', {
className: C.badgeContainer,
children: [
  (0, a.jsx)(f.TvIcon, {
    size: 'xxs',
    color: r
  }),
  (0, a.jsx)(g.ZP, {
    entry: n,
    textColor: l,
    hovered: t,
    bold: !0
  })
]
  });
}

function b(e) {
  var n;
  let {
entry: t
  } = e, l = /\w+ (\d+), \w+ (\d+)/.exec(null !== (n = t.extra.media_assets_large_text) && void 0 !== n ? n : ''), r = null != l ? A.Z.Messages.MEMBER_LIST_CONTENT_FEED_WATCH_SEASON_EPISODE.format({
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
  return (0, a.jsx)(R.Provider, {
value: {
  location: n,
  ...l
},
children: (0, a.jsx)('div', {
  className: u()(C.badgesContainer, {
    [C.badgesContainerCard]: 0 === n,
    [C.badgesContainerPopout]: 1 === n,
    [C.badgesContainerGameProfile]: 2 === n
  }),
  children: t
})
  });
}