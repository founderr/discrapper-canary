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
  S = n("340100"),
  C = n("644646"),
  A = n("667105"),
  g = n("87894"),
  M = n("2660"),
  R = n("981631"),
  v = n("689938"),
  O = n("780320");
let x = (e, t, n, s) => n ? s ? v.default.Messages.COLLECTIBLES_USE_NOW : v.default.Messages.QUESTS_SEE_CODE : e || t ? v.default.Messages.QUESTS_CLAIM_REWARD : v.default.Messages.QUESTS_ACCEPT,
  L = (e, t, n) => (0, g.isQuestCardInGiftInventory)(e) && !n && "lg" === t ? "text-lg/medium" : "lg" === t ? "text-md/medium" : "sm" === t ? "text-sm/medium" : "text-xs/medium";

function D(e) {
  let {
    containerSize: t,
    onClick: n,
    children: a,
    tabIndex: l
  } = e;
  return "xs" === t ? (0, s.jsx)(o.Clickable, {
    tabIndex: l,
    className: O.learnMoreLink,
    tag: "span",
    onClick: n,
    children: (0, s.jsx)(o.Text, {
      variant: "text-sm/medium",
      color: "text-link",
      children: a
    })
  }) : (0, s.jsx)(o.Button, {
    tabIndex: l,
    wrapperClassName: O.ctaButtonWrapper,
    color: o.ButtonColors.PRIMARY,
    onClick: n,
    children: a
  })
}
t.default = e => {
  var t, n, a;
  let {
    quest: P,
    location: y,
    size: U,
    isFocused: j,
    isQuestExpired: b,
    isExpanded: B,
    isAnimating: G
  } = e, F = (null === (t = P.userStatus) || void 0 === t ? void 0 : t.completedAt) != null, k = (null === (n = P.userStatus) || void 0 === n ? void 0 : n.enrolledAt) != null, w = (0, N.hasQuestCollectibleRewards)(P.config), H = (null === (a = P.userStatus) || void 0 === a ? void 0 : a.claimedAt) != null, V = B || G, Y = k && !H && y !== h.QuestContent.QUESTS_EMBED, K = (0, i.useStateFromStores)([d.default], () => d.default.useReducedMotion), W = x(F, k, H, w), z = k ? v.default.Messages.QUESTS_IN_PROGRESS_TOOLTIP : v.default.Messages.QUESTS_ACCEPT_TOOLTIP, Q = (0, A.useHandleClaimQuestsReward)({
    quest: P,
    location: y
  }), q = k && !F, X = (0, i.useStateFromStores)([p.default], () => p.default.isEnrolling(P.id)), Z = () => {
    if (!k && !F) return (0, T.enrollInQuest)(P.id, {
      questContent: y,
      questContentCTA: m.QuestContentCTA.ACCEPT_QUEST
    });
    Q()
  }, J = (0, i.useStateFromStores)([c.default], () => c.default.locale), $ = y === h.QuestContent.QUESTS_EMBED, ee = (0, g.isQuestCardInGiftInventory)(y), et = ee && w, en = b && !F, es = (0, s.jsx)(C.default, {
    autoplay: j,
    className: l()(O.gridImg, {
      [O.questRewardGiftInventory]: ee && "lg" === U,
      [O.questRewardEmbed]: $ && "lg" === U,
      [O.questRewardEmbedSm]: "sm" === U,
      [O.questRewardEmbedXs]: "xs" === U
    }),
    learnMoreStyle: ee ? null : "text",
    quest: P,
    questContent: y
  });
  return (0, s.jsxs)("div", {
    className: l()(O.outerContainer, {
      [O.outerContainerSm]: "sm" === U,
      [O.outerContainerXs]: "xs" === U,
      [O.outerContainerNoProgress]: !Y
    }),
    style: {
      visibility: V ? "visible" : "hidden"
    },
    "aria-hidden": !V,
    children: [(0, s.jsx)(o.Tooltip, {
      text: en ? v.default.Messages.QUESTS_REWARD_TILE_EXPIRED_QUEST : null,
      tooltipContentClassName: O.rewardTileExpirationTooltip,
      shouldShow: en,
      children: e => (0, s.jsxs)("div", {
        className: O.rewardTileWrapper,
        ...e,
        children: [b && (0, s.jsx)("div", {
          className: O.rewardTileExpired,
          children: (0, s.jsx)(r.CircleExclamationPointIcon, {
            color: o.tokens.colors.WHITE
          })
        }), et ? (0, s.jsx)(M.default, {
          questConfig: P.config,
          fallback: es,
          isFocused: j
        }) : es]
      })
    }), (0, s.jsxs)("div", {
      className: l()(O.gridText, O.taskDetails),
      children: [(0, s.jsx)(o.Text, {
        variant: L(y, U, k),
        className: O.taskInstructions,
        children: b ? v.default.Messages.QUESTS_EXPIRED_QUEST_CARD_HEADING.format({
          questName: P.config.messages.questName
        }) : v.default.Messages.QUESTS_STREAM_TASK.format({
          minutes: P.config.streamDurationRequirementMinutes,
          gameTitle: P.config.messages.gameTitle
        })
      }), (0, s.jsx)(o.Text, {
        variant: "lg" === U ? "text-sm/medium" : "text-xs/medium",
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
          });
          if (c) {
            let e = m ? (0, N.getRewardCodeQuestReward)({
                quest: r,
                idx: null === (a = r.userStatus) || void 0 === a ? void 0 : a.claimedTier
              }) : null,
              t = null !== (l = null == e ? void 0 : e.messages.nameWithArticle) && void 0 !== l ? l : null;
            return null != t ? v.default.Messages.QUEST_REWARD_COMPLETED_CLAIMED.format({
              reward: t,
              date: f
            }) : v.default.Messages.QUEST_REWARD_COMPLETED.format({
              reward: r.config.messages.rewardNameWithArticle,
              date: f
            })
          }
          if (d) return m ? v.default.Messages.QUEST_REWARD_COMPLETED_UNCLAIMED.format({
            date: f
          }) : v.default.Messages.QUEST_REWARD_COMPLETED.format({
            reward: r.config.messages.rewardNameWithArticle,
            date: f
          });
          let T = m ? (0, N.getRewardCodeQuestReward)({
            quest: r,
            idx: 0
          }) : null;
          return u ? v.default.Messages.QUESTS_EXPIRED_QUEST_CARD_SUBHEADING.format({
            reward: null !== (i = null == T ? void 0 : T.messages.nameWithArticle) && void 0 !== i ? i : r.config.messages.rewardNameWithArticle
          }) : null != T && null != T.approximateCount ? v.default.Messages.QUEST_REWARD_TIERED.format({
            maxReward: T.messages.nameWithArticle,
            maxRewardCount: (0, _.humanizeValue)(T.approximateCount, o),
            helpCenterLink: E.default.getArticleURL(R.HelpdeskArticles.QUESTS_LEARN_MORE)
          }) : v.default.Messages.QUEST_REWARD.format({
            reward: r.config.messages.rewardNameWithArticle
          })
        }({
          quest: P,
          locale: J,
          isQuestExpired: b
        })
      })]
    }), (0, s.jsxs)("div", {
      className: l()(O.ctaButtonContainer, O.gridCtaButtons),
      children: [!ee && (0, s.jsx)(D, {
        containerSize: U,
        onClick: () => {
          u.default.open(R.UserSettingsSections.INVENTORY), (0, m.trackQuestContentClicked)({
            questId: P.id,
            questContent: y,
            questContentCTA: m.QuestContentCTA.LEARN_MORE
          })
        },
        children: v.default.Messages.QUESTS_LEARN_MORE_V2
      }), (!b || F) && (0, s.jsx)(o.Tooltip, {
        text: z,
        tooltipContentClassName: O.ctaTooltipCopy,
        shouldShow: !H && !F,
        children: e => F && !K ? (0, s.jsx)(f.default, {
          ...e,
          wrapperClassName: O.ctaButtonWrapper,
          color: o.ButtonColors.BRAND,
          disabled: q,
          submitting: X,
          onClick: Z,
          children: W
        }) : (0, s.jsx)(o.Button, {
          ...e,
          wrapperClassName: O.ctaButtonWrapper,
          color: o.ButtonColors.BRAND,
          disabled: q,
          submitting: X,
          onClick: Z,
          children: W
        })
      }, z)]
    }), Y && (0, s.jsx)(S.default, {
      className: O.gridProgressBar,
      color: F ? o.tokens.colors.TEXT_POSITIVE : o.tokens.colors.BG_BRAND,
      quest: P,
      isInventory: ee
    })]
  })
}