n.d(t, {
  Z: function() {
    return l
  }
});
var r = n(735250);
n(470079);
var u = n(442837),
  s = n(481060),
  a = n(223245),
  o = n(246946),
  i = n(689938);

function l() {
  let e = (0, u.e7)([o.Z], () => o.Z.enabled, []);
  return (0, r.jsx)(s.MenuCheckboxItem, {
    id: "streamer-mode-toggle",
    label: i.Z.Messages.ENABLE_STREAMER_MODE_LABEL,
    action: () => {
      a.Z.setEnabled(!e)
    },
    checked: e
  })
}