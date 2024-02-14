"use strict";
n.r(t), n.d(t, {
  fetchDirectoryEntries: function() {
    return s
  }
});
var u = n("483366"),
  l = n.n(u),
  i = n("872717"),
  d = n("913144"),
  r = n("730647"),
  a = n("49111");
let s = l(async e => {
  try {
    d.default.dispatch({
      type: "EVENT_DIRECTORY_FETCH_START"
    });
    let t = await i.default.get({
      url: a.Endpoints.DIRECTORY_CHANNEL_ENTRIES(e),
      query: {
        type: r.DirectoryEntryTypes.GUILD_SCHEDULED_EVENT
      }
    });
    d.default.dispatch({
      type: "EVENT_DIRECTORY_FETCH_SUCCESS",
      channelId: e,
      entries: t.body
    })
  } catch (e) {
    d.default.dispatch({
      type: "EVENT_DIRECTORY_FETCH_FAILURE"
    })
  }
}, 200)