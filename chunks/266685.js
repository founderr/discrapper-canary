var o = n(735250),
  s = n(470079),
  r = n(120356),
  a = n.n(r),
  i = n(442837),
  l = n(950104),
  c = n(780384),
  d = n(481060),
  u = n(810090),
  p = n(358085),
  m = n(617136),
  x = n(272008),
  g = n(113434),
  f = n(569984),
  C = n(497505),
  h = n(918701),
  _ = n(865364),
  E = n(566078),
  S = n(340100),
  T = n(611855),
  v = n(644646),
  N = n(78826),
  j = n(670638),
  A = n(667105),
  B = n(46140),
  b = n(689938),
  R = n(51283);
let y = s.forwardRef(function(e, t) {
  var n, r;
  let {
    className: _,
    isExpanded: y,
    isExpansionAnimationComplete: U,
    onCtxMenuOpen: I,
    onCtxMenuClose: O,
    onCtxMenuSelect: q,
    quest: Z,
    useReducedMotion: k
  } = e, P = (0, i.e7)([f.Z], () => f.Z.isEnrolling(Z.id), [Z]), Q = (0, g.B6)(Z.config.expiresAt), w = E.r.build(Z.config), L = (0, g.B6)(w.rewardsExpireAt), W = s.useMemo(() => (0, h.nP)(Z.config.assets.questBarHero), [Z]), D = (0, A.tP)(w.application.id), H = s.useCallback(() => {
    (0, x.AH)(Z.id, {
      questContent: C.jn.QUEST_BAR,
      questContentCTA: m.jZ.ACCEPT_QUEST
    })
  }, [Z]), V = (0, A.hf)({
    quest: Z,
    location: C.jn.QUEST_BAR
  }), z = s.useCallback(() => {
    (0, h.FE)(Z, {
      content: C.jn.QUEST_BAR,
      ctaContent: m.jZ.OPEN_GAME_LINK
    })
  }, [Z]), G = w.features.has(B.S7.POST_ENROLLMENT_CTA), F = (0, g.Rf)({
    quest: Z,
    location: B.dr.QUESTS_BAR
  }), K = F.progressSeconds > 0, Y = (null === (n = Z.userStatus) || void 0 === n ? void 0 : n.enrolledAt) != null, X = (null === (r = Z.userStatus) || void 0 === r ? void 0 : r.completedAt) != null, $ = s.useMemo(() => (0, h.Xv)(Z.config), [Z.config]), J = y && U, ee = (0, h.ph)(Z), et = (0, h.pG)({
    quest: Z,
    location: B.dr.QUESTS_BAR,
    taskDetails: F
  }), en = (0, p.isWeb)(), eo = s.useMemo(() => {
    let e = (0, c.Qg)(Z.config.colors.primary, {
      base: "#ffffff",
      contrastRatio: c.S3.Text
    });
    return {
      "--custom-cta-color": e,
      "--custom-cta-color-hover": (0, l.r5)(e, .3),
      "--custom-cta-color-active": (0, l.r5)(e, .35)
    }
  }, [Z.config.colors.primary]);
  return (0, o.jsx)("div", {
    style: {
      backgroundColor: Z.config.colors.secondary
    },
    "aria-hidden": !J,
    className: a()(_, R.contentExpanded, {
      [R.contentInteractable]: J
    }),
    children: Y ? (0, o.jsxs)("div", {
      className: R.questAcceptedContent,
      ref: t,
      children: [(0, o.jsxs)("div", {
        className: R.utils,
        children: [(0, o.jsxs)("div", {
          className: R.questAcceptedContentHeading,
          children: [(0, o.jsx)(v.Z, {
            className: R.questProgressRewardTile,
            learnMoreStyle: "icon",
            quest: Z,
            questContent: C.jn.QUEST_BAR
          }), (0, o.jsxs)("div", {
            children: [(0, o.jsx)(d.Heading, {
              color: "always-white",
              variant: "heading-sm/semibold",
              children: (0, h.AV)({
                quest: Z,
                taskDetails: F
              })
            }), (0, o.jsx)(d.Text, {
              className: R.questAcceptedContentCopySubheading,
              color: "always-white",
              variant: "text-xxs/normal",
              children: X ? b.Z.Messages.QUESTS_CLAIM_BY_DATE.format({
                expirationDate: L
              }) : b.Z.Messages.QUESTS_AVAILABLE_UNTIL_DATE.format({
                expirationDate: Q
              })
            })]
          })]
        }), (0, o.jsx)(j.r, {
          onOpen: I,
          onClose: O,
          onSelect: q,
          questContent: C.jn.QUEST_BAR,
          quest: Z,
          shouldShowDisclosure: !1,
          showShareLink: !0,
          children: e => (0, o.jsx)(d.Clickable, {
            ...e,
            className: R.submenuWrapper,
            "aria-label": b.Z.Messages.ACTIONS,
            children: (0, o.jsx)(d.MoreHorizontalIcon, {
              size: "md",
              color: "currentColor",
              className: R.submenuIcon
            })
          })
        })]
      }), X ? (0, o.jsx)(d.Button, {
        className: a()(R.cta, R.ctaClaimReward),
        style: $ ? eo : void 0,
        color: d.Button.Colors.CUSTOM,
        fullWidth: !0,
        onClick: V,
        size: d.Button.Sizes.NONE,
        children: b.Z.Messages.QUESTS_CLAIM_REWARD
      }) : (0, o.jsx)(d.Text, {
        className: R.description,
        color: "always-white",
        variant: "text-xs/normal",
        children: et
      }), (0, o.jsx)(S.Z, {
        quest: Z
      }), !en && !K && !D && G && (0, o.jsx)(M, {
        onClick: J ? z : void 0
      })]
    }) : (0, o.jsxs)("div", {
      children: [(0, o.jsxs)("div", {
        className: R.questPromoContent,
        ref: t,
        children: [(0, o.jsxs)("div", {
          className: R.utils,
          children: [(0, o.jsx)(T.Z, {
            color: "always-white"
          }), (0, o.jsx)(j.r, {
            onOpen: I,
            onClose: O,
            onSelect: q,
            questContent: C.jn.QUEST_BAR,
            quest: Z,
            shouldShowDisclosure: !0,
            showShareLink: !0,
            children: e => (0, o.jsx)(d.Clickable, {
              ...e,
              className: R.submenuWrapper,
              "aria-label": b.Z.Messages.ACTIONS,
              children: (0, o.jsx)(d.MoreHorizontalIcon, {
                size: "md",
                color: "currentColor",
                className: R.submenuIcon
              })
            })
          })]
        }), (0, o.jsxs)("div", {
          className: R.details,
          children: [(0, o.jsx)(v.Z, {
            className: R.rewardTile,
            learnMoreStyle: "text",
            quest: Z,
            questContent: C.jn.QUEST_BAR
          }), (0, o.jsx)(d.Heading, {
            className: R.title,
            color: "always-white",
            variant: "heading-md/medium",
            children: b.Z.Messages.QUESTS_TITLE.format({
              questName: Z.config.messages.questName
            })
          }), (0, o.jsx)(d.Text, {
            className: R.description,
            color: "always-white",
            variant: "text-sm/normal",
            children: et
          })]
        }), (0, o.jsx)(d.Button, {
          className: R.cta,
          style: "1232852290197655573" !== Z.id ? eo : void 0,
          color: d.Button.Colors.CUSTOM,
          fullWidth: !0,
          onClick: J ? H : void 0,
          size: d.Button.Sizes.NONE,
          submitting: P,
          children: b.Z.Messages.QUESTS_ACCEPT_QUEST
        })]
      }), (0, o.jsx)("div", {
        className: R.heroAssetWrapper,
        style: {
          color: Z.config.colors.secondary
        },
        children: W ? (0, o.jsx)(N.Fl, {
          id: "QuestBarContentExpanded_heroAnimated",
          children: e => (0, o.jsx)(u.Z, {
            ref: e,
            autoPlay: !k,
            loop: !0,
            muted: !0,
            playsInline: !0,
            className: R.heroAsset,
            controls: !1,
            children: (0, o.jsx)("source", {
              src: ee,
              type: (0, h.mN)(ee)
            })
          })
        }) : (0, o.jsx)(N.Fl, {
          id: "QuestBarContentExpanded_heroStatic",
          children: e => (0, o.jsx)("img", {
            ref: e,
            alt: "",
            className: R.heroAsset,
            src: ee
          })
        })
      })]
    })
  })
});

function M(e) {
  let {
    style: t,
    onClick: n
  } = e;
  return (0, _.O)({
    location: B.dr.QUESTS_BAR,
    autoTrackExposure: !0
  }) ? (0, o.jsx)(d.Button, {
    className: R.cta,
    style: t,
    color: d.Button.Colors.CUSTOM,
    fullWidth: !0,
    onClick: n,
    size: d.Button.Sizes.NONE,
    children: b.Z.Messages.QUESTS_GET_THIS_GAME
  }) : null
}
t.Z = y