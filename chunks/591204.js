"use strict";
n.d(t, {
  Z: function() {
    return a
  }
});
var i = n(735250);
n(470079);
var r = n(481060),
  s = n(895924),
  o = n(176412);

function a(e) {
  let {
    channel: t,
    application: n,
    sectionName: a,
    disabled: l,
    commandName: u
  } = e, {
    onActivityItemSelected: _,
    buttonColor: c,
    buttonText: d
  } = (0, o.P)(t, n, s.Vh.APP_LAUNCHER_APPLICATION_VIEW, a);
  return (0, i.jsx)(r.Button, {
    type: "submit",
    size: r.ButtonSizes.MEDIUM,
    color: c,
    disabled: l,
    onClick: _,
    children: null != u ? u : d
  })
}