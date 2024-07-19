n.d(t, {
  g2: function() {
return I;
  },
  hf: function() {
return p;
  },
  k3: function() {
return T;
  },
  tP: function() {
return m;
  }
}), n(47120);
var r = n(735250),
  i = n(470079),
  a = n(338545),
  s = n(442837),
  o = n(481060),
  l = n(594190),
  u = n(594174),
  c = n(617136),
  d = n(113434),
  _ = n(918701),
  E = n(920916),
  f = n(669041),
  h = n(341907);

function p(e) {
  let {
quest: t,
location: n,
questContentPosition: r
  } = e, a = (0, s.e7)([u.default], () => {
var e;
return null === (e = u.default.getCurrentUser()) || void 0 === e ? void 0 : e.verified;
  });
  return i.useCallback(() => {
null != t && ((0, c._3)({
  questId: t.id,
  questContent: n,
  questContentCTA: c.jZ.CLAIM_REWARD,
  questContentPosition: r
}), a ? (0, _.Xv)(t.config) ? (0, E.openCollectibleRewardModal)(t, n) : (0, _.vQ)(t.config) ? (0, h.C)(t, n) : (0, h.hp)({
  questId: t.id,
  location: n,
  questContentPosition: r
}) : (0, f.openRewardModalUnverified)());
  }, [
t,
n,
r,
a
  ]);
}

function m(e) {
  var t;
  let n = (0, s.Wu)([l.ZP], () => l.ZP.getGamesSeen(!1)).find(t => (null == t ? void 0 : t.id) === e);
  if (null == n)
return !1;
  let r = Date.now() - 25920000000;
  return r <= (null !== (t = n.lastLaunched) && void 0 !== t ? t : 0);
}
let I = e => {
let {
  useReducedMotion: t,
  className: n
} = e, [s, l] = (0, a.useSpring)(() => ({})), u = i.useRef(!1), c = (0, a.animated)(o.RefreshIcon);
return {
  render: () => (0, r.jsx)(c, {
    className: n,
    style: t ? void 0 : s,
    color: 'currentColor',
    size: 'xs'
  }),
  startAnimation: () => {
    u.current = !0, l({
      from: {
        rotate: '0deg'
      },
      to: {
        rotate: '360deg'
      },
      config: {
        tension: 750,
        mass: 5,
        friction: 100
      },
      loop: () => u.current,
      immediate: t
    });
  },
  stopAnimation: () => {
    u.current = !1;
  }
};
  },
  T = (e, t) => {
let {
  message: n,
  xboxURL: i
} = (0, d.KX)();
return (0, r.jsx)('span', {
  onClick: n => {
    var r;
    let a = n.target;
    if ((null == a ? void 0 : null === (r = a.tagName) || void 0 === r ? void 0 : r.toLowerCase()) !== 'a')
      return;
    let s = a.getAttribute('href') === i ? c.jZ.HOW_TO_HELP_ARTICLE_XBOX : c.jZ.HOW_TO_HELP_ARTICLE_PLAYSTATION;
    (0, c._3)({
      questId: e,
      questContent: t,
      questContentCTA: s
    });
  },
  children: n
});
  };