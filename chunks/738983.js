"use strict";
n.r(t), n.d(t, {
  startStageInstance: function() {
    return a
  },
  updateStageInstance: function() {
    return l
  },
  endStageInstance: function() {
    return r
  }
});
var u = n("872717"),
  i = n("49111");
async function a(e, t, n, a, l) {
  let r = await u.default.post({
    url: i.Endpoints.STAGE_INSTANCES,
    body: {
      channel_id: e,
      topic: t,
      privacy_level: n,
      guild_scheduled_event_id: l,
      send_start_notification: a
    }
  });
  return r.body
}
async function l(e, t, n) {
  let a = await u.default.patch({
    url: i.Endpoints.STAGE_INSTANCE(e),
    body: {
      topic: t,
      privacy_level: n
    }
  });
  return a.body
}

function r(e) {
  return u.default.delete(i.Endpoints.STAGE_INSTANCE(e))
}