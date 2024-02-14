"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
});
var u = n("37983");
n("884691");
var a = n("446674"),
  i = n("77078"),
  l = n("255397"),
  r = n("191145"),
  d = n("800762"),
  o = n("49111"),
  s = n("782340");

function c(e, t) {
  let n = (0, a.useStateFromStores)([r.default], () => e === r.default.getSelectedParticipantId(t), [t, e]),
    c = (0, a.useStateFromStores)([r.default, d.default], () => {
      let n = d.default.isInChannel(t, e) && d.default.hasVideo(t),
        u = r.default.getLayout(t),
        a = u === o.ChannelLayouts.MINIMUM || u === o.ChannelLayouts.NORMAL;
      return !n || a
    }, [t, e]);
  return c ? null : (0, u.jsx)(i.MenuItem, {
    id: "focus-video",
    label: n ? s.default.Messages.UNFOCUS_PARTICIPANT : s.default.Messages.FOCUS_PARTICIPANT,
    action: () => l.default.selectParticipant(t, n ? null : e)
  })
}