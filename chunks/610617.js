"use strict";
s.r(t), s.d(t, {
  default: function() {
    return f
  }
}), s("47120");
var i = s("735250"),
  n = s("470079"),
  a = s("120356"),
  l = s.n(a),
  r = s("442837"),
  o = s("481060"),
  d = s("594174"),
  u = s("466111"),
  c = s("552958"),
  h = s("820408"),
  S = s("998799");
let N = [{
  name: "Discord Default",
  description: "Wumpus’ Favorite"
}, {
  name: "Discord Default",
  description: "Wumpus’ Favorite"
}, {
  name: "Discord Default",
  description: "Wumpus’ Favorite"
}, {
  name: "Discord Default",
  description: "Wumpus’ Favorite"
}];

function f(e) {
  let {
    onClose: t
  } = e, s = (0, r.useStateFromStores)([d.default], () => d.default.getCurrentUser()), [a, f] = n.useState(0), {
    playSound: g,
    isPlaying: m
  } = (0, c.default)(), E = N.map((e, t) => {
    var s, i, n;
    return {
      name: e.name,
      value: t,
      desc: e.description,
      radioBarClassName: (s = t, i = a, n = m, l()(S.option, {
        [S.optionPlaying]: s === i && n
      }))
    }
  });
  return null == s ? null : (0, i.jsxs)("div", {
    className: S.container,
    children: [(0, i.jsxs)("div", {
      className: S.header,
      children: [(0, i.jsx)(o.Heading, {
        variant: "heading-md/semibold",
        children: "Notification Sound"
      }), (0, i.jsx)(u.default, {
        className: S.nitroWheel
      })]
    }), (0, i.jsx)(o.Text, {
      className: S.subheader,
      variant: "text-sm/normal",
      children: "Set a unique sound for when you receive a notification from Design Buddies. Only with Nitro. This feature is currently only available on Desktop."
    }), (0, i.jsx)(o.FormItem, {
      className: S.optionsContainer,
      title: "Choose a notification sound",
      children: (0, i.jsx)(o.RadioGroup, {
        className: S.options,
        value: a,
        onChange: e => {
          g(), f(e.value)
        },
        options: E
      })
    }), (0, i.jsx)(h.default, {
      onClose: t
    }), (0, i.jsx)(o.FormDivider, {
      className: S.divider
    })]
  })
}