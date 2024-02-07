"use strict";
n.r(t), n.d(t, {
  BotTypes: function() {
    return a.BotTagTypes
  },
  default: function() {
    return u
  }
});
var i = n("37983");
n("884691");
var r = n("414456"),
  l = n.n(r),
  s = n("79798"),
  a = n("988268"),
  o = n("888770"),
  u = e => {
    let {
      name: t,
      discriminator: n,
      invertBotTagColor: r,
      nameColor: a,
      className: u,
      botType: d,
      usernameClass: c,
      discriminatorClass: f,
      botClass: E,
      botVerified: h = !1,
      style: _,
      useRemSizes: C = !1,
      usernameIcon: p
    } = e;
    return (0, i.jsxs)("div", {
      className: l(u, o.nameTag),
      style: _,
      children: [(0, i.jsxs)("span", {
        className: l(o.username, c),
        style: null != a ? {
          color: a
        } : void 0,
        children: [p, t]
      }), null != n ? (0, i.jsxs)("span", {
        className: null != f ? f : void 0,
        children: ["#", n]
      }) : null, null != d ? (0, i.jsx)(s.default, {
        type: d,
        invertColor: r,
        className: l(E, o.bot),
        verified: h,
        useRemSizes: C
      }) : null]
    })
  }