"use strict";
a.r(t), a.d(t, {
  default: function() {
    return f
  }
});
var l = a("735250");
a("470079");
var u = a("442837"),
  d = a("481060"),
  s = a("475179"),
  n = a("358221"),
  i = a("979651"),
  r = a("981631"),
  o = a("689938");

function f(e, t) {
  let a = (0, u.useStateFromStores)([n.default], () => e === n.default.getSelectedParticipantId(t), [t, e]);
  return (0, u.useStateFromStores)([n.default, i.default], () => {
    let a = i.default.isInChannel(t, e) && i.default.hasVideo(t),
      l = n.default.getLayout(t),
      u = l === r.ChannelLayouts.MINIMUM || l === r.ChannelLayouts.NORMAL;
    return !a || u
  }, [t, e]) ? null : (0, l.jsx)(d.MenuItem, {
    id: "focus-video",
    label: a ? o.default.Messages.UNFOCUS_PARTICIPANT : o.default.Messages.FOCUS_PARTICIPANT,
    action: () => s.default.selectParticipant(t, a ? null : e)
  })
}