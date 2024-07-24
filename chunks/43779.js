n.d(t, {
  Z: function() {
return C;
  }
}), n(47120);
var i = n(735250),
  s = n(470079),
  a = n(120356),
  r = n.n(a),
  l = n(442837),
  o = n(481060),
  c = n(393238),
  d = n(607070),
  u = n(113434),
  _ = n(497505),
  E = n(585500),
  h = n(566078),
  I = n(472144),
  m = n(644646),
  g = n(69439),
  p = n(46140),
  T = n(689938),
  f = n(803162);
let S = async () => await n.e('67963').then(n.t.bind(n, 145193, 19));

function C(e) {
  var t, n, a;
  let {
quest: C,
questContent: N,
isHovering: A
  } = e, v = h.r.build(C.config).defaultReward.messages.name, Z = (0, u.Rf)(C), L = Z.percentComplete >= 0, [O, R] = s.useState(!1), x = s.useRef(null);
  (0, c.P)(x, e => {
let {
  height: t
} = e;
null != t && t > 20 && R(!0);
  }, [R]);
  let b = s.useRef(null),
[P, M] = s.useState(!1);
  (0, c.P)(b, e => {
let {
  width: t,
  scrollWidth: n
} = e;
null != t && null != n && n > t && M(!0);
  }, [M]);
  let D = (0, E.D)({
  quest: C,
  taskDetails: Z,
  location: p.dr.QUEST_HOME_DESKTOP,
  questContent: _.jn.QUEST_HOME_DESKTOP,
  useV2Variants: !0
}),
y = (null === (t = C.userStatus) || void 0 === t ? void 0 : t.completedAt) != null,
j = (null === (n = C.userStatus) || void 0 === n ? void 0 : n.claimedAt) != null,
U = (0, u.B6)(null === (a = C.userStatus) || void 0 === a ? void 0 : a.claimedAt),
G = s.useCallback(() => (0, i.jsx)(o.Text, {
  variant: 'text-md/semibold',
  color: 'text-brand',
  tag: 'span',
  className: f.header,
  children: v
}), [v]),
w = s.useMemo(() => j ? G() : T.Z.Messages.QUESTS_CLAIM_THE_REWARD_HOOK.format({
  rewardHook: G
}), [
  j,
  G
]),
k = s.useMemo(() => {
  let e = !A && O,
    t = !A && !O,
    n = null;
  if (j ? n = T.Z.Messages.QUESTS_HOME_REWARD_CLAIMED_DESCRIPTION.format({
      claimDate: U
    }) : null != D && (n = D), null != n)
    return (0, i.jsx)(o.Text, {
      variant: 'text-sm/medium',
      color: 'text-muted',
      ref: b,
      className: r()(f.description, {
        [f.truncateTextTwoLines]: e,
        [f.truncateTextThreeLines]: t
      }),
      children: n
    });
}, [
  j,
  D,
  U,
  A,
  O
]),
B = (0, l.e7)([d.Z], () => d.Z.useReducedMotion);
  return (0, i.jsxs)('div', {
className: r()(f.container, {
  [f.hoveredHeight]: P && A,
  [f.height]: !A || !P
}),
children: [
  (0, i.jsxs)('div', {
    className: r()(f.rewardDescriptionContainer),
    children: [
      !j && y && (0, i.jsx)('div', {
        className: f.completionAnimation
      }),
      L && !j ? (0, i.jsxs)('div', {
        className: f.progressWrapper,
        children: [
          y && (0, i.jsx)(o.LottieAnimation, {
            importData: S,
            className: f.confetti,
            loop: !1,
            autoplay: !1,
            shouldAnimate: !B
          }),
          (0, i.jsx)(I.Z, {
            quest: C,
            size: 76,
            percentComplete: Z.percentComplete,
            children: (0, i.jsx)('div', {
              className: f.circularRewardTileWrapper,
              children: (0, i.jsx)(m.Z, {
                quest: C,
                questContent: N,
                className: f.circularQuestRewardTileAsset
              })
            })
          })
        ]
      }) : (0, i.jsx)(m.Z, {
        quest: C,
        autoplay: A,
        questContent: N,
        className: f.questRewardTileAsset
      }),
      (0, i.jsxs)('div', {
        className: f.textContainer,
        children: [
          (0, i.jsx)('div', {
            ref: x,
            children: (0, i.jsx)('span', {
              className: f.headerSpan,
              children: (0, i.jsx)(o.Text, {
                variant: 'text-md/semibold',
                color: 'header-primary',
                className: f.header,
                children: w
              })
            })
          }),
          k
        ]
      })
    ]
  }),
  (0, i.jsx)(g.Z, {
    quest: C,
    location: N
  })
]
  });
}