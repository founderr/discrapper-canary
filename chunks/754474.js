"use strict";
n.r(t), n.d(t, {
  BotTypes: function() {
    return o.BotTagTypes
  },
  default: function() {
    return u
  }
});
var s = n("37983");
n("884691");
var l = n("414456"),
  i = n.n(l),
  r = n("79798"),
  o = n("988268"),
  a = n("888770"),
  u = e => {
    let {
      name: t,
      discriminator: n,
      invertBotTagColor: l,
      nameColor: o,
      className: u,
      botType: c,
      usernameClass: d,
      discriminatorClass: f,
      botClass: h,
      botVerified: C = !1,
      style: v,
      useRemSizes: p = !1,
      usernameIcon: E
    } = e;
    return (0, s.jsxs)("div", {
      className: i(u, a.nameTag),
      style: v,
      children: [(0, s.jsxs)("span", {
        className: i(a.username, d),
        style: null != o ? {
          color: o
        } : void 0,
        children: [E, t]
      }), null != n ? (0, s.jsxs)("span", {
        className: null != f ? f : void 0,
        children: ["#", n]
      }) : null, null != c ? (0, s.jsx)(r.default, {
        type: c,
        invertColor: l,
        className: i(h, a.bot),
        verified: C,
        useRemSizes: p
      }) : null]
    })
  }