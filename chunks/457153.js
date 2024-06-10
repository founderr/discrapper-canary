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
  m = s("743294"),
  C = s("689938"),
  T = s("481900");
t.default = function(e) {
  var t;
  let {
    className: l,
    expansionSpring: g,
    isExpanded: A,
    isExpansionAnimationComplete: p,
    quest: N,
    useReducedMotion: S
  } = e, I = n.useRef(null), x = (null === (t = N.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null, R = n.useMemo(() => (0, d.isAssetAnimated)(N.config.assets.questBarHero), [N]), v = (0, d.getQuestBarHeroAssetUrl)(N);
  return (0, a.jsxs)(r.animated.div, {
    "aria-hidden": A && p,
    className: i()(l, T.contentCollapsed, {
      [T.contentCollapsedExpanded]: A,
      [T.contentCollapsedAccepted]: x
    }),
    style: {
      opacity: g.to({
        range: [0, 1],
        output: [1, 0]
      })
    },
    children: [(0, a.jsxs)("div", {
      className: T.heroAssetWrapper,
      children: [(0, a.jsx)("div", {
        className: T.heroAssetDarken
      }), (0, a.jsx)("div", {
        className: T.heroAssetTint,
        style: {
          backgroundColor: N.config.colors.primary
        }
      }), R ? (0, a.jsx)(E.QuestsAsset, {
        id: "QuestBarV2ContentExpanded_heroAnimated",
        children: e => (0, a.jsx)(u.default, {
          ref: e,
          autoPlay: !1,
          loop: !0,
          muted: !0,
          playsInline: !0,
          className: T.heroAsset,
          controls: !1,
          children: (0, a.jsx)("source", {
            src: v,
            type: (0, d.getVideoAssetMimeType)(v)
          })
        })
      }) : (0, a.jsx)(E.QuestsAsset, {
        id: "QuestBarV2ContentExpanded_heroStatic",
        children: e => (0, a.jsx)("img", {
          ref: e,
          alt: "",
          className: T.heroAsset,
          src: v
        })
      })]
    }), x ? (0, a.jsx)("div", {
      className: T.postEnrollmentBackground,
      style: {
        backgroundImage: "linear-gradient(90deg, ".concat(m.QUEST_BAR_V2_BACKGROUND_GRADIENT_LEFT, ", ").concat(m.QUEST_BAR_V2_BACKGROUND_GRADIENT_RIGHT, ")")
      }
    }) : (0, a.jsx)(_.QuestBarBackgroundAnimation, {
      className: T.background,
      animationClassName: T.backgroundAnimation,
      quest: N,
      useReducedMotion: S
    }), (0, a.jsx)(f.default, {
      progressBarRef: I,
      quest: N,
      isExpanded: A
    }), (0, a.jsx)("div", {
      className: T.contentCollapsedWrapper,
      children: x ? (0, a.jsx)(h.default, {
        quest: N,
        progressBarRef: I,
        isExpanded: !1
      }) : (0, a.jsxs)("div", {
        className: T.preEnrollmentWrapper,
        children: [(0, a.jsx)("img", {
          alt: "",
          className: T.wreathIcon,
          src: s("896145")
        }), (0, a.jsx)(c.default, {
          className: T.partnerBranding,
          quest: N,
          withGameTile: !1
        }), (0, a.jsx)(o.Text, {
          color: "always-white",
          variant: "text-xs/medium",
          className: T.questAvailable,
          children: C.default.Messages.QUEST_AVAILABLE
        })]
      })
    })]
  })
}