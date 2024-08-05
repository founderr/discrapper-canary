s.d(t, {
  Z: function() {
return I;
  }
});
var n = s(735250);
s(470079);
var a = s(442837),
  i = s(481060),
  r = s(846027),
  o = s(600164),
  l = s(313201),
  c = s(131951),
  d = s(36703),
  _ = s(689938),
  E = s(549856);
let u = (0, l.hQ)(),
  T = (0, l.hQ)();

function I() {
  let {
inputVolume: e,
outputVolume: t
  } = (0, a.cj)([c.Z], () => ({
inputVolume: c.Z.getInputVolume(),
outputVolume: c.Z.getOutputVolume()
  }));
  return (0, n.jsxs)(o.Z, {
className: 'volume',
children: [
  (0, n.jsxs)(o.Z.Child, {
    basis: '50%',
    children: [
      (0, n.jsx)(i.FormTitle, {
        id: u,
        tag: i.FormTitleTags.H5,
        className: E.marginBottom4,
        children: _.Z.Messages.FORM_LABEL_INPUT_VOLUME
      }),
      (0, n.jsx)(i.Slider, {
        initialValue: (0, d.P)(e),
        asValueChanges: e => r.Z.setInputVolume((0, d.A)(e)),
        'aria-labelledby': u
      })
    ]
  }),
  (0, n.jsxs)(o.Z.Child, {
    basis: '50%',
    children: [
      (0, n.jsx)(i.FormTitle, {
        id: T,
        tag: i.FormTitleTags.H5,
        className: E.marginBottom4,
        children: _.Z.Messages.FORM_LABEL_OUTPUT_VOLUME
      }),
      (0, n.jsx)(i.Slider, {
        initialValue: (0, d.P)(t),
        maxValue: 200,
        onValueRender: e => ''.concat(e.toFixed(0), '%'),
        asValueChanges: e => r.Z.setOutputVolume((0, d.A)(e)),
        'aria-labelledby': T
      })
    ]
  })
]
  });
}