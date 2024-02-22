"use strict";
n.r(t), n.d(t, {
  default: function() {
    return p
  }
});
var l = n("37983");
n("884691");
var a = n("627445"),
  s = n.n(a),
  i = n("917351"),
  r = n.n(i),
  u = n("5667"),
  o = n("49111"),
  d = n("782340"),
  c = n("289699"),
  f = n("21719"),
  h = n("117861");
let m = null;

function p(e) {
  let {
    onDismiss: t,
    onAccept: n,
    popoutPosition: a,
    gameConsoleAccounts: i
  } = e;
  s(i.length > 0, "Rendering ConsoleNUXTooltip without a game console account"), (null == m || null == i.find(e => e.type === m)) && (m = r.shuffle(i)[0].type);
  let p = null,
    E = null;
  switch (m) {
    case o.PlatformTypes.XBOX:
      p = d.default.Messages.CONSOLE_NUX_TOOLTIP_BODY_XBOX, E = h;
      break;
    case o.PlatformTypes.PLAYSTATION:
    case o.PlatformTypes.PLAYSTATION_STAGING:
      p = d.default.Messages.CONSOLE_NUX_TOOLTIP_BODY_PS5, E = f
  }
  return (0, l.jsx)(u.default, {
    header: d.default.Messages.CONSOLE_NUX_TOOLTIP_HEADER,
    content: p,
    asset: (0, l.jsx)("img", {
      src: E,
      alt: "",
      className: c.art
    }),
    onClick: n,
    onSecondaryClick: t,
    markAsDismissed: t,
    buttonCTA: d.default.Messages.CONSOLE_NUX_TOOLTIP_ACCEPT,
    secondaryButtonCTA: d.default.Messages.CONSOLE_NUX_TOOLTIP_DISMISS,
    caretPosition: "top" === a ? u.CaretPosition.BOTTOM_LEFT : u.CaretPosition.TOP_LEFT
  })
}