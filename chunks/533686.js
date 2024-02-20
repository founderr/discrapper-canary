"use strict";
n.r(t), n.d(t, {
  default: function() {
    return l
  }
});
var i = n("77078"),
  a = n("913144");

function l(e, t) {
  null != t && (0, i.closeModal)(t), a.default.dispatch({
    type: "INTERACTION_IFRAME_MODAL_CLOSE",
    applicationId: e
  })
}