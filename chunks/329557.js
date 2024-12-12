var i = n(200651);
n(192379);
var l = n(481060),
    r = n(570140),
    o = n(317770),
    a = n(51596),
    s = n(823385),
    c = n(900085);
let d = 'QUICK_SWITCHER_MODAL_KEY';
class u extends o.Z {
    _initialize() {
        r.Z.subscribe('QUICKSWITCHER_SHOW', this.handleShow), r.Z.subscribe('QUICKSWITCHER_HIDE', this.handleHide);
    }
    _terminate() {
        r.Z.unsubscribe('QUICKSWITCHER_SHOW', this.handleShow), r.Z.unsubscribe('QUICKSWITCHER_HIDE', this.handleHide);
    }
    handleShow() {
        s.Z.isOpen() &&
            !(0, l.hasModalOpen)(d) &&
            (0, l.openModal)((e) => (0, i.jsx)(c.Z, { ...e }), {
                modalKey: d,
                instant: !0,
                onCloseCallback: a.Cp
            });
    }
    handleHide() {
        (0, l.closeModal)(d);
    }
}
t.Z = new u();
