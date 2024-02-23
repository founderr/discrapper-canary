"use strict";
n.r(t), n.d(t, {
  default: function() {
    return u
  }
});
var l = n("37983");
n("884691");
var a = n("446674"),
  s = n("77078"),
  i = n("629109"),
  r = n("42887");

function u() {
  let e = (0, a.useStateFromStores)([r.default], () => Object.values(r.default.getOutputDevices())),
    t = (0, a.useStateFromStores)([r.default], () => r.default.getOutputDeviceId());
  return e.map(e => {
    let {
      id: n,
      disabled: a,
      name: r
    } = e;
    return (0, l.jsx)(s.MenuRadioItem, {
      group: "output-devices",
      id: "output-".concat(n),
      disabled: a,
      label: r,
      checked: n === t,
      action: () => i.default.setOutputDevice(n)
    }, "output-".concat(n))
  })
}