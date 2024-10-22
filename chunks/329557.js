var i = n(200651);
n(192379);
var l = n(481060),
    a = n(570140),
    r = n(317770),
    s = n(51596),
    o = n(823385),
    c = n(900085);
let u = 'QUICK_SWITCHER_MODAL_KEY';
class d extends r.Z {
    _initialize() {
        a.Z.subscribe('QUICKSWITCHER_SHOW', this.handleShow), a.Z.subscribe('QUICKSWITCHER_HIDE', this.handleHide);
    }
    _terminate() {
        a.Z.unsubscribe('QUICKSWITCHER_SHOW', this.handleShow), a.Z.unsubscribe('QUICKSWITCHER_HIDE', this.handleHide);
    }
    handleShow() {
        o.Z.isOpen() &&
            !(0, l.hasModalOpen)(u) &&
            (0, l.openModal)((e) => (0, i.jsx)(c.Z, { ...e }), {
                modalKey: u,
                instant: !0,
                onCloseCallback: s.Cp
            });
    }
    handleHide() {
        (0, l.closeModal)(u);
    }
}
t.Z = new d();
