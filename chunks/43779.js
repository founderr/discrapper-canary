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
  h = n(585500),
  E = n(566078),
  I = n(472144),
  m = n(644646),
  g = n(69439),
  p = n(46140),
  T = n(689938),
  f = n(855892);
let S = async () => await n.e('67963').then(n.t.bind(n, 145193, 19));

function C(e) {
  var t, n, a, C;
  let {
quest: N,
questContent: A,
isHovering: v
  } = e, Z = E.r.build(N.config).defaultReward.messages.name, L = (0, u.Rf)(N), O = (null === (t = N.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null, [R, x] = s.useState(!1), b = s.useRef(null);
  (0, c.P)(b, e => {
let {
  height: t
} = e;
null != t && t > 20 && x(!0);
  }, [x]);
  let P = s.useRef(null),
[M, D] = s.useState(!1);
  (0, c.P)(P, e => {
let {
  width: t,
  scrollWidth: n
} = e;
null != t && null != n && n > t && D(!0);
  }, [D]);
  let y = (0, h.D)({
  quest: N,
  taskDetails: L,
  location: p.dr.QUEST_HOME_DESKTOP,
  questContent: _.jn.QUEST_HOME_DESKTOP,
  useV2Variants: !0
}),
j = (null === (n = N.userStatus) || void 0 === n ? void 0 : n.completedAt) != null,
U = (null === (a = N.userStatus) || void 0 === a ? void 0 : a.claimedAt) != null,
G = (0, u.B6)(null === (C = N.userStatus) || void 0 === C ? void 0 : C.claimedAt),
k = s.useCallback(() => (0, i.jsx)(o.Text, {
  variant: 'text-md/semibold',
  color: 'text-brand',
  tag: 'span',
  className: f.header,
  children: Z
}), [Z]),
w = s.useMemo(() => U ? k() : T.Z.Messages.QUESTS_CLAIM_THE_REWARD_HOOK.format({
  rewardHook: k
}), [
  U,
  k
]),
B = s.useMemo(() => {
  let e = !v && R,
    t = !v && !R,
    n = null;
  if (U ? n = T.Z.Messages.QUESTS_HOME_REWARD_CLAIMED_DESCRIPTION.format({
      claimDate: G
    }) : null != y && (n = y), null != n)
    return (0, i.jsx)(o.Text, {
      variant: 'text-sm/medium',
      color: 'text-muted',
      ref: P,
      className: r()(f.description, {
        [f.truncateTextTwoLines]: e,
        [f.truncateTextThreeLines]: t
      }),
      children: n
    });
}, [
  U,
  y,
  G,
  v,
  R
]),
H = (0, l.e7)([d.Z], () => d.Z.useReducedMotion);
  return (0, i.jsxs)('div', {
className: r()(f.container, {
  [f.hoveredHeight]: M && v,
  [f.height]: !v || !M
}),
children: [
  (0, i.jsxs)('div', {
    className: r()(f.rewardDescriptionContainer),
    children: [
      !U && j && (0, i.jsx)('div', {
        className: f.completionAnimation
      }),
      O && !U ? (0, i.jsxs)('div', {
        className: f.progressWrapper,
        children: [
          j && (0, i.jsx)(o.LottieAnimation, {
            importData: S,
            className: f.confetti,
            loop: !1,
            autoplay: !1,
            shouldAnimate: !H
          }),
          (0, i.jsx)(I.Z, {
            quest: N,
            size: 76,
            percentComplete: L.percentComplete,
            children: (0, i.jsx)('div', {
              className: f.circularRewardTileWrapper,
              children: (0, i.jsx)(m.Z, {
                quest: N,
                questContent: A,
                className: f.circularQuestRewardTileAsset
              })
            })
          })
        ]
      }) : (0, i.jsx)(m.Z, {
        quest: N,
        autoplay: v,
        questContent: A,
        className: f.questRewardTileAsset
      }),
      (0, i.jsxs)('div', {
        className: f.textContainer,
        children: [
          (0, i.jsx)('div', {
            ref: b,
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
          B
        ]
      })
    ]
  }),
  (0, i.jsx)(g.Z, {
    quest: N,
    location: A
  })
]
  });
}