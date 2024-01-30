"use strict";
n.r(t), n.d(t, {
  getDirectoryEntryBroadcastInfo: function() {
    return i
  }
});
var l = n("872717"),
  a = n("49111");
async function i(e, t, n) {
  let i = await l.default.get({
    url: a.Endpoints.DIRECTORY_ENTRIES_BROADCAST_INFO(e),
    query: {
      type: t,
      entity_id: n
    }
  });
  return i.body
}