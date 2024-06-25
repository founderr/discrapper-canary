t.d(s, {
  Z: function() {
    return S
  }
});
var n = t(735250);
t(470079);
var a = t(442837),
  i = t(481060),
  r = t(846027),
  o = t(131951),
  l = t(285952),
  c = t(153124),
  d = t(36703),
  _ = t(689938),
  E = t(331651);
let u = (0, c.hQ)(),
  T = (0, c.hQ)();

function S() {
  let {
    inputVolume: e,
    outputVolume: s
  } = (0, a.cj)([o.Z], () => ({
    inputVolume: o.Z.getInputVolume(),
    outputVolume: o.Z.getOutputVolume()
  }));
  return (0, n.jsxs)(l.Z, {
    className: "volume",
    children: [(0, n.jsxs)(l.Z.Child, {
      basis: "50%",
      children: [(0, n.jsx)(i.FormTitle, {
        id: u,
        tag: i.FormTitleTags.H5,
        className: E.marginBottom4,
        children: _.Z.Messages.FORM_LABEL_INPUT_VOLUME
      }), (0, n.jsx)(i.Slider, {
        initialValue: (0, d.P)(e),
        asValueChanges: e => r.Z.setInputVolume((0, d.A)(e)),
        "aria-labelledby": u
      })]
    }), (0, n.jsxs)(l.Z.Child, {
      basis: "50%",
      children: [(0, n.jsx)(i.FormTitle, {
        id: T,
        tag: i.FormTitleTags.H5,
        className: E.marginBottom4,
        children: _.Z.Messages.FORM_LABEL_OUTPUT_VOLUME
      }), (0, n.jsx)(i.Slider, {
        initialValue: (0, d.P)(s),
        maxValue: 200,
        onValueRender: e => "".concat(e.toFixed(0), "%"),
        asValueChanges: e => r.Z.setOutputVolume((0, d.A)(e)),
        "aria-labelledby": T
      })]
    })]
  })
}