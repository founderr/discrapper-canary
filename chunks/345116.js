"use strict";
n.r(t), n.d(t, {
  default: function() {
    return r
  }
});
var r, s = n("37983"),
  l = n("884691"),
  i = n("414456"),
  a = n.n(i),
  o = n("931138"),
  u = n("476263"),
  c = n("206453"),
  d = n("811151"),
  f = n("427459"),
  h = n("804308");
class p extends l.PureComponent {
  render() {
    let {
      tier: e
    } = this.props;
    return (0, s.jsxs)("div", {
      className: h.tierPill,
      children: [(0, s.jsx)(o.default, {
        className: h.tierPillStar,
        children: (0, s.jsx)(c.default, {
          tier: e,
          className: h.tierPillGem
        })
      }), (0, f.getTierName)(e)]
    })
  }
}
let E = e => {
  let {
    subscriptionChange: t,
    guild: n
  } = e;
  if (0 === t) return null;
  let r = Math.max(n.premiumSubscriberCount + t, 0),
    l = (0, f.getGuildTierFromAppliedBoostCount)(r, n.id),
    i = l - (0, f.getGuildTierFromAppliedBoostCount)(n.premiumSubscriberCount, n.id);
  return 0 === i ? null : (0, s.jsxs)(s.Fragment, {
    children: [(0, s.jsx)(d.default, {
      className: i > 0 ? h.levelUpIcon : h.levelDownIcon
    }), (0, s.jsx)(p, {
      tier: l
    })]
  })
};
r = class extends l.PureComponent {
  render() {
    let {
      guild: e,
      className: t,
      subscriptionChange: n
    } = this.props;
    return (0, s.jsxs)("div", {
      className: a(h.subscription, t),
      children: [(0, s.jsx)(u.default, {
        guild: e,
        size: u.default.Sizes.LARGE
      }), (0, s.jsxs)("div", {
        className: h.subscriptionInfo,
        children: [(0, s.jsx)("div", {
          className: h.guildName,
          children: e.name
        }), (0, s.jsxs)("div", {
          className: h.tierInfo,
          children: [(0, s.jsx)(p, {
            tier: e.premiumTier
          }), (0, s.jsx)(E, {
            guild: e,
            subscriptionChange: null != n ? n : 0
          })]
        })]
      })]
    })
  }
}