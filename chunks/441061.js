n.d(t, {
  Z: function() {
    return c
  }
});
var l = n(735250);
n(470079);
var i = n(442837),
  s = n(481060),
  a = n(475179),
  r = n(358221),
  o = n(689938);

function c(e) {
  let t = (0, i.e7)([r.Z], () => r.Z.getVoiceParticipantsHidden(e));
  return (0, l.jsx)(s.MenuCheckboxItem, {
    id: "no-video-hide",
    label: o.Z.Messages.STREAM_SHOW_NON_VIDEO,
    checked: !t,
    action: () => a.Z.toggleVoiceParticipantsHidden(e, !t)
  })
}