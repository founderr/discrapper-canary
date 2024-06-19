n.d(t, {
  Z: function() {
    return r
  }
});
var l = n(735250);
n(470079);
var i = n(481060),
  s = n(285952),
  a = n(701612);

function r(e) {
  let {
    icon: t,
    onClick: n,
    label: r
  } = e;
  return (0, l.jsx)(i.Button, {
    look: i.Button.Looks.BLANK,
    size: i.Button.Sizes.MIN,
    className: a.button,
    onClick: n,
    children: (0, l.jsxs)(s.Z, {
      align: s.Z.Align.CENTER,
      children: [(0, l.jsx)("div", {
        className: a.buttonIcon,
        children: t
      }), (0, l.jsx)(i.Text, {
        variant: "text-md/normal",
        color: "none",
        children: r
      })]
    })
  })
}