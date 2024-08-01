n.d(t, {
  Z: function() {
return o;
  }
});
var i = n(735250);
n(470079);
var a = n(481060),
  s = n(358085),
  r = n(998502),
  l = n(689938);

function o(e, t) {
  return s.isPlatformEmbedded && (null == e ? void 0 : e.length) !== 0 ? (0, i.jsx)(a.MenuItem, {
id: 'copy',
label: l.Z.Messages.COPY,
hint: (0, s.isMac)() ? '\u2318C' : 'Ctrl+C',
action: () => {
  r.ZP.copy(e), null == t || t.focus();
}
  }) : null;
}