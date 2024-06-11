"use strict";
s.r(t), s.d(t, {
  default: function() {
    return n
  },
  useShouldWarnAuthorizedAppTwoWay: function() {
    return i
  }
});
var a = s("159277");

function n(e) {
  return a.ConsoleOAuthApplications.XBOX_APPLICATION_ID === e || a.ConsoleOAuthApplicationsSets.PLAYSTATION_APPLICATION_IDS.has(e)
}

function i(e) {
  return n(e)
}