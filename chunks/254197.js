"use strict";
s.r(t), s("47120");
var a = s("735250"),
  n = s("470079"),
  l = s("120356"),
  i = s.n(l),
  r = s("722770"),
  u = s("442837"),
  o = s("846519"),
  d = s("289987"),
  c = s("481060"),
  E = s("976644"),
  _ = s("757206"),
  f = s("808268"),
  h = s("810090"),
  m = s("617136"),
  T = s("272008"),
  C = s("113434"),
  g = s("569984"),
  A = s("497505"),
  N = s("918701"),
  p = s("988303"),
  S = s("685613"),
  I = s("644646"),
  v = s("78826"),
  R = s("670638"),
  x = s("667105"),
  M = s("341907"),
  O = s("759853"),
  L = s("95985"),
  y = s("46140"),
  D = s("689938"),
  j = s("263094");
let b = e => {
    let {
      quest: t,
      useReducedMotion: s
    } = e, n = (0, x.useHandleClaimQuestsReward)({
      quest: t,
      location: A.QuestContent.QUEST_BAR
    });
    return (0, a.jsx)("div", {
      className: j.ctaContainer,
      children: (0, a.jsx)(E.default, {
        fullWidth: !0,
        size: c.Button.Sizes.SMALL,
        onClick: n,
        pauseAnimation: s,
        children: D.default.Messages.QUESTS_CLAIM_REWARD
      })
    })
  },
  U = e => {
    var t, s;
    let {
      quest: l,
      isExpanded: i
    } = e, [u, d] = n.useState(!1), [E, f] = n.useState(!1), h = n.useRef(new o.Timeout), T = n.useRef(new o.Timeout);
    if (n.useEffect(() => {
        let e = h.current,
          t = T.current;
        return function() {
          e.stop(), t.stop()
        }
      }, []), (null !== (s = null === (t = l.userStatus) || void 0 === t ? void 0 : t.streamProgressSeconds) && void 0 !== s ? s : 0) > 0) return null;
    let C = () => {
        (0, M.copyShareLink)(l.id, {
          content: A.QuestContent.QUEST_BAR_V2,
          ctaContent: m.QuestContentCTA.QUEST_BAR_COPY_LINK
        }), f(!0), d(!0), h.current.start(500, () => d(!1)), T.current.start(600, () => f(!1))
      },
      g = E ? c.Tooltip.Colors.GREEN : c.Tooltip.Colors.PRIMARY,
      N = E ? D.default.Messages.COPY_SUCCESS_1 : D.default.Messages.QUESTS_SHARE_LINK,
      p = E ? r.default.GREEN_360 : "currentColor";
    return (0, a.jsxs)("div", {
      className: j.ctaContainer,
      children: [(0, a.jsx)(c.Button, {
        className: j.flex,
        size: c.Button.Sizes.SMALL,
        onClick: () => (0, M.openGameLink)(l, {
          content: A.QuestContent.QUEST_BAR_V2,
          ctaContent: m.QuestContentCTA.OPEN_GAME_LINK
        }),
        children: D.default.Messages.QUESTS_PLAY_GAME
      }), (0, a.jsx)(c.Tooltip, {
        hideOnClick: !1,
        forceOpen: u && i,
        color: g,
        text: N,
        children: e => (0, a.jsx)(c.Button, {
          ...e,
          className: j.iconButton,
          innerClassName: j.shareIcon,
          size: c.Button.Sizes.ICON,
          color: c.Button.Colors.CUSTOM,
          onClick: C,
          children: (0, a.jsx)(_.default, {
            width: 16,
            height: 16,
            color: p
          })
        })
      })]
    })
  },
  P = n.forwardRef(function(e, t) {
    var s, l;
    let {
      className: r,
      isExpanded: o,
      isExpansionAnimationComplete: E,
      onCtxMenuOpen: _,
      onCtxMenuClose: x,
      onCtxMenuSelect: P,
      quest: G,
      useReducedMotion: V
    } = e, F = n.useRef(null), k = (0, u.useStateFromStores)([g.default], () => g.default.isEnrolling(G.id), [G]), B = (0, C.useQuestFormattedDate)(G.config.expiresAt), w = n.useMemo(() => (0, N.isAssetAnimated)(G.config.assets.questBarHero), [G]), H = n.useCallback(() => {
      (0, T.enrollInQuest)(G.id, {
        questContent: A.QuestContent.QUEST_BAR,
        questContentCTA: m.QuestContentCTA.ACCEPT_QUEST
      })
    }, [G]), Q = n.useCallback(() => {
      (0, M.openGameLink)(G, {
        content: A.QuestContent.QUEST_BAR,
        ctaContent: m.QuestContentCTA.OPEN_GAME_LINK
      })
    }, [G]), Y = n.useCallback(() => {
      (0, M.openDisclosureModal)(G, {
        content: A.QuestContent.QUEST_BAR,
        ctaContent: m.QuestContentCTA.OPEN_DISCLOSURE
      })
    }, [G]), {
      primaryVariant: q
    } = p.QuestBarExperiment.useExperiment({
      location: y.QuestsExperimentLocations.QUESTS_BAR
    }, {
      autoTrackExposure: !1
    }), z = (null === (s = G.userStatus) || void 0 === s ? void 0 : s.enrolledAt) != null, W = (null === (l = G.userStatus) || void 0 === l ? void 0 : l.completedAt) != null, Z = o && E, K = (0, N.getQuestBarHeroAssetUrl)(G), X = (0, N.getQuestsInstructionsToWinReward)({
      quest: G,
      location: y.QuestsExperimentLocations.QUESTS_BAR,
      useV2Variants: q === p.QuestBarExperimentVariants.V2
    });
    return (0, a.jsx)("div", {
      "aria-hidden": !Z,
      className: i()(r, j.contentExpanded, {
        [j.contentInteractable]: Z,
        [j.contentExpandedAccepted]: z
      }),
      children: z ? (0, a.jsxs)("div", {
        className: j.questAcceptedContent,
        ref: t,
        children: [(0, a.jsxs)("div", {
          className: j.questAcceptedHeader,
          children: [(0, a.jsx)(c.Text, {
            variant: "text-xxs/medium",
            className: i()(j.flex, j.headerText),
            children: D.default.Messages.QUESTS_AVAILABLE_UNTIL_DATE.format({
              expirationDate: B
            })
          }), (0, a.jsx)(R.QuestsEntryContextMenuPopout, {
            onOpen: _,
            onClose: x,
            onSelect: P,
            questContent: A.QuestContent.QUEST_BAR,
            quest: G,
            shouldShowDisclosure: !1,
            showShareLink: !0,
            children: e => (0, a.jsx)(c.Clickable, {
              ...e,
              className: j.submenuWrapper,
              "aria-label": D.default.Messages.ACTIONS,
              children: (0, a.jsx)(f.default, {
                className: i()(j.submenuIcon, j.interactiveNormal)
              })
            })
          })]
        }), (0, a.jsx)("div", {
          className: j.divider
        }), (0, a.jsx)(O.default, {
          progressBarRef: F,
          quest: G
        }), (0, a.jsx)(L.default, {
          quest: G,
          progressBarRef: F,
          isExpanded: !0
        }), W ? (0, a.jsx)(b, {
          quest: G,
          useReducedMotion: V,
          isExpanded: o
        }) : (0, a.jsx)(U, {
          quest: G,
          useReducedMotion: V,
          isExpanded: o
        })]
      }) : (0, a.jsxs)("div", {
        className: j.questUnacceptedContent,
        children: [(0, a.jsxs)("div", {
          className: j.questPromoContent,
          ref: t,
          children: [(0, a.jsxs)("div", {
            className: j.utils,
            children: [(0, a.jsx)(c.Clickable, {
              className: j.promotedBadge,
              onClick: Q,
              children: (0, a.jsx)(S.default, {
                quest: G,
                withGameTile: !1
              })
            }), (0, a.jsx)("div", {
              className: j.promotedBadgeWrapper,
              children: (0, a.jsxs)(c.Clickable, {
                className: j.promotedBadge,
                onClick: Y,
                children: [(0, a.jsx)(c.Text, {
                  color: "always-white",
                  variant: "text-xs/normal",
                  children: D.default.Messages.QUESTS_PROMOTED
                }), (0, a.jsx)(d.CircleQuestionIcon, {
                  color: c.tokens.colors.WHITE,
                  className: j.promotedBadgeIcon
                })]
              })
            }), (0, a.jsx)(R.QuestsEntryContextMenuPopout, {
              onOpen: _,
              onClose: x,
              onSelect: P,
              questContent: A.QuestContent.QUEST_BAR,
              quest: G,
              shouldShowDisclosure: !0,
              showShareLink: !0,
              children: e => (0, a.jsx)(c.Clickable, {
                ...e,
                className: j.submenuWrapper,
                "aria-label": D.default.Messages.ACTIONS,
                children: (0, a.jsx)(f.default, {
                  className: i()(j.submenuIcon, j.white)
                })
              })
            })]
          }), (0, a.jsxs)("div", {
            className: j.details,
            children: [(0, a.jsx)(I.default, {
              className: j.rewardTile,
              learnMoreStyle: "text",
              quest: G,
              questContent: A.QuestContent.QUEST_BAR
            }), (0, a.jsx)(c.Heading, {
              className: j.title,
              variant: "heading-md/medium",
              children: D.default.Messages.QUESTS_TITLE.format({
                questName: G.config.messages.questName
              })
            }), (0, a.jsx)(c.Text, {
              className: j.description,
              variant: "text-xs/normal",
              children: X
            })]
          }), (0, a.jsx)(c.Button, {
            className: j.cta,
            color: c.Button.Colors.BRAND,
            fullWidth: !0,
            onClick: Z ? H : void 0,
            size: c.Button.Sizes.SMALL,
            submitting: k,
            children: D.default.Messages.QUESTS_ACCEPT_QUEST
          })]
        }), (0, a.jsx)("div", {
          className: j.heroAssetWrapper,
          children: w ? (0, a.jsx)(v.QuestsAsset, {
            id: "QuestBarV2ContentExpanded_heroAnimated",
            children: e => (0, a.jsx)(h.default, {
              ref: e,
              autoPlay: !V,
              loop: !0,
              muted: !0,
              playsInline: !0,
              className: j.heroAsset,
              controls: !1,
              children: (0, a.jsx)("source", {
                src: K,
                type: (0, N.getVideoAssetMimeType)(K)
              })
            })
          }) : (0, a.jsx)(v.QuestsAsset, {
            id: "QuestBarV2ContentExpanded_heroStatic",
            children: e => (0, a.jsx)("img", {
              ref: e,
              alt: "",
              className: j.heroAsset,
              src: K
            })
          })
        })]
      })
    })
  });
t.default = P