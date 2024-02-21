"use strict";
n.r(t), n.d(t, {
  default: function() {
    return I
  }
}), n("222007");
var a = n("37983"),
  s = n("884691"),
  l = n("414456"),
  i = n.n(l),
  r = n("907002"),
  o = n("446674"),
  u = n("77078"),
  d = n("206230"),
  c = n("471671"),
  f = n("181114"),
  E = n("227231"),
  h = n("555226"),
  _ = n("315130"),
  C = n("368347"),
  I = function(e) {
    var t;
    let {
      className: n,
      expansionFactor: l,
      isExpanded: I,
      isExpansionAnimationComplete: S,
      quest: m
    } = e, p = (null === (t = m.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null, T = (0, o.useStateFromStores)([d.default], () => d.default.useReducedMotion), g = (0, o.useStateFromStores)([c.default], () => c.default.isFocused()), [A, N] = s.useState(!1);
    return s.useEffect(() => {
      g ? N(!p) : N(!1)
    }, [g, p]), (0, a.jsx)(r.animated.div, {
      "aria-hidden": I && S,
      className: i(n, C.contentCollapsed, {
        [C.contentCollapsedAccepted]: p
      }),
      style: {
        opacity: l.to({
          range: [0, 1],
          output: [1, 0]
        })
      },
      children: p ? (0, a.jsxs)("div", {
        className: C.questProgressWrapper,
        children: [(0, a.jsx)("img", {
          alt: m.config.messages.rewardName,
          className: C.questProgressRewardTile,
          src: (0, E.getRewardAssetUrl)(m.id)
        }), (0, a.jsx)(_.default, {
          className: C.questProgressBar,
          quest: m
        })]
      }) : (0, a.jsxs)(a.Fragment, {
        children: [!T && A && (0, a.jsx)(f.Shine, {
          className: C.shine
        }), (0, a.jsxs)("div", {
          className: C.brandingWrapper,
          children: [(0, a.jsx)(h.default, {
            className: C.partnerBranding,
            quest: m
          }), (0, a.jsx)(u.Heading, {
            color: "always-white",
            variant: "heading-sm/medium",
            className: C.questName,
            children: m.config.messages.questName
          })]
        })]
      })
    })
  }