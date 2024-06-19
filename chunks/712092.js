C.d(e, {
  E: function() {
    return t
  },
  Z: function() {
    return s
  }
});
var a = C(570140);

function s(L) {
  a.Z.dispatch({
    type: "ACTIVITIES_WHATS_NEW_ACKNOWLEDGE_SECTION",
    section: L
  })
}

function t(L) {
  a.Z.dispatch({
    type: "ACTIVITIES_WHATS_NEW_MARK_OPENED_SECTION",
    section: L
  })
}