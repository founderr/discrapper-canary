"use strict";
a.r(t), a.d(t, {
  categoryCollapse: function() {
    return n
  },
  categoryCollapseAll: function() {
    return l
  },
  categoryExpand: function() {
    return i
  },
  categoryExpandAll: function() {
    return u
  }
});
var s = a("570140");

function n(e) {
  s.default.dispatch({
    type: "CATEGORY_COLLAPSE",
    id: e
  })
}

function i(e) {
  s.default.dispatch({
    type: "CATEGORY_EXPAND",
    id: e
  })
}

function l(e) {
  s.default.dispatch({
    type: "CATEGORY_COLLAPSE_ALL",
    guildId: e
  })
}

function u(e) {
  s.default.dispatch({
    type: "CATEGORY_EXPAND_ALL",
    guildId: e
  })
}