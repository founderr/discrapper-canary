var l = n(735250);
n(470079);
var i = n(481060),
  s = n(570140),
  r = n(317770),
  a = n(175281),
  o = n(285371);
class u extends r.Z {
  _initialize() {
    s.Z.subscribe("SHOW_KEYBOARD_SHORTCUTS", this.showKeyboardShortcuts), s.Z.subscribe("HIDE_KEYBOARD_SHORTCUTS", this.hideKeyboardShortcuts)
  }
  _terminate() {
    s.Z.unsubscribe("SHOW_KEYBOARD_SHORTCUTS", this.showKeyboardShortcuts), s.Z.unsubscribe("HIDE_KEYBOARD_SHORTCUTS", this.hideKeyboardShortcuts)
  }
  showKeyboardShortcuts() {
    (0, i.openModal)(e => (0, l.jsx)(a.Z, {
      ...e
    }), {
      modalKey: o.J
    })
  }
  hideKeyboardShortcuts() {
    (0, i.closeModal)(o.J)
  }
}
t.Z = new u