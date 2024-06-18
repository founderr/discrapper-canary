"use strict";
n.d(t, {
  c: function() {
    return E
  }
});
var i = n(735250),
  r = n(470079),
  s = n(920906),
  o = n(442837),
  a = n(710593),
  l = n(993365),
  u = n(607070),
  _ = n(79320),
  c = n(689938),
  d = n(689085);

function E() {
  let e = [{
      keybinds: ["Spacebar", "Enter"],
      name: c.Z.Messages.DND_OPERATION_LABEL_DROP
    }, {
      keybinds: ["up", "down"],
      name: c.Z.Messages.DND_OPERATION_LABEL_MOVE
    }, {
      keybinds: ["ESC"],
      name: c.Z.Messages.DND_OPERATION_LABEL_CANCEL
    }],
    t = (0, o.e7)([u.Z], () => u.Z.useReducedMotion),
    n = (0, _.zP)();
  return (0, s.useTransition)(n, {
    enter: {
      from: {
        opacity: 0,
        y: t ? 0 : 80
      },
      to: {
        opacity: 1,
        y: 0
      }
    },
    leave: {
      opacity: 0,
      y: t ? 0 : 80
    },
    config: s.config.stiff
  })((t, n) => n ? (0, i.jsx)("div", {
    className: d.positioner,
    children: (0, i.jsx)(s.animated.div, {
      className: d.container,
      style: t,
      children: e.map((t, n) => {
        let {
          keybinds: s,
          name: o
        } = t;
        return (0, i.jsxs)(r.Fragment, {
          children: [(0, i.jsx)(l.x, {
            variant: "text-md/semibold",
            className: d.bindName,
            children: o
          }), s.map(e => (0, i.jsx)(a.M, {
            shortcut: e,
            className: d.shortcut
          }, e)), n < e.length - 1 ? (0, i.jsx)("span", {
            className: d.separator
          }) : null]
        }, o)
      })
    })
  }) : null)
}