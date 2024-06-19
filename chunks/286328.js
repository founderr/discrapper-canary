n.d(t, {
  Z: function() {
    return o
  }
});
var l = n(735250);
n(470079);
var i = n(970731),
  s = n(689938),
  r = n(272003),
  a = n(56512);

function o(e) {
  let {
    markAsDismissed: t
  } = e;
  return (0, l.jsx)(i.ZP, {
    header: s.Z.Messages.BROADCASTING_BROADCASTER_TOOLTIP_HEADER,
    content: s.Z.Messages.BROADCASTING_BROADCASTER_TOOLTIP_BODY,
    buttonCTA: s.Z.Messages.GOT_IT,
    onClick: () => {},
    markAsDismissed: t,
    caretPosition: i.ZP.CaretPosition.BOTTOM_CENTER,
    asset: (0, l.jsx)("img", {
      src: a,
      alt: "",
      className: r.image
    }),
    className: r.content
  })
}