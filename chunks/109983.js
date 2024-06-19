t.d(s, {
  Z: function() {
    return o
  }
});
var a = t(735250);
t(470079);
var l = t(481060),
  n = t(504031),
  i = t(216019);

function o(e) {
  let {
    icon: s,
    message: t,
    onClick: o,
    autoFocus: r
  } = e;
  return (0, a.jsxs)("button", {
    className: n.container,
    onClick: o,
    autoFocus: r,
    children: [(0, a.jsx)("img", {
      className: n.icon,
      alt: "",
      src: s
    }), (0, a.jsx)(l.Text, {
      className: n.text,
      variant: "text-md/bold",
      children: t
    }), (0, a.jsx)("img", {
      className: n.arrow,
      alt: "",
      src: i
    })]
  })
}