"use strict";
n.r(t), n("47120");
var s = n("735250"),
  a = n("470079"),
  l = n("120356"),
  i = n.n(l),
  r = n("920906"),
  o = n("722770"),
  u = n("581051"),
  d = n("442837"),
  c = n("846519"),
  f = n("481060"),
  E = n("393238"),
  _ = n("607070"),
  T = n("210887"),
  m = n("808268"),
  I = n("810090"),
  N = n("572004"),
  p = n("617136"),
  h = n("113434"),
  S = n("497505"),
  C = n("918701"),
  A = n("566078"),
  g = n("685613"),
  M = n("611855"),
  R = n("644646"),
  O = n("670638"),
  v = n("87894"),
  x = n("46140"),
  L = n("689938"),
  P = n("257100");
let D = (0, r.animated)(u.ChevronSmallDownIcon),
  y = (0, r.animated)(I.default),
  U = e => {
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
      }), (0, N.copy)((0, C.getQuestUrl)(t.id)), o(!0), u.current.start(1e3, () => o(!1))
    };
    return (0, s.jsx)(f.Tooltip, {
      forceOpen: r,
      shouldShow: r,
      color: f.Tooltip.Colors.GREEN,
      text: L.default.Messages.COPY_SUCCESS_1,
      children: () => (0, s.jsx)(f.Button, {
        ...i,
        className: P.shareButton,
        color: f.Button.Colors.PRIMARY,
        size: f.Button.Sizes.SMALL,
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
    size: I,
    expansionSpring: N,
    isAnimating: j,
    isExpanded: b,
    isInConcurrentQuestExperiment: G,
    contentPosition: F,
    toggleExpanded: B
  } = e, {
    ref: k,
    height: w
  } = (0, E.default)(), {
    ref: H,
    width: V,
    scrollWidth: Y
  } = (0, E.default)(), K = (0, d.useStateFromStores)([T.default], () => T.default.getState().theme), W = (0, d.useStateFromStores)([_.default], () => _.default.useReducedMotion), z = a.useMemo(() => (0, C.isAssetAnimated)(u.config.assets.hero), [u]), Q = a.useRef(null), q = (0, v.isQuestCardInGiftInventory)(c), X = c === S.QuestContent.QUESTS_EMBED, Z = (0, h.useQuestInstructionTitle)(u, x.QuestsExperimentLocations.QUESTS_CARD), J = (null === (t = u.userStatus) || void 0 === t ? void 0 : t.completedAt) != null, $ = (0, h.useQuestFormattedDate)(u.config.expiresAt, {
    year: "numeric",
    month: "long",
    day: "numeric"
  }), ee = (0, h.useQuestFormattedDate)(A.SharedQuestFields.build(u.config).rewardsExpireAt, {
    year: "numeric",
    month: "long",
    day: "numeric"
  }), et = e => {
    e.stopPropagation(), e.currentTarget.blur(), B(), (0, p.trackQuestContentClicked)({
      questId: u.id,
      questContent: c,
      questContentCTA: b ? p.QuestContentCTA.COLLAPSE : p.QuestContentCTA.EXPAND,
      questContentPosition: F
    })
  };
  a.useEffect(() => {
    z && null != Q.current && (n ? Q.current.play() : !n && (Q.current.pause(), Q.current.currentTime = 0))
  }, [n, z]);
  let en = (0, C.getHeroAssetUrl)(u);
  return (0, s.jsxs)("div", {
    className: i()(P.outerContainer, {
      [P.outerContainerGiftInventory]: q,
      [P.outerContainerEmbed]: X,
      [P.outerContainerXs]: "xs" === I
    }),
    "aria-label": L.default.Messages.EXPAND,
    style: {
      height: q ? w : void 0
    },
    children: [(0, s.jsx)(y, {
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
      poster: en,
      ref: Q,
      children: !W && z && (0, s.jsx)("source", {
        src: en,
        type: (0, C.getVideoAssetMimeType)(en)
      })
    }), (0, s.jsxs)("div", {
      className: P.header,
      "aria-expanded": b,
      children: [(0, s.jsxs)(r.animated.div, {
        className: i()(P.headerContent, {
          [P.headerContentEmbed]: X
        }),
        style: {
          y: q ? N.to({
            range: [0, 1],
            output: [v.QUESTS_CARD_COLLAPSED_HEIGHT_PX, 0]
          }) : void 0
        },
        children: [q && (0, s.jsx)(r.animated.div, {
          className: P.headerCollapsedContent,
          style: {
            opacity: N.to({
              range: [0, 1],
              output: [1, 0]
            }),
            visibility: j || !b ? "visible" : "hidden"
          },
          "aria-hidden": !j && b,
          children: (0, s.jsxs)(f.ClickableContainer, {
            "aria-label": L.default.Messages.EXPAND,
            onClick: et,
            className: P.headerCollapsedClickableContainer,
            children: [(0, s.jsx)("div", {
              className: P.headerCollapsedContentRewardWrapper,
              children: (0, s.jsx)(R.default, {
                quest: u,
                questContent: c,
                className: P.headerCollapsedRewardTile
              })
            }), (0, s.jsxs)("div", {
              className: P.headerCollapsedContentCopyWrapper,
              children: [(0, s.jsxs)("div", {
                className: P.headerCollapsedContentCopyLogos,
                children: [(0, s.jsx)(g.default, {
                  className: P.partnerBranding,
                  gameTileSize: g.GameTileSizes.MEDIUM,
                  quest: u,
                  theme: K
                }), (0, s.jsx)(M.default, {
                  color: "always-white"
                })]
              }), (0, s.jsx)(f.Text, {
                variant: "text-xs/medium",
                children: Z
              })]
            })]
          })
        }), (0, s.jsxs)(r.animated.div, {
          ref: e => {
            k.current = e
          },
          className: i()(P.headerExpandedContent, {
            [P.outerContainerGiftInventory]: q,
            [P.outerContainerEmbed]: X
          }),
          style: {
            opacity: N.to({
              range: [0, 1],
              output: [0, 1]
            }),
            visibility: j || b ? "visible" : "hidden"
          },
          "aria-hidden": !j && !b,
          children: [(0, s.jsxs)("div", {
            className: P.headerExpandedWrapper,
            children: [(0, s.jsxs)("div", {
              className: P.iconLogotypeContainer,
              children: [(0, s.jsx)(g.default, {
                className: P.partnerBranding,
                gameTileSize: g.GameTileSizes.MEDIUM,
                quest: u,
                theme: K
              }), X ? null : (0, s.jsx)(M.default, {
                color: "always-white"
              })]
            }), (0, s.jsxs)("div", {
              className: P.questInfo,
              children: [(0, s.jsx)(f.Tooltip, {
                text: u.config.messages.questName,
                shouldShow: null != V && null != Y && V < Y,
                children: e => (0, s.jsx)(f.Heading, {
                  ref: H,
                  variant: "lg" === I ? "heading-xxl/bold" : "sm" === I ? "heading-xl/bold" : "heading-lg/bold",
                  className: P.heading,
                  ...e,
                  children: L.default.Messages.QUEST.format({
                    questName: u.config.messages.questName
                  })
                })
              }), (0, s.jsx)(f.Text, {
                variant: "text-xs/normal",
                children: J ? L.default.Messages.QUESTS_CLAIM_BY_DATE.format({
                  expirationDate: ee
                }) : l ? L.default.Messages.QUESTS_EXPIRED_ON.format({
                  expirationDate: $
                }) : L.default.Messages.QUESTS_AVAILABLE_UNTIL_DATE.format({
                  expirationDate: $
                })
              })]
            })]
          }), !l && q && (0, s.jsx)(U, {
            quest: u,
            location: c,
            questContentPosition: F
          })]
        })]
      }), (0, s.jsxs)(r.animated.div, {
        className: P.iconsContainer,
        style: {
          top: q ? N.to({
            range: [0, 1],
            output: [v.QUESTS_CARD_COLLAPSED_HEIGHT_PX / 2 - v.QUESTS_CARD_ICON_SIZE_PX / 2, v.QUESTS_CARD_PADDING_Y_PX]
          }) : v.QUESTS_CARD_PADDING_Y_PX
        },
        children: [(0, s.jsx)(O.QuestsEntryContextMenuPopout, {
          questContent: c,
          quest: u,
          questContentPosition: F,
          shouldShowDisclosure: !0,
          hideLearnMore: q,
          showShareLink: !l && X,
          children: e => (0, s.jsx)(r.animated.div, {
            style: {
              opacity: N,
              visibility: j || b ? "visible" : "hidden"
            },
            "aria-hidden": !j && !b,
            children: (0, s.jsx)(f.Clickable, {
              ...e,
              className: P.iconWrapper,
              "aria-label": L.default.Messages.ACTIONS,
              children: (0, s.jsx)(m.default, {
                color: o.default.WHITE
              })
            })
          })
        }), G && !(0, v.shouldQuestCardBeExpandedPermanently)(c) && (0, s.jsx)(f.Clickable, {
          onClick: et,
          className: P.iconWrapper,
          "aria-label": b ? L.default.Messages.COLLAPSE : L.default.Messages.EXPAND,
          children: (0, s.jsx)(D, {
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