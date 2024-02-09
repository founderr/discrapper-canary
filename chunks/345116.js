"use strict";
n.r(t), n.d(t, {
  default: function() {
    return s
  }
});
var s, r = n("37983"),
  l = n("884691"),
  a = n("414456"),
  i = n.n(a),
  o = n("931138"),
  u = n("476263"),
  c = n("206453"),
  d = n("811151"),
  f = n("427459"),
  h = n("804308");
class E extends l.PureComponent {
  render() {
    let {
      tier: e
    } = this.props;
    return (0, r.jsxs)("div", {
      className: h.tierPill,
      children: [(0, r.jsx)(o.default, {
        className: h.tierPillStar,
        children: (0, r.jsx)(c.default, {
          tier: e,
          className: h.tierPillGem
        })
      }), (0, f.getTierName)(e)]
    })
  }
}
let _ = e => {
  let {
    subscriptionChange: t,
    guild: n
  } = e;
  if (0 === t) return null;
  let s = Math.max(n.premiumSubscriberCount + t, 0),
    l = (0, f.getGuildTierFromAppliedBoostCount)(s, n.id),
    a = l - (0, f.getGuildTierFromAppliedBoostCount)(n.premiumSubscriberCount, n.id);
  return 0 === a ? null : (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(d.default, {
      className: a > 0 ? h.levelUpIcon : h.levelDownIcon
    }), (0, r.jsx)(E, {
      tier: l
    })]
  })
};
s = class extends l.PureComponent {
  render() {
    let {
      guild: e,
      className: t,
      subscriptionChange: n
    } = this.props;
    return (0, r.jsxs)("div", {
      className: i(h.subscription, t),
      children: [(0, r.jsx)(u.default, {
        guild: e,
        size: u.default.Sizes.LARGE
      }), (0, r.jsxs)("div", {
        className: h.subscriptionInfo,
        children: [(0, r.jsx)("div", {
          className: h.guildName,
          children: e.name
        }), (0, r.jsxs)("div", {
          className: h.tierInfo,
          children: [(0, r.jsx)(E, {
            tier: e.premiumTier
          }), (0, r.jsx)(_, {
            guild: e,
            subscriptionChange: null != n ? n : 0
          })]
        })]
      })]
    })
  }
}