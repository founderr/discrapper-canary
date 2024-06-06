"use strict";
n.r(t), n.d(t, {
  endStageInstance: function() {
    return r
  },
  startStageInstance: function() {
    return i
  },
  updateStageInstance: function() {
    return l
  }
});
var a = n("544891"),
  s = n("981631");
async function i(e, t, n, i, l) {
  return (await a.HTTP.post({
    url: s.Endpoints.STAGE_INSTANCES,
    body: {
      channel_id: e,
      topic: t,
      privacy_level: n,
      guild_scheduled_event_id: l,
      send_start_notification: i
    }
  })).body
}
async function l(e, t, n) {
  return (await a.HTTP.patch({
    url: s.Endpoints.STAGE_INSTANCE(e),
    body: {
      topic: t,
      privacy_level: n
    }
  })).body
}

function r(e) {
  return a.HTTP.del(s.Endpoints.STAGE_INSTANCE(e))
}