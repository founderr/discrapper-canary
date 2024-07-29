var i = n(735250);
n(470079);
var s = n(120356),
  a = n.n(s),
  r = n(442837),
  l = n(481060),
  o = n(230711),
  c = n(607070),
  u = n(706454),
  d = n(63063),
  _ = n(930153),
  E = n(617136),
  I = n(113434),
  m = n(569984),
  T = n(497505),
  h = n(918701),
  N = n(566078),
  C = n(340100),
  f = n(644646),
  p = n(667105),
  g = n(128535),
  S = n(87894),
  A = n(2660),
  R = n(46140),
  O = n(981631),
  x = n(689938),
  M = n(817024),
  v = n(789002);
let L = (e, t, n) => (0, S.uq)(e) && !n && 'lg' === t ? 'text-lg/medium' : 'lg' === t ? 'text-md/medium' : 'sm' === t ? 'text-sm/medium' : 'text-xs/medium';

function Z(e) {
  let {
containerSize: t,
onClick: n,
children: s,
tabIndex: a
  } = e;
  return 'xs' === t ? (0, i.jsx)(l.Clickable, {
tabIndex: a,
className: M.learnMoreLink,
tag: 'span',
onClick: n,
children: (0, i.jsx)(l.Text, {
  variant: 'text-sm/medium',
  color: 'text-link',
  children: s
})
  }) : (0, i.jsx)(l.Button, {
tabIndex: a,
wrapperClassName: M.ctaButtonWrapper,
color: l.ButtonColors.PRIMARY,
onClick: n,
children: s
  });
}

function P(e) {
  let {
quest: t,
progressState: n,
isCollectibleQuest: s,
location: a,
questContentPosition: o,
inGiftInventory: u
  } = e, d = n >= I.OH.COMPLETED, _ = (0, r.e7)([c.Z], () => c.Z.useReducedMotion), E = (0, r.e7)([m.Z], () => m.Z.isEnrolling(t.id)), T = (0, h.zK)(t, R.S7.IN_HOUSE_CONSOLE_QUEST), N = (0, p.Ks)({
progressState: n,
quest: t,
isInHouseQuest: T,
location: a,
isCollectibleQuest: s,
questContentPosition: o,
inGiftInventory: u
  }), C = T && u && d, f = C ? M.inHouseButton : l.ButtonColors.BRAND, g = d && !_ ? l.ShinyButton : l.Button;
  return (0, i.jsx)(l.Tooltip, {
text: N.tooltipText,
tooltipContentClassName: M.ctaTooltipText,
children: e => {
  var t;
  return (0, i.jsx)(g, {
    ...e,
    wrapperClassName: M.ctaButtonWrapper,
    color: f,
    disabled: null == N.onClick,
    submitting: E,
    onClick: null !== (t = N.onClick) && void 0 !== t ? t : () => {},
    children: (0, i.jsxs)('div', {
      className: M.ctaButtonInner,
      children: [
        C && (0, i.jsx)('img', {
          src: v,
          alt: '',
          className: M.inHouseIcon
        }),
        N.text
      ]
    })
  });
}
  }, N.tooltipText);
}
t.Z = e => {
  let {
quest: t,
location: n,
size: s,
isFocused: c,
isQuestExpired: m,
isExpanded: p,
isAnimating: v,
contentPosition: D
  } = e, b = (0, I._Q)(t), j = b >= I.OH.ACCEPTED, U = b >= I.OH.COMPLETED, y = b >= I.OH.CLAIMED, B = (0, h.Xv)(t.config), k = (0, S.uq)(n), F = n === T.jn.QUESTS_EMBED, G = p || v, w = j && !y && k, V = (0, I.t5)(t, R.dr.QUESTS_CARD, n), {
xboxAndPlaystationAccounts: H
  } = (0, I.z6)(), Y = (0, r.e7)([u.default], () => u.default.locale), W = (0, I.z)(t), K = k && B, z = m && !U, Q = H.length > 0 && k && (0, h.$J)(t) && j && !U && !W, q = (0, i.jsx)(f.Z, {
autoplay: c,
className: a()(M.gridImg, {
  [M.questRewardGiftInventory]: k && 'lg' === s,
  [M.questRewardEmbed]: F && 'lg' === s,
  [M.questRewardEmbedSm]: 'sm' === s,
  [M.questRewardEmbedXs]: 'xs' === s
}),
learnMoreStyle: k ? null : 'text',
quest: t,
questContent: n,
questContentPosition: D
  });
  return (0, i.jsxs)('div', {
className: M.root,
children: [
  (0, i.jsxs)('div', {
    className: a()(M.outerContainer, {
      [M.outerContainerSm]: 'sm' === s,
      [M.outerContainerXs]: 'xs' === s,
      [M.outerContainerNoProgress]: !w
    }),
    style: {
      visibility: G ? 'visible' : 'hidden'
    },
    'aria-hidden': !G,
    children: [
      (0, i.jsx)(l.Tooltip, {
        text: z ? x.Z.Messages.QUESTS_REWARD_TILE_EXPIRED_QUEST : null,
        tooltipContentClassName: M.rewardTileExpirationTooltip,
        shouldShow: z,
        children: e => (0, i.jsxs)('div', {
          className: M.rewardTileWrapper,
          ...e,
          children: [
            m && (0, i.jsx)('div', {
              className: M.rewardTileExpired,
              children: (0, i.jsx)(l.CircleExclamationPointIcon, {
                color: l.tokens.colors.WHITE
              })
            }),
            K ? (0, i.jsx)(A.Z, {
              questConfig: t.config,
              fallback: q,
              isFocused: c
            }) : q
          ]
        })
      }),
      (0, i.jsxs)('div', {
        className: a()(M.gridText, M.taskDetails),
        children: [
          (0, i.jsx)(l.Text, {
            variant: L(n, s, j),
            className: M.taskInstructions,
            children: m ? x.Z.Messages.QUESTS_EXPIRED_QUEST_CARD_HEADING.format({
              questName: t.config.messages.questName
            }) : V
          }),
          (0, i.jsx)(l.Text, {
            variant: 'lg' === s ? 'text-sm/medium' : 'text-xs/medium',
            color: 'text-muted',
            children: function(e) {
              var t, n, i, s, a, r;
              let {
                quest: l,
                location: o,
                locale: c,
                isQuestExpired: u
              } = e, E = (null === (t = l.userStatus) || void 0 === t ? void 0 : t.completedAt) != null, m = E && (null === (n = l.userStatus) || void 0 === n ? void 0 : n.claimedAt) != null, T = (0, h.zK)(l, R.S7.IN_HOUSE_CONSOLE_QUEST), C = (0, S.uq)(o), f = (0, I.B6)(null === (i = l.userStatus) || void 0 === i ? void 0 : i.completedAt, {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              }), p = (0, h.oo)({
                quest: l
              }), g = N.r.build(l.config).defaultReward.messages.nameWithArticle, A = (0, h.Kr)(l.config), M = (0, h.b7)(l);
              if (E && T && C)
                return x.Z.Messages.QUEST_REWARD_COMPLETED_UNCLAIMED.format({
                  date: f
                });
              if (m) {
                let e = p ? (0, h.o9)({
                    quest: l,
                    idx: null === (s = l.userStatus) || void 0 === s ? void 0 : s.claimedTier
                  }) : null,
                  t = null !== (a = null == e ? void 0 : e.messages.nameWithArticle) && void 0 !== a ? a : null;
                return null != t ? x.Z.Messages.QUEST_REWARD_COMPLETED_CLAIMED.format({
                  reward: t,
                  date: f
                }) : x.Z.Messages.QUEST_REWARD_COMPLETED.format({
                  reward: g,
                  date: f
                });
              }
              if (E)
                return p ? x.Z.Messages.QUEST_REWARD_COMPLETED_UNCLAIMED.format({
                  date: f
                }) : x.Z.Messages.QUEST_REWARD_COMPLETED.format({
                  reward: g,
                  date: f
                });
              let v = p ? (0, h.o9)({
                quest: l,
                idx: 0
              }) : null;
              return u ? x.Z.Messages.QUESTS_EXPIRED_QUEST_CARD_SUBHEADING.format({
                reward: null !== (r = null == v ? void 0 : v.messages.nameWithArticle) && void 0 !== r ? r : g
              }) : null != v && null != v.approximateCount ? x.Z.Messages.QUEST_REWARD_TIERED.format({
                maxReward: v.messages.nameWithArticle,
                maxRewardCount: (0, _.Bs)(v.approximateCount, c),
                helpCenterLink: d.Z.getArticleURL(O.BhN.QUESTS_LEARN_MORE)
              }) : null != A ? x.Z.Messages.QUEST_REWARD_WITH_EXPIRATION.format({
                reward: g,
                duration: A
              }) : null != M ? M.description : x.Z.Messages.QUEST_REWARD.format({
                reward: g
              });
            }({
              quest: t,
              location: n,
              locale: Y,
              isQuestExpired: m
            })
          })
        ]
      }),
      (0, i.jsxs)('div', {
        className: a()(M.ctaButtonContainer, M.gridCtaButtons),
        children: [
          !k && (0, i.jsx)(Z, {
            containerSize: s,
            onClick: () => {
              o.Z.open(O.oAB.INVENTORY), (0, E._3)({
                questId: t.id,
                questContent: n,
                questContentPosition: D,
                questContentCTA: E.jZ.LEARN_MORE
              });
            },
            children: x.Z.Messages.QUESTS_LEARN_MORE_V2
          }),
          m && !U ? null : (0, i.jsx)(P, {
            quest: t,
            progressState: b,
            isCollectibleQuest: B,
            location: n,
            inGiftInventory: k
          })
        ]
      }),
      w && (0, i.jsx)(C.Z, {
        className: M.gridProgressBar,
        color: U ? l.tokens.colors.TEXT_POSITIVE : l.tokens.colors.BG_BRAND,
        quest: t,
        isInventory: k
      })
    ]
  }),
  Q && (0, i.jsxs)('div', {
    className: M.microphoneContainer,
    children: [
      (0, i.jsx)('div', {
        className: M.separator
      }),
      (0, i.jsx)(g.Z, {
        quest: t,
        location: n
      })
    ]
  })
]
  });
};