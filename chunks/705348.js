n.d(t, {
  Z: function() {
    return u
  }
});
var i = n(735250);
n(470079);
var s = n(82950),
  l = n(63063),
  a = n(981631),
  r = n(921944),
  o = n(689938),
  c = n(157476);

function u(e) {
  let {
    guild: t,
    markAsDismissed: n
  } = e;
  return (0, i.jsx)(s.Z, {
    image: c,
    guild: t,
    onDismissed: () => n(r.L.UNKNOWN),
    onClick: () => {
      open(l.Z.getArticleURL(a.BhN.CONNECTION_DETAILS)), n(r.L.UNKNOWN)
    },
    title: o.Z.Messages.LINKED_ROLES_ADMIN_NUX_TITLE,
    message: o.Z.Messages.LINKED_ROLES_ADMIN_NUX_CONTENT,
    cta: o.Z.Messages.LEARN_MORE,
    trackingSource: a.PsQ.LINKED_ROLES_ADMIN_NUX,
    type: a.vID.LINKED_ROLES_ADMIN
  })
}