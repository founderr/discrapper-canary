"use strict";
s.r(t), s.d(t, {
  default: function() {
    return d
  }
}), s("47120");
var i = s("735250"),
  a = s("470079"),
  n = s("481060"),
  l = s("466111"),
  r = s("998799");

function d() {
  let [e, t] = a.useState(0);
  return (0, i.jsxs)("div", {
    children: [(0, i.jsxs)("div", {
      className: r.header,
      children: [(0, i.jsx)(n.Heading, {
        variant: "heading-md/semibold",
        children: "Notification Sound"
      }), (0, i.jsx)(l.default, {
        className: r.nitroWheel
      })]
    }), (0, i.jsx)(n.Text, {
      className: r.subheader,
      variant: "text-sm/normal",
      children: "Set a unique sound for when you receive a notification from Design Buddies. Only with Nitro. This feature is currently only available on Desktop."
    }), (0, i.jsx)(n.FormItem, {
      className: r.optionsContainer,
      title: "Choose a notification sound",
      children: (0, i.jsx)(n.RadioGroup, {
        className: r.options,
        value: e,
        onChange: e => t(e.value),
        options: [{
          name: "Discord Default",
          value: 0,
          desc: "Wumpus’ Favorite"
        }, {
          name: "Discord Default",
          value: 1,
          desc: "Wumpus’ Favorite"
        }, {
          name: "Discord Default",
          value: 2,
          desc: "Wumpus’ Favorite"
        }, {
          name: "Discord Default",
          value: 3,
          desc: "Wumpus’ Favorite"
        }]
      })
    })]
  })
}