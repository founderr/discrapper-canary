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
  P = n("205511"),
  x = n("95985"),
  y = n("46140"),
  D = n("689938"),
  b = n("263094");
let U = e => {
    let {
      quest: t,
      useReducedMotion: n,
      isExpanded: s
    } = e, l = (0, O.useHandleClaimQuestsReward)({
      quest: t,
      location: I.QuestContent.QUEST_BAR
    });
    return (0, a.jsx)("div", {
      className: b.ctaContainer,
      children: (0, a.jsx)(f.default, {
        fullWidth: !0,
        size: c.Button.Sizes.SMALL,
        onClick: l,
        pauseAnimation: n || !s,
        buttonShineClassName: b.shine,
        children: D.default.Messages.QUESTS_CLAIM_REWARD
      })
    })
  },
  j = e => {
    let {
      quest: t,
      isExpanded: n
    } = e, [l, i] = s.useState(!1), [o, d] = s.useState(!1), f = s.useRef(new u.Timeout), h = s.useRef(new u.Timeout), _ = (0, g.hasVariant)(t, y.QuestVariants.IN_HOUSE_CONSOLE_QUEST);
    s.useEffect(() => {
      let e = h.current,
        t = f.current;
      return function() {
        e.stop(), t.stop()
      }
    }, []);
    let m = () => {
        let e = _ ? 20 : 16;
        return (0, a.jsx)(E.default, {
          className: _ ? b.copyIcon : void 0,
          width: e,
          height: e,
          color: l ? r.default.GREEN_360 : "currentColor"
        })
      },
      S = () => {
        (0, g.copyShareLink)(t.id, {
          content: I.QuestContent.QUEST_BAR_V2,
          ctaContent: C.QuestContentCTA.QUEST_BAR_COPY_LINK
        }), i(!0), d(!0), h.current.start(500, () => d(!1)), f.current.start(600, () => i(!1))
      };
    return (0, a.jsxs)("div", {
      className: b.ctaContainer,
      children: [!_ && (0, a.jsx)(c.Button, {
        className: b.flex,
        size: c.Button.Sizes.SMALL,
        onClick: () => (0, g.openGameLink)(t, {
          content: I.QuestContent.QUEST_BAR_V2,
          ctaContent: C.QuestContentCTA.OPEN_GAME_LINK
        }),
        children: D.default.Messages.QUESTS_PLAY_GAME
      }), (() => {
        let e = l ? c.Tooltip.Colors.GREEN : c.Tooltip.Colors.PRIMARY,
          t = l ? D.default.Messages.COPY_SUCCESS_1 : D.default.Messages.QUESTS_SHARE_LINK,
          s = _ && !l;
        return (0, a.jsx)(c.Tooltip, {
          hideOnClick: !1,
          shouldShow: !s,
          forceOpen: o && n,
          color: e,
          text: t,
          children: e => (0, a.jsxs)(c.Button, {
            ...e,
            className: _ ? b.iconButtonLarge : b.iconButton,
            innerClassName: b.iconButtonInner,
            size: _ ? c.Button.Sizes.SMALL : c.Button.Sizes.ICON,
            color: c.Button.Colors.CUSTOM,
            onClick: S,
            children: [_ && (0, a.jsx)(c.Text, {
              color: l ? "status-positive" : "text-primary",
              variant: "text-sm/normal",
              children: D.default.Messages.COPY_LINK
            }), m()]
          })
        })
      })()]
    })
  },
  G = s.forwardRef(function(e, t) {
    var n, l;
    let {
      className: r,
      isExpanded: u,
      isExpansionAnimationComplete: f,
      onCtxMenuOpen: E,
      onCtxMenuClose: O,
      onCtxMenuSelect: G,
      onContentHeightChange: w,
      quest: k,
      useReducedMotion: B
    } = e, F = s.useRef(null), H = (0, o.useStateFromStores)([p.default], () => p.default.isEnrolling(k.id), [k]), V = (0, S.useQuestFormattedDate)(k.config.expiresAt), Y = s.useMemo(() => (0, g.isAssetAnimated)(k.config.assets.questBarHero), [k]), W = s.useCallback(() => {
      (0, m.enrollInQuest)(k.id, {
        questContent: I.QuestContent.QUEST_BAR,
        questContentCTA: C.QuestContentCTA.ACCEPT_QUEST
      })
    }, [k]), K = s.useCallback(() => {
      (0, g.openGameLink)(k, {
        content: I.QuestContent.QUEST_BAR,
        ctaContent: C.QuestContentCTA.OPEN_GAME_LINK
      })
    }, [k]), z = s.useCallback(() => {
      (0, L.openDisclosureModal)(k, {
        content: I.QuestContent.QUEST_BAR,
        ctaContent: C.QuestContentCTA.OPEN_DISCLOSURE
      })
    }, [k]), {
      primaryVariant: Q
    } = T.QuestBarExperiment.useExperiment({
      location: y.QuestsExperimentLocations.QUESTS_BAR
    }, {
      autoTrackExposure: !1
    }), q = (null === (n = k.userStatus) || void 0 === n ? void 0 : n.enrolledAt) != null, Z = (null === (l = k.userStatus) || void 0 === l ? void 0 : l.completedAt) != null, X = s.useMemo(() => (0, g.calculatePercentComplete)({
      quest: k,
      location: y.QuestsExperimentLocations.QUESTS_BAR
    }), [k]) > 0, J = u && f, $ = s.useMemo(() => (0, g.isConsoleQuest)(k), [k]), ee = (0, g.getQuestBarHeroAssetUrl)(k), et = (0, g.getQuestsInstructionsToWinReward)({
      quest: k,
      location: y.QuestsExperimentLocations.QUESTS_BAR,
      useV2Variants: Q === T.QuestBarExperimentVariants.V2
    });
    return (0, a.jsx)("div", {
      "aria-hidden": !J,
      className: i()(r, b.contentExpanded, {
        [b.contentInteractable]: J,
        [b.contentExpandedAccepted]: q
      }),
      children: q ? (0, a.jsxs)("div", {
        className: b.questAcceptedContent,
        ref: t,
        children: [(0, a.jsxs)("div", {
          className: b.questAcceptedHeader,
          children: [(0, a.jsx)(c.Text, {
            variant: "text-xxs/medium",
            className: i()(b.flex, b.headerText),
            children: D.default.Messages.QUESTS_AVAILABLE_UNTIL_DATE.format({
              expirationDate: V
            })
          }), (0, a.jsx)(R.QuestsEntryContextMenuPopout, {
            onOpen: E,
            onClose: O,
            onSelect: G,
            questContent: I.QuestContent.QUEST_BAR,
            quest: k,
            shouldShowDisclosure: !1,
            showShareLink: !0,
            children: e => (0, a.jsx)(c.Clickable, {
              ...e,
              className: b.submenuWrapper,
              "aria-label": D.default.Messages.ACTIONS,
              children: (0, a.jsx)(h.default, {
                className: i()(b.submenuIcon, b.interactiveNormal)
              })
            })
          })]
        }), (0, a.jsx)("div", {
          className: b.divider
        }), (0, a.jsx)(M.default, {
          progressBarRef: F,
          quest: k,
          isExpanded: u
        }), (0, a.jsx)(x.default, {
          quest: k,
          progressBarRef: F,
          isExpanded: !0
        }), (() => {
          if (Z) return (0, a.jsx)(U, {
            quest: k,
            useReducedMotion: B,
            isExpanded: u
          });
          if (X) return null;
          if ($) return (0, a.jsxs)(a.Fragment, {
            children: [(0, a.jsx)(P.default, {
              onContentHeightChange: w,
              quest: k
            }), (0, a.jsx)(j, {
              quest: k,
              useReducedMotion: B,
              isExpanded: u
            })]
          });
          return (0, a.jsx)(j, {
            quest: k,
            useReducedMotion: B,
            isExpanded: u
          })
        })()]
      }) : (0, a.jsxs)("div", {
        children: [(0, a.jsxs)("div", {
          className: b.questPromoContent,
          ref: t,
          children: [(0, a.jsxs)("div", {
            className: b.utils,
            children: [(0, a.jsx)(c.Clickable, {
              className: b.promotedBadge,
              onClick: K,
              children: (0, a.jsx)(A.default, {
                quest: k,
                withGameTile: !1
              })
            }), (0, a.jsx)("div", {
              className: b.promotedBadgeWrapper,
              children: (0, a.jsxs)(c.Clickable, {
                className: b.promotedBadge,
                onClick: z,
                children: [(0, a.jsx)(c.Text, {
                  color: "always-white",
                  variant: "text-xs/normal",
                  children: D.default.Messages.QUESTS_PROMOTED
                }), (0, a.jsx)(d.CircleQuestionIcon, {
                  color: c.tokens.colors.WHITE,
                  className: b.promotedBadgeIcon
                })]
              })
            }), (0, a.jsx)(R.QuestsEntryContextMenuPopout, {
              onOpen: E,
              onClose: O,
              onSelect: G,
              questContent: I.QuestContent.QUEST_BAR,
              quest: k,
              shouldShowDisclosure: !0,
              showShareLink: !0,
              children: e => (0, a.jsx)(c.Clickable, {
                ...e,
                className: b.submenuWrapper,
                "aria-label": D.default.Messages.ACTIONS,
                children: (0, a.jsx)(h.default, {
                  className: i()(b.submenuIcon, b.white)
                })
              })
            })]
          }), (0, a.jsxs)("div", {
            className: b.details,
            children: [(0, a.jsx)(N.default, {
              className: b.rewardTile,
              learnMoreStyle: "text",
              quest: k,
              questContent: I.QuestContent.QUEST_BAR
            }), (0, a.jsx)(c.Heading, {
              className: b.title,
              variant: "heading-md/medium",
              children: D.default.Messages.QUESTS_TITLE.format({
                questName: k.config.messages.questName
              })
            }), (0, a.jsx)(c.Text, {
              className: b.description,
              variant: "text-xs/normal",
              children: et
            })]
          }), (0, a.jsx)(c.Button, {
            className: b.cta,
            color: c.Button.Colors.BRAND,
            fullWidth: !0,
            onClick: J ? W : void 0,
            size: c.Button.Sizes.SMALL,
            submitting: H,
            children: D.default.Messages.QUESTS_ACCEPT_QUEST
          })]
        }), (0, a.jsx)("div", {
          className: b.heroAssetWrapper,
          children: Y ? (0, a.jsx)(v.QuestsAsset, {
            id: "QuestBarV2ContentExpanded_heroAnimated",
            children: e => (0, a.jsx)(_.default, {
              ref: e,
              autoPlay: !B,
              loop: !0,
              muted: !0,
              playsInline: !0,
              className: b.heroAsset,
              controls: !1,
              children: (0, a.jsx)("source", {
                src: ee,
                type: (0, g.getVideoAssetMimeType)(ee)
              })
            })
          }) : (0, a.jsx)(v.QuestsAsset, {
            id: "QuestBarV2ContentExpanded_heroStatic",
            children: e => (0, a.jsx)("img", {
              ref: e,
              alt: "",
              className: b.heroAsset,
              src: ee
            })
          })
        })]
      })
    })
  });
t.default = G