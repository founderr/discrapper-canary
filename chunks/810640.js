"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
});
var l = n("37983");
n("884691");
var a = n("414456"),
  s = n.n(a),
  i = n("77078"),
  r = n("673527"),
  o = n("821391"),
  u = n("782340"),
  d = n("532351");

function c(e) {
  let {
    stream: t,
    isSmall: n,
    selected: a,
    isSelfStream: c
  } = e;
  return (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsx)(r.default, {
      className: s(d.absoluteFill, d.streamPreviewOpacity),
      stream: t,
      noText: !0
    }), !a && (0, l.jsxs)("div", {
      className: s(d.content, d.streamUnavailable, {
        [d.small]: n
      }),
      children: [(0, l.jsx)(i.Text, {
        className: d.streamUnavailableText,
        color: "always-white",
        variant: n ? "text-sm/semibold" : "text-md/semibold",
        children: c ? u.default.Messages.CONSOLE_STREAMING : u.default.Messages.CONSOLE_STREAM_UNAVAILABLE
      }), (0, l.jsx)(i.TooltipContainer, {
        text: c ? u.default.Messages.CONSOLE_STREAMING_TOOLTIP : u.default.Messages.CONSOLE_STREAM_UNAVAILABLE_TOOLTIP,
        className: d.darkCircle,
        children: (0, l.jsx)("div", {
          children: (0, l.jsx)(o.default, {
            className: d.stopStreamIcon,
            foreground: d.stopStreamForeground
          })
        })
      })]
    })]
  })
}