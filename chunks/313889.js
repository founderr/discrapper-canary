"use strict";
var o, _;
n.r(t), n.d(t, {
  AutomodAlertActionType: function() {
    return o
  },
  parseAlertActionsExecution: function() {
    return u
  }
}), (_ = o || (o = {}))[_.SET_COMPLETED = 1] = "SET_COMPLETED", _[_.UNSET_COMPLETED = 2] = "UNSET_COMPLETED", _[_.DELETE_USER_MESSAGE = 3] = "DELETE_USER_MESSAGE", _[_.SUBMIT_FEEDBACK = 4] = "SUBMIT_FEEDBACK";

function u(e) {
  if (null == e) return null;
  let t = function(e) {
    if (null == e) return null;
    try {
      return JSON.parse(e)
    } catch (e) {
      return null
    }
  }(e);
  return null == t || null == t.actions ? null : (Object.keys(t.actions).forEach(e => {
    t.actions[e].actionType = e
  }), t)
}