n.d(t, {
  Z: function() {
return p;
  }
}), n(47120);
var i = n(735250),
  s = n(470079),
  a = n(120356),
  r = n.n(a),
  l = n(481060),
  o = n(113434),
  c = n(497505),
  d = n(585500),
  u = n(566078),
  _ = n(472144),
  E = n(644646),
  h = n(69439),
  I = n(46140),
  m = n(689938),
  g = n(855892);

function p(e) {
  var t, n;
  let {
quest: a,
questContent: p,
isHovering: T
  } = e, S = u.r.build(a.config).defaultReward.messages.name, f = (0, o.Rf)(a), C = f.percentComplete > 0, N = (0, o.B6)(a.config.expiresAt, {
month: '2-digit',
day: '2-digit'
  }), [A, Z] = s.useState(0), v = s.useRef(null), L = (0, d.D)({
quest: a,
taskDetails: f,
location: I.dr.QUEST_HOME_DESKTOP,
questContent: c.jn.QUEST_HOME_DESKTOP,
useV2Variants: !0,
expiryDate: N
  }), O = (null === (t = a.userStatus) || void 0 === t ? void 0 : t.claimedAt) != null, R = (0, o.B6)(null === (n = a.userStatus) || void 0 === n ? void 0 : n.claimedAt);
  s.useEffect(() => {
null != v.current && Z(v.current.offsetHeight);
  }, []);
  let x = s.useCallback(() => (0, i.jsx)(l.Text, {
  variant: 'text-md/semibold',
  color: 'text-brand',
  tag: 'span',
  className: g.header,
  children: S
}), [S]),
b = s.useMemo(() => O ? x() : m.Z.Messages.QUESTS_CLAIM_THE_REWARD_HOOK.format({
  rewardHook: x
}), [
  O,
  x
]),
P = s.useMemo(() => {
  let e = A > 20,
    t = !T && e,
    n = !T && !e,
    s = null;
  if (O ? s = m.Z.Messages.QUESTS_HOME_REWARD_CLAIMED_DESCRIPTION.format({
      claimDate: R
    }) : null != L && (s = L), null != s)
    return (0, i.jsx)(l.Text, {
      variant: 'text-sm/medium',
      color: 'text-muted',
      className: r()(g.description, {
        [g.truncateTextTwoLines]: t,
        [g.truncateTextThreeLines]: n
      }),
      children: s
    });
}, [
  O,
  L,
  R,
  T,
  A
]);
  return (0, i.jsxs)('div', {
className: r()(g.container, {
  [g.hoveredHeight]: T,
  [g.height]: !T
}),
children: [
  (0, i.jsxs)('div', {
    className: r()(g.rewardDescriptionContainer),
    children: [
      C && !O ? (0, i.jsx)('div', {
        className: g.progressWrapper,
        children: (0, i.jsx)(_.Z, {
          quest: a,
          size: 76,
          percentComplete: f.percentComplete,
          children: (0, i.jsx)('div', {
            className: g.circularRewardTileWrapper,
            children: (0, i.jsx)(E.Z, {
              quest: a,
              questContent: p,
              className: g.circularQuestRewardTileAsset
            })
          })
        })
      }) : (0, i.jsx)(E.Z, {
        quest: a,
        questContent: c.jn.QUEST_HOME_DESKTOP,
        className: g.questRewardTileAsset
      }),
      (0, i.jsxs)('div', {
        className: g.textContainer,
        children: [
          (0, i.jsx)('div', {
            ref: v,
            children: (0, i.jsx)('span', {
              className: g.headerSpan,
              children: (0, i.jsx)(l.Text, {
                variant: 'text-md/semibold',
                color: 'header-primary',
                className: g.header,
                children: b
              })
            })
          }),
          P
        ]
      })
    ]
  }),
  (0, i.jsx)(h.Z, {
    quest: a
  })
]
  });
}