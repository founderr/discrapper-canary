n.d(t, {
  Z: function() {
return c;
  }
});
var i = n(735250);
n(470079);
var s = n(481060),
  a = n(111618),
  r = n(730954),
  l = n(981631),
  o = n(689938);

function c(e, t) {
  return e.state !== l.yb.SEND_FAILED ? null : (0, i.jsx)(s.MenuItem, {
id: 'resend',
label: o.Z.Messages.RESEND_MESSAGE,
action: () => (0, r.Z)(t, e, void 0, a.Z.getOptions(e.id))
  });
}