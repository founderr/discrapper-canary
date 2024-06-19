n.d(e, {
  Z: function() {
    return l
  }
});
var r = n(735250);
n(470079);
var i = n(120356),
  a = n.n(i),
  h = n(481060),
  u = n(689938),
  c = n(772050);
let o = Object.freeze({
  DEFAULT: c.default,
  FILLED: c.filled
});

function l(t) {
  let {
    className: e,
    onClick: n,
    "aria-label": i,
    look: l = o.DEFAULT
  } = t;
  return (0, r.jsx)(h.Clickable, {
    "aria-label": null != i ? i : u.Z.Messages.REMOVE,
    className: a()(c.button, l, e),
    onClick: n
  })
}
l.Looks = o