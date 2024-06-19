n.d(t, {
  Z: function() {
    return o
  }
});
var l = n(735250);
n(470079);
var i = n(442837),
  s = n(481060),
  a = n(846027),
  r = n(131951);

function o() {
  let e = (0, i.e7)([r.Z], () => Object.values(r.Z.getInputDevices())),
    t = (0, i.e7)([r.Z], () => r.Z.getInputDeviceId());
  return e.map(e => {
    let {
      id: n,
      disabled: i,
      name: r
    } = e;
    return (0, l.jsx)(s.MenuRadioItem, {
      id: "input-".concat(n),
      group: "input-devices",
      disabled: i,
      label: r,
      checked: n === t,
      action: () => a.Z.setInputDevice(n)
    }, "input-".concat(n))
  })
}