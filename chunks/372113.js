n(47120);
var s, i, l = n(735250),
  a = n(470079),
  r = n(120356),
  o = n.n(r),
  c = n(442837),
  u = n(481060),
  d = n(230711),
  E = n(607070),
  _ = n(706454),
  I = n(63063),
  T = n(930153),
  N = n(617136),
  m = n(272008),
  h = n(113434),
  C = n(569984),
  S = n(497505),
  A = n(918701),
  p = n(796111),
  g = n(566078),
  f = n(340100),
  O = n(644646),
  R = n(667105),
  M = n(341907),
  x = n(87894),
  v = n(2660),
  L = n(46140),
  Z = n(981631),
  P = n(689938),
  D = n(504321);
let j = (e, t, n) => (0, x.uq)(e) && !n && "lg" === t ? "text-lg/medium" : "lg" === t ? "text-md/medium" : "sm" === t ? "text-sm/medium" : "text-xs/medium";

function U(e) {
  let {
    containerSize: t,
    onClick: n,
    children: s,
    tabIndex: i
  } = e;
  return "xs" === t ? (0, l.jsx)(u.Clickable, {
    tabIndex: i,
    className: D.learnMoreLink,
    tag: "span",
    onClick: n,
    children: (0, l.jsx)(u.Text, {
      variant: "text-sm/medium",
      color: "text-link",
      children: s
    })
  }) : (0, l.jsx)(u.Button, {
    tabIndex: i,
    wrapperClassName: D.ctaButtonWrapper,
    color: u.ButtonColors.PRIMARY,
    onClick: n,
    children: s
  })
}(i = s || (s = {}))[i.UNACCEPTED = 0] = "UNACCEPTED", i[i.ACCEPTED = 1] = "ACCEPTED", i[i.IN_PROGRESS = 2] = "IN_PROGRESS", i[i.COMPLETED = 3] = "COMPLETED", i[i.CLAIMED = 4] = "CLAIMED";

function y(e) {
  let {
    quest: t,
    useReducedMotion: n
  } = e, [s, i] = a.useState([]), r = (0, R.g2)({
    useReducedMotion: n,
    className: o()(D.refreshIcon, s.length > 0 ? D.refreshIconErrorState : void 0)
  }), c = async () => {
    r.startAnimation(), i((await (0, m.CS)(t.id)).errorHints), r.stopAnimation()
  }, d = () => {
    c()
  }, {
    rawTooltipText: E,
    renderTooltipText: _,
    buttonText: I
  } = a.useMemo(() => {
    let e = g.r.build(t.config).application.name,
      n = (0, A.zK)(t, L.S7.IN_HOUSE_CONSOLE_QUEST),
      i = s.join("\n"),
      a = () => (0, l.jsx)(l.Fragment, {
        children: s.map((e, t) => (0, l.jsx)(u.Text, {
          className: t > 0 ? D.ctaTooltipErrorHint : void 0,
          variant: "text-xxs/normal",
          children: e
        }, t))
      });
    return n ? {
      rawTooltipText: s.length > 0 ? i : P.Z.Messages.QUESTS_CHECK_FOR_ANY_GAME_LAUNCH_TOOLTIP,
      renderTooltipText: s.length > 0 ? a : () => P.Z.Messages.QUESTS_CHECK_FOR_ANY_GAME_LAUNCH_TOOLTIP,
      buttonText: s.length > 0 ? P.Z.Messages.QUESTS_ANY_GAME_NOT_DETECTED : P.Z.Messages.QUESTS_MICROHPONE_UNIT_BUTTON_CTA
    } : {
      rawTooltipText: s.length > 0 ? i : P.Z.Messages.QUESTS_CHECK_FOR_GAME_LAUNCH_TOOLTIP.format({
        gameTitle: e
      }),
      renderTooltipText: s.length > 0 ? a : () => P.Z.Messages.QUESTS_CHECK_FOR_GAME_LAUNCH_TOOLTIP.format({
        gameTitle: e
      }),
      buttonText: s.length > 0 ? P.Z.Messages.QUESTS_GAME_NOT_DETECTED.format({
        gameTitle: e
      }) : P.Z.Messages.QUESTS_MICROHPONE_UNIT_BUTTON_CTA
    }
  }, [t, s]);
  return (0, l.jsx)(u.Tooltip, {
    "aria-label": E,
    text: _(),
    tooltipContentClassName: s.length > 0 ? D.ctaTooltipErrorText : D.ctaTooltipText,
    children: e => (0, l.jsx)(u.Button, {
      ...e,
      wrapperClassName: D.ctaButtonWrapper,
      color: s.length > 0 ? u.ButtonColors.RED : u.ButtonColors.PRIMARY,
      onClick: d,
      children: (0, l.jsxs)("div", {
        className: D.ctaButtonInner,
        children: [I, r.render()]
      })
    })
  }, E)
}

function b(e) {
  let {
    isQuestComplete: t,
    useReducedMotion: n,
    isInHouseQuest: s,
    inGiftInventory: i,
    disabled: a,
    isEnrolling: r,
    onClick: o,
    children: c,
    ...d
  } = e, E = s && i && t, _ = E ? D.inHouseButton : u.ButtonColors.BRAND, I = t && !n ? u.ShinyButton : u.Button;
  return (0, l.jsx)(I, {
    ...d,
    wrapperClassName: D.ctaButtonWrapper,
    color: _,
    disabled: a,
    submitting: r,
    onClick: o,
    children: (0, l.jsxs)("div", {
      className: D.ctaButtonInner,
      children: [E && (0, l.jsx)(u.GameControllerIcon, {
        size: "custom",
        width: 20,
        height: 20,
        className: D.inHouseIcon,
        color: "white"
      }), c]
    })
  })
}
t.Z = e => {
  let {
    quest: t,
    location: n,
    size: s,
    isFocused: i,
    isQuestExpired: r,
    isExpanded: B,
    isAnimating: k,
    contentPosition: G
  } = e, F = function(e) {
    var t, n, s;
    let i = (null === (t = e.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null,
      l = (null === (n = e.userStatus) || void 0 === n ? void 0 : n.completedAt) != null,
      a = (null === (s = e.userStatus) || void 0 === s ? void 0 : s.claimedAt) != null,
      r = (0, h.Rf)({
        quest: e,
        location: L.dr.QUESTS_CARD
      }).percentComplete > 0;
    if (a) return 4;
    if (l) return 3;
    if (r) return 2;
    else if (i) return 1;
    else return 0
  }(t), V = F >= 1, w = F >= 3, H = F >= 4, Y = (0, A.Xv)(t.config), K = (0, A.zK)(t, L.S7.IN_HOUSE_CONSOLE_QUEST), W = (0, A.$J)(t), z = (0, x.uq)(n), Q = n === S.jn.QUESTS_EMBED, X = B || k, {
    xboxAndPlaystationAccounts: q
  } = (0, h.z6)(), J = (0, h.t5)(t, L.dr.QUESTS_CARD), $ = V && !H && z, ee = q.length > 0, et = (0, A.Bz)(t), en = V && W && !ee, es = (0, c.e7)([E.Z], () => E.Z.useReducedMotion), ei = function(e) {
    let {
      progressState: t,
      isCollectibleQuest: n,
      isInHouseQuest: s,
      inGiftInventory: i,
      waitingForConsoleConnection: l
    } = e;
    switch (t) {
      case 0:
      default:
        return P.Z.Messages.QUESTS_ACCEPT;
      case 1:
        if (l && i) return P.Z.Messages.QUESTS_CONNECT_CONSOLE;
        return P.Z.Messages.QUESTS_CLAIM_REWARD;
      case 2:
      case 3:
        return P.Z.Messages.QUESTS_CLAIM_REWARD;
      case 4:
        if (s && i) return P.Z.Messages.QUESTS_MOBILE_HOME_VIEW_REWARD;
        if (n) return P.Z.Messages.COLLECTIBLES_USE_NOW;
        return P.Z.Messages.QUESTS_SEE_CODE
    }
  }({
    progressState: F,
    isCollectibleQuest: Y,
    isInHouseQuest: K,
    inGiftInventory: z,
    waitingForConsoleConnection: en
  }), el = K && z && w ? P.Z.Messages.QUESTS_IN_HOUSE_REWARD_TOOLTIP : V ? P.Z.Messages.QUESTS_IN_PROGRESS_TOOLTIP : P.Z.Messages.QUESTS_ACCEPT_TOOLTIP, ea = (0, R.hf)({
    quest: t,
    location: n,
    questContentPosition: G
  }), er = a.useMemo(() => W && z && !ee ? 2 === F : V && !w, [W, z, V, w, F, ee]), eo = (0, c.e7)([C.Z], () => C.Z.isEnrolling(t.id)), ec = () => {
    if (en && z) {
      let e = (0, p.i)({
        location: L.dr.QUESTS_CARD
      });
      return (0, M.gI)({
        showInline: e
      })
    }
    if (!V) return (0, m.AH)(t.id, {
      questContent: n,
      questContentCTA: N.jZ.ACCEPT_QUEST,
      questContentPosition: G
    });
    ea()
  }, eu = (0, c.e7)([_.default], () => _.default.locale), ed = z && Y, eE = r && !w, e_ = (0, l.jsx)(O.Z, {
    autoplay: i,
    className: o()(D.gridImg, {
      [D.questRewardGiftInventory]: z && "lg" === s,
      [D.questRewardEmbed]: Q && "lg" === s,
      [D.questRewardEmbedSm]: "sm" === s,
      [D.questRewardEmbedXs]: "xs" === s
    }),
    learnMoreStyle: z ? null : "text",
    quest: t,
    questContent: n,
    questContentPosition: G
  });
  return (0, l.jsxs)("div", {
    className: o()(D.outerContainer, {
      [D.outerContainerSm]: "sm" === s,
      [D.outerContainerXs]: "xs" === s,
      [D.outerContainerNoProgress]: !$
    }),
    style: {
      visibility: X ? "visible" : "hidden"
    },
    "aria-hidden": !X,
    children: [(0, l.jsx)(u.Tooltip, {
      text: eE ? P.Z.Messages.QUESTS_REWARD_TILE_EXPIRED_QUEST : null,
      tooltipContentClassName: D.rewardTileExpirationTooltip,
      shouldShow: eE,
      children: e => (0, l.jsxs)("div", {
        className: D.rewardTileWrapper,
        ...e,
        children: [r && (0, l.jsx)("div", {
          className: D.rewardTileExpired,
          children: (0, l.jsx)(u.CircleExclamationPointIcon, {
            color: u.tokens.colors.WHITE
          })
        }), ed ? (0, l.jsx)(v.Z, {
          questConfig: t.config,
          fallback: e_,
          isFocused: i
        }) : e_]
      })
    }), (0, l.jsxs)("div", {
      className: o()(D.gridText, D.taskDetails),
      children: [(0, l.jsx)(u.Text, {
        variant: j(n, s, V),
        className: D.taskInstructions,
        children: r ? P.Z.Messages.QUESTS_EXPIRED_QUEST_CARD_HEADING.format({
          questName: t.config.messages.questName
        }) : J
      }), (0, l.jsx)(u.Text, {
        variant: "lg" === s ? "text-sm/medium" : "text-xs/medium",
        color: "text-muted",
        children: function(e) {
          var t, n, s, i, l, a, r;
          let {
            quest: o,
            location: c,
            locale: u,
            isQuestExpired: E,
            hasConsoleConnection: _
          } = e, N = (null === (t = o.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null, m = (null === (n = o.userStatus) || void 0 === n ? void 0 : n.completedAt) != null, C = m && (null === (s = o.userStatus) || void 0 === s ? void 0 : s.claimedAt) != null, S = (0, A.zK)(o, L.S7.IN_HOUSE_CONSOLE_QUEST), p = (0, A.zK)(o, L.S7.MOBILE_CONSOLE_QUEST), f = (0, x.uq)(c), O = (0, h.B6)(null === (i = o.userStatus) || void 0 === i ? void 0 : i.completedAt, {
            year: "numeric",
            month: "long",
            day: "numeric"
          }), R = (0, A.oo)({
            quest: o
          }), M = g.r.build(o.config).defaultReward.messages.nameWithArticle, v = (0, A.Kr)(o.config);
          if (m && S && f) return P.Z.Messages.QUEST_REWARD_COMPLETED_UNCLAIMED.format({
            date: O
          });
          if (C) {
            let e = R ? (0, A.o9)({
                quest: o,
                idx: null === (l = o.userStatus) || void 0 === l ? void 0 : l.claimedTier
              }) : null,
              t = null !== (a = null == e ? void 0 : e.messages.nameWithArticle) && void 0 !== a ? a : null;
            return null != t ? P.Z.Messages.QUEST_REWARD_COMPLETED_CLAIMED.format({
              reward: t,
              date: O
            }) : P.Z.Messages.QUEST_REWARD_COMPLETED.format({
              reward: M,
              date: O
            })
          }
          if (m) return R ? P.Z.Messages.QUEST_REWARD_COMPLETED_UNCLAIMED.format({
            date: O
          }) : P.Z.Messages.QUEST_REWARD_COMPLETED.format({
            reward: M,
            date: O
          });
          let D = R ? (0, A.o9)({
            quest: o,
            idx: 0
          }) : null;
          return E ? P.Z.Messages.QUESTS_EXPIRED_QUEST_CARD_SUBHEADING.format({
            reward: null !== (r = null == D ? void 0 : D.messages.nameWithArticle) && void 0 !== r ? r : M
          }) : f && !N && !_ && p ? null != v ? P.Z.Messages.QUEST_REWARD_MULTIPLATFORM_WITH_EXPIRING_COLLECTIBLE_REWARD.format({
            gameTitle: o.config.messages.gameTitle,
            reward: M,
            streamingDurationRequirement: (0, A.il)({
              quest: o,
              location: L.dr.QUESTS_CARD
            }).targetMinutes,
            onClick: () => {
              d.Z.open(Z.oAB.CONNECTIONS)
            },
            duration: v
          }) : P.Z.Messages.QUEST_REWARD_MULTIPLATFORM.format({
            gameTitle: o.config.messages.gameTitle,
            reward: M,
            streamingDurationRequirement: (0, A.il)({
              quest: o,
              location: L.dr.QUESTS_CARD
            }).targetMinutes,
            onClick: () => {
              d.Z.open(Z.oAB.CONNECTIONS)
            }
          }) : null != D && null != D.approximateCount ? P.Z.Messages.QUEST_REWARD_TIERED.format({
            maxReward: D.messages.nameWithArticle,
            maxRewardCount: (0, T.Bs)(D.approximateCount, u),
            helpCenterLink: I.Z.getArticleURL(Z.BhN.QUESTS_LEARN_MORE)
          }) : null != v ? P.Z.Messages.QUEST_REWARD_WITH_EXPIRATION.format({
            reward: M,
            duration: v
          }) : P.Z.Messages.QUEST_REWARD.format({
            reward: M
          })
        }({
          quest: t,
          location: n,
          locale: eu,
          isQuestExpired: r,
          hasConsoleConnection: ee
        })
      })]
    }), (0, l.jsxs)("div", {
      className: o()(D.ctaButtonContainer, D.gridCtaButtons),
      children: [!z && (0, l.jsx)(U, {
        containerSize: s,
        onClick: () => {
          d.Z.open(Z.oAB.INVENTORY), (0, N._3)({
            questId: t.id,
            questContent: n,
            questContentPosition: G,
            questContentCTA: N.jZ.LEARN_MORE
          })
        },
        children: P.Z.Messages.QUESTS_LEARN_MORE_V2
      }), r && !w ? null : W && z && V && ee && !et ? (0, l.jsx)(y, {
        quest: t,
        useReducedMotion: es
      }) : (0, l.jsx)(u.Tooltip, {
        text: el,
        tooltipContentClassName: D.ctaTooltipText,
        shouldShow: !w || w && W && z,
        children: e => (0, l.jsx)(b, {
          ...e,
          isQuestComplete: w,
          useReducedMotion: es,
          isInHouseQuest: K,
          inGiftInventory: z,
          disabled: er,
          isEnrolling: eo,
          onClick: ec,
          children: ei
        })
      }, el)]
    }), $ && (0, l.jsx)(f.Z, {
      className: D.gridProgressBar,
      color: w ? u.tokens.colors.TEXT_POSITIVE : u.tokens.colors.BG_BRAND,
      quest: t,
      isInventory: z
    })]
  })
}