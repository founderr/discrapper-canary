t(411104);
var n = t(735250);
t(470079);
var a = t(481060),
  i = t(689938);
s.Z = {
  openSecureFramesUserVerificationModal: function(e, s) {
    (0, a.openModalLazy)(async () => {
      let a = (await t.e("33397").then(t.bind(t, 963410))).default;
      return t => (0, n.jsx)(a, {
        userId: e,
        channelId: s,
        ...t
      })
    })
  },
  openSecureFramesUpdateConfirmation: function(e) {
    let {
      title: s,
      subtitle: r,
      onConfirm: o
    } = e;
    (0, a.openModalLazy)(async () => {
      let {
        ConfirmModal: e
      } = await Promise.resolve().then(t.bind(t, 481060));
      return t => (0, n.jsx)(e, {
        header: s,
        confirmText: i.Z.Messages.CONFIRM,
        cancelText: i.Z.Messages.CANCEL,
        onConfirm: o,
        ...t,
        children: (0, n.jsx)(a.Text, {
          variant: "text-sm/normal",
          color: "header-secondary",
          children: r
        })
      })
    })
  },
  handleSecureFramesUserVerificationLink: function(e) {
    throw Error("handleSecureFramesUserVerificationLink not implemented")
  }
}