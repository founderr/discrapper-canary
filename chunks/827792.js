"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
});
var l = n("37983");
n("884691");
var a = n("77078"),
  s = n("913144"),
  i = n("316272"),
  r = n("493814"),
  u = n("218484");
let o = "INVITE_MODAL_KEY";
class d extends i.default {
  _initialize() {
    s.default.subscribe("INVITE_MODAL_OPEN", this.handleOpenModal), s.default.subscribe("INVITE_MODAL_CLOSE", this.handleCloseModal)
  }
  _terminate() {
    (0, a.closeModal)(o), s.default.subscribe("INVITE_MODAL_OPEN", this.handleOpenModal), s.default.subscribe("INVITE_MODAL_CLOSE", this.handleCloseModal)
  }
  handleOpenModal() {
    u.default.isOpen() && !(0, a.hasModalOpen)(o) && (0, a.openModal)(e => (0, l.jsx)(r.default, {
      ...e
    }), {
      modalKey: o,
      onCloseRequest: () => s.default.dispatch({
        type: "INVITE_MODAL_CLOSE"
      })
    })
  }
  handleCloseModal() {
    (0, a.closeModal)(o)
  }
}
var c = new d