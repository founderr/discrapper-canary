"use strict";
n.r(t);
var a = n("735250"),
  s = n("470079"),
  i = n("120356"),
  l = n.n(i),
  r = n("685626"),
  o = n("481060"),
  u = n("810090"),
  d = n("497505"),
  c = n("918701"),
  f = n("685613"),
  E = n("340100"),
  h = n("644646"),
  _ = n("78826"),
  C = n("898170"),
  m = n("689938"),
  S = n("481900");
t.default = function(e) {
  var t, i, p;
  let {
    className: g,
    expansionSpring: I,
    isExpanded: T,
    isExpansionAnimationComplete: A,
    quest: N,
    useReducedMotion: v
  } = e, R = (null === (t = N.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null, L = (null !== (p = null === (i = N.userStatus) || void 0 === i ? void 0 : i.streamProgressSeconds) && void 0 !== p ? p : 0) > 0, O = s.useMemo(() => (0, c.isAssetAnimated)(N.config.assets.questBarHero), [N]), y = (0, c.getQuestBarHeroAssetUrl)(N);
  return (0, a.jsxs)(r.animated.div, {
    "aria-hidden": T && A,
    className: l()(g, S.contentCollapsed, {
      [S.contentCollapsedExpanded]: T,
      [S.contentCollapsedAccepted]: R
    }),
    style: {
      opacity: I.to({
        range: [0, 1],
        output: [1, 0]
      })
    },
    children: [(0, a.jsxs)("div", {
      className: S.heroAssetWrapper,
      children: [(0, a.jsx)("div", {
        className: S.heroAssetDarken
      }), (0, a.jsx)("div", {
        className: S.heroAssetTint,
        style: {
          backgroundColor: N.config.colors.primary
        }
      }), O ? (0, a.jsx)(_.QuestsAsset, {
        id: "QuestBarV2ContentExpanded_heroAnimated",
        children: e => (0, a.jsx)(u.default, {
          ref: e,
          autoPlay: !1,
          loop: !0,
          muted: !0,
          playsInline: !0,
          className: S.heroAsset,
          controls: !1,
          children: (0, a.jsx)("source", {
            src: y,
            type: (0, c.getVideoAssetMimeType)(y)
          })
        })
      }) : (0, a.jsx)(_.QuestsAsset, {
        id: "QuestBarV2ContentExpanded_heroStatic",
        children: e => (0, a.jsx)("img", {
          ref: e,
          alt: "",
          className: S.heroAsset,
          src: y
        })
      })]
    }), (0, a.jsx)(C.QuestBarBackgroundAnimation, {
      className: S.background,
      animationClassName: S.backgroundAnimation,
      quest: N,
      useReducedMotion: v
    }), (0, a.jsx)("div", {
      className: S.contentCollapsedWrapper,
      children: R ? (0, a.jsxs)("div", {
        className: S.questProgressWrapper,
        children: [(0, a.jsx)(h.default, {
          className: S.questProgressRewardTile,
          quest: N,
          questContent: d.QuestContent.QUEST_BAR,
          autoplay: !1
        }), L ? (0, a.jsx)(E.default, {
          className: S.questProgressBar,
          quest: N
        }) : (0, a.jsx)(o.Text, {
          className: S.questProgressHint,
          color: "always-white",
          variant: "text-sm/semibold",
          children: m.default.Messages.QUESTS_COMPLETION_PROGRESS_NOT_STARTED
        })]
      }) : (0, a.jsxs)("div", {
        className: S.preEnrollmentWrapper,
        children: [(0, a.jsx)("img", {
          alt: "",
          className: S.wreathIcon,
          src: n("896145")
        }), (0, a.jsx)(f.default, {
          className: S.partnerBranding,
          quest: N,
          withGameTile: !1
        }), (0, a.jsx)(o.Text, {
          color: "always-white",
          variant: "text-xs/medium",
          className: S.questAvailable,
          children: m.default.Messages.QUEST_AVAILABLE
        })]
      })
    })]
  })
}