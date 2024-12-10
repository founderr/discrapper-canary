var i = n(200651);
n(192379);
var l = n(481060),
    r = n(570140),
    a = n(317770),
    o = n(51596),
    s = n(823385),
    c = n(900085);
let u = 'QUICK_SWITCHER_MODAL_KEY';
class d extends a.Z {
    _initialize() {
        r.Z.subscribe('QUICKSWITCHER_SHOW', this.handleShow), r.Z.subscribe('QUICKSWITCHER_HIDE', this.handleHide);
    }
    _terminate() {
        r.Z.unsubscribe('QUICKSWITCHER_SHOW', this.handleShow), r.Z.unsubscribe('QUICKSWITCHER_HIDE', this.handleHide);
    }
    handleShow() {
        s.Z.isOpen() &&
            !(0, l.hasModalOpen)(u) &&
            (0, l.openModal)((e) => (0, i.jsx)(c.Z, { ...e }), {
                modalKey: u,
                instant: !0,
                onCloseCallback: o.Cp
            });
    }
    handleHide() {
        (0, l.closeModal)(u);
    }
}
t.Z = new d();
