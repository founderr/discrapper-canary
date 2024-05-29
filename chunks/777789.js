"use strict";
t.r(l), t.d(l, {
  default: function() {
    return f
  }
});
var s = t("735250"),
  a = t("470079"),
  n = t("120356"),
  r = t.n(n),
  i = t("797717"),
  o = t("346656"),
  d = t("471885"),
  u = t("424625"),
  c = t("267642"),
  C = t("502097");
class m extends a.PureComponent {
  render() {
    let {
      tier: e
    } = this.props;
    return (0, s.jsxs)("div", {
      className: C.tierPill,
      children: [(0, s.jsx)(i.default, {
        className: C.tierPillStar,
        children: (0, s.jsx)(d.default, {
          tier: e,
          className: C.tierPillGem
        })
      }), (0, c.getTierName)(e)]
    })
  }
}
let S = e => {
  let {
    subscriptionChange: l,
    guild: t
  } = e;
  if (0 === l) return null;
  let a = Math.max(t.premiumSubscriberCount + l, 0),
    n = (0, c.getGuildTierFromAppliedBoostCount)(a, t.id),
    r = n - (0, c.getGuildTierFromAppliedBoostCount)(t.premiumSubscriberCount, t.id);
  return 0 === r ? null : (0, s.jsxs)(s.Fragment, {
    children: [(0, s.jsx)(u.default, {
      className: r > 0 ? C.levelUpIcon : C.levelDownIcon
    }), (0, s.jsx)(m, {
      tier: n
    })]
  })
};
class f extends a.PureComponent {
  render() {
    let {
      guild: e,
      className: l,
      subscriptionChange: t
    } = this.props;
    return (0, s.jsxs)("div", {
      className: r()(C.subscription, l),
      children: [(0, s.jsx)(o.default, {
        guild: e,
        size: o.default.Sizes.LARGE
      }), (0, s.jsxs)("div", {
        className: C.subscriptionInfo,
        children: [(0, s.jsx)("div", {
          className: C.guildName,
          children: e.name
        }), (0, s.jsxs)("div", {
          className: C.tierInfo,
          children: [(0, s.jsx)(m, {
            tier: e.premiumTier
          }), (0, s.jsx)(S, {
            guild: e,
            subscriptionChange: null != t ? t : 0
          })]
        })]
      })]
    })
  }
}