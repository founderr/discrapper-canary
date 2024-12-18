var s = n(200651);
n(192379);
var i = n(481060),
    r = n(570140),
    o = n(317770),
    l = n(175281),
    a = n(285371);
class c extends o.Z {
    _initialize() {
        r.Z.subscribe('SHOW_KEYBOARD_SHORTCUTS', this.showKeyboardShortcuts), r.Z.subscribe('HIDE_KEYBOARD_SHORTCUTS', this.hideKeyboardShortcuts);
    }
    _terminate() {
        r.Z.unsubscribe('SHOW_KEYBOARD_SHORTCUTS', this.showKeyboardShortcuts), r.Z.unsubscribe('HIDE_KEYBOARD_SHORTCUTS', this.hideKeyboardShortcuts);
    }
    showKeyboardShortcuts() {
        (0, i.openModal)((e) => (0, s.jsx)(l.Z, { ...e }), { modalKey: a.J });
    }
    hideKeyboardShortcuts() {
        (0, i.closeModal)(a.J);
    }
}
t.Z = new c();
