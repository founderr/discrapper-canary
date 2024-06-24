t.d(n, {
  Z: function() {
    return s
  }
});
var i = t(735250);
t(470079);
var a = t(481060),
  r = t(111618),
  l = t(730954),
  o = t(981631),
  u = t(689938);

function s(e, n) {
  return e.state !== o.yb.SEND_FAILED ? null : (0, i.jsx)(a.MenuItem, {
    id: "resend",
    label: u.Z.Messages.RESEND_MESSAGE,
    action: () => (0, l.Z)(n, e, void 0, r.Z.getOptions(e.id))
  })
}