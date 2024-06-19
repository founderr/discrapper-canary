n.d(t, {
  Z: function() {
    return d
  }
});
var s = n(735250);
n(470079);
var a = n(120356),
  r = n.n(a),
  l = n(481060),
  o = n(154921),
  i = n(689938),
  c = n(548367);

function d(e) {
  let {
    onComplete: t
  } = e;
  return (0, s.jsxs)(l.Clickable, {
    className: c.container,
    onClick: t,
    children: [(0, s.jsx)(o.Z, {
      size: o.Z.Sizes.SIZE_24,
      className: c.title,
      children: i.Z.Messages.NUF_COMPLETE_TITLE
    }), (0, s.jsx)(o.Z, {
      size: o.Z.Sizes.SIZE_24,
      className: r()(c.title, c.subtitle),
      children: i.Z.Messages.NUF_COMPLETE_SUBTITLE
    }), (0, s.jsx)(l.Button, {
      color: l.Button.Colors.WHITE,
      onClick: t,
      children: i.Z.Messages.NUF_COMPLETE_CTA
    })]
  })
}