"use strict";
n.r(t), n("47120");
var a = n("735250"),
  s = n("470079"),
  l = n("120356"),
  i = n.n(l),
  r = n("722770"),
  o = n("442837"),
  u = n("846519"),
  d = n("289987"),
  c = n("481060"),
  f = n("976644"),
  E = n("757206"),
  h = n("808268"),
  _ = n("810090"),
  C = n("617136"),
  m = n("272008"),
  S = n("113434"),
  p = n("569984"),
  I = n("497505"),
  g = n("918701"),
  T = n("988303"),
  A = n("685613"),
  N = n("644646"),
  v = n("78826"),
  R = n("670638"),
  O = n("667105"),
  L = n("341907"),
  M = n("759853"),
  x = n("95985"),
  P = n("46140"),
  y = n("689938"),
  D = n("263094");
let b = e => {
    let {
      quest: t,
      useReducedMotion: n,
      isExpanded: s
    } = e, l = (0, O.useHandleClaimQuestsReward)({
      quest: t,
      location: I.QuestContent.QUEST_BAR
    });
    return (0, a.jsx)("div", {
      className: D.ctaContainer,
      children: (0, a.jsx)(f.default, {
        fullWidth: !0,
        size: c.Button.Sizes.SMALL,
        onClick: l,
        pauseAnimation: n || !s,
        buttonShineClassName: D.shine,
        children: y.default.Messages.QUESTS_CLAIM_REWARD
      })
    })
  },
  U = e => {
    let {
      quest: t,
      isExpanded: n
    } = e, [l, i] = s.useState(!1), [o, d] = s.useState(!1), f = s.useRef(new u.Timeout), h = s.useRef(new u.Timeout);
    s.useEffect(() => {
      let e = f.current,
        t = h.current;
      return function() {
        e.stop(), t.stop()
      }
    }, []);
    let _ = (0, g.calculatePercentComplete)({
      quest: t,
      location: P.QuestsExperimentLocations.QUESTS_BAR
    });
    if (_ > 0) return null;
    let m = () => {
        (0, g.copyShareLink)(t.id, {
          content: I.QuestContent.QUEST_BAR_V2,
          ctaContent: C.QuestContentCTA.QUEST_BAR_COPY_LINK
        }), d(!0), i(!0), f.current.start(500, () => i(!1)), h.current.start(600, () => d(!1))
      },
      S = o ? c.Tooltip.Colors.GREEN : c.Tooltip.Colors.PRIMARY,
      p = o ? y.default.Messages.COPY_SUCCESS_1 : y.default.Messages.QUESTS_SHARE_LINK,
      T = o ? r.default.GREEN_360 : "currentColor";
    return (0, a.jsxs)("div", {
      className: D.ctaContainer,
      children: [(0, a.jsx)(c.Button, {
        className: D.flex,
        size: c.Button.Sizes.SMALL,
        onClick: () => (0, g.openGameLink)(t, {
          content: I.QuestContent.QUEST_BAR_V2,
          ctaContent: C.QuestContentCTA.OPEN_GAME_LINK
        }),
        children: y.default.Messages.QUESTS_PLAY_GAME
      }), (0, a.jsx)(c.Tooltip, {
        hideOnClick: !1,
        forceOpen: l && n,
        color: S,
        text: p,
        children: e => (0, a.jsx)(c.Button, {
          ...e,
          className: D.iconButton,
          innerClassName: D.shareIcon,
          size: c.Button.Sizes.ICON,
          color: c.Button.Colors.CUSTOM,
          onClick: m,
          children: (0, a.jsx)(E.default, {
            width: 16,
            height: 16,
            color: T
          })
        })
      })]
    })
  },
  j = s.forwardRef(function(e, t) {
    var n, l;
    let {
      className: r,
      isExpanded: u,
      isExpansionAnimationComplete: f,
      onCtxMenuOpen: E,
      onCtxMenuClose: O,
      onCtxMenuSelect: j,
      quest: G,
      useReducedMotion: w
    } = e, k = s.useRef(null), B = (0, o.useStateFromStores)([p.default], () => p.default.isEnrolling(G.id), [G]), F = (0, S.useQuestFormattedDate)(G.config.expiresAt), H = s.useMemo(() => (0, g.isAssetAnimated)(G.config.assets.questBarHero), [G]), V = s.useCallback(() => {
      (0, m.enrollInQuest)(G.id, {
        questContent: I.QuestContent.QUEST_BAR,
        questContentCTA: C.QuestContentCTA.ACCEPT_QUEST
      })
    }, [G]), Y = s.useCallback(() => {
      (0, g.openGameLink)(G, {
        content: I.QuestContent.QUEST_BAR,
        ctaContent: C.QuestContentCTA.OPEN_GAME_LINK
      })
    }, [G]), W = s.useCallback(() => {
      (0, L.openDisclosureModal)(G, {
        content: I.QuestContent.QUEST_BAR,
        ctaContent: C.QuestContentCTA.OPEN_DISCLOSURE
      })
    }, [G]), {
      primaryVariant: K
    } = T.QuestBarExperiment.useExperiment({
      location: P.QuestsExperimentLocations.QUESTS_BAR
    }, {
      autoTrackExposure: !1
    }), z = (null === (n = G.userStatus) || void 0 === n ? void 0 : n.enrolledAt) != null, Q = (null === (l = G.userStatus) || void 0 === l ? void 0 : l.completedAt) != null, q = u && f, Z = (0, g.getQuestBarHeroAssetUrl)(G), X = (0, g.getQuestsInstructionsToWinReward)({
      quest: G,
      location: P.QuestsExperimentLocations.QUESTS_BAR,
      useV2Variants: K === T.QuestBarExperimentVariants.V2
    });
    return (0, a.jsx)("div", {
      "aria-hidden": !q,
      className: i()(r, D.contentExpanded, {
        [D.contentInteractable]: q,
        [D.contentExpandedAccepted]: z
      }),
      children: z ? (0, a.jsxs)("div", {
        className: D.questAcceptedContent,
        ref: t,
        children: [(0, a.jsxs)("div", {
          className: D.questAcceptedHeader,
          children: [(0, a.jsx)(c.Text, {
            variant: "text-xxs/medium",
            className: i()(D.flex, D.headerText),
            children: y.default.Messages.QUESTS_AVAILABLE_UNTIL_DATE.format({
              expirationDate: F
            })
          }), (0, a.jsx)(R.QuestsEntryContextMenuPopout, {
            onOpen: E,
            onClose: O,
            onSelect: j,
            questContent: I.QuestContent.QUEST_BAR,
            quest: G,
            shouldShowDisclosure: !1,
            showShareLink: !0,
            children: e => (0, a.jsx)(c.Clickable, {
              ...e,
              className: D.submenuWrapper,
              "aria-label": y.default.Messages.ACTIONS,
              children: (0, a.jsx)(h.default, {
                className: i()(D.submenuIcon, D.interactiveNormal)
              })
            })
          })]
        }), (0, a.jsx)("div", {
          className: D.divider
        }), (0, a.jsx)(M.default, {
          progressBarRef: k,
          quest: G,
          isExpanded: u
        }), (0, a.jsx)(x.default, {
          quest: G,
          progressBarRef: k,
          isExpanded: !0
        }), Q ? (0, a.jsx)(b, {
          quest: G,
          useReducedMotion: w,
          isExpanded: u
        }) : (0, a.jsx)(U, {
          quest: G,
          useReducedMotion: w,
          isExpanded: u
        })]
      }) : (0, a.jsxs)("div", {
        children: [(0, a.jsxs)("div", {
          className: D.questPromoContent,
          ref: t,
          children: [(0, a.jsxs)("div", {
            className: D.utils,
            children: [(0, a.jsx)(c.Clickable, {
              className: D.promotedBadge,
              onClick: Y,
              children: (0, a.jsx)(A.default, {
                quest: G,
                withGameTile: !1
              })
            }), (0, a.jsx)("div", {
              className: D.promotedBadgeWrapper,
              children: (0, a.jsxs)(c.Clickable, {
                className: D.promotedBadge,
                onClick: W,
                children: [(0, a.jsx)(c.Text, {
                  color: "always-white",
                  variant: "text-xs/normal",
                  children: y.default.Messages.QUESTS_PROMOTED
                }), (0, a.jsx)(d.CircleQuestionIcon, {
                  color: c.tokens.colors.WHITE,
                  className: D.promotedBadgeIcon
                })]
              })
            }), (0, a.jsx)(R.QuestsEntryContextMenuPopout, {
              onOpen: E,
              onClose: O,
              onSelect: j,
              questContent: I.QuestContent.QUEST_BAR,
              quest: G,
              shouldShowDisclosure: !0,
              showShareLink: !0,
              children: e => (0, a.jsx)(c.Clickable, {
                ...e,
                className: D.submenuWrapper,
                "aria-label": y.default.Messages.ACTIONS,
                children: (0, a.jsx)(h.default, {
                  className: i()(D.submenuIcon, D.white)
                })
              })
            })]
          }), (0, a.jsxs)("div", {
            className: D.details,
            children: [(0, a.jsx)(N.default, {
              className: D.rewardTile,
              learnMoreStyle: "text",
              quest: G,
              questContent: I.QuestContent.QUEST_BAR
            }), (0, a.jsx)(c.Heading, {
              className: D.title,
              variant: "heading-md/medium",
              children: y.default.Messages.QUESTS_TITLE.format({
                questName: G.config.messages.questName
              })
            }), (0, a.jsx)(c.Text, {
              className: D.description,
              variant: "text-xs/normal",
              children: X
            })]
          }), (0, a.jsx)(c.Button, {
            className: D.cta,
            color: c.Button.Colors.BRAND,
            fullWidth: !0,
            onClick: q ? V : void 0,
            size: c.Button.Sizes.SMALL,
            submitting: B,
            children: y.default.Messages.QUESTS_ACCEPT_QUEST
          })]
        }), (0, a.jsx)("div", {
          className: D.heroAssetWrapper,
          children: H ? (0, a.jsx)(v.QuestsAsset, {
            id: "QuestBarV2ContentExpanded_heroAnimated",
            children: e => (0, a.jsx)(_.default, {
              ref: e,
              autoPlay: !w,
              loop: !0,
              muted: !0,
              playsInline: !0,
              className: D.heroAsset,
              controls: !1,
              children: (0, a.jsx)("source", {
                src: Z,
                type: (0, g.getVideoAssetMimeType)(Z)
              })
            })
          }) : (0, a.jsx)(v.QuestsAsset, {
            id: "QuestBarV2ContentExpanded_heroStatic",
            children: e => (0, a.jsx)("img", {
              ref: e,
              alt: "",
              className: D.heroAsset,
              src: Z
            })
          })
        })]
      })
    })
  });
t.default = j