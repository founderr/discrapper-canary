E.d(n, {
  Dk: function() {
    return a
  },
  Ix: function() {
    return r
  },
  me: function() {
    return s
  }
});
var t = E(544891),
  _ = E(981631);
async function s(e, n, E, s, a) {
  return (await t.tn.post({
    url: _.ANM.STAGE_INSTANCES,
    body: {
      channel_id: e,
      topic: n,
      privacy_level: E,
      guild_scheduled_event_id: a,
      send_start_notification: s
    }
  })).body
}
async function a(e, n, E) {
  return (await t.tn.patch({
    url: _.ANM.STAGE_INSTANCE(e),
    body: {
      topic: n,
      privacy_level: E
    }
  })).body
}

function r(e) {
  return t.tn.del(_.ANM.STAGE_INSTANCE(e))
}