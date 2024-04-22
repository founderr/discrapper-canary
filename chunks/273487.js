"use strict";
a.r(t);
var n = a("706454"),
  s = a("981631");
t.default = {
  [s.RPCCommands.USER_SETTINGS_GET_LOCALE]: {
    scope: s.OAuth2Scopes.IDENTIFY,
    handler: () => ({
      locale: n.default.locale
    })
  }
}