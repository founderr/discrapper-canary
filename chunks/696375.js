n.d(s, {
  Z: function() {
    return o
  }
});
var a = n(735250);
n(470079);
var l = n(481060),
  t = n(259580),
  i = n(739285);

function o(e) {
  let {
    url: s,
    text: n,
    onClick: o
  } = e;
  return (0, a.jsx)(l.Anchor, {
    href: s,
    onClick: o,
    className: i.externalLinkWrapper,
    children: (0, a.jsxs)(l.Clickable, {
      className: i.childButton,
      children: [(0, a.jsx)(l.Text, {
        className: i.childText,
        variant: "text-md/semibold",
        children: n
      }), (0, a.jsx)(t.Z, {
        className: i.childIcon,
        direction: t.Z.Directions.RIGHT
      })]
    })
  })
}