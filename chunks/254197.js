"use strict";
s.r(t), s("47120");
var a = s("735250"),
  n = s("470079"),
  l = s("120356"),
  i = s.n(l),
  r = s("722770"),
  o = s("442837"),
  u = s("846519"),
  d = s("289987"),
  c = s("481060"),
  E = s("976644"),
  _ = s("757206"),
  f = s("808268"),
  h = s("810090"),
  T = s("617136"),
  m = s("272008"),
  C = s("113434"),
  g = s("569984"),
  A = s("497505"),
  p = s("918701"),
  N = s("988303"),
  I = s("685613"),
  S = s("644646"),
  R = s("78826"),
  v = s("670638"),
  x = s("667105"),
  M = s("341907"),
  L = s("759853"),
  O = s("95985"),
  y = s("46140"),
  D = s("689938"),
  b = s("263094");
let j = e => {
    let {
      quest: t,
      useReducedMotion: s,
      isExpanded: n
    } = e, l = (0, x.useHandleClaimQuestsReward)({
      quest: t,
      location: A.QuestContent.QUEST_BAR
    });
    return (0, a.jsx)("div", {
      className: b.ctaContainer,
      children: (0, a.jsx)(E.default, {
        fullWidth: !0,
        size: c.Button.Sizes.SMALL,
        onClick: l,
        pauseAnimation: s || !n,
        buttonShineClassName: b.shine,
        children: D.default.Messages.QUESTS_CLAIM_REWARD
      })
    })
  },
  U = e => {
    let {
      quest: t,
      isExpanded: s
    } = e, [l, i] = n.useState(!1), [o, d] = n.useState(!1), E = n.useRef(new u.Timeout), f = n.useRef(new u.Timeout);
    n.useEffect(() => {
      let e = E.current,
        t = f.current;
      return function() {
        e.stop(), t.stop()
      }
    }, []);
    let h = (0, p.calculatePercentComplete)({
      quest: t,
      location: y.QuestsExperimentLocations.QUESTS_BAR
    });
    if (h > 0) return null;
    let m = () => {
        (0, p.copyShareLink)(t.id, {
          content: A.QuestContent.QUEST_BAR_V2,
          ctaContent: T.QuestContentCTA.QUEST_BAR_COPY_LINK
        }), d(!0), i(!0), E.current.start(500, () => i(!1)), f.current.start(600, () => d(!1))
      },
      C = o ? c.Tooltip.Colors.GREEN : c.Tooltip.Colors.PRIMARY,
      g = o ? D.default.Messages.COPY_SUCCESS_1 : D.default.Messages.QUESTS_SHARE_LINK,
      N = o ? r.default.GREEN_360 : "currentColor";
    return (0, a.jsxs)("div", {
      className: b.ctaContainer,
      children: [(0, a.jsx)(c.Button, {
        className: b.flex,
        size: c.Button.Sizes.SMALL,
        onClick: () => (0, p.openGameLink)(t, {
          content: A.QuestContent.QUEST_BAR_V2,
          ctaContent: T.QuestContentCTA.OPEN_GAME_LINK
        }),
        children: D.default.Messages.QUESTS_PLAY_GAME
      }), (0, a.jsx)(c.Tooltip, {
        hideOnClick: !1,
        forceOpen: l && s,
        color: C,
        text: g,
        children: e => (0, a.jsx)(c.Button, {
          ...e,
          className: b.iconButton,
          innerClassName: b.shareIcon,
          size: c.Button.Sizes.ICON,
          color: c.Button.Colors.CUSTOM,
          onClick: m,
          children: (0, a.jsx)(_.default, {
            width: 16,
            height: 16,
            color: N
          })
        })
      })]
    })
  },
  P = n.forwardRef(function(e, t) {
    var s, l;
    let {
      className: r,
      isExpanded: u,
      isExpansionAnimationComplete: E,
      onCtxMenuOpen: _,
      onCtxMenuClose: x,
      onCtxMenuSelect: P,
      quest: G,
      useReducedMotion: V
    } = e, F = n.useRef(null), B = (0, o.useStateFromStores)([g.default], () => g.default.isEnrolling(G.id), [G]), H = (0, C.useQuestFormattedDate)(G.config.expiresAt), k = n.useMemo(() => (0, p.isAssetAnimated)(G.config.assets.questBarHero), [G]), w = n.useCallback(() => {
      (0, m.enrollInQuest)(G.id, {
        questContent: A.QuestContent.QUEST_BAR,
        questContentCTA: T.QuestContentCTA.ACCEPT_QUEST
      })
    }, [G]), Q = n.useCallback(() => {
      (0, p.openGameLink)(G, {
        content: A.QuestContent.QUEST_BAR,
        ctaContent: T.QuestContentCTA.OPEN_GAME_LINK
      })
    }, [G]), Y = n.useCallback(() => {
      (0, M.openDisclosureModal)(G, {
        content: A.QuestContent.QUEST_BAR,
        ctaContent: T.QuestContentCTA.OPEN_DISCLOSURE
      })
    }, [G]), {
      primaryVariant: q
    } = N.QuestBarExperiment.useExperiment({
      location: y.QuestsExperimentLocations.QUESTS_BAR
    }, {
      autoTrackExposure: !1
    }), z = (null === (s = G.userStatus) || void 0 === s ? void 0 : s.enrolledAt) != null, W = (null === (l = G.userStatus) || void 0 === l ? void 0 : l.completedAt) != null, Z = u && E, K = (0, p.getQuestBarHeroAssetUrl)(G), X = (0, p.getQuestsInstructionsToWinReward)({
      quest: G,
      location: y.QuestsExperimentLocations.QUESTS_BAR,
      useV2Variants: q === N.QuestBarExperimentVariants.V2
    });
    return (0, a.jsx)("div", {
      "aria-hidden": !Z,
      className: i()(r, b.contentExpanded, {
        [b.contentInteractable]: Z,
        [b.contentExpandedAccepted]: z
      }),
      children: z ? (0, a.jsxs)("div", {
        className: b.questAcceptedContent,
        ref: t,
        children: [(0, a.jsxs)("div", {
          className: b.questAcceptedHeader,
          children: [(0, a.jsx)(c.Text, {
            variant: "text-xxs/medium",
            className: i()(b.flex, b.headerText),
            children: D.default.Messages.QUESTS_AVAILABLE_UNTIL_DATE.format({
              expirationDate: H
            })
          }), (0, a.jsx)(v.QuestsEntryContextMenuPopout, {
            onOpen: _,
            onClose: x,
            onSelect: P,
            questContent: A.QuestContent.QUEST_BAR,
            quest: G,
            shouldShowDisclosure: !1,
            showShareLink: !0,
            children: e => (0, a.jsx)(c.Clickable, {
              ...e,
              className: b.submenuWrapper,
              "aria-label": D.default.Messages.ACTIONS,
              children: (0, a.jsx)(f.default, {
                className: i()(b.submenuIcon, b.interactiveNormal)
              })
            })
          })]
        }), (0, a.jsx)("div", {
          className: b.divider
        }), (0, a.jsx)(L.default, {
          progressBarRef: F,
          quest: G,
          isExpanded: u
        }), (0, a.jsx)(O.default, {
          quest: G,
          progressBarRef: F,
          isExpanded: !0
        }), W ? (0, a.jsx)(j, {
          quest: G,
          useReducedMotion: V,
          isExpanded: u
        }) : (0, a.jsx)(U, {
          quest: G,
          useReducedMotion: V,
          isExpanded: u
        })]
      }) : (0, a.jsxs)("div", {
        children: [(0, a.jsxs)("div", {
          className: b.questPromoContent,
          ref: t,
          children: [(0, a.jsxs)("div", {
            className: b.utils,
            children: [(0, a.jsx)(c.Clickable, {
              className: b.promotedBadge,
              onClick: Q,
              children: (0, a.jsx)(I.default, {
                quest: G,
                withGameTile: !1
              })
            }), (0, a.jsx)("div", {
              className: b.promotedBadgeWrapper,
              children: (0, a.jsxs)(c.Clickable, {
                className: b.promotedBadge,
                onClick: Y,
                children: [(0, a.jsx)(c.Text, {
                  color: "always-white",
                  variant: "text-xs/normal",
                  children: D.default.Messages.QUESTS_PROMOTED
                }), (0, a.jsx)(d.CircleQuestionIcon, {
                  color: c.tokens.colors.WHITE,
                  className: b.promotedBadgeIcon
                })]
              })
            }), (0, a.jsx)(v.QuestsEntryContextMenuPopout, {
              onOpen: _,
              onClose: x,
              onSelect: P,
              questContent: A.QuestContent.QUEST_BAR,
              quest: G,
              shouldShowDisclosure: !0,
              showShareLink: !0,
              children: e => (0, a.jsx)(c.Clickable, {
                ...e,
                className: b.submenuWrapper,
                "aria-label": D.default.Messages.ACTIONS,
                children: (0, a.jsx)(f.default, {
                  className: i()(b.submenuIcon, b.white)
                })
              })
            })]
          }), (0, a.jsxs)("div", {
            className: b.details,
            children: [(0, a.jsx)(S.default, {
              className: b.rewardTile,
              learnMoreStyle: "text",
              quest: G,
              questContent: A.QuestContent.QUEST_BAR
            }), (0, a.jsx)(c.Heading, {
              className: b.title,
              variant: "heading-md/medium",
              children: D.default.Messages.QUESTS_TITLE.format({
                questName: G.config.messages.questName
              })
            }), (0, a.jsx)(c.Text, {
              className: b.description,
              variant: "text-xs/normal",
              children: X
            })]
          }), (0, a.jsx)(c.Button, {
            className: b.cta,
            color: c.Button.Colors.BRAND,
            fullWidth: !0,
            onClick: Z ? w : void 0,
            size: c.Button.Sizes.SMALL,
            submitting: B,
            children: D.default.Messages.QUESTS_ACCEPT_QUEST
          })]
        }), (0, a.jsx)("div", {
          className: b.heroAssetWrapper,
          children: k ? (0, a.jsx)(R.QuestsAsset, {
            id: "QuestBarV2ContentExpanded_heroAnimated",
            children: e => (0, a.jsx)(h.default, {
              ref: e,
              autoPlay: !V,
              loop: !0,
              muted: !0,
              playsInline: !0,
              className: b.heroAsset,
              controls: !1,
              children: (0, a.jsx)("source", {
                src: K,
                type: (0, p.getVideoAssetMimeType)(K)
              })
            })
          }) : (0, a.jsx)(R.QuestsAsset, {
            id: "QuestBarV2ContentExpanded_heroStatic",
            children: e => (0, a.jsx)("img", {
              ref: e,
              alt: "",
              className: b.heroAsset,
              src: K
            })
          })
        })]
      })
    })
  });
t.default = P