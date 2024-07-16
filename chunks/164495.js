n.d(t, {
  y: function() {
return f;
  }
});
var s = n(735250);
n(470079);
var o = n(481060),
  r = n(617136),
  a = n(113434),
  i = n(497505),
  l = n(918701),
  c = n(796111),
  d = n(667105),
  u = n(46140),
  p = n(689938),
  x = n(941624);
let m = e => {
let {
  quest: t
} = e;
return (0, s.jsx)('div', {
  className: x.ctaContainer,
  children: (0, s.jsx)(o.Button, {
    className: x.flex,
    size: o.Button.Sizes.SMALL,
    onClick: () => (0, l.FE)(t, {
      content: i.jn.QUEST_BAR_V2,
      ctaContent: r.jZ.OPEN_GAME_LINK
    }),
    children: p.Z.Messages.QUESTS_GET_THIS_GAME
  })
});
  },
  g = e => {
let {
  quest: t
} = e;
return (0, s.jsx)('div', {
  className: x.ctaContainer,
  children: (0, s.jsx)(o.Button, {
    fullWidth: !0,
    onClick: () => (0, l.gI)({
      quest: t,
      showInline: !1
    }, {
      content: i.jn.QUEST_BAR_V2,
      ctaContent: r.jZ.CONNECT_CONSOLE
    }),
    size: o.Button.Sizes.SMALL,
    children: p.Z.Messages.QUESTS_CONSOLE_CONNECTION_HELPER_STEPS_CTA
  })
});
  },
  C = e => {
let {
  quest: t,
  useReducedMotion: n,
  isExpanded: r
} = e, a = (0, d.hf)({
  quest: t,
  location: i.jn.QUEST_BAR_V2
});
return (0, s.jsx)('div', {
  className: x.ctaContainer,
  children: (0, s.jsx)(o.ShinyButton, {
    fullWidth: !0,
    size: o.Button.Sizes.SMALL,
    onClick: a,
    pauseAnimation: n || !r,
    buttonShineClassName: x.shine,
    children: p.Z.Messages.QUESTS_CLAIM_REWARD
  })
});
  },
  f = e => {
var t;
let {
  quest: n,
  useReducedMotion: o,
  isExpanded: r,
  hasMadeProgress: i
} = e, d = (null === (t = n.userStatus) || void 0 === t ? void 0 : t.completedAt) != null, p = (0, a._s)({
  quest: n
}), x = (0, c.P)({
  location: u.dr.QUESTS_BAR
}), f = (0, a.z)(n);
if (d)
  return (0, s.jsx)(C, {
    quest: n,
    useReducedMotion: o,
    isExpanded: r
  });
if (p && !x)
  return (0, s.jsx)(g, {
    quest: n
  });
if (!i && !f && !(0, l.zK)(n, u.S7.IN_HOUSE_CONSOLE_QUEST))
  return (0, s.jsx)(m, {
    quest: n
  });
return null;
  };