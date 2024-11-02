var i = n(200651);
n(192379);
var l = n(481060),
    r = n(570140),
    a = n(468026),
    o = n(317770),
    s = n(388032);
let c = 'ActivityInviteManager',
    u = () => {
        r.Z.dispatch({ type: 'ACTIVITY_INVITE_MODAL_CLOSE' });
    };
class d extends o.Z {
    _initialize() {
        r.Z.subscribe('ACTIVITY_INVITE_MODAL_OPEN', this.handleModalOpen), r.Z.subscribe('ACTIVITY_INVITE_MODAL_CLOSE', this.handleModalClose);
    }
    _terminate() {
        r.Z.unsubscribe('ACTIVITY_INVITE_MODAL_OPEN', this.handleModalOpen), r.Z.unsubscribe('ACTIVITY_INVITE_MODAL_CLOSE', this.handleModalClose);
    }
    handleModalOpen(e) {
        let { activity: t, isPrivate: r } = e;
        r
            ? (0, l.openModal)(
                  (e) =>
                      (0, i.jsx)(a.default, {
                          title: s.intl.formatToPlainString(s.t['2tN7io'], { name: t.name }),
                          body: s.intl.string(s.t.MAxtkp),
                          confirmText: s.intl.string(s.t.BddRzc),
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
