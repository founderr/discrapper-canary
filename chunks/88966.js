n.d(t, {
  Z: function() {
return c;
  }
});
var i = n(735250);
n(470079);
var r = n(481060),
  a = n(493683),
  s = n(37234),
  o = n(314897),
  d = n(981631),
  I = n(689938);

function c(e, t) {
  let n = o.default.getId(),
c = t === d.IlC.POPOUT;
  return n === e || c ? null : (0, i.jsx)(r.MenuItem, {
id: 'message-user',
label: I.Z.Messages.USER_POPOUT_MESSAGE,
action: () => {
  a.Z.openPrivateChannel(e), (0, s.xf)();
}
  });
}