n.d(t, {
  Z: function() {
    return o
  }
});
var r = n(735250);
n(470079);
var u = n(442837),
  l = n(481060),
  a = n(223245),
  i = n(246946),
  s = n(689938);

function o() {
  let e = (0, u.e7)([i.Z], () => i.Z.enabled, []);
  return (0, r.jsx)(l.MenuCheckboxItem, {
    id: "streamer-mode-toggle",
    label: s.Z.Messages.ENABLE_STREAMER_MODE_LABEL,
    action: () => {
      a.Z.setEnabled(!e)
    },
    checked: e
  })
}