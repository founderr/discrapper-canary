i.d(n, {
  Z: function() {
    return Z
  }
});
var r = i(735250);
i(470079);
var t = i(442837),
  l = i(481060),
  a = i(475179),
  s = i(358221),
  u = i(979651),
  d = i(981631),
  o = i(689938);

function Z(e, n) {
  let i = (0, t.e7)([s.Z], () => e === s.Z.getSelectedParticipantId(n), [n, e]);
  return (0, t.e7)([s.Z, u.Z], () => {
    let i = u.Z.isInChannel(n, e) && u.Z.hasVideo(n),
      r = s.Z.getLayout(n),
      t = r === d.AEg.MINIMUM || r === d.AEg.NORMAL;
    return !i || t
  }, [n, e]) ? null : (0, r.jsx)(l.MenuItem, {
    id: "focus-video",
    label: i ? o.Z.Messages.UNFOCUS_PARTICIPANT : o.Z.Messages.FOCUS_PARTICIPANT,
    action: () => a.Z.selectParticipant(n, i ? null : e)
  })
}