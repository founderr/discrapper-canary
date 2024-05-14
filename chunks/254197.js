"use strict";
n.r(t);
var a = n("735250"),
  s = n("470079"),
  l = n("120356"),
  i = n.n(l),
  r = n("442837"),
  o = n("289987"),
  u = n("481060"),
  d = n("757206"),
  c = n("808268"),
  f = n("810090"),
  E = n("617136"),
  h = n("272008"),
  _ = n("113434"),
  C = n("569984"),
  m = n("497505"),
  S = n("918701"),
  p = n("977156"),
  g = n("685613"),
  I = n("644646"),
  T = n("78826"),
  A = n("670638"),
  N = n("667105"),
  v = n("341907"),
  R = n("95985"),
  O = n("46140"),
  L = n("689938"),
  M = n("263094");
let y = e => {
    let {
      quest: t
    } = e, n = (0, N.useHandleClaimQuestsReward)({
      quest: t,
      location: m.QuestContent.QUEST_BAR
    });
    return (0, a.jsx)("div", {
      className: M.ctaContainer,
      children: (0, a.jsx)(u.Button, {
        fullWidth: !0,
        size: u.Button.Sizes.SMALL,
        onClick: n,
        children: L.default.Messages.QUESTS_CLAIM_REWARD
      })
    })
  },
  P = e => {
    let {
      quest: t
    } = e;
    return (0, a.jsxs)("div", {
      className: M.ctaContainer,
      children: [(0, a.jsx)(u.Button, {
        className: M.flex,
        size: u.Button.Sizes.SMALL,
        onClick: () => (0, v.openGameLink)(t, {
          content: m.QuestContent.QUEST_BAR_V2,
          ctaContent: E.QuestContentCTA.OPEN_GAME_LINK
        }),
        children: L.default.Messages.QUESTS_PLAY_GAME
      }), (0, a.jsx)(u.Tooltip, {
        text: L.default.Messages.QUESTS_SHARE_LINK,
        children: e => (0, a.jsx)(u.Button, {
          ...e,
          className: M.iconButton,
          innerClassName: M.shareIcon,
          size: u.Button.Sizes.ICON,
          color: u.Button.Colors.CUSTOM,
          onClick: () => (0, v.copyShareLink)(t.id, {
            content: m.QuestContent.QUEST_BAR_V2,
            ctaContent: E.QuestContentCTA.QUEST_BAR_COPY_LINK
          }),
          children: (0, a.jsx)(d.default, {
            width: 16,
            height: 16
          })
        })
      })]
    })
  },
  x = s.forwardRef(function(e, t) {
    var n, l;
    let {
      className: d,
      isExpanded: N,
      isExpansionAnimationComplete: x,
      onCtxMenuOpen: D,
      onCtxMenuClose: b,
      onCtxMenuSelect: U,
      quest: j,
      useReducedMotion: G
    } = e, k = (0, r.useStateFromStores)([C.default], () => C.default.isEnrolling(j.id), [j]), w = (0, _.useQuestFormattedDate)(j.config.expiresAt), B = s.useMemo(() => (0, S.isAssetAnimated)(j.config.assets.questBarHero), [j]), F = s.useCallback(() => {
      (0, h.enrollInQuest)(j.id, {
        questContent: m.QuestContent.QUEST_BAR,
        questContentCTA: E.QuestContentCTA.ACCEPT_QUEST
      })
    }, [j]), H = s.useCallback(() => {
      (0, v.openDisclosureModal)(j, {
        content: m.QuestContent.QUEST_BAR,
        ctaContent: E.QuestContentCTA.OPEN_DISCLOSURE
      })
    }, [j]), {
      primaryVariant: V
    } = p.QuestBarExperiment.useExperiment({
      location: O.QuestsExperimentLocations.QUESTS_BAR
    }, {
      autoTrackExposure: !1
    }), Y = (null === (n = j.userStatus) || void 0 === n ? void 0 : n.enrolledAt) != null, W = (null === (l = j.userStatus) || void 0 === l ? void 0 : l.completedAt) != null, K = N && x, z = (0, S.getQuestBarHeroAssetUrl)(j), q = (0, S.getQuestsInstructionsToWinReward)({
      quest: j,
      location: O.QuestsExperimentLocations.QUESTS_BAR,
      useV2Variants: V === p.QuestBarExperimentVariants.V2
    });
    return (0, a.jsx)("div", {
      "aria-hidden": !K,
      className: i()(d, M.contentExpanded, {
        [M.contentInteractable]: K,
        [M.contentExpandedAccepted]: Y
      }),
      children: Y ? (0, a.jsxs)("div", {
        className: M.questAcceptedContent,
        ref: t,
        children: [!W && (0, a.jsxs)(a.Fragment, {
          children: [(0, a.jsxs)("div", {
            className: M.questAcceptedHeader,
            children: [(0, a.jsx)(u.Text, {
              variant: "text-xxs/medium",
              className: i()(M.flex, M.headerText),
              children: L.default.Messages.QUESTS_AVAILABLE_UNTIL_DATE.format({
                expirationDate: w
              })
            }), (0, a.jsx)(A.QuestsEntryContextMenuPopout, {
              onOpen: D,
              onClose: b,
              onSelect: U,
              questContent: m.QuestContent.QUEST_BAR,
              quest: j,
              shouldShowDisclosure: !1,
              showShareLink: !0,
              children: e => (0, a.jsx)(u.Clickable, {
                ...e,
                className: M.submenuWrapper,
                "aria-label": L.default.Messages.ACTIONS,
                children: (0, a.jsx)(c.default, {
                  className: i()(M.submenuIcon, M.interactiveNormal)
                })
              })
            })]
          }), (0, a.jsx)("div", {
            className: M.divider
          })]
        }), (0, a.jsx)(R.default, {
          quest: j,
          isExpanded: !0
        }), W ? (0, a.jsx)(y, {
          quest: j
        }) : (0, a.jsx)(P, {
          quest: j
        })]
      }) : (0, a.jsxs)("div", {
        className: M.questUnacceptedContent,
        children: [(0, a.jsxs)("div", {
          className: M.questPromoContent,
          ref: t,
          children: [(0, a.jsxs)("div", {
            className: M.utils,
            children: [(0, a.jsx)(g.default, {
              className: M.partnerBranding,
              quest: j,
              withGameTile: !1
            }), (0, a.jsx)("div", {
              className: M.promotedBadgeWrapper,
              children: (0, a.jsxs)(u.Clickable, {
                className: M.promotedBadge,
                onClick: H,
                children: [(0, a.jsx)(u.Text, {
                  color: "always-white",
                  variant: "text-xs/normal",
                  children: L.default.Messages.QUESTS_PROMOTED
                }), (0, a.jsx)(o.CircleQuestionIcon, {
                  color: u.tokens.colors.WHITE,
                  className: M.promotedBadgeIcon
                })]
              })
            }), (0, a.jsx)(A.QuestsEntryContextMenuPopout, {
              onOpen: D,
              onClose: b,
              onSelect: U,
              questContent: m.QuestContent.QUEST_BAR,
              quest: j,
              shouldShowDisclosure: !0,
              showShareLink: !0,
              children: e => (0, a.jsx)(u.Clickable, {
                ...e,
                className: M.submenuWrapper,
                "aria-label": L.default.Messages.ACTIONS,
                children: (0, a.jsx)(c.default, {
                  className: i()(M.submenuIcon, M.white)
                })
              })
            })]
          }), (0, a.jsxs)("div", {
            className: M.details,
            children: [(0, a.jsx)(I.default, {
              className: M.rewardTile,
              learnMoreStyle: "text",
              quest: j,
              questContent: m.QuestContent.QUEST_BAR
            }), (0, a.jsx)(u.Heading, {
              className: M.title,
              color: "always-white",
              variant: "heading-md/medium",
              children: L.default.Messages.QUESTS_TITLE.format({
                questName: j.config.messages.questName
              })
            }), (0, a.jsx)(u.Text, {
              className: M.description,
              color: "always-white",
              variant: "text-xs/normal",
              children: q
            })]
          }), (0, a.jsx)(u.Button, {
            className: M.cta,
            color: u.Button.Colors.BRAND,
            fullWidth: !0,
            onClick: K ? F : void 0,
            size: u.Button.Sizes.SMALL,
            submitting: k,
            children: L.default.Messages.QUESTS_ACCEPT_QUEST
          })]
        }), (0, a.jsx)("div", {
          className: M.heroAssetWrapper,
          children: B ? (0, a.jsx)(T.QuestsAsset, {
            id: "QuestBarV2ContentExpanded_heroAnimated",
            children: e => (0, a.jsx)(f.default, {
              ref: e,
              autoPlay: !G,
              loop: !0,
              muted: !0,
              playsInline: !0,
              className: M.heroAsset,
              controls: !1,
              children: (0, a.jsx)("source", {
                src: z,
                type: (0, S.getVideoAssetMimeType)(z)
              })
            })
          }) : (0, a.jsx)(T.QuestsAsset, {
            id: "QuestBarV2ContentExpanded_heroStatic",
            children: e => (0, a.jsx)("img", {
              ref: e,
              alt: "",
              className: M.heroAsset,
              src: z
            })
          })
        })]
      })
    })
  });
t.default = x