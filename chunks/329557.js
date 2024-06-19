var l = n(735250);
n(470079);
var i = n(481060),
  s = n(570140),
  r = n(317770),
  a = n(51596),
  o = n(823385),
  u = n(900085);
let c = "QUICK_SWITCHER_MODAL_KEY";
class d extends r.Z {
  _initialize() {
    s.Z.subscribe("QUICKSWITCHER_SHOW", this.handleShow), s.Z.subscribe("QUICKSWITCHER_HIDE", this.handleHide)
  }
  _terminate() {
    s.Z.unsubscribe("QUICKSWITCHER_SHOW", this.handleShow), s.Z.unsubscribe("QUICKSWITCHER_HIDE", this.handleHide)
  }
  handleShow() {
    o.Z.isOpen() && !(0, i.hasModalOpen)(c) && (0, i.openModal)(e => (0, l.jsx)(u.Z, {
      ...e
    }), {
      modalKey: c,
      instant: !0,
      onCloseCallback: a.Cp
    })
  }
  handleHide() {
    (0, i.closeModal)(c)
  }
}
t.Z = new d