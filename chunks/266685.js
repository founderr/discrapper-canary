var s = n(735250),
  o = n(470079),
  a = n(120356),
  r = n.n(a),
  l = n(442837),
  i = n(950104),
  c = n(780384),
  u = n(481060),
  d = n(810090),
  p = n(358085),
  x = n(617136),
  m = n(272008),
  g = n(113434),
  C = n(569984),
  h = n(497505),
  S = n(918701),
  E = n(865364),
  f = n(566078),
  N = n(340100),
  T = n(611855),
  v = n(644646),
  j = n(78826),
  _ = n(670638),
  A = n(667105),
  B = n(46140),
  R = n(689938),
  M = n(51283);
let y = o.forwardRef(function(e, t) {
  var n, a;
  let {
    className: E,
    isExpanded: y,
    isExpansionAnimationComplete: U,
    onCtxMenuOpen: Z,
    onCtxMenuClose: b,
    onCtxMenuSelect: Q,
    quest: I,
    useReducedMotion: P
  } = e, k = (0, l.e7)([C.Z], () => C.Z.isEnrolling(I.id), [I]), L = (0, g.B6)(I.config.expiresAt), q = f.r.build(I.config), w = (0, g.B6)(q.rewardsExpireAt), V = o.useMemo(() => (0, S.nP)(I.config.assets.questBarHero), [I]), H = (0, A.tP)(q.application.id), D = o.useCallback(() => {
    (0, m.AH)(I.id, {
      questContent: h.jn.QUEST_BAR,
      questContentCTA: x.jZ.ACCEPT_QUEST
    })
  }, [I]), z = (0, A.hf)({
    quest: I,
    location: h.jn.QUEST_BAR
  }), W = o.useCallback(() => {
    (0, S.FE)(I, {
      content: h.jn.QUEST_BAR,
      ctaContent: x.jZ.OPEN_GAME_LINK
    })
  }, [I]), G = q.features.has(B.S7.POST_ENROLLMENT_CTA), K = (0, g.Rf)({
    quest: I,
    location: B.dr.QUESTS_BAR
  }), Y = K.progressSeconds > 0, F = (null === (n = I.userStatus) || void 0 === n ? void 0 : n.enrolledAt) != null, X = (null === (a = I.userStatus) || void 0 === a ? void 0 : a.completedAt) != null, $ = o.useMemo(() => (0, S.Xv)(I.config), [I.config]), J = y && U, ee = (0, S.ph)(I), et = (0, S.pG)({
    quest: I,
    location: B.dr.QUESTS_BAR,
    taskDetails: K
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
    "aria-hidden": !J,
    className: r()(E, M.contentExpanded, {
      [M.contentInteractable]: J
    }),
    children: F ? (0, s.jsxs)("div", {
      className: M.questAcceptedContent,
      ref: t,
      children: [(0, s.jsxs)("div", {
        className: M.utils,
        children: [(0, s.jsxs)("div", {
          className: M.questAcceptedContentHeading,
          children: [(0, s.jsx)(v.Z, {
            className: M.questProgressRewardTile,
            learnMoreStyle: "icon",
            quest: I,
            questContent: h.jn.QUEST_BAR
          }), (0, s.jsxs)("div", {
            children: [(0, s.jsx)(u.Heading, {
              color: "always-white",
              variant: "heading-sm/semibold",
              children: (0, S.AV)({
                quest: I,
                taskDetails: K
              })
            }), (0, s.jsx)(u.Text, {
              className: M.questAcceptedContentCopySubheading,
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
          questContent: h.jn.QUEST_BAR,
          quest: I,
          shouldShowDisclosure: !1,
          showShareLink: !0,
          children: e => (0, s.jsx)(u.Clickable, {
            ...e,
            className: M.submenuWrapper,
            "aria-label": R.Z.Messages.ACTIONS,
            children: (0, s.jsx)(u.MoreHorizontalIcon, {
              size: "md",
              color: "currentColor",
              className: M.submenuIcon
            })
          })
        })]
      }), X ? (0, s.jsx)(u.Button, {
        className: r()(M.cta, M.ctaClaimReward),
        style: $ ? es : void 0,
        color: u.Button.Colors.CUSTOM,
        fullWidth: !0,
        onClick: z,
        size: u.Button.Sizes.NONE,
        children: R.Z.Messages.QUESTS_CLAIM_REWARD
      }) : (0, s.jsx)(u.Text, {
        className: M.description,
        color: "always-white",
        variant: "text-xs/normal",
        children: et
      }), (0, s.jsx)(N.Z, {
        quest: I
      }), !en && !Y && !H && G && (0, s.jsx)(O, {
        onClick: J ? W : void 0
      })]
    }) : (0, s.jsxs)("div", {
      children: [(0, s.jsxs)("div", {
        className: M.questPromoContent,
        ref: t,
        children: [(0, s.jsxs)("div", {
          className: M.utils,
          children: [(0, s.jsx)(T.Z, {
            color: "always-white"
          }), (0, s.jsx)(_.r, {
            onOpen: Z,
            onClose: b,
            onSelect: Q,
            questContent: h.jn.QUEST_BAR,
            quest: I,
            shouldShowDisclosure: !0,
            showShareLink: !0,
            children: e => (0, s.jsx)(u.Clickable, {
              ...e,
              className: M.submenuWrapper,
              "aria-label": R.Z.Messages.ACTIONS,
              children: (0, s.jsx)(u.MoreHorizontalIcon, {
                size: "md",
                color: "currentColor",
                className: M.submenuIcon
              })
            })
          })]
        }), (0, s.jsxs)("div", {
          className: M.details,
          children: [(0, s.jsx)(v.Z, {
            className: M.rewardTile,
            learnMoreStyle: "text",
            quest: I,
            questContent: h.jn.QUEST_BAR
          }), (0, s.jsx)(u.Heading, {
            className: M.title,
            color: "always-white",
            variant: "heading-md/medium",
            children: R.Z.Messages.QUESTS_TITLE.format({
              questName: I.config.messages.questName
            })
          }), (0, s.jsx)(u.Text, {
            className: M.description,
            color: "always-white",
            variant: "text-sm/normal",
            children: et
          })]
        }), (0, s.jsx)(u.Button, {
          className: M.cta,
          style: "1232852290197655573" !== I.id ? es : void 0,
          color: u.Button.Colors.CUSTOM,
          fullWidth: !0,
          onClick: J ? D : void 0,
          size: u.Button.Sizes.NONE,
          submitting: k,
          children: R.Z.Messages.QUESTS_ACCEPT_QUEST
        })]
      }), (0, s.jsx)("div", {
        className: M.heroAssetWrapper,
        style: {
          color: I.config.colors.secondary
        },
        children: V ? (0, s.jsx)(j.Fl, {
          id: "QuestBarContentExpanded_heroAnimated",
          children: e => (0, s.jsx)(d.Z, {
            ref: e,
            autoPlay: !P,
            loop: !0,
            muted: !0,
            playsInline: !0,
            className: M.heroAsset,
            controls: !1,
            children: (0, s.jsx)("source", {
              src: ee,
              type: (0, S.mN)(ee)
            })
          })
        }) : (0, s.jsx)(j.Fl, {
          id: "QuestBarContentExpanded_heroStatic",
          children: e => (0, s.jsx)("img", {
            ref: e,
            alt: "",
            className: M.heroAsset,
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
    className: M.cta,
    style: t,
    color: u.Button.Colors.CUSTOM,
    fullWidth: !0,
    onClick: n,
    size: u.Button.Sizes.NONE,
    children: R.Z.Messages.QUESTS_GET_THIS_GAME
  }) : null
}
t.Z = y