"use strict";
n.r(t), n.d(t, {
  default: function() {
    return l
  }
});
var i = n("735250");
n("470079");
var r = n("442837"),
  s = n("481060"),
  a = n("846027"),
  o = n("131951");

function l() {
  let e = (0, r.useStateFromStores)([o.default], () => Object.values(o.default.getVideoDevices())),
    t = (0, r.useStateFromStores)([o.default], () => o.default.getVideoDeviceId());
  return e.map(e => {
    let {
      id: n,
      disabled: r,
      name: o
    } = e;
    return (0, i.jsx)(s.MenuRadioItem, {
      group: "video-devices",
      id: "video-device-".concat(n),
      disabled: r,
      label: o,
      checked: n === t,
      action: () => a.default.setVideoDevice(n)
    }, "video-device-".concat(n))
  })
}