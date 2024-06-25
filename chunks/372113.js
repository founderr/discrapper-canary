n(47120);
var i, a, s = n(735250),
  l = n(470079),
  r = n(120356),
  o = n.n(r),
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
  p = n(497505),
  C = n(918701),
  g = n(796111),
  S = n(566078),
  A = n(340100),
  R = n(644646),
  x = n(667105),
  O = n(341907),
  M = n(87894),
  v = n(2660),
  L = n(46140),
  Z = n(981631),
  P = n(689938),
  b = n(504321),
  D = n(789002);
let j = (e, t, n) => (0, M.uq)(e) && !n && "lg" === t ? "text-lg/medium" : "lg" === t ? "text-md/medium" : "sm" === t ? "text-sm/medium" : "text-xs/medium";

function U(e) {
  let {
    containerSize: t,
    onClick: n,
    children: i,
    tabIndex: a
  } = e;
  return "xs" === t ? (0, s.jsx)(d.Clickable, {
    tabIndex: a,
    className: b.learnMoreLink,
    tag: "span",
    onClick: n,
    children: (0, s.jsx)(d.Text, {
      variant: "text-sm/medium",
      color: "text-link",
      children: i
    })
  }) : (0, s.jsx)(d.Button, {
    tabIndex: a,
    wrapperClassName: b.ctaButtonWrapper,
    color: d.ButtonColors.PRIMARY,
    onClick: n,
    children: i
  })
}(a = i || (i = {}))[a.UNACCEPTED = 0] = "UNACCEPTED", a[a.ACCEPTED = 1] = "ACCEPTED", a[a.IN_PROGRESS = 2] = "IN_PROGRESS", a[a.COMPLETED = 3] = "COMPLETED", a[a.CLAIMED = 4] = "CLAIMED";

function y(e) {
  let {
    quest: t,
    useReducedMotion: n
  } = e, [i, a] = l.useState([]), r = (0, x.g2)({
    useReducedMotion: n,
    className: b.refreshIcon
  }), o = async () => {
    r.startAnimation(), a((await (0, h.CS)(t.id)).errorHints), r.stopAnimation()
  }, c = () => {
    (0, T._3)({
      questId: t.id,
      questContent: p.jn.GIFT_INVENTORY_FOR_YOU,
      questContentCTA: T.jZ.DEFIBRILLATOR
    }), o()
  }, {
    rawTooltipText: u,
    renderTooltipText: _,
    buttonText: E
  } = l.useMemo(() => {
    let e = S.r.build(t.config).application.name,
      n = (0, C.zK)(t, L.S7.IN_HOUSE_CONSOLE_QUEST),
      a = i.join("\n"),
      l = () => (0, s.jsx)(s.Fragment, {
        children: i.map((e, t) => (0, s.jsx)(d.Text, {
          className: t > 0 ? b.ctaTooltipErrorHint : void 0,
          variant: "text-xxs/normal",
          children: e
        }, t))
      });
    return n ? {
      rawTooltipText: i.length > 0 ? a : P.Z.Messages.QUESTS_CHECK_FOR_ANY_GAME_LAUNCH_TOOLTIP,
      renderTooltipText: i.length > 0 ? l : () => P.Z.Messages.QUESTS_CHECK_FOR_ANY_GAME_LAUNCH_TOOLTIP,
      buttonText: i.length > 0 ? P.Z.Messages.QUESTS_ANY_GAME_NOT_DETECTED : P.Z.Messages.QUESTS_MICROHPONE_UNIT_BUTTON_CTA
    } : {
      rawTooltipText: i.length > 0 ? a : P.Z.Messages.QUESTS_CHECK_FOR_GAME_LAUNCH_TOOLTIP.format({
        gameTitle: e
      }),
      renderTooltipText: i.length > 0 ? l : () => P.Z.Messages.QUESTS_CHECK_FOR_GAME_LAUNCH_TOOLTIP.format({
        gameTitle: e
      }),
      buttonText: i.length > 0 ? P.Z.Messages.QUESTS_GAME_NOT_DETECTED.format({
        gameTitle: e
      }) : P.Z.Messages.QUESTS_MICROHPONE_UNIT_BUTTON_CTA
    }
  }, [t, i]);
  return (0, s.jsx)(d.Tooltip, {
    "aria-label": u,
    text: _(),
    tooltipContentClassName: i.length > 0 ? b.ctaTooltipErrorText : b.ctaTooltipText,
    children: e => (0, s.jsx)(d.Button, {
      ...e,
      wrapperClassName: b.ctaButtonWrapper,
      color: i.length > 0 ? d.ButtonColors.RED : d.ButtonColors.PRIMARY,
      onClick: c,
      children: (0, s.jsxs)("div", {
        className: b.ctaButtonInner,
        children: [E, r.render()]
      })
    })
  }, u)
}

function B(e) {
  let {
    quest: t,
    progressState: n,
    isCollectibleQuest: i,
    location: a,
    questContentPosition: r,
    inGiftInventory: o
  } = e, u = n >= 1, E = n >= 3, I = (0, C.$J)(t), {
    xboxAndPlaystationAccounts: m
  } = (0, N.z6)(), p = m.length > 0, S = (0, C.Bz)(t), A = (0, c.e7)([_.Z], () => _.Z.useReducedMotion), R = (0, c.e7)([f.Z], () => f.Z.isEnrolling(t.id)), M = (0, C.zK)(t, L.S7.IN_HOUSE_CONSOLE_QUEST), v = function(e) {
    let {
      quest: t,
      progressState: n,
      isCollectibleQuest: i,
      location: a,
      questContentPosition: s,
      waitingForConsoleConnection: r,
      isInHouseQuest: o,
      inGiftInventory: c
    } = e, d = (0, x.hf)({
      quest: t,
      location: a,
      questContentPosition: s
    });
    return l.useMemo(() => {
      switch (n) {
        case 0:
          return {
            text: P.Z.Messages.QUESTS_ACCEPT, tooltipText: P.Z.Messages.QUESTS_ACCEPT_TOOLTIP, onClick: () => (0, h.AH)(t.id, {
              questContent: a,
              questContentCTA: T.jZ.ACCEPT_QUEST,
              questContentPosition: s
            })
          };
        case 1:
        case 2:
          if (r && c) return {
            text: P.Z.Messages.QUESTS_CONNECT_CONSOLE,
            tooltipText: null,
            onClick: () => (0, O.gI)({
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
            text: P.Z.Messages.QUESTS_CLAIM_REWARD, tooltipText: P.Z.Messages.QUESTS_IN_PROGRESS_TOOLTIP, onClick: null
          };
        case 3:
          return {
            text: P.Z.Messages.QUESTS_CLAIM_REWARD, tooltipText: o ? P.Z.Messages.QUESTS_IN_HOUSE_REWARD_TOOLTIP : null, onClick: d
          };
        case 4:
          let e = {
            tooltipText: null,
            onClick: d
          };
          if (o) return {
            ...e,
            text: P.Z.Messages.QUESTS_MOBILE_HOME_VIEW_REWARD
          };
          if (i) return {
            ...e,
            text: P.Z.Messages.COLLECTIBLES_USE_NOW
          };
          return {
            ...e, text: P.Z.Messages.QUESTS_SEE_CODE
          }
      }
    }, [t, i, o, a, d, n, s, r, c])
  }({
    progressState: n,
    quest: t,
    isInHouseQuest: M,
    location: a,
    isCollectibleQuest: i,
    waitingForConsoleConnection: u && I && !p,
    questContentPosition: r,
    inGiftInventory: o
  });
  if (I && u && p && !S && !E && o) return (0, s.jsx)(y, {
    quest: t,
    useReducedMotion: A
  });
  let Z = M && o && E,
    j = Z ? b.inHouseButton : d.ButtonColors.BRAND,
    U = E && !A ? d.ShinyButton : d.Button;
  return (0, s.jsx)(d.Tooltip, {
    text: v.tooltipText,
    tooltipContentClassName: b.ctaTooltipText,
    children: e => {
      var t;
      return (0, s.jsx)(U, {
        ...e,
        wrapperClassName: b.ctaButtonWrapper,
        color: j,
        disabled: null == v.onClick,
        submitting: R,
        onClick: null !== (t = v.onClick) && void 0 !== t ? t : () => {},
        children: (0, s.jsxs)("div", {
          className: b.ctaButtonInner,
          children: [Z && (0, s.jsx)("img", {
            src: D,
            alt: "",
            className: b.inHouseIcon
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
    size: i,
    isFocused: a,
    isQuestExpired: l,
    isExpanded: r,
    isAnimating: _,
    contentPosition: h
  } = e, f = function(e) {
    var t, n, i;
    let a = (null === (t = e.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null,
      s = (null === (n = e.userStatus) || void 0 === n ? void 0 : n.completedAt) != null,
      l = (null === (i = e.userStatus) || void 0 === i ? void 0 : i.claimedAt) != null,
      r = (0, N.Rf)({
        quest: e,
        location: L.dr.QUESTS_CARD
      }).percentComplete > 0;
    if (l) return 4;
    if (s) return 3;
    if (r) return 2;
    else if (a) return 1;
    else return 0
  }(t), g = f >= 1, x = f >= 3, O = f >= 4, D = (0, C.Xv)(t.config), y = (0, M.uq)(n), k = n === p.jn.QUESTS_EMBED, G = r || _, {
    xboxAndPlaystationAccounts: F
  } = (0, N.z6)(), w = (0, N.t5)(t, L.dr.QUESTS_CARD), V = g && !O && y, H = F.length > 0, Y = (0, c.e7)([E.default], () => E.default.locale), W = y && D, z = l && !x, K = (0, s.jsx)(R.Z, {
    autoplay: a,
    className: o()(b.gridImg, {
      [b.questRewardGiftInventory]: y && "lg" === i,
      [b.questRewardEmbed]: k && "lg" === i,
      [b.questRewardEmbedSm]: "sm" === i,
      [b.questRewardEmbedXs]: "xs" === i
    }),
    learnMoreStyle: y ? null : "text",
    quest: t,
    questContent: n,
    questContentPosition: h
  });
  return (0, s.jsxs)("div", {
    className: o()(b.outerContainer, {
      [b.outerContainerSm]: "sm" === i,
      [b.outerContainerXs]: "xs" === i,
      [b.outerContainerNoProgress]: !V
    }),
    style: {
      visibility: G ? "visible" : "hidden"
    },
    "aria-hidden": !G,
    children: [(0, s.jsx)(d.Tooltip, {
      text: z ? P.Z.Messages.QUESTS_REWARD_TILE_EXPIRED_QUEST : null,
      tooltipContentClassName: b.rewardTileExpirationTooltip,
      shouldShow: z,
      children: e => (0, s.jsxs)("div", {
        className: b.rewardTileWrapper,
        ...e,
        children: [l && (0, s.jsx)("div", {
          className: b.rewardTileExpired,
          children: (0, s.jsx)(d.CircleExclamationPointIcon, {
            color: d.tokens.colors.WHITE
          })
        }), W ? (0, s.jsx)(v.Z, {
          questConfig: t.config,
          fallback: K,
          isFocused: a
        }) : K]
      })
    }), (0, s.jsxs)("div", {
      className: o()(b.gridText, b.taskDetails),
      children: [(0, s.jsx)(d.Text, {
        variant: j(n, i, g),
        className: b.taskInstructions,
        children: l ? P.Z.Messages.QUESTS_EXPIRED_QUEST_CARD_HEADING.format({
          questName: t.config.messages.questName
        }) : w
      }), (0, s.jsx)(d.Text, {
        variant: "lg" === i ? "text-sm/medium" : "text-xs/medium",
        color: "text-muted",
        children: function(e) {
          var t, n, i, a, s, l, r;
          let {
            quest: o,
            location: c,
            locale: d,
            isQuestExpired: _,
            hasConsoleConnection: E
          } = e, T = (null === (t = o.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null, h = (null === (n = o.userStatus) || void 0 === n ? void 0 : n.completedAt) != null, f = h && (null === (i = o.userStatus) || void 0 === i ? void 0 : i.claimedAt) != null, p = (0, C.zK)(o, L.S7.IN_HOUSE_CONSOLE_QUEST), g = (0, C.zK)(o, L.S7.MOBILE_CONSOLE_QUEST), A = (0, M.uq)(c), R = (0, N.B6)(null === (a = o.userStatus) || void 0 === a ? void 0 : a.completedAt, {
            year: "numeric",
            month: "long",
            day: "numeric"
          }), x = (0, C.oo)({
            quest: o
          }), O = S.r.build(o.config).defaultReward.messages.nameWithArticle, v = (0, C.Kr)(o.config);
          if (h && p && A) return P.Z.Messages.QUEST_REWARD_COMPLETED_UNCLAIMED.format({
            date: R
          });
          if (f) {
            let e = x ? (0, C.o9)({
                quest: o,
                idx: null === (s = o.userStatus) || void 0 === s ? void 0 : s.claimedTier
              }) : null,
              t = null !== (l = null == e ? void 0 : e.messages.nameWithArticle) && void 0 !== l ? l : null;
            return null != t ? P.Z.Messages.QUEST_REWARD_COMPLETED_CLAIMED.format({
              reward: t,
              date: R
            }) : P.Z.Messages.QUEST_REWARD_COMPLETED.format({
              reward: O,
              date: R
            })
          }
          if (h) return x ? P.Z.Messages.QUEST_REWARD_COMPLETED_UNCLAIMED.format({
            date: R
          }) : P.Z.Messages.QUEST_REWARD_COMPLETED.format({
            reward: O,
            date: R
          });
          let b = x ? (0, C.o9)({
            quest: o,
            idx: 0
          }) : null;
          return _ ? P.Z.Messages.QUESTS_EXPIRED_QUEST_CARD_SUBHEADING.format({
            reward: null !== (r = null == b ? void 0 : b.messages.nameWithArticle) && void 0 !== r ? r : O
          }) : A && !T && !E && g ? null != v ? P.Z.Messages.QUEST_REWARD_MULTIPLATFORM_WITH_EXPIRING_COLLECTIBLE_REWARD.format({
            gameTitle: o.config.messages.gameTitle,
            reward: O,
            streamingDurationRequirement: (0, C.il)({
              quest: o,
              location: L.dr.QUESTS_CARD
            }).targetMinutes,
            onClick: () => {
              u.Z.open(Z.oAB.CONNECTIONS)
            },
            duration: v
          }) : P.Z.Messages.QUEST_REWARD_MULTIPLATFORM.format({
            gameTitle: o.config.messages.gameTitle,
            reward: O,
            streamingDurationRequirement: (0, C.il)({
              quest: o,
              location: L.dr.QUESTS_CARD
            }).targetMinutes,
            onClick: () => {
              u.Z.open(Z.oAB.CONNECTIONS)
            }
          }) : null != b && null != b.approximateCount ? P.Z.Messages.QUEST_REWARD_TIERED.format({
            maxReward: b.messages.nameWithArticle,
            maxRewardCount: (0, m.Bs)(b.approximateCount, d),
            helpCenterLink: I.Z.getArticleURL(Z.BhN.QUESTS_LEARN_MORE)
          }) : null != v ? P.Z.Messages.QUEST_REWARD_WITH_EXPIRATION.format({
            reward: O,
            duration: v
          }) : P.Z.Messages.QUEST_REWARD.format({
            reward: O
          })
        }({
          quest: t,
          location: n,
          locale: Y,
          isQuestExpired: l,
          hasConsoleConnection: H
        })
      })]
    }), (0, s.jsxs)("div", {
      className: o()(b.ctaButtonContainer, b.gridCtaButtons),
      children: [!y && (0, s.jsx)(U, {
        containerSize: i,
        onClick: () => {
          u.Z.open(Z.oAB.INVENTORY), (0, T._3)({
            questId: t.id,
            questContent: n,
            questContentPosition: h,
            questContentCTA: T.jZ.LEARN_MORE
          })
        },
        children: P.Z.Messages.QUESTS_LEARN_MORE_V2
      }), l && !x ? null : (0, s.jsx)(B, {
        quest: t,
        progressState: f,
        isCollectibleQuest: D,
        location: n,
        inGiftInventory: y
      })]
    }), V && (0, s.jsx)(A.Z, {
      className: b.gridProgressBar,
      color: x ? d.tokens.colors.TEXT_POSITIVE : d.tokens.colors.BG_BRAND,
      quest: t,
      isInventory: y
    })]
  })
}