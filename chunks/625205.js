s.d(t, {
  Z: function() {
return m;
  }
}), s(47120);
var n = s(735250);
s(470079);
var a = s(392711),
  i = s.n(a),
  r = s(442837),
  o = s(780384),
  l = s(481060),
  c = s(846027),
  d = s(600164),
  _ = s(463395),
  E = s(131951),
  u = s(210887),
  T = s(962100),
  I = s(65154),
  S = s(689938),
  N = s(489130),
  C = s(549856);

function m() {
  let e, t;
  let a = (0, r.e7)([u.Z], () => u.Z.theme),
{
  canSetInputDevice: m,
  canSetOutputDevice: A,
  inputDeviceId: g,
  outputDeviceId: h
} = (0, r.cj)([E.Z], () => ({
  canSetInputDevice: E.Z.supports(I.AN.AUDIO_INPUT_DEVICE),
  canSetOutputDevice: E.Z.supports(I.AN.AUDIO_OUTPUT_DEVICE),
  inputDeviceId: E.Z.getInputDeviceId(),
  outputDeviceId: E.Z.getOutputDeviceId()
})),
O = (0, r.e7)([E.Z], () => E.Z.getInputDevices()),
p = (0, r.e7)([E.Z], () => E.Z.getOutputDevices());
  !m && (e = (0, n.jsx)(l.FormText, {
type: l.FormText.Types.DESCRIPTION,
className: C.marginTop8,
children: S.Z.Messages.BROWSER_INPUT_DEVICE_WARNING.format({
  onDownloadClick: () => (0, T.y)('Help Text Input Devices')
})
  })), !A && (t = (0, n.jsx)(l.FormText, {
type: l.FormText.Types.DESCRIPTION,
className: C.marginTop8,
children: S.Z.Messages.BROWSER_OUTPUT_DEVICE_WARNING.format({
  onDownloadClick: () => (0, T.y)('Help Text Output Devices')
})
  }));
  let R = i()(O).values().first(),
x = null != R ? R.disabled : null != e,
M = i()(p).values().first(),
f = null != M ? M.disabled : null != t;

  function D(e) {
let t, {
  label: i,
  value: r
} = e;
if (_.Z.isCertified(r)) {
  let e = (0, o.ap)(a) ? s(561259) : s(887695);
  t = (0, n.jsx)('img', {
    src: e,
    alt: 'Certified',
    className: N.deviceOptionCertified
  });
}
return (0, n.jsxs)('span', {
  className: N.deviceOption,
  children: [
    (0, n.jsx)('span', {
      className: N.deviceOptionLabel,
      children: _.Z.getCertifiedDeviceName(r, i)
    }),
    t
  ]
}, r);
  }

  function P(e) {
return D(e[0]);
  }
  return (0, n.jsxs)(d.Z, {
className: C.marginBottom20,
children: [
  (0, n.jsxs)(d.Z.Child, {
    basis: '50%',
    children: [
      (0, n.jsx)(l.FormTitle, {
        tag: l.FormTitleTags.H5,
        className: C.marginBottom8,
        children: S.Z.Messages.FORM_LABEL_INPUT_DEVICE
      }),
      (0, n.jsx)(l.SingleSelect, {
        value: g,
        onChange: e => c.Z.setInputDevice(e, 'Settings'),
        options: i().map(O, e => {
          let {
            id: t,
            name: s
          } = e;
          return {
            value: t,
            label: s
          };
        }),
        isDisabled: x,
        renderOptionValue: P,
        renderOptionLabel: D
      }),
      e
    ]
  }),
  (0, n.jsxs)(d.Z.Child, {
    basis: '50%',
    children: [
      (0, n.jsx)(l.FormTitle, {
        tag: l.FormTitleTags.H5,
        className: C.marginBottom8,
        children: S.Z.Messages.FORM_LABEL_OUTPUT_DEVICE
      }),
      (0, n.jsx)(l.SingleSelect, {
        value: h,
        onChange: e => c.Z.setOutputDevice(e, 'Settings'),
        options: i().map(p, e => {
          let {
            id: t,
            name: s
          } = e;
          return {
            value: t,
            label: s
          };
        }),
        isDisabled: f,
        renderOptionValue: P,
        renderOptionLabel: D
      }),
      t
    ]
  })
]
  });
}