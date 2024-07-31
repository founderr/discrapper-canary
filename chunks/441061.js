t.d(n, {
  Z: function() {
return u;
  }
});
var i = t(735250);
t(470079);
var r = t(442837),
  a = t(481060),
  s = t(475179),
  l = t(358221),
  o = t(689938);

function u(e) {
  let n = (0, r.e7)([l.Z], () => l.Z.getVoiceParticipantsHidden(e));
  return (0, i.jsx)(a.MenuCheckboxItem, {
id: 'no-video-hide',
label: o.Z.Messages.STREAM_SHOW_NON_VIDEO,
checked: !n,
action: () => s.Z.toggleVoiceParticipantsHidden(e, !n)
  });
}