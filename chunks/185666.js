var i = n(200651);
n(192379);
var l = n(481060),
    r = n(570140),
    o = n(317770),
    a = n(472365),
    s = n(590965);
let c = 'INVITE_MODAL_KEY';
class u extends o.Z {
    _initialize() {
        r.Z.subscribe('INVITE_MODAL_OPEN', this.handleOpenModal), r.Z.subscribe('INVITE_MODAL_CLOSE', this.handleCloseModal);
    }
    _terminate() {
        (0, l.closeModal)(c), r.Z.unsubscribe('INVITE_MODAL_OPEN', this.handleOpenModal), r.Z.unsubscribe('INVITE_MODAL_CLOSE', this.handleCloseModal);
    }
    handleOpenModal() {
        s.Z.isOpen() &&
            !(0, l.hasModalOpen)(c) &&
            (0, l.openModal)((e) => (0, i.jsx)(a.Z, { ...e }), {
                modalKey: c,
                onCloseRequest: () => r.Z.dispatch({ type: 'INVITE_MODAL_CLOSE' })
            });
    }
    handleCloseModal() {
        (0, l.closeModal)(c);
    }
}
t.Z = new u();
