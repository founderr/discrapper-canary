"use strict";
n.r(t), n.d(t, {
  endStageInstance: function() {
    return l
  },
  startStageInstance: function() {
    return a
  },
  updateStageInstance: function() {
    return r
  }
});
var i = n("544891"),
  s = n("981631");
async function a(e, t, n, a, r) {
  return (await i.HTTP.post({
    url: s.Endpoints.STAGE_INSTANCES,
    body: {
      channel_id: e,
      topic: t,
      privacy_level: n,
      guild_scheduled_event_id: r,
      send_start_notification: a
    }
  })).body
}
async function r(e, t, n) {
  return (await i.HTTP.patch({
    url: s.Endpoints.STAGE_INSTANCE(e),
    body: {
      topic: t,
      privacy_level: n
    }
  })).body
}

function l(e) {
  return i.HTTP.del(s.Endpoints.STAGE_INSTANCE(e))
}