"use strict";
s.r(t);
var a = s("570140");
t.default = {
  updateSettings: function(e) {
    let {
      persistentCodesEnabled: t
    } = e;
    a.default.dispatch({
      type: "SECURE_FRAMES_SETTINGS_UPDATE",
      persistentCodesEnabled: t
    })
  }
}