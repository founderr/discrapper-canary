n.d(t, {
  JZ: function() {
    return l
  },
  fS: function() {
    return i
  },
  wX: function() {
    return a
  }
});
var s = n(570140);

function i(e, t) {
  s.Z.dispatch({
    type: "LIBRARY_TABLE_SORT_UPDATE",
    key: e,
    direction: t
  })
}

function l(e) {
  s.Z.dispatch({
    type: "LIBRARY_APPLICATION_FILTER_UPDATE",
    query: e
  })
}

function a(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
  s.Z.dispatch({
    type: "LIBRARY_TABLE_ACTIVE_ROW_ID_UPDATE",
    key: e,
    isKeyboardEvent: t
  })
}