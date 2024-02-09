"use strict";
n.r(t), n.d(t, {
  BotTypes: function() {
    return a.BotTagTypes
  },
  default: function() {
    return u
  }
});
var r = n("37983");
n("884691");
var s = n("414456"),
  i = n.n(s),
  l = n("79798"),
  a = n("988268"),
  o = n("888770"),
  u = e => {
    let {
      name: t,
      discriminator: n,
      invertBotTagColor: s,
      nameColor: a,
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
    return (0, r.jsxs)("div", {
      className: i(u, o.nameTag),
      style: v,
      children: [(0, r.jsxs)("span", {
        className: i(o.username, d),
        style: null != a ? {
          color: a
        } : void 0,
        children: [E, t]
      }), null != n ? (0, r.jsxs)("span", {
        className: null != f ? f : void 0,
        children: ["#", n]
      }) : null, null != c ? (0, r.jsx)(l.default, {
        type: c,
        invertColor: s,
        className: i(h, o.bot),
        verified: C,
        useRemSizes: p
      }) : null]
    })
  }