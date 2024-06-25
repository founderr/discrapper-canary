var s = n(735250),
  o = n(470079),
  r = n(120356),
  a = n.n(r),
  l = n(442837),
  i = n(950104),
  c = n(780384),
  u = n(481060),
  d = n(810090),
  p = n(358085),
  x = n(617136),
  m = n(272008),
  g = n(113434),
  h = n(569984),
  C = n(497505),
  f = n(918701),
  E = n(865364),
  S = n(566078),
  v = n(340100),
  T = n(611855),
  j = n(644646),
  N = n(78826),
  _ = n(670638),
  A = n(667105),
  B = n(46140),
  R = n(689938),
  y = n(51283);
let M = o.forwardRef(function(e, t) {
  var n, r;
  let {
    className: E,
    isExpanded: M,
    isExpansionAnimationComplete: U,
    onCtxMenuOpen: Z,
    onCtxMenuClose: b,
    onCtxMenuSelect: Q,
    quest: I,
    useReducedMotion: k
  } = e, P = (0, l.e7)([h.Z], () => h.Z.isEnrolling(I.id), [I]), L = (0, g.B6)(I.config.expiresAt), q = S.r.build(I.config), w = (0, g.B6)(q.rewardsExpireAt), H = o.useMemo(() => (0, f.nP)(I.config.assets.questBarHero), [I]), V = (0, A.tP)(q.application.id), D = o.useCallback(() => {
    (0, m.AH)(I.id, {
      questContent: C.jn.QUEST_BAR,
      questContentCTA: x.jZ.ACCEPT_QUEST
    })
  }, [I]), W = (0, A.hf)({
    quest: I,
    location: C.jn.QUEST_BAR
  }), z = o.useCallback(() => {
    (0, f.FE)(I, {
      content: C.jn.QUEST_BAR,
      ctaContent: x.jZ.OPEN_GAME_LINK
    })
  }, [I]), G = q.features.has(B.S7.POST_ENROLLMENT_CTA), F = (0, g.Rf)({
    quest: I,
    location: B.dr.QUESTS_BAR
  }), K = F.progressSeconds > 0, Y = (null === (n = I.userStatus) || void 0 === n ? void 0 : n.enrolledAt) != null, X = (null === (r = I.userStatus) || void 0 === r ? void 0 : r.completedAt) != null, $ = o.useMemo(() => (0, f.Xv)(I.config), [I.config]), J = M && U, ee = (0, f.ph)(I), et = (0, f.pG)({
    quest: I,
    location: B.dr.QUESTS_BAR,
    taskDetails: F
  }), en = (0, p.isWeb)(), es = o.useMemo(() => {
    let e = (0, c.Qg)(I.config.colors.primary, {
      base: "#ffffff",
      contrastRatio: c.S3.Text
    });
    return {
      "--custom-cta-color": e,
      "--custom-cta-color-hover": (0, i.r5)(e, .3),
      "--custom-cta-color-active": (0, i.r5)(e, .35)
    }
  }, [I.config.colors.primary]);
  return (0, s.jsx)("div", {
    style: {
      backgroundColor: I.config.colors.secondary
    },
    "aria-hidden": !J,
    className: a()(E, y.contentExpanded, {
      [y.contentInteractable]: J
    }),
    children: Y ? (0, s.jsxs)("div", {
      className: y.questAcceptedContent,
      ref: t,
      children: [(0, s.jsxs)("div", {
        className: y.utils,
        children: [(0, s.jsxs)("div", {
          className: y.questAcceptedContentHeading,
          children: [(0, s.jsx)(j.Z, {
            className: y.questProgressRewardTile,
            learnMoreStyle: "icon",
            quest: I,
            questContent: C.jn.QUEST_BAR
          }), (0, s.jsxs)("div", {
            children: [(0, s.jsx)(u.Heading, {
              color: "always-white",
              variant: "heading-sm/semibold",
              children: (0, f.AV)({
                quest: I,
                taskDetails: F
              })
            }), (0, s.jsx)(u.Text, {
              className: y.questAcceptedContentCopySubheading,
              color: "always-white",
              variant: "text-xxs/normal",
              children: X ? R.Z.Messages.QUESTS_CLAIM_BY_DATE.format({
                expirationDate: w
              }) : R.Z.Messages.QUESTS_AVAILABLE_UNTIL_DATE.format({
                expirationDate: L
              })
            })]
          })]
        }), (0, s.jsx)(_.r, {
          onOpen: Z,
          onClose: b,
          onSelect: Q,
          questContent: C.jn.QUEST_BAR,
          quest: I,
          shouldShowDisclosure: !1,
          showShareLink: !0,
          children: e => (0, s.jsx)(u.Clickable, {
            ...e,
            className: y.submenuWrapper,
            "aria-label": R.Z.Messages.ACTIONS,
            children: (0, s.jsx)(u.MoreHorizontalIcon, {
              size: "md",
              color: "currentColor",
              className: y.submenuIcon
            })
          })
        })]
      }), X ? (0, s.jsx)(u.Button, {
        className: a()(y.cta, y.ctaClaimReward),
        style: $ ? es : void 0,
        color: u.Button.Colors.CUSTOM,
        fullWidth: !0,
        onClick: W,
        size: u.Button.Sizes.NONE,
        children: R.Z.Messages.QUESTS_CLAIM_REWARD
      }) : (0, s.jsx)(u.Text, {
        className: y.description,
        color: "always-white",
        variant: "text-xs/normal",
        children: et
      }), (0, s.jsx)(v.Z, {
        quest: I
      }), !en && !K && !V && G && (0, s.jsx)(O, {
        onClick: J ? z : void 0
      })]
    }) : (0, s.jsxs)("div", {
      children: [(0, s.jsxs)("div", {
        className: y.questPromoContent,
        ref: t,
        children: [(0, s.jsxs)("div", {
          className: y.utils,
          children: [(0, s.jsx)(T.Z, {
            color: "always-white"
          }), (0, s.jsx)(_.r, {
            onOpen: Z,
            onClose: b,
            onSelect: Q,
            questContent: C.jn.QUEST_BAR,
            quest: I,
            shouldShowDisclosure: !0,
            showShareLink: !0,
            children: e => (0, s.jsx)(u.Clickable, {
              ...e,
              className: y.submenuWrapper,
              "aria-label": R.Z.Messages.ACTIONS,
              children: (0, s.jsx)(u.MoreHorizontalIcon, {
                size: "md",
                color: "currentColor",
                className: y.submenuIcon
              })
            })
          })]
        }), (0, s.jsxs)("div", {
          className: y.details,
          children: [(0, s.jsx)(j.Z, {
            className: y.rewardTile,
            learnMoreStyle: "text",
            quest: I,
            questContent: C.jn.QUEST_BAR
          }), (0, s.jsx)(u.Heading, {
            className: y.title,
            color: "always-white",
            variant: "heading-md/medium",
            children: R.Z.Messages.QUESTS_TITLE.format({
              questName: I.config.messages.questName
            })
          }), (0, s.jsx)(u.Text, {
            className: y.description,
            color: "always-white",
            variant: "text-sm/normal",
            children: et
          })]
        }), (0, s.jsx)(u.Button, {
          className: y.cta,
          style: "1232852290197655573" !== I.id ? es : void 0,
          color: u.Button.Colors.CUSTOM,
          fullWidth: !0,
          onClick: J ? D : void 0,
          size: u.Button.Sizes.NONE,
          submitting: P,
          children: R.Z.Messages.QUESTS_ACCEPT_QUEST
        })]
      }), (0, s.jsx)("div", {
        className: y.heroAssetWrapper,
        style: {
          color: I.config.colors.secondary
        },
        children: H ? (0, s.jsx)(N.Fl, {
          id: "QuestBarContentExpanded_heroAnimated",
          children: e => (0, s.jsx)(d.Z, {
            ref: e,
            autoPlay: !k,
            loop: !0,
            muted: !0,
            playsInline: !0,
            className: y.heroAsset,
            controls: !1,
            children: (0, s.jsx)("source", {
              src: ee,
              type: (0, f.mN)(ee)
            })
          })
        }) : (0, s.jsx)(N.Fl, {
          id: "QuestBarContentExpanded_heroStatic",
          children: e => (0, s.jsx)("img", {
            ref: e,
            alt: "",
            className: y.heroAsset,
            src: ee
          })
        })
      })]
    })
  })
});

function O(e) {
  let {
    style: t,
    onClick: n
  } = e;
  return (0, E.O)({
    location: B.dr.QUESTS_BAR,
    autoTrackExposure: !0
  }) ? (0, s.jsx)(u.Button, {
    className: y.cta,
    style: t,
    color: u.Button.Colors.CUSTOM,
    fullWidth: !0,
    onClick: n,
    size: u.Button.Sizes.NONE,
    children: R.Z.Messages.QUESTS_GET_THIS_GAME
  }) : null
}
t.Z = M