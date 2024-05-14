"use strict";
n.r(t), n.d(t, {
  categoryCollapse: function() {
    return a
  },
  categoryCollapseAll: function() {
    return s
  },
  categoryExpand: function() {
    return i
  },
  categoryExpandAll: function() {
    return o
  }
});
var r = n("570140");

function a(e) {
  r.default.dispatch({
    type: "CATEGORY_COLLAPSE",
    id: e
  })
}

function i(e) {
  r.default.dispatch({
    type: "CATEGORY_EXPAND",
    id: e
  })
}

function s(e) {
  r.default.dispatch({
    type: "CATEGORY_COLLAPSE_ALL",
    guildId: e
  })
}

function o(e) {
  r.default.dispatch({
    type: "CATEGORY_EXPAND_ALL",
    guildId: e
  })
}