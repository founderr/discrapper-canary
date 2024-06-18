"use strict";
var i = n(735250);
n(470079);
var r = n(481060),
  s = n(921944),
  o = n(689938),
  a = n(978790);
t.Z = e => {
  let {
    markAsDismissed: t
  } = e;
  return (0, i.jsxs)("div", {
    className: a.wrapper,
    children: [(0, i.jsx)(r.HeartIcon, {
      size: "md",
      color: "currentColor",
      className: a.icon
    }), (0, i.jsx)("div", {
      className: a.content,
      children: (0, i.jsx)(r.Text, {
        variant: "text-xs/normal",
        children: o.Z.Messages.EMOJI_PICKER_FAVORITES_TIP
      })
    }), (0, i.jsx)(r.Clickable, {
      onClick: () => t(s.L.UNKNOWN),
      children: (0, i.jsx)(r.CloseSmallIcon, {
        size: "md",
        color: "currentColor",
        className: a.close
      })
    })]
  })
}