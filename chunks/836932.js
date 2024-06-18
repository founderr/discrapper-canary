"use strict";
n.d(t, {
  Z: function() {
    return d
  }
});
var i = n(224706),
  s = n(13245),
  l = n(454902),
  o = n(150097),
  a = n(312839),
  r = n(987650),
  c = n(689938);

function d(e, t, n, d, u) {
  if (null == t.activity) return null;
  let h = t.activity.type,
    p = u.session_id;
  if (null == p) return null;
  let {
    icon: f,
    title: E,
    body: g
  } = (0, o.Xi)(e, t, n), {
    trackView: m,
    trackClick: Z
  } = (0, a.R)(r.n0.ActivityInvite, {
    notif_type: r.n0.ActivityInvite,
    notif_user_id: n.id,
    message_id: t.id,
    message_type: t.type,
    guild_id: e.guild_id,
    channel_id: e.id,
    channel_type: e.type,
    activity_type: h,
    activity_name: u.name
  });
  return {
    colorScheme: l.ZP.ColorSchemes.PRIMARY,
    icon: f,
    title: E,
    body: g,
    hint: e => (0, l.QR)(e, (0, a.P)(), c.Z.Messages.OVERLAY_UNLOCK_TO_JOIN),
    onNotificationShow: () => {
      m()
    },
    confirmText: c.Z.Messages.JOIN,
    onConfirmClick: (l, o) => {
      i.Z.join({
        userId: n.id,
        sessionId: p,
        applicationId: d.id,
        channelId: e.id,
        messageId: t.id
      }), s.Z.updateNotificationStatus(o), Z("join")
    },
    onDismissClick: () => {
      Z("dismiss")
    }
  }
}