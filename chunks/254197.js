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
  R = s("78826"),
  v = s("670638"),
  x = s("667105"),
  M = s("341907"),
  L = s("759853"),
  O = s("205511"),
  y = s("95985"),
  D = s("46140"),
  b = s("689938"),
  j = s("263094");
let P = e => {
    let {
      quest: t,
      useReducedMotion: s,
      isExpanded: n
    } = e, l = (0, x.useHandleClaimQuestsReward)({
      quest: t,
      location: A.QuestContent.QUEST_BAR
    });
    return (0, a.jsx)("div", {
      className: j.ctaContainer,
      children: (0, a.jsx)(E.default, {
        fullWidth: !0,
        size: c.Button.Sizes.SMALL,
        onClick: l,
        pauseAnimation: s || !n,
        buttonShineClassName: j.shine,
        children: b.default.Messages.QUESTS_CLAIM_REWARD
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
    let h = () => {
        (0, p.copyShareLink)(t.id, {
          content: A.QuestContent.QUEST_BAR_V2,
          ctaContent: m.QuestContentCTA.QUEST_BAR_COPY_LINK
        }), d(!0), i(!0), E.current.start(500, () => i(!1)), f.current.start(600, () => d(!1))
      },
      C = o ? c.Tooltip.Colors.GREEN : c.Tooltip.Colors.PRIMARY,
      T = o ? b.default.Messages.COPY_SUCCESS_1 : b.default.Messages.QUESTS_SHARE_LINK,
      g = o ? r.default.GREEN_360 : "currentColor";
    return (0, a.jsxs)("div", {
      className: j.ctaContainer,
      children: [(0, a.jsx)(c.Button, {
        className: j.flex,
        size: c.Button.Sizes.SMALL,
        onClick: () => (0, p.openGameLink)(t, {
          content: A.QuestContent.QUEST_BAR_V2,
          ctaContent: m.QuestContentCTA.OPEN_GAME_LINK
        }),
        children: b.default.Messages.QUESTS_PLAY_GAME
      }), (0, a.jsx)(c.Tooltip, {
        hideOnClick: !1,
        forceOpen: l && s,
        color: C,
        text: T,
        children: e => (0, a.jsx)(c.Button, {
          ...e,
          className: j.iconButton,
          innerClassName: j.shareIcon,
          size: c.Button.Sizes.ICON,
          color: c.Button.Colors.CUSTOM,
          onClick: h,
          children: (0, a.jsx)(_.default, {
            width: 16,
            height: 16,
            color: g
          })
        })
      })]
    })
  },
  G = n.forwardRef(function(e, t) {
    var s, l;
    let {
      className: r,
      isExpanded: u,
      isExpansionAnimationComplete: E,
      onCtxMenuOpen: _,
      onCtxMenuClose: x,
      onCtxMenuSelect: G,
      onContentHeightChange: V,
      quest: B,
      useReducedMotion: H
    } = e, F = n.useRef(null), k = (0, o.useStateFromStores)([g.default], () => g.default.isEnrolling(B.id), [B]), w = (0, T.useQuestFormattedDate)(B.config.expiresAt), Q = n.useMemo(() => (0, p.isAssetAnimated)(B.config.assets.questBarHero), [B]), Y = n.useCallback(() => {
      (0, C.enrollInQuest)(B.id, {
        questContent: A.QuestContent.QUEST_BAR,
        questContentCTA: m.QuestContentCTA.ACCEPT_QUEST
      })
    }, [B]), q = n.useCallback(() => {
      (0, p.openGameLink)(B, {
        content: A.QuestContent.QUEST_BAR,
        ctaContent: m.QuestContentCTA.OPEN_GAME_LINK
      })
    }, [B]), W = n.useCallback(() => {
      (0, M.openDisclosureModal)(B, {
        content: A.QuestContent.QUEST_BAR,
        ctaContent: m.QuestContentCTA.OPEN_DISCLOSURE
      })
    }, [B]), {
      primaryVariant: z
    } = N.QuestBarExperiment.useExperiment({
      location: D.QuestsExperimentLocations.QUESTS_BAR
    }, {
      autoTrackExposure: !1
    }), Z = (null === (s = B.userStatus) || void 0 === s ? void 0 : s.enrolledAt) != null, K = (null === (l = B.userStatus) || void 0 === l ? void 0 : l.completedAt) != null, X = n.useMemo(() => (0, p.calculatePercentComplete)({
      quest: B,
      location: D.QuestsExperimentLocations.QUESTS_BAR
    }), [B]), J = u && E, $ = n.useMemo(() => (0, p.isConsoleQuest)(B), [B]), ee = (0, p.getQuestBarHeroAssetUrl)(B), et = (0, p.getQuestsInstructionsToWinReward)({
      quest: B,
      location: D.QuestsExperimentLocations.QUESTS_BAR,
      useV2Variants: z === N.QuestBarExperimentVariants.V2
    });
    return (0, a.jsx)("div", {
      "aria-hidden": !J,
      className: i()(r, j.contentExpanded, {
        [j.contentInteractable]: J,
        [j.contentExpandedAccepted]: Z
      }),
      children: Z ? (0, a.jsxs)("div", {
        className: j.questAcceptedContent,
        ref: t,
        children: [(0, a.jsxs)("div", {
          className: j.questAcceptedHeader,
          children: [(0, a.jsx)(c.Text, {
            variant: "text-xxs/medium",
            className: i()(j.flex, j.headerText),
            children: b.default.Messages.QUESTS_AVAILABLE_UNTIL_DATE.format({
              expirationDate: w
            })
          }), (0, a.jsx)(v.QuestsEntryContextMenuPopout, {
            onOpen: _,
            onClose: x,
            onSelect: G,
            questContent: A.QuestContent.QUEST_BAR,
            quest: B,
            shouldShowDisclosure: !1,
            showShareLink: !0,
            children: e => (0, a.jsx)(c.Clickable, {
              ...e,
              className: j.submenuWrapper,
              "aria-label": b.default.Messages.ACTIONS,
              children: (0, a.jsx)(f.default, {
                className: i()(j.submenuIcon, j.interactiveNormal)
              })
            })
          })]
        }), (0, a.jsx)("div", {
          className: j.divider
        }), (0, a.jsx)(L.default, {
          progressBarRef: F,
          quest: B,
          isExpanded: u
        }), (0, a.jsx)(y.default, {
          quest: B,
          progressBarRef: F,
          isExpanded: !0
        }), K ? (0, a.jsx)(P, {
          quest: B,
          useReducedMotion: H,
          isExpanded: u
        }) : X > 0 ? null : $ ? (0, a.jsx)(O.default, {
          onContentHeightChange: V,
          quest: B
        }) : (0, a.jsx)(U, {
          quest: B,
          useReducedMotion: H,
          isExpanded: u
        })]
      }) : (0, a.jsxs)("div", {
        children: [(0, a.jsxs)("div", {
          className: j.questPromoContent,
          ref: t,
          children: [(0, a.jsxs)("div", {
            className: j.utils,
            children: [(0, a.jsx)(c.Clickable, {
              className: j.promotedBadge,
              onClick: q,
              children: (0, a.jsx)(S.default, {
                quest: B,
                withGameTile: !1
              })
            }), (0, a.jsx)("div", {
              className: j.promotedBadgeWrapper,
              children: (0, a.jsxs)(c.Clickable, {
                className: j.promotedBadge,
                onClick: W,
                children: [(0, a.jsx)(c.Text, {
                  color: "always-white",
                  variant: "text-xs/normal",
                  children: b.default.Messages.QUESTS_PROMOTED
                }), (0, a.jsx)(d.CircleQuestionIcon, {
                  color: c.tokens.colors.WHITE,
                  className: j.promotedBadgeIcon
                })]
              })
            }), (0, a.jsx)(v.QuestsEntryContextMenuPopout, {
              onOpen: _,
              onClose: x,
              onSelect: G,
              questContent: A.QuestContent.QUEST_BAR,
              quest: B,
              shouldShowDisclosure: !0,
              showShareLink: !0,
              children: e => (0, a.jsx)(c.Clickable, {
                ...e,
                className: j.submenuWrapper,
                "aria-label": b.default.Messages.ACTIONS,
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
              quest: B,
              questContent: A.QuestContent.QUEST_BAR
            }), (0, a.jsx)(c.Heading, {
              className: j.title,
              variant: "heading-md/medium",
              children: b.default.Messages.QUESTS_TITLE.format({
                questName: B.config.messages.questName
              })
            }), (0, a.jsx)(c.Text, {
              className: j.description,
              variant: "text-xs/normal",
              children: et
            })]
          }), (0, a.jsx)(c.Button, {
            className: j.cta,
            color: c.Button.Colors.BRAND,
            fullWidth: !0,
            onClick: J ? Y : void 0,
            size: c.Button.Sizes.SMALL,
            submitting: k,
            children: b.default.Messages.QUESTS_ACCEPT_QUEST
          })]
        }), (0, a.jsx)("div", {
          className: j.heroAssetWrapper,
          children: Q ? (0, a.jsx)(R.QuestsAsset, {
            id: "QuestBarV2ContentExpanded_heroAnimated",
            children: e => (0, a.jsx)(h.default, {
              ref: e,
              autoPlay: !H,
              loop: !0,
              muted: !0,
              playsInline: !0,
              className: j.heroAsset,
              controls: !1,
              children: (0, a.jsx)("source", {
                src: ee,
                type: (0, p.getVideoAssetMimeType)(ee)
              })
            })
          }) : (0, a.jsx)(R.QuestsAsset, {
            id: "QuestBarV2ContentExpanded_heroStatic",
            children: e => (0, a.jsx)("img", {
              ref: e,
              alt: "",
              className: j.heroAsset,
              src: ee
            })
          })
        })]
      })
    })
  });
t.default = G