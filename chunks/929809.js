n.d(t, {
  H: function() {
    return a
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

function a() {
  i.Z.wait(() => i.Z.dispatch({
    type: "NUF_COMPLETE"
  }))
}