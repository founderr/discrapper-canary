var i = t(735250);
t(470079);
var l = t(481060),
  r = t(689938);
n.Z = {
  openSecureFramesUserVerificationModal: function(e, n) {
    (0, l.openModalLazy)(async () => {
      let l = (await Promise.all([t.e("99387"), t.e("33397")]).then(t.bind(t, 963410))).default;
      return t => (0, i.jsx)(l, {
        userId: e,
        channelId: n,
        ...t
      })
    })
  },
  openSecureFramesUpdateConfirmation: function(e) {
    let {
      title: n,
      subtitle: u,
      onConfirm: a
    } = e;
    (0, l.openModalLazy)(async () => {
      let {
        ConfirmModal: e
      } = await Promise.resolve().then(t.bind(t, 481060));
      return t => (0, i.jsx)(e, {
        header: n,
        confirmText: r.Z.Messages.CONFIRM,
        cancelText: r.Z.Messages.CANCEL,
        onConfirm: a,
        ...t,
        children: (0, i.jsx)(l.Text, {
          variant: "text-sm/normal",
          color: "header-secondary",
          children: u
        })
      })
    })
  }
}