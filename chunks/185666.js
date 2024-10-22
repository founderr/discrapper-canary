var i = n(200651);
n(192379);
var l = n(481060),
    a = n(570140),
    r = n(317770),
    s = n(472365),
    o = n(590965);
let c = 'INVITE_MODAL_KEY';
class u extends r.Z {
    _initialize() {
        a.Z.subscribe('INVITE_MODAL_OPEN', this.handleOpenModal), a.Z.subscribe('INVITE_MODAL_CLOSE', this.handleCloseModal);
    }
    _terminate() {
        (0, l.closeModal)(c), a.Z.unsubscribe('INVITE_MODAL_OPEN', this.handleOpenModal), a.Z.unsubscribe('INVITE_MODAL_CLOSE', this.handleCloseModal);
    }
    handleOpenModal() {
        o.Z.isOpen() &&
            !(0, l.hasModalOpen)(c) &&
            (0, l.openModal)((e) => (0, i.jsx)(s.Z, { ...e }), {
                modalKey: c,
                onCloseRequest: () => a.Z.dispatch({ type: 'INVITE_MODAL_CLOSE' })
            });
    }
    handleCloseModal() {
        (0, l.closeModal)(c);
    }
}
t.Z = new u();
