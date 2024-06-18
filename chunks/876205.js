"use strict";
n.d(t, {
  Z: function() {
    return p
  }
});
var i = n(735250);
n(470079);
var s = n(120356),
  l = n.n(s),
  o = n(442837),
  a = n(481060),
  r = n(556296),
  c = n(13140),
  d = n(981631),
  u = n(979708);
let h = {
  [d.kg4.TOGGLE_MUTE]: {
    legacy: {
      slash: a.MicrophoneSlashIcon,
      default: a.MicrophoneIcon
    },
    new: {
      slash: a.MicrophoneSlashIcon,
      default: a.MicrophoneIcon
    }
  }
};

function p(e) {
  let {
    value: t,
    action: n,
    shouldShow: s
  } = e, d = (0, o.e7)([r.Z], () => r.Z.getKeybindForAction(n, !1, !0)), p = (0, a.useRedesignIconContext)().enabled;
  if (null == d || !s) return null;
  let f = c.BB(d.shortcut),
    E = p ? h[n].new : h[n].legacy,
    g = t ? E.slash : E.default;
  return (0, i.jsxs)("div", {
    className: u.keybindIndicator,
    children: [(0, i.jsx)(g, {
      className: u.keybindIcon,
      size: "xs",
      color: "currentColor"
    }), (0, i.jsx)(a.Text, {
      variant: "text-xxs/semibold",
      className: l()(u.keybindIndicatorText),
      children: f
    })]
  })
}