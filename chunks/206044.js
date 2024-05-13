"use strict";
n.r(t), n("47120");
var s = n("735250"),
  a = n("470079"),
  l = n("120356"),
  i = n.n(l),
  r = n("685626"),
  o = n("722770"),
  u = n("581051"),
  d = n("442837"),
  c = n("846519"),
  E = n("481060"),
  f = n("393238"),
  _ = n("607070"),
  T = n("210887"),
  I = n("808268"),
  m = n("810090"),
  N = n("572004"),
  p = n("617136"),
  S = n("113434"),
  C = n("497505"),
  A = n("918701"),
  h = n("685613"),
  g = n("611855"),
  M = n("644646"),
  O = n("670638"),
  R = n("87894"),
  v = n("46140"),
  L = n("689938"),
  P = n("257100");
let x = (0, r.animated)(u.ChevronSmallDownIcon),
  D = (0, r.animated)(m.default),
  y = e => {
    let {
      quest: t,
      location: n,
      questContentPosition: l,
      ...i
    } = e, [r, o] = a.useState(!1), u = a.useRef(new c.Timeout);
    a.useEffect(() => {
      let e = u.current;
      return function() {
        e.stop()
      }
    }, []);
    let d = () => {
      (0, p.trackQuestContentClicked)({
        questId: t.id,
        questContent: n,
        questContentCTA: p.QuestContentCTA.COPY_QUEST_URL,
        questContentPosition: l
      }), (0, N.copy)((0, A.getQuestUrl)(t.id)), o(!0), u.current.start(1e3, () => o(!1))
    };
    return (0, s.jsx)(E.Tooltip, {
      forceOpen: r,
      shouldShow: r,
      color: E.Tooltip.Colors.GREEN,
      text: L.default.Messages.COPY_SUCCESS_1,
      children: () => (0, s.jsx)(E.Button, {
        ...i,
        className: P.shareButton,
        color: E.Button.Colors.PRIMARY,
        size: E.Button.Sizes.SMALL,
        onClick: d,
        children: L.default.Messages.QUESTS_SHARE_QUEST
      })
    })
  };
t.default = e => {
  var t;
  let {
    isFocused: n,
    isQuestExpired: l,
    quest: u,
    location: c,
    size: m,
    expansionSpring: N,
    isAnimating: U,
    isExpanded: j,
    isInConcurrentQuestExperiment: b,
    contentPosition: G,
    toggleExpanded: B
  } = e, {
    ref: F,
    height: k
  } = (0, f.default)(), {
    ref: w,
    width: H,
    scrollWidth: V
  } = (0, f.default)(), Y = (0, d.useStateFromStores)([T.default], () => T.default.getState().theme), K = (0, d.useStateFromStores)([_.default], () => _.default.useReducedMotion), W = a.useMemo(() => (0, A.isAssetAnimated)(u.config.assets.hero), [u]), z = a.useRef(null), Q = (0, R.isQuestCardInGiftInventory)(c), q = c === C.QuestContent.QUESTS_EMBED, X = (0, S.useQuestInstructionTitle)(u, v.QuestsExperimentLocations.QUESTS_CARD), Z = (null === (t = u.userStatus) || void 0 === t ? void 0 : t.completedAt) != null, J = (0, S.useQuestFormattedDate)(u.config.expiresAt, {
    year: "numeric",
    month: "long",
    day: "numeric"
  }), $ = (0, S.useQuestFormattedDate)(u.config.rewardCodeExpiresAt, {
    year: "numeric",
    month: "long",
    day: "numeric"
  }), ee = e => {
    e.stopPropagation(), B(), (0, p.trackQuestContentClicked)({
      questId: u.id,
      questContent: c,
      questContentCTA: j ? p.QuestContentCTA.COLLAPSE : p.QuestContentCTA.EXPAND,
      questContentPosition: G
    })
  };
  a.useEffect(() => {
    W && null != z.current && (n ? z.current.play() : !n && (z.current.pause(), z.current.currentTime = 0))
  }, [n, W]);
  let et = (0, A.getHeroAssetUrl)(u);
  return (0, s.jsxs)("div", {
    className: i()(P.outerContainer, {
      [P.outerContainerGiftInventory]: Q,
      [P.outerContainerEmbed]: q,
      [P.outerContainerXs]: "xs" === m
    }),
    "aria-label": L.default.Messages.EXPAND,
    style: {
      height: Q ? k : void 0
    },
    children: [(0, s.jsx)(D, {
      style: {
        opacity: N.to({
          range: [0, 1],
          output: [.25, 1]
        })
      },
      autoPlay: !1,
      loop: !1,
      muted: !0,
      playsInline: !0,
      className: P.questSplash,
      controls: !1,
      poster: et,
      ref: z,
      children: !K && W && (0, s.jsx)("source", {
        src: et,
        type: (0, A.getVideoAssetMimeType)(et)
      })
    }), (0, s.jsxs)("div", {
      className: P.header,
      "aria-expanded": j,
      children: [(0, s.jsxs)(r.animated.div, {
        className: i()(P.headerContent, {
          [P.headerContentEmbed]: q
        }),
        style: {
          y: Q ? N.to({
            range: [0, 1],
            output: [R.QUESTS_CARD_COLLAPSED_HEIGHT_PX, 0]
          }) : void 0
        },
        children: [Q && (0, s.jsx)(r.animated.div, {
          className: P.headerCollapsedContent,
          style: {
            opacity: N.to({
              range: [0, 1],
              output: [1, 0]
            }),
            visibility: U || !j ? "visible" : "hidden"
          },
          "aria-hidden": !U && j,
          children: (0, s.jsxs)(E.ClickableContainer, {
            "aria-label": L.default.Messages.EXPAND,
            onClick: ee,
            className: P.headerCollapsedClickableContainer,
            children: [(0, s.jsx)("div", {
              className: P.headerCollapsedContentRewardWrapper,
              children: (0, s.jsx)(M.default, {
                quest: u,
                questContent: c,
                className: P.headerCollapsedRewardTile
              })
            }), (0, s.jsxs)("div", {
              className: P.headerCollapsedContentCopyWrapper,
              children: [(0, s.jsxs)("div", {
                className: P.headerCollapsedContentCopyLogos,
                children: [(0, s.jsx)(h.default, {
                  className: P.partnerBranding,
                  gameTileSize: h.GameTileSizes.MEDIUM,
                  quest: u,
                  theme: Y
                }), (0, s.jsx)(g.default, {
                  color: "always-white"
                })]
              }), (0, s.jsx)(E.Text, {
                variant: "text-xs/medium",
                children: X
              })]
            })]
          })
        }), (0, s.jsxs)(r.animated.div, {
          ref: e => {
            F.current = e
          },
          className: i()(P.headerExpandedContent, {
            [P.outerContainerGiftInventory]: Q,
            [P.outerContainerEmbed]: q
          }),
          style: {
            opacity: N.to({
              range: [0, 1],
              output: [0, 1]
            }),
            visibility: U || j ? "visible" : "hidden"
          },
          "aria-hidden": !U && !j,
          children: [(0, s.jsxs)("div", {
            className: P.headerExpandedWrapper,
            children: [(0, s.jsxs)("div", {
              className: P.iconLogotypeContainer,
              children: [(0, s.jsx)(h.default, {
                className: P.partnerBranding,
                gameTileSize: h.GameTileSizes.MEDIUM,
                quest: u,
                theme: Y
              }), (0, s.jsx)(g.default, {
                color: "always-white"
              })]
            }), (0, s.jsxs)("div", {
              className: P.questInfo,
              children: [(0, s.jsx)(E.Tooltip, {
                text: u.config.messages.questName,
                shouldShow: null != H && null != V && H < V,
                children: e => (0, s.jsx)(E.Heading, {
                  ref: w,
                  variant: "lg" === m ? "heading-xxl/bold" : "sm" === m ? "heading-xl/bold" : "heading-lg/bold",
                  className: P.heading,
                  ...e,
                  children: L.default.Messages.QUEST.format({
                    questName: u.config.messages.questName
                  })
                })
              }), (0, s.jsx)(E.Text, {
                variant: "text-xs/normal",
                children: Z ? L.default.Messages.QUESTS_CLAIM_BY_DATE.format({
                  expirationDate: $
                }) : l ? L.default.Messages.QUESTS_EXPIRED_ON.format({
                  expirationDate: J
                }) : L.default.Messages.QUESTS_AVAILABLE_UNTIL_DATE.format({
                  expirationDate: J
                })
              })]
            })]
          }), !l && Q && (0, s.jsx)(y, {
            quest: u,
            location: c,
            questContentPosition: G
          })]
        })]
      }), (0, s.jsxs)(r.animated.div, {
        className: P.iconsContainer,
        style: {
          top: Q ? N.to({
            range: [0, 1],
            output: [R.QUESTS_CARD_COLLAPSED_HEIGHT_PX / 2 - R.QUESTS_CARD_ICON_SIZE_PX / 2, R.QUESTS_CARD_PADDING_Y_PX]
          }) : R.QUESTS_CARD_PADDING_Y_PX
        },
        children: [(0, s.jsx)(O.QuestsEntryContextMenuPopout, {
          questContent: c,
          quest: u,
          questContentPosition: G,
          shouldShowDisclosure: !0,
          hideLearnMore: Q,
          showShareLink: !l && q,
          children: e => (0, s.jsx)(r.animated.div, {
            style: {
              opacity: N,
              visibility: U || j ? "visible" : "hidden"
            },
            "aria-hidden": !U && !j,
            children: (0, s.jsx)(E.Clickable, {
              ...e,
              className: P.iconWrapper,
              "aria-label": L.default.Messages.ACTIONS,
              children: (0, s.jsx)(I.default, {
                color: o.default.WHITE
              })
            })
          })
        }), b && !(0, R.shouldQuestCardBeExpandedPermanently)(c) && (0, s.jsx)(E.Clickable, {
          onClick: ee,
          className: P.iconWrapper,
          "aria-label": j ? L.default.Messages.COLLAPSE : L.default.Messages.EXPAND,
          children: (0, s.jsx)(x, {
            style: {
              rotate: N.to({
                range: [0, 1],
                output: [0, 180]
              })
            },
            color: o.default.WHITE
          })
        })]
      })]
    })]
  })
}