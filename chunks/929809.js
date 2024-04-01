"use strict";
n.r(t), n.d(t, {
  setNewUser: function() {
    return s
  },
  setNewUserFlowCompleted: function() {
    return l
  }
});
var a = n("570140");

function s(e) {
  a.default.wait(() => a.default.dispatch({
    type: "NUF_NEW_USER",
    newUserType: e
  }))
}

function l() {
  a.default.wait(() => a.default.dispatch({
    type: "NUF_COMPLETE"
  }))
}