var i = n(200651);
n(192379);
var l = n(481060),
    a = n(570140),
    r = n(468026),
    s = n(317770),
    o = n(689938);
let c = 'ActivityInviteManager',
    u = () => {
        a.Z.dispatch({ type: 'ACTIVITY_INVITE_MODAL_CLOSE' });
    };
class d extends s.Z {
    _initialize() {
        a.Z.subscribe('ACTIVITY_INVITE_MODAL_OPEN', this.handleModalOpen), a.Z.subscribe('ACTIVITY_INVITE_MODAL_CLOSE', this.handleModalClose);
    }
    _terminate() {
        a.Z.unsubscribe('ACTIVITY_INVITE_MODAL_OPEN', this.handleModalOpen), a.Z.unsubscribe('ACTIVITY_INVITE_MODAL_CLOSE', this.handleModalClose);
    }
    handleModalOpen(e) {
        let { activity: t, isPrivate: a } = e;
        a
            ? (0, l.openModal)(
                  (e) =>
                      (0, i.jsx)(r.default, {
                          title: o.Z.Messages.ACTIVITY_INVITE_MODAL_HEADER.format({ name: t.name }),
                          body: o.Z.Messages.ACTIVITY_INVITE_PRIVATE,
                          confirmText: o.Z.Messages.OKAY,
                          ...e
                      }),
                  {
                      onCloseCallback: u,
                      modalKey: c
                  }
              )
            : (0, l.openModalLazy)(
                  async () => {
                      let { default: e } = await n.e('79921').then(n.bind(n, 699099));
                      return (t) => (0, i.jsx)(e, { ...t });
                  },
                  {
                      onCloseCallback: u,
                      modalKey: c
                  }
              );
    }
    handleModalClose(e) {
        (0, l.closeModal)(c);
    }
}
t.Z = new d();
