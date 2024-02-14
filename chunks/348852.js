"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
});
var l = n("37983");
n("884691");
var a = n("446674"),
  s = n("77078"),
  i = n("629109"),
  r = n("42887");

function o() {
  let e = (0, a.useStateFromStores)([r.default], () => Object.values(r.default.getVideoDevices())),
    t = (0, a.useStateFromStores)([r.default], () => r.default.getVideoDeviceId());
  return e.map(e => {
    let {
      id: n,
      disabled: a,
      name: r
    } = e;
    return (0, l.jsx)(s.MenuRadioItem, {
      group: "video-devices",
      id: "video-device-".concat(n),
      disabled: a,
      label: r,
      checked: n === t,
      action: () => i.default.setVideoDevice(n)
    }, "video-device-".concat(n))
  })
}