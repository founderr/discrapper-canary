"use strict";
s.r(t);
var n = s("735250"),
  a = s("470079"),
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
  C = s("743294"),
  m = s("689938"),
  T = s("481900");
let g = a.forwardRef(function(e, t) {
  var l;
  let {
    className: g,
    expansionSpring: A,
    isExpanded: p,
    isExpansionAnimationComplete: N,
    quest: S,
    useReducedMotion: I
  } = e, x = a.useRef(null), R = (null === (l = S.userStatus) || void 0 === l ? void 0 : l.enrolledAt) != null, v = a.useMemo(() => (0, d.isAssetAnimated)(S.config.assets.questBarHero), [S]), O = (0, d.getQuestBarHeroAssetUrl)(S);
  return (0, n.jsxs)(r.animated.div, {
    ref: t,
    "aria-hidden": p && N,
    className: i()(g, T.contentCollapsed, {
      [T.contentCollapsedExpanded]: p,
      [T.contentCollapsedAccepted]: R
    }),
    style: {
      opacity: A.to({
        range: [0, 1],
        output: [1, 0]
      })
    },
    children: [(0, n.jsxs)("div", {
      className: T.heroAssetWrapper,
      children: [(0, n.jsx)("div", {
        className: T.heroAssetDarken
      }), (0, n.jsx)("div", {
        className: T.heroAssetTint,
        style: {
          backgroundColor: S.config.colors.primary
        }
      }), v ? (0, n.jsx)(E.QuestsAsset, {
        id: "QuestBarV2ContentExpanded_heroAnimated",
        children: e => (0, n.jsx)(u.default, {
          ref: e,
          autoPlay: !1,
          loop: !0,
          muted: !0,
          playsInline: !0,
          className: T.heroAsset,
          controls: !1,
          children: (0, n.jsx)("source", {
            src: O,
            type: (0, d.getVideoAssetMimeType)(O)
          })
        })
      }) : (0, n.jsx)(E.QuestsAsset, {
        id: "QuestBarV2ContentExpanded_heroStatic",
        children: e => (0, n.jsx)("img", {
          ref: e,
          alt: "",
          className: T.heroAsset,
          src: O
        })
      })]
    }), R ? (0, n.jsx)("div", {
      className: T.postEnrollmentBackground,
      style: {
        backgroundImage: "linear-gradient(90deg, ".concat(C.QUEST_BAR_V2_BACKGROUND_GRADIENT_LEFT, ", ").concat(C.QUEST_BAR_V2_BACKGROUND_GRADIENT_RIGHT, ")")
      }
    }) : (0, n.jsx)(_.QuestBarBackgroundAnimation, {
      className: T.background,
      animationClassName: T.backgroundAnimation,
      quest: S,
      useReducedMotion: I
    }), (0, n.jsx)(f.default, {
      progressBarRef: x,
      quest: S,
      isExpanded: p
    }), (0, n.jsx)("div", {
      className: T.contentCollapsedWrapper,
      children: R ? (0, n.jsx)(h.default, {
        quest: S,
        progressBarRef: x,
        isExpanded: !1
      }) : (0, n.jsxs)("div", {
        className: T.preEnrollmentWrapper,
        children: [(0, n.jsx)("img", {
          alt: "",
          className: T.wreathIcon,
          src: s("858595")
        }), (0, n.jsx)(c.default, {
          className: T.partnerBranding,
          quest: S,
          withGameTile: !1
        }), (0, n.jsx)(o.Text, {
          color: "always-white",
          variant: "text-xs/medium",
          className: T.questAvailable,
          children: m.default.Messages.QUEST_AVAILABLE
        })]
      })
    })]
  })
});
t.default = g