"use strict";
n.r(t), n.d(t, {
  startStageInstance: function() {
    return a
  },
  updateStageInstance: function() {
    return i
  },
  endStageInstance: function() {
    return d
  }
});
var l = n("872717"),
  u = n("49111");
async function a(e, t, n, a, i) {
  let d = await l.default.post({
    url: u.Endpoints.STAGE_INSTANCES,
    body: {
      channel_id: e,
      topic: t,
      privacy_level: n,
      guild_scheduled_event_id: i,
      send_start_notification: a
    }
  });
  return d.body
}
async function i(e, t, n) {
  let a = await l.default.patch({
    url: u.Endpoints.STAGE_INSTANCE(e),
    body: {
      topic: t,
      privacy_level: n
    }
  });
  return a.body
}

function d(e) {
  return l.default.delete(u.Endpoints.STAGE_INSTANCE(e))
}