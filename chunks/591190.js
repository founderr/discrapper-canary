"use strict";
n.r(t);
var a = n("735250");
n("470079");
var s = n("120356"),
  i = n.n(s),
  l = n("593817");
let r = () => (0, a.jsx)("div", {
    className: l.spacer
  }),
  o = () => (0, a.jsx)("div", {
    className: l.category
  }),
  u = e => {
    let {
      width: t
    } = e;
    return (0, a.jsxs)("div", {
      className: l.channel,
      children: [(0, a.jsx)("div", {
        className: l.channelIcon
      }), (0, a.jsx)("div", {
        className: l.channelName,
        style: {
          width: "".concat(t, "px")
        }
      })]
    })
  };
t.default = e => {
  let {
    withBannerPadding: t
  } = e;
  return (0, a.jsxs)("div", {
    className: i()(l.container, {
      [l.bannerPadding]: t
    }),
    children: [(0, a.jsx)(o, {}), (0, a.jsx)(u, {
      width: 100
    }), (0, a.jsx)(u, {
      width: 74
    }), (0, a.jsx)(u, {
      width: 100
    }), (0, a.jsx)(u, {
      width: 70
    }), (0, a.jsx)(u, {
      width: 112
    }), (0, a.jsx)(u, {
      width: 175
    }), (0, a.jsx)(r, {}), (0, a.jsx)(o, {}), (0, a.jsx)(u, {
      width: 100
    }), (0, a.jsx)(u, {
      width: 74
    }), (0, a.jsx)(u, {
      width: 100
    }), (0, a.jsx)(u, {
      width: 70
    }), (0, a.jsx)(u, {
      width: 112
    }), (0, a.jsx)(u, {
      width: 56
    })]
  })
}