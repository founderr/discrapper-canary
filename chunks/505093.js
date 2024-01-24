"use strict";
n.r(t), n.d(t, {
  setUseSystemTheme: function() {
    return a
  }
});
var i = n("913144");

function a(e) {
  i.default.dispatch({
    type: "UNSYNCED_USER_SETTINGS_UPDATE",
    settings: {
      useSystemTheme: e
    }
  })
}