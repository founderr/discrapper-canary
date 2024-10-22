var i = n(200651);
n(192379);
var l = n(481060),
    a = n(570140),
    r = n(317770),
    s = n(175281),
    o = n(285371);
class c extends r.Z {
    _initialize() {
        a.Z.subscribe('SHOW_KEYBOARD_SHORTCUTS', this.showKeyboardShortcuts), a.Z.subscribe('HIDE_KEYBOARD_SHORTCUTS', this.hideKeyboardShortcuts);
    }
    _terminate() {
        a.Z.unsubscribe('SHOW_KEYBOARD_SHORTCUTS', this.showKeyboardShortcuts), a.Z.unsubscribe('HIDE_KEYBOARD_SHORTCUTS', this.hideKeyboardShortcuts);
    }
    showKeyboardShortcuts() {
        (0, l.openModal)((e) => (0, i.jsx)(s.Z, { ...e }), { modalKey: o.J });
    }
    hideKeyboardShortcuts() {
        (0, l.closeModal)(o.J);
    }
}
t.Z = new c();
