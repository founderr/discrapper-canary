n.d(t, {
  c: function() {
    return c
  }
});
var l = n(954955),
  i = n.n(l),
  s = n(544891),
  a = n(570140),
  r = n(486527),
  o = n(981631);
let c = i()(async e => {
  try {
    a.Z.dispatch({
      type: "EVENT_DIRECTORY_FETCH_START"
    });
    let t = await s.tn.get({
      url: o.ANM.DIRECTORY_CHANNEL_ENTRIES(e),
      query: {
        type: r.C2.GUILD_SCHEDULED_EVENT
      }
    });
    a.Z.dispatch({
      type: "EVENT_DIRECTORY_FETCH_SUCCESS",
      channelId: e,
      entries: t.body
    })
  } catch (e) {
    a.Z.dispatch({
      type: "EVENT_DIRECTORY_FETCH_FAILURE"
    })
  }
}, 200)