"use strict";
n.r(t), n.d(t, {
  UserSettingsManager: function() {
    return s
  },
  default: function() {
    return r
  }
}), n("860677"), n("222007");
var i = n("689988"),
  a = n("845579");
let l = !1;
class s extends i.default {
  maybeShowChangeLanguageToast() {}
  setVerifyTimezone() {
    l = !0
  }
  ensureTimezoneUpdated() {
    if (!l) return;
    l = !1;
    let e = new Date().getTimezoneOffset();
    a.TimezoneOffset.getSetting() !== e && setImmediate(() => a.TimezoneOffset.updateSetting(e))
  }
  constructor(...e) {
    super(...e), this.actions = {
      POST_CONNECTION_OPEN: () => {
        this.setVerifyTimezone(), this.maybeShowChangeLanguageToast()
      },
      OVERLAY_INITIALIZE: this.setVerifyTimezone,
      USER_SETTINGS_PROTO_UPDATE: this.ensureTimezoneUpdated
    }
  }
}
var r = new s