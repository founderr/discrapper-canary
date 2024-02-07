"use strict";
n.r(t), n.d(t, {
  BotTypes: function() {
    return a.BotTagTypes
  },
  default: function() {
    return o
  }
});
var r = n("37983");
n("884691");
var i = n("414456"),
  s = n.n(i),
  l = n("79798"),
  a = n("988268"),
  u = n("888770"),
  o = e => {
    let {
      name: t,
      discriminator: n,
      invertBotTagColor: i,
      nameColor: a,
      className: o,
      botType: c,
      usernameClass: d,
      discriminatorClass: f,
      botClass: I,
      botVerified: _ = !1,
      style: E,
      useRemSizes: T = !1,
      usernameIcon: S
    } = e;
    return (0, r.jsxs)("div", {
      className: s(o, u.nameTag),
      style: E,
      children: [(0, r.jsxs)("span", {
        className: s(u.username, d),
        style: null != a ? {
          color: a
        } : void 0,
        children: [S, t]
      }), null != n ? (0, r.jsxs)("span", {
        className: null != f ? f : void 0,
        children: ["#", n]
      }) : null, null != c ? (0, r.jsx)(l.default, {
        type: c,
        invertColor: i,
        className: s(I, u.bot),
        verified: _,
        useRemSizes: T
      }) : null]
    })
  }