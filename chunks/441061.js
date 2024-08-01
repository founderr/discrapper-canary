n.d(t, {
  Z: function() {
return I;
  }
});
var i = n(735250);
n(470079);
var r = n(442837),
  a = n(481060),
  s = n(475179),
  o = n(358221),
  d = n(689938);

function I(e) {
  let t = (0, r.e7)([o.Z], () => o.Z.getVoiceParticipantsHidden(e));
  return (0, i.jsx)(a.MenuCheckboxItem, {
id: 'no-video-hide',
label: d.Z.Messages.STREAM_SHOW_NON_VIDEO,
checked: !t,
action: () => s.Z.toggleVoiceParticipantsHidden(e, !t)
  });
}