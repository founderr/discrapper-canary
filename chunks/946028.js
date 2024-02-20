"use strict";
n.r(t), n.d(t, {
  createPrivateChannelIntegration: function() {
    return i
  }
});
var r = n("653047");

function i(e) {
  return {
    ...e,
    application: r.default.createFromServer(e.application)
  }
}