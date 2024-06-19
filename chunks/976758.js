t.d(s, {
  Z: function() {
    return u
  }
});
var n = t(735250);
t(470079);
var i = t(442837),
  a = t(481060),
  l = t(846027),
  r = t(131951),
  o = t(285952),
  c = t(153124),
  E = t(36703),
  d = t(689938),
  _ = t(331651);
let T = (0, c.hQ)(),
  S = (0, c.hQ)();

function u() {
  let {
    inputVolume: e,
    outputVolume: s
  } = (0, i.cj)([r.Z], () => ({
    inputVolume: r.Z.getInputVolume(),
    outputVolume: r.Z.getOutputVolume()
  }));
  return (0, n.jsxs)(o.Z, {
    className: "volume",
    children: [(0, n.jsxs)(o.Z.Child, {
      basis: "50%",
      children: [(0, n.jsx)(a.FormTitle, {
        id: T,
        tag: a.FormTitleTags.H5,
        className: _.marginBottom4,
        children: d.Z.Messages.FORM_LABEL_INPUT_VOLUME
      }), (0, n.jsx)(a.Slider, {
        initialValue: (0, E.P)(e),
        asValueChanges: e => l.Z.setInputVolume((0, E.A)(e)),
        "aria-labelledby": T
      })]
    }), (0, n.jsxs)(o.Z.Child, {
      basis: "50%",
      children: [(0, n.jsx)(a.FormTitle, {
        id: S,
        tag: a.FormTitleTags.H5,
        className: _.marginBottom4,
        children: d.Z.Messages.FORM_LABEL_OUTPUT_VOLUME
      }), (0, n.jsx)(a.Slider, {
        initialValue: (0, E.P)(s),
        maxValue: 200,
        onValueRender: e => "".concat(e.toFixed(0), "%"),
        asValueChanges: e => l.Z.setOutputVolume((0, E.A)(e)),
        "aria-labelledby": S
      })]
    })]
  })
}