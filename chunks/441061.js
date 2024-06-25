t.d(n, {
  Z: function() {
    return s
  }
});
var i = t(735250);
t(470079);
var r = t(442837),
  l = t(481060),
  u = t(475179),
  a = t(358221),
  o = t(689938);

function s(e) {
  let n = (0, r.e7)([a.Z], () => a.Z.getVoiceParticipantsHidden(e));
  return (0, i.jsx)(l.MenuCheckboxItem, {
    id: "no-video-hide",
    label: o.Z.Messages.STREAM_SHOW_NON_VIDEO,
    checked: !n,
    action: () => u.Z.toggleVoiceParticipantsHidden(e, !n)
  })
}