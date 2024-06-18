"use strict";
n.d(t, {
  Z: function() {
    return c
  }
});
var i = n(454902),
  s = n(768581),
  l = n(312839),
  o = n(981631),
  a = n(987650),
  r = n(689938);

function c(e, t) {
  let n = e.username,
    c = r.Z.Messages.USER_ACTIVITY_USER_JOIN.format({
      username: ""
    }),
    d = (0, s.ov)(e),
    {
      trackView: u,
      trackClick: h
    } = (0, l.R)(a.n0.ActivityUserJoin, {
      notif_type: a.n0.ActivityUserJoin,
      notif_user_id: e.id,
      activity_type: o.mFx.JOIN,
      activity_name: t.name
    });
  return {
    colorScheme: i.ZP.ColorSchemes.PRIMARY,
    icon: d,
    title: n,
    body: c,
    hint: e => (0, i.Yj)(e, r.Z.Messages.USER_ACTIVITY_USER_JOIN_HINT),
    onNotificationShow: () => {
      u()
    },
    onDismissClick: () => {
      h("dismiss")
    }
  }
}