"use strict";
var i = n(735250);
n(470079);
var r = n(120356),
  s = n.n(r),
  o = n(481060),
  a = n(278297),
  l = n(138599),
  u = n(689938),
  _ = n(875170);
t.Z = e => {
  let {
    onPlay: t,
    externalURL: n,
    className: r,
    renderLinkComponent: c,
    inactive: d,
    messageId: E,
    channelId: I
  } = e;
  return (0, i.jsx)(a.G.Consumer, {
    children: e => (0, i.jsxs)("div", {
      className: s()(r, _.wrapper, {
        [_.disableInteractions]: e.disableInteractions
      }),
      children: [d && null == t ? (0, i.jsx)("div", {
        className: _.iconWrapper,
        children: (0, i.jsx)(o.PlayIcon, {
          size: "xs",
          color: "currentColor",
          className: _.iconPlay
        })
      }) : null, null != t ? (0, i.jsx)(o.Clickable, {
        onClick: t,
        className: s()(_.iconWrapperActive),
        tabIndex: d ? -1 : 0,
        "aria-label": u.Z.Messages.PLAY,
        children: (0, i.jsx)(o.PlayIcon, {
          size: "xs",
          color: "currentColor",
          className: _.iconPlay
        })
      }) : null, null != n ? c({
        href: n,
        target: "_blank",
        rel: "noreferrer noopener",
        className: _.iconWrapperActive,
        children: (0, i.jsx)(l.Z, {
          "aria-label": u.Z.Messages.OPEN_LINK,
          className: null != t ? _.iconExternalMargins : _.iconExternal
        }),
        messageId: E,
        channelId: I
      }) : null]
    })
  })
}