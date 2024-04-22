"use strict";
a.r(t), a.d(t, {
  default: function() {
    return r
  }
});
var n = a("735250");
a("470079");
var s = a("481060"),
  l = a("570140"),
  i = a("798077");

function r() {
  (0, s.openModalLazy)(async () => {
    let {
      default: e
    } = await Promise.all([a.e("49237"), a.e("99387"), a.e("52030"), a.e("85514"), a.e("55944")]).then(a.bind(a, "266653"));
    return t => (0, n.jsx)(e, {
      ...t
    })
  }, {
    onCloseCallback: () => {
      l.default.dispatch({
        type: "CLEAR_AUTHENTICATION_ERRORS"
      }), l.default.dispatch({
        type: "LOGIN_RESET",
        isMultiAccount: !0
      })
    },
    modalKey: i.SWITCH_ACCOUNTS_MODAL_KEY
  })
}