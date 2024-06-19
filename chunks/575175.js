n.d(t, {
  Z: function() {
    return c
  }
});
var l = n(735250);
n(470079);
var i = n(481060),
  s = n(846027),
  a = n(468026),
  r = n(503856),
  o = n(689938);

function c(e, t) {
  if (t && (0, r.p)()) {
    (0, i.openModalLazy)(async () => {
      let {
        default: e
      } = await Promise.all([n.e("99387"), n.e("41281")]).then(n.bind(n, 669732));
      return t => (0, l.jsx)(e, {
        ...t
      })
    });
    return
  }
  if (t) {
    (0, i.openModal)(e => (0, l.jsx)(a.default, {
      ...e,
      title: o.Z.Messages.SUPPRESSED,
      body: o.Z.Messages.SUPPRESSED_PERMISSION_BODY
    }));
    return
  }
  if (e) {
    (0, i.openModal)(e => (0, l.jsx)(a.default, {
      ...e,
      title: o.Z.Messages.SERVER_MUTED_DIALOG_TITLE,
      body: o.Z.Messages.SERVER_MUTED_DIALOG_BODY
    }));
    return
  }
  s.Z.toggleSelfMute()
}