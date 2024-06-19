var i = n(735250);
n(470079);
var s = n(481060),
  l = n(570140),
  a = n(317770);
let r = "CONNECTIONS_GRID_MODAL_KEY";
class o extends a.Z {
  _initialize() {
    l.Z.subscribe("CONNECTIONS_GRID_MODAL_SHOW", this.handleShow), l.Z.subscribe("CONNECTIONS_GRID_MODAL_HIDE", this.handleHide)
  }
  _terminate() {
    l.Z.unsubscribe("CONNECTIONS_GRID_MODAL_SHOW", this.handleShow), l.Z.unsubscribe("CONNECTIONS_GRID_MODAL_HIDE", this.handleHide)
  }
  handleShow(e) {
    let {
      onComplete: t,
      excludedPlatformTypes: l,
      includedPlatformTypes: a,
      integrations: o,
      onCompleteApplication: c
    } = e;
    !(0, s.hasModalOpen)(r) && (0, s.openModalLazy)(async () => {
      let {
        default: e
      } = await Promise.all([n.e("99387"), n.e("28538")]).then(n.bind(n, 51299));
      return n => (0, i.jsx)(e, {
        onComplete: t,
        excludedPlatformTypes: l,
        includedPlatformTypes: a,
        integrations: o,
        onCompleteApplication: c,
        ...n
      })
    })
  }
  handleHide() {
    (0, s.closeModal)(r)
  }
}
t.Z = new o