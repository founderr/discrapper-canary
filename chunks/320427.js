n.d(t, {
  Z: function() {
    return h
  }
});
var l = n(735250);
n(470079);
var i = n(399606),
  s = n(481060),
  a = n(125268),
  r = n(673125),
  o = n(292793),
  c = n(871499),
  u = n(304388),
  d = n(689938);

function h() {
  let e = (0, i.e7)([r.Z], () => r.Z.getDrawMode()),
    t = (null == e ? void 0 : e.type) === o.W.LINE,
    n = () => {
      t ? (0, a.Bo)(null) : (0, a.Bo)({
        type: o.W.LINE
      })
    };
  return (0, l.jsx)(u.Z, {
    renderPopout: () => null,
    children: e => {
      let {
        ...i
      } = e;
      return (0, l.jsx)(c.Z, {
        ...i,
        label: d.Z.Messages.SHARED_CANVAS_DRAW_MODE_LINE,
        isActive: t,
        iconComponent: s.PencilIcon,
        onClick: n
      })
    }
  })
}