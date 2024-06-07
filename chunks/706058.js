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
var i = n("544891"),
  r = n("981631");
async function s(e, t, n, s, a) {
  return (await i.HTTP.post({
    url: r.Endpoints.STAGE_INSTANCES,
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
  return (await i.HTTP.patch({
    url: r.Endpoints.STAGE_INSTANCE(e),
    body: {
      topic: t,
      privacy_level: n
    }
  })).body
}

function l(e) {
  return i.HTTP.del(r.Endpoints.STAGE_INSTANCE(e))
}