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
  S = n(855892);
let f = async () => await n.e('67963').then(n.t.bind(n, 145193, 19));

function C(e) {
  var t, n, a, C;
  let {
quest: N,
questContent: A,
isHovering: v,
contentPosition: Z,
rowIndex: L,
onReceiveErrorHints: O
  } = e, R = E.r.build(N.config).defaultReward.messages.name, x = (0, u.Rf)(N), b = (null === (t = N.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null, [P, M] = s.useState(!1), D = s.useRef(null);
  (0, c.P)(D, e => {
let {
  height: t
} = e;
null != t && t > 20 && M(!0);
  }, [M]);
  let y = s.useRef(null),
[j, U] = s.useState(!1);
  (0, c.P)(y, e => {
let {
  height: t,
  scrollHeight: n
} = e;
null != t && null != n && t < n && U(!0);
  }, [U]);
  let G = (0, h.D)({
  quest: N,
  taskDetails: x,
  location: p.dr.QUEST_HOME_DESKTOP,
  questContent: _.jn.QUEST_HOME_DESKTOP,
  useV2Variants: !0
}),
k = (null === (n = N.userStatus) || void 0 === n ? void 0 : n.completedAt) != null,
w = (null === (a = N.userStatus) || void 0 === a ? void 0 : a.claimedAt) != null,
B = (0, u.B6)(null === (C = N.userStatus) || void 0 === C ? void 0 : C.claimedAt),
H = s.useCallback(() => (0, i.jsx)(o.Text, {
  variant: 'text-md/semibold',
  color: 'text-brand',
  tag: 'span',
  className: S.header,
  children: R
}), [R]),
V = s.useMemo(() => w ? H() : T.Z.Messages.QUESTS_CLAIM_THE_REWARD_HOOK.format({
  rewardHook: H
}), [
  w,
  H
]),
F = s.useMemo(() => {
  let e = !v && P,
    t = !v && !P,
    n = null;
  if (w ? n = T.Z.Messages.QUESTS_HOME_REWARD_CLAIMED_DESCRIPTION.format({
      claimDate: B
    }) : null != G && (n = G), null != n)
    return (0, i.jsx)(o.Text, {
      variant: 'text-sm/medium',
      color: 'text-muted',
      ref: y,
      className: r()(S.description, {
        [S.truncateTextTwoLines]: e,
        [S.truncateTextThreeLines]: t
      }),
      children: n
    });
}, [
  w,
  G,
  B,
  v,
  P
]),
Y = (0, l.e7)([d.Z], () => d.Z.useReducedMotion);
  return (0, i.jsxs)('div', {
className: r()(S.container, {
  [S.hoveredHeight]: j && v,
  [S.height]: !v || !j
}),
children: [
  (0, i.jsxs)('div', {
    className: r()(S.rewardDescriptionContainer),
    children: [
      !w && k && (0, i.jsx)('div', {
        className: S.completionAnimation
      }),
      b && !w ? (0, i.jsxs)('div', {
        className: S.progressWrapper,
        children: [
          k && (0, i.jsx)(o.LottieAnimation, {
            importData: f,
            className: S.confetti,
            loop: !1,
            autoplay: !1,
            shouldAnimate: !Y
          }),
          (0, i.jsx)(I.Z, {
            quest: N,
            size: 76,
            percentComplete: x.percentComplete,
            children: (0, i.jsx)('div', {
              className: S.circularRewardTileWrapper,
              children: (0, i.jsx)(m.Z, {
                quest: N,
                questContent: A,
                className: S.circularQuestRewardTileAsset,
                location: p.dr.QUEST_HOME_DESKTOP
              })
            })
          })
        ]
      }) : (0, i.jsx)(m.Z, {
        quest: N,
        autoplay: v,
        questContent: A,
        className: S.questRewardTileAsset,
        location: p.dr.QUEST_HOME_DESKTOP
      }),
      (0, i.jsxs)('div', {
        className: S.textContainer,
        children: [
          (0, i.jsx)('div', {
            ref: D,
            children: (0, i.jsx)('span', {
              className: S.headerSpan,
              children: (0, i.jsx)(o.Text, {
                variant: 'text-md/semibold',
                color: 'header-primary',
                className: S.header,
                children: V
              })
            })
          }),
          F
        ]
      })
    ]
  }),
  (0, i.jsx)(g.Z, {
    quest: N,
    location: A,
    contentPosition: Z,
    rowIndex: L,
    onReceiveErrorHints: O
  })
]
  });
}