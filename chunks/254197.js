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
  m = s("617136"),
  C = s("272008"),
  T = s("113434"),
  g = s("569984"),
  A = s("497505"),
  p = s("918701"),
  N = s("988303"),
  S = s("685613"),
  I = s("644646"),
  x = s("78826"),
  R = s("670638"),
  v = s("667105"),
  M = s("341907"),
  L = s("759853"),
  O = s("205511"),
  y = s("95985"),
  D = s("658590"),
  b = s("46140"),
  j = s("689938"),
  U = s("263094");
let P = e => {
    let {
      quest: t,
      useReducedMotion: s,
      isExpanded: n
    } = e, l = (0, v.useHandleClaimQuestsReward)({
      quest: t,
      location: A.QuestContent.QUEST_BAR
    });
    return (0, a.jsx)("div", {
      className: U.ctaContainer,
      children: (0, a.jsx)(E.default, {
        fullWidth: !0,
        size: c.Button.Sizes.SMALL,
        onClick: l,
        pauseAnimation: s || !n,
        buttonShineClassName: U.shine,
        children: j.default.Messages.QUESTS_CLAIM_REWARD
      })
    })
  },
  G = e => {
    let {
      quest: t,
      isExpanded: s,
      hasMadeProgress: l
    } = e, [i, o] = n.useState(!1), [d, E] = n.useState(!1), f = n.useRef(new u.Timeout), h = n.useRef(new u.Timeout), C = (0, p.hasVariant)(t, b.QuestVariants.IN_HOUSE_CONSOLE_QUEST) || l;
    n.useEffect(() => {
      let e = h.current,
        t = f.current;
      return function() {
        e.stop(), t.stop()
      }
    }, []);
    let T = () => {
        let e = C ? 20 : 16;
        return (0, a.jsx)(_.default, {
          className: C ? U.copyIcon : void 0,
          width: e,
          height: e,
          color: i ? r.default.GREEN_360 : "currentColor"
        })
      },
      g = () => {
        (0, p.copyShareLink)(t.id, {
          content: A.QuestContent.QUEST_BAR_V2,
          ctaContent: m.QuestContentCTA.QUEST_BAR_COPY_LINK
        }), o(!0), E(!0), h.current.start(500, () => E(!1)), f.current.start(600, () => o(!1))
      };
    return (0, a.jsxs)("div", {
      className: U.ctaContainer,
      children: [!C && (0, a.jsx)(c.Button, {
        className: U.flex,
        size: c.Button.Sizes.SMALL,
        onClick: () => (0, p.openGameLink)(t, {
          content: A.QuestContent.QUEST_BAR_V2,
          ctaContent: m.QuestContentCTA.OPEN_GAME_LINK
        }),
        children: j.default.Messages.QUESTS_PLAY_GAME
      }), (() => {
        let e = i ? c.Tooltip.Colors.GREEN : c.Tooltip.Colors.PRIMARY,
          t = i ? j.default.Messages.COPY_SUCCESS_1 : j.default.Messages.QUESTS_SHARE_LINK,
          n = C && !i;
        return (0, a.jsx)(c.Tooltip, {
          hideOnClick: !1,
          shouldShow: !n,
          forceOpen: d && s,
          color: e,
          text: t,
          children: e => (0, a.jsxs)(c.Button, {
            ...e,
            className: C ? U.iconButtonLarge : U.iconButton,
            innerClassName: U.iconButtonInner,
            size: C ? c.Button.Sizes.SMALL : c.Button.Sizes.ICON,
            color: c.Button.Colors.CUSTOM,
            onClick: g,
            children: [C && (0, a.jsx)(c.Text, {
              color: i ? "status-positive" : "text-primary",
              variant: "text-sm/normal",
              children: j.default.Messages.COPY_LINK
            }), T()]
          })
        })
      })()]
    })
  },
  V = n.forwardRef(function(e, t) {
    var s, l;
    let {
      className: r,
      isExpanded: u,
      isExpansionAnimationComplete: E,
      onCtxMenuOpen: _,
      onCtxMenuClose: v,
      onCtxMenuSelect: V,
      onContentHeightChange: B,
      quest: H,
      useReducedMotion: F
    } = e, k = n.useRef(null), w = (0, o.useStateFromStores)([g.default], () => g.default.isEnrolling(H.id), [H]), Q = (0, T.useQuestFormattedDate)(H.config.expiresAt), Y = n.useMemo(() => (0, p.isAssetAnimated)(H.config.assets.questBarHero), [H]), q = n.useCallback(() => {
      (0, C.enrollInQuest)(H.id, {
        questContent: A.QuestContent.QUEST_BAR,
        questContentCTA: m.QuestContentCTA.ACCEPT_QUEST
      })
    }, [H]), W = n.useCallback(() => {
      (0, p.openGameLink)(H, {
        content: A.QuestContent.QUEST_BAR,
        ctaContent: m.QuestContentCTA.OPEN_GAME_LINK
      })
    }, [H]), z = n.useCallback(() => {
      (0, M.openDisclosureModal)(H, {
        content: A.QuestContent.QUEST_BAR,
        ctaContent: m.QuestContentCTA.OPEN_DISCLOSURE
      })
    }, [H]), {
      primaryVariant: Z
    } = N.QuestBarExperiment.useExperiment({
      location: b.QuestsExperimentLocations.QUESTS_BAR
    }, {
      autoTrackExposure: !1
    }), K = (null === (s = H.userStatus) || void 0 === s ? void 0 : s.enrolledAt) != null, X = (null === (l = H.userStatus) || void 0 === l ? void 0 : l.completedAt) != null, J = n.useMemo(() => (0, p.calculatePercentComplete)({
      quest: H,
      location: b.QuestsExperimentLocations.QUESTS_BAR
    }), [H]) > 0, $ = u && E, ee = n.useMemo(() => (0, p.isConsoleQuest)(H), [H]), et = (0, p.getQuestBarHeroAssetUrl)(H), es = (0, p.getQuestsInstructionsToWinReward)({
      quest: H,
      location: b.QuestsExperimentLocations.QUESTS_BAR,
      useV2Variants: Z === N.QuestBarExperimentVariants.V2 || (0, D.shouldForceQuestBarV2)(H)
    });
    return (0, a.jsx)("div", {
      "aria-hidden": !$,
      className: i()(r, U.contentExpanded, {
        [U.contentInteractable]: $,
        [U.contentExpandedAccepted]: K
      }),
      children: K ? (0, a.jsxs)("div", {
        className: U.questAcceptedContent,
        ref: t,
        children: [(0, a.jsxs)("div", {
          className: U.questAcceptedHeader,
          children: [(0, a.jsx)(c.Text, {
            variant: "text-xxs/medium",
            className: i()(U.flex, U.headerText),
            children: j.default.Messages.QUESTS_AVAILABLE_UNTIL_DATE.format({
              expirationDate: Q
            })
          }), (0, a.jsx)(R.QuestsEntryContextMenuPopout, {
            onOpen: _,
            onClose: v,
            onSelect: V,
            questContent: A.QuestContent.QUEST_BAR,
            quest: H,
            shouldShowDisclosure: !1,
            showShareLink: !0,
            children: e => (0, a.jsx)(c.Clickable, {
              ...e,
              className: U.submenuWrapper,
              "aria-label": j.default.Messages.ACTIONS,
              children: (0, a.jsx)(f.default, {
                className: i()(U.submenuIcon, U.interactiveNormal)
              })
            })
          })]
        }), (0, a.jsx)("div", {
          className: U.divider
        }), (0, a.jsx)(L.default, {
          progressBarRef: k,
          quest: H,
          isExpanded: u
        }), (0, a.jsx)(y.default, {
          quest: H,
          progressBarRef: k,
          isExpanded: !0
        }), (() => {
          if (X) return (0, a.jsx)(P, {
            quest: H,
            useReducedMotion: F,
            isExpanded: u
          });
          if (ee) return (0, a.jsxs)(a.Fragment, {
            children: [(0, a.jsx)(O.default, {
              onContentHeightChange: B,
              quest: H
            }), (0, a.jsx)(G, {
              quest: H,
              useReducedMotion: F,
              isExpanded: u,
              hasMadeProgress: J
            })]
          });
          if (J) return null;
          return (0, a.jsx)(G, {
            quest: H,
            useReducedMotion: F,
            isExpanded: u,
            hasMadeProgress: J
          })
        })()]
      }) : (0, a.jsxs)("div", {
        children: [(0, a.jsxs)("div", {
          className: U.questPromoContent,
          ref: t,
          children: [(0, a.jsxs)("div", {
            className: U.utils,
            children: [(0, a.jsx)(c.Clickable, {
              className: U.promotedBadge,
              onClick: W,
              children: (0, a.jsx)(S.default, {
                quest: H,
                withGameTile: !1
              })
            }), (0, a.jsx)("div", {
              className: U.promotedBadgeWrapper,
              children: (0, a.jsxs)(c.Clickable, {
                className: U.promotedBadge,
                onClick: z,
                children: [(0, a.jsx)(c.Text, {
                  color: "always-white",
                  variant: "text-xs/normal",
                  children: j.default.Messages.QUESTS_PROMOTED
                }), (0, a.jsx)(d.CircleQuestionIcon, {
                  color: c.tokens.colors.WHITE,
                  className: U.promotedBadgeIcon
                })]
              })
            }), (0, a.jsx)(R.QuestsEntryContextMenuPopout, {
              onOpen: _,
              onClose: v,
              onSelect: V,
              questContent: A.QuestContent.QUEST_BAR,
              quest: H,
              shouldShowDisclosure: !0,
              showShareLink: !0,
              children: e => (0, a.jsx)(c.Clickable, {
                ...e,
                className: U.submenuWrapper,
                "aria-label": j.default.Messages.ACTIONS,
                children: (0, a.jsx)(f.default, {
                  className: i()(U.submenuIcon, U.white)
                })
              })
            })]
          }), (0, a.jsxs)("div", {
            className: U.details,
            children: [(0, a.jsx)(I.default, {
              className: U.rewardTile,
              learnMoreStyle: "text",
              quest: H,
              questContent: A.QuestContent.QUEST_BAR
            }), (0, a.jsx)(c.Heading, {
              className: U.title,
              variant: "heading-md/medium",
              children: j.default.Messages.QUESTS_TITLE.format({
                questName: H.config.messages.questName
              })
            }), (0, a.jsx)(c.Text, {
              className: U.description,
              variant: "text-xs/normal",
              children: es
            })]
          }), (0, a.jsx)(c.Button, {
            className: U.cta,
            color: c.Button.Colors.BRAND,
            fullWidth: !0,
            onClick: $ ? q : void 0,
            size: c.Button.Sizes.SMALL,
            submitting: w,
            children: j.default.Messages.QUESTS_ACCEPT_QUEST
          })]
        }), (0, a.jsx)("div", {
          className: U.heroAssetWrapper,
          children: Y ? (0, a.jsx)(x.QuestsAsset, {
            id: "QuestBarV2ContentExpanded_heroAnimated",
            children: e => (0, a.jsx)(h.default, {
              ref: e,
              autoPlay: !F,
              loop: !0,
              muted: !0,
              playsInline: !0,
              className: U.heroAsset,
              controls: !1,
              children: (0, a.jsx)("source", {
                src: et,
                type: (0, p.getVideoAssetMimeType)(et)
              })
            })
          }) : (0, a.jsx)(x.QuestsAsset, {
            id: "QuestBarV2ContentExpanded_heroStatic",
            children: e => (0, a.jsx)("img", {
              ref: e,
              alt: "",
              className: U.heroAsset,
              src: et
            })
          })
        })]
      })
    })
  });
t.default = V