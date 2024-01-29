"use strict";
n.r(t), n.d(t, {
  default: function() {
    return l
  }
});
var l, i = n("37983"),
  s = n("884691"),
  r = n("414456"),
  o = n.n(r),
  a = n("931138"),
  u = n("476263"),
  d = n("206453"),
  c = n("811151"),
  f = n("427459"),
  p = n("804308");
class h extends s.PureComponent {
  render() {
    let {
      tier: e
    } = this.props;
    return (0, i.jsxs)("div", {
      className: p.tierPill,
      children: [(0, i.jsx)(a.default, {
        className: p.tierPillStar,
        children: (0, i.jsx)(d.default, {
          tier: e,
          className: p.tierPillGem
        })
      }), (0, f.getTierName)(e)]
    })
  }
}
let m = e => {
  let {
    subscriptionChange: t,
    guild: n
  } = e;
  if (0 === t) return null;
  let l = Math.max(n.premiumSubscriberCount + t, 0),
    s = (0, f.getGuildTierFromAppliedBoostCount)(l, n.id),
    r = s - (0, f.getGuildTierFromAppliedBoostCount)(n.premiumSubscriberCount, n.id);
  return 0 === r ? null : (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(c.default, {
      className: r > 0 ? p.levelUpIcon : p.levelDownIcon
    }), (0, i.jsx)(h, {
      tier: s
    })]
  })
};
l = class extends s.PureComponent {
  render() {
    let {
      guild: e,
      className: t,
      subscriptionChange: n
    } = this.props;
    return (0, i.jsxs)("div", {
      className: o(p.subscription, t),
      children: [(0, i.jsx)(u.default, {
        guild: e,
        size: u.default.Sizes.LARGE
      }), (0, i.jsxs)("div", {
        className: p.subscriptionInfo,
        children: [(0, i.jsx)("div", {
          className: p.guildName,
          children: e.name
        }), (0, i.jsxs)("div", {
          className: p.tierInfo,
          children: [(0, i.jsx)(h, {
            tier: e.premiumTier
          }), (0, i.jsx)(m, {
            guild: e,
            subscriptionChange: null != n ? n : 0
          })]
        })]
      })]
    })
  }
}