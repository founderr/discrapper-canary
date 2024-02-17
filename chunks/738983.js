"use strict";
n.r(t), n.d(t, {
  startStageInstance: function() {
    return i
  },
  updateStageInstance: function() {
    return l
  },
  endStageInstance: function() {
    return r
  }
});
var u = n("872717"),
  a = n("49111");
async function i(e, t, n, i, l) {
  let r = await u.default.post({
    url: a.Endpoints.STAGE_INSTANCES,
    body: {
      channel_id: e,
      topic: t,
      privacy_level: n,
      guild_scheduled_event_id: l,
      send_start_notification: i
    }
  });
  return r.body
}
async function l(e, t, n) {
  let i = await u.default.patch({
    url: a.Endpoints.STAGE_INSTANCE(e),
    body: {
      topic: t,
      privacy_level: n
    }
  });
  return i.body
}

function r(e) {
  return u.default.delete(a.Endpoints.STAGE_INSTANCE(e))
}