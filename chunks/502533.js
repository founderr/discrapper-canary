"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
});
var l = n("37983");
n("884691");
var i = n("446674"),
  u = n("77078"),
  a = n("255397"),
  o = n("191145"),
  r = n("800762"),
  d = n("49111"),
  s = n("782340");

function c(e, t) {
  let n = (0, i.useStateFromStores)([o.default], () => e === o.default.getSelectedParticipantId(t), [t, e]),
    c = (0, i.useStateFromStores)([o.default, r.default], () => {
      let n = r.default.isInChannel(t, e) && r.default.hasVideo(t),
        l = o.default.getLayout(t),
        i = l === d.ChannelLayouts.MINIMUM || l === d.ChannelLayouts.NORMAL;
      return !n || i
    }, [t, e]);
  return c ? null : (0, l.jsx)(u.MenuItem, {
    id: "focus-video",
    label: n ? s.default.Messages.UNFOCUS_PARTICIPANT : s.default.Messages.FOCUS_PARTICIPANT,
    action: () => a.default.selectParticipant(t, n ? null : e)
  })
}