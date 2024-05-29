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
  m = n("210887"),
  T = n("808268"),
  I = n("810090"),
  p = n("572004"),
  h = n("617136"),
  N = n("113434"),
  S = n("497505"),
  C = n("918701"),
  g = n("566078"),
  A = n("685613"),
  M = n("611855"),
  v = n("644646"),
  R = n("670638"),
  O = n("87894"),
  x = n("46140"),
  L = n("689938"),
  D = n("257100");
let P = (0, r.animated)(u.ChevronSmallDownIcon),
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
      (0, h.trackQuestContentClicked)({
        questId: t.id,
        questContent: n,
        questContentCTA: h.QuestContentCTA.COPY_QUEST_URL,
        questContentPosition: l
      }), (0, p.copy)((0, C.getQuestUrl)(t.id)), o(!0), u.current.start(1e3, () => o(!1))
    };
    return (0, s.jsx)(f.Tooltip, {
      forceOpen: r,
      shouldShow: r,
      color: f.Tooltip.Colors.GREEN,
      text: L.default.Messages.COPY_SUCCESS_1,
      children: () => (0, s.jsx)(f.Button, {
        ...i,
        className: D.shareButton,
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
    expansionSpring: p,
    isAnimating: j,
    isExpanded: b,
    isInConcurrentQuestExperiment: F,
    contentPosition: B,
    toggleExpanded: G
  } = e, {
    ref: k,
    height: w
  } = (0, E.default)(), {
    ref: H,
    width: V,
    scrollWidth: Y
  } = (0, E.default)(), K = (0, d.useStateFromStores)([m.default], () => m.default.getState().theme), W = (0, d.useStateFromStores)([_.default], () => _.default.useReducedMotion), z = a.useMemo(() => (0, C.isAssetAnimated)(u.config.assets.hero), [u]), Q = a.useRef(null), q = (0, O.isQuestCardInGiftInventory)(c), X = c === S.QuestContent.QUESTS_EMBED, Z = (0, N.useQuestInstructionTitle)(u, x.QuestsExperimentLocations.QUESTS_CARD), J = (null === (t = u.userStatus) || void 0 === t ? void 0 : t.completedAt) != null, $ = (0, N.useQuestFormattedDate)(u.config.expiresAt, {
    year: "numeric",
    month: "long",
    day: "numeric"
  }), ee = (0, N.useQuestFormattedDate)(g.SharedQuestFields.build(u.config).rewardsExpireAt, {
    year: "numeric",
    month: "long",
    day: "numeric"
  }), et = e => {
    e.stopPropagation(), e.currentTarget.blur(), G(), (0, h.trackQuestContentClicked)({
      questId: u.id,
      questContent: c,
      questContentCTA: b ? h.QuestContentCTA.COLLAPSE : h.QuestContentCTA.EXPAND,
      questContentPosition: B
    })
  };
  a.useEffect(() => {
    z && null != Q.current && (n ? Q.current.play() : !n && (Q.current.pause(), Q.current.currentTime = 0))
  }, [n, z]);
  let en = (0, C.getHeroAssetUrl)(u);
  return (0, s.jsxs)("div", {
    className: i()(D.outerContainer, {
      [D.outerContainerGiftInventory]: q,
      [D.outerContainerEmbed]: X,
      [D.outerContainerXs]: "xs" === I
    }),
    "aria-label": L.default.Messages.EXPAND,
    style: {
      height: q ? w : void 0
    },
    children: [(0, s.jsx)(y, {
      style: {
        opacity: p.to({
          range: [0, 1],
          output: [.25, 1]
        })
      },
      autoPlay: !1,
      loop: !1,
      muted: !0,
      playsInline: !0,
      className: D.questSplash,
      controls: !1,
      poster: en,
      ref: Q,
      children: !W && z && (0, s.jsx)("source", {
        src: en,
        type: (0, C.getVideoAssetMimeType)(en)
      })
    }), (0, s.jsxs)("div", {
      className: D.header,
      "aria-expanded": b,
      children: [(0, s.jsxs)(r.animated.div, {
        className: i()(D.headerContent, {
          [D.headerContentEmbed]: X
        }),
        style: {
          y: q ? p.to({
            range: [0, 1],
            output: [O.QUESTS_CARD_COLLAPSED_HEIGHT_PX, 0]
          }) : void 0
        },
        children: [q && (0, s.jsx)(r.animated.div, {
          className: D.headerCollapsedContent,
          style: {
            opacity: p.to({
              range: [0, 1],
              output: [1, 0]
            }),
            visibility: j || !b ? "visible" : "hidden"
          },
          "aria-hidden": !j && b,
          children: (0, s.jsxs)(f.ClickableContainer, {
            "aria-label": L.default.Messages.EXPAND,
            onClick: et,
            className: D.headerCollapsedClickableContainer,
            children: [(0, s.jsx)("div", {
              className: D.headerCollapsedContentRewardWrapper,
              children: (0, s.jsx)(v.default, {
                quest: u,
                questContent: c,
                className: D.headerCollapsedRewardTile
              })
            }), (0, s.jsxs)("div", {
              className: D.headerCollapsedContentCopyWrapper,
              children: [(0, s.jsxs)("div", {
                className: D.headerCollapsedContentCopyLogos,
                children: [(0, s.jsx)(A.default, {
                  className: D.partnerBranding,
                  gameTileSize: A.GameTileSizes.MEDIUM,
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
          className: i()(D.headerExpandedContent, {
            [D.outerContainerGiftInventory]: q,
            [D.outerContainerEmbed]: X
          }),
          style: {
            opacity: p.to({
              range: [0, 1],
              output: [0, 1]
            }),
            visibility: j || b ? "visible" : "hidden"
          },
          "aria-hidden": !j && !b,
          children: [(0, s.jsxs)("div", {
            className: D.headerExpandedWrapper,
            children: [(0, s.jsxs)("div", {
              className: D.iconLogotypeContainer,
              children: [(0, s.jsx)(A.default, {
                className: D.partnerBranding,
                gameTileSize: A.GameTileSizes.MEDIUM,
                quest: u,
                theme: K
              }), (0, s.jsx)(M.default, {
                color: "always-white"
              })]
            }), (0, s.jsxs)("div", {
              className: D.questInfo,
              children: [(0, s.jsx)(f.Tooltip, {
                text: u.config.messages.questName,
                shouldShow: null != V && null != Y && V < Y,
                children: e => (0, s.jsx)(f.Heading, {
                  ref: H,
                  variant: "lg" === I ? "heading-xxl/bold" : "sm" === I ? "heading-xl/bold" : "heading-lg/bold",
                  className: D.heading,
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
            questContentPosition: B
          })]
        })]
      }), (0, s.jsxs)(r.animated.div, {
        className: D.iconsContainer,
        style: {
          top: q ? p.to({
            range: [0, 1],
            output: [O.QUESTS_CARD_COLLAPSED_HEIGHT_PX / 2 - O.QUESTS_CARD_ICON_SIZE_PX / 2, O.QUESTS_CARD_PADDING_Y_PX]
          }) : O.QUESTS_CARD_PADDING_Y_PX
        },
        children: [(0, s.jsx)(R.QuestsEntryContextMenuPopout, {
          questContent: c,
          quest: u,
          questContentPosition: B,
          shouldShowDisclosure: !0,
          hideLearnMore: q,
          showShareLink: !l && X,
          children: e => (0, s.jsx)(r.animated.div, {
            style: {
              opacity: p,
              visibility: j || b ? "visible" : "hidden"
            },
            "aria-hidden": !j && !b,
            children: (0, s.jsx)(f.Clickable, {
              ...e,
              className: D.iconWrapper,
              "aria-label": L.default.Messages.ACTIONS,
              children: (0, s.jsx)(T.default, {
                color: o.default.WHITE
              })
            })
          })
        }), F && !(0, O.shouldQuestCardBeExpandedPermanently)(c) && (0, s.jsx)(f.Clickable, {
          onClick: et,
          className: D.iconWrapper,
          "aria-label": b ? L.default.Messages.COLLAPSE : L.default.Messages.EXPAND,
          children: (0, s.jsx)(P, {
            style: {
              rotate: p.to({
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