t.d(s, {
  Z: function() {
    return d
  }
});
var n = t(735250);
t(470079);
var i = t(120356),
  a = t.n(i),
  l = t(873546),
  r = t(481060),
  o = t(993413),
  c = t(689938),
  E = t(20439);

function d(e) {
  let {
    children: s,
    className: t,
    layoutClassName: i,
    profilePreview: d,
    previewTitle: _
  } = e, T = () => (0, n.jsx)(o.Z, {
    title: null != _ ? _ : c.Z.Messages.PROFILE_CUSTOMIZATION_PREVIEW,
    className: E.preview,
    children: d
  });
  return (0, n.jsx)("div", {
    className: t,
    children: (0, n.jsxs)(r.FormSection, {
      className: E.profileCustomizationSection,
      children: [l.tq && T(), (0, n.jsxs)("div", {
        className: a()(E.baseLayout, i),
        children: [s, !l.tq && T()]
      })]
    })
  })
}