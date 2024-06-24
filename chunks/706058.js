t.d(n, {
  Dk: function() {
    return a
  },
  Ix: function() {
    return u
  },
  me: function() {
    return s
  }
});
var E = t(544891),
  _ = t(981631);
async function s(e, n, t, s, a) {
  return (await E.tn.post({
    url: _.ANM.STAGE_INSTANCES,
    body: {
      channel_id: e,
      topic: n,
      privacy_level: t,
      guild_scheduled_event_id: a,
      send_start_notification: s
    }
  })).body
}
async function a(e, n, t) {
  return (await E.tn.patch({
    url: _.ANM.STAGE_INSTANCE(e),
    body: {
      topic: n,
      privacy_level: t
    }
  })).body
}

function u(e) {
  return E.tn.del(_.ANM.STAGE_INSTANCE(e))
}