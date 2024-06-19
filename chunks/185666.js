var l = n(735250);
n(470079);
var i = n(481060),
  s = n(570140),
  r = n(317770),
  a = n(472365),
  o = n(590965);
let u = "INVITE_MODAL_KEY";
class c extends r.Z {
  _initialize() {
    s.Z.subscribe("INVITE_MODAL_OPEN", this.handleOpenModal), s.Z.subscribe("INVITE_MODAL_CLOSE", this.handleCloseModal)
  }
  _terminate() {
    (0, i.closeModal)(u), s.Z.unsubscribe("INVITE_MODAL_OPEN", this.handleOpenModal), s.Z.unsubscribe("INVITE_MODAL_CLOSE", this.handleCloseModal)
  }
  handleOpenModal() {
    o.Z.isOpen() && !(0, i.hasModalOpen)(u) && (0, i.openModal)(e => (0, l.jsx)(a.Z, {
      ...e
    }), {
      modalKey: u,
      onCloseRequest: () => s.Z.dispatch({
        type: "INVITE_MODAL_CLOSE"
      })
    })
  }
  handleCloseModal() {
    (0, i.closeModal)(u)
  }
}
t.Z = new c