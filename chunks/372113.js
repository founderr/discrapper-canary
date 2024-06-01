"use strict";
n.r(t);
var s = n("735250");
n("470079");
var a = n("120356"),
  l = n.n(a),
  i = n("442837"),
  r = n("774867"),
  o = n("481060"),
  u = n("230711"),
  d = n("607070"),
  c = n("706454"),
  E = n("976644"),
  f = n("63063"),
  _ = n("930153"),
  T = n("617136"),
  m = n("272008"),
  I = n("113434"),
  N = n("569984"),
  p = n("497505"),
  S = n("918701"),
  C = n("566078"),
  A = n("340100"),
  h = n("644646"),
  g = n("667105"),
  M = n("87894"),
  O = n("2660"),
  R = n("46140"),
  v = n("981631"),
  L = n("689938"),
  x = n("526123");
let P = (e, t, n, s) => n ? s ? L.default.Messages.COLLECTIBLES_USE_NOW : L.default.Messages.QUESTS_SEE_CODE : e || t ? L.default.Messages.QUESTS_CLAIM_REWARD : L.default.Messages.QUESTS_ACCEPT,
  D = (e, t, n) => (0, M.isQuestCardInGiftInventory)(e) && !n && "lg" === t ? "text-lg/medium" : "lg" === t ? "text-md/medium" : "sm" === t ? "text-sm/medium" : "text-xs/medium";

function y(e) {
  let {
    containerSize: t,
    onClick: n,
    children: a,
    tabIndex: l
  } = e;
  return "xs" === t ? (0, s.jsx)(o.Clickable, {
    tabIndex: l,
    className: x.learnMoreLink,
    tag: "span",
    onClick: n,
    children: (0, s.jsx)(o.Text, {
      variant: "text-sm/medium",
      color: "text-link",
      children: a
    })
  }) : (0, s.jsx)(o.Button, {
    tabIndex: l,
    wrapperClassName: x.ctaButtonWrapper,
    color: o.ButtonColors.PRIMARY,
    onClick: n,
    children: a
  })
}
t.default = e => {
  var t, n, a;
  let {
    quest: U,
    location: j,
    size: b,
    isFocused: G,
    isQuestExpired: B,
    isExpanded: F,
    isAnimating: k,
    contentPosition: w
  } = e, H = (null === (t = U.userStatus) || void 0 === t ? void 0 : t.completedAt) != null, V = (null === (n = U.userStatus) || void 0 === n ? void 0 : n.enrolledAt) != null, Y = (0, S.hasCollectiblesQuestReward)(U.config), K = (null === (a = U.userStatus) || void 0 === a ? void 0 : a.claimedAt) != null, W = F || k, z = (0, I.useQuestInstructionTitle)(U, R.QuestsExperimentLocations.QUESTS_CARD), Q = V && !K && j !== p.QuestContent.QUESTS_EMBED, q = (0, i.useStateFromStores)([d.default], () => d.default.useReducedMotion), X = P(H, V, K, Y), Z = V ? L.default.Messages.QUESTS_IN_PROGRESS_TOOLTIP : L.default.Messages.QUESTS_ACCEPT_TOOLTIP, J = (0, g.useHandleClaimQuestsReward)({
    quest: U,
    location: j,
    questContentPosition: w
  }), $ = V && !H, ee = (0, i.useStateFromStores)([N.default], () => N.default.isEnrolling(U.id)), et = () => {
    if (!V && !H) return (0, m.enrollInQuest)(U.id, {
      questContent: j,
      questContentCTA: T.QuestContentCTA.ACCEPT_QUEST,
      questContentPosition: w
    });
    J()
  }, en = (0, i.useStateFromStores)([c.default], () => c.default.locale), es = j === p.QuestContent.QUESTS_EMBED, ea = (0, M.isQuestCardInGiftInventory)(j), el = ea && Y, ei = B && !H, er = (0, s.jsx)(h.default, {
    autoplay: G,
    className: l()(x.gridImg, {
      [x.questRewardGiftInventory]: ea && "lg" === b,
      [x.questRewardEmbed]: es && "lg" === b,
      [x.questRewardEmbedSm]: "sm" === b,
      [x.questRewardEmbedXs]: "xs" === b
    }),
    learnMoreStyle: ea ? null : "text",
    quest: U,
    questContent: j,
    questContentPosition: w
  });
  return (0, s.jsxs)("div", {
    className: l()(x.outerContainer, {
      [x.outerContainerSm]: "sm" === b,
      [x.outerContainerXs]: "xs" === b,
      [x.outerContainerNoProgress]: !Q
    }),
    style: {
      visibility: W ? "visible" : "hidden"
    },
    "aria-hidden": !W,
    children: [(0, s.jsx)(o.Tooltip, {
      text: ei ? L.default.Messages.QUESTS_REWARD_TILE_EXPIRED_QUEST : null,
      tooltipContentClassName: x.rewardTileExpirationTooltip,
      shouldShow: ei,
      children: e => (0, s.jsxs)("div", {
        className: x.rewardTileWrapper,
        ...e,
        children: [B && (0, s.jsx)("div", {
          className: x.rewardTileExpired,
          children: (0, s.jsx)(r.CircleExclamationPointIcon, {
            color: o.tokens.colors.WHITE
          })
        }), el ? (0, s.jsx)(O.default, {
          questConfig: U.config,
          fallback: er,
          isFocused: G
        }) : er]
      })
    }), (0, s.jsxs)("div", {
      className: l()(x.gridText, x.taskDetails),
      children: [(0, s.jsx)(o.Text, {
        variant: D(j, b, V),
        className: x.taskInstructions,
        children: B ? L.default.Messages.QUESTS_EXPIRED_QUEST_CARD_HEADING.format({
          questName: U.config.messages.questName
        }) : z
      }), (0, s.jsx)(o.Text, {
        variant: "lg" === b ? "text-sm/medium" : "text-xs/medium",
        color: "text-muted",
        children: function(e) {
          var t, n, s, a, l, i;
          let {
            quest: r,
            locale: o,
            isQuestExpired: u
          } = e, d = (null === (t = r.userStatus) || void 0 === t ? void 0 : t.completedAt) != null, c = d && (null === (n = r.userStatus) || void 0 === n ? void 0 : n.claimedAt) != null, E = (0, I.useQuestFormattedDate)(null === (s = r.userStatus) || void 0 === s ? void 0 : s.completedAt, {
            year: "numeric",
            month: "long",
            day: "numeric"
          }), T = (0, S.isTieredRewardCodeQuest)({
            quest: r
          }), m = C.SharedQuestFields.build(r.config).defaultReward.messages.nameWithArticle;
          if (c) {
            let e = T ? (0, S.getRewardCodeQuestReward)({
                quest: r,
                idx: null === (a = r.userStatus) || void 0 === a ? void 0 : a.claimedTier
              }) : null,
              t = null !== (l = null == e ? void 0 : e.messages.nameWithArticle) && void 0 !== l ? l : null;
            return null != t ? L.default.Messages.QUEST_REWARD_COMPLETED_CLAIMED.format({
              reward: t,
              date: E
            }) : L.default.Messages.QUEST_REWARD_COMPLETED.format({
              reward: m,
              date: E
            })
          }
          if (d) return T ? L.default.Messages.QUEST_REWARD_COMPLETED_UNCLAIMED.format({
            date: E
          }) : L.default.Messages.QUEST_REWARD_COMPLETED.format({
            reward: m,
            date: E
          });
          let N = T ? (0, S.getRewardCodeQuestReward)({
            quest: r,
            idx: 0
          }) : null;
          return u ? L.default.Messages.QUESTS_EXPIRED_QUEST_CARD_SUBHEADING.format({
            reward: null !== (i = null == N ? void 0 : N.messages.nameWithArticle) && void 0 !== i ? i : m
          }) : null != N && null != N.approximateCount ? L.default.Messages.QUEST_REWARD_TIERED.format({
            maxReward: N.messages.nameWithArticle,
            maxRewardCount: (0, _.humanizeValue)(N.approximateCount, o),
            helpCenterLink: f.default.getArticleURL(v.HelpdeskArticles.QUESTS_LEARN_MORE)
          }) : L.default.Messages.QUEST_REWARD.format({
            reward: m
          })
        }({
          quest: U,
          locale: en,
          isQuestExpired: B
        })
      })]
    }), (0, s.jsxs)("div", {
      className: l()(x.ctaButtonContainer, x.gridCtaButtons),
      children: [!ea && (0, s.jsx)(y, {
        containerSize: b,
        onClick: () => {
          u.default.open(v.UserSettingsSections.INVENTORY), (0, T.trackQuestContentClicked)({
            questId: U.id,
            questContent: j,
            questContentPosition: w,
            questContentCTA: T.QuestContentCTA.LEARN_MORE
          })
        },
        children: L.default.Messages.QUESTS_LEARN_MORE_V2
      }), (!B || H) && (0, s.jsx)(o.Tooltip, {
        text: Z,
        tooltipContentClassName: x.ctaTooltipCopy,
        shouldShow: !K && !H,
        children: e => H && !q ? (0, s.jsx)(E.default, {
          ...e,
          wrapperClassName: x.ctaButtonWrapper,
          color: o.ButtonColors.BRAND,
          disabled: $,
          submitting: ee,
          onClick: et,
          children: X
        }) : (0, s.jsx)(o.Button, {
          ...e,
          wrapperClassName: x.ctaButtonWrapper,
          color: o.ButtonColors.BRAND,
          disabled: $,
          submitting: ee,
          onClick: et,
          children: X
        })
      }, Z)]
    }), Q && (0, s.jsx)(A.default, {
      className: x.gridProgressBar,
      color: H ? o.tokens.colors.TEXT_POSITIVE : o.tokens.colors.BG_BRAND,
      quest: U,
      isInventory: ea
    })]
  })
}