"use strict";
s.r(t);
var a = s("735250"),
  n = s("470079"),
  l = s("120356"),
  i = s.n(l),
  r = s("920906"),
  o = s("481060"),
  u = s("810090"),
  d = s("918701"),
  c = s("685613"),
  E = s("78826"),
  _ = s("898170"),
  f = s("759853"),
  h = s("95985"),
  T = s("743294"),
  m = s("689938"),
  C = s("481900");
t.default = function(e) {
  var t;
  let {
    className: l,
    expansionSpring: g,
    isExpanded: A,
    isExpansionAnimationComplete: p,
    quest: N,
    useReducedMotion: I
  } = e, S = n.useRef(null), R = (null === (t = N.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null, v = n.useMemo(() => (0, d.isAssetAnimated)(N.config.assets.questBarHero), [N]), x = (0, d.getQuestBarHeroAssetUrl)(N);
  return (0, a.jsxs)(r.animated.div, {
    "aria-hidden": A && p,
    className: i()(l, C.contentCollapsed, {
      [C.contentCollapsedExpanded]: A,
      [C.contentCollapsedAccepted]: R
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
          backgroundColor: N.config.colors.primary
        }
      }), v ? (0, a.jsx)(E.QuestsAsset, {
        id: "QuestBarV2ContentExpanded_heroAnimated",
        children: e => (0, a.jsx)(u.default, {
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
    }), R ? (0, a.jsx)("div", {
      className: C.postEnrollmentBackground,
      style: {
        backgroundImage: "linear-gradient(90deg, ".concat(T.QUEST_BAR_V2_BACKGROUND_GRADIENT_LEFT, ", ").concat(T.QUEST_BAR_V2_BACKGROUND_GRADIENT_RIGHT, ")")
      }
    }) : (0, a.jsx)(_.QuestBarBackgroundAnimation, {
      className: C.background,
      animationClassName: C.backgroundAnimation,
      quest: N,
      useReducedMotion: I
    }), (0, a.jsx)(f.default, {
      progressBarRef: S,
      quest: N,
      isExpanded: A
    }), (0, a.jsx)("div", {
      className: C.contentCollapsedWrapper,
      children: R ? (0, a.jsx)(h.default, {
        quest: N,
        progressBarRef: S,
        isExpanded: !1
      }) : (0, a.jsxs)("div", {
        className: C.preEnrollmentWrapper,
        children: [(0, a.jsx)("img", {
          alt: "",
          className: C.wreathIcon,
          src: s("896145")
        }), (0, a.jsx)(c.default, {
          className: C.partnerBranding,
          quest: N,
          withGameTile: !1
        }), (0, a.jsx)(o.Text, {
          color: "always-white",
          variant: "text-xs/medium",
          className: C.questAvailable,
          children: m.default.Messages.QUEST_AVAILABLE
        })]
      })
    })]
  })
}