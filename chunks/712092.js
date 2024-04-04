"use strict";
a.r(e), a.d(e, {
  markSectionAcknowledged: function() {
    return t
  },
  markSectionOpened: function() {
    return s
  }
});
var C = a("570140");

function t(L) {
  C.default.dispatch({
    type: "ACTIVITIES_WHATS_NEW_ACKNOWLEDGE_SECTION",
    section: L
  })
}

function s(L) {
  C.default.dispatch({
    type: "ACTIVITIES_WHATS_NEW_MARK_OPENED_SECTION",
    section: L
  })
}