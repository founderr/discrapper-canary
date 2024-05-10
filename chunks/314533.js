"use strict";
n.r(t);
var a = n("735250");
n("470079");
var s = n("481060"),
  i = n("570140"),
  l = n("317770");
let r = "CONNECTIONS_GRID_MODAL_KEY";
class o extends l.default {
  _initialize() {
    i.default.subscribe("CONNECTIONS_GRID_MODAL_SHOW", this.handleShow), i.default.subscribe("CONNECTIONS_GRID_MODAL_HIDE", this.handleHide)
  }
  _terminate() {
    i.default.unsubscribe("CONNECTIONS_GRID_MODAL_SHOW", this.handleShow), i.default.unsubscribe("CONNECTIONS_GRID_MODAL_HIDE", this.handleHide)
  }
  handleShow(e) {
    let {
      onComplete: t,
      excludedPlatformTypes: i,
      integrations: l,
      onCompleteApplication: o
    } = e;
    !(0, s.hasModalOpen)(r) && (0, s.openModalLazy)(async () => {
      let {
        default: e
      } = await Promise.all([n.e("99387"), n.e("28538")]).then(n.bind(n, "51299"));
      return n => (0, a.jsx)(e, {
        onComplete: t,
        excludedPlatformTypes: i,
        integrations: l,
        onCompleteApplication: o,
        ...n
      })
    })
  }
  handleHide() {
    (0, s.closeModal)(r)
  }
}
t.default = new o