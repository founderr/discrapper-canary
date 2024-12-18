var s = n(200651);
n(192379);
var i = n(481060),
    r = n(570140),
    o = n(317770),
    l = n(51596),
    a = n(823385),
    c = n(900085);
let u = 'QUICK_SWITCHER_MODAL_KEY';
class d extends o.Z {
    _initialize() {
        r.Z.subscribe('QUICKSWITCHER_SHOW', this.handleShow), r.Z.subscribe('QUICKSWITCHER_HIDE', this.handleHide);
    }
    _terminate() {
        r.Z.unsubscribe('QUICKSWITCHER_SHOW', this.handleShow), r.Z.unsubscribe('QUICKSWITCHER_HIDE', this.handleHide);
    }
    handleShow() {
        a.Z.isOpen() &&
            !(0, i.hasModalOpen)(u) &&
            (0, i.openModal)((e) => (0, s.jsx)(c.Z, { ...e }), {
                modalKey: u,
                instant: !0,
                onCloseCallback: l.Cp
            });
    }
    handleHide() {
        (0, i.closeModal)(u);
    }
}
t.Z = new d();
