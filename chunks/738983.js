"use strict";
n.r(t), n.d(t, {
  startStageInstance: function() {
    return l
  },
  updateStageInstance: function() {
    return i
  },
  endStageInstance: function() {
    return u
  }
});
var a = n("872717"),
  s = n("49111");
async function l(e, t, n, l, i) {
  let u = await a.default.post({
    url: s.Endpoints.STAGE_INSTANCES,
    body: {
      channel_id: e,
      topic: t,
      privacy_level: n,
      guild_scheduled_event_id: i,
      send_start_notification: l
    }
  });
  return u.body
}
async function i(e, t, n) {
  let l = await a.default.patch({
    url: s.Endpoints.STAGE_INSTANCE(e),
    body: {
      topic: t,
      privacy_level: n
    }
  });
  return l.body
}

function u(e) {
  return a.default.delete(s.Endpoints.STAGE_INSTANCE(e))
}