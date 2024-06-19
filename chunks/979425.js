n.d(t, {
  Z: function() {
    return u
  }
});
var l = n(735250);
n(470079);
var i = n(120356),
  s = n.n(i),
  a = n(481060),
  r = n(871118),
  o = n(689938),
  c = n(372453);

function u(e) {
  let {
    stream: t,
    isSmall: n,
    selected: i,
    isSelfStream: u
  } = e;
  return (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsx)(r.Z, {
      className: s()(c.absoluteFill, c.streamPreviewOpacity),
      stream: t,
      noText: !0
    }), !i && (0, l.jsxs)("div", {
      className: s()(c.content, c.streamUnavailable, {
        [c.small]: n
      }),
      children: [(0, l.jsx)(a.Text, {
        className: c.streamUnavailableText,
        color: "always-white",
        variant: n ? "text-sm/semibold" : "text-md/semibold",
        children: u ? o.Z.Messages.CONSOLE_STREAMING : o.Z.Messages.CONSOLE_STREAM_UNAVAILABLE
      }), (0, l.jsx)(a.TooltipContainer, {
        text: u ? o.Z.Messages.CONSOLE_STREAMING_TOOLTIP : o.Z.Messages.CONSOLE_STREAM_UNAVAILABLE_TOOLTIP,
        className: c.darkCircle,
        children: (0, l.jsx)("div", {
          children: (0, l.jsx)(a.ScreenSlashIcon, {
            size: "md",
            color: "currentColor",
            className: c.stopStreamIcon,
            colorClass: c.stopStreamForeground
          })
        })
      })]
    })]
  })
}