"use strict";
n.r(t);
var a = n("735250"),
  s = n("470079"),
  i = n("120356"),
  l = n.n(i),
  r = n("685626"),
  o = n("481060"),
  u = n("810090"),
  d = n("918701"),
  c = n("685613"),
  f = n("78826"),
  E = n("898170"),
  h = n("759853"),
  _ = n("95985"),
  C = n("743294"),
  m = n("689938"),
  p = n("481900");
t.default = function(e) {
  var t;
  let {
    className: i,
    expansionSpring: S,
    isExpanded: g,
    isExpansionAnimationComplete: I,
    quest: T,
    useReducedMotion: A
  } = e, N = s.useRef(null), v = (null === (t = T.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null, R = s.useMemo(() => (0, d.isAssetAnimated)(T.config.assets.questBarHero), [T]), O = (0, d.getQuestBarHeroAssetUrl)(T);
  return (0, a.jsxs)(r.animated.div, {
    "aria-hidden": g && I,
    className: l()(i, p.contentCollapsed, {
      [p.contentCollapsedExpanded]: g,
      [p.contentCollapsedAccepted]: v
    }),
    style: {
      opacity: S.to({
        range: [0, 1],
        output: [1, 0]
      })
    },
    children: [(0, a.jsxs)("div", {
      className: p.heroAssetWrapper,
      children: [(0, a.jsx)("div", {
        className: p.heroAssetDarken
      }), (0, a.jsx)("div", {
        className: p.heroAssetTint,
        style: {
          backgroundColor: T.config.colors.primary
        }
      }), R ? (0, a.jsx)(f.QuestsAsset, {
        id: "QuestBarV2ContentExpanded_heroAnimated",
        children: e => (0, a.jsx)(u.default, {
          ref: e,
          autoPlay: !1,
          loop: !0,
          muted: !0,
          playsInline: !0,
          className: p.heroAsset,
          controls: !1,
          children: (0, a.jsx)("source", {
            src: O,
            type: (0, d.getVideoAssetMimeType)(O)
          })
        })
      }) : (0, a.jsx)(f.QuestsAsset, {
        id: "QuestBarV2ContentExpanded_heroStatic",
        children: e => (0, a.jsx)("img", {
          ref: e,
          alt: "",
          className: p.heroAsset,
          src: O
        })
      })]
    }), v ? (0, a.jsx)("div", {
      className: p.postEnrollmentBackground,
      style: {
        backgroundImage: "linear-gradient(90deg, ".concat(C.QUEST_BAR_V2_BACKGROUND_GRADIENT_LEFT, ", ").concat(C.QUEST_BAR_V2_BACKGROUND_GRADIENT_RIGHT, ")")
      }
    }) : (0, a.jsx)(E.QuestBarBackgroundAnimation, {
      className: p.background,
      animationClassName: p.backgroundAnimation,
      quest: T,
      useReducedMotion: A
    }), (0, a.jsx)(h.default, {
      progressBarRef: N,
      quest: T
    }), (0, a.jsx)("div", {
      className: p.contentCollapsedWrapper,
      children: v ? (0, a.jsx)(_.default, {
        quest: T,
        progressBarRef: N,
        isExpanded: !1
      }) : (0, a.jsxs)("div", {
        className: p.preEnrollmentWrapper,
        children: [(0, a.jsx)("img", {
          alt: "",
          className: p.wreathIcon,
          src: n("896145")
        }), (0, a.jsx)(c.default, {
          className: p.partnerBranding,
          quest: T,
          withGameTile: !1
        }), (0, a.jsx)(o.Text, {
          color: "always-white",
          variant: "text-xs/medium",
          className: p.questAvailable,
          children: m.default.Messages.QUEST_AVAILABLE
        })]
      })
    })]
  })
}