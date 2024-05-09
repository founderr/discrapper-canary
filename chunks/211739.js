"use strict";
n.r(t), n.d(t, {
  categoryCollapse: function() {
    return i
  },
  categoryCollapseAll: function() {
    return r
  },
  categoryExpand: function() {
    return l
  },
  categoryExpandAll: function() {
    return a
  }
});
var s = n("570140");

function i(e) {
  s.default.dispatch({
    type: "CATEGORY_COLLAPSE",
    id: e
  })
}

function l(e) {
  s.default.dispatch({
    type: "CATEGORY_EXPAND",
    id: e
  })
}

function r(e) {
  s.default.dispatch({
    type: "CATEGORY_COLLAPSE_ALL",
    guildId: e
  })
}

function a(e) {
  s.default.dispatch({
    type: "CATEGORY_EXPAND_ALL",
    guildId: e
  })
}