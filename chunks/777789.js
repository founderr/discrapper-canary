"use strict";
l.r(t), l.d(t, {
  default: function() {
    return I
  }
});
var s = l("735250"),
  a = l("470079"),
  n = l("120356"),
  r = l.n(n),
  i = l("797717"),
  o = l("346656"),
  d = l("471885"),
  u = l("424625"),
  c = l("267642"),
  m = l("502097");
class C extends a.PureComponent {
  render() {
    let {
      tier: e
    } = this.props;
    return (0, s.jsxs)("div", {
      className: m.tierPill,
      children: [(0, s.jsx)(i.default, {
        className: m.tierPillStar,
        children: (0, s.jsx)(d.default, {
          tier: e,
          className: m.tierPillGem
        })
      }), (0, c.getTierName)(e)]
    })
  }
}
let S = e => {
  let {
    subscriptionChange: t,
    guild: l
  } = e;
  if (0 === t) return null;
  let a = Math.max(l.premiumSubscriberCount + t, 0),
    n = (0, c.getGuildTierFromAppliedBoostCount)(a, l.id),
    r = n - (0, c.getGuildTierFromAppliedBoostCount)(l.premiumSubscriberCount, l.id);
  return 0 === r ? null : (0, s.jsxs)(s.Fragment, {
    children: [(0, s.jsx)(u.default, {
      className: r > 0 ? m.levelUpIcon : m.levelDownIcon
    }), (0, s.jsx)(C, {
      tier: n
    })]
  })
};
class I extends a.PureComponent {
  render() {
    let {
      guild: e,
      className: t,
      subscriptionChange: l
    } = this.props;
    return (0, s.jsxs)("div", {
      className: r()(m.subscription, t),
      children: [(0, s.jsx)(o.default, {
        guild: e,
        size: o.default.Sizes.LARGE
      }), (0, s.jsxs)("div", {
        className: m.subscriptionInfo,
        children: [(0, s.jsx)("div", {
          className: m.guildName,
          children: e.name
        }), (0, s.jsxs)("div", {
          className: m.tierInfo,
          children: [(0, s.jsx)(C, {
            tier: e.premiumTier
          }), (0, s.jsx)(S, {
            guild: e,
            subscriptionChange: null != l ? l : 0
          })]
        })]
      })]
    })
  }
}