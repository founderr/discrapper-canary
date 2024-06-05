"use strict";
n.r(t), n.d(t, {
  categoryCollapse: function() {
    return l
  },
  categoryCollapseAll: function() {
    return r
  },
  categoryExpand: function() {
    return a
  },
  categoryExpandAll: function() {
    return u
  }
});
var i = n("570140");

function l(e) {
  i.default.dispatch({
    type: "CATEGORY_COLLAPSE",
    id: e
  })
}

function a(e) {
  i.default.dispatch({
    type: "CATEGORY_EXPAND",
    id: e
  })
}

function r(e) {
  i.default.dispatch({
    type: "CATEGORY_COLLAPSE_ALL",
    guildId: e
  })
}

function u(e) {
  i.default.dispatch({
    type: "CATEGORY_EXPAND_ALL",
    guildId: e
  })
}