i.d(n, {
  Z: function() {
    return o
  }
});
var l = i(735250);
i(470079);
var t = i(442837),
  u = i(481060),
  r = i(475179),
  s = i(358221),
  a = i(979651),
  d = i(981631),
  Z = i(689938);

function o(e, n) {
  let i = (0, t.e7)([s.Z], () => e === s.Z.getSelectedParticipantId(n), [n, e]);
  return (0, t.e7)([s.Z, a.Z], () => {
    let i = a.Z.isInChannel(n, e) && a.Z.hasVideo(n),
      l = s.Z.getLayout(n),
      t = l === d.AEg.MINIMUM || l === d.AEg.NORMAL;
    return !i || t
  }, [n, e]) ? null : (0, l.jsx)(u.MenuItem, {
    id: "focus-video",
    label: i ? Z.Z.Messages.UNFOCUS_PARTICIPANT : Z.Z.Messages.FOCUS_PARTICIPANT,
    action: () => r.Z.selectParticipant(n, i ? null : e)
  })
}