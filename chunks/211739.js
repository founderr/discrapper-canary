"use strict";
n.r(t), n.d(t, {
  categoryCollapse: function() {
    return i
  },
  categoryCollapseAll: function() {
    return s
  },
  categoryExpand: function() {
    return r
  },
  categoryExpandAll: function() {
    return o
  }
});
var a = n("570140");

function i(e) {
  a.default.dispatch({
    type: "CATEGORY_COLLAPSE",
    id: e
  })
}

function r(e) {
  a.default.dispatch({
    type: "CATEGORY_EXPAND",
    id: e
  })
}

function s(e) {
  a.default.dispatch({
    type: "CATEGORY_COLLAPSE_ALL",
    guildId: e
  })
}

function o(e) {
  a.default.dispatch({
    type: "CATEGORY_EXPAND_ALL",
    guildId: e
  })
}