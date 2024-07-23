n.d(t, {
  Z: function() {
return d;
  }
});
var i = n(735250);
n(470079);
var r = n(442837),
  a = n(481060),
  o = n(475179),
  s = n(358221),
  u = n(689938);

function d(e) {
  let t = (0, r.e7)([s.Z], () => s.Z.getVoiceParticipantsHidden(e));
  return (0, i.jsx)(a.MenuCheckboxItem, {
id: 'no-video-hide',
label: u.Z.Messages.STREAM_SHOW_NON_VIDEO,
checked: !t,
action: () => o.Z.toggleVoiceParticipantsHidden(e, !t)
  });
}