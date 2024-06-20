var r = i(735250);
i(470079);
var t = i(481060),
  l = i(689938);
n.Z = {
  openSecureFramesUserVerificationModal: function(e, n) {
    (0, t.openModalLazy)(async () => {
      let t = (await Promise.all([i.e("99387"), i.e("33397")]).then(i.bind(i, 963410))).default;
      return i => (0, r.jsx)(t, {
        userId: e,
        channelId: n,
        ...i
      })
    })
  },
  openSecureFramesUpdateConfirmation: function(e) {
    let {
      title: n,
      subtitle: a,
      onConfirm: s
    } = e;
    (0, t.openModalLazy)(async () => {
      let {
        ConfirmModal: e
      } = await Promise.resolve().then(i.bind(i, 481060));
      return i => (0, r.jsx)(e, {
        header: n,
        confirmText: l.Z.Messages.CONFIRM,
        cancelText: l.Z.Messages.CANCEL,
        onConfirm: s,
        ...i,
        children: (0, r.jsx)(t.Text, {
          variant: "text-sm/normal",
          color: "header-secondary",
          children: a
        })
      })
    })
  }
}