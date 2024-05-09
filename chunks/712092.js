"use strict";
t.r(L), t.d(L, {
  markSectionAcknowledged: function() {
    return C
  },
  markSectionOpened: function() {
    return s
  }
});
var a = t("570140");

function C(e) {
  a.default.dispatch({
    type: "ACTIVITIES_WHATS_NEW_ACKNOWLEDGE_SECTION",
    section: e
  })
}

function s(e) {
  a.default.dispatch({
    type: "ACTIVITIES_WHATS_NEW_MARK_OPENED_SECTION",
    section: e
  })
}