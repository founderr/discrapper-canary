"use strict";
a.r(t), a.d(t, {
  default: function() {
    return f
  }
});
var u = a("735250");
a("470079");
var l = a("442837"),
  n = a("481060"),
  s = a("475179"),
  d = a("358221"),
  r = a("979651"),
  i = a("981631"),
  o = a("689938");

function f(e, t) {
  let a = (0, l.useStateFromStores)([d.default], () => e === d.default.getSelectedParticipantId(t), [t, e]);
  return (0, l.useStateFromStores)([d.default, r.default], () => {
    let a = r.default.isInChannel(t, e) && r.default.hasVideo(t),
      u = d.default.getLayout(t),
      l = u === i.ChannelLayouts.MINIMUM || u === i.ChannelLayouts.NORMAL;
    return !a || l
  }, [t, e]) ? null : (0, u.jsx)(n.MenuItem, {
    id: "focus-video",
    label: a ? o.default.Messages.UNFOCUS_PARTICIPANT : o.default.Messages.FOCUS_PARTICIPANT,
    action: () => s.default.selectParticipant(t, a ? null : e)
  })
}