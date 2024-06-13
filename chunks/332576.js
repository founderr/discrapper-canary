"use strict";
a.r(t), a.d(t, {
  default: function() {
    return f
  }
});
var u = a("735250");
a("470079");
var l = a("442837"),
  s = a("481060"),
  d = a("475179"),
  n = a("358221"),
  r = a("979651"),
  i = a("981631"),
  o = a("689938");

function f(e, t) {
  let a = (0, l.useStateFromStores)([n.default], () => e === n.default.getSelectedParticipantId(t), [t, e]);
  return (0, l.useStateFromStores)([n.default, r.default], () => {
    let a = r.default.isInChannel(t, e) && r.default.hasVideo(t),
      u = n.default.getLayout(t),
      l = u === i.ChannelLayouts.MINIMUM || u === i.ChannelLayouts.NORMAL;
    return !a || l
  }, [t, e]) ? null : (0, u.jsx)(s.MenuItem, {
    id: "focus-video",
    label: a ? o.default.Messages.UNFOCUS_PARTICIPANT : o.default.Messages.FOCUS_PARTICIPANT,
    action: () => d.default.selectParticipant(t, a ? null : e)
  })
}