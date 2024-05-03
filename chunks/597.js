"use strict";
n.r(t), n.d(t, {
  fetchDirectoryEntries: function() {
    return a
  }
});
var l = n("954955"),
  u = n.n(l),
  i = n("544891"),
  r = n("570140"),
  s = n("486527"),
  d = n("981631");
let a = u()(async e => {
  try {
    r.default.dispatch({
      type: "EVENT_DIRECTORY_FETCH_START"
    });
    let t = await i.HTTP.get({
      url: d.Endpoints.DIRECTORY_CHANNEL_ENTRIES(e),
      query: {
        type: s.DirectoryEntryTypes.GUILD_SCHEDULED_EVENT
      }
    });
    r.default.dispatch({
      type: "EVENT_DIRECTORY_FETCH_SUCCESS",
      channelId: e,
      entries: t.body
    })
  } catch (e) {
    r.default.dispatch({
      type: "EVENT_DIRECTORY_FETCH_FAILURE"
    })
  }
}, 200)