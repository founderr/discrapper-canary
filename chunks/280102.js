n.d(t, {
  Z: function() {
    return o
  }
});
var l = n(735250);
n(470079);
var i = n(120356),
  s = n.n(i),
  r = n(481060),
  a = n(583393);

function o(e) {
  let {
    total: t,
    users: n,
    videoLimit: i
  } = e;
  return (0, l.jsxs)("div", {
    className: a.wrapper,
    children: [(0, l.jsxs)("span", {
      className: s()(a.users, {
        [a.video]: i,
        [a.extraLong]: n >= 100
      }),
      children: [i ? (0, l.jsx)(r.VideoIcon, {
        size: "md",
        color: "currentColor",
        className: a.videoIcon
      }) : null, n.toString().padStart(2, "0")]
    }), (0, l.jsx)("span", {
      className: s()(a.total, {
        [a.extraLong]: t >= 100
      }),
      children: t.toString().padStart(2, "0")
    })]
  })
}