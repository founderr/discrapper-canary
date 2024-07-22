var i, a, s = n(735250),
  r = n(470079),
  l = n(120356),
  o = n.n(l),
  c = n(442837),
  d = n(481060),
  u = n(230711),
  _ = n(607070),
  E = n(706454),
  I = n(63063),
  m = n(930153),
  T = n(617136),
  h = n(272008),
  N = n(113434),
  f = n(569984),
  C = n(497505),
  p = n(918701),
  g = n(796111),
  S = n(566078),
  A = n(340100),
  R = n(644646),
  O = n(667105),
  x = n(128535),
  M = n(87894),
  v = n(2660),
  L = n(46140),
  Z = n(981631),
  P = n(689938),
  b = n(817024),
  D = n(789002);
let j = (e, t, n) => (0, M.uq)(e) && !n && 'lg' === t ? 'text-lg/medium' : 'lg' === t ? 'text-md/medium' : 'sm' === t ? 'text-sm/medium' : 'text-xs/medium';

function U(e) {
  let {
containerSize: t,
onClick: n,
children: i,
tabIndex: a
  } = e;
  return 'xs' === t ? (0, s.jsx)(d.Clickable, {
tabIndex: a,
className: b.learnMoreLink,
tag: 'span',
onClick: n,
children: (0, s.jsx)(d.Text, {
  variant: 'text-sm/medium',
  color: 'text-link',
  children: i
})
  }) : (0, s.jsx)(d.Button, {
tabIndex: a,
wrapperClassName: b.ctaButtonWrapper,
color: d.ButtonColors.PRIMARY,
onClick: n,
children: i
  });
}
(i = a || (a = {}))[i.UNACCEPTED = 0] = 'UNACCEPTED', i[i.ACCEPTED = 1] = 'ACCEPTED', i[i.IN_PROGRESS = 2] = 'IN_PROGRESS', i[i.COMPLETED = 3] = 'COMPLETED', i[i.CLAIMED = 4] = 'CLAIMED';

function y(e) {
  let {
quest: t,
progressState: n,
isCollectibleQuest: i,
location: a,
questContentPosition: l,
inGiftInventory: o
  } = e, u = n >= 3, E = (0, c.e7)([_.Z], () => _.Z.useReducedMotion), I = (0, c.e7)([f.Z], () => f.Z.isEnrolling(t.id)), m = (0, p.zK)(t, L.S7.IN_HOUSE_CONSOLE_QUEST), C = function(e) {
let {
  quest: t,
  progressState: n,
  isCollectibleQuest: i,
  location: a,
  questContentPosition: s,
  isInHouseQuest: l,
  inGiftInventory: o
} = e, c = (0, O.hf)({
  quest: t,
  location: a,
  questContentPosition: s
}), d = (0, N._s)({
  quest: t
});
return r.useMemo(() => {
  switch (n) {
    case 0:
      return {
        text: P.Z.Messages.QUESTS_ACCEPT,
          tooltipText: P.Z.Messages.QUESTS_ACCEPT_TOOLTIP,
          onClick: () => (0, h.AH)(t.id, {
            questContent: a,
            questContentCTA: T.jZ.ACCEPT_QUEST,
            questContentPosition: s
          })
      };
    case 1:
    case 2:
      if (d && o)
        return {
          text: P.Z.Messages.QUESTS_CONNECT_CONSOLE,
          tooltipText: null,
          onClick: () => (0, p.gI)({
            quest: t,
            showInline: (0, g.i)({
              location: L.dr.QUESTS_CARD
            })
          }, {
            content: a,
            ctaContent: T.jZ.CONNECT_CONSOLE
          })
        };
      return {
        text: P.Z.Messages.QUESTS_CLAIM_REWARD,
          tooltipText: P.Z.Messages.QUESTS_IN_PROGRESS_TOOLTIP,
          onClick: null
      };
    case 3:
      return {
        text: P.Z.Messages.QUESTS_CLAIM_REWARD,
          tooltipText: l ? P.Z.Messages.QUESTS_IN_HOUSE_REWARD_TOOLTIP : null,
          onClick: c
      };
    case 4:
      let e = {
        tooltipText: null,
        onClick: c
      };
      if (l)
        return {
          ...e,
          text: P.Z.Messages.QUESTS_MOBILE_HOME_VIEW_REWARD
        };
      if (i)
        return {
          ...e,
          text: P.Z.Messages.COLLECTIBLES_USE_NOW
        };
      else if ((0, p.vQ)(t.config))
        return {
          ...e,
          text: P.Z.Messages.QUESTS_MOBILE_HOME_VIEW_REWARD
        };
      return {
        ...e,
        text: P.Z.Messages.QUESTS_SEE_CODE
      };
  }
}, [
  t,
  i,
  l,
  a,
  c,
  n,
  s,
  d,
  o
]);
  }({
progressState: n,
quest: t,
isInHouseQuest: m,
location: a,
isCollectibleQuest: i,
questContentPosition: l,
inGiftInventory: o
  }), S = m && o && u, A = S ? b.inHouseButton : d.ButtonColors.BRAND, R = u && !E ? d.ShinyButton : d.Button;
  return (0, s.jsx)(d.Tooltip, {
text: C.tooltipText,
tooltipContentClassName: b.ctaTooltipText,
children: e => {
  var t;
  return (0, s.jsx)(R, {
    ...e,
    wrapperClassName: b.ctaButtonWrapper,
    color: A,
    disabled: null == C.onClick,
    submitting: I,
    onClick: null !== (t = C.onClick) && void 0 !== t ? t : () => {},
    children: (0, s.jsxs)('div', {
      className: b.ctaButtonInner,
      children: [
        S && (0, s.jsx)('img', {
          src: D,
          alt: '',
          className: b.inHouseIcon
        }),
        C.text
      ]
    })
  });
}
  }, C.tooltipText);
}
t.Z = e => {
  let {
quest: t,
location: n,
size: i,
isFocused: a,
isQuestExpired: r,
isExpanded: l,
isAnimating: _,
contentPosition: h
  } = e, f = function(e) {
var t, n, i;
let a = (null === (t = e.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null,
  s = (null === (n = e.userStatus) || void 0 === n ? void 0 : n.completedAt) != null,
  r = (null === (i = e.userStatus) || void 0 === i ? void 0 : i.claimedAt) != null,
  l = (0, N.Rf)(e).percentComplete > 0;
if (r)
  return 4;
if (s)
  return 3;
if (l)
  return 2;
else if (a)
  return 1;
else
  return 0;
  }(t), g = f >= 1, O = f >= 3, D = f >= 4, B = (0, p.Xv)(t.config), k = (0, M.uq)(n), G = n === C.jn.QUESTS_EMBED, F = l || _, w = g && !D && k, V = (0, N.t5)(t, L.dr.QUESTS_CARD, n), {
xboxAndPlaystationAccounts: H
  } = (0, N.z6)(), Y = (0, c.e7)([E.default], () => E.default.locale), W = (0, N.z)(t), z = k && B, K = r && !O, Q = H.length > 0 && k && (0, p.$J)(t) && g && !O && !W, q = (0, s.jsx)(R.Z, {
autoplay: a,
className: o()(b.gridImg, {
  [b.questRewardGiftInventory]: k && 'lg' === i,
  [b.questRewardEmbed]: G && 'lg' === i,
  [b.questRewardEmbedSm]: 'sm' === i,
  [b.questRewardEmbedXs]: 'xs' === i
}),
learnMoreStyle: k ? null : 'text',
quest: t,
questContent: n,
questContentPosition: h
  });
  return (0, s.jsxs)('div', {
className: b.root,
children: [
  (0, s.jsxs)('div', {
    className: o()(b.outerContainer, {
      [b.outerContainerSm]: 'sm' === i,
      [b.outerContainerXs]: 'xs' === i,
      [b.outerContainerNoProgress]: !w
    }),
    style: {
      visibility: F ? 'visible' : 'hidden'
    },
    'aria-hidden': !F,
    children: [
      (0, s.jsx)(d.Tooltip, {
        text: K ? P.Z.Messages.QUESTS_REWARD_TILE_EXPIRED_QUEST : null,
        tooltipContentClassName: b.rewardTileExpirationTooltip,
        shouldShow: K,
        children: e => (0, s.jsxs)('div', {
          className: b.rewardTileWrapper,
          ...e,
          children: [
            r && (0, s.jsx)('div', {
              className: b.rewardTileExpired,
              children: (0, s.jsx)(d.CircleExclamationPointIcon, {
                color: d.tokens.colors.WHITE
              })
            }),
            z ? (0, s.jsx)(v.Z, {
              questConfig: t.config,
              fallback: q,
              isFocused: a
            }) : q
          ]
        })
      }),
      (0, s.jsxs)('div', {
        className: o()(b.gridText, b.taskDetails),
        children: [
          (0, s.jsx)(d.Text, {
            variant: j(n, i, g),
            className: b.taskInstructions,
            children: r ? P.Z.Messages.QUESTS_EXPIRED_QUEST_CARD_HEADING.format({
              questName: t.config.messages.questName
            }) : V
          }),
          (0, s.jsx)(d.Text, {
            variant: 'lg' === i ? 'text-sm/medium' : 'text-xs/medium',
            color: 'text-muted',
            children: function(e) {
              var t, n, i, a, s, r;
              let {
                quest: l,
                location: o,
                locale: c,
                isQuestExpired: d
              } = e, u = (null === (t = l.userStatus) || void 0 === t ? void 0 : t.completedAt) != null, _ = u && (null === (n = l.userStatus) || void 0 === n ? void 0 : n.claimedAt) != null, E = (0, p.zK)(l, L.S7.IN_HOUSE_CONSOLE_QUEST), T = (0, M.uq)(o), h = (0, N.B6)(null === (i = l.userStatus) || void 0 === i ? void 0 : i.completedAt, {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              }), f = (0, p.oo)({
                quest: l
              }), C = S.r.build(l.config).defaultReward.messages.nameWithArticle, g = (0, p.Kr)(l.config);
              if (u && E && T)
                return P.Z.Messages.QUEST_REWARD_COMPLETED_UNCLAIMED.format({
                  date: h
                });
              if (_) {
                let e = f ? (0, p.o9)({
                    quest: l,
                    idx: null === (a = l.userStatus) || void 0 === a ? void 0 : a.claimedTier
                  }) : null,
                  t = null !== (s = null == e ? void 0 : e.messages.nameWithArticle) && void 0 !== s ? s : null;
                return null != t ? P.Z.Messages.QUEST_REWARD_COMPLETED_CLAIMED.format({
                  reward: t,
                  date: h
                }) : P.Z.Messages.QUEST_REWARD_COMPLETED.format({
                  reward: C,
                  date: h
                });
              }
              if (u)
                return f ? P.Z.Messages.QUEST_REWARD_COMPLETED_UNCLAIMED.format({
                  date: h
                }) : P.Z.Messages.QUEST_REWARD_COMPLETED.format({
                  reward: C,
                  date: h
                });
              let A = f ? (0, p.o9)({
                quest: l,
                idx: 0
              }) : null;
              return d ? P.Z.Messages.QUESTS_EXPIRED_QUEST_CARD_SUBHEADING.format({
                reward: null !== (r = null == A ? void 0 : A.messages.nameWithArticle) && void 0 !== r ? r : C
              }) : null != A && null != A.approximateCount ? P.Z.Messages.QUEST_REWARD_TIERED.format({
                maxReward: A.messages.nameWithArticle,
                maxRewardCount: (0, m.Bs)(A.approximateCount, c),
                helpCenterLink: I.Z.getArticleURL(Z.BhN.QUESTS_LEARN_MORE)
              }) : null != g ? P.Z.Messages.QUEST_REWARD_WITH_EXPIRATION.format({
                reward: C,
                duration: g
              }) : P.Z.Messages.QUEST_REWARD.format({
                reward: C
              });
            }({
              quest: t,
              location: n,
              locale: Y,
              isQuestExpired: r
            })
          })
        ]
      }),
      (0, s.jsxs)('div', {
        className: o()(b.ctaButtonContainer, b.gridCtaButtons),
        children: [
          !k && (0, s.jsx)(U, {
            containerSize: i,
            onClick: () => {
              u.Z.open(Z.oAB.INVENTORY), (0, T._3)({
                questId: t.id,
                questContent: n,
                questContentPosition: h,
                questContentCTA: T.jZ.LEARN_MORE
              });
            },
            children: P.Z.Messages.QUESTS_LEARN_MORE_V2
          }),
          r && !O ? null : (0, s.jsx)(y, {
            quest: t,
            progressState: f,
            isCollectibleQuest: B,
            location: n,
            inGiftInventory: k
          })
        ]
      }),
      w && (0, s.jsx)(A.Z, {
        className: b.gridProgressBar,
        color: O ? d.tokens.colors.TEXT_POSITIVE : d.tokens.colors.BG_BRAND,
        quest: t,
        isInventory: k
      })
    ]
  }),
  Q && (0, s.jsxs)('div', {
    className: b.microphoneContainer,
    children: [
      (0, s.jsx)('div', {
        className: b.separator
      }),
      (0, s.jsx)(x.Z, {
        quest: t,
        location: n
      })
    ]
  })
]
  });
};