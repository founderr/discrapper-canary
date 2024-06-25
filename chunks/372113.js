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
  m = n(617136),
  N = n(272008),
  h = n(113434),
  C = n(569984),
  S = n(497505),
  A = n(918701),
  g = n(796111),
  p = n(566078),
  f = n(340100),
  R = n(644646),
  O = n(667105),
  M = n(341907),
  x = n(87894),
  v = n(2660),
  L = n(46140),
  Z = n(981631),
  P = n(689938),
  D = n(504321),
  j = n(789002);
let U = (e, t, n) => (0, x.uq)(e) && !n && "lg" === t ? "text-lg/medium" : "lg" === t ? "text-md/medium" : "sm" === t ? "text-sm/medium" : "text-xs/medium";

function b(e) {
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
  } = e, [s, i] = a.useState([]), r = (0, O.g2)({
    useReducedMotion: n,
    className: o()(D.refreshIcon, s.length > 0 ? D.refreshIconErrorState : void 0)
  }), c = async () => {
    r.startAnimation(), i((await (0, N.CS)(t.id)).errorHints), r.stopAnimation()
  }, d = () => {
    (0, m._3)({
      questId: t.id,
      questContent: S.jn.GIFT_INVENTORY_FOR_YOU,
      questContentCTA: m.jZ.DEFIBRILLATOR
    }), c()
  }, {
    rawTooltipText: E,
    renderTooltipText: _,
    buttonText: I
  } = a.useMemo(() => {
    let e = p.r.build(t.config).application.name,
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

function B(e) {
  let {
    quest: t,
    progressState: n,
    isCollectibleQuest: s,
    location: i,
    questContentPosition: r,
    inGiftInventory: o
  } = e, d = n >= 1, _ = n >= 3, I = (0, A.$J)(t), {
    xboxAndPlaystationAccounts: T
  } = (0, h.z6)(), S = T.length > 0, p = (0, A.Bz)(t), f = (0, c.e7)([E.Z], () => E.Z.useReducedMotion), R = (0, c.e7)([C.Z], () => C.Z.isEnrolling(t.id)), x = (0, A.zK)(t, L.S7.IN_HOUSE_CONSOLE_QUEST), v = function(e) {
    let {
      quest: t,
      progressState: n,
      isCollectibleQuest: s,
      location: i,
      questContentPosition: l,
      waitingForConsoleConnection: r,
      isInHouseQuest: o,
      inGiftInventory: c
    } = e, u = (0, O.hf)({
      quest: t,
      location: i,
      questContentPosition: l
    });
    return a.useMemo(() => {
      switch (n) {
        case 0:
          return {
            text: P.Z.Messages.QUESTS_ACCEPT, tooltipText: P.Z.Messages.QUESTS_ACCEPT_TOOLTIP, onClick: () => (0, N.AH)(t.id, {
              questContent: i,
              questContentCTA: m.jZ.ACCEPT_QUEST,
              questContentPosition: l
            })
          };
        case 1:
        case 2:
          if (r && c) return {
            text: P.Z.Messages.QUESTS_CONNECT_CONSOLE,
            tooltipText: null,
            onClick: () => (0, M.gI)({
              quest: t,
              showInline: (0, g.i)({
                location: L.dr.QUESTS_CARD
              })
            }, {
              content: i,
              ctaContent: m.jZ.CONNECT_CONSOLE
            })
          };
          return {
            text: P.Z.Messages.QUESTS_CLAIM_REWARD, tooltipText: P.Z.Messages.QUESTS_IN_PROGRESS_TOOLTIP, onClick: null
          };
        case 3:
          return {
            text: P.Z.Messages.QUESTS_CLAIM_REWARD, tooltipText: o ? P.Z.Messages.QUESTS_IN_HOUSE_REWARD_TOOLTIP : null, onClick: u
          };
        case 4:
          let e = {
            tooltipText: null,
            onClick: u
          };
          if (o) return {
            ...e,
            text: P.Z.Messages.QUESTS_MOBILE_HOME_VIEW_REWARD
          };
          if (s) return {
            ...e,
            text: P.Z.Messages.COLLECTIBLES_USE_NOW
          };
          return {
            ...e, text: P.Z.Messages.QUESTS_SEE_CODE
          }
      }
    }, [t, s, o, i, u, n, l, r, c])
  }({
    progressState: n,
    quest: t,
    isInHouseQuest: x,
    location: i,
    isCollectibleQuest: s,
    waitingForConsoleConnection: d && I && !S,
    questContentPosition: r,
    inGiftInventory: o
  });
  if (I && d && S && !p && !_ && o) return (0, l.jsx)(y, {
    quest: t,
    useReducedMotion: f
  });
  let Z = x && o && _,
    U = Z ? D.inHouseButton : u.ButtonColors.BRAND,
    b = _ && !f ? u.ShinyButton : u.Button;
  return (0, l.jsx)(u.Tooltip, {
    text: v.tooltipText,
    tooltipContentClassName: D.ctaTooltipText,
    children: e => {
      var t;
      return (0, l.jsx)(b, {
        ...e,
        wrapperClassName: D.ctaButtonWrapper,
        color: U,
        disabled: null == v.onClick,
        submitting: R,
        onClick: null !== (t = v.onClick) && void 0 !== t ? t : () => {},
        children: (0, l.jsxs)("div", {
          className: D.ctaButtonInner,
          children: [Z && (0, l.jsx)("img", {
            src: j,
            alt: "",
            className: D.inHouseIcon
          }), v.text]
        })
      })
    }
  }, v.tooltipText)
}
t.Z = e => {
  let {
    quest: t,
    location: n,
    size: s,
    isFocused: i,
    isQuestExpired: a,
    isExpanded: r,
    isAnimating: E,
    contentPosition: N
  } = e, C = function(e) {
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
  }(t), g = C >= 1, O = C >= 3, M = C >= 4, j = (0, A.Xv)(t.config), y = (0, x.uq)(n), k = n === S.jn.QUESTS_EMBED, G = r || E, {
    xboxAndPlaystationAccounts: F
  } = (0, h.z6)(), V = (0, h.t5)(t, L.dr.QUESTS_CARD), w = g && !M && y, H = F.length > 0, Y = (0, c.e7)([_.default], () => _.default.locale), W = y && j, z = a && !O, K = (0, l.jsx)(R.Z, {
    autoplay: i,
    className: o()(D.gridImg, {
      [D.questRewardGiftInventory]: y && "lg" === s,
      [D.questRewardEmbed]: k && "lg" === s,
      [D.questRewardEmbedSm]: "sm" === s,
      [D.questRewardEmbedXs]: "xs" === s
    }),
    learnMoreStyle: y ? null : "text",
    quest: t,
    questContent: n,
    questContentPosition: N
  });
  return (0, l.jsxs)("div", {
    className: o()(D.outerContainer, {
      [D.outerContainerSm]: "sm" === s,
      [D.outerContainerXs]: "xs" === s,
      [D.outerContainerNoProgress]: !w
    }),
    style: {
      visibility: G ? "visible" : "hidden"
    },
    "aria-hidden": !G,
    children: [(0, l.jsx)(u.Tooltip, {
      text: z ? P.Z.Messages.QUESTS_REWARD_TILE_EXPIRED_QUEST : null,
      tooltipContentClassName: D.rewardTileExpirationTooltip,
      shouldShow: z,
      children: e => (0, l.jsxs)("div", {
        className: D.rewardTileWrapper,
        ...e,
        children: [a && (0, l.jsx)("div", {
          className: D.rewardTileExpired,
          children: (0, l.jsx)(u.CircleExclamationPointIcon, {
            color: u.tokens.colors.WHITE
          })
        }), W ? (0, l.jsx)(v.Z, {
          questConfig: t.config,
          fallback: K,
          isFocused: i
        }) : K]
      })
    }), (0, l.jsxs)("div", {
      className: o()(D.gridText, D.taskDetails),
      children: [(0, l.jsx)(u.Text, {
        variant: U(n, s, g),
        className: D.taskInstructions,
        children: a ? P.Z.Messages.QUESTS_EXPIRED_QUEST_CARD_HEADING.format({
          questName: t.config.messages.questName
        }) : V
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
          } = e, m = (null === (t = o.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null, N = (null === (n = o.userStatus) || void 0 === n ? void 0 : n.completedAt) != null, C = N && (null === (s = o.userStatus) || void 0 === s ? void 0 : s.claimedAt) != null, S = (0, A.zK)(o, L.S7.IN_HOUSE_CONSOLE_QUEST), g = (0, A.zK)(o, L.S7.MOBILE_CONSOLE_QUEST), f = (0, x.uq)(c), R = (0, h.B6)(null === (i = o.userStatus) || void 0 === i ? void 0 : i.completedAt, {
            year: "numeric",
            month: "long",
            day: "numeric"
          }), O = (0, A.oo)({
            quest: o
          }), M = p.r.build(o.config).defaultReward.messages.nameWithArticle, v = (0, A.Kr)(o.config);
          if (N && S && f) return P.Z.Messages.QUEST_REWARD_COMPLETED_UNCLAIMED.format({
            date: R
          });
          if (C) {
            let e = O ? (0, A.o9)({
                quest: o,
                idx: null === (l = o.userStatus) || void 0 === l ? void 0 : l.claimedTier
              }) : null,
              t = null !== (a = null == e ? void 0 : e.messages.nameWithArticle) && void 0 !== a ? a : null;
            return null != t ? P.Z.Messages.QUEST_REWARD_COMPLETED_CLAIMED.format({
              reward: t,
              date: R
            }) : P.Z.Messages.QUEST_REWARD_COMPLETED.format({
              reward: M,
              date: R
            })
          }
          if (N) return O ? P.Z.Messages.QUEST_REWARD_COMPLETED_UNCLAIMED.format({
            date: R
          }) : P.Z.Messages.QUEST_REWARD_COMPLETED.format({
            reward: M,
            date: R
          });
          let D = O ? (0, A.o9)({
            quest: o,
            idx: 0
          }) : null;
          return E ? P.Z.Messages.QUESTS_EXPIRED_QUEST_CARD_SUBHEADING.format({
            reward: null !== (r = null == D ? void 0 : D.messages.nameWithArticle) && void 0 !== r ? r : M
          }) : f && !m && !_ && g ? null != v ? P.Z.Messages.QUEST_REWARD_MULTIPLATFORM_WITH_EXPIRING_COLLECTIBLE_REWARD.format({
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
          locale: Y,
          isQuestExpired: a,
          hasConsoleConnection: H
        })
      })]
    }), (0, l.jsxs)("div", {
      className: o()(D.ctaButtonContainer, D.gridCtaButtons),
      children: [!y && (0, l.jsx)(b, {
        containerSize: s,
        onClick: () => {
          d.Z.open(Z.oAB.INVENTORY), (0, m._3)({
            questId: t.id,
            questContent: n,
            questContentPosition: N,
            questContentCTA: m.jZ.LEARN_MORE
          })
        },
        children: P.Z.Messages.QUESTS_LEARN_MORE_V2
      }), a && !O ? null : (0, l.jsx)(B, {
        quest: t,
        progressState: C,
        isCollectibleQuest: j,
        location: n,
        inGiftInventory: y
      })]
    }), w && (0, l.jsx)(f.Z, {
      className: D.gridProgressBar,
      color: O ? u.tokens.colors.TEXT_POSITIVE : u.tokens.colors.BG_BRAND,
      quest: t,
      isInventory: y
    })]
  })
}