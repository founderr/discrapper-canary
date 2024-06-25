var s = n(735250);
n(470079);
var i = n(481060),
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
    (0, i.openModal)(e => (0, s.jsx)(i.ConfirmModal, {
      ...e,
      header: r.Z.Messages.POGGERMODE_TEMPORARILY_DISABLED_TOAST_TITLE,
      confirmText: r.Z.Messages.CONFIRM,
      confirmButtonColor: i.Button.Colors.GREEN,
      children: (0, s.jsx)(i.Text, {
        variant: "text-md/normal",
        children: r.Z.Messages.POGGERMODE_TEMPORARILY_DISABLED_TOAST_BODY
      })
    }))
  }
}
t.Z = new o