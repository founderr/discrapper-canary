n.d(t, {
  Z: function() {
    return o
  }
});
var s = n(735250);
n(470079);
var i = n(481060),
  l = n(846027),
  a = n(468026),
  r = n(689938);

function o(e) {
  if (e) {
    (0, i.openModal)(e => (0, s.jsx)(a.default, {
      ...e,
      title: r.Z.Messages.SERVER_DEAFENED_DIALOG_TITLE,
      body: r.Z.Messages.SERVER_DEAFENED_DIALOG_BODY
    }));
    return
  }
  l.Z.toggleSelfDeaf()
}