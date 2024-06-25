n.d(t, {
  Z: function() {
    return u
  }
});
var s = n(735250);
n(470079);
var i = n(82950),
  l = n(434404),
  a = n(929507),
  r = n(981631),
  o = n(689938),
  c = n(943935);

function u(e) {
  let {
    guild: t
  } = e, n = () => a.Z.dismissNotice(t.id);
  return (0, s.jsx)(i.Z, {
    guild: t,
    onDismissed: n,
    cta: o.Z.Messages.CHECK_IT_OUT,
    message: o.Z.Messages.COMMANDS_SCOPE_MIGRATION_ADMIN_NOTICE.format(),
    type: r.vID.COMMANDS_MIGRATION,
    image: c,
    onClick: () => {
      n(), l.Z.open(t.id, r.pNK.INTEGRATIONS)
    },
    imageMarginTop: 15,
    imageMarginX: 22
  })
}