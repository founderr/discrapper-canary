t.d(n, {
  Z: function() {
    return s
  }
});
var i = t(735250);
t(470079);
var l = t(442837),
  r = t(481060),
  a = t(475179),
  u = t(358221),
  o = t(689938);

function s(e) {
  let n = (0, l.e7)([u.Z], () => u.Z.getVoiceParticipantsHidden(e));
  return (0, i.jsx)(r.MenuCheckboxItem, {
    id: "no-video-hide",
    label: o.Z.Messages.STREAM_SHOW_NON_VIDEO,
    checked: !n,
    action: () => a.Z.toggleVoiceParticipantsHidden(e, !n)
  })
}