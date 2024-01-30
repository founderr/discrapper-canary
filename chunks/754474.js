"use strict";
n.r(t), n.d(t, {
  BotTypes: function() {
    return r.BotTagTypes
  },
  default: function() {
    return d
  }
});
var l = n("37983");
n("884691");
var a = n("414456"),
  i = n.n(a),
  s = n("79798"),
  r = n("988268"),
  u = n("888770"),
  d = e => {
    let {
      name: t,
      discriminator: n,
      invertBotTagColor: a,
      nameColor: r,
      className: d,
      botType: o,
      usernameClass: c,
      discriminatorClass: f,
      botClass: E,
      botVerified: I = !1,
      style: _,
      useRemSizes: h = !1,
      usernameIcon: T
    } = e;
    return (0, l.jsxs)("div", {
      className: i(d, u.nameTag),
      style: _,
      children: [(0, l.jsxs)("span", {
        className: i(u.username, c),
        style: null != r ? {
          color: r
        } : void 0,
        children: [T, t]
      }), null != n ? (0, l.jsxs)("span", {
        className: null != f ? f : void 0,
        children: ["#", n]
      }) : null, null != o ? (0, l.jsx)(s.default, {
        type: o,
        invertColor: a,
        className: i(E, u.bot),
        verified: I,
        useRemSizes: h
      }) : null]
    })
  }