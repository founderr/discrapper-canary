n.d(t, {
  H: function() {
    return l
  },
  c: function() {
    return s
  }
});
var i = n(570140);

function s(e) {
  i.Z.wait(() => i.Z.dispatch({
    type: "NUF_NEW_USER",
    newUserType: e
  }))
}

function l() {
  i.Z.wait(() => i.Z.dispatch({
    type: "NUF_COMPLETE"
  }))
}