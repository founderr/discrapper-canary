"use strict";
a.r(t), a.d(t, {
  sortList: function() {
    return s
  },
  updateActiveRowKey: function() {
    return i
  },
  updateLibraryFilter: function() {
    return l
  }
});
var n = a("570140");

function s(e, t) {
  n.default.dispatch({
    type: "LIBRARY_TABLE_SORT_UPDATE",
    key: e,
    direction: t
  })
}

function l(e) {
  n.default.dispatch({
    type: "LIBRARY_APPLICATION_FILTER_UPDATE",
    query: e
  })
}

function i(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
  n.default.dispatch({
    type: "LIBRARY_TABLE_ACTIVE_ROW_ID_UPDATE",
    key: e,
    isKeyboardEvent: t
  })
}