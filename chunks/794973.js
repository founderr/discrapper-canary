t.d(n, {
  Z: function() {
    return s
  }
});
var i = t(735250);
t(470079);
var l = t(481060),
  a = t(493683),
  r = t(592125),
  u = t(689938);

function s(e, n) {
  let t = r.Z.getChannel(e);
  return null == t || t.isMultiUserDM() ? null : (0, i.jsx)(l.MenuItem, {
    id: "close-dm",
    label: u.Z.Messages.CLOSE_DM,
    action: () => a.Z.closePrivateChannel(e, n)
  })
}