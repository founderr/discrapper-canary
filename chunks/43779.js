n.d(t, {
  Z: function() {
return S;
  }
}), n(47120);
var i = n(735250),
  s = n(470079),
  a = n(120356),
  r = n.n(a),
  l = n(442837),
  o = n(481060),
  c = n(607070),
  d = n(113434),
  u = n(497505),
  _ = n(585500),
  E = n(566078),
  h = n(472144),
  I = n(644646),
  m = n(69439),
  g = n(46140),
  p = n(689938),
  T = n(855892);
let f = async () => await n.e('67963').then(n.t.bind(n, 145193, 19));

function S(e) {
  var t, n, a;
  let {
quest: S,
questContent: C,
isHovering: N
  } = e, A = E.r.build(S.config).defaultReward.messages.name, v = (0, d.Rf)(S), Z = v.percentComplete > 0, L = (0, d.B6)(S.config.expiresAt, {
month: '2-digit',
day: '2-digit'
  }), [O, R] = s.useState(0), x = s.useRef(null), b = s.useRef(null), P = (0, _.D)({
quest: S,
taskDetails: v,
location: g.dr.QUEST_HOME_DESKTOP,
questContent: u.jn.QUEST_HOME_DESKTOP,
useV2Variants: !0,
expiryDate: L
  }), M = (null === (t = S.userStatus) || void 0 === t ? void 0 : t.completedAt) != null, D = (null === (n = S.userStatus) || void 0 === n ? void 0 : n.claimedAt) != null, y = (0, d.B6)(null === (a = S.userStatus) || void 0 === a ? void 0 : a.claimedAt), j = null != b.current && b.current.scrollHeight > b.current.clientHeight;
  s.useEffect(() => {
null != x.current && R(x.current.offsetHeight);
  }, []);
  let U = s.useCallback(() => (0, i.jsx)(o.Text, {
  variant: 'text-md/semibold',
  color: 'text-brand',
  tag: 'span',
  className: T.header,
  children: A
}), [A]),
G = s.useMemo(() => D ? U() : p.Z.Messages.QUESTS_CLAIM_THE_REWARD_HOOK.format({
  rewardHook: U
}), [
  D,
  U
]),
k = s.useMemo(() => {
  let e = O > 20,
    t = !N && e,
    n = !N && !e,
    s = null;
  if (D ? s = p.Z.Messages.QUESTS_HOME_REWARD_CLAIMED_DESCRIPTION.format({
      claimDate: y
    }) : null != P && (s = P), null != s)
    return (0, i.jsx)(o.Text, {
      variant: 'text-sm/medium',
      color: 'text-muted',
      ref: b,
      className: r()(T.description, {
        [T.truncateTextTwoLines]: t,
        [T.truncateTextThreeLines]: n
      }),
      children: s
    });
}, [
  D,
  P,
  y,
  N,
  O
]),
w = (0, l.e7)([c.Z], () => c.Z.useReducedMotion);
  return (0, i.jsxs)('div', {
className: r()(T.container, {
  [T.hoveredHeight]: j && N,
  [T.height]: !N || !j
}),
children: [
  (0, i.jsxs)('div', {
    className: r()(T.rewardDescriptionContainer),
    children: [
      !D && M && (0, i.jsx)('div', {
        className: T.completionAnimation
      }),
      Z && !D ? (0, i.jsxs)('div', {
        className: T.progressWrapper,
        children: [
          M && (0, i.jsx)(o.LottieAnimation, {
            importData: f,
            className: T.confetti,
            loop: !1,
            autoplay: !1,
            shouldAnimate: !w
          }),
          (0, i.jsx)(h.Z, {
            quest: S,
            size: 76,
            percentComplete: v.percentComplete,
            children: (0, i.jsx)('div', {
              className: T.circularRewardTileWrapper,
              children: (0, i.jsx)(I.Z, {
                quest: S,
                questContent: C,
                className: T.circularQuestRewardTileAsset
              })
            })
          })
        ]
      }) : (0, i.jsx)(I.Z, {
        quest: S,
        questContent: u.jn.QUEST_HOME_DESKTOP,
        className: T.questRewardTileAsset
      }),
      (0, i.jsxs)('div', {
        className: T.textContainer,
        children: [
          (0, i.jsx)('div', {
            ref: x,
            children: (0, i.jsx)('span', {
              className: T.headerSpan,
              children: (0, i.jsx)(o.Text, {
                variant: 'text-md/semibold',
                color: 'header-primary',
                className: T.header,
                children: G
              })
            })
          }),
          k
        ]
      })
    ]
  }),
  (0, i.jsx)(m.Z, {
    quest: S
  })
]
  });
}