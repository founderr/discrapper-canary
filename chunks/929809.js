"use strict";
a.r(t), a.d(t, {
  setNewUser: function() {
    return s
  },
  setNewUserFlowCompleted: function() {
    return l
  }
});
var n = a("570140");

function s(e) {
  n.default.wait(() => n.default.dispatch({
    type: "NUF_NEW_USER",
    newUserType: e
  }))
}

function l() {
  n.default.wait(() => n.default.dispatch({
    type: "NUF_COMPLETE"
  }))
}