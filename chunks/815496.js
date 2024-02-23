"use strict";
E.r(_), E.d(_, {
  trackQuestEvent: function() {
    return n
  }
});
var t = E("599110"),
  o = E("2973");

function n(e, _, E) {
  let n = o.default.quests.get(e);
  if (null != n && !n.preview) {
    var r;
    t.default.track(_, {
      quest_id: (r = n).id,
      game_id: r.config.applicationId,
      game_name: r.config.applicationName,
      ...E
    })
  }
}