n.d(t, {
  Af: function() {
return L;
  },
  An: function() {
return B;
  },
  E6: function() {
return k;
  },
  EE: function() {
return M;
  },
  Gk: function() {
return Y;
  },
  Gt: function() {
return i;
  },
  OV: function() {
return b;
  },
  Rg: function() {
return Z;
  },
  U9: function() {
return V;
  },
  XF: function() {
return P;
  },
  Yl: function() {
return H;
  },
  ej: function() {
return D;
  },
  f: function() {
return G;
  },
  gj: function() {
return U;
  },
  m7: function() {
return y;
  },
  n8: function() {
return F;
  },
  pQ: function() {
return w;
  },
  v1: function() {
return x;
  }
});
var r, i, a = n(735250),
  s = n(470079),
  o = n(120356),
  l = n.n(o),
  u = n(913527),
  c = n.n(u),
  d = n(884439),
  _ = n(705512),
  E = n(442837),
  f = n(481060),
  h = n(70956),
  p = n(823379),
  m = n(709054),
  I = n(719247),
  T = n(22211),
  g = n(561308),
  S = n(797342),
  A = n(371991),
  N = n(206583),
  v = n(689938),
  O = n(119369);
(r = i || (i = {}))[r.CARD = 0] = 'CARD', r[r.POPOUT = 1] = 'POPOUT', r[r.GAME_PROFILE = 2] = 'GAME_PROFILE', r[r.USER_PROFILE = 3] = 'USER_PROFILE';
let R = s.createContext({});

function C() {
  return s.useContext(R);
}

function y(e) {
  let {
children: t,
...n
  } = e;
  return (0, a.jsx)('div', {
className: O.badgeContainer,
...n,
children: t
  });
}

function D(e) {
  let {
Icon: t,
text: n,
iconColor: r,
tooltipText: i,
showTooltip: s
  } = e, {
defaultTextColor: o,
defaultIconColor: l
  } = C();
  return (0, a.jsx)(f.Tooltip, {
text: i,
shouldShow: s,
children: e => (0, a.jsxs)(y, {
  ...e,
  children: [
    (0, a.jsx)(t, {
      size: 'xxs',
      color: null != r ? r : l
    }),
    (0, a.jsx)(f.Text, {
      variant: 'text-xs/normal',
      color: o,
      className: O.badgeLabel,
      children: n
    })
  ]
})
  });
}

function L(e) {
  let {
entry: t
  } = e, {
channel: n
  } = (0, T.Z)(t), {
location: r
  } = C();
  return null == n || (0, p.Hi)(r, [
1,
2,
3
  ]) ? null : (0, a.jsx)(D, {
Icon: f.VoiceNormalIcon,
text: n.name
  });
}

function b(e) {
  let {
entry: t,
hovered: n
  } = e, {
defaultTextColor: r,
defaultIconColor: i,
location: s
  } = C(), o = (0, g.kr)(t) && (0, p.Hi)(s, [
0,
3
  ]), l = o ? f.tokens.colors.TEXT_POSITIVE : i, {
streamPreviewUrl: u
  } = (0, T.Z)(t);
  return (0, a.jsxs)(y, {
children: [
  null == u ? (0, a.jsx)(f.GameControllerIcon, {
    size: 'xxs',
    color: l
  }) : (0, a.jsx)(f.ScreenArrowIcon, {
    size: 'xxs',
    color: l
  }),
  (0, a.jsx)(A.ZP, {
    entry: t,
    textColor: o ? 'text-positive' : r,
    hovered: n,
    bold: !0
  })
]
  });
}

function M(e) {
  let {
entry: t
  } = e, {
defaultTextColor: n,
defaultIconColor: r
  } = C(), {
state: i,
party: s,
inExperiment: o
  } = (0, S.n)(t);
  if (!o)
return null;
  let l = (0, g.bT)(i, s);
  return null == l ? null : (0, a.jsxs)(y, {
children: [
  (0, a.jsx)(f.GroupIcon, {
    size: 'xxs',
    color: r
  }),
  (0, a.jsx)(f.Text, {
    variant: 'text-xs/normal',
    color: n,
    lineClamp: 1,
    children: l
  })
]
  });
}

function P(e) {
  var t;
  let {
entry: n,
hovered: r
  } = e, {
defaultTextColor: i,
defaultIconColor: s,
location: o
  } = C(), l = (0, E.e7)([I.Z], () => I.Z.getMatchingActivity(n));
  if ((null == l ? void 0 : l.timestamps) == null)
return null;
  let u = (0, p.Hi)(o, [
  0,
  3
]),
c = u ? f.tokens.colors.TEXT_POSITIVE : s,
d = null === (t = l.timestamps) || void 0 === t ? void 0 : t.start;
  return (0, a.jsxs)('div', {
className: O.badgeContainer,
children: [
  (0, a.jsx)(f.RecordPlayerIcon, {
    size: 'xxs',
    color: c
  }),
  (0, a.jsx)(A.x3, {
    entry: null != d ? {
      start: d
    } : n,
    textColor: u ? 'text-positive' : i,
    hovered: r,
    bold: !0
  })
]
  });
}

function U(e) {
  let {
entry: t
  } = e, {
location: n
  } = C(), r = 0 === n ? f.tokens.colors.STATUS_POSITIVE : void 0;
  return (0, g.Ol)(t) ? (0, a.jsx)(D, {
Icon: f.NewUserSmallIcon,
text: v.Z.Messages.MEMBER_LIST_CONTENT_FEED_NEW_PLAYER,
iconColor: r
  }) : null;
}

function w(e) {
  let {
entry: t
  } = e, {
location: n
  } = C();
  if (!(0, g.V5)(t))
return null;
  let r = (0, g.kr)(t),
i = 0 === n,
s = i || r ? (0, g.z5)(t) : (0, g.nB)(t);
  return (0, a.jsx)(D, {
Icon: f.TimerIcon,
text: s,
tooltipText: (0, g.EX)(t),
showTooltip: i && !r
  });
}

function x(e) {
  let {
entry: t
  } = e, {
location: n
  } = C(), r = 0 !== n, i = (0, g.dw)(t);
  if (null == i)
return null;
  let s = (0, g.GE)(i);
  return (0, a.jsx)(D, {
Icon: f.RetryIcon,
showTooltip: !r,
tooltipText: s,
text: r ? s : v.Z.Messages.MEMBER_LIST_CONTENT_FEED_RESURRECTED
  });
}

function G(e) {
  let {
entry: t
  } = e, {
location: n
  } = C(), r = (0, g.vU)(t);
  return (0, g.q_)(t) ? (0, a.jsx)(D, {
Icon: f.FlashIcon,
showTooltip: 0 === n,
text: v.Z.Messages.MEMBER_LIST_CONTENT_FEED_STREAK_DAYS.format({
  days: r
}),
tooltipText: v.Z.Messages.MEMBER_LIST_CONTENT_FEED_STREAK_TOOLTIP.format({
  days: r
})
  }) : null;
}

function k(e) {
  let {
entry: t
  } = e, {
location: n
  } = C(), r = 0 !== n, i = (0, g.yA)(t);
  if (null == i)
return null;
  let s = r ? v.Z.Messages.MEMBER_LIST_CONTENT_FEED_TIMESTAMP_HOURS_THIS_WEEK : v.Z.Messages.MEMBER_LIST_CONTENT_FEED_TIMESTAMP_HOURS;
  return (0, a.jsx)(D, {
Icon: f.TrophyIcon,
text: (0, a.jsxs)(a.Fragment, {
  children: [
    v.Z.Messages.MEMBER_LIST_CONTENT_FEED_TOP_GAME,
    r ? ' \u2014 ' : ': ',
    s.format({
      hours: Math.round(i / h.Z.Seconds.HOUR)
    })
  ]
})
  });
}

function B(e) {
  var t;
  let {
entry: n
  } = e, {
location: r
  } = C(), i = null === (t = (0, g.PJ)(n, d.N.AGGREGATE_COUNT)) || void 0 === t ? void 0 : t.count;
  if (null == i)
return null;
  let s = 1 === r ? v.Z.Messages.MEMBER_LIST_CONTENT_FEED_TOP_ARTIST_TRACKS_THIS_WEEK.format({
count: i
  }) : v.Z.Messages.MEMBER_LIST_CONTENT_FEED_TRACKS_THIS_WEEK.format({
count: i
  });
  return (0, a.jsx)(D, {
Icon: f.TrophyIcon,
text: s
  });
}

function F(e) {
  let {
entry: t
  } = e, {
location: n
  } = C();
  if (2 === n)
return null;
  let r = (0, g.ig)(t);
  return null == r || r === _.o.TRENDING_TYPE_UNSPECIFIED ? null : (0, a.jsx)(D, {
Icon: f.FireIcon,
text: v.Z.Messages.MEMBER_LIST_CONTENT_FEED_TRENDING
  });
}

function V(e) {
  let {
entry: t
  } = e, {
location: n
  } = C();
  if (2 === n)
return null;
  let r = m.default.extractTimestamp(t.extra.application_id);
  return c()().diff(c()(r), 'days') > N.G ? null : (0, a.jsx)(D, {
Icon: f.StarShootingIcon,
text: v.Z.Messages.MEMBER_LIST_CONTENT_FEED_NEW_RELEASE
  });
}

function H(e) {
  let {
entry: t,
hovered: n
  } = e, {
defaultTextColor: r,
defaultIconColor: i,
location: s
  } = C(), o = (0, g.kr)(t) && 3 === s, l = o ? f.tokens.colors.TEXT_POSITIVE : i;
  return (0, a.jsxs)('div', {
className: O.badgeContainer,
children: [
  (0, a.jsx)(f.TvIcon, {
    size: 'xxs',
    color: l
  }),
  (0, a.jsx)(A.ZP, {
    entry: t,
    textColor: o ? 'text-positive' : r,
    hovered: n,
    bold: !0
  })
]
  });
}

function Z(e) {
  let {
entry: t
  } = e, n = (0, g.ap)(t.extra.media_assets_large_text);
  return null == n ? null : (0, a.jsx)(D, {
Icon: f.TopicsIcon,
text: n
  });
}

function Y(e) {
  let {
location: t,
children: n,
className: r
  } = e, i = 1 === t ? {
defaultTextColor: 'content-inventory-overlay-text-secondary',
defaultIconColor: f.tokens.colors.CONTENT_INVENTORY_OVERLAY_TEXT_SECONDARY
  } : {
defaultTextColor: 'text-secondary'
  };
  return (0, a.jsx)(R.Provider, {
value: {
  location: t,
  ...i
},
children: (0, a.jsx)('div', {
  className: l()(O.badgesContainer, r, {
    [O.badgesContainerCard]: 0 === t,
    [O.badgesContainerPopout]: 1 === t,
    [O.badgesContainerGameProfile]: 2 === t
  }),
  children: n
})
  });
}