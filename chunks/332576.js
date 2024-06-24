t.d(n, {
  Z: function() {
    return c
  }
});
var i = t(735250);
t(470079);
var l = t(442837),
  r = t(481060),
  u = t(475179),
  a = t(358221),
  o = t(979651),
  s = t(981631),
  d = t(689938);

function c(e, n) {
  let t = (0, l.e7)([a.Z], () => e === a.Z.getSelectedParticipantId(n), [n, e]);
  return (0, l.e7)([a.Z, o.Z], () => {
    let t = o.Z.isInChannel(n, e) && o.Z.hasVideo(n),
      i = a.Z.getLayout(n),
      l = i === s.AEg.MINIMUM || i === s.AEg.NORMAL;
    return !t || l
  }, [n, e]) ? null : (0, i.jsx)(r.MenuItem, {
    id: "focus-video",
    label: t ? d.Z.Messages.UNFOCUS_PARTICIPANT : d.Z.Messages.FOCUS_PARTICIPANT,
    action: () => u.Z.selectParticipant(n, t ? null : e)
  })
}