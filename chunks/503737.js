var l = n(735250);
n(470079);
var i = n(481060),
  s = n(570140),
  r = n(468026),
  a = n(317770),
  o = n(689938);
let u = "ActivityInviteManager",
  c = () => {
    s.Z.dispatch({
      type: "ACTIVITY_INVITE_MODAL_CLOSE"
    })
  };
class d extends a.Z {
  _initialize() {
    s.Z.subscribe("ACTIVITY_INVITE_MODAL_OPEN", this.handleModalOpen), s.Z.subscribe("ACTIVITY_INVITE_MODAL_CLOSE", this.handleModalClose)
  }
  _terminate() {
    s.Z.unsubscribe("ACTIVITY_INVITE_MODAL_OPEN", this.handleModalOpen), s.Z.unsubscribe("ACTIVITY_INVITE_MODAL_CLOSE", this.handleModalClose)
  }
  handleModalOpen(e) {
    let {
      activity: t,
      isPrivate: s
    } = e;
    s ? (0, i.openModal)(e => (0, l.jsx)(r.default, {
      title: o.Z.Messages.ACTIVITY_INVITE_MODAL_HEADER.format({
        name: t.name
      }),
      body: o.Z.Messages.ACTIVITY_INVITE_PRIVATE,
      confirmText: o.Z.Messages.OKAY,
      ...e
    }), {
      onCloseCallback: c,
      modalKey: u
    }) : (0, i.openModalLazy)(async () => {
      let {
        default: e
      } = await Promise.all([n.e("99387"), n.e("79921")]).then(n.bind(n, 699099));
      return t => (0, l.jsx)(e, {
        ...t
      })
    }, {
      onCloseCallback: c,
      modalKey: u
    })
  }
  handleModalClose(e) {
    (0, i.closeModal)(u)
  }
}
t.Z = new d