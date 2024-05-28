"use strict";
n.r(t), n.d(t, {
  default: function() {
    return g
  }
});
var i = n("735250");
n("470079");
var a = n("120356"),
  l = n.n(a),
  s = n("442837"),
  o = n("331650"),
  r = n("278724"),
  d = n("481060"),
  u = n("556296"),
  c = n("357727"),
  f = n("779863"),
  h = n("13140"),
  p = n("981631"),
  E = n("480004");
let m = {
  [p.GlobalKeybindActions.TOGGLE_MUTE]: {
    legacy: {
      slash: f.default,
      default: c.default
    },
    new: {
      slash: r.MicrophoneSlashIcon,
      default: o.MicrophoneIcon
    }
  }
};

function g(e) {
  let {
    value: t,
    action: n,
    shouldShow: a
  } = e, o = (0, s.useStateFromStores)([u.default], () => u.default.getKeybindForAction(n, !1, !0)), r = (0, d.useRedesignIconContext)().enabled;
  if (null == o || !a) return null;
  let c = h.toString(o.shortcut),
    f = r ? m[n].new : m[n].legacy,
    p = t ? f.slash : f.default;
  return (0, i.jsxs)("div", {
    className: E.keybindIndicator,
    children: [(0, i.jsx)(p, {
      className: E.keybindIcon,
      width: 16,
      height: 16
    }), (0, i.jsx)(d.Text, {
      variant: "text-xxs/semibold",
      className: l()(E.keybindIndicatorText),
      children: c
    })]
  })
}