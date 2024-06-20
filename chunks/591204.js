"use strict";
n.d(t, {
  Z: function() {
    return o
  }
});
var i = n(735250);
n(470079);
var r = n(481060),
  s = n(176412);

function o(e) {
  let {
    channel: t,
    application: n,
    sectionName: o,
    disabled: a,
    commandName: l
  } = e, {
    onActivityItemSelected: u,
    buttonColor: _,
    buttonText: c
  } = (0, s.P)(t, n, o);
  return (0, i.jsx)(r.Button, {
    type: "submit",
    size: r.ButtonSizes.MEDIUM,
    color: _,
    disabled: a,
    onClick: u,
    children: null != l ? l : c
  })
}