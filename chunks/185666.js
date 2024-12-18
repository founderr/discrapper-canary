var s = n(200651);
n(192379);
var i = n(481060),
    r = n(570140),
    o = n(317770),
    l = n(472365),
    a = n(590965);
let c = 'INVITE_MODAL_KEY';
class u extends o.Z {
    _initialize() {
        r.Z.subscribe('INVITE_MODAL_OPEN', this.handleOpenModal), r.Z.subscribe('INVITE_MODAL_CLOSE', this.handleCloseModal);
    }
    _terminate() {
        (0, i.closeModal)(c), r.Z.unsubscribe('INVITE_MODAL_OPEN', this.handleOpenModal), r.Z.unsubscribe('INVITE_MODAL_CLOSE', this.handleCloseModal);
    }
    handleOpenModal() {
        a.Z.isOpen() &&
            !(0, i.hasModalOpen)(c) &&
            (0, i.openModal)((e) => (0, s.jsx)(l.Z, { ...e }), {
                modalKey: c,
                onCloseRequest: () => r.Z.dispatch({ type: 'INVITE_MODAL_CLOSE' })
            });
    }
    handleCloseModal() {
        (0, i.closeModal)(c);
    }
}
t.Z = new u();
