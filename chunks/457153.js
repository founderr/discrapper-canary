"use strict";
s.r(t);
var a = s("735250"),
  n = s("470079"),
  l = s("120356"),
  i = s.n(l),
  r = s("920906"),
  u = s("481060"),
  o = s("810090"),
  d = s("918701"),
  c = s("685613"),
  E = s("78826"),
  _ = s("898170"),
  f = s("759853"),
  h = s("95985"),
  m = s("743294"),
  T = s("689938"),
  C = s("481900");
t.default = function(e) {
  var t;
  let {
    className: l,
    expansionSpring: g,
    isExpanded: A,
    isExpansionAnimationComplete: N,
    quest: p,
    useReducedMotion: S
  } = e, I = n.useRef(null), v = (null === (t = p.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null, R = n.useMemo(() => (0, d.isAssetAnimated)(p.config.assets.questBarHero), [p]), x = (0, d.getQuestBarHeroAssetUrl)(p);
  return (0, a.jsxs)(r.animated.div, {
    "aria-hidden": A && N,
    className: i()(l, C.contentCollapsed, {
      [C.contentCollapsedExpanded]: A,
      [C.contentCollapsedAccepted]: v
    }),
    style: {
      opacity: g.to({
        range: [0, 1],
        output: [1, 0]
      })
    },
    children: [(0, a.jsxs)("div", {
      className: C.heroAssetWrapper,
      children: [(0, a.jsx)("div", {
        className: C.heroAssetDarken
      }), (0, a.jsx)("div", {
        className: C.heroAssetTint,
        style: {
          backgroundColor: p.config.colors.primary
        }
      }), R ? (0, a.jsx)(E.QuestsAsset, {
        id: "QuestBarV2ContentExpanded_heroAnimated",
        children: e => (0, a.jsx)(o.default, {
          ref: e,
          autoPlay: !1,
          loop: !0,
          muted: !0,
          playsInline: !0,
          className: C.heroAsset,
          controls: !1,
          children: (0, a.jsx)("source", {
            src: x,
            type: (0, d.getVideoAssetMimeType)(x)
          })
        })
      }) : (0, a.jsx)(E.QuestsAsset, {
        id: "QuestBarV2ContentExpanded_heroStatic",
        children: e => (0, a.jsx)("img", {
          ref: e,
          alt: "",
          className: C.heroAsset,
          src: x
        })
      })]
    }), v ? (0, a.jsx)("div", {
      className: C.postEnrollmentBackground,
      style: {
        backgroundImage: "linear-gradient(90deg, ".concat(m.QUEST_BAR_V2_BACKGROUND_GRADIENT_LEFT, ", ").concat(m.QUEST_BAR_V2_BACKGROUND_GRADIENT_RIGHT, ")")
      }
    }) : (0, a.jsx)(_.QuestBarBackgroundAnimation, {
      className: C.background,
      animationClassName: C.backgroundAnimation,
      quest: p,
      useReducedMotion: S
    }), (0, a.jsx)(f.default, {
      progressBarRef: I,
      quest: p
    }), (0, a.jsx)("div", {
      className: C.contentCollapsedWrapper,
      children: v ? (0, a.jsx)(h.default, {
        quest: p,
        progressBarRef: I,
        isExpanded: !1
      }) : (0, a.jsxs)("div", {
        className: C.preEnrollmentWrapper,
        children: [(0, a.jsx)("img", {
          alt: "",
          className: C.wreathIcon,
          src: s("896145")
        }), (0, a.jsx)(c.default, {
          className: C.partnerBranding,
          quest: p,
          withGameTile: !1
        }), (0, a.jsx)(u.Text, {
          color: "always-white",
          variant: "text-xs/medium",
          className: C.questAvailable,
          children: T.default.Messages.QUEST_AVAILABLE
        })]
      })
    })]
  })
}