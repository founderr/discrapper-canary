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
  f = n("976644"),
  E = n("63063"),
  _ = n("930153"),
  m = n("617136"),
  T = n("272008"),
  I = n("113434"),
  p = n("569984"),
  h = n("497505"),
  N = n("918701"),
  S = n("566078"),
  C = n("340100"),
  A = n("644646"),
  g = n("667105"),
  M = n("87894"),
  R = n("2660"),
  v = n("46140"),
  O = n("981631"),
  x = n("689938"),
  L = n("526123");
let D = (e, t, n, s) => n ? s ? x.default.Messages.COLLECTIBLES_USE_NOW : x.default.Messages.QUESTS_SEE_CODE : e || t ? x.default.Messages.QUESTS_CLAIM_REWARD : x.default.Messages.QUESTS_ACCEPT,
  P = (e, t, n) => (0, M.isQuestCardInGiftInventory)(e) && !n && "lg" === t ? "text-lg/medium" : "lg" === t ? "text-md/medium" : "sm" === t ? "text-sm/medium" : "text-xs/medium";

function y(e) {
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
    quest: U,
    location: j,
    size: b,
    isFocused: B,
    isQuestExpired: F,
    isExpanded: G,
    isAnimating: k,
    contentPosition: w
  } = e, H = (null === (t = U.userStatus) || void 0 === t ? void 0 : t.completedAt) != null, V = (null === (n = U.userStatus) || void 0 === n ? void 0 : n.enrolledAt) != null, Y = (0, N.hasCollectiblesQuestReward)(U.config), K = (null === (a = U.userStatus) || void 0 === a ? void 0 : a.claimedAt) != null, W = G || k, z = (0, I.useQuestInstructionTitle)(U, v.QuestsExperimentLocations.QUESTS_CARD), Q = V && !K && j !== h.QuestContent.QUESTS_EMBED, q = (0, i.useStateFromStores)([d.default], () => d.default.useReducedMotion), X = D(H, V, K, Y), Z = V ? x.default.Messages.QUESTS_IN_PROGRESS_TOOLTIP : x.default.Messages.QUESTS_ACCEPT_TOOLTIP, J = (0, g.useHandleClaimQuestsReward)({
    quest: U,
    location: j,
    questContentPosition: w
  }), $ = V && !H, ee = (0, i.useStateFromStores)([p.default], () => p.default.isEnrolling(U.id)), et = () => {
    if (!V && !H) return (0, T.enrollInQuest)(U.id, {
      questContent: j,
      questContentCTA: m.QuestContentCTA.ACCEPT_QUEST,
      questContentPosition: w
    });
    J()
  }, en = (0, i.useStateFromStores)([c.default], () => c.default.locale), es = j === h.QuestContent.QUESTS_EMBED, ea = (0, M.isQuestCardInGiftInventory)(j), el = ea && Y, ei = F && !H, er = (0, s.jsx)(A.default, {
    autoplay: B,
    className: l()(L.gridImg, {
      [L.questRewardGiftInventory]: ea && "lg" === b,
      [L.questRewardEmbed]: es && "lg" === b,
      [L.questRewardEmbedSm]: "sm" === b,
      [L.questRewardEmbedXs]: "xs" === b
    }),
    learnMoreStyle: ea ? null : "text",
    quest: U,
    questContent: j,
    questContentPosition: w
  });
  return (0, s.jsxs)("div", {
    className: l()(L.outerContainer, {
      [L.outerContainerSm]: "sm" === b,
      [L.outerContainerXs]: "xs" === b,
      [L.outerContainerNoProgress]: !Q
    }),
    style: {
      visibility: W ? "visible" : "hidden"
    },
    "aria-hidden": !W,
    children: [(0, s.jsx)(o.Tooltip, {
      text: ei ? x.default.Messages.QUESTS_REWARD_TILE_EXPIRED_QUEST : null,
      tooltipContentClassName: L.rewardTileExpirationTooltip,
      shouldShow: ei,
      children: e => (0, s.jsxs)("div", {
        className: L.rewardTileWrapper,
        ...e,
        children: [F && (0, s.jsx)("div", {
          className: L.rewardTileExpired,
          children: (0, s.jsx)(r.CircleExclamationPointIcon, {
            color: o.tokens.colors.WHITE
          })
        }), el ? (0, s.jsx)(R.default, {
          questConfig: U.config,
          fallback: er,
          isFocused: B
        }) : er]
      })
    }), (0, s.jsxs)("div", {
      className: l()(L.gridText, L.taskDetails),
      children: [(0, s.jsx)(o.Text, {
        variant: P(j, b, V),
        className: L.taskInstructions,
        children: F ? x.default.Messages.QUESTS_EXPIRED_QUEST_CARD_HEADING.format({
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
          } = e, d = (null === (t = r.userStatus) || void 0 === t ? void 0 : t.completedAt) != null, c = d && (null === (n = r.userStatus) || void 0 === n ? void 0 : n.claimedAt) != null, f = (0, I.useQuestFormattedDate)(null === (s = r.userStatus) || void 0 === s ? void 0 : s.completedAt, {
            year: "numeric",
            month: "long",
            day: "numeric"
          }), m = (0, N.isTieredRewardCodeQuest)({
            quest: r
          }), T = S.SharedQuestFields.build(r.config).defaultReward.messages.nameWithArticle;
          if (c) {
            let e = m ? (0, N.getRewardCodeQuestReward)({
                quest: r,
                idx: null === (a = r.userStatus) || void 0 === a ? void 0 : a.claimedTier
              }) : null,
              t = null !== (l = null == e ? void 0 : e.messages.nameWithArticle) && void 0 !== l ? l : null;
            return null != t ? x.default.Messages.QUEST_REWARD_COMPLETED_CLAIMED.format({
              reward: t,
              date: f
            }) : x.default.Messages.QUEST_REWARD_COMPLETED.format({
              reward: T,
              date: f
            })
          }
          if (d) return m ? x.default.Messages.QUEST_REWARD_COMPLETED_UNCLAIMED.format({
            date: f
          }) : x.default.Messages.QUEST_REWARD_COMPLETED.format({
            reward: T,
            date: f
          });
          let p = m ? (0, N.getRewardCodeQuestReward)({
            quest: r,
            idx: 0
          }) : null;
          return u ? x.default.Messages.QUESTS_EXPIRED_QUEST_CARD_SUBHEADING.format({
            reward: null !== (i = null == p ? void 0 : p.messages.nameWithArticle) && void 0 !== i ? i : T
          }) : null != p && null != p.approximateCount ? x.default.Messages.QUEST_REWARD_TIERED.format({
            maxReward: p.messages.nameWithArticle,
            maxRewardCount: (0, _.humanizeValue)(p.approximateCount, o),
            helpCenterLink: E.default.getArticleURL(O.HelpdeskArticles.QUESTS_LEARN_MORE)
          }) : x.default.Messages.QUEST_REWARD.format({
            reward: T
          })
        }({
          quest: U,
          locale: en,
          isQuestExpired: F
        })
      })]
    }), (0, s.jsxs)("div", {
      className: l()(L.ctaButtonContainer, L.gridCtaButtons),
      children: [!ea && (0, s.jsx)(y, {
        containerSize: b,
        onClick: () => {
          u.default.open(O.UserSettingsSections.INVENTORY), (0, m.trackQuestContentClicked)({
            questId: U.id,
            questContent: j,
            questContentPosition: w,
            questContentCTA: m.QuestContentCTA.LEARN_MORE
          })
        },
        children: x.default.Messages.QUESTS_LEARN_MORE_V2
      }), (!F || H) && (0, s.jsx)(o.Tooltip, {
        text: Z,
        tooltipContentClassName: L.ctaTooltipCopy,
        shouldShow: !K && !H,
        children: e => H && !q ? (0, s.jsx)(f.default, {
          ...e,
          wrapperClassName: L.ctaButtonWrapper,
          color: o.ButtonColors.BRAND,
          disabled: $,
          submitting: ee,
          onClick: et,
          children: X
        }) : (0, s.jsx)(o.Button, {
          ...e,
          wrapperClassName: L.ctaButtonWrapper,
          color: o.ButtonColors.BRAND,
          disabled: $,
          submitting: ee,
          onClick: et,
          children: X
        })
      }, Z)]
    }), Q && (0, s.jsx)(C.default, {
      className: L.gridProgressBar,
      color: H ? o.tokens.colors.TEXT_POSITIVE : o.tokens.colors.BG_BRAND,
      quest: U,
      isInventory: ea
    })]
  })
}