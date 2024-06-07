"use strict";
n.r(t), n.d(t, {
  default: function() {
    return r
  }
}), n("411104");
var i = n("176412");

function r(e) {
  let {
    application: t
  } = e;
  if (!(0, i.isRealApplication)(t)) throw Error("AppLauncherActivityDetail was passed the Built-in App, which is not supported.");
  return null
}