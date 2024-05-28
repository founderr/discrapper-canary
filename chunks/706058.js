"use strict";
n.r(t), n.d(t, {
  endStageInstance: function() {
    return l
  },
  startStageInstance: function() {
    return s
  },
  updateStageInstance: function() {
    return a
  }
});
var r = n("544891"),
  i = n("981631");
async function s(e, t, n, s, a) {
  return (await r.HTTP.post({
    url: i.Endpoints.STAGE_INSTANCES,
    body: {
      channel_id: e,
      topic: t,
      privacy_level: n,
      guild_scheduled_event_id: a,
      send_start_notification: s
    }
  })).body
}
async function a(e, t, n) {
  return (await r.HTTP.patch({
    url: i.Endpoints.STAGE_INSTANCE(e),
    body: {
      topic: t,
      privacy_level: n
    }
  })).body
}

function l(e) {
  return r.HTTP.del(i.Endpoints.STAGE_INSTANCE(e))
}