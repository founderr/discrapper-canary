"use strict";
n.r(t);
var a = n("735250"),
  s = n("470079"),
  l = n("120356"),
  i = n.n(l),
  r = n("685626"),
  o = n("481060"),
  u = n("810090"),
  d = n("918701"),
  c = n("685613"),
  f = n("78826"),
  E = n("898170"),
  h = n("95985"),
  _ = n("743294"),
  C = n("689938"),
  m = n("481900");
t.default = function(e) {
  var t;
  let {
    className: l,
    expansionSpring: S,
    isExpanded: p,
    isExpansionAnimationComplete: g,
    quest: I,
    useReducedMotion: T
  } = e, A = (null === (t = I.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null, N = s.useMemo(() => (0, d.isAssetAnimated)(I.config.assets.questBarHero), [I]), v = (0, d.getQuestBarHeroAssetUrl)(I);
  return (0, a.jsxs)(r.animated.div, {
    "aria-hidden": p && g,
    className: i()(l, m.contentCollapsed, {
      [m.contentCollapsedExpanded]: p,
      [m.contentCollapsedAccepted]: A
    }),
    style: {
      opacity: S.to({
        range: [0, 1],
        output: [1, 0]
      })
    },
    children: [(0, a.jsxs)("div", {
      className: m.heroAssetWrapper,
      children: [(0, a.jsx)("div", {
        className: m.heroAssetDarken
      }), (0, a.jsx)("div", {
        className: m.heroAssetTint,
        style: {
          backgroundColor: I.config.colors.primary
        }
      }), N ? (0, a.jsx)(f.QuestsAsset, {
        id: "QuestBarV2ContentExpanded_heroAnimated",
        children: e => (0, a.jsx)(u.default, {
          ref: e,
          autoPlay: !1,
          loop: !0,
          muted: !0,
          playsInline: !0,
          className: m.heroAsset,
          controls: !1,
          children: (0, a.jsx)("source", {
            src: v,
            type: (0, d.getVideoAssetMimeType)(v)
          })
        })
      }) : (0, a.jsx)(f.QuestsAsset, {
        id: "QuestBarV2ContentExpanded_heroStatic",
        children: e => (0, a.jsx)("img", {
          ref: e,
          alt: "",
          className: m.heroAsset,
          src: v
        })
      })]
    }), A ? (0, a.jsx)("div", {
      className: m.postEnrollmentBackground,
      style: {
        backgroundImage: "linear-gradient(90deg, ".concat(_.QUEST_BAR_V2_BACKGROUND_GRADIENT_LEFT, ", ").concat(_.QUEST_BAR_V2_BACKGROUND_GRADIENT_RIGHT, ")")
      }
    }) : (0, a.jsx)(E.QuestBarBackgroundAnimation, {
      className: m.background,
      animationClassName: m.backgroundAnimation,
      quest: I,
      useReducedMotion: T
    }), (0, a.jsx)("div", {
      className: m.contentCollapsedWrapper,
      children: A ? (0, a.jsx)(h.default, {
        quest: I,
        isExpanded: !1
      }) : (0, a.jsxs)("div", {
        className: m.preEnrollmentWrapper,
        children: [(0, a.jsx)("img", {
          alt: "",
          className: m.wreathIcon,
          src: n("896145")
        }), (0, a.jsx)(c.default, {
          className: m.partnerBranding,
          quest: I,
          withGameTile: !1
        }), (0, a.jsx)(o.Text, {
          color: "always-white",
          variant: "text-xs/medium",
          className: m.questAvailable,
          children: C.default.Messages.QUEST_AVAILABLE
        })]
      })
    })]
  })
}