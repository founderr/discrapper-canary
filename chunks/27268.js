"use strict";
n.d(t, {
  Z: function() {
    return c
  }
});
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(481060),
  l = n(278297),
  u = n(689938),
  _ = n(954886);

function c(e) {
  let {
    onPlay: t,
    className: n,
    inactive: s
  } = e, c = r.useRef(null), d = (0, i.jsx)("div", {
    className: _.iconWrapper,
    ref: c,
    children: (0, i.jsx)(a.PlayIcon, {
      size: "xs",
      color: "currentColor",
      className: o()(_.icon)
    })
  });
  return (0, i.jsx)(l.G.Consumer, {
    children: e => s || null == t ? (0, i.jsx)("div", {
      className: _.cover,
      children: d
    }) : (0, i.jsx)(a.Clickable, {
      className: o()(n, _.cover, {
        [_.active]: !e.disableInteractions
      }),
      onClick: t,
      tabIndex: 0,
      "aria-label": u.Z.Messages.PLAY,
      focusProps: {
        ringTarget: c
      },
      children: d
    })
  })
}