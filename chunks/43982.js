n.d(t, {
  Z: function() {
    return E
  }
});
var l = n(735250);
n(470079);
var i = n(512722),
  s = n.n(i),
  a = n(392711),
  r = n.n(a),
  o = n(970731),
  c = n(981631),
  u = n(689938),
  d = n(623829),
  h = n(480032),
  m = n(699352);
let p = null;

function E(e) {
  let {
    onDismiss: t,
    onAccept: n,
    popoutPosition: i,
    gameConsoleAccounts: a
  } = e;
  s()(a.length > 0, "Rendering ConsoleNUXTooltip without a game console account"), (null == p || null == a.find(e => e.type === p)) && (p = r().shuffle(a)[0].type);
  let E = null,
    g = null;
  switch (p) {
    case c.ABu.XBOX:
      E = u.Z.Messages.CONSOLE_NUX_TOOLTIP_BODY_XBOX, g = m;
      break;
    case c.ABu.PLAYSTATION:
    case c.ABu.PLAYSTATION_STAGING:
      E = u.Z.Messages.CONSOLE_NUX_TOOLTIP_BODY_PS5, g = h
  }
  return (0, l.jsx)(o.ZP, {
    header: u.Z.Messages.CONSOLE_NUX_TOOLTIP_HEADER,
    content: E,
    asset: (0, l.jsx)("img", {
      src: g,
      alt: "",
      className: d.art
    }),
    onClick: n,
    onSecondaryClick: t,
    markAsDismissed: t,
    buttonCTA: u.Z.Messages.CONSOLE_NUX_TOOLTIP_ACCEPT,
    secondaryButtonCTA: u.Z.Messages.CONSOLE_NUX_TOOLTIP_DISMISS,
    caretPosition: "top" === i ? o.DF.BOTTOM_LEFT : o.DF.TOP_LEFT
  })
}