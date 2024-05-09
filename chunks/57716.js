"use strict";
i.r(t), i.d(t, {
  default: function() {
    return o
  }
}), i("47120");
var n = i("470079"),
  a = i("434650"),
  l = i("626135"),
  s = i("132871"),
  r = i("981631");

function o(e) {
  let {
    collection: t
  } = e, [i, o] = n.useState(!1), c = (0, s.useApplicationDirectoryHistory)(e => e.guildId), d = (0, a.useIsVisible)(e => {
    e && o(!0)
  });
  return n.useEffect(() => {
    i && l.default.track(r.AnalyticEvents.APP_DIRECTORY_COLLECTION_VIEWED, {
      collection_id: t.id,
      guild_id: c
    })
  }, [i, t, c]), d
}