"use strict";
s.r(t), s.d(t, {
  setIsSettingSearchActive: function() {
    return i
  },
  setSettingSearchQuery: function() {
    return n
  },
  useSettingSearchQuery: function() {
    return l
  }
});
let a = (0, s("652874").default)(() => ({
  query: "",
  isActive: !1,
  selected: null
}));

function n(e) {
  a.setState({
    query: e
  })
}

function i(e) {
  a.setState({
    isActive: e
  })
}

function l() {
  return a().query
}