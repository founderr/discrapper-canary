var i = n(735250);
n(470079);
var s = n(481060),
  l = n(570140),
  a = n(317770),
  r = n(689938);
class o extends a.Z {
  _initialize() {
    l.Z.subscribe("POGGERMODE_TEMPORARILY_DISABLED", this.handlePoggermodeTemporarilyDisabled)
  }
  _terminate() {
    l.Z.unsubscribe("POGGERMODE_TEMPORARILY_DISABLED", this.handlePoggermodeTemporarilyDisabled)
  }
  handlePoggermodeTemporarilyDisabled() {
    (0, s.openModal)(e => (0, i.jsx)(s.ConfirmModal, {
      ...e,
      header: r.Z.Messages.POGGERMODE_TEMPORARILY_DISABLED_TOAST_TITLE,
      confirmText: r.Z.Messages.CONFIRM,
      confirmButtonColor: s.Button.Colors.GREEN,
      children: (0, i.jsx)(s.Text, {
        variant: "text-md/normal",
        children: r.Z.Messages.POGGERMODE_TEMPORARILY_DISABLED_TOAST_BODY
      })
    }))
  }
}
t.Z = new o