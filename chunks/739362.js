"use strict";
n.r(t), n.d(t, {
  default: function() {
    return s
  }
}), n("222007");
var i = n("689988"),
  a = n("751520");
class l extends i.default {
  constructor(...e) {
    super(...e), this.actions = {
      USER_SETTINGS_PROTO_UPDATE: a.refreshSearchTokens,
      I18N_LOAD_SUCCESS: a.refreshSearchTokens,
      POST_CONNECTION_OPEN: a.refreshSearchTokens
    }
  }
}
var s = new l