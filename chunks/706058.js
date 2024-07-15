t.d(e, {
  Dk: function() {
return r;
  },
  Ix: function() {
return a;
  },
  me: function() {
return l;
  }
});
var i = t(544891),
  u = t(981631);
async function l(n, e, t, l, r) {
  return (await i.tn.post({
url: u.ANM.STAGE_INSTANCES,
body: {
  channel_id: n,
  topic: e,
  privacy_level: t,
  guild_scheduled_event_id: r,
  send_start_notification: l
}
  })).body;
}
async function r(n, e, t) {
  return (await i.tn.patch({
url: u.ANM.STAGE_INSTANCE(n),
body: {
  topic: e,
  privacy_level: t
}
  })).body;
}

function a(n) {
  return i.tn.del(u.ANM.STAGE_INSTANCE(n));
}