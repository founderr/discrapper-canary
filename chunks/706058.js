"use strict";
n.r(t), n.d(t, {
  endStageInstance: function() {
    return o
  },
  startStageInstance: function() {
    return l
  },
  updateStageInstance: function() {
    return r
  }
});
var i = n("544891"),
  a = n("981631");
async function l(e, t, n, l, r) {
  return (await i.HTTP.post({
    url: a.Endpoints.STAGE_INSTANCES,
    body: {
      channel_id: e,
      topic: t,
      privacy_level: n,
      guild_scheduled_event_id: r,
      send_start_notification: l
    }
  })).body
}
async function r(e, t, n) {
  return (await i.HTTP.patch({
    url: a.Endpoints.STAGE_INSTANCE(e),
    body: {
      topic: t,
      privacy_level: n
    }
  })).body
}

function o(e) {
  return i.HTTP.del(a.Endpoints.STAGE_INSTANCE(e))
}