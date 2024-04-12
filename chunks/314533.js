"use strict";
a.r(t);
var n = a("735250");
a("470079");
var s = a("481060"),
  l = a("570140"),
  i = a("317770");
let r = "CONNECTIONS_GRID_MODAL_KEY";
class o extends i.default {
  _initialize() {
    l.default.subscribe("CONNECTIONS_GRID_MODAL_SHOW", this.handleShow), l.default.subscribe("CONNECTIONS_GRID_MODAL_HIDE", this.handleHide)
  }
  _terminate() {
    l.default.unsubscribe("CONNECTIONS_GRID_MODAL_SHOW", this.handleShow), l.default.unsubscribe("CONNECTIONS_GRID_MODAL_HIDE", this.handleHide)
  }
  handleShow(e) {
    let {
      onComplete: t,
      excludedPlatformTypes: l,
      integrations: i,
      onCompleteApplication: o
    } = e;
    !(0, s.hasModalOpen)(r) && (0, s.openModalLazy)(async () => {
      let {
        default: e
      } = await Promise.all([a.e("99387"), a.e("28538")]).then(a.bind(a, "51299"));
      return a => (0, n.jsx)(e, {
        onComplete: t,
        excludedPlatformTypes: l,
        integrations: i,
        onCompleteApplication: o,
        ...a
      })
    })
  }
  handleHide() {
    (0, s.closeModal)(r)
  }
}
t.default = new o