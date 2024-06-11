"use strict";
n.r(t);
var s, a, l = n("735250"),
  i = n("470079"),
  r = n("120356"),
  o = n.n(r),
  u = n("442837"),
  d = n("774867"),
  c = n("481060"),
  f = n("230711"),
  E = n("607070"),
  _ = n("706454"),
  m = n("976644"),
  T = n("63063"),
  I = n("930153"),
  p = n("617136"),
  h = n("272008"),
  N = n("113434"),
  S = n("569984"),
  C = n("497505"),
  g = n("918701"),
  A = n("566078"),
  M = n("340100"),
  R = n("644646"),
  v = n("667105"),
  O = n("87894"),
  x = n("2660"),
  L = n("46140"),
  D = n("981631"),
  P = n("689938"),
  y = n("526123");
let U = (e, t, n) => (0, O.isQuestCardInGiftInventory)(e) && !n && "lg" === t ? "text-lg/medium" : "lg" === t ? "text-md/medium" : "sm" === t ? "text-sm/medium" : "text-xs/medium";

function j(e) {
  let {
    containerSize: t,
    onClick: n,
    children: s,
    tabIndex: a
  } = e;
  return "xs" === t ? (0, l.jsx)(c.Clickable, {
    tabIndex: a,
    className: y.learnMoreLink,
    tag: "span",
    onClick: n,
    children: (0, l.jsx)(c.Text, {
      variant: "text-sm/medium",
      color: "text-link",
      children: s
    })
  }) : (0, l.jsx)(c.Button, {
    tabIndex: a,
    wrapperClassName: y.ctaButtonWrapper,
    color: c.ButtonColors.PRIMARY,
    onClick: n,
    children: s
  })
}(s = a || (a = {}))[s.UNACCEPTED = 0] = "UNACCEPTED", s[s.ACCEPTED = 1] = "ACCEPTED", s[s.IN_PROGRESS = 2] = "IN_PROGRESS", s[s.COMPLETED = 3] = "COMPLETED", s[s.CLAIMED = 4] = "CLAIMED";

function b(e) {
  let {
    isQuestComplete: t,
    useReducedMotion: n,
    disabled: s,
    isEnrolling: a,
    onClick: i,
    children: r,
    ...o
  } = e;
  return t && !n ? (0, l.jsx)(m.default, {
    ...o,
    wrapperClassName: y.ctaButtonWrapper,
    color: c.ButtonColors.BRAND,
    disabled: s,
    submitting: a,
    onClick: i,
    children: r
  }) : (0, l.jsx)(c.Button, {
    ...o,
    wrapperClassName: y.ctaButtonWrapper,
    color: c.ButtonColors.BRAND,
    disabled: s,
    submitting: a,
    onClick: i,
    children: r
  })
}
t.default = e => {
  let {
    quest: t,
    location: n,
    size: s,
    isFocused: a,
    isQuestExpired: r,
    isExpanded: m,
    isAnimating: F,
    contentPosition: B
  } = e, G = function(e) {
    var t, n, s;
    let a = (null === (t = e.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null,
      l = (null === (n = e.userStatus) || void 0 === n ? void 0 : n.completedAt) != null,
      i = (null === (s = e.userStatus) || void 0 === s ? void 0 : s.claimedAt) != null,
      r = (0, N.useQuestTaskDetails)({
        quest: e,
        location: L.QuestsExperimentLocations.QUESTS_CARD
      }).percentComplete > 0;
    if (i) return 4;
    if (l) return 3;
    if (r) return 2;
    else if (a) return 1;
    else return 0
  }(t), k = G >= 1, w = G >= 3, H = G >= 4, V = (0, g.hasCollectiblesQuestReward)(t.config), Y = (0, g.hasVariant)(t, L.QuestVariants.IN_HOUSE_CONSOLE_QUEST), K = (0, O.isQuestCardInGiftInventory)(n), W = n === C.QuestContent.QUESTS_EMBED, z = m || F, Q = (0, N.useQuestInstructionTitle)(t, L.QuestsExperimentLocations.QUESTS_CARD), q = k && !H && K, X = (0, u.useStateFromStores)([E.default], () => E.default.useReducedMotion), Z = function(e, t, n, s) {
    switch (e) {
      case 0:
        return P.default.Messages.QUESTS_ACCEPT;
      case 1:
        if (n && s) return P.default.Messages.QUESTS_CONNECT_CONSOLE;
      case 2:
      case 3:
        return P.default.Messages.QUESTS_CLAIM_REWARD;
      case 4:
        return t ? P.default.Messages.COLLECTIBLES_USE_NOW : P.default.Messages.QUESTS_SEE_CODE;
      default:
        return P.default.Messages.QUESTS_ACCEPT
    }
  }(G, V, Y, K), J = k ? P.default.Messages.QUESTS_IN_PROGRESS_TOOLTIP : P.default.Messages.QUESTS_ACCEPT_TOOLTIP, $ = (0, v.useHandleClaimQuestsReward)({
    quest: t,
    location: n,
    questContentPosition: B
  }), ee = i.useMemo(() => Y && K ? 2 === G : k && !w, [Y, K, k, w, G]), et = (0, u.useStateFromStores)([S.default], () => S.default.isEnrolling(t.id)), en = () => Y && K && 1 === G ? f.default.open(D.UserSettingsSections.CONNECTIONS) : k ? void $() : (0, h.enrollInQuest)(t.id, {
    questContent: n,
    questContentCTA: p.QuestContentCTA.ACCEPT_QUEST,
    questContentPosition: B
  }), es = (0, u.useStateFromStores)([_.default], () => _.default.locale), ea = K && V, el = r && !w, ei = (0, l.jsx)(R.default, {
    autoplay: a,
    className: o()(y.gridImg, {
      [y.questRewardGiftInventory]: K && "lg" === s,
      [y.questRewardEmbed]: W && "lg" === s,
      [y.questRewardEmbedSm]: "sm" === s,
      [y.questRewardEmbedXs]: "xs" === s
    }),
    learnMoreStyle: K ? null : "text",
    quest: t,
    questContent: n,
    questContentPosition: B
  });
  return (0, l.jsxs)("div", {
    className: o()(y.outerContainer, {
      [y.outerContainerSm]: "sm" === s,
      [y.outerContainerXs]: "xs" === s,
      [y.outerContainerNoProgress]: !q
    }),
    style: {
      visibility: z ? "visible" : "hidden"
    },
    "aria-hidden": !z,
    children: [(0, l.jsx)(c.Tooltip, {
      text: el ? P.default.Messages.QUESTS_REWARD_TILE_EXPIRED_QUEST : null,
      tooltipContentClassName: y.rewardTileExpirationTooltip,
      shouldShow: el,
      children: e => (0, l.jsxs)("div", {
        className: y.rewardTileWrapper,
        ...e,
        children: [r && (0, l.jsx)("div", {
          className: y.rewardTileExpired,
          children: (0, l.jsx)(d.CircleExclamationPointIcon, {
            color: c.tokens.colors.WHITE
          })
        }), ea ? (0, l.jsx)(x.default, {
          questConfig: t.config,
          fallback: ei,
          isFocused: a
        }) : ei]
      })
    }), (0, l.jsxs)("div", {
      className: o()(y.gridText, y.taskDetails),
      children: [(0, l.jsx)(c.Text, {
        variant: U(n, s, k),
        className: y.taskInstructions,
        children: r ? P.default.Messages.QUESTS_EXPIRED_QUEST_CARD_HEADING.format({
          questName: t.config.messages.questName
        }) : Q
      }), (0, l.jsx)(c.Text, {
        variant: "lg" === s ? "text-sm/medium" : "text-xs/medium",
        color: "text-muted",
        children: function(e) {
          var t, n, s, a, l, i, r;
          let {
            quest: o,
            location: u,
            locale: d,
            isQuestExpired: c
          } = e, E = (null === (t = o.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null, _ = (null === (n = o.userStatus) || void 0 === n ? void 0 : n.completedAt) != null, m = _ && (null === (s = o.userStatus) || void 0 === s ? void 0 : s.claimedAt) != null, p = (0, g.hasVariant)(o, L.QuestVariants.IN_HOUSE_CONSOLE_QUEST), h = (0, O.isQuestCardInGiftInventory)(u), S = (0, N.useQuestFormattedDate)(null === (a = o.userStatus) || void 0 === a ? void 0 : a.completedAt, {
            year: "numeric",
            month: "long",
            day: "numeric"
          }), C = (0, g.isTieredRewardCodeQuest)({
            quest: o
          }), M = A.SharedQuestFields.build(o.config).defaultReward.messages.nameWithArticle;
          if (_ && p && h) return P.default.Messages.QUEST_REWARD_COMPLETED_UNCLAIMED.format({
            date: S
          });
          if (m) {
            let e = C ? (0, g.getRewardCodeQuestReward)({
                quest: o,
                idx: null === (l = o.userStatus) || void 0 === l ? void 0 : l.claimedTier
              }) : null,
              t = null !== (i = null == e ? void 0 : e.messages.nameWithArticle) && void 0 !== i ? i : null;
            return null != t ? P.default.Messages.QUEST_REWARD_COMPLETED_CLAIMED.format({
              reward: t,
              date: S
            }) : P.default.Messages.QUEST_REWARD_COMPLETED.format({
              reward: M,
              date: S
            })
          }
          if (_) return C ? P.default.Messages.QUEST_REWARD_COMPLETED_UNCLAIMED.format({
            date: S
          }) : P.default.Messages.QUEST_REWARD_COMPLETED.format({
            reward: M,
            date: S
          });
          let R = C ? (0, g.getRewardCodeQuestReward)({
            quest: o,
            idx: 0
          }) : null;
          if (c) return P.default.Messages.QUESTS_EXPIRED_QUEST_CARD_SUBHEADING.format({
            reward: null !== (r = null == R ? void 0 : R.messages.nameWithArticle) && void 0 !== r ? r : M
          });
          if (h && (0, g.hasVariant)(o, L.QuestVariants.MOBILE_CONSOLE_QUEST)) return P.default.Messages.QUEST_REWARD_MULTIPLATFORM.format({
            gameTitle: o.config.messages.gameTitle,
            reward: M,
            streamingDurationRequirement: (0, g.getQuestTaskDetails)({
              quest: o,
              location: L.QuestsExperimentLocations.QUESTS_CARD
            }).targetMinutes,
            onClick: () => {
              f.default.open(D.UserSettingsSections.CONNECTIONS)
            }
          });
          if (p && h) return E ? P.default.Messages.QUEST_REWARD.format({
            reward: M
          }) : P.default.Messages.QUEST_REWARD_IN_HOUSE.format({
            reward: M,
            onClick: () => {
              f.default.open(D.UserSettingsSections.CONNECTIONS)
            }
          });
          return null != R && null != R.approximateCount ? P.default.Messages.QUEST_REWARD_TIERED.format({
            maxReward: R.messages.nameWithArticle,
            maxRewardCount: (0, I.humanizeValue)(R.approximateCount, d),
            helpCenterLink: T.default.getArticleURL(D.HelpdeskArticles.QUESTS_LEARN_MORE)
          }) : P.default.Messages.QUEST_REWARD.format({
            reward: M
          })
        }({
          quest: t,
          location: n,
          locale: es,
          isQuestExpired: r
        })
      })]
    }), (0, l.jsxs)("div", {
      className: o()(y.ctaButtonContainer, y.gridCtaButtons),
      children: [!K && (0, l.jsx)(j, {
        containerSize: s,
        onClick: () => {
          f.default.open(D.UserSettingsSections.INVENTORY), (0, p.trackQuestContentClicked)({
            questId: t.id,
            questContent: n,
            questContentPosition: B,
            questContentCTA: p.QuestContentCTA.LEARN_MORE
          })
        },
        children: P.default.Messages.QUESTS_LEARN_MORE_V2
      }), (!r || w) && (0, l.jsx)(c.Tooltip, {
        text: J,
        tooltipContentClassName: y.ctaTooltipCopy,
        shouldShow: !w,
        children: e => (0, l.jsx)(b, {
          ...e,
          isQuestComplete: w,
          useReducedMotion: X,
          disabled: ee,
          isEnrolling: et,
          onClick: en,
          children: Z
        })
      }, J)]
    }), q && (0, l.jsx)(M.default, {
      className: y.gridProgressBar,
      color: w ? c.tokens.colors.TEXT_POSITIVE : c.tokens.colors.BG_BRAND,
      quest: t,
      isInventory: K
    })]
  })
}