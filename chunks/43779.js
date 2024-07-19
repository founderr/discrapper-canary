n.d(t, {
  Z: function() {
return f;
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
let S = async () => await n.e('67963').then(n.t.bind(n, 145193, 19));

function f(e) {
  var t, n, a;
  let {
quest: f,
questContent: C,
isHovering: N
  } = e, A = E.r.build(f.config).defaultReward.messages.name, Z = (0, d.Rf)(f), v = Z.percentComplete > 0, L = (0, d.B6)(f.config.expiresAt, {
month: '2-digit',
day: '2-digit'
  }), [O, R] = s.useState(0), x = s.useRef(null), b = (0, _.D)({
quest: f,
taskDetails: Z,
location: g.dr.QUEST_HOME_DESKTOP,
questContent: u.jn.QUEST_HOME_DESKTOP,
useV2Variants: !0,
expiryDate: L
  }), P = (null === (t = f.userStatus) || void 0 === t ? void 0 : t.completedAt) != null, M = (null === (n = f.userStatus) || void 0 === n ? void 0 : n.claimedAt) != null, D = (0, d.B6)(null === (a = f.userStatus) || void 0 === a ? void 0 : a.claimedAt);
  s.useEffect(() => {
null != x.current && R(x.current.offsetHeight);
  }, []);
  let y = s.useCallback(() => (0, i.jsx)(o.Text, {
  variant: 'text-md/semibold',
  color: 'text-brand',
  tag: 'span',
  className: T.header,
  children: A
}), [A]),
j = s.useMemo(() => M ? y() : p.Z.Messages.QUESTS_CLAIM_THE_REWARD_HOOK.format({
  rewardHook: y
}), [
  M,
  y
]),
U = s.useMemo(() => {
  let e = O > 20,
    t = !N && e,
    n = !N && !e,
    s = null;
  if (M ? s = p.Z.Messages.QUESTS_HOME_REWARD_CLAIMED_DESCRIPTION.format({
      claimDate: D
    }) : null != b && (s = b), null != s)
    return (0, i.jsx)(o.Text, {
      variant: 'text-sm/medium',
      color: 'text-muted',
      className: r()(T.description, {
        [T.truncateTextTwoLines]: t,
        [T.truncateTextThreeLines]: n
      }),
      children: s
    });
}, [
  M,
  b,
  D,
  N,
  O
]),
G = (0, l.e7)([c.Z], () => c.Z.useReducedMotion);
  return (0, i.jsxs)('div', {
className: r()(T.container, {
  [T.hoveredHeight]: N,
  [T.height]: !N
}),
children: [
  (0, i.jsxs)('div', {
    className: r()(T.rewardDescriptionContainer),
    children: [
      !M && P && (0, i.jsx)('div', {
        className: T.completionAnimation
      }),
      v && !M ? (0, i.jsxs)('div', {
        className: T.progressWrapper,
        children: [
          P && (0, i.jsx)(o.LottieAnimation, {
            importData: S,
            className: T.confetti,
            loop: !1,
            autoplay: !1,
            shouldAnimate: !G
          }),
          (0, i.jsx)(h.Z, {
            quest: f,
            size: 76,
            percentComplete: Z.percentComplete,
            children: (0, i.jsx)('div', {
              className: T.circularRewardTileWrapper,
              children: (0, i.jsx)(I.Z, {
                quest: f,
                questContent: C,
                className: T.circularQuestRewardTileAsset
              })
            })
          })
        ]
      }) : (0, i.jsx)(I.Z, {
        quest: f,
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
                children: j
              })
            })
          }),
          U
        ]
      })
    ]
  }),
  (0, i.jsx)(m.Z, {
    quest: f
  })
]
  });
}