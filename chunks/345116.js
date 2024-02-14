"use strict";
n.r(t), n.d(t, {
  default: function() {
    return s
  }
});
var s, a = n("37983"),
  r = n("884691"),
  i = n("414456"),
  l = n.n(i),
  o = n("931138"),
  u = n("476263"),
  d = n("206453"),
  c = n("811151"),
  f = n("427459"),
  _ = n("858466");
class E extends r.PureComponent {
  render() {
    let {
      tier: e
    } = this.props;
    return (0, a.jsxs)("div", {
      className: _.tierPill,
      children: [(0, a.jsx)(o.default, {
        className: _.tierPillStar,
        children: (0, a.jsx)(d.default, {
          tier: e,
          className: _.tierPillGem
        })
      }), (0, f.getTierName)(e)]
    })
  }
}
let h = e => {
  let {
    subscriptionChange: t,
    guild: n
  } = e;
  if (0 === t) return null;
  let s = Math.max(n.premiumSubscriberCount + t, 0),
    r = (0, f.getGuildTierFromAppliedBoostCount)(s, n.id),
    i = r - (0, f.getGuildTierFromAppliedBoostCount)(n.premiumSubscriberCount, n.id);
  return 0 === i ? null : (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(c.default, {
      className: i > 0 ? _.levelUpIcon : _.levelDownIcon
    }), (0, a.jsx)(E, {
      tier: r
    })]
  })
};
s = class extends r.PureComponent {
  render() {
    let {
      guild: e,
      className: t,
      subscriptionChange: n
    } = this.props;
    return (0, a.jsxs)("div", {
      className: l(_.subscription, t),
      children: [(0, a.jsx)(u.default, {
        guild: e,
        size: u.default.Sizes.LARGE
      }), (0, a.jsxs)("div", {
        className: _.subscriptionInfo,
        children: [(0, a.jsx)("div", {
          className: _.guildName,
          children: e.name
        }), (0, a.jsxs)("div", {
          className: _.tierInfo,
          children: [(0, a.jsx)(E, {
            tier: e.premiumTier
          }), (0, a.jsx)(h, {
            guild: e,
            subscriptionChange: null != n ? n : 0
          })]
        })]
      })]
    })
  }
}