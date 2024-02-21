"use strict";
n.r(t), n.d(t, {
  default: function() {
    return f
  }
});
var a = n("37983");
n("884691");
var s = n("414456"),
  i = n.n(s),
  l = n("907002"),
  r = n("77078"),
  o = n("227231"),
  u = n("555226"),
  d = n("315130"),
  c = n("368347"),
  f = function(e) {
    var t;
    let {
      className: n,
      expansionFactor: s,
      isExpanded: f,
      isExpansionAnimationComplete: E,
      quest: h
    } = e, _ = (null === (t = h.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null;
    return (0, a.jsx)(l.animated.div, {
      "aria-hidden": f && E,
      className: i(n, c.contentCollapsed, {
        [c.contentCollapsedAccepted]: _
      }),
      style: {
        opacity: s.to({
          range: [0, 1],
          output: [1, 0]
        })
      },
      children: _ ? (0, a.jsxs)("div", {
        className: c.questProgressWrapper,
        children: [(0, a.jsx)("img", {
          alt: h.config.messages.rewardName,
          className: c.questProgressRewardTile,
          src: (0, o.getRewardAssetUrl)(h.id)
        }), (0, a.jsx)(d.default, {
          className: c.questProgressBar,
          quest: h
        })]
      }) : (0, a.jsxs)("div", {
        className: c.brandingWrapper,
        children: [(0, a.jsx)(u.default, {
          className: c.partnerBranding,
          quest: h
        }), (0, a.jsx)(r.Heading, {
          color: "always-white",
          variant: "heading-sm/medium",
          className: c.questName,
          children: h.config.messages.questName
        })]
      })
    })
  }