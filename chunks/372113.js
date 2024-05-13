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
  I = n("272008"),
  m = n("113434"),
  N = n("569984"),
  p = n("497505"),
  S = n("918701"),
  C = n("340100"),
  A = n("644646"),
  h = n("667105"),
  g = n("87894"),
  M = n("2660"),
  O = n("46140"),
  R = n("981631"),
  v = n("689938"),
  L = n("526123");
let P = (e, t, n, s) => n ? s ? v.default.Messages.COLLECTIBLES_USE_NOW : v.default.Messages.QUESTS_SEE_CODE : e || t ? v.default.Messages.QUESTS_CLAIM_REWARD : v.default.Messages.QUESTS_ACCEPT,
  x = (e, t, n) => (0, g.isQuestCardInGiftInventory)(e) && !n && "lg" === t ? "text-lg/medium" : "lg" === t ? "text-md/medium" : "sm" === t ? "text-sm/medium" : "text-xs/medium";

function D(e) {
  let {
    containerSize: t,
    onClick: n,
    children: a,
    tabIndex: l
  } = e;
  return "xs" === t ? (0, s.jsx)(o.Clickable, {
    tabIndex: l,
    className: L.learnMoreLink,
    tag: "span",
    onClick: n,
    children: (0, s.jsx)(o.Text, {
      variant: "text-sm/medium",
      color: "text-link",
      children: a
    })
  }) : (0, s.jsx)(o.Button, {
    tabIndex: l,
    wrapperClassName: L.ctaButtonWrapper,
    color: o.ButtonColors.PRIMARY,
    onClick: n,
    children: a
  })
}
t.default = e => {
  var t, n, a;
  let {
    quest: y,
    location: U,
    size: j,
    isFocused: b,
    isQuestExpired: G,
    isExpanded: B,
    isAnimating: F,
    contentPosition: k
  } = e, w = (null === (t = y.userStatus) || void 0 === t ? void 0 : t.completedAt) != null, H = (null === (n = y.userStatus) || void 0 === n ? void 0 : n.enrolledAt) != null, V = (0, S.hasQuestCollectibleRewards)(y.config), Y = (null === (a = y.userStatus) || void 0 === a ? void 0 : a.claimedAt) != null, K = B || F, W = (0, m.useQuestInstructionTitle)(y, O.QuestsExperimentLocations.QUESTS_CARD), z = H && !Y && U !== p.QuestContent.QUESTS_EMBED, Q = (0, i.useStateFromStores)([d.default], () => d.default.useReducedMotion), q = P(w, H, Y, V), X = H ? v.default.Messages.QUESTS_IN_PROGRESS_TOOLTIP : v.default.Messages.QUESTS_ACCEPT_TOOLTIP, Z = (0, h.useHandleClaimQuestsReward)({
    quest: y,
    location: U,
    questContentPosition: k
  }), J = H && !w, $ = (0, i.useStateFromStores)([N.default], () => N.default.isEnrolling(y.id)), ee = () => {
    if (!H && !w) return (0, I.enrollInQuest)(y.id, {
      questContent: U,
      questContentCTA: T.QuestContentCTA.ACCEPT_QUEST,
      questContentPosition: k
    });
    Z()
  }, et = (0, i.useStateFromStores)([c.default], () => c.default.locale), en = U === p.QuestContent.QUESTS_EMBED, es = (0, g.isQuestCardInGiftInventory)(U), ea = es && V, el = G && !w, ei = (0, s.jsx)(A.default, {
    autoplay: b,
    className: l()(L.gridImg, {
      [L.questRewardGiftInventory]: es && "lg" === j,
      [L.questRewardEmbed]: en && "lg" === j,
      [L.questRewardEmbedSm]: "sm" === j,
      [L.questRewardEmbedXs]: "xs" === j
    }),
    learnMoreStyle: es ? null : "text",
    quest: y,
    questContent: U,
    questContentPosition: k
  });
  return (0, s.jsxs)("div", {
    className: l()(L.outerContainer, {
      [L.outerContainerSm]: "sm" === j,
      [L.outerContainerXs]: "xs" === j,
      [L.outerContainerNoProgress]: !z
    }),
    style: {
      visibility: K ? "visible" : "hidden"
    },
    "aria-hidden": !K,
    children: [(0, s.jsx)(o.Tooltip, {
      text: el ? v.default.Messages.QUESTS_REWARD_TILE_EXPIRED_QUEST : null,
      tooltipContentClassName: L.rewardTileExpirationTooltip,
      shouldShow: el,
      children: e => (0, s.jsxs)("div", {
        className: L.rewardTileWrapper,
        ...e,
        children: [G && (0, s.jsx)("div", {
          className: L.rewardTileExpired,
          children: (0, s.jsx)(r.CircleExclamationPointIcon, {
            color: o.tokens.colors.WHITE
          })
        }), ea ? (0, s.jsx)(M.default, {
          questConfig: y.config,
          fallback: ei,
          isFocused: b
        }) : ei]
      })
    }), (0, s.jsxs)("div", {
      className: l()(L.gridText, L.taskDetails),
      children: [(0, s.jsx)(o.Text, {
        variant: x(U, j, H),
        className: L.taskInstructions,
        children: G ? v.default.Messages.QUESTS_EXPIRED_QUEST_CARD_HEADING.format({
          questName: y.config.messages.questName
        }) : W
      }), (0, s.jsx)(o.Text, {
        variant: "lg" === j ? "text-sm/medium" : "text-xs/medium",
        color: "text-muted",
        children: function(e) {
          var t, n, s, a, l, i;
          let {
            quest: r,
            locale: o,
            isQuestExpired: u
          } = e, d = (null === (t = r.userStatus) || void 0 === t ? void 0 : t.completedAt) != null, c = d && (null === (n = r.userStatus) || void 0 === n ? void 0 : n.claimedAt) != null, E = (0, m.useQuestFormattedDate)(null === (s = r.userStatus) || void 0 === s ? void 0 : s.completedAt, {
            year: "numeric",
            month: "long",
            day: "numeric"
          }), T = (0, S.isTieredRewardCodeQuest)({
            quest: r
          });
          if (c) {
            let e = T ? (0, S.getRewardCodeQuestReward)({
                quest: r,
                idx: null === (a = r.userStatus) || void 0 === a ? void 0 : a.claimedTier
              }) : null,
              t = null !== (l = null == e ? void 0 : e.messages.nameWithArticle) && void 0 !== l ? l : null;
            return null != t ? v.default.Messages.QUEST_REWARD_COMPLETED_CLAIMED.format({
              reward: t,
              date: E
            }) : v.default.Messages.QUEST_REWARD_COMPLETED.format({
              reward: r.config.messages.rewardNameWithArticle,
              date: E
            })
          }
          if (d) return T ? v.default.Messages.QUEST_REWARD_COMPLETED_UNCLAIMED.format({
            date: E
          }) : v.default.Messages.QUEST_REWARD_COMPLETED.format({
            reward: r.config.messages.rewardNameWithArticle,
            date: E
          });
          let I = T ? (0, S.getRewardCodeQuestReward)({
            quest: r,
            idx: 0
          }) : null;
          return u ? v.default.Messages.QUESTS_EXPIRED_QUEST_CARD_SUBHEADING.format({
            reward: null !== (i = null == I ? void 0 : I.messages.nameWithArticle) && void 0 !== i ? i : r.config.messages.rewardNameWithArticle
          }) : null != I && null != I.approximateCount ? v.default.Messages.QUEST_REWARD_TIERED.format({
            maxReward: I.messages.nameWithArticle,
            maxRewardCount: (0, _.humanizeValue)(I.approximateCount, o),
            helpCenterLink: f.default.getArticleURL(R.HelpdeskArticles.QUESTS_LEARN_MORE)
          }) : v.default.Messages.QUEST_REWARD.format({
            reward: r.config.messages.rewardNameWithArticle
          })
        }({
          quest: y,
          locale: et,
          isQuestExpired: G
        })
      })]
    }), (0, s.jsxs)("div", {
      className: l()(L.ctaButtonContainer, L.gridCtaButtons),
      children: [!es && (0, s.jsx)(D, {
        containerSize: j,
        onClick: () => {
          u.default.open(R.UserSettingsSections.INVENTORY), (0, T.trackQuestContentClicked)({
            questId: y.id,
            questContent: U,
            questContentPosition: k,
            questContentCTA: T.QuestContentCTA.LEARN_MORE
          })
        },
        children: v.default.Messages.QUESTS_LEARN_MORE_V2
      }), (!G || w) && (0, s.jsx)(o.Tooltip, {
        text: X,
        tooltipContentClassName: L.ctaTooltipCopy,
        shouldShow: !Y && !w,
        children: e => w && !Q ? (0, s.jsx)(E.default, {
          ...e,
          wrapperClassName: L.ctaButtonWrapper,
          color: o.ButtonColors.BRAND,
          disabled: J,
          submitting: $,
          onClick: ee,
          children: q
        }) : (0, s.jsx)(o.Button, {
          ...e,
          wrapperClassName: L.ctaButtonWrapper,
          color: o.ButtonColors.BRAND,
          disabled: J,
          submitting: $,
          onClick: ee,
          children: q
        })
      }, X)]
    }), z && (0, s.jsx)(C.default, {
      className: L.gridProgressBar,
      color: w ? o.tokens.colors.TEXT_POSITIVE : o.tokens.colors.BG_BRAND,
      quest: y,
      isInventory: es
    })]
  })
}