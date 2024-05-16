"use strict";
n.r(t), n.d(t, {
  fetchDirectoryEntries: function() {
    return s
  }
});
var u = n("954955"),
  l = n.n(u),
  i = n("544891"),
  r = n("570140"),
  d = n("486527"),
  a = n("981631");
let s = l()(async e => {
  try {
    r.default.dispatch({
      type: "EVENT_DIRECTORY_FETCH_START"
    });
    let t = await i.HTTP.get({
      url: a.Endpoints.DIRECTORY_CHANNEL_ENTRIES(e),
      query: {
        type: d.DirectoryEntryTypes.GUILD_SCHEDULED_EVENT
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