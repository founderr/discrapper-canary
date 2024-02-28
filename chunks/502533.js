"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
});
var l = n("37983");
n("884691");
var a = n("446674"),
  u = n("77078"),
  i = n("255397"),
  d = n("191145"),
  s = n("800762"),
  r = n("49111"),
  o = n("782340");

function c(e, t) {
  let n = (0, a.useStateFromStores)([d.default], () => e === d.default.getSelectedParticipantId(t), [t, e]),
    c = (0, a.useStateFromStores)([d.default, s.default], () => {
      let n = s.default.isInChannel(t, e) && s.default.hasVideo(t),
        l = d.default.getLayout(t),
        a = l === r.ChannelLayouts.MINIMUM || l === r.ChannelLayouts.NORMAL;
      return !n || a
    }, [t, e]);
  return c ? null : (0, l.jsx)(u.MenuItem, {
    id: "focus-video",
    label: n ? o.default.Messages.UNFOCUS_PARTICIPANT : o.default.Messages.FOCUS_PARTICIPANT,
    action: () => i.default.selectParticipant(t, n ? null : e)
  })
}