var s = n(735250),
  a = n(470079),
  i = n(120356),
  l = n.n(i),
  r = n(442837),
  o = n(950104),
  c = n(780384),
  d = n(481060),
  u = n(810090),
  E = n(358085),
  _ = n(617136),
  h = n(272008),
  m = n(113434),
  T = n(569984),
  C = n(497505),
  g = n(918701),
  p = n(865364),
  N = n(566078),
  I = n(340100),
  A = n(611855),
  f = n(644646),
  x = n(78826),
  S = n(670638),
  v = n(667105),
  R = n(46140),
  M = n(689938),
  O = n(51283);
let L = a.forwardRef(function(e, t) {
  var n, i;
  let {
    className: p,
    isExpanded: L,
    isExpansionAnimationComplete: j,
    onCtxMenuOpen: y,
    onCtxMenuClose: b,
    onCtxMenuSelect: P,
    quest: D,
    useReducedMotion: U
  } = e, G = (0, r.e7)([T.Z], () => T.Z.isEnrolling(D.id), [D]), B = (0, m.B6)(D.config.expiresAt), V = N.r.build(D.config), H = (0, m.B6)(V.rewardsExpireAt), w = a.useMemo(() => (0, g.nP)(D.config.assets.questBarHero), [D]), k = (0, v.tP)(V.application.id), F = a.useCallback(() => {
    (0, h.AH)(D.id, {
      questContent: C.jn.QUEST_BAR,
      questContentCTA: _.jZ.ACCEPT_QUEST
    })
  }, [D]), Y = (0, v.hf)({
    quest: D,
    location: C.jn.QUEST_BAR
  }), Q = a.useCallback(() => {
    (0, g.FE)(D, {
      content: C.jn.QUEST_BAR,
      ctaContent: _.jZ.OPEN_GAME_LINK
    })
  }, [D]), z = V.features.has(R.S7.POST_ENROLLMENT_CTA), q = (0, m.Rf)({
    quest: D,
    location: R.dr.QUESTS_BAR
  }), W = q.progressSeconds > 0, K = (null === (n = D.userStatus) || void 0 === n ? void 0 : n.enrolledAt) != null, X = (null === (i = D.userStatus) || void 0 === i ? void 0 : i.completedAt) != null, J = a.useMemo(() => (0, g.Xv)(D.config), [D.config]), $ = L && j, ee = (0, g.ph)(D), et = (0, g.pG)({
    quest: D,
    location: R.dr.QUESTS_BAR,
    taskDetails: q
  }), en = (0, E.isWeb)(), es = a.useMemo(() => {
    let e = (0, c.Qg)(D.config.colors.primary, {
      base: "#ffffff",
      contrastRatio: c.S3.Text
    });
    return {
      "--custom-cta-color": e,
      "--custom-cta-color-hover": (0, o.r5)(e, .3),
      "--custom-cta-color-active": (0, o.r5)(e, .35)
    }
  }, [D.config.colors.primary]);
  return (0, s.jsx)("div", {
    "aria-hidden": !$,
    className: l()(p, O.contentExpanded, {
      [O.contentInteractable]: $
    }),
    children: K ? (0, s.jsxs)("div", {
      className: O.questAcceptedContent,
      ref: t,
      children: [(0, s.jsxs)("div", {
        className: O.utils,
        children: [(0, s.jsxs)("div", {
          className: O.questAcceptedContentHeading,
          children: [(0, s.jsx)(f.Z, {
            className: O.questProgressRewardTile,
            learnMoreStyle: "icon",
            quest: D,
            questContent: C.jn.QUEST_BAR
          }), (0, s.jsxs)("div", {
            children: [(0, s.jsx)(d.Heading, {
              color: "always-white",
              variant: "heading-sm/semibold",
              children: (0, g.AV)({
                quest: D,
                taskDetails: q
              })
            }), (0, s.jsx)(d.Text, {
              className: O.questAcceptedContentCopySubheading,
              color: "always-white",
              variant: "text-xxs/normal",
              children: X ? M.Z.Messages.QUESTS_CLAIM_BY_DATE.format({
                expirationDate: H
              }) : M.Z.Messages.QUESTS_AVAILABLE_UNTIL_DATE.format({
                expirationDate: B
              })
            })]
          })]
        }), (0, s.jsx)(S.r, {
          onOpen: y,
          onClose: b,
          onSelect: P,
          questContent: C.jn.QUEST_BAR,
          quest: D,
          shouldShowDisclosure: !1,
          showShareLink: !0,
          children: e => (0, s.jsx)(d.Clickable, {
            ...e,
            className: O.submenuWrapper,
            "aria-label": M.Z.Messages.ACTIONS,
            children: (0, s.jsx)(d.MoreHorizontalIcon, {
              size: "md",
              color: "currentColor",
              className: O.submenuIcon
            })
          })
        })]
      }), X ? (0, s.jsx)(d.Button, {
        className: l()(O.cta, O.ctaClaimReward),
        style: J ? es : void 0,
        color: d.Button.Colors.CUSTOM,
        fullWidth: !0,
        onClick: Y,
        size: d.Button.Sizes.NONE,
        children: M.Z.Messages.QUESTS_CLAIM_REWARD
      }) : (0, s.jsx)(d.Text, {
        className: O.description,
        color: "always-white",
        variant: "text-xs/normal",
        children: et
      }), (0, s.jsx)(I.Z, {
        quest: D
      }), !en && !W && !k && z && (0, s.jsx)(Z, {
        onClick: $ ? Q : void 0
      })]
    }) : (0, s.jsxs)("div", {
      children: [(0, s.jsxs)("div", {
        className: O.questPromoContent,
        ref: t,
        children: [(0, s.jsxs)("div", {
          className: O.utils,
          children: [(0, s.jsx)(A.Z, {
            color: "always-white"
          }), (0, s.jsx)(S.r, {
            onOpen: y,
            onClose: b,
            onSelect: P,
            questContent: C.jn.QUEST_BAR,
            quest: D,
            shouldShowDisclosure: !0,
            showShareLink: !0,
            children: e => (0, s.jsx)(d.Clickable, {
              ...e,
              className: O.submenuWrapper,
              "aria-label": M.Z.Messages.ACTIONS,
              children: (0, s.jsx)(d.MoreHorizontalIcon, {
                size: "md",
                color: "currentColor",
                className: O.submenuIcon
              })
            })
          })]
        }), (0, s.jsxs)("div", {
          className: O.details,
          children: [(0, s.jsx)(f.Z, {
            className: O.rewardTile,
            learnMoreStyle: "text",
            quest: D,
            questContent: C.jn.QUEST_BAR
          }), (0, s.jsx)(d.Heading, {
            className: O.title,
            color: "always-white",
            variant: "heading-md/medium",
            children: M.Z.Messages.QUESTS_TITLE.format({
              questName: D.config.messages.questName
            })
          }), (0, s.jsx)(d.Text, {
            className: O.description,
            color: "always-white",
            variant: "text-sm/normal",
            children: et
          })]
        }), (0, s.jsx)(d.Button, {
          className: O.cta,
          style: "1232852290197655573" !== D.id ? es : void 0,
          color: d.Button.Colors.CUSTOM,
          fullWidth: !0,
          onClick: $ ? F : void 0,
          size: d.Button.Sizes.NONE,
          submitting: G,
          children: M.Z.Messages.QUESTS_ACCEPT_QUEST
        })]
      }), (0, s.jsx)("div", {
        className: O.heroAssetWrapper,
        style: {
          color: D.config.colors.secondary
        },
        children: w ? (0, s.jsx)(x.Fl, {
          id: "QuestBarContentExpanded_heroAnimated",
          children: e => (0, s.jsx)(u.Z, {
            ref: e,
            autoPlay: !U,
            loop: !0,
            muted: !0,
            playsInline: !0,
            className: O.heroAsset,
            controls: !1,
            children: (0, s.jsx)("source", {
              src: ee,
              type: (0, g.mN)(ee)
            })
          })
        }) : (0, s.jsx)(x.Fl, {
          id: "QuestBarContentExpanded_heroStatic",
          children: e => (0, s.jsx)("img", {
            ref: e,
            alt: "",
            className: O.heroAsset,
            src: ee
          })
        })
      })]
    })
  })
});

function Z(e) {
  let {
    style: t,
    onClick: n
  } = e;
  return (0, p.O)({
    location: R.dr.QUESTS_BAR,
    autoTrackExposure: !0
  }) ? (0, s.jsx)(d.Button, {
    className: O.cta,
    style: t,
    color: d.Button.Colors.CUSTOM,
    fullWidth: !0,
    onClick: n,
    size: d.Button.Sizes.NONE,
    children: M.Z.Messages.QUESTS_GET_THIS_GAME
  }) : null
}
t.Z = L